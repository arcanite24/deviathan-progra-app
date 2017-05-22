import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public modal: ModalController,
    public auth: AuthProvider
  ) {

  }

  openProfile() {
    let profileModal = this.modal.create(ProfilePage, {user: this.auth.user});
    profileModal.present();
  }

}
