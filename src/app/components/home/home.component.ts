import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title: string = '父组件的 Title';
  public msg: string = '父组件的 Message :)';

  homeCall() {
    alert('this call is from homepage(parent component)')
  }

  constructor() { }

  ngOnInit() {
  }

}
