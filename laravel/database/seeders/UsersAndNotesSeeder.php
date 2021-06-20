<?php

namespace Database\Seeders;

use App\Models\Article;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Role;
use App\Models\User;
use App\Models\RoleHierarchy;
use App\Models\Utilisateur;

class UsersAndNotesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $numberOfUsers = 10;
        $usersIds = array();
        $userStatus = array(
            'Active',
            'Inactive',
            'Pending',
            'Banned'
        );

        $adminRole = $roleAdmin = Role::create(['name' => 'admin']);
        RoleHierarchy::create([
            'role_id' => $adminRole->id,
            'hierarchy' => 1,
        ]);
        $userRole = Role::create(['name' => 'user']);
        RoleHierarchy::create([
            'role_id' => $userRole->id,
            'hierarchy' => 2,
        ]);
        $guestRole = Role::create(['name' => 'guest']); 
        RoleHierarchy::create([
            'role_id' => $guestRole->id,
            'hierarchy' => 3,
        ]);

        $faker = Faker::create();

        $user = User::create([ 
            'name' => 'admin',
            'email' => 'admin@admin.com',
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
            'menuroles' => 'user,admin',
            'status' => 'Active'
        ]);
        $user->assignRole('user');
        $user->assignRole($roleAdmin);

        DB::table('admins')->insert([
            'prenom'         => $faker->firstName,
            'nom'       => $faker->lastName,
            'date_naissance'     => $faker->date(),
            'lieu_naissance'     => 'mila',
            'sexe' => 'male',
            'adresse'      => $faker->address,
            'num_tel'      => $faker->phoneNumber,
            'user_id'      => $user->id,
        ]);

            $user = User::create([
                'name' => 'user',
                'email' => 'user@user.com',
                'email_verified_at' => now(),
                'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                'remember_token' => Str::random(10),
                'menuroles' => 'user',
                'status' => 'Active'
            ]);
            
            $user->assignRole('user');

            array_push($usersIds, $user->id);

        for($i = 0; $i<$numberOfUsers; $i++){
            $user = User::create([
                'name' => $faker->name(),
                'email' => $faker->unique()->safeEmail(),
                'email_verified_at' => now(),
                'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                'remember_token' => Str::random(10),
                'menuroles' => 'user',
                'status' => "Active",
            ]);
            $user->assignRole('user');
            array_push($usersIds, $user->id);
        }

        $utilisateurIds = [];

        foreach($usersIds as $i){
            
            $utilisateur = Utilisateur::create([
                'prenom'         => $faker->firstName,
                'nom'       => $faker->lastName,
                'date_naissance'     => $faker->date(),
                'lieu_naissance'     => 'mila',
                'sexe' => 'male',
                'adresse'      => $faker->address,
                'num_tel'      => $faker->phoneNumber,
                'user_id'      => $i,
            ]);

            
            array_push($utilisateurIds, $utilisateur->id);
        }


         // articles
        $etat_articles = ['pending','accepted','rejected'];
        $type_transactions = ['exchange','location','achter'];
        $categories = ['Informatique','Téléphone','Voiture','Maisson','Vêtements','Bijoux','appareils électroménagers'];
        $methode_paiement = ['Visa card','Master card','Edahabia'];
        $quantites = [1,2,3];

        foreach($utilisateurIds as $i){
            
            Article::create([
                'designation' => $faker->firstName.$faker->lastName,
                'prix' => $faker->randomFloat(null,10,20000),
                'adresse' => $faker->address,
                'description' => $faker->address,
                'tarif_livraison' =>  $faker->randomFloat(null,1,15),
                'etat_article' => $etat_articles[ random_int(0,count($etat_articles) - 1) ],
                'quantite' => $quantites[ random_int(0,count($quantites) - 1) ],
                'category' => $categories[ random_int(0,count($categories) - 1) ],
                'type_transaction' => $type_transactions[ random_int(0,count($type_transactions) - 1) ],
                'methode_paiement' => $methode_paiement[ random_int(0,count($methode_paiement) - 1) ],
                'utilisateur_id' => $i
            ]);
            
        }

    }
}