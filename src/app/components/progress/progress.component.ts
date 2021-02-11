import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  constructor() {
    this.finishEvent=new EventEmitter();
  }

  @Output() finishEvent :EventEmitter<boolean>; 
  @Input() ns:number;
  progress=0;
  timer:any;

  

  ngOnInit(): void {

    this.timer = setInterval(() => {
      this.progress += 10;
      if(this.progress>=100){
        this.progress=100;
        this.finish();
      }
    },this.ns/10);
  }

  finish():void{
    clearInterval(this.timer);
    this.finishEvent.emit(true);
  }
}