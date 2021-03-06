import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    userList: User[] = [];
    first = 0;
    rows = 10;
    constructor(private userService: UsersService) {}
    ngOnInit(): void {
        // Get Users from UserService
        this.userList = this.userService.getUsers();
    }

    next() {
        this.first = this.first + this.rows;
    }
    prev() {
        this.first = this.first - this.rows;
    }
    reset() {
        this.first = 0;
    }
    isLastPage(): boolean {
        return this.userList ? this.first === (this.userList.length - this.rows) : true;
    }
    isFirstPage(): boolean {
        return this.userList ? this.first === 0 : true;
    }

    remove(id: number) {
        this.userService.removeUser(id);
        this.userList = this.userService.getUsers();
    }
}
