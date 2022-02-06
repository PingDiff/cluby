import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { Utilisateur } from './utilisateur';
@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }

  public login(): Observable<Utilisateur>{
    let header = new HttpHeaders();
    header.append("Access-Control-Allow-Origin","*");
    header.append("Access-Control-Allow-Methods","GET, POST");
    return this.http.get<Utilisateur>('https://localhost:8443/msal4jsample/graph/me', {headers: header});
  }
}
