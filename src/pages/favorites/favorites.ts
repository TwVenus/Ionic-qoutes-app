import { SettingService } from './../../services/setting';
import { QoutePage } from './../qoute/qoute';
import { QoutesService } from './../../services/qoutes';
import { Component } from '@angular/core';
import { Qoute } from '../data/qoute.interface';
import { ModalController} from 'ionic-angular';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  qoutes: Qoute[];

  constructor(
    public qoutesService: QoutesService,
    public modalCtrl: ModalController,
    public settingService: SettingService){}

  ionViewWillEnter(){
    this.qoutes = this.qoutesService.getFavoriteQoutes();
  }

  onViewQoute(selectedQoute: Qoute){
    const modal = this.modalCtrl.create(QoutePage, selectedQoute);
    modal.present();

    // get data from qoute page's viewController function return data before destory qoute page.
    modal.onDidDismiss((remove: boolean) => {
      if(remove){
        this.onRomveFavoriteQoute(selectedQoute);
      }
    })
  }

  onRomveFavoriteQoute(selectedQoute : Qoute){
    this.qoutesService.removeQouteFromFavotite(selectedQoute);
    // const qoutes = this.qoutesService.removeQouteFromFavotite(selectedQoute);
    const position = this.qoutes.findIndex((qouteEl: Qoute)=>{
      return selectedQoute.id == qouteEl.id;
    })
    this.qoutes.splice(position, 1);
  }

  checkAltBackground(){
    this.settingService.isAltBackground();
  }
}
