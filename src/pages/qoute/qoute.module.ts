import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QoutePage } from './qoute';

@NgModule({
  declarations: [
    QoutePage,
  ],
  imports: [
    IonicPageModule.forChild(QoutePage),
  ],
})
export class QoutePageModule {}
