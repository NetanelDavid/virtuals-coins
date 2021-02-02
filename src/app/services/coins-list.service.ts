import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinsListService {

  url:string;
  
  constructor(private httpclint :HttpClient) {
    this.url = 'https://api.coingecko.com/api/v3/coins/list';
  }

  get():Observable<object>{
    return this.httpclint.get(this.url);
  }
    

  
}
