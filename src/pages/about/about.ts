import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GoogleAnalytics} from "@ionic-native/google-analytics";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, private ga: GoogleAnalytics) {
    console.log("about opened");
    this.ga.startTrackerWithId('UA-118489076-1')
      .then(() => {
        console.log('Google analytics is ready now');
        this.ga.debugMode().then(console.log).catch(console.log)

        this.ga.trackView('about').then(() => console.log('tracked view: "home"')).catch(console.log)
      })
      .catch(e => console.log('Error starting GoogleAnalytics', e));
  }

}
