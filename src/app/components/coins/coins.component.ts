import { Component, OnInit } from '@angular/core';
import { CoinsListService } from 'src/app/services/coins-list.service';

@Component({
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  constructor(private apiDataService:CoinsListService) {}

  coins:any[];
  show:boolean;

  ngOnInit(): void {
    this.get();
    this.finish( this.apiDataService.CoinsCache && this.apiDataService.CoinsCache.length>0);
  }

  search(s:string):void{
    if(this.coins.length <= 1){
      this.get();
     } else {
       this.coins =this.coins.filter(co => co.symbol===s);
     }
  }

  get():void{ 
    this.apiDataService.get().subscribe(
      (d:object[]) => {
        this.coins=d;
      }
    );
  } 
  
  finish(f:boolean):void{
    this.show=f;
  }
}