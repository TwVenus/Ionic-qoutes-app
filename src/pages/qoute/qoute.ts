import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Qoute } from '../data/qoute.interface';

@Component({
  selector: 'page-qoute',
  templateUrl: 'qoute.html',
})
export class QoutePage{
  qoute: Qoute;
  person: string;
  text: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController) {
  }

  ionViewWillEnter(){
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');
  }

  onClose(remove = false){
    // not pop, is delete this modal
    this.viewCtrl.dismiss(remove);
  }
}
