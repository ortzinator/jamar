<?php

namespace Tests\Unit;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserTest extends TestCase
{
    use RefreshDatabase;

    public function test_a_user_has_a_role()
    {
        $user = User::factory()->makeOne();

        $this->assertNotNull($user->role_id);

        $this->assertEquals('user', $user->role());
        $this->assertEquals(1, $user->role_id);
        
        $user = User::factory()->makeOne(['role_id' => 3]);
        
        $this->assertEquals('admin', $user->role());
        $this->assertEquals(3, $user->role_id);
    }
}
