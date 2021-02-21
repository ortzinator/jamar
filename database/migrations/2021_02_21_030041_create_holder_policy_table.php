<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHolderPolicyTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('holder_policy', function (Blueprint $table) {
            $table->primary(['holder_id', 'policy_id']);

            $table->foreignId('holder_id')->constrained()->onDelete('cascade');
            $table->foreignId('policy_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('holder_policy');
    }
}
