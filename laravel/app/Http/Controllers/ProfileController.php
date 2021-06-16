<?php

namespace App\Http\Controllers;

use App\Models\Evaluation;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $user = auth()->user();

        $user = User::where('id', $user->id)->with(['utilisateur', 'admin','evaluations'])->get()->first();

        return response()->json(compact('user'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $user = User::where('id', $id)->with(['utilisateur', 'admin','evaluations'])->get()->first();

        return response()->json(compact('user'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        $rules = [
            'nom'      => 'required',
            'prenom'      => 'required',
            'email'     => 'required|email',
            'password'  => 'confirmed',
        ];

        $user = User::where('id', $id)->get()->first();
        if($user->email !== $request->email)
            $rules['email'] = 'required|email|unique:users';
        

        //
        $validate = Validator::make($request->all(),$rules );
        if ($validate->fails()) {
            return response()->json([
                'status' => 'error',
                'errors' => $validate->errors()
            ], 422);
        }
        $user = User::where('id', $id)->get()->first();

        $user->name = $request->name;
        $user->email = $request->email;
        if($request->password)
        $user->password = bcrypt($request->password);
        $user->status = 'Active';
        $user->save();

        $utilisateur = $user->utilisateur ? $user->utilisateur : $user->admin;

        $utilisateur->prenom = $request->prenom;
        $utilisateur->nom = $request->nom;
        $utilisateur->date_naissance = $request->date_naissance;
        $utilisateur->lieu_naissance = $request->lieu_naissance;
        $utilisateur->sexe = $request->sexe;
        $utilisateur->adresse = $request->adresse;
        $utilisateur->num_tel = $request->num_tel;
        $utilisateur->num_identite = $request->num_identite;
        // $utilisateur->user_id = $user->id;

        $utilisateur->save();

        $user->load('utilisateur','evaluations');

        return response()->json(
            [
                'status' => 'success',
                'user' => $user
            ],
            200
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }


    public function evaluer(Request $request){

            $noted_user_id = $request->noted_user_id;
            $noter_user_id = auth()->user()->id;

            $user = User::where('id',$noted_user_id)->get()->first();

            if($user->viewer_rate){
                $evaluation =  Evaluation::where([
                    [
                        'noted_user_id' ,'=', $noted_user_id
                    ],
                    [
                        'noter_user_id' ,'=', $noter_user_id
                    ]
                ])->get()->first();

                $evaluation->note_evaluation = $request->note_evaluation;
               
            }
           else {
               $evaluation = new Evaluation();
               $evaluation->noted_user_id = $noted_user_id;
               $evaluation->noter_user_id = $noter_user_id;
               $evaluation->note_evaluation = $request->note_evaluation;
           }

           $evaluation->save();

           $user->load('evaluations');

           return response()->json( [
               'user' => $user
           ] );
    }

    


}
