import { QoutesService } from './../../services/qoutes';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Qoute } from './../data/qoute.interface';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-qoutes',
  templateUrl: 'qoutes.html',
})
export class QoutesPage implements OnInit{
  qouteGroup: {category: string, quotes: Qoute[], icon:string};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController,
    public qoutesService: QoutesService) {
  }

  ngOnInit(){
    this.qouteGroup = this.navParams.data;
  }

  onAddToFavorite(selectedQuote: Qoute){
    let alert = this.alertCtrl.create({
      title: 'Add Qoute',
      subTitle:'Are you sure',
      message: 'Are you sure want to add the qoutes?',
      buttons: [
        {
          text: 'Yes, go ahead.',
          handler: () => {
            this.qoutesService.addQouteToFavorite(selectedQuote);
          }
        },
        {
          text: 'No, I change my mind.',
          handler: () => {
            console.log('Cancel');
          }
        }
      ]
    });
    alert.present();
  }

  onRemoveToFavorite(qoute: Qoute){
    this.qoutesService.removeQouteFromFavotite(qoute);
  }

  isFavoriteCkeck(qoute: Qoute){
    return this.qoutesService.isFavotieQoute(qoute);
  }
}
