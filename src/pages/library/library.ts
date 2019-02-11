import { QoutesPage } from './../qoutes/qoutes';
import { Qoute } from './../data/qoute.interface';
import { Component, OnInit } from '@angular/core';
import qoutes from '../data/qoutes';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{
  qoutesCollection: {category: string, quotes: Qoute[], icon:string}[];
  qoutesPage = QoutesPage;

  // Doesn't use ionViewWillEnter, because data is array?
  ngOnInit(){
    this.qoutesCollection = qoutes;
  }
}
