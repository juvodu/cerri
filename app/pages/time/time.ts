/**
 * Created by Juri on 11.08.2016.
 */
import {Component} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/time/time.html'
})
export class TimePage {

  private appointment:any;

  constructor(private navCtrl: NavController,  params: NavParams) {
    this.appointment = params.get("appointment");
  }
}
