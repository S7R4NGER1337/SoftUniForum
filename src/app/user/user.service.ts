import { Injectable } from '@angular/core';
import { UserId } from '../types/theme';
import { User } from '../types/user';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User | undefined;
  USER_KEY = '[user]'

  get isLoged():boolean {
    return !!this.user
  }
  constructor() {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser)
    } catch (error) {
      this.user = undefined
    }
  }

  login():void {
    this.user = {
      email: 'johnDoe@gnmail.com',
      firstName: 'Jhon'
    }

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user))
  }

  logout():void {
    this.user = undefined
    localStorage.removeItem(this.USER_KEY)
  }
}
