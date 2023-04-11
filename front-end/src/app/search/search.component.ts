import { Component, OnInit } from '@angular/core';
import { AuctionService } from '../service/auction.service';
import { Category } from '../models/category';
import { Auction } from '../models/auction';


@Component({
  selector: 'au-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  auctions: Auction[];
  categories: Category[];

  params ={
    sort : "",
    sortDirection : "desc",
    page: 1,
    pageSize : 5,
    filter : {
      name: "",
      category: ""
    }
  }

  loadMore = true;

  constructor(private service: AuctionService) { }

  ngOnInit(){
    this.refreshAuctions();
    this.refreshCategories();
  }

  refreshAuctions(){
    this.service.getAuctions(this.params).subscribe( res => {
      this.loadMore = (res.length < 5) ? false:true;
      if(this.params.page == 1){
        this.auctions = res;
      } else{
        res.forEach(x => {
          this.auctions.push(x);
        });
      }
    });
  }

  refreshCategories(){
    this.service.getCategory().subscribe( res => {
      this.categories = res
    });
  }

  setCategory(category: string){
    this.params.filter.category = category;
    this.refreshAuctions();
    this.params.pageSize = 5;
  }
  setName(name:string){
    this.params.filter.name = name;
    this.refreshAuctions();
    this.params.pageSize = 5;
  }

  showLoadMore(){
    this.params.page ++;
    this.refreshAuctions();
  }

}
