/**
 * Created by Juri on 11.08.2016.
 */
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TimePage} from "../time/time";
import {Appointment} from "../../model/appointment";

@Component({
  templateUrl: 'build/pages/checkin/checkin.html'
})
export class CheckinPage {

  private appointments:Array<Appointment>;

  constructor(private navCtrl: NavController) {
    this.appointments = this.loadAppointments();
  }

  /**
   * Load the appointments
   * @returns {Array<Appointment>}
   */
  loadAppointments():Array<Appointment>{
    let appoints:Array<Appointment> = [];

    //some dummy data
    appoints.push(new Appointment("1", "9 AM, 2 Dec 2016", "Dr. House", "doctor1.png", "Orthopaedist", {}, "map1.png",
      "Gleimstraße 55, 10437 Berlin", "030/783921", "Multiline text that should wrap when it is too long to fit on one line in the item.", "1h 55m", 14));
    appoints.push(new Appointment("2", "5 PM, 5 Dec 2016", "Dr. Lee", "doctor2.png", "Pediatrician", {}, "map2.png",
      "Pariser Platz, 10117 Berlin", "030/137924", "Multiline text that should wrap when it is too long to fit on one line in the item.", "48m", 6));

    return appoints;
  }

  appointmentSelected(appointment:Appointment){
    console.log("Selected", appointment);
  }

  /**
   * Checkin and show waiting time
   * @param event
   * @param item
   */
  checkin(appointment:Appointment) {

    console.log('Checkin', appointment);
    // pass appointment model as parameter to new view
    this.navCtrl.push(TimePage, {
      appointment: appointment
    });
  }
}
