import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QoutesPage } from './qoutes';

@NgModule({
  declarations: [
    QoutesPage,
  ],
  imports: [
    IonicPageModule.forChild(QoutesPage),
  ],
})
export class QoutesPageModule {}
