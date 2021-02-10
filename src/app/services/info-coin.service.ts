import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InfoCoinService {
  
  basikUrl:string;
  infoCache={};
  
  constructor(private httpclient:HttpClient) {
    this.basikUrl='https://api.coingecko.com/api/v3/coins/';
  }

  get(id:string):Observable<object>{
    if(this.infoCache[id]){
      return of(this.infoCache[id]);
    } else{
      return this.httpclient.get(this.basikUrl+id).pipe(tap(
        inf => {
          
          this.infoCache[id]=inf;
          console.log(this.infoCache[id]);
          
          setTimeout(() => {
            delete this.infoCache[id];
          }, 2 * 1000*60);
        }
        ));
      }
    }
}
