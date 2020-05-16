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
import { IonicStorageModule } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebView } from '@ionic-native/ionic-webview/ngx';

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
        IonicStorageModule.forRoot(),
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        HttpClientModule,
        Camera,
        File,
        WebView,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
