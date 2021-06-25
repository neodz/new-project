const fr = {
    router : {
        dashboard : 'Tableau de bord',
        Home : 'Domicile',
        articles : 'Articles',
        CreateArticle : 'Créer un article',
        EditArticle : "Modifier l'article",
        ArticleDetails : "Détails de l'article",
        ArticleTransactions : "Transactions d'articles",
        ArticleExchanges : "Échanges d'articles",
        ArticleTransactionsDetails : "Détails de Transactions d'articles",
        Achats : 'Achats',
        CreateAchat : 'Créer un achat',
        AchatDetails : "Details d'Achat",
        Exchanges : 'Exchanges',
        CreateExchange : 'Créer un échange',
        EditExchange : "Modifier l'échange",
        ExchangeDetails : "Détails de l'échange",
        Locations : 'Locations',
        CreateLocation : 'Louer un article',
        EditLocation : 'Modifier une Location',
        LocationDetails : 'Details de Location',
        Profile : 'Profil',
        EditProfile : 'Editer le Profil',
        ShowProfile : 'Afficher le Profile',
        Users : 'Utilisateurs',
        User : 'Utilisateur',
        EditUser : 'Editer un Utilisateur'
    },
    dashboard : {
        admin : { 
            all_users : 'Tous les utilisateurs',
            new_users : 'Nouveaux utilisateurs',
            users_banned : 'Utilisateurs bloqués',
            articles : 'Articles',
            all_transactions : 'Toutes Les transactions',
            location_articles : 'Les articles de type location',
            exchange_articles : 'Les articles de type exchange',
            achat_articles : 'Les articles de type achat',
            location_transactions : 'Location transactions',
            exchange_transactions : 'Exchange transactions',
            achat_transactions : 'Achat transactions',
            users_active : 'Les utilisateurs active',
        },
        search : 'Recherche',
        categories : {
            category : 'Catégorie',
            none : 'Rien'
        },
        type_transactions :{
            type_transaction : 'Type de transaction'
        },
        article : { 
            title : 'Article',
            view_article : "Voir l'article",
            owner : 'Propriétaire',
            type_transaction : 'Type de transaction'
        }
    },
    login : { 
        title : 'Login',
        description : 'Connectez-vous à votre compte',
        username : "Nom d'utilisateur",
        password : "Mot de passe",
        submit : 'Connexion',
        register : { 
            title : "S'inscrire",
            description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            button : "S'inscrire maintenant"
        }
    },
    register : {
       title : "S'inscrire",
       description : 'Créez votre compte',
       last_name : 'Nom',
       first_name : 'Prenom',
       place_of_birth : 'Lieu de naissance',
       adresse : 'Adresse',
       phone : "Numéro de téléphone",
       card_id : 'Carte identite',
       email : 'Email',
       password : 'Mot de passe',
       repeat_password : "Répéter le mot de passe",
       gender : {
           female : 'femelle',
           male : 'mâle'
       },
       submit : 'Créer un compte'
    },
    article_details : {
        poster : { 
            title : 'Article poster',
            exchange_article : "Échanger l'article",
            buy_article : "Acheter l'article",
            rent_article : "Louer l'article",
        },
        card : {
            article_id : "ID de l'article",
            all_exchange_transactions : "Toutes les transactions d'échanges",
            all_rental_transactions : "Toutes les transactions de location",
            all_purchase_transactions : "Toutes les opérations d'achat",
            available : 'Disponible',
            unavailable : 'Indisponible',
            articles : 'articles',
            back : 'Revenir'
        }
    },
    edit_article : { 
        title : "L'article id",
        name : 'Designation',
        price : 'Prix',
        delivery_rate : 'Tarif de livraison',
        amount : 'Quantite',
        type_transaction : "Type transaction",
        adresse : 'Adresse',
        category : 'Catégorie',
        payment_method : 'Méthode paiement',
        description : 'Description',
        back : 'Revenir',
        submit : 'Sauvegarder',
        poster : 'Poster',
        photo : 'Choisir photo',
        current_poster : "Affiche actuelle"
    },
    articles : { 
        title : 'Mes Articles',
        search : 'Recherche',
        add_article : 'Ajouter un article',
        edit : 'Éditer',
        delete : 'Effacer',
        show : 'Afficher',
        categories : {
            category : 'Catégorie',
            none : 'Rien'
        },
        type_transactions :{
            type_transaction : 'Type de transaction'
        },
        status_article : {
            status_article : "Etat de l'article",
            none : 'Rien'
        }
    },
    locations : { 
        title : 'Mes Locations',
        add_location : "Louer un article",
        edit : 'Éditer',
        delete : 'Effacer',
        show : 'Afficher',
    },
    exchanges : {

        title : 'Mes exchanges',
        add_exchange : "Exchange un article",
        edit : 'Éditer',
        delete : 'Effacer',
        show : 'Afficher',
    },
    achats : {

        title : 'Mes Transaction Achats',
        buy_article : "Acheter un article",
        edit : 'Éditer',
        delete : 'Effacer',
        show : 'Afficher',
    }
    ,
    edit_exchange : { 
        name : 'Element echange',
        amount : 'Quantite',
        address : 'Adresse',
        description : 'Description',
        photo : 'Choisir photo',
        
        back : 'Revenir',
        submit : 'Sauvegarder',
        current_poster : "Affiche actuelle"
    },
    
    create_achat : { 
        amount : 'Quantite',
        category : 'Catégorie',
        payment_method : 'Methode de paiement',
        back : 'Revenir',
        submit : 'Sauvegarder',
        current_poster : "Affiche actuelle"
    },
    
    edit_location : {
        amount : 'Quantite',
        date_start : 'Date sortie',
        date_end : 'Date Entrer',
        current_poster : "Affiche actuelle",
        back : 'Revenir',
        submit : 'Sauvegarder',
    },
    create_location : {
        amount : 'Quantite',
        date_start : 'Date sortie',
        date_end : 'Date Entrer',
        current_poster : "Affiche actuelle",
        back : 'Revenir',
        submit : 'Sauvegarder',
    },
    create_exchange : {
        
        name : 'Element echange',
        amount : 'Quantite',
        address : 'Adresse',
        description : 'Description',
        photo : 'Choisir photo',
        
        back : 'Revenir',
        submit : 'Sauvegarder',
        current_poster : "Affiche actuelle"
    },
    users : { 
        title : 'Les utilisateurs',
        back : 'Revenir',
        submit : 'Sauvegarder',
        edit : 'Éditer',
        delete : 'Effacer',
        show : 'Afficher',
        status_account : 'Etat de la compte',
    },
    nav_bar : { 
        settings : 'Les paramètres',
        profile : 'Profil',
        logout : 'Se déconnecter'
    },
    side_bar : {
        "Mes articles" : 'Mes articles',
        "Explorer" : 'Explorer',
        "Mes transactions" : "Mes transactions",
        Locations : "Locations",
        Exchanges : 'Exchanges',
        "Transaction Achats" : 'Transaction Achats',
        Dashboard : 'Tableau de bord',
        Login : "Login",
        Register : "Register",
        Articles : "Articles",
        Users : 'Utilisateurs',
    },
    profile : { 
        title : 'Utilisateur Profile Page',
        date_of_birth : 'Date de naissance',
        place_of_birth : 'Lieu de naissance',
        sex : 'Sexe',
        address : 'Addresse',
        card_id : 'Card identite',
        phone : 'Numero de telephone',
        email : 'Email',
        edit : 'Éditer',
        none : 'indéfini'
        
    },
    edit_profile : { 
        title : "Editer",
        description : 'Editer votre compte',
        last_name : 'Nom',
        first_name : 'Prenom',
        place_of_birth : 'Lieu de naissance',
        adresse : 'Adresse',
        phone : "Numéro de téléphone",
        card_id : 'Carte identite',
        email : 'Email',
        password : 'Mot de passe',
        repeat_password : "Répéter le mot de passe",
        gender : {
            female : 'femelle',
            male : 'mâle'
        },
        back : 'Revenir',
        submit : 'Sauvegarder',
    },
    alert : { 
        achat : { 
            created : 'Achat créé avec succès.',
            updated : 'Achat mis à jour avec succès',
            deleted : 'Achat supprimé avec succès'
        },
        exchange : { 
            created : 'exchange créé avec succès.',
            updated : 'exchange mis à jour avec succès',
            deleted : 'exchange supprimé avec succès'
        },
        location : { 
            created : 'location créé avec succès.',
            updated : 'location mis à jour avec succès',
            deleted : 'location supprimé avec succès'
        },
        article : { 
            created : 'article créé avec succès.',
            updated : 'article mis à jour avec succès',
            deleted : 'article supprimé avec succès'
        },
        transaction : { 
            created : 'transaction créé avec succès.',
            updated : 'transaction mis à jour avec succès',
            deleted : 'transaction supprimé avec succès'
        },
        user : { 
            created : 'utilisateur créé avec succès.',
            updated : 'utilisateur mis à jour avec succès',
            deleted : 'utilisateur supprimé avec succès'
        },
    }
}



export default fr;

