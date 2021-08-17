<?php

namespace Tests\Unit;

use App\Models\Holder;
use App\Models\Policy;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class HolderTest extends TestCase
{
    use RefreshDatabase;

    public function test_a_holder_can_have_many_policies()
    {
        $holder = Holder::factory()->create();
        $holder->policies()->attach(Policy::factory()->create());
        $holder->policies()->attach(Policy::factory()->create());

        $this->assertCount(2, $holder->policies);
    }

    public function test_a_holder_can_be_created()
    {
        Holder::factory()->create();

        $this->assertCount(1, Holder::all());
    }
}
