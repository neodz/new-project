<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Utilisateur extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function articles()
    {
        return $this->hasMany(Article::class);
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
