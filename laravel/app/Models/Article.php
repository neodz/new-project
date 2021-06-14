<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    const DEFAULT_PHOTO = '/images/default/article.png';
    protected $appends = [
        'photo_url','viewer_transaction','achter_income'
    ];

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

    public function getPhotoUrlAttribute(){

        return $this->photo ? $this->photo : self::DEFAULT_PHOTO;
    }

    public function getViewerTransactionAttribute(){
        $you = auth()->user();
        if(!$you) return null;
        $you = auth()->user()->utilisateur;
        if(!$you) return null;
        
        $trns = $this->exchanges()->where('utilisateur_id',$you->id)->get()->first();
        if($trns) return $trns->id;
        $trns = $this->locations()->where('utilisateur_id',$you->id)->get()->first();
        if($trns) return $trns->id;
        // $trns = $this->transactionAchats()->where('utilisateur_id',$you->id)->get()->first();
        // if($trns) return $trns->id;
        return null;

    }

    public function getAchterIncomeAttribute(){
        $incomes = $this->transactionAchats;
        $count = 0; 
        $incomes->map(function ($inc) use (&$count){
                $count +=$inc->total;
        });
        
        return $count;

    }
}
