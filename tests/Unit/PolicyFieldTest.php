<?php

namespace Tests\Unit;

use App\Models\Holder;
use App\Models\Policy;
use App\Models\PolicyField;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PolicyFieldTest extends TestCase
{
    use RefreshDatabase;
    
    public function test_a_field_can_be_protected()
    {
        $field = PolicyField::factory()->for(Policy::factory()->create())->create();
        $field->refresh();

        $this->assertTrue($field->is_protected);
    }
}
