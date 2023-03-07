<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\ListModel;
use App\Models\ListWord;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        if(app()->environment('production'))
            return;

        $user = User::where('email', 'test@example.com')->get();
        if($user->isEmpty()) {
            User::factory()->create([
                'name' => 'Test User',
                'email' => 'test@example.com',
            ]);
        }

        ListModel::factory(10)->create();
        ListWord::factory(50)->create();
    }
}
