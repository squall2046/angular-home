import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @ViewChild('footer', { static: false }) foot: any;
  // @ViewChild('foo', {static: true}) foo: ElementRef;
  // query results available in ngOnInit
  // OR
  // @ViewChild('foo', {static: false}) foo: ElementRef;
  // query results available in ngAfterViewInit

  getChildData() {
    alert(this.foot.footMsg);
  }
  getChildMethod() {
    this.foot.footCall();
  }

  constructor() { }

  ngOnInit() {
  }

  // Output方法, 子组件传播数据给父组件, 触发父组件方法
  // step6:
  run(){
    alert('我是父组件的方法')
  }
}
