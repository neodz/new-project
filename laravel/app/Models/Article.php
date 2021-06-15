<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Date;

class Article extends Model
{
    use HasFactory;

    const DEFAULT_PHOTO = '/images/default/article.png';
    protected $appends = [
        'photo_url','viewer_transaction','viewer_transaction_etat','achter_income','location_active','dynamique_quantite'
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


    public function getViewerTransactionEtatAttribute(){
        $you = auth()->user();
        if(!$you) return null;
        $you = auth()->user()->utilisateur;
        if(!$you) return null;
        
        $trns = $this->exchanges()->where('utilisateur_id',$you->id)->get()->first();
        if($trns) return $trns->etat;
        $trns = $this->locations()->where('utilisateur_id',$you->id)->get()->first();
        if($trns) return $trns->etat;
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


    public function getLocationActiveAttribute(){

         // $locations = $this->location_active;   
         $quantite = 0;
         if($this->type_transaction==="location"){
         $date = date('Y-m-d');
         $locations = $this->locations()->where('etat_location','accepted')
                        ->whereDate('date_sortie','<=',$date)
                        ->whereDate('date_entrer','>=',$date)
                        ->get();
         $locations->map(function ($location) use (&$quantite){
                $quantite+=$location->quantite;
         });
        //  $quantite = $this->locations()->get()->count();
         }
         
 
         return $quantite;

    }

    
    public function getDynamiqueQuantiteAttribute(){

        return $this->quantite - $this->location_active;

    }

    

    


}
