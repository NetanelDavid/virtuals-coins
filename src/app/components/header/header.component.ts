import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  search:string;
  isSearch:boolean;
  textSearch:string;

  @Output()searchEvent:EventEmitter<string>;

  constructor() { 
    this.textSearch='cearch';
    this.searchEvent=new EventEmitter();
  }

  performSearch():void{
    if(this.isSearch){
      this.search=null;
    }
    this.isSearch = !this.isSearch;
    this.textSearch = this.isSearch ? 'all coins':'cearch';
    this.searchEvent.emit(this.search);    
  }

  ngOnInit(): void {
  }

}
