import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')

// Users
const Users = () => import('@/views/users/Users')
const User = () => import('@/views/users/User')
const EditUser = () => import('@/views/users/EditUser')



// my components 
const Article = () => import('@/views/article/Articles')
const CreateArticle = () => import('@/views/article/CreateArticle')
const EditArticle = () => import('@/views/article/EditArticle')
const DeleteArticle = () => import('@/views/article/DeleteArticle')
const ArticleDetails = () => import('@/views/article/ArticleDetails')

// profile
const UserProfile = () => import('@/views/user/profile')
const EditProfile = () => import('@/views/user/EditProfile')
const ShowProfile = () => import('@/views/user/ShowProfile')

// transactions
// locations
const Locations = () => import('@/views/location/Locations')
const CreateLocation = () => import('@/views/location/CreateLocation')
const EditLocation = () => import('@/views/location/EditLocation')
const DeleteLocation = () => import('@/views/location/DeleteLocation')
const LocationDetails = () => import('@/views/location/LocationDetails')

// exchanges
const Exchanges = () => import('@/views/exchange/Exchanges')
const CreateExchange = () => import('@/views/exchange/CreateExchange')
const EditExchange = () => import('@/views/exchange/EditExchange')
const DeleteExchange = () => import('@/views/exchange/DeleteExchange')
const ExchangeDetails = () => import('@/views/exchange/ExchangeDetails')
// achat
const Achats = () => import('@/views/achat/Achats') 
const CreateAchat = () => import('@/views/achat/CreateAchat')
// const EditAchat = () => import('@/views/achat/EditAchat')
const DeleteAchat = () => import('@/views/achat/DeleteAchat')
const AchatDetails = () => import('@/views/achat/AchatDetails')

// 

const ArticleTransactions = () => import('@/views/transactions/ArticleTransactions') 
const EditArticleExchanges = () => import('@/views/transactions/EditArticleExchanges') 
const ArticleTransactionDetails = () => import('@/views/transactions/ArticleTransactionDetails') 
// const EditAchat = () => import('@/views/achat/EditAchat')
// const DeleteAchat = () => import('@/views/achat/DeleteAchat')
// const AchatDetails = () => import('@/views/achat/AchatDetails')


Vue.use(Router)

let router = new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})


router.beforeEach((to, from, next) => {
  let roles = localStorage.getItem("roles");
  if(roles != null){
    roles = roles.split(',')
  }
  if(to.matched.some(record => record.meta.requiresSuper)) {
    if(roles != null && roles.indexOf('super') >= 0 ){
      next()
    }else{
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    }
  }
  else if(to.matched.some(record => record.meta.requiresAdmin)) {
    if(roles != null && roles.indexOf('admin') >= 0 ){
      next()
    }else{
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    }
  }
  else if(to.matched.some(record => record.meta.requiresUser)) {
    if(roles != null && roles.indexOf('user') >= 0 ){
      next()
    }else{
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    }
  }else{
    next()
  }
})

export default router

function configRoutes () {
  return [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        


        // my routes 
        {
          path: 'articles',
          meta: { label: 'Articles'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Article,
              meta:{
                requiresUser: true
              }
            },
            {
              path: 'create',
              meta: { label: 'Create Article' },
              name: 'CreateArticle',
              component: CreateArticle,
              meta:{
                requiresUser: true
              }
            },
            {
              path: ':id/edit',
              meta: { label: 'Edit Article' },
              name: 'EditArticle',
              component: EditArticle,
              meta:{
                requiresUser: true
              }
            },
            {
              path: ':id/delete',
              meta: { label: 'Delete Article' },
              name: 'DeleteArticle',
              component: DeleteArticle,
              meta:{
                requiresAdmin: true
              }
            },
             {
              path: ':id',
              meta: { label: 'Article Details'},
              name: 'Article Details',
              component: ArticleDetails,
              meta:{
                requiresUser: true
              }
            },
          ]
        },

        {
          path: 'articletransactions/:id',
          meta: { label: 'Article Transactions'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: ArticleTransactions,
              meta:{
                requiresUser: true
              }
            },
            {
              path: ':id/edit',
              meta: { label: 'Edit article exchanges' },
              name: 'ArticleExchanges',
              component: EditArticleExchanges,
              meta:{
                requiresUser: true
              }
            },
            {
              path: ':id/delete',
              meta: { label: 'Delete Article' },
              name: 'DeleteArticle',
              component: DeleteArticle,
              meta:{
                requiresAdmin: true
              }
            },
             {
              path: 'transaction/:article_id',
              meta: { label: 'Article Transactions Details'},
              name: 'Article Transactions Details',
              component: ArticleTransactionDetails,
              meta:{
                requiresUser: true
              }
            },
          ]
        },

        { 
          path: 'achats',
          meta: { label: 'Achats'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Achats,
              meta:{
                requiresUser: true
              }
            },
            {
              path: 'create/:id',
              meta: { label: 'Create Achat' },
              name: 'CreateAchat',
              component: CreateAchat,
              meta:{
                requiresUser: true
              }
            },
            // {
            //   path: ':id/edit',
            //   meta: { label: 'Edit Achat' },
            //   name: 'EditAchat',
            //   component: EditAchat,
            //   meta:{
            //     requiresUser: true
            //   }
            // },
            {
              path: ':id/delete',
              meta: { label: 'Delete Achat' },
              name: 'DeleteAchat',
              component: DeleteAchat,
              meta:{
                requiresAdmin: true
              }
            },
             {
              path: ':id',
              meta: { label: 'Achat Details'},
              name: 'Achat Details',
              component: AchatDetails,
              meta:{
                requiresUser: true
              }
            },
          ]
        },
        
        {
          path: 'exchanges',
          meta: { label: 'Exchanges'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Exchanges,
              meta:{
                requiresUser: true
              }
            },
            {
              path: 'create/:id',
              meta: { label: 'Create Exchange' },
              name: 'CreateExchange',
              component: CreateExchange,
              meta:{
                requiresUser: true
              }
            },
            {
              path: ':id/edit',
              meta: { label: 'Edit Exchange' },
              name: 'EditExchange',
              component: EditExchange,
              meta:{
                requiresUser: true
              }
            },
            {
              path: ':id/delete',
              meta: { label: 'Delete Exchange' },
              name: 'DeleteExchange',
              component: DeleteExchange,
              meta:{
                requiresAdmin: true
              }
            },
             {
              path: ':id',
              meta: { label: 'Exchange Details'},
              name: 'Exchange Details',
              component: ExchangeDetails,
              meta:{
                requiresUser: true
              }
            },
          ]
        },

        {
          path: 'locations',
          meta: { label: 'Locations'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Locations,
              meta:{
                requiresUser: true
              }
            },
            {
              path: 'create/:id',
              meta: { label: 'Create Location' },
              name: 'CreateLocation',
              component: CreateLocation,
              meta:{
                requiresUser: true
              }
            },
            {
              path: ':id/edit',
              meta: { label: 'Edit Location' },
              name: 'EditLocation',
              component: EditLocation,
              meta:{
                requiresUser: true
              }
            },
            {
              path: ':id/delete',
              meta: { label: 'Delete Location' },
              name: 'DeleteLocation',
              component: DeleteLocation,
              meta:{
                requiresAdmin: true
              }
            },
             {
              path: ':id',
              meta: { label: 'Location Details'},
              name: 'Location Details',
              component: LocationDetails,
              meta:{
                requiresUser: true
              }
            },
          ]
        },
        {
          path: 'profile',
          meta: { label: 'Profile'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: UserProfile,
              meta:{
                requiresUser: true
              }
            },
            {
              path: ':id/edit',
              meta: { label: 'Edit Profile' },
              name: 'EditProfile',
              component: EditProfile,
              meta:{
                requiresUser: true
              }
            },{
              path: ':id',
              meta: { label: 'Show Profile'},
              name: 'Show Profile',
              component: ShowProfile,
              meta:{
                requiresUser: true
              }
            },
          ]
        },
        {
          path: 'users',
          meta: { label: 'Users'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Users,
              meta:{
                requiresAdmin: true
              }
            },
            {
              path: ':id',
              meta: { label: 'User Details'},
              name: 'User',
              component: User,
              meta:{
                requiresAdmin: true
              }
            },
            {
              path: ':id/edit',
              meta: { label: 'Edit User' },
              name: 'Edit User',
              component: EditUser,
              meta:{
                requiresAdmin: true
              }
            },
          ]
        },
      
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
      ]
    },
    {
      path: '/',
      redirect: '/login',
      name: 'Auth',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        },
      ]
    },
    {
      path: '*',
      name: '404',
      component: Page404
    }
  ]
}
