<?php

namespace Tests\Feature;

use App\Models\Policy;
use Carbon\Carbon;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class WidgetsTest extends TestCase
{
    use RefreshDatabase;

    public function test_ending_soon_or_past_due()
    {
        $this->signIn(true);

        $today = Carbon::now()->isoFormat('YYYY-MM-DD');
        $foreverAgo = Carbon::createFromTimestamp(1)->isoFormat('YYYY-MM-DD');
        $twoDaysAgo = Carbon::now()->subDays(2)->isoFormat('YYYY-MM-DD');
        $twoDaysFromNow = Carbon::now()->addDays(2)->isoFormat('YYYY-MM-DD');
        $aWeekFromNow = Carbon::now()->addWeek()->isoFormat('YYYY-MM-DD');
        $aWeekAgo = Carbon::now()->subWeek()->isoFormat('YYYY-MM-DD');
        $twoWeeksFromNow = Carbon::now()->addWeeks(2)->isoFormat('YYYY-MM-DD');

        Policy::factory()->create([
            'period_start' => $twoDaysAgo,
            'period_end' => $twoDaysFromNow
        ]);
        Policy::factory()->create([
            'period_start' => $aWeekAgo,
            'period_end' => $twoDaysAgo
        ]);

        $this->getJson("/policies/?orderBy=period_end&start={$foreverAgo}&end={$aWeekFromNow}")
            ->assertJsonCount(2);
        
        $this->getJson("/policies/?orderBy=period_end&start={$aWeekFromNow}&end={$twoWeeksFromNow}")
            ->assertJsonCount(0);
    }
}
