<?php

namespace App\Services\Contracts;

use App\Models\Airport;
use App\Models\Contract;
use App\Models\Enums\ContractConsts;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class FindAirportsInNeedOfContracts
{
    protected GenerateContracts $generateContracts;

    public function __construct(GenerateContracts $generateContracts)
    {
        $this->generateContracts = $generateContracts;
    }

    public function execute($region)
    {

        // find all airports in specified area
        try {
            $airports = DB::select('CALL GetAirportsForArea(?)', array($region));

            foreach ($airports as $airport) {
                $currentJobs = Contract::where('dep_airport_id', $airport->identifier)
                    ->where('is_available', true)
                    ->where('expires_at', '>', Carbon::now())
                    ->count();

                if ($currentJobs < ContractConsts::MAX_QTY_JOBS) {
                    $numberToGenerate = ContractConsts::MAX_QTY_JOBS - $currentJobs;
                    $this->generateContracts->execute($airport, $numberToGenerate);
                }
            }
        }
        catch (\Exception $e) {
            Log::channel('single')->debug($e->getMessage(), ['where' => 'Finding airports for contract generation']);
        }
    }
}
