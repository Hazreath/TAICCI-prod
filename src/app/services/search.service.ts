import { Injectable, Output, EventEmitter} from '@angular/core';
import { Activite } from '../models/activite';
import { ActiviteService } from '../services/activite.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(
    private _ACTIVITESERVICE: ActiviteService,) { }
  activites : Activite[];
  @Output() changeSearch: EventEmitter<Activite[]> = new EventEmitter();

  async search(searchText: string) {

    
    this.activites = await this._ACTIVITESERVICE.getSearch(searchText);

    this.changeSearch.emit(this.activites);
  }
}
