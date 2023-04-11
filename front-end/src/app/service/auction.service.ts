import { Injectable } from '@angular/core';
import{ HttpClient, HttpParams } from '@angular/common/http';
import{ Observable } from 'rxjs';
import{ map } from 'rxjs/operators';
import { Auction } from '../models/auction';
import { Category } from '../models/category';

const url = "http://localhost:3000/api";

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  constructor(private http: HttpClient) { }

  getAuctions(params?: any):Observable<Auction[]>{

    let queryParams ={};
    if(params){
      queryParams = { params : new HttpParams()
        .set('sort', params.sort || "")
      .set('sortDirection', params.sortDirection || "")
    .set('page', params.page && params.page.toString() || "")
  .set('pageSize', params.pageSize && params.pageSize.toString() || "")
.set('filter', params.filter && JSON.stringify(params.filter) || "")
    }
  }

    return this.http.get<Auction[]>(url + '/auctions', queryParams).pipe(map( res => {
      return res.map(x => new Auction(x));
    }))
  }

  getCategory(): Observable<Category[]>{
    return this.http.get<Category[]>(url + '/categories').pipe(map( res => {
      let x = new Array<Category>();
      res.forEach(cat => x.push(new Category(cat)));
      return x;
    }))
  }
}
