import { SettingService } from './../../services/setting';
import { Component } from '@angular/core';
import { Toggle, IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  constructor(public settingsService: SettingService){}

  // console.log Toggle, you will see many attitude can use.
  onToggle(event: Toggle){
    this.settingsService.setBackground(event.checked);
  }

  checkAltBackground(){
    this.settingsService.isAltBackground();
  }
}
