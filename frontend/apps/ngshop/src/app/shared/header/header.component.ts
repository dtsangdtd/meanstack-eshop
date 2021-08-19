import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '@bluebits/users';

@Component({
  selector: 'ngshop-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  userId: any;
  constructor(private localstorageService: LocalstorageService) {}

  ngOnInit(): void {
    const token = this.localstorageService.getToken();
    if (!token) return;
    const deCode = JSON.parse(atob(token.split('.')[1]));

    this.userId = deCode.userId;
  }
}
