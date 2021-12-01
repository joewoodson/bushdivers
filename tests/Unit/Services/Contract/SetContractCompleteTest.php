<?php

namespace Tests\Unit\Services\Contract;

use App\Models\Contract;
use App\Models\ContractCargo;
use App\Services\Contracts\CheckForContractCompletion;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

class SetContractCompleteTest extends TestCase
{
    use RefreshDatabase;

    protected CheckForContractCompletion $checkForContractCompletion;
    protected Model $contract;
    protected Model $contractCargo;

    protected function setUp(): void
    {
        parent::setUp(); // TODO: Change the autogenerated stub
        DB::table('cargo_types')->insert([
            ['type' => 1, 'text' => 'Solar Panels'],
            ['type' => 1, 'text' => 'Building materials'],
            ['type' => 2, 'text' => 'Medics'],
            ['type' => 2, 'text' => 'Locals'],
        ]);
        $this->checkForContractCompletion = $this->app->make(CheckForContractCompletion::class);

        $this->contract = Contract::factory()->create();
        ContractCargo::factory()->count(2)->create([
            'contract_id' => $this->contract->id,
            'current_airport_id' => $this->contract->dep_airport_id
        ]);
    }
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_contract_completed_when_all_cargo_delivered()
    {
        ContractCargo::where('contract_id', $this->contract->id)->update(['is_completed' => true, 'completed_at' => Carbon::now()]);

        $this->checkForContractCompletion->execute($this->contract);
        $this->assertDatabaseHas('contracts', [
            'id' => $this->contract->id,
            'is_completed' => true
        ]);
    }

    public function test_contract_not_completed_when_not_all_cargo_delivered()
    {
        $cargo = ContractCargo::where('contract_id', $this->contract->id)->first();
        $cargo->is_completed = true;
        $cargo->completed_at = Carbon::now();

        $this->checkForContractCompletion->execute($this->contract);
        $this->assertDatabaseHas('contracts', [
            'id' => $this->contract->id,
            'is_completed' => false
        ]);
    }
}
