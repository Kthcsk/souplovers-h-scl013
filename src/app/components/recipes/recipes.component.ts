import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit {

  tagV = ["Vegetariano", "Vegano", "Postre"];
  tagO =["Saludable", "Sopas y cremas","Principal"];

  constructor() {}

  @Input() filteredRecipes: any[];

  ngOnInit(): void {
  }

}
