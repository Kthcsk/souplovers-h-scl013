import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*Firebase imports*/
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
/*Styles imports */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchBannerComponent } from './components/search-banner/search-banner.component';
import { FiltersComponent } from './components/filters/filters.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { TipsComponent } from './components/tips/tips.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SearchBannerComponent,
    FiltersComponent,
    RecipesComponent,
    TipsComponent,
    RecipeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
