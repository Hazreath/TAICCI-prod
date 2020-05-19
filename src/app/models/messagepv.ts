import { Utilisateur } from './utilisateur';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

export class MessagePv {
    
    envoyeur : Utilisateur;
    destinataire : Utilisateur;
    contenu : string;
    date : Date;
    nom_destinataire : string;
    

}
