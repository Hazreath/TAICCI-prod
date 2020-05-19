import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  formulaire: FormGroup;
  searchFormControl = new FormControl('', []);

  constructor(
    private searchService: SearchService,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formulaire = new FormGroup({
      auteur: this.searchFormControl
    });
  }
  onSearch() {
    this.searchService.search(this.searchFormControl.value);
  }

}
