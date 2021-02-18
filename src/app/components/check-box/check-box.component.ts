import { Component, Input, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent implements OnInit{

  @Input() symbol:string;

  open:boolean;

  disabled:boolean;

  constructor(public reportsService:ReportsService) {
    this.reportsService.isOpon=false;
  }

  ngOnInit(): void {}

  addToReports(v:boolean):void{
    if(!this.reportsService.testingLength() && v){
     if(!this.reportsService.isOpon){
        this.open=true;
        this.reportsService.isOpon=true;
     }
      return;
    }
    else if(!this.reportsService.testing(this.symbol) && v){
      this.reportsService.add(this.symbol);
    } else if(this.reportsService.testing(this.symbol) && !v){
      this.reportsService.delete(this.symbol);
    }
  }

  hide():void{
    this.open=false;
    this.reportsService.isOpon=false;
  }
}
