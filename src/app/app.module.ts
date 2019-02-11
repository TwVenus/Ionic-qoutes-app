import { SettingService } from './../services/setting';
import { QoutesService } from './../services/qoutes';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Tabs } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { FavoritesPage } from './../pages/favorites/favorites';
import { SettingsPage } from './../pages/settings/settings';
import { QoutePage } from './../pages/qoute/qoute';
import { QoutesPage } from './../pages/qoutes/qoutes';
import { LibraryPage } from './../pages/library/library';
import { TabsPage } from './../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    FavoritesPage,
    LibraryPage,
    QoutesPage,
    QoutePage,
    SettingsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritesPage,
    LibraryPage,
    QoutesPage,
    QoutePage,
    SettingsPage,    
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QoutesService,
    SettingService
  ]
})
export class AppModule {}
