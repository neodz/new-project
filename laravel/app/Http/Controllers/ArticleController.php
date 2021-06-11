<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
class ArticleController extends Controller
{
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

        $articles = Article::where('utilisateur_id',$you->utilisateur->id)->get();

        
        return response()->json( compact('articles', 'you') );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function store(Request $request)
    {

        $you = auth()->user();

        $request->validate([
            'type_transaction' => 'in:achter,location,exchange',
            'category' => 'in:cat1,cat2,cat3,cat4',
            'methode_paiement' => 'in:Visa card,Master card,Edahabia',
            'designation' => 'required|min:1|max:128',
        ]);


        
        $article = new Article();
        $article->etat_article = "pending";
        $article->designation = $request->designation;
        $article->prix = $request->prix ? $request->prix : 0;
        $article->quantite = $request->quantite ? $request->quantite : 1;
        $article->type_transaction = $request->type_transaction;
        $article->adresse = $request->adresse;
        $article->marque = $request->marque;
        $article->category = $request->category;
        $article->methode_paiement = $request->methode_paiement;
        $article->description = $request->description? $request->description : "";
        $article->tarif_livraison = $request->tarif_livraison ? $request->tarif_livraison : 0;
        $article->utilisateur_id = $you->utilisateur->id;

        $this->setUpPhoto($request,$article);

        $article->save();
        //$request->session()->flash('message', 'Successfully created role');
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
        $article = Article::where('id',$id)->get()->first();

        return response()->json( $article );
    }




    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $article = Article::where('id',$id)->get()->first();

        return response()->json( $article );
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
            'type_transaction' => 'in:achter,location,exchange',
            'category' => 'in:cat1,cat2,cat3,cat4',
            'methode_paiement' => 'in:Visa card,Master card,Edahabia',
            'designation' => 'required|min:1|max:128',
        ]);

        $article = Article::find($id);

        $article->etat_article = "pending";
        $article->designation = $request->designation;
        $article->prix = $request->prix ? $request->prix : 0;
        $article->quantite = $request->quantite ? $request->quantite : 1;
        $article->type_transaction = $request->type_transaction;
        $article->adresse = $request->adresse;
        $article->marque = $request->marque;
        $article->category = $request->category;
        $article->methode_paiement = $request->methode_paiement;
        $article->description = $request->description? $request->description : "";
        $article->tarif_livraison = $request->tarif_livraison ? $request->tarif_livraison : 0;
        
        $this->setUpPhoto($request,$article);

        $article->save();
        //$request->session()->flash('message', 'Successfully updated user');
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
        $article = Article::find($id);
        if($article){
            $article->delete();
        }
        return response()->json( ['status' => 'success'] );
    }

}
