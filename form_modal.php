<!--                                                                             ! ! ! - - M O D A L   A U T R E  R S - - ! ! ! -->

<div class="modal fade" id="modal_nom_rs" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
    <div class="modal-dialog">
        <div class="modal-content">
            <div id="div_header_nom_rs" class="modal-header">
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
            <div id="div_footer_nom_rs" class="modal-footer">
            </div>
        </div>
    </div>
</div>

<!--                                                                             ! ! ! - - M O D A L   R S - - ! ! ! -->

<div class="modal fade" id="modal_rs" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
    <div class="modal-dialog">
        <div class="modal-content">
        <div id="div_header_rs" class="modal-header">
        </div>
        <div class="modal-body pb-4">
            <form id="form_rs">
                <div class="form-floating mx-3 mt-3">
                    <select class="form-select" id="maitrise" aria-label="Niveau de maîtrise du PDN par rapport à l'application">
                        <option selected value="">Niveau de maîtrise du PDN</option>
                        <option value="Faible">Faible (besoin de formation)</option>
                        <option value="Moyen">Moyen</option>
                        <option value="Bon">Bon</option>
                        <option value="Excellent">Excellent</option>
                    </select>
                    <label for="maitrise">Niveau de maîtrise du PDN par rapport à l'application</label>
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
                <div class="form-floating mx-3 mt-3">
                    <select class="form-select" id="messages" aria-label="Nb de messages courts et échanges informels">
                        <option selected value="">Nombre de messages courts et échanges informels</option>
                        <option value="Moins de 10">Moins de 10</option>
                        <option value="De 10 à 25">De 10 à 25</option>
                        <option value="De 25 à 50">De 25 à 50</option>
                        <option value="Plus de 50">Plus de 50</option>
                    </select>
                    <label for="messages">Nb de messages courts et échanges informels</label>
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
            </form>
        </div>
            <div id="modal_rs_footer" class="modal-footer">
            </div>
        </div>
    </div>
</div>

<!--                                                                             ! ! ! - - M O D A L   I N I T I A T I V E S  P A S S É E S- - ! ! ! -->

<div class="modal fade" id="modal_init" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
    <div class="modal-dialog">
        <div class="modal-content">
            <div id="modal_init_header" class="modal-header">
            </div>
            <div class="modal-body">
                <div id="modal_init_btn" class="text-center">
                </div>
                <div id="modal_init_div">
                </div>
            </div>
            <div class="modal-footer">
                <button id="btn_modal_init" type="button" class="btn btn-primary">Valider</button>
            </div>
        </div>
    </div>
</div>

<!--                                                                             ! ! ! - - M O D A L   N E X T  I N I T I A T I V E S - - ! ! ! -->

<div class="modal fade" id="modal_next_init" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
    <div class="modal-dialog">
        <div class="modal-content">
            <div id="modal_next_init_header" class="modal-header">
            </div>
            <div class="modal-body">
                <div id="modal_next_init_btn" class="text-center">
                </div>
                <div id="modal_next_init_div">
                </div>
            </div>
            <div class="modal-footer">
                <button id="btn_modal_next_init" type="button" class="btn btn-primary">Valider</button>
            </div>
        </div>
    </div>
</div>
