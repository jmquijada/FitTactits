import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public fbAuth: AuthService,
    private router: Router
  ) {
    this.fbAuth.auth.authState.subscribe(
      user => {
        if (user) {
          this.fbAuth.authUser = user;
          this.router.navigate(['/principal']);
        }
      }
    );
    this.platform.ready().then(() => {
      this.initializeApp();
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();

      // this.checkDarkTheme();
    });
  }

  checkDarkTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    if ( prefersDark.matches) {
      document.body.classList.toggle('dark');
    }
  }

}
