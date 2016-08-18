/**
 * Created by Juri on 11.08.2016.
 */
import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Slides} from 'ionic-angular';
import {Appointment} from "../../model/appointment";
import {Ad} from "../../model/ad";

@Component({
  templateUrl: 'build/pages/time/time.html'
})
export class TimePage {

  @ViewChild('qualitySlider') slider: Slides;

  private appointment:Appointment;
  private ads:Array<Ad>;

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
    this.ads = this.loadAds();
  }

  /**
   * Load the appointments
   * @returns {Array<Appointment>}
   */
  loadAds():Array<Ad>{
    let ads:Array<Ad> = [];

    //some dummy data
    ads.push(new Ad("1", "What about breakfast?", "Starbucks", "navigate", "cafe.png", "starbucks.png",
      "There is a Starbucks right around the corner. With this QR-Code you get 30% discount for your Café."));
    ads.push(new Ad("2", "What is your story?", "Audible", "headset", "audio.jpg", "audible.png",
      "Create your Audible account now and get your first audio book for free right away on your phone!"));
    return ads;
  }
}
