import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  { path: 'news', component: NewsComponent },
  { path: 'search', component: SearchComponent},
  { path: '', redirectTo: '/news', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
