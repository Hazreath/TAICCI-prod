import { Component, OnInit } from '@angular/core';
import { MessagepvService } from '../services/messagepv.service';
import { MessagePv } from '../models/messagepv';
import { FormControl, Validators } from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { LoginService } from '../services/login.service';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-messagepv',
  templateUrl: './messagepv.component.html',
  styleUrls: ['./messagepv.component.css']
})
export class MessagepvComponent implements OnInit {

  constructor(
    private _MESSAGEPVSERVICE: MessagepvService,
    private _LOGINSERVICE : LoginService,
    private _USERSERVICE : UtilisateurService
  ) { }

  mps : MessagePv[];

  destFormControl = new FormControl('', [
    Validators.required,
  ]);

  contenuFormControl = new FormControl('', [
    Validators.required,
  ]);
  async ngOnInit(): Promise<void>{
    
  }

  async OnNewMessageSubmit() {
    var msg = new MessagePv();
    msg.nom_destinataire = this.destFormControl.value;
    // msg.envoyeur = this._LOGINSERVICE.getLoggedUtilisateur();
    msg.envoyeur =  await this._USERSERVICE.getUtilisateur();
    msg.contenu = this.contenuFormControl.value;
    
    try {
      this._MESSAGEPVSERVICE.sendMessagePv(msg);
    } catch (e) {
      
      console.log(e);
    }
    
  }
}
