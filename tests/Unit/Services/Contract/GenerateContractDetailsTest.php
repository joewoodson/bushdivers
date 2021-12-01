<?php

namespace Tests\Unit\Services\Contract;

use App\Models\Airport;
use App\Services\Contracts\GenerateContractDetails;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

class GenerateContractDetailsTest extends TestCase
{
    use RefreshDatabase;

    protected GenerateContractDetails $generateContractDetails;
    protected Model $airport1;
    protected Model $airport2;
    protected Model $origin;

    protected function setUp(): void
    {
        parent::setUp(); // TODO: Change the autogenerated stub
        DB::table('cargo_types')->insert([
            ['type' => 1, 'text' => 'Solar Panels'],
            ['type' => 1, 'text' => 'Building materials'],
            ['type' => 2, 'text' => 'Medics'],
            ['type' => 2, 'text' => 'Locals'],
        ]);
        $this->airport1 = Airport::factory()->create([
            'identifier' => 'AYMN',
            'name' => 'Mendi',
            'country' => 'PG',
            'is_hub' => false,
            'lat' => -6.14617,
            'lon' => 143.65733,
            'altitude' => 100
        ]);
        $this->airport2 = Airport::factory()->create([
            'identifier' => 'AYFO',
            'name' => 'Fogomaiu Airstrip',
            'country' => 'PG',
            'is_hub' => false,
            'lat' => -6.50917,
            'lon' => 143.07904,
            'altitude' => 100
        ]);
        $this->origin = Airport::factory()->create();
        $this->generateContractDetails = $this->app->make(GenerateContractDetails::class);
    }
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_contract_generates_successfully()
    {
        $airports = collect([$this->airport1, $this->airport2]);
        $this->generateContractDetails->execute($this->origin, $airports);
        $this->assertDatabaseHas('contracts', [
            'dep_airport_id' => $this->origin->identifier,
            'arr_airport_id' => $this->airport1->identifier
        ]);
    }

    public function test_contract_cargo_generates_successfully()
    {
        $airports = collect([$this->airport1, $this->airport2]);
        $this->generateContractDetails->execute($this->origin, $airports);
        $this->assertDatabaseHas('contract_cargos', [
            'current_airport_id' => $this->origin->identifier
        ]);
    }
}
