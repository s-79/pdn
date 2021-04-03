<!DOCTYPE html>
<html lang="fr">
    <head>
        <title>Promeneurs du Net 93</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="robots" content="noindex">
        <meta name="description" content=" Description de la page">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="img/favicon.ico">
        <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png">
        <link rel="stylesheet" href="scripts/bootstrap.min.css">
        <link rel="stylesheet" href="scripts/fontawesome.min.css">
        <script src="scripts/jquery-3.5.1.min.js"></script>
        <script type="text/javascript" src="scripts/fontawesome.all.min.js"></script>
        <script src="scripts/bootstrap.bundle.min.js"></script>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <header>
            <nav class="navbar navbar-expand-xl blue-bg fixed-top mb-3">
                <a class="navbar-brand text-white" href="index.php"> <strong>PROMENEURS DU NET</strong>
                    <img src="img/logo.png" width="40" height="34" alt="Logo Promeneurs du Net 93">
                </a>
                <!-- <h1 class="text-white">PROMENEURS DU NET 93</h1> -->
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
                    <i class="fas fa-bars fa-lg"></i>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="myNavbar">
                    <ul class="nav nav-pills navbar-nav">
                        <!-- Pour faire apparaitre le triangle, ajouter "dropdown-toggle" après nav-link -->
                        <li class="nav-item dropdown"><a id="menuderoulantPres" class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">&nbsp;<i class="fa fa-info-circle fa-lg"></i>&nbsp;<span class="font-weight-normal">Présentation</span>&nbsp;&nbsp;</a>
                            <div class="dropdown-menu" aria-labelledby="menuderoulantPres">
                                <a id="menupres1_0" class="dropdown-item font-weight-bold text-uppercase" href="presentation.php#"> Le dispositif Promeneur du Net</a>
                                <a id="menupres1_1" class="dropdown-item initial" href="presentation.php#">• Présentation de la démarche</a>
                                <!-- Pour charger (load dans le js) le contenu php, mettre un # comme pour une ancre nommée après presentation.php -->
                                <a id="menupres1_2" class="dropdown-item initial" href="presentation.php#">• Qu'est-ce qu'un Promeneur du Net ?</a>
                                <a id="menupres1_3" class="dropdown-item initial" href="presentation.php#">• Lancement du dispositif en Seine-Saint-Denis</a>
                                    <div class="dropdown-divider"></div>
                                <a id="menupres2_0" class="dropdown-item font-weight-bold text-uppercase" href="presentation.php#">La coordination du réseau</a>
                                <a id="menupres2_1" class="dropdown-item initial" href="presentation.php#">• La Ligue de l'enseignement – FOL 93</a>
                                <a id="menupres2_2" class="dropdown-item initial" href="presentation.php#">• Les missions de la coordination </a>
                                <a id="menupres2_3" class="dropdown-item initial" href="presentation.php#">• Le déploiement du réseau</a>
                                    <div class="dropdown-divider"></div>
                                <a id="menupres3_0" class="dropdown-item font-weight-bold text-uppercase" href="presentation.php#">Les pilotes</a>
                            </div>
                        </li>
                        <!-- <li class="nav-item"><a class="nav-link" href="presentation.php">&nbsp;<i class="fa fa-info-circle fa-lg"></i>&nbsp;Présentation&nbsp;</a></li> -->
                        <!-- <i class="fas fa-home fa-lg"></i> ou <i class="fas fa-hotel fa-lg"></i> ou <i class="fas fa-map-marker-alt fa-lg"></i>-->
                        <li class="nav-item"><a id="strMenu" class="nav-link" href="structures.php">&nbsp;<i class="fas fa-store-alt fa-lg"></i>&nbsp;Structures&nbsp;&nbsp;</a></li>
                        <!-- fas fa-mobile-alt -->
                        <li class="nav-item"><a id="pdnMenu" class="nav-link" href="promeneurs.php">&nbsp;<i class="fas fas fa-comments fa-lg"></i>&nbsp;Promeneurs&nbsp;&nbsp;</a></li>
                        <!-- <i class="fas fa-tools"></i> -->
                        <li class="nav-item"><a id="outMenu" class="nav-link" href="ressources.php">&nbsp;<i class="fa fa-toolbox fa-lg"></i>&nbsp;Ressources&nbsp;&nbsp;</a></li>
                        <li class="nav-item"><a id="connexMenu" class="nav-link" href="connexion.php">&nbsp;<i id="iconnex" class="fas fa-user fa-lg"></i>&nbsp;<?php if(isset($_SESSION["prenom_pdn"])){echo $_SESSION['prenom_pdn'];}else{echo "Connexion";} ?>&nbsp;&nbsp;</a></li>
                    </ul>
                </div>
           </nav>
        </header>
