<template>
<div >


<star-rating v-model="viewer_rating" @rating-selected="updateRating"></star-rating>

<header class="ScriptHeader">
    <div class="rt-container">
    	<div class="col-rt-12">
        	<div class="rt-heading">
            	<h1>{{$t('profile.title')}}</h1>
            </div>
        </div>
    </div>
</header>

<section>
    <div class="rt-container">
          <div class="col-rt-12">
              <div class="Scriptcontent">
              
<!-- Student Profile -->
<div class="student-profile py-4">
  <div class="container">
    <div class="row">
      <div class="col-lg-4">
        <div class="card shadow-sm">
          <div v-if="user" class="card-header bg-transparent text-center">
            <img class="profile_img" src="/images/default/user.png" alt="student dp">
            <h3 >{{user.name}}</h3>
            
          <star-rating2  v-if="!load"
          :rating="rating" :star-style="starStyle"
          ></star-rating2>
          </div>
          <div v-if="role" class="card-body">
            <p class="mb-0"><strong class="pr-1">{{$t('profile.card_id')}} :</strong>{{role.num_identite ? role.num_identite : $t('profile.none')}}</p>
            <p class="mb-0"><strong class="pr-1">{{$t('profile.phone')}} :</strong>{{role.num_tel ? role.num_tel : $t('profile.none')}}</p>
            <p class="mb-0"><strong class="pr-1">{{$t('profile.email')}} : </strong>{{user.email ? user.email : $t('profile.none')}}</p>
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="card shadow-sm">
          <div class="card-header bg-transparent border-0">
            <h3 class="mb-0"><i class="far fa-clone pr-1"></i>General Information</h3>
          </div>
          <div v-if="role" class="card-body pt-0">
            <table class="table table-bordered">
              <tr>
                <th width="30%">{{$t('profile.date_of_birth')}}</th>
                <td width="2%">:</td>
                <td>{{role.date_naissance ? role.date_naissance : $t('profile.none')}}</td>
              </tr>
              <tr>
                <th width="30%">{{$t('profile.place_of_birth')}}</th>
                <td width="2%">:</td>
                <td>{{role.lieu_naissance ? role.lieu_naissance : $t('profile.none')}}</td>
              </tr>
              <tr>
                <th width="30%">{{$t('profile.sex')}}</th>
                <td width="2%">:</td>
                <td>{{role.sexe ? role.sexe : $t('profile.none')}}</td>
              </tr>
            </table>
          </div>
        </div>
          <div style="height: 26px"></div>
        <div class="card shadow-sm">
          <div class="card-header bg-transparent border-0">
            <h3 class="mb-0"><i class="far fa-clone pr-1"></i>{{$t('profile.address')}}</h3>
          </div>
          <div v-if="role" class="card-body pt-0">
              <p>{{role.adresse ? role.adresse : $t('profile.none')}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- partial -->
           
    		</div>
		</div>
    </div>
</section>
  </div>
</template>

<script>

import axios from 'axios';
import StarRating2 from 'vue-dynamic-star-rating';
import {StarRating} from 'vue-rate-it';

export default {
  name: 'profile',
  components: {
    StarRating,
    StarRating2
  }
  ,
  data() {
      return {
          user : null,
           rating: 0,
           load : false,
           viewer_rating : 0,
           starStyle: {
            fullStarColor: '#ed8a19',
            emptyStarColor: '#737373',
            starWidth: 30,
            starHeight: 30
        }
      }
  },
  computed: {
      rated () {
          retur 
      },

      utilisateur () {
         let utilisateur = null;
         try {
            utilisateur =  this.user.utilisateur;
         } catch (error) {
             
         }
          return utilisateur;
      },
      admin () {
         let admin = null;
         try {
            admin =  this.user.admin;
         } catch (error) {
             
         }
          return admin;
      },
      role () {
          return this.utilisateur ? this.utilisateur : this.admin;  
      }
  },
  methods: { 
    updateRating(value){
        const self = this;
        self.load = !self.load ;
        axios.post(  this.$apiAdress + '/api/profile/evaluer?token=' + localStorage.getItem("api_token"),
        {
          noted_user_id : self.$route.params.id,
          note_evaluation : self.viewer_rating
        })
      .then(function (response) {
        self.user = response.data.user;
        self.rating  = self.user.rate;
        self.viewer_rating  = self.user.viewer_rate;
        self.load = !self.load ;

      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
      },
      
        editUser () {
        const editLink = this.editLink( this.user.id );
        this.$router.push({path: editLink});
        },
      editLink (id) {
      return `/profile/${id.toString()}/edit`
      },
      getUser(){
      let self = this;
      axios.get(  this.$apiAdress + '/api/profile/' + self.$route.params.id + '?token=' + localStorage.getItem("api_token"))
      .then(function (response) {
        self.user = response.data.user;
        self.rating  = self.user.rate;
        self.viewer_rating  = self.user.viewer_rate;
        

      }).catch(function (error) {
        console.log(error);
        self.$router.push({ path: '/login' });
      });
    }
  },
  mounted() {
      this.getUser();
  },
}
</script>

<style scoped>
body {
    background: #67B26F;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #4ca2cd, #67B26F);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #4ca2cd, #67B26F); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    padding: 0;
    margin: 0;
    font-family: 'Lato', sans-serif;
    color: #000;
}

.student-profile .card {
    border-radius: 10px;
}

.student-profile .card .card-header .profile_img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin: 10px auto;
    border: 10px solid #ccc;
    border-radius: 50%;
}

.student-profile .card h3 {
    font-size: 20px;
    font-weight: 700;
}

.student-profile .card p {
    font-size: 16px;
    color: #000;
}

.student-profile .table th,
.student-profile .table td {
    font-size: 14px;
    padding: 5px 10px;
    color: #000;
}

/* demo  */

/* ******************************************************
	Author URI: https://codeconvey.com/
	Demo Purpose Only - May not require to add.
	font-family: "Raleway",sans-serif;
*********************************************************/

@import url('https://fonts.googleapis.com/css?family=Raleway:400,500,600,700,800,900');



html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

article, header, section, aside, details, figcaption, figure, footer, header, hgroup, main, nav, section, summary {
    display: block;
}
body {
    color: #222;
    font-size: 100%;
    line-height: 24px;
    margin: 0;
	padding:0;
	font-family: "Raleway",sans-serif;
}
a{
	font-family: "Raleway",sans-serif;
	text-decoration: none;
	outline: none;
}
a:hover, a:focus {
	color: #373e18;
}
section {
    float: left;
    width: 100%;
	padding-bottom:3em;
}
h2 {
    color: #1a0e0e;
    font-size: 26px;
    font-weight: 700;
    margin: 0;
    line-height: normal;
	text-transform:uppercase;
}
h2 span {
    display: block;
    padding: 0;
    font-size: 18px;
    opacity: 0.7;
    margin-top: 5px;
	text-transform:uppercase;
}

#float-right{
	float:right;	
}

/* ******************************************************
	Script Top
*********************************************************/

.ScriptTop {
    background: #fff none repeat scroll 0 0;
    float: left;
    font-size: 0.69em;
    font-weight: 600;
    line-height: 2.2;
    padding: 12px 0;
    text-transform: uppercase;
    width: 100%;
}

/* To Navigation Style 1*/
.ScriptTop ul {
    margin: 24px 0;
    padding: 0;
    text-align: left;
}
.ScriptTop li{
	list-style:none;	
	display:inline-block;
}
.ScriptTop li a {
    background: #6a4aed none repeat scroll 0 0;
    color: #fff;
    display: inline-block;
    font-size: 14px;
    font-weight: 600;
    padding: 5px 18px;
    text-decoration: none;
    text-transform: capitalize;
}
.ScriptTop li a:hover{
	background:#000;
	color:#fff;
}


/* ******************************************************
	Script Header
*********************************************************/

.ScriptHeader {
    float: left;
    width: 100%;
    padding: 2em 0;
}
.rt-heading {
    margin: 0 auto;
	text-align:center;
}
.Scriptcontent{
	line-height:28px;	
}
.ScriptHeader h1{
	font-family: "brandon-grotesque", "Brandon Grotesque", "Source Sans Pro", "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
    color: #6a4aed;
    font-size: 26px;
    font-weight: 700;
    margin: 0;
    line-height: normal;

}
.ScriptHeader h2 {
    color: #312c8f;
    font-size: 20px;
    font-weight: 400;
    margin: 5px 0 0;
    line-height: normal;

}
.ScriptHeader h1 span {
    display: block;
    padding: 0;
    font-size: 22px;
    opacity: 0.7;
    margin-top: 5px;

}
.ScriptHeader span {
    display: block;
    padding: 0;
    font-size: 22px;
    opacity: 0.7;
    margin-top: 5px;
}




/* ******************************************************
	Live Demo
*********************************************************/





/* ******************************************************
	Responsive Grids
*********************************************************/

.rt-container {
	margin: 0 auto;
	padding-left:12px;
	padding-right:12px;
}
.rt-row:before, .rt-row:after {
  display: table;
  line-height: 0;
  content: "";
}

.rt-row:after {
  clear: both;
}
[class^="col-rt-"] {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  padding: 0 15px;
  min-height: 1px;
  position: relative;
}


@media (min-width: 768px) {
  .rt-container {
    width: 750px;
  }
  [class^="col-rt-"] {
    float: left;
    width: 49.9999999999%;
  }
  .col-rt-6, .col-rt-12 {
    width: 100%;
  }
  
}

@media (min-width: 1200px) {
	.rt-container {
		width: 1170px;
	}
	.col-rt-1 {
		width:16.6%;
	}
	.col-rt-2 {
		width:30.33%;
	}
	.col-rt-3 {
		width:50%;
	}
	.col-rt-4 {
		width: 67.664%;
	}
	.col-rt-5 {
		width: 83.33%;
	}
	

}

@media only screen and (min-width:240px) and (max-width: 768px){
	 .ScriptTop h1, .ScriptTop ul {
		text-align: center;
	}
	.ScriptTop h1{
		margin-top:0;
		margin-bottom:15px;
	}
	.ScriptTop ul{
		 margin-top:12px;		
	}
	
	.ScriptHeader h1,
	.ScriptHeader h2, 
	.scriptnav ul{
		text-align:center;	
	}
	.scriptnav ul{
		 margin-top:12px;		
	}
	#float-right{
		float:none;	
	}
	
}
.disabledDiv {
    pointer-events: none;
    opacity: 0.4;
}
</style>
