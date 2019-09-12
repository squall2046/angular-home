// import { Component, OnInit } from '@angular/core';

// Output方法, 子组件传播数据给父组件
// step1:
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // Output方法, 子组件传播数据给父组件
  // step2:
  @Output() private outer = new EventEmitter();

  // Output方法, 子组件传播数据给父组件
  // step3:
  sendParent() {
    alert('send to parent')
    this.outer.emit('我是子组件数据')
  }


  public footMsg: any = '子组件的 Message :]';

  footCall() {
    alert('this call is from footer(child component)')
  }

  constructor() { }

  ngOnInit() {
  }

}
