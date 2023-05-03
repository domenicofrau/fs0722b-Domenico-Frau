import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.scss']
})
export class ProvaComponent implements OnInit {

  logged = false;

  constructor(private as:AuthService) { }

  ngOnInit(): void {
    this.as.isLoggedIn$.subscribe((l)=>{
      this.logged = l
    })
  }

}
