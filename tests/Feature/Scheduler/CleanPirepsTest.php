<?php

namespace Tests\Feature\Scheduler;

use App\Models\Aircraft;
use App\Models\Contract;
use App\Models\Fleet;
use App\Models\Pirep;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CleanPirepsTest extends TestCase
{
    use RefreshDatabase;

    protected Model $user;
    protected Model $pirep;
    protected Model $contract;
    protected Model $fleet;
    protected Model $aircraft;

    protected function setUp(): void
    {
        parent::setUp(); // TODO: Change the autogenerated stub
        $this->user = User::factory()->create([
            'rank_id' => 1,
            'flights_time' => 299,
            'points' => 49,
            'created_at' => Carbon::now()->addYears(-2)
        ]);
        $this->fleet = Fleet::factory()->create();
        $this->aircraft = Aircraft::factory()->create([
            'fleet_id' => $this->fleet->id,
            'fuel_onboard' => 50,
            'current_airport_id' => 'AYMR',
            'user_id' => $this->user->id
        ]);

        $this->contract = Contract::factory()->create([
            'contract_value' => 250.00,
            'dep_airport_id' => 'AYMR',
            'arr_airport_id' => 'AYMN'
        ]);

        $this->pirep = Pirep::factory()->create([
            'user_id' => $this->user->id,
            'destination_airport_id' => $this->contract->arr_airport_id,
            'departure_airport_id' => $this->contract->dep_airport_id,
            'aircraft_id' => $this->aircraft->id,
            'created_at' => Carbon::now()
        ]);
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_call_is_made_successfully()
    {

        $response = $this->withHeaders([
            'X-TOKEN' => env('SCHEDULER_TOKEN')
        ])->postJson('/api/schedule/pireps/clean');
        $response->assertStatus(200);
    }

    public function test_call_fails_on_auth()
    {

        $response = $this->withHeaders([
        ])->postJson('/api/schedule/pireps/clean');
        $response->assertStatus(401);
    }
}
