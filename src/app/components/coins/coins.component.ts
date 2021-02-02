import { Component, OnInit } from '@angular/core';
import { CoinsListService } from 'src/app/services/coins-list.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  constructor(private apiDataService:CoinsListService) {
    this.get();
   }

 coins:object[];

  ngOnInit(): void {
  }

  get():void{
    this.apiDataService.get().subscribe(
      (d:any)=> {
        this.coins=d;
      }
    )
  }

}
