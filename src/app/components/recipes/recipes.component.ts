import { Component, OnInit, Input } from '@angular/core';
import { RecipesdataService } from 'src/app/services/recipesdata.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit {

item: Object;
recipes: any[];
tagV = ["Vegetariano", "Vegano", "Postre"];
tagO =["Saludable", "Sopas y cremas","Principal"];

  constructor(private recipesService: RecipesdataService) {}

    @Input() filteredRecipes: any[];

  ngOnInit(): void {
    this.item = this.recipes[0];
  }

}
