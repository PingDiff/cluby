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

    return this.http.post<Utilisateur>('http://localhost:8080/msal4jsample/graph/me',{ headers: new HttpHeaders
    ({'X-Requested-With': 'XMLHttpRequest',
    "Access-Control-Allow-Origin":"*"}) });
  }
}
