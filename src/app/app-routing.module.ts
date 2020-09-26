import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';



const route: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recetadetalle', component: RecipeDetailsComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
