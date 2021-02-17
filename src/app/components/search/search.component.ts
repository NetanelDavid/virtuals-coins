import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search:string;
  isAll:boolean;

  @Output()searchEvent:EventEmitter<string>;

  constructor() { 
    this.isAll=true;
    this.searchEvent=new EventEmitter();
  }

  performSearch():void{
    if(this.search){
      this.isAll=false;
    } else {
      this.isAll = true;
    }
    this.searchEvent.emit(this.search); 
    this.search=null;   
  }

  ngOnInit(): void {
  }
 
}
