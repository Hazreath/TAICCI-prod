import { Activite } from './activite';
import { Utilisateur } from './utilisateur';

export class Commentaire {
    
    id : number;
    activite : Activite;
    auteur : Utilisateur;
    contenu : string;
    date : Date;
}