import { Injectable } from '@angular/core';
import { Publication } from './publication';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http: HttpClient) { }
  public getAll(): Observable<Publication[]>{
    let header = new HttpHeaders();
    header.append("Access-Control-Allow-Origin","*");
    header.append("Access-Control-Allow-Methods","GET, POST");
    return this.http.get<Publication[]>('http://localhost:8080/post/publicPosts', {headers: header});
  }
}
