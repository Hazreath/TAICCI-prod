import { Component, Input } from '@angular/core';
import { TypeActivite } from './models/typeActivite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() typeSelect: TypeActivite;
  title = 'TAICCI';
  niktamer = true;


}
