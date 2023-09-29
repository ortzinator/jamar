<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePolicyTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('policies', function (Blueprint $table) {
            $table->id();
            $table
                ->string('number')
                ->index()
                ->unique();
            $table->timestamp('period_start');
            $table->timestamp('period_end');
            $table->timestamp('cancelled_at')->nullable();
            $table->json('fields')->nullable();
            $table->foreignId('agent_id');
            $table->bigInteger('premium')->nullable();
            $table->string('currency')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }
}
