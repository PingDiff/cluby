import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  user: Utilisateur | undefined;


  constructor(private userService: UtilisateurService) { }

  ngOnInit(): void {
    this.userService.login().subscribe(res => {
      console.log(res);
      this.user=res;
    })
  }

}
