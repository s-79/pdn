<!--                                                                             ! ! ! - - M O D A L   A U T R E  R S - - ! ! ! -->

<div class="modal fade" id="modal_nom_rs" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title fw-bold text-uppercase my-1" id="exampleModalLabel">Nom de l'application</h2>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="form_autre_rs">
                    <div class="form-floating mx-3 mt-2 mb-3">
                        <select class="form-select" id="select_nom_rs" aria-label="Nom de l'application">
                            <option selected value="">Nom de l'application</option>
                            <option value="TikTok">TikTok</option>
                            <option value="Discord">Discord</option>
                            <option value="Twitch">Twitch</option>
                            <option value="Youtube">Youtube</option>
                            <option value="Twitter">Twitter</option>
                            <option value="Linkedin">Linkedin</option>
                            <option value="Autre">Autre</option>
                        </select>
                        <label for="select_nom_rs">Nom de l'application</label>
                    </div>
                    <div id="div_nom_rs" class="form-floating mx-3 my-3 d-none">
                        <input type="text" class="form-control" id="get_nom_rs" placeholder="Précisez...">
                        <label for="get_nom_rs">Précisez...</label>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
            <button id="btn_modal_nom_rs" type="button" class="btn btn-primary">Valider</button>
            </div>
        </div>
    </div>
</div>

<!--                                                                             ! ! ! - - M O D A L   R S - - ! ! ! -->

<div class="modal fade" id="modal_rs" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h2 class="modal-title fw-bold text-uppercase my-1" id="exampleModalLabel">Sur l'application <span id="nom_rs"></span> ... </h2>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form id="form_rs">
                <div class="form-floating mx-3 mt-3">
                    <select class="form-select" id="satisfaction" aria-label="Niveau de satisfaction par rapport à l'utilisation de cet outil">
                        <option selected value="">Niveau de maîtrise du PDN</option>
                        <option value="Pauvre">Pauvre</option>
                        <option value="Moyen">Moyen</option>
                        <option value="Bon">Bon</option>
                        <option value="Excellent">Excellent</option>
                    </select>
                    <label for="satisfaction">Niveau de satisfaction et de maîtrise du PDN</label>
                </div>
                <div class="form-floating mx-3 mt-3">
                    <select class="form-select" id="age" aria-label="Tranche d'âge principale">
                        <option selected value="">Tranche d'âge principale</option>
                        <option value="De 12 à 17 ans">De 12 à 17 ans</option>
                        <option value="De 18 à 25 ans">De 18 à 25 ans</option>
                        <option value="Plus de 25 ans">Plus de 25 ans</option>
                        </select>
                    <label for="age">Tranche d'âge principale</label>
                </div>
                <div class="form-floating mx-3 mt-3">
                    <select class="form-select" id="followers" aria-label="Nombre de followers">
                        <option selected value="">Nombre de followers</option>
                        <option value="Moins de 10">Moins de 10</option>
                        <option value="De 10 à 50">De 10 à 50</option>
                        <option value="De 50 à 100">De 50 à 100</option>
                        <option value="Plus de 100">Plus de 100</option>
                    </select>
                    <label for="followers">Nombre de followers</label>
                </div>
                <div id="div_nb_follow" class="form-floating mx-3 mt-3 mb-3 d-none">
                    <input type="text" class="form-control" id="get_nb_follow" placeholder="Nombre approximatif de followers">
                    <label for="get_nb_follow">Nombre approximatif de followers</label>
                </div>
                <div class="form-floating mx-3 mt-3">
                    <select class="form-select" id="message" aria-label="Nb de messages courts et échanges informels">
                        <option selected value="">Nombre de messages courts et échanges informels</option>
                        <option value="Moins de 10">Moins de 10</option>
                        <option value="De 10 à 25">De 10 à 25</option>
                        <option value="De 25 à 50">De 25 à 50</option>
                        <option value="Plus de 50">Plus de 50</option>
                    </select>
                    <label for="new_acc">Nb de messages courts et échanges informels</label>
                </div>
                <div id="div_nb_message" class="form-floating mx-3 mt-3 mb-3 d-none">
                    <input type="text" class="form-control" id="get_nb_message" placeholder="Nombre approximatif de messages courts">
                    <label for="get_nb_message">Nombre approximatif de messages courts</label>
                </div>
                <div class="form-floating mx-3 mt-3">
                    <select class="form-select" id="acc" aria-label="Nombre d'accompagnements et suivis">
                        <option selected value="">Nombre d'accompagnements et suivis</option>
                        <option value="Aucun">Aucun</option>
                        <option value="Moins de 5">Moins de 5</option>
                        <option value="De 5 à 10">De 5 à 10</option>
                        <option value="Plus de 10">Plus de 10</option>
                    </select>
                    <label for="acc">Nombre d'accompagnements et suivis</label>
                </div>
                <div id="div_nb_acc" class="form-floating mx-3 mt-3 mb-3 d-none">
                    <input type="text" class="form-control" id="get_nb_acc" placeholder="Nombre approx. d'accomp. et suivis">
                    <label for="get_nb_acc">Nombre approx. d'accomp. et suivis</label>
                </div>
                <div class="form-floating mx-3 mt-3">
                    <select class="form-select" id="new_acc" aria-label="Nombre de nouveaux accompagnements">
                        <option selected value="">Nombre de nouveaux accompagnements</option>
                        <option value="Aucun">Aucun</option>
                        <option value="Moins de 5">Moins de 5</option>
                        <option value="De 5 à 10">De 5 à 10</option>
                        <option value="Plus de 10">Plus de 10</option>
                    </select>
                    <label for="new_acc">Nombre de nouveaux accompagnements</label>
                </div>
                <div id="div_nb_new_acc" class="form-floating mx-3 mt-3 mb-3 d-none">
                    <input type="text" class="form-control" id="get_nb_new_acc" placeholder="Nombre approx. de nouveaux accomp.">
                    <label for="get_nb_new_acc">Nombre approx. de nouveaux accomp.</label>
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button id="btn_modal_rs" type="button" class="btn btn-primary">Valider</button>
        </div>
        </div>
    </div>
</div>

<!--                                                                             ! ! ! - - M O D A L   I N I T I A T I V E S - - ! ! ! -->

<div class="modal fade" id="modal_init" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title fw-bold text-uppercase my-1" id="exampleModalLabel">Initiatives du mois passé...</h2>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div id="modal_init_btn">
                </div>
                <div id="modal_init_div">
                </div>
            </div>
            <div class="modal-footer">
                <button id="btn_modal_facebook" type="button" class="btn btn-primary">Valider</button>
            </div>
        </div>
    </div>
</div>
