import { Component, OnInit } from '@angular/core';

import { AppNavComponent } from '../app-nav/app-nav.component';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {

  constructor() { }

  cimg1: any = '../../../assets/images/carousel/cimg1.jpg';
  road1: any = '../../../assets/images/carousel/road1.jpg';
  cimg3: any = '../../../assets/images/carousel/cimg3.jpg';
  cimg2: any = '../../../assets/images/carousel/cimg2.jpg';
  t1: any = '../../../assets/images/carousel/t1.jpg';

  ngOnInit() {
  }

}
