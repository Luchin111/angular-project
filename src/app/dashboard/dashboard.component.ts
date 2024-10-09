import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: any[] = [];
  username: string | null = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {

    this.username = localStorage.getItem('user');
    if (!this.username) {
      this.router.navigate(['/login']);
    }


    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  logout() {

    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
