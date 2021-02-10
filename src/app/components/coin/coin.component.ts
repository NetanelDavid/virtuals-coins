import { Component, Input, OnInit } from '@angular/core';
import { coinsListModel } from 'src/app/models/coins-list.model';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent implements OnInit {

  @Input() coin:coinsListModel;

  id:string;
  name:string;
  symbol:string;

  textButton:string;
  isInfo:boolean;

  constructor() { 
    this.textButton='more info';
  }

  moreInfo():void{
    this.isInfo = !this.isInfo;
    this.textButton=this.isInfo?'hide':'more info';
  }

  ngOnInit(): void {
    this.id=this.coin.id;
    this.name=this.coin.name;
    this.symbol=this.coin.symbol;
  }

}
