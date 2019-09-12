import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() titles: any;

  @Input() msgs: any;
  getParentData() {
    //获取父组件里的数据
    alert(this.msgs)
  }

  @Input() homeCalls: any;
  getParentMethod() {
    //获取父组件里的方法
    this.homeCalls()
  }

  @Input() home: any;
  getHomeComponent() {
    alert(this.home.msg);
    this.home.homeCall();
  }

  constructor() { }

  ngOnInit() {
  }

}
