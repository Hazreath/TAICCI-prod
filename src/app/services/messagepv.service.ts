import { Injectable } from '@angular/core';
import { MessagePv } from '../models/messagepv';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class MessagepvService {

  constructor(private http:HttpService) { }

  
  async sendMessagePv(msg: MessagePv) {
    
    return await this.http.post('messagepv/',msg);
  }

  async getAllMps() {
    return await this.http.get('messagepv/',"").toJSON();
  }
}
