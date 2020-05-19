import { Component, OnInit, HostBinding } from '@angular/core';
import { Activite } from '../models/activite';
import { MatDialog } from '@angular/material/dialog';
import { AddActiviteComponent } from '../add-activite/add-activite.component';
import { ActiviteService } from '../services/activite.service';
import { TypeActivite } from '../models/typeActivite';
import { MessagepvComponent } from '../messagepv/messagepv.component';
import { Commentaire } from '../models/commentaire';
import { CommentaireService } from '../services/commentaire.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  activites: Activite[] = [];
  act1: Activite;
  typesActivites: TypeActivite[];
  
  static readonly MONTHS = String[11] = [
    "Janvier","Février","Mars","Avril",
    "Mai","Juin","Juillet","Août","Septembre",
    "Octobre","Novembre","Décembre"
  ]
  static readonly DATE_SEPARATOR : String = '/';
  

  constructor(
    private _ACTIVITESERVICE: ActiviteService,
    private _COMMSERVICE: CommentaireService,
    private _SEARCHSERVICE: SearchService,
    public dialog: MatDialog,
    
  ) {
    
  }

  async ngOnInit() {
    this.displayAllActivites();
    this._SEARCHSERVICE.changeSearch.subscribe(activites => {
      this.activites = activites;
    });
  }

  toAddActivite() {
    const dialogRef = this.dialog.open(AddActiviteComponent, {
      width: '80%',
      height: '80%',
    });
  }
  toMessagePv() {
    const dialogRef = this.dialog.open(MessagepvComponent, {
      width: '80%',
      height: '80%',
    });
  }

  /// Affiche les activités du type argument
  public async displayTypeActivite(type:TypeActivite) {
    if (type == null) {
      this.displayAllActivites();
    } else {
      this.activites = await this._ACTIVITESERVICE.getActivitesByType(type);
    }
  }

  // Affiche toutes les activités
  public async displayAllActivites() {
    this.activites = await this._ACTIVITESERVICE.getAll();
  }
  // Conversion date issue de DateTime en date
  // compréhensible par l'user
  public dateToJMA_str(date : String) {
    var s_date = date.split('-');
    var s_dayHours = s_date[2].split('T');
    
    var r = s_dayHours[0] + " "
          + HomeComponent.MONTHS[parseInt(s_date[1])-1] + " "
          + s_date[0];
    return r;
    
  }
  // Retourne l'heure issue d'un DateTime
  public getHourFromDate(date:String) {
    var s_hour = date.split("T");
    return s_hour[1];
  }

  
}
