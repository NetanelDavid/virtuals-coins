import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoCoinService {
  
  basikUrl:string;
  
  constructor(private httpclient:HttpClient) {
    this.basikUrl='https://api.coingecko.com/api/v3/coins/';
  }

  get(id:string):Observable<object>{
    return this.httpclient.get(this.basikUrl+id);
  }
}
