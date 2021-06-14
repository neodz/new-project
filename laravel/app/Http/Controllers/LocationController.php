<?php

namespace App\Http\Controllers;

use App\Models\Location;
use Illuminate\Http\Request;

class LocationController extends Controller
{
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

        $locations = Location::where('utilisateur_id',$you->utilisateur->id)->with('article')->get();

        return response()->json( compact('locations', 'you') );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function store(Request $request)
    {

        $request->validate([
            'date_entrer' => 'required|date|after_or_equal:date_sortie',
            'date_sortie' => 'required|date',
            'quantite' => 'required|integer'
        ]);

        $location = new Location();

        $location->etat_location = "pending";
        $location->date_entrer = $request->date_entrer;
        $location->date_sortie = $request->date_sortie;
        $location->quantite = $request->quantite;
        $location->article_id = $request->article_id;
        $location->utilisateur_id = $request->utilisateur_id;
        $location->save();

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
        $location = Location::where('id',$id)->with('article')->get()->first();

        return response()->json( $location );
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
            'date_entrer' => 'required|date|after_or_equal:date_sortie',
            'date_sortie' => 'required|date',
            'quantite' => 'required|integer'
        ]);

        $location = Location::find($id);

        $location->etat_location = "pending";
        $location->date_entrer = $request->date_entrer;
        $location->date_sortie = $request->date_sortie;
        $location->quantite = $request->quantite;
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
        $location = Location::find($id);
        if($location){
            $location->delete();
        }
        return response()->json( ['status' => 'success'] );
    }

}
