<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    use HasFactory;

    protected $appends = [
        'etat'
    ];

    public function article()
    {
        return $this->belongsTo(Article::class);
    }
    public function utilisateur()
    {
        return $this->belongsTo(Utilisateur::class);

    }


    public function getEtatAttribute(){
        return $this->etat_location;
    }
}
