<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Carbon;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;
    use SoftDeletes;
    use HasRoles;
    use HasFactory;

    protected $appends = ['name', 'rate', 'viewer_rate','is_admin','registered'];

    public function admin()
    {
        return $this->hasOne(Admin::class);
    }

    public function evaluations()
    {
        return $this->hasMany(Evaluation::class, 'noted_user_id');
    }



    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'status'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $dates = [
        'deleted_at'
    ];

    protected $guard_name = 'api';

    protected $attributes = [
        'menuroles' => 'user',
    ];


    public function utilisateur()
    {

        return $this->hasOne(Utilisateur::class);
    }

    public function getNameAttribute()
    {
        $utilisateur = $this->utilisateur;
        $admin = $this->admin;

        $name = $utilisateur ? $utilisateur->nom . " " . $utilisateur->prenom : ($admin ? $admin->nom . " " . $admin->prenom : null);
        return  $name;
    }
    
    public function getRateAttribute()
    {
        $count = $this->evaluations->count();
        $rate = 0;

        try {
            $this->evaluations->map(function ($ev) use (&$rate) {
                $rate += $ev->note_evaluation;
            });

            $rate = (int)$rate / $count;
        } catch (\Throwable $th) {
            //throw $th;
        }

        return $rate;
    }


    public function getViewerRateAttribute()
    {
        $eva = null;

        try {
            $you = auth()->user();
            $eva = $this->evaluations()->where('noter_user_id', $you->id)->get()->first();
         } catch (\Throwable $th) {
        }

        return $eva ? $eva->note_evaluation : 0;
    }


    public function getIsAdminAttribute()
    {
        return $this->hasRole('admin');
        // return $eva ? $eva->note_evaluation : 0;
    }
    public function getRegisteredAttribute()
    {
        return Carbon::parse($this->created_at)->format('Y-m-d H:i:s');
        // return $eva ? $eva->note_evaluation : 0;
    }

}
