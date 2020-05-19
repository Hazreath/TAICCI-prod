import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Commentaire } from '../models/commentaire';


@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(private http: HttpService) { }

  
  async getAllCommentairesForActivites(act_id : number) {
    return this.http.get('commentaire/', act_id).toPromise();
  }

  async AddCommentaire(comm : Commentaire) {
    
    return this.http.post('commentaire/',comm);
  }
}
