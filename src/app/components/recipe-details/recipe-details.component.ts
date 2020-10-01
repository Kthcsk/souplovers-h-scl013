import { Component, OnInit } from '@angular/core';
import { RecipeDetailService } from 'src/app/services/recipe-detail.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipesDetails: any[] = [];


  constructor(private recipeDetailService: RecipeDetailService) { }

  ngOnInit(): void {
    this.recipeDetailService.getRecipesDetails().subscribe(
      (data) => {
        this.recipesDetails = data['recipes-details'];
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
