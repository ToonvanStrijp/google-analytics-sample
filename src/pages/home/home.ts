import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GoogleAnalytics} from "@ionic-native/google-analytics";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GoogleAnalytics]
})
export class HomePage {

  count = 0;

  constructor(public navCtrl: NavController, private ga: GoogleAnalytics) {
    this.ga.startTrackerWithId('UA-118489076-1')
      .then(() => {
        this.ga.trackView('Home')
      })
      .catch(e => console.log('Error starting GoogleAnalytics', e));
  }

  event(){
    this.count++;

    this.ga.trackEvent('product', 'view', this.count+'').then(() => console.log('event fired')).catch(console.log);
  }
}
