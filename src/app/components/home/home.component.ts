import { Component, OnInit } from '@angular/core';
import { RecipesdataService } from 'src/app/services/recipesdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  recipes: any[];
  filteredRecipes: any[];

  constructor(private recipesService: RecipesdataService) { }

  ngOnInit(): void {
    this.recipesService.getRecipes().subscribe(
      (data) => {
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
