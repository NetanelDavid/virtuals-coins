import { Component, OnInit } from '@angular/core';
import { CoinsListService } from 'src/app/services/coins-list.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  constructor(private apiDataService:CoinsListService) { }

  coins:any[];

  ngOnInit(): void {
    this.get();
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
}