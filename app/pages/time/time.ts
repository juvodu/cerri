/**
 * Created by Juri on 11.08.2016.
 */
import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Slides} from 'ionic-angular';
import {Appointment} from "../../model/appointment";

@Component({
  templateUrl: 'build/pages/time/time.html'
})
export class TimePage {

  @ViewChild('qualitySlider') slider: Slides;

  private appointment:Appointment;
  sliderOptions = {
    pager: true
  };

  /**
   * Constructor: Set appointment model
   * @param navCtrl
   * @param params
   */
  constructor(private navCtrl: NavController,  params: NavParams) {
    this.appointment = params.get("appointment");
  }
}
