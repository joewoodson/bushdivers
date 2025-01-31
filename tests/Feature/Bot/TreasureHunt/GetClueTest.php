<?php

namespace Tests\Feature\Bot\TreasureHunt;

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Tests\TestCase;

class GetClueTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp(); // TODO: Change the autogenerated stub
        Schema::connection('sqlite')->create('th_clues', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('clue_order');
            $table->text('clue');
            $table->string('answer');
        });

        DB::table('th_clues')->insert([
            ['clue_order' => 1, 'clue' => 'First Clue', 'answer' => 'AYMR'],
            ['clue_order' => 2, 'clue' => 'Second Clue', 'answer' => 'AYMH'],
        ]);
    }
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_get_clue_for_existing_clue()
    {
        $headers = ['X-TOKEN' => env('BOT_TOKEN')];
        $response = $this->getJson('/api/bot/treasure/clue/1', $headers);

        $response->assertStatus(200);
        $response->assertJson([
            'clue' => 'First Clue'
        ]);
    }

    public function test_get_clue_for_non_existing_clue()
    {
        $headers = ['X-TOKEN' => env('BOT_TOKEN')];
        $response = $this->getJson('/api/bot/treasure/clue/4', $headers);

        $response->assertStatus(404);
        $response->assertJson([
            'message' => 'no more clues'
        ]);
    }
}
