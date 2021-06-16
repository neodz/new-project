<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\DB;

class MenusTableSeeder extends Seeder
{
    private $menuId = null;
    private $dropdownId = array();
    private $dropdown = false;
    private $sequence = 1;
    private $joinData = array();
    private $adminRole = null;
    private $superRole = null;
    private $userRole = null;

    public function join($roles, $menusId){
        $roles = explode(',', $roles);
        foreach($roles as $role){
            array_push($this->joinData, array('role_name' => $role, 'menus_id' => $menusId));
        }
    }

    /*
        Function assigns menu elements to roles
        Must by use on end of this seeder
    */
    public function joinAllByTransaction(){
        DB::beginTransaction();
        foreach($this->joinData as $data){
            DB::table('menu_role')->insert([
                'role_name' => $data['role_name'],
                'menus_id' => $data['menus_id'],
            ]);
        }
        DB::commit();
    }

    public function insertLink($roles, $name, $href, $icon = null){
        if($this->dropdown === false){
            DB::table('menus')->insert([
                'slug' => 'link',
                'name' => $name,
                'icon' => $icon,
                'href' => $href,
                'menu_id' => $this->menuId,
                'sequence' => $this->sequence
            ]);
        }else{
            DB::table('menus')->insert([
                'slug' => 'link',
                'name' => $name,
                'icon' => $icon,
                'href' => $href,
                'menu_id' => $this->menuId,
                'parent_id' => $this->dropdownId[count($this->dropdownId) - 1],
                'sequence' => $this->sequence
            ]);
        }
        $this->sequence++;
        $lastId = DB::getPdo()->lastInsertId();
        $this->join($roles, $lastId);
        $permission = Permission::where('name', '=', $name)->get();
        if(empty($permission)){
            $permission = Permission::create(['name' => 'visit ' . $name]);
        }
        $roles = explode(',', $roles);
        if(in_array('user', $roles)){
            $this->userRole->givePermissionTo($permission);
        }
        if(in_array('admin', $roles)){
            $this->adminRole->givePermissionTo($permission);
        }
        if(in_array('super', $roles)){
            $this->superRole->givePermissionTo($permission);
        }
        return $lastId;
    }

    public function insertTitle($roles, $name){
        DB::table('menus')->insert([
            'slug' => 'title',
            'name' => $name,
            'menu_id' => $this->menuId,
            'sequence' => $this->sequence
        ]);
        $this->sequence++;
        $lastId = DB::getPdo()->lastInsertId();
        $this->join($roles, $lastId);
        return $lastId;
    }

    public function beginDropdown($roles, $name, $href='', $icon=''){
        if(count($this->dropdownId)){
            $parentId = $this->dropdownId[count($this->dropdownId) - 1];
        }else{
            $parentId = null;
        }
        DB::table('menus')->insert([
            'slug' => 'dropdown',
            'name' => $name,
            'icon' => $icon,
            'menu_id' => $this->menuId,
            'sequence' => $this->sequence,
            'parent_id' => $parentId,
            'href' => $href
        ]);
        $lastId = DB::getPdo()->lastInsertId();
        array_push($this->dropdownId, $lastId);
        $this->dropdown = true;
        $this->sequence++;
        $this->join($roles, $lastId);
        return $lastId;
    }

    public function endDropdown(){
        $this->dropdown = false;
        array_pop( $this->dropdownId );
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /* Get roles */
        $this->superRole = Role::where('name' , '=' , 'super' )->first();
        $this->adminRole = Role::where('name' , '=' , 'admin' )->first();
        $this->userRole = Role::where('name', '=', 'user' )->first();
        $dropdownId = array();
        /* Create Sidebar menu */
        DB::table('menulist')->insert([
            'name' => 'sidebar menu'
        ]);
        $this->menuId = DB::getPdo()->lastInsertId();  //set menuId
        /* guest menu */
        $this->insertLink('guest,user,admin,super', 'Dashboard', '/', 'cil-speedometer');
        $this->insertLink('guest', 'Login', '/login', 'cil-account-logout');
        $this->insertLink('guest', 'Register', '/register', 'cil-account-logout');
        $this->beginDropdown('super', 'Settings', '/settings', 'cil-puzzle');
            $this->insertLink('super', 'Media',    '/media');
            $this->insertLink('super', 'Users',    '/users');
            $this->insertLink('super', 'Menu',    '/menu');
            $this->insertLink('super', 'BREAD',    '/bread');
            $this->insertLink('super', 'Email',    '/email');
        $this->endDropdown();
        
        // user
        $this->insertTitle('user,admin', 'Explorer');
        $this->insertLink('admin', 'Articles', '/articles', 'cil-list');
        $this->insertLink('admin', 'Users', '/users', 'cil-list');
        
        $this->insertLink('user', 'Mes article', '/articles', 'cil-list');
        $this->beginDropdown('user', 'Mes Transactions', '/transactions', 'cil-list');
                     $this->insertLink('user', 'Locations',    '/locations');
                     $this->insertLink('user', 'Exchanges',    '/exchanges');
                     $this->insertLink('user', 'Transaction Achats',    '/achats');
         $this->endDropdown();


        $this->insertTitle('super', 'Theme');
        $this->insertLink('super', 'Colors', '/colors', 'cil-drop');
        $this->insertLink('super', 'Typography', '/typography', 'cil-pencil');
        $this->insertTitle('super', 'Components');
        $this->beginDropdown('super', 'Base', '/base', 'cil-puzzle');
            $this->insertLink('super', 'Breadcrumb',    '/base/breadcrumb');
            $this->insertLink('super', 'Cards',         '/base/cards');
            $this->insertLink('super', 'Carousel',      '/base/carousel');
            $this->insertLink('super', 'Collapse',      '/base/collapse');
            $this->insertLink('super', 'Forms',         '/base/forms');
            $this->insertLink('super', 'Jumbotron',     '/base/jumbotron');
            $this->insertLink('super', 'List group',    '/base/list-group');
            $this->insertLink('super', 'Navs',          '/base/navs');
            $this->insertLink('super', 'Pagination',    '/base/pagination');
            $this->insertLink('super', 'Popovers',      '/base/popovers');
            $this->insertLink('super', 'Progress',      '/base/progress');
           // $this->insertLink('super', 'Scrollspy',     '/base/scrollspy');  
            $this->insertLink('super', 'Switches',      '/base/switches');
            $this->insertLink('super', 'Tables',        '/base/tables');
            $this->insertLink('super', 'Tabs',          '/base/tabs');
            $this->insertLink('super', 'Tooltips',      '/base/tooltips');
        $this->endDropdown();
        $this->beginDropdown('super', 'Buttons', '/buttons', 'cil-cursor');
            $this->insertLink('super', 'Buttons',           '/buttons/buttons');
            $this->insertLink('super', 'Buttons Group',     '/buttons/button-group');
            $this->insertLink('super', 'Dropdowns',         '/buttons/dropdowns');
            $this->insertLink('super', 'Brand Buttons',     '/buttons/brand-buttons');
        $this->endDropdown();
        $this->insertLink('super', 'Charts', '/charts', 'cil-chart-pie');
        $this->beginDropdown('super', 'Icons', '/icon', 'cil-star');
            $this->insertLink('super', 'CoreUI Icons',      '/icon/coreui-icons');
            $this->insertLink('super', 'Flags',             '/icon/flags');
            $this->insertLink('super', 'Brands',            '/icon/brands');
        $this->endDropdown();
        $this->beginDropdown('super', 'Notifications', '/notifications', 'cil-bell');
            $this->insertLink('super', 'Alerts',     '/notifications/alerts');
            $this->insertLink('super', 'Badge',      '/notifications/badge');
            $this->insertLink('super', 'Modals',     '/notifications/modals');
        $this->endDropdown();
        $this->insertLink('super', 'Widgets', '/widgets', 'cil-calculator');
        $this->insertTitle('super', 'Extras');
        $this->beginDropdown('super', 'Pages', '/pages', 'cil-star');
            $this->insertLink('super', 'Login',         '/login');
            $this->insertLink('super', 'Register',      '/register');
            $this->insertLink('super', 'Error 404',     '/404');
            $this->insertLink('super', 'Error 500',     '/500');
        $this->endDropdown();
        // $this->insertLink('guest,super', 'Download CoreUI', 'https://coreui.io', 'cil-cloud-download');
        // $this->insertLink('guest,super', 'Try CoreUI PRO', 'https://coreui.io/pro/', 'cil-layers');
        
        /* Create top menu */
        DB::table('menulist')->insert([
            'name' => 'top_menu'
        ]);
        $this->menuId = DB::getPdo()->lastInsertId();  //set menuId
        $this->beginDropdown('super', 'Pages');
            $this->insertLink('super', 'Dashboard',    '/');
            $this->insertLink('super', 'Notes',              '/notes');
            $this->insertLink('super', 'Users',                   '/users');
        $this->endDropdown();
        $this->beginDropdown('super', 'Settings');
            $this->insertLink('super', 'Edit menu',               '/menu');
            $this->insertLink('super', 'Edit roles',              '/roles');
            $this->insertLink('super', 'Media',                   '/media');
            $this->insertLink('super', 'BREAD',                   '/bread');
            $this->insertLink('super', 'E-mail',                  '/email');
        $this->endDropdown();

        
        

        $this->joinAllByTransaction(); ///   <===== Must by use on end of this seeder
    }
}
