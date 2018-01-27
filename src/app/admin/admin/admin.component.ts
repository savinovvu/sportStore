import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../model/auth.service';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) {
  }

  logout() {
    this.auth.clear();
    this.router.navigateByUrl('/');
  }

  ngOnInit() {
  }

}
