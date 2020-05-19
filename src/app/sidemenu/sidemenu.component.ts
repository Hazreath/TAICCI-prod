import { Component, OnInit, Output, HostListener } from '@angular/core';
import { TypeActivite } from '../models/typeActivite';
import { TypeActiviteService } from '../services/type-activite.service';

import { HomeComponent } from '../home/home.component';
import { ActiviteService } from '../services/activite.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
  providers: [HomeComponent]
})

export class SidemenuComponent implements OnInit {
  
  constructor(
    
    
    private _ACTIVITESERVICE: ActiviteService,
    private _TYPEACTIVITESERVICE: TypeActiviteService,
  ) { }

  @Output() displayType: EventEmitter<TypeActivite> = new EventEmitter();
  
  events: string[] = [];
  opened: boolean;
  types: TypeActivite[];
  
  async ngOnInit(): Promise<void> {
    this.types = await this._TYPEACTIVITESERVICE.getAll();
    this.opened = false;
  }

  ChangeOpenStatus() {
    this.opened = !this.opened;
   
  }

  ClickType(type:TypeActivite) {
    this.displayType.emit(type);
    this.ChangeOpenStatus();
    
    
  }
  
  ClickAll() {
    this.displayType.emit();
    this.ChangeOpenStatus();
  }
}
