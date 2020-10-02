import { Component, OnInit } from '@angular/core';
import { RecipeDetailService } from 'src/app/services/recipe-detail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipesDetails: any[] = [];


  constructor(private recipeDetailService: RecipeDetailService,
              private router:Router) { }

  toCart(){
    this.router.navigateByUrl('/carrodecompras')
  }            

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
