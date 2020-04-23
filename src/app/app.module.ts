import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ComponentsModule} from './components/components.module';
import {HttpClientModule} from '@angular/common/http';
import {PipesModule} from './pipes/pipes.module';
import { Pedometer } from '@ionic-native/pedometer/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { Health } from '@ionic-native/health/ngx';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        ComponentsModule,
        HttpClientModule,
        PipesModule,
        IonicStorageModule.forRoot()
    ],
    providers: [
        StatusBar,
        SplashScreen,
        HttpClientModule,
        Pedometer,
        BackgroundMode,
        Health,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
