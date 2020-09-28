import { Component, OnInit } from '@angular/core';
import { RecipesdataService } from 'src/app/services/recipesdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  recipes: any[]; // propiedad recetas array de tipo any
  filteredRecipes: any[]; // propiedad recetas filtradas array de tipo any

  constructor(private recipesService: RecipesdataService) { }

  ngOnInit(): void { // se cambia de lugar el consumo del servicio
    this.recipesService.getRecipes().subscribe( //  para que al momento de abrir la página cargar el componente 
      (data) => {                               // home con el json
        this.recipes = data[0]['recipes'];
        this.filteredRecipes = this.recipes;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  newFilteredRecipes(recipes) {
    console.log('Recipes Events: ' + recipes);
    this.filteredRecipes = recipes;
  }

}
