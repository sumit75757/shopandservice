import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { MenuInfo } from '../interface/ec-template.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuList: MenuInfo[] = [];
  user: boolean;

  constructor(public dataService: DataService ,public route:Router ) {}

  ngOnInit() {
  let token =  localStorage.getItem('token')
    let userdata = localStorage.getItem('userdata')
    debugger
    if (token && userdata) {
      this.user = true
    } else {
      this.user = false
    }
    this.getMenuList();
  }
  logout() {
    localStorage.clear()
    this.route.navigate(['/'])
  }
  getMenuList() {
    this.dataService.getMenuList().subscribe((data: MenuInfo[]) => {
      this.menuList = data;
    });
  }
}
