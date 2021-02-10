import { Component, OnInit } from '@angular/core';
import { CoinsListService } from 'src/app/services/coins-list.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  constructor(private apiDataService:CoinsListService) { }

<<<<<<< HEAD
  coins:any[];
=======
 coins:object[];
 num=new Array(20);
>>>>>>> 4fc9a70dfb3a4fe8d10ed9ac4b943aac74ef943e

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

  /*search(s:string):void{
     if(this.coins.length <= 1){
       this.get();
     } else {
       this.apiDataService.seach(s).subscribe(
         (co:object) => {
           this.coins =[co];
           this.coins = this.coins.filter(coi => coi.symbol===s);
         }
       );
     }
    }*/
  
}