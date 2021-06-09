<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEvaluationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('evaluations', function (Blueprint $table) {
            $table->id();

            $table->float('note_evaluation');

            // compte d'utilisateur qui fait la note
            $table->unsignedBigInteger('noter_user_id');
            $table->foreign('noter_user_id')->references('id')->on('users')->onDelete('cascade');

            // compte d'utilisateur qui obtient la note
            $table->unsignedBigInteger('noted_user_id');
            $table->foreign('noted_user_id')->references('id')->on('users')->onDelete('cascade');

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
        Schema::dropIfExists('evaluations');
    }
}
