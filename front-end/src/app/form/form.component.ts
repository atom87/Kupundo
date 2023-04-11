import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../models/category';


@Component({
  selector: 'au-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() categories: Category[];
  @Output() onChangeCategory: EventEmitter<string> = new EventEmitter();
  @Output() onChangeName: EventEmitter<string> = new EventEmitter();

  
   newCat: number;
   newSubcat: string[] = [];
   editedSubcat: string;
   editedName: string;
   show: boolean;


  constructor(private router: Router) { }

  ngOnInit(){
  }

  changeCategory(){
    this.onChangeCategory.emit(this.editedSubcat);
  }

  updateSubcategory(){
    for (let i in this.categories){
      if(this.categories[i]._id == this.newCat){
        this.newSubcat = this.categories[i].subcategories;
      } else{
        this.editedSubcat = "";
        this.changeCategory();
      }
    }
  }

  changeName(){
    this.onChangeName.emit(this.editedName);
   if(this.editedName !== "name.value"){
     console.log("Nepostojeci predmet.");
    this.show = true;
    this.goToList();
   }
  }

  goToList(){
    this.router.navigate(['search']);
  }
}
