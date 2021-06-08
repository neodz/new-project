clone the repository << git clone "remote" >> 
#
cd new-project/laravel and << run composer install >> 
#
run in the same folder << npm install >>
#
go to coreiu and run npm install 
#
$ in /laravel run npm run dev or watch (to compile all js files)
# .env (config file)
$ copy (windows) cp (lunix) .env.example .env 
# key generate 
$ php artisan key:generate
# generate jwt secret
$ php artisan jwt:secret

# run database migration and seed
$ php artisan migrate:refresh --seed

