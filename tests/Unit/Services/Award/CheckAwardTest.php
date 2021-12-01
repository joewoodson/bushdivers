<?php

namespace Tests\Unit\Services\Award;

use App\Models\User;
use App\Services\Awards\AddAwardToUser;
use App\Services\Awards\CheckAwardStatus;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

class CheckAwardTest extends TestCase
{
    use RefreshDatabase;

    protected Model $user;
    protected AddAwardToUser $addAwardToUser;
    protected CheckAwardStatus $checkAwardStatus;

    protected function setUp(): void
    {
        parent::setUp(); // TODO: Change the autogenerated stub
        Artisan::call('db:seed --class=RankSeeder');
        Artisan::call('db:seed --class=AwardSeeder');
        $this->user = User::factory()->create([
            'rank_id' => 1,
            'flights' => 50,
            'flights_time' => 50,
            'created_at' => Carbon::now()->addYears(-2)
        ]);

        $this->addAwardToUser = $this->app->make(AddAwardToUser::class);
        $this->checkAwardStatus = $this->app->make(CheckAwardStatus::class);

    }

    public function test_award_added_to_db()
    {
        $this->addAwardToUser->execute($this->user->id, 3);
        $this->assertDatabaseHas('award_user', [
            'user_id' => $this->user->id,
            'award_id' => 3
        ]);
    }

    public function test_flight_number_award_is_added()
    {
        $this->checkAwardStatus->execute($this->user->id);
        $this->assertDatabaseHas('award_user', [
            'user_id' => $this->user->id,
            'award_id' => 3
        ]);
    }

    public function test_flight_hours_award_is_added()
    {
        $this->checkAwardStatus->execute($this->user->id);
        $this->assertDatabaseHas('award_user', [
            'user_id' => $this->user->id,
            'award_id' => 4
        ]);
    }

    public function test_service_award_is_added()
    {
        $this->checkAwardStatus->execute($this->user->id);
        $this->assertDatabaseHas('award_user', [
            'user_id' => $this->user->id,
            'award_id' => 1
        ]);
    }

    public function test_award_not_given_if_already_awarded()
    {
        DB::table('award_user')->insert([
            'user_id' => $this->user->id,
            'award_id' => 3
        ]);
        $this->checkAwardStatus->execute($this->user->id);
        $awards = DB::table('award_user')->where('award_id', 3)->where('user_id', $this->user->id)->get();
        $this->assertEquals(1, $awards->count());
    }


}
