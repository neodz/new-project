<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Exchange;
use App\Models\Location;
use App\Models\TransactionAchat;
use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    //

    public function index(){
        $withUsers = [
            'utilisateur'
        ];
        // for admin dashboard 
        $usersPending = User::where('status','Pending')->whereHas('utilisateur')->with($withUsers)->get();
        $usersBanned = User::where('status','Banned')->whereHas('utilisateur')->with($withUsers)->get();
        $usersActive = User::where('status','Active')->whereHas('utilisateur')->with($withUsers)->get();

        $locationArticles = Article::where('type_transaction','location')->get();
        $exchangeArticles = Article::where('type_transaction','exchange')->get();
        $achterArticles = Article::where('type_transaction','achter')->get();
        
        $locations = Location::all();
        $exchanges = Exchange::all();
        $achats = TransactionAchat::all();

        return response()->json(
            [
                'usersPending' => $usersPending,
                'usersBanned' => $usersBanned,
                'usersActive' => $usersActive,

                'locationArticles' => $locationArticles,
                'exchangeArticles' => $exchangeArticles,
                'achterArticles' => $achterArticles,

                'locations' => $locations,
                'exchanges' => $exchanges,
                'achats' => $achats,

            ]
        );
        
    }
}
