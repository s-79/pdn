<!DOCTYPE html>
<html lang="fr">
<head>
    <title>Promeneurs du Net 93</title>
    <meta charset="utf-8">
    <meta name="description" content="Promeneurs du Net 93 - Retrouvez plus de 150 ressources en ligne classées par thématiques ainsi que la présentation des structures et des PDN de Seine-Saint-Denis et les promeneurs de Seine-Saint-Denis ainsi que des dizaines de ressources classées par thématiques.">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="shortcut icon" href="img/favicon.ico">
    <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
    <script src="scripts/bootstrap.bundle.min.js"></script>
    <script src="scripts/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="scripts/fontawesome.min.css">
    <link rel="stylesheet" href="scripts/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
<nav class="navbar navbar-expand-xl navbar-dark fixed-top">
    <div class="container-fluid">
        <a class="navbar-brand pt-1 pb-0" style="font-size:1.35em;" href="index.php"><strong id="pdn_title" class="text-white me-2">PDN</strong><strong id="prom_title" class="titre text-white me-2">PROMENEURS DU NET</strong>
        <img src="img/logo_header.png" class="rounded rounded-3" style="padding-bottom:.1em; max-height:38px;" alt="Promeneurs du Net"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-center" id="navbarsExampleDefault">
            <ul class="navbar-nav nav-pills mb-2 mb-md-0">
                <li class="nav-item dropdown">
                    <a class="nav-link px-4" style="font-size:0.9em;" href="#" id="menuderoulantPres" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa fa-info-circle fa-lg pe-2"></i>PRÉSENTATION
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="menuderoulantPres">
                        <li><a id="menupres1_0" class="dropdown-item fw-bold" href="pres.php#"> LE DISPOSITIF PROMENEUR DU NET</a></li>
                        <li><a id="menupres1_1" class="dropdown-item" href="pres.php#">• Présentation de la démarche</a></li>
                        <li><a id="menupres1_2" class="dropdown-item" href="pres.php#">• Qu'est-ce qu'un Promeneur du Net ?</a></li>
                        <li><a id="menupres1_3" class="dropdown-item" href="pres.php#">• Lancement du dispositif en Seine-Saint-Denis</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a id="menupres2_0" class="dropdown-item fw-bold" href="pres.php#">LA COORDINATION DU RÉSEAU</a></li>
                        <li><a id="menupres2_1" class="dropdown-item" href="pres.php#">• La Ligue de l'enseignement – FOL 93</a></li>
                        <li><a id="menupres2_2" class="dropdown-item" href="pres.php#">• Les missions de la coordination </a></li>
                        <li><a id="menupres2_3" class="dropdown-item" href="pres.php#">• Le déploiement du réseau</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a id="menupres3_0" class="dropdown-item fw-bold" href="pres.php#">LES PILOTES</a></li>
                    </ul>
                </li>
                <li class="nav-item mx-1">
                    <a id="menu_str" class="nav-link px-4" style="font-size:0.9em;" href="str.php"><i class="fas fa-store-alt fa-lg pe-2"></i>STRUCTURES</a>
                </li>
                <li class="nav-item mx-1">
                    <a id="menu_pdn" class="nav-link px-4" style="font-size:0.9em;" href="pdn.php"><i class="fas fas fa-comments fa-lg pe-2"></i>PROMENEURS</a>
                </li>
                <li class="nav-item mx-1">
                    <a id="menu_ress" class="nav-link px-4" style="font-size:0.9em;" href="ress.php"><i class="fas fa-toolbox fa-lg pe-2"></i>RESSOURCES</a>
                </li>
                <li class="nav-item mx-1">
                    <a id="menu_conn" class="nav-link px-4" style="font-size:0.9em;" href="conn.php">
                        <?php if(isset($_SESSION["prenom"])){?><i class="fas fa-user fa-lg orange pe-2"></i><?php echo mb_strtoupper($_SESSION['prenom']);}
                        else{?><i class="fas fa-user fa-lg pe-2"></i><?php echo "CONNEXION";} ?></a>
                </li>

            </ul>
        </div>
    </div>
</nav>
