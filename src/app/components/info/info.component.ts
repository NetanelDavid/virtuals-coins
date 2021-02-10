import { Component, Input, OnInit } from '@angular/core';
import { InfoCoinService } from 'src/app/services/info-coin.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input() id :string;
  coin:any;
  img:string;
  usd:number;
  eur:number;
  ils:number;

  show:boolean;

  constructor(private infoCoinService:InfoCoinService) {
  }

  ngOnInit(): void {
    this.get();
    this.finish(this.infoCoinService.infoCache[this.id]);
  }

  get():void{
    this.infoCoinService.get(this.id).subscribe(
      co=>{
        this.coin=co;
        this.dataPlacement();
      }
    )
  }

  dataPlacement():void{
    this.img=this.coin.image.large;
    this.usd=this.coin.market_data.current_price.usd;
    this.eur=this.coin.market_data.current_price.eur;
    this.ils=this.coin.market_data.current_price.ils;
  }

  finish(f:boolean):void{
    this.show=f;
  }
}