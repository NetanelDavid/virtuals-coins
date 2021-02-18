import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
   
  _actives:string[];
  actives:BehaviorSubject<string[]>;
  isOpon:boolean;

  constructor() { 
    this._actives=[];
    this.actives=new BehaviorSubject<string[]>([]);
  }

  add(symbol:string):void{
    this._actives.push(symbol);
    this.actives.next([...this._actives]);
  }
  
  delete(symbol:string):void{
    this._actives = [...this._actives.filter(s => s!=symbol)];
    this.actives.next([...this._actives]);
  }
  
  testing(symbol:string):boolean{
    if(this._actives.indexOf(symbol)>-1){
      return true;
    }
    return undefined;
  }

  get():Observable<string[]>{
    return this.actives;
  }

  testingLength():boolean{
    return this._actives.length<5;
  }
  
  deleteQuantityAndAddOne(updating:boolean[],s:string):void{
    for(let i=0; i<this._actives.length; i++){
      if(!updating[i]){
        this._actives[i]=null;
      }
    }
    this._actives = this._actives.filter(i => i);
    if(this.testingLength()){
      this._actives.push(s);
    }
    this.actives.next([...this._actives]);
  }
}
