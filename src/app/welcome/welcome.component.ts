import { Component } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor(private userService: UserService) {}

  get isLoged(): boolean {
    return this.userService.isLoged;
  }
}
