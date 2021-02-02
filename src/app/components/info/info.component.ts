import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input()coin:any;
  img:string;
  usd:number;
  eur:number;
  ils:number;

  constructor() { }

  ngOnInit(): void {
    this.img = this.coin.image.thumb;
    this.usd=this.coin.market_data.current_price.usd;
    this.eur=this.coin.market_data.current_price.eur;
    this.ils=this.coin.market_data.current_price.ils;
  }

  
}
