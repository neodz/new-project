<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Exchange;
use Illuminate\Http\Request;

class ExchangeController extends Controller
{
    //
    
    //
    //
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api');
    }

   


    public function index(){

        $you = auth()->user();

        $exchanges = Exchange::where('utilisateur_id',$you->utilisateur->id)->with('article')->get();

        return response()->json( compact('exchanges', 'you') );
    }



    public function index_by_article(Request $request){
        
        $article = Article::where('id',$request->id)->get()->first();
        
        $result = [];

        if($article->type_transaction==="exchange") $result = $article->exchanges()->with(['utilisateur','article'])->get();
        if($article->type_transaction==="location") $result = $article->locations()->with(['utilisateur','article'])->get();
        if($article->type_transaction==="achter") $result = $article->transactionAchats()->with(['utilisateur','article'])->get();

        // $exchang;es = Exchange::where('article_id',$id)->with('article')->get();

        return response()->json( ['transactions' => $result,'article' => $article] );
    }


    public function getTransaction(Request $request,$id){
        
        $article = Article::where('id',$request->article_id)->get()->first();
        // $article = Article::where('id',$request->id)->get()->first();
        
        $result = [];

        if($article->type_transaction==="exchange") $result = $article->exchanges()->where('id',$id)->with(['utilisateur','article'])->get()->first();
        if($article->type_transaction==="location") $result = $article->locations()->where('id',$id)->with(['utilisateur','article'])->get()->first();
        if($article->type_transaction==="achter") $result = $article->transactionAchats()->where('id',$id)->with(['utilisateur','article'])->get()->first();

        // $exchang;es = Exchange::where('article_id',$id)->with('article')->get();

        return response()->json( ['transaction' => $result,'article' => $article] );
    }


    public function updateTransaction(Request $request,$id){
        
        $article = Article::where('id',$request->article_id)->get()->first();
        // $article = Article::where('id',$request->id)->get()->first();
        
        $result = [];

        if($article->type_transaction==="exchange") 
        {
            $result = $article->exchanges()->where('id',$id)->with(['utilisateur','article'])->get()->first();
        
            $result->etat_exchange = $request->etat;
        }
        if($article->type_transaction==="location")
        {
            $result = $article->locations()->where('id',$id)->with(['utilisateur','article'])->get()->first();
            $result->etat_location = $request->etat;

        }
        // if($article->type_transaction==="achter") 
        // {
        //     $result = $article->transactionAchats()->where('id',$id)->with(['utilisateur','article'])->get()->first();

        // }
        
        $result->save();

        // $exchang;es = Exchange::where('article_id',$id)->with('article')->get();

        return response()->json( ['transaction' => $result,'article' => $article] );
    }


    

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function store(Request $request)
    {

        $request->validate([
            'element_echange' => 'required|string|min:4',
            'adresse' => 'required|string',
            'description' => 'required|string'
        ]);

        $exchange = new Exchange();

        $exchange->etat_exchange = "pending";

        $exchange->element_echange = $request->element_echange;
        $exchange->article_id = $request->article_id;
        $exchange->utilisateur_id = $request->utilisateur_id;
        $exchange->adresse = $request->adresse;
        $exchange->description = $request->description;

        $this->setUpPhoto($request,$exchange);

        $exchange->save();
        
        return response()->json( ['status' => 'success'] );
    }


    public function setUpPhoto($request,$model)
    {
        $file_images_path = '/images/';
        
        if($request->hasFile('photo')){
        
        $photo =  $request->photo;

        $filename = time().'.'.$photo->getClientOriginalExtension();

        $photo->move(public_path('images'), $filename);
        
        $model->photo= $file_images_path.''.$filename;

        }
        
        return $model;

    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $location = Location::where('id',$id)->get()->first();

        return response()->json( $location );
    }




    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $exchange = Exchange::where('id',$id)->with('article')->get()->first();

        return response()->json( $exchange );
    }


     /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'element_echange' => 'required|string|min:4',
            'adresse' => 'required|string',
            'description' => 'required|string'
        ]);

        $location = Exchange::find($id);

        $location->etat_exchange = "pending";
        $location->element_echange = $request->element_echange;
        $location->adresse = $request->adresse;
        $location->description = $request->description;

        $this->setUpPhoto($request,$location);
        $location->save();
        
        return response()->json( ['status' => 'success'] );
    }


     /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $Location = Exchange::find($id);
        if($Location){
            $Location->delete();
        }
        return response()->json( ['status' => 'success'] );
    }

}
