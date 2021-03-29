<?php
class PdoXmlR
{
    var $connex;
	var $nombase;
	var $tbl;

	public function PdoXmlR($server,$user,$mdp,$db)
	{
		$this->connex=new PDO("mysql:host=$server;dbname=$db", $user, $mdp);
		$this->nombase=$db;
	}

	public function XmlR($table,$clef,$texte)
	{
	   $req="show columns from ".$table;
	   $resultat= $this->connex->query($req);
	   $colonnes=$resultat->fetchALL(PDO::FETCH_ASSOC);

	   foreach($colonnes as $col)
	   {
	       $this->tbl[]=$col['Field'];
	   }
	   $chaine="<".$this->nombase.">";

	   $req= " select * from ".$table;
	   	      $req.=" where "."$clef"." like '".$texte."%'";


		$resultat= $this->connex->query($req);

	   $resultat->setFetchMode(PDO::FETCH_OBJ);
	   while($ligne=$resultat->Fetch())
	   {
	         $chaine.="<".$table.">";
	         foreach($this->tbl as $nomcol)
			 {
			     $chaine.="<".$nomcol.">".$ligne->$nomcol."</".$nomcol.">";
			     // $chaine.="<".$nomcol.">".utf8_encode($ligne->$nomcol)."</".$nomcol.">";
			 }
			 $chaine.="</".$table.">";
	   }
	   $chaine.="</".$this->nombase.">";
        return $chaine;
	}
}

?>
