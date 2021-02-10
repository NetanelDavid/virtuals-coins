import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CoinsListService {

  url:string;
  CoinsCache:any[];
  
  constructor(private httpclint :HttpClient) {
    this.url = 'https://api.coingecko.com/api/v3/coins';
  }


  get():Observable<object[]>{
    if(this.CoinsCache){
      return of([...this.CoinsCache]);
    } else {
      return this.httpclint.get(this.url).pipe(tap(
  
        (co:any[]) => {
          this.CoinsCache=co;
          console.log(this.CoinsCache);
        }
      ));
    }
  }

  /*seach(s:string):Observable<object[]>{
    if(this.CoinsCache){
      return of([...this.CoinsCache]);
    }
  }*/
      
}
