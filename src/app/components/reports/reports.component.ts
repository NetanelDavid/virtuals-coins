import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  @Output() hide :EventEmitter<boolean>;

  @Input() checkbox?:boolean;

  reports:string[];
  checked:boolean[];
  
  constructor(private reportsservice:ReportsService) {
    this.hide =new EventEmitter<boolean>();
  }

  ngOnInit(): void {
    this.get();
  }

  get():void{
    this.reportsservice.get().subscribe(
      s => { 
        this.reports=s;
        if(this.checkbox){
          this.checked=new Array();
          for(let i =0 ; i<s.length; i++){
            this.checked.push(true);
          }
        }
      }
    );

  }

  ok():void{
    this.reportsservice.deleteQuantity([...this.checked]);
    this.cancel();
  }

  cancel():void{
    this.hide.emit(true);
  }
}