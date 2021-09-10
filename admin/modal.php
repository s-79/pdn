<!--                                                                             ! ! ! - - P D N - - ! ! ! -->

<div class="modal fade" id="modal_select_pdn" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel" style="font-size:1.1em;">Ajouter des PDN à l'action</h3>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body d-flex justify-content-start">
          <button id="btn_select_AllPdn" type="button" class="btn btn-outline-secondary m-2">Tous</button>
          <button id="btn_select_NoPdn" type="button" class="btn btn-outline-secondary m-2">Aucun</button>
          <button id="btn_select_PdnReseau" type="button" class="btn btn-outline-secondary m-2">Réseau</button>
          <button id="btn_select_PdnActifs" type="button" class="btn btn-outline-secondary m-2">Actifs</button>
      </div>

      <div id="modal_list_pdn" class="modal-body py-0" style="overflow-y:scroll; overflow-x:hidden; height:500px;">
      </div>
      <div class="modal-footer">
          <button id="btn_select_pdn" type="button" class="btn btn-primary">Séléctionner</button>
      </div>
    </div>
  </div>
</div>

<!--                                                                             ! ! ! - - R E S S O U R C E S- - ! ! ! -->

<div class="modal fade" id="modal_select_ress" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel" style="font-size:1.1em;">Ajouter les outils partagés lors de l'action</h3>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body d-flex justify-content-start">
          <button id="btn_select_AllRess" type="button" class="btn btn-outline-secondary m-2">Tous</button>
          <button id="btn_select_NoRess" type="button" class="btn btn-outline-secondary m-2">Aucun</button>
      </div>

      <div id="modal_list_ress" class="modal-body py-0" style="overflow-y:scroll; overflow-x:hidden; height:500px;">
      </div>
      <div class="modal-footer">
          <button id="btn_select_ress" type="button" class="btn btn-primary">Séléctionner</button>
      </div>
    </div>
  </div>
</div>

<!--                                                                             ! ! ! - - P A R T E N A I R E S- - ! ! ! -->

<div class="modal fade" id="modal_select_part" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel" style="font-size:1.1em;">Ajouter les partenaires de l'action</h3>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body d-flex justify-content-start">
          <button id="btn_select_Allpart" type="button" class="btn btn-outline-secondary m-2">Tous</button>
          <button id="btn_select_Nopart" type="button" class="btn btn-outline-secondary m-2">Aucun</button>
      </div>

      <div id="modal_list_part" class="modal-body py-0" style="overflow-y:scroll; overflow-x:hidden; height:500px;">
      </div>
      <div class="modal-footer">
          <button id="btn_select_part" type="button" class="btn btn-primary">Séléctionner</button>
      </div>
    </div>
  </div>
</div>

<!--                                                                             ! ! ! - - S T R U C T U R E S - - ! ! ! -->

<div class="modal fade" id="modal_select_str" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel" style="font-size:1.1em;">Ajouter des structures à l'action</h3>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body d-flex justify-content-start">
          <button id="btn_select_Allstr" type="button" class="btn btn-outline-secondary m-2">Toutes</button>
          <button id="btn_select_Nostr" type="button" class="btn btn-outline-secondary m-2">Aucune</button>
          <button id="btn_select_strReseau" type="button" class="btn btn-outline-secondary m-2">Réseau</button>
          <button id="btn_select_strActives" type="button" class="btn btn-outline-secondary m-2">Actives</button>
      </div>

      <div id="modal_list_str" class="modal-body py-0" style="overflow-y:scroll; overflow-x:hidden; height:500px;">
      </div>
      <div class="modal-footer">
          <button id="btn_select_str" type="button" class="btn btn-primary">Séléctionner</button>
      </div>
    </div>
  </div>
</div>

<!--                                                                             ! ! ! - - C O O R D O - - ! ! ! -->

<!--                                                                                                               Modal pour choisir ajouter / modifier un coordo -->
<div class="modal fade" id="modal_coordo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel" style="font-size:1.1em;">Ajouter ou modifier/supprimer un.e coordo</h3>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-center my-3">
          Souhaitez-vous ajouter ou modifier/supprimer un·e coordo ?
      </div>
      <div class="modal-footer">
          <button id="btn_coordo_create" type="button" class="btn btn-primary close-modal" data-bs-toggle="modal" data-bs-target="#modal_coordo_create">Ajouter</button>
          <button id="btn_coordo_update" type="button" class="btn btn-warning close-modal" data-bs-toggle="modal" data-bs-target="#modal_coordo_update">Modifier</button>
      </div>
    </div>
  </div>
</div>

<!---                                                                           Modal pour ajouter un·e coordo -->
<div class="modal fade" id="modal_coordo_create" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title" id="exampleModalLabel" style="font-size:1.1em;">Ajouter un·e coordo</h3>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="form_coordo_create">
                    <div class="form-floating mx-3 mt-3">
                        <input type="text" class="form-control" id="create_prenom_coordo" placeholder="Nom *">
                        <label for="create_prenom_coordo">Prénom *</label>
                    </div>
                    <div class="form-floating mx-3 mt-3">
                        <input type="text" class="form-control" id="create_nom_coordo" placeholder="Nom *">
                        <label for="create_nom_coordo">Nom *</label>
                    </div>
                    <div class="my-4 mx-3">
                        <label class="form-check-label ms-3 me-2" for="create_actif_coordo">Actif</label>
                        <input class="form-check-input" type="checkbox" value="" id="create_actif_coordo">
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button id="coordo_create" type="button" class="btn btn-primary">Ajouter</button>
            </div>
        </div>
    </div>
</div>

<!---                                                                           Modal pour modifier un·e coordo -->
<div class="modal fade" id="modal_coordo_update" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title" id="exampleModalLabel" style="font-size:1.1em;">Modifier ou supprimer un.e coordo</h3>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="form-floating mx-3 mt-4">
                    <select class="form-select" id="select_nom_coordo" aria-label="Nom du coordo">
                    </select>
                    <label for="select_nom_coordo">Séléctionner le nom du / de la coordo à modifier</label>
                </div>
                <form id="form_coordo_update">
                    <!--                                                                                                        Récupération de l'id dans un input invisible -->
                    <input type="text" class="form-control d-none" id="update_id_coordo">
                    <div class="form-floating mx-3 mt-3">
                        <input type="text" class="form-control" id="update_prenom_coordo" placeholder="Prénom du / de la coordo">
                        <label for="update_prenom_coordo">Modifier le prénom du / de la coordo</label>
                    </div>
                    <div class="form-floating mx-3 mt-3">
                        <input type="text" class="form-control" id="update_nom_coordo" placeholder="Nom du / de la coordo">
                        <label for="update_nom_coordo">Modifier le nom du / de la coordo</label>
                    </div>
                    <div class="my-4 mx-3">
                        <label class="form-check-label ms-3 me-2" for="update_actif_coordo">Actif</label>
                        <input class="form-check-input" type="checkbox" value="" id="update_actif_coordo">
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button id="coordo_update" type="button" class="btn btn-warning">Modifier</button>
                <button id="coordo_delete" type="button" class="btn btn-danger">Supprimer</button>
            </div>
        </div>
    </div>
</div>

<!--                                                                            MODAL MODIF INFOS -->
<div class="modal fade" id="modalActAdmin" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title orange">ADMINISTRATION PDN</h2>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div id="message_admin_act" class="modal-body py-3 bleu">
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">OK</button>
            </div>
        </div>
    </div>
</div>
