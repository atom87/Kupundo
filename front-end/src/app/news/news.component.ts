import { Component, OnInit } from '@angular/core';
import { AuctionService } from '../service/auction.service';
import { Auction } from '../models/auction';

@Component({
  selector: 'au-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {


  auctionStart: Auction[] = [];
  auctionEnd: Auction[] = [];
  newAuctions: Auction[] = [];
  oldAuctions: Auction[] = [];

  constructor(private service: AuctionService) { }

  ngOnInit(){
    this.get();
  }


get(){
  this.service.getAuctions({sort: "dateEnd", sortDirection: "desc"}).subscribe( res => {
this.auctionStart = res;
for (let i = 0; i < 5; i++){
  this.newAuctions.push(this.auctionStart[i]);
}
  });

  this.service.getAuctions({sort: "dateEnd", sortDirection: "asc"}).subscribe( res => {
    this.auctionEnd = res;
    for(let i = 0; i < 5; i++){
      this.oldAuctions.push(this.auctionEnd[i]);
    }
  });
}
}
