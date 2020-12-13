import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-slide',
  templateUrl: './app-slide.component.html',
  styleUrls: ['./app-slide.component.css']
})
export class AppSlideComponent implements OnInit {

  constructor() { }

  taj: any = '../../../assets/images/slides/taj.jpeg';
  sea1: any = '../../../assets/images/slides/sea1.jpg';
  Travel: any = '../../../assets/images/slides/Travel.jpeg';
  Tourism: any = '../../../assets/images/slides/Tourism.jpeg';

  ngOnInit() {
  }

}
