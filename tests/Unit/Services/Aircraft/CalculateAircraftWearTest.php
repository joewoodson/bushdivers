<?php

namespace Tests\Unit\Services\Aircraft;

use App\Models\Aircraft;
use App\Models\AircraftEngine;
use App\Models\Fleet;
use App\Services\Aircraft\CalculateAircraftWear;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CalculateAircraftWearTest extends TestCase
{
    use RefreshDatabase;

    protected Model $aircraft;
    protected Model $aircraftEngine;
    protected Model $fleet;
    protected CalculateAircraftWear $calculateAircraftWear;

    protected function setUp(): void
    {
        parent::setUp(); // TODO: Change the autogenerated stub
        $this->fleet = Fleet::factory()->create();

        $this->calculateAircraftWear = $this->app->make(CalculateAircraftWear::class);
    }
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_new_aircraft_wear()
    {
        $aircraft = Aircraft::factory()->create([
            'fleet_id' => $this->fleet->id,
            'wear' => 100,
            'flight_time_mins' => 0
        ]);
        $aircraftEngine = AircraftEngine::factory()->create([
            'aircraft_id' => $aircraft->id,
            'wear' => 100
        ]);

        $wear = $this->calculateAircraftWear->execute($aircraft);
        $this->assertEquals(0.7, $wear);
    }

    public function test_low_aircraft_wear()
    {
        $aircraft = Aircraft::factory()->create([
            'fleet_id' => $this->fleet->id,
            'wear' => 70,
            'flight_time_mins' => 1000
        ]);
        $aircraftEngine = AircraftEngine::factory()->create([
            'aircraft_id' => $aircraft->id,
            'wear' => 70
        ]);

        $wear = $this->calculateAircraftWear->execute($aircraft);
        $this->assertEquals(1, $wear);
    }

    public function test_mid_aircraft_wear()
    {
        $aircraft = Aircraft::factory()->create([
            'fleet_id' => $this->fleet->id,
            'wear' => 50,
            'flight_time_mins' => 1000
        ]);
        $aircraftEngine = AircraftEngine::factory()->create([
            'aircraft_id' => $aircraft->id,
            'wear' => 50
        ]);

        $wear = $this->calculateAircraftWear->execute($aircraft);
        $this->assertEquals(1.6, $wear);
    }

    public function test_poor_aircraft_wear()
    {
        $aircraft = Aircraft::factory()->create([
            'fleet_id' => $this->fleet->id,
            'wear' => 15,
            'flight_time_mins' => 1000
        ]);
        $aircraftEngine = AircraftEngine::factory()->create([
            'aircraft_id' => $aircraft->id,
            'wear' => 15
        ]);

        $wear = $this->calculateAircraftWear->execute($aircraft);
        $this->assertEquals(2.2, $wear);
    }

    public function test_old_aircraft_wear()
    {
        $aircraft = Aircraft::factory()->create([
            'fleet_id' => $this->fleet->id,
            'wear' => 90,
            'flight_time_mins' => 1500000
        ]);
        $aircraftEngine = AircraftEngine::factory()->create([
            'aircraft_id' => $aircraft->id,
            'wear' => 90
        ]);

        $wear = $this->calculateAircraftWear->execute($aircraft);
        $this->assertEquals(1.7, $wear);
    }
}
