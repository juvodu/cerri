/**
 * Created by Juri on 11.08.2016.
 */
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TimePage} from "../time/time";

@Component({
  templateUrl: 'build/pages/checkin/checkin.html'
})
export class CheckinPage {
  constructor(private navCtrl: NavController) {
  }

  checkin(event, item) {

    console.log('Checkin');

    this.navCtrl.push(TimePage, {
      appointment: {}
    });
  }
}
