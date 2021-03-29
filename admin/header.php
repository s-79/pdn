<!DOCTYPE html>
<html lang="fr">
    <head>
        <title>Administration PDN 93</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="description" content=" Description de la page">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="../img/favicon.ico">
        <link rel="icon" type="image/png" sizes="32x32" href="../img/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="../img/favicon-16x16.png">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" >
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css">
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script> -->
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="../style.css">
    </head>

    <body>
        <header>
            <nav class="navbar navbar-expand-xl blue-bg fixed-top mb-3">
                <a class="navbar-brand text-white" href="index.php"> <strong>ADMINISTRATION PDN</strong>
                    <img src="../img/logo.png" width="40" height="34" alt="Logo Promeneurs du Net 93">
                </a>
                <!-- <h1 class="text-white">PROMENEURS DU NET 93</h1> -->
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
                    <i class="fas fa-bars fa-lg"></i>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="myNavbar">
                    <ul class="nav nav-pills navbar-nav">
                        <!-- <li class="nav-item"><a class="nav-link" href="presentation.php">&nbsp;<i class="fa fa-info-circle fa-lg"></i>&nbsp;Présentation&nbsp;</a></li> -->
                        <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="menuderoulantStr" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">&nbsp;<i class="fas fa-store-alt fa-lg"></i>&nbsp;Structures&nbsp;&nbsp;</a>
                            <div class="dropdown-menu" aria-labelledby="menuderoulantStr">
                                <a class="dropdown-item" href="strAjout.php">Ajouter une structure</a>
                                <a class="dropdown-item" href="strModif.php">Modif/Suppr une structure</a>
                                    <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="typeAjout.php">Ajouter un type</a>
                                <a class="dropdown-item" href="typeModif.php">Modif/Suppr un type</a>
                            </div>
                        </li>
                        <!-- fas fa-mobile-alt -->
                        <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="menuderoulantPdn" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">&nbsp;<i class="fas fas fa-comments fa-lg"></i>&nbsp;Promeneurs&nbsp;&nbsp;</a>
                            <div class="dropdown-menu" aria-labelledby="menuderoulantPdn">
                                <a class="dropdown-item" href="pdnAjout.php">Ajouter un promeneur</a>
                                <a class="dropdown-item" href="pdnModif.php">Modif/Suppr un promeneur</a>
                            </div>
                        </li>
                        <!-- <i class="fas fa-tools"></i> -->
                        <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="menuderoulantOut" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">&nbsp;<i class="fa fa-toolbox fa-lg"></i>&nbsp;Ressources&nbsp;</a>
                            <div class="dropdown-menu" aria-labelledby="menuderoulantOut">
                                <a class="dropdown-item" href="outAjout.php">Ajouter une ressource</a>
                                <a class="dropdown-item" href="outModif.php">Modif/Suppr une ressource</a>
                                    <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="themAjout.php">Ajouter une thématique</a>
                                <a class="dropdown-item" href="themModif.php">Modif/Suppr une thématique</a>
                                    <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="catAjout.php">Ajouter une catégorie</a>
                                <a class="dropdown-item" href="catModif.php">Modif/Suppr une catégorie</a>
                            </div>
                        </li>
                        <!-- <li class="nav-item"><a class="nav-link" href="#">&nbsp;<i class="fas fa-user fa-lg"></i>&nbsp;Connexion&nbsp;</a></li> -->
                    </ul>
                </div>
           </nav>
        </header>

        <div class="dropdown-menu">
  <h6 class="dropdown-header">Dropdown header</h6>
  <a class="dropdown-item" href="#">Action</a>
  <a class="dropdown-item" href="#">Another action</a>
</div>
