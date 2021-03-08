import React, { Component } from 'react';
import Titreh1 from '../../components/Titres/TitreH1';
import Bouton from "../../components/Boutons/Bouton";
import Personnage from "./Personnage/Personnage";
import Armes from "./Armes/Armes"


class CreationPersonnage extends Component{

    state = {
        personnage : {
            img : 2,
            force : 0,
            agilite : 0,
            intelligence : 0,
            charisme : 0,
            arme : null
        },
        nbPointDispo : 10,
        armes : ["Epee", "Massue", "Arc", "Hache"]
    }

    handleImgGauche =() =>{
        this.setState(oldState =>{
            const newPersonnage = {...oldState.personnage}
            if(oldState.personnage.img <= 1) newPersonnage.img = 3;
            else newPersonnage.img --;
            return {personnage:newPersonnage}
        })
    }

    handleImgDroite =() =>{
        this.setState(oldState =>{
            const newPersonnage = {...oldState.personnage}
            if(oldState.personnage.img >= 3) newPersonnage.img = 1;
            else newPersonnage.img ++;
            return {personnage:newPersonnage}
        })
    }

    handleEnleverPoint = (skill) => {
        this.setState((oldState, props) => {
            if(oldState.personnage[skill] <= 0 || oldState.nbPointDispo >= 10) return null
            const newPointSkill = oldState.personnage[skill] - 1;
            const newPerso = {...oldState.personnage}
            const newNbPointDispo = oldState.nbPointDispo + 1;
            newPerso[skill] =  newPointSkill;
            return {
                personnage:newPerso,
                nbPointDispo:newNbPointDispo
            }
        })
    }

    handleAjouterPoint = (skill) => {
        this.setState((oldState, props) => {
            if(oldState.personnage[skill] >= 5 || oldState.nbPointDispo <= 0) return null
            const newPointSkill = oldState.personnage[skill] + 1;
            const newPerso = {...oldState.personnage}
            const newNbPointDispo = oldState.nbPointDispo - 1;
            newPerso[skill] =  newPointSkill;
            return {
                personnage:newPerso,
                nbPointDispo:newNbPointDispo
            }
        })
    }

    handleChangeArmePerso = (arme) => {
        const newPerso = {...this.state.personnage};
        newPerso.arme = arme;
        this.setState({personnage : newPerso})
    }

    handleValidation = () => {
        alert("Personnage créé");
    }

    handleReinitialisation = () => {
        this.setState({
            personnage : {
                img : 2,
                force : 0,
                agilite : 0,
                intelligence : 0,
                charisme : 0,
                arme : null
            },
            nbPointDispo : 10,
            armes : ["Epee", "Massue", "Arc", "Hache"]
        })
    }

    render(){
        return (
            <div className="container">
            <Titreh1>Mon Personnage</Titreh1>
            <Personnage 
                {...this.state.personnage}
                gauche={this.handleImgGauche}
                droite={this.handleImgDroite}
                nbPointDispo={this.state.nbPointDispo}
                enleverPoint = {this.handleEnleverPoint}
                ajouterPoint = {this.handleAjouterPoint}
            />
            <Armes 
                liste = {this.state.armes}
                changeArme = {this.handleChangeArmePerso}
                currentArme = {this.state.personnage.arme}
            />
            <div className="mt-4">
                <Bouton typeBtn="btn-danger" css="w-50" clic={this.handleReinitialisation}>Réinitialiser</Bouton>
                <Bouton typeBtn="btn-success" css="w-50" clic={this.handleValidation}>Créer</Bouton>
            </div>
          </div>
        );
    }
}

export default CreationPersonnage;