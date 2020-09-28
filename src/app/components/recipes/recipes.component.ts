import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit {

  constructor() {}

    @Input() filteredRecipes: any[];

  ngOnInit(): void {
  }

}
