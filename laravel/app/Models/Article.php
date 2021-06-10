<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    public function utilisateur()
    {
        return $this->belongsTo(Utilisateur::class);
    }

    public function locations()
    {
        return $this->hasMany(Location::class);
    }
    public function exchanges()
    {
        return $this->hasMany(Exchange::class);
    }
    public function transactionAchats()
    {
        return $this->hasMany(TransactionAchat::class);
    }
}
