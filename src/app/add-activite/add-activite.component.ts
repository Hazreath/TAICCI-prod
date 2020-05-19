import { Component, OnInit, Type } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Activite } from '../models/activite';
import { ActiviteService } from '../services/activite.service';
import { TypeActiviteService } from '../services/type-activite.service';
import { TypeActivite } from '../models/typeActivite';

@Component({
  selector: 'app-add-activite',
  templateUrl: './add-activite.component.html',
  styleUrls: ['./add-activite.component.css']
})
export class AddActiviteComponent implements OnInit {

  activite: Activite;

  types: TypeActivite[] = [];

  formulaire: FormGroup;

  auteurFormControl = new FormControl('', [
    Validators.required,
  ]);

  typeFormControl = new FormControl('', [
    Validators.required,
  ]);

  titreFormControl = new FormControl('', [
    Validators.required,
  ]);

  dateFormControl = new FormControl('', [
    Validators.required,
  ]);

  heureFormControl = new FormControl('', [
    Validators.required,
  ]);

  descriptionFormControl = new FormControl('', [
    Validators.required,
  ]);

  lieuFormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(
    private _ACTIVITESERVICE: ActiviteService,
    private _TYPEACTIVITESERVICE: TypeActiviteService,

  ) { }

  async ngOnInit() {
    this.createForm();

    this.types = await this._TYPEACTIVITESERVICE.getAll();
  }

  createForm() {
    this.formulaire = new FormGroup({
      auteur: this.auteurFormControl,
      type: this.typeFormControl,
      titre: this.titreFormControl,
      date: this.dateFormControl,
      heure: this.heureFormControl,
      description: this.descriptionFormControl
    });
  }

  onSubmit() {
    this.activite = new Activite();

    this.activite.auteur = this.auteurFormControl.value;
    this.activite.titre = this.titreFormControl.value;
    this.activite.date = this.dateFormControl.value;
    this.activite.heure = this.heureFormControl.value;
    this.activite.description = this.descriptionFormControl.value;
    this.activite.lieu = this.lieuFormControl.value;

    const newTypeAct = new TypeActivite();
    newTypeAct.type = this.types.find(e => e.id === this.typeFormControl.value.id).type;
    this.activite.type = newTypeAct;

    this._ACTIVITESERVICE.addActivite(this.activite);
    // console.log(this.activite.type);
  }
}
