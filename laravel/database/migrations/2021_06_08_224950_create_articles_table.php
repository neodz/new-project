<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {

            $table->id();

            $table->enum('etat_article',['pending','accepted','rejected']);
            $table->string('designation');
            $table->float('prix')->default(0);
            $table->integer('quantite')->default(1);
            $table->enum('type_transaction',['exchange','location','achter']);
            $table->string('adresse')->nullable();
            $table->string('marque')->nullable();
            $table->enum('category',['cat1','cat2','cat3','cat4'])->default('cat1');
            $table->enum('methode_paiement',['Visa card','Master card','Edahabia'])->nullable();
            $table->string('photo')->default('');
            $table->string('description')->default('');
            $table->float('tarif_livraison')->default(0);

            // utilisateur of the article owner
            $table->unsignedBigInteger('utilisateur_id');
            $table->foreign('utilisateur_id')->references('id')->on('utilisateurs')->onDelete('cascade');

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
        Schema::dropIfExists('articles');
    }
}
