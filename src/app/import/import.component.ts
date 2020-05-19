import { Component, OnInit } from '@angular/core';
import { HttpRequest, HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent implements OnInit {

  public progress: number;
  public message: string;
  private readonly api = environment.api;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  upload(files) {
    if (files.length === 0) {
      return;
    }
    const formData = new FormData();

    for (const file of files) {
      formData.append(file.name, file);
    }

    const uploadReq = new HttpRequest('POST', this.api + 'file/upload', formData, {
      reportProgress: true,
    });

    this.http.request(uploadReq).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);
      } else if (event.type === HttpEventType.Response) {
        this.message = event.body.toString();
      }
    },
    error => {
    });
  }
}
