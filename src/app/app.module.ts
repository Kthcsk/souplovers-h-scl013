import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
/*Firebase imports*/
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
/*Styles imports */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from "@angular/flex-layout";

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

import { HttpClientModule } from '@angular/common/http';
import { RecipesdataService } from './services/recipesdata.service';
import { AngularfireConectionService } from './services/angularfire-conection.service';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { PurchaseComponent } from './components/purchase/purchase.component';


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
    RecipeDetailsComponent,
    ShoppingCartComponent,
    PurchaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [RecipesdataService, AngularfireConectionService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
