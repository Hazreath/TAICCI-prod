import { Component, OnInit, Input } from '@angular/core';
import { Commentaire } from '../models/commentaire';
import { CommentaireService } from '../services/commentaire.service';
import { FormControl, Validators } from '@angular/forms';
import { Activite } from '../models/activite';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateurService } from '../services/utilisateur.service';


@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {
  
  @Input()
  act : Activite;
  
  commFormControl = new FormControl('', [
    Validators.required,
  ]);

  commentaires : Commentaire[]
  readonly MONTHS = String[11] = [
    "Janvier","Février","Mars","Avril",
    "Mai","Juin","Juillet","Août","Septembre",
    "Octobre","Novembre","Décembre"
  ]
  
  constructor(
    private _COMMSERVICE : CommentaireService,
    private _USERSERVICE : UtilisateurService,
  ) { }

  async ngOnInit(): Promise<void> {
    
    this.commentaires = await this._COMMSERVICE.getAllCommentairesForActivites(this.act.id);
    
  }

  public dateToJMA_str(date : String) { // TODO déplacer dans une lib utilitaire
    var s_date = date.split('-');
    var s_dayHours = s_date[2].split('T');
    var time = s_dayHours[1].split(':')
    
    var r = s_dayHours[0] + " "
          + this.MONTHS[parseInt(s_date[1])-1] + " "
          + s_date[0] + " "
          + time[0] + ':' + time[1];
    return r;
  }

  
  async OnNewCommentaireSubmit() {
    var c = new Commentaire();
    c.activite = this.act;
    c.contenu = this.commFormControl.value;
    c.auteur = await this._USERSERVICE.getUtilisateur();
    await this._COMMSERVICE.AddCommentaire(c);
  }
}
