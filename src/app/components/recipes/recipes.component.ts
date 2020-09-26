import { Component, OnInit } from '@angular/core';
import { RecipesdataService } from 'src/app/services/recipesdata.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes: any[] = [];
  indexRecipes: number = 0;
  products: any[] = [];

  constructor(private recipesService: RecipesdataService) {

    recipesService.getRecipes().subscribe(
      (data) => {
        this.recipes = data;
        this.getRecipes(this.indexRecipes);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getRecipes(index: number) {
    this.products = this.recipes[index]['product'];
    this.indexRecipes = index;
  }

  ngOnInit(): void {
  }

}
