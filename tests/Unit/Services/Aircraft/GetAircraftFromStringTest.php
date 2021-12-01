<?php

namespace Tests\Unit\Services\Aircraft;

//use PHPUnit\Framework\TestCase;
use App\Models\Aircraft;
use App\Models\Fleet;
use App\Services\Aircraft\GetAircraftFromString;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class GetAircraftFromStringTest extends TestCase
{

    use RefreshDatabase;
    protected GetAircraftFromString $getAircraftFromString;
    protected Model $aircraft;
    protected Model $fleet;

    public function setUp(): void
    {
        parent::setUp(); // TODO: Change the autogenerated stub
        $this->fleet = Fleet::factory()->create();
        $this->aircraft = Aircraft::factory()->create([
            'fleet_id' => $this->fleet->id
        ]);

        $this->getAircraftFromString = $this->app->make(GetAircraftFromString::class);
    }
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_correct_registration_is_returned()
    {
        $aircraftString = $this->fleet->name.' - '.$this->aircraft->registration;

        $aircraft = $this->getAircraftFromString->execute($aircraftString);

        $this->assertEquals($this->aircraft->registration, $aircraft->registration);
    }

    public function test_returns_null_for_missing_aircraft()
    {
        $aircraftString = $this->fleet->name.' - P2-GHH';
        $aircraft = $this->getAircraftFromString->execute($aircraftString);
        $this->assertNull($aircraft);
    }
}
