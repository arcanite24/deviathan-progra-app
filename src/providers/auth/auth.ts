import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthProvider {

  public api: string;
  public user: string;

  constructor(public http: Http, public storage: Storage) {
    this.api = 'http://localhost:1337/';
    this.storage.get('user').then(user => {
      if(!user) return this.user = null;
      this.user = JSON.parse(user);
    })
  }

  // Auth
  login(username: string, password: string) {
    return this.http.post(this.api + 'user/login', {username: username, password: password}).map(res => res.json());
  }

  saveUser(user: any) {
    this.user = user;
    return this.storage.set('user', JSON.stringify(user));
  }

}
