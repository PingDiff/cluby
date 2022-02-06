import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Club } from './club';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ClubServiceService {
  constructor(private http: HttpClient) {
   }
   public getAll(): Observable<Club[]> {
    return this.http.get<Club[]>(`http://localhost:8080/api/club/findClubs`);
  }
  public getClubId(idClub: number): Observable<Club> {
    return this.http.get<Club>(`http://localhost:8080/api/club/${idClub}`);
  }
}
