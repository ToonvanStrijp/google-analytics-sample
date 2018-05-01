import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {GoogleAnalytics} from "@ionic-native/google-analytics";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private ga: GoogleAnalytics) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.ga.startTrackerWithId('UA-118489076-1')
        .then(() => {
          console.log('Google analytics is ready now');
          this.ga.debugMode().then(console.log).catch(console.log)

          this.ga.trackView('home').then(() => console.log('tracked view: "home"')).catch(console.log)
        })
        .catch(e => console.log('Error starting GoogleAnalytics', e));
    });
  }
}
