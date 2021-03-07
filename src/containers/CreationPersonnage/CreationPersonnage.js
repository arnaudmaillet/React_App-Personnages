import React, { Component } from 'react';
import Titreh1 from '../../components/Titres/TitreH1';
import Bouton from "../../components/Boutons/Bouton";
import Personnage from "./Personnage/Personnage";


class CreationPersonnage extends Component{

    state = {
        personnage : {
            img : 2,
            force : 0,
            agilite : 0,
            intelligence : 0,
        }
    }

    render(){
        return (
            <div className="container">
            <Titreh1>Mon Personnage</Titreh1>
            <Personnage {...this.state.personnage}/>
            <div>Armes</div>
            <Bouton typeBtn="btn-danger" css="w-50" clic={()=>console.log("Réinitialisation")}>Réinitialiser</Bouton>
            <Bouton typeBtn="btn-success" css="w-50" clic={()=>console.log("Création")}>Créer</Bouton>
          </div>
        );
    }
}

export default CreationPersonnage;