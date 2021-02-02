import { Component, Input, OnInit } from '@angular/core';
import { coinsListModel } from 'src/app/models/coins-list.model';
import { InfoCoinService } from 'src/app/services/info-coin.service';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent implements OnInit {

  @Input()coin:coinsListModel;

  id:string;
  name:string;
  symbol:string;

  textButton:string;
  info:object;
  


  constructor(private infoCoinService:InfoCoinService) { 
    this.textButton='more info';
  }

  moreInfo():void{
    this.textButton=this.textButton=='more info'?'hide':'more info';
    this.info?this.hide():this.get();
  }

  get():void{
    this.infoCoinService.get(this.id).subscribe(
      (i:any)=>{
        this.info=i;
        console.log(this.info);
      }
    )
  }

  hide():void{
    this.info=null;
  }

  ngOnInit(): void {
    this.id=this.coin.id;
    this.name=this.coin.name;
    this.symbol=this.coin.symbol;
  }

}
