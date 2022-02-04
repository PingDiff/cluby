import { Injectable } from '@angular/core';
import { Publication } from './publication';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http: HttpClient) { }
  public getAll(): Observable<Publication[]>{
    return this.http.get<Publication[]>('http://localhost:8080/post/publicPosts');
  }
}
