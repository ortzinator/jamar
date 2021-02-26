<?php

namespace Tests;

use App\Models\User;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Illuminate\Support\Arr;
use Illuminate\Testing\Assert;
use Illuminate\Testing\TestResponse;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    protected function setUp(): void
    {
        parent::setUp();

        TestResponse::macro('props', function ($propKey = null) {
            $props = json_decode(json_encode($this->original->getData()['page']['props']), JSON_OBJECT_AS_ARRAY);

            if ($propKey) {
                return Arr::get($props, $propKey);
            }

            return $props;
        });

        TestResponse::macro('assertPropExists', function ($propKey) {
            Assert::assertTrue(Arr::has($this->props(), $propKey), 'The given prop was not found');

            return $this;
        });

        TestResponse::macro('assertPropNotNull', function ($propKey) {
            $this->assertPropExists($propKey);

            Assert::assertNotNull($this->props($propKey));

            return $this;
        });

        TestResponse::macro('assertPropEquals', function ($expected, $propKey) {
            $this->assertPropExists($propKey);

            if (is_callable($expected)) {
                $expected($this->props($propKey));
            } else {
                Assert::assertEquals($this->props($propKey), $expected);
            }

            return $this;
        });

        TestResponse::macro('assertPropCount', function ($count, $propKey) {
            $this->assertPropExists($propKey);

            Assert::assertCount($count, $this->props($propKey));

            return $this;
        });
    }

    public function signIn($admin = false)
    {
        return $this->actingAs(User::factory()->create(['role_id' => $admin ? 3 : 1]));
    }
}
