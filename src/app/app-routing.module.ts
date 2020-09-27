import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchBannerComponent } from './components/search-banner/search-banner.component';
import { FiltersComponent } from './components/filters/filters.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { TipsComponent } from './components/tips/tips.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';


const route: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'recetadetalle', component: RecipeDetailsComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'recetas', component: RecipesComponent },

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
