import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search:string;
  isAll:boolean;
  isSearch:boolean;
  timer:any;

  @Output()searchEvent:EventEmitter<string>;

  constructor() { 
    this.isAll=true;
    this.isSearch=true;
    this.searchEvent=new EventEmitter();
  }


  focus():void{
    this.timer = setInterval(() => {
      this.change();
    },10);
  }

  blur():void{
    clearInterval(this.timer);
  }

  change():void{

    if(this.isAll){
      this.isSearch=true;
    } else {
      if(this.search){
        this.isSearch=true;
      } else {
        this.isSearch=false;
      }
    }

  }

  performSearch():void{
    if(this.search){
      this.isAll=false;
    } else {
      this.isAll = true;
    }
    this.searchEvent.emit(this.search);    
  }

  ngOnInit(): void {
  }
 
}
