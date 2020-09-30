import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit {

  tagV = ["Vegetariano", "Vegano", "Postre"];
  tagO =["Saludable", "Sopas y cremas","Principal"];

  constructor(private router: Router) {}

  @Input() filteredRecipes: any[];
  
  selectedBrownie(item: any){
      console.log(item);
      this.router.navigateByUrl('/recetadetalle')
  }

  ngOnInit(): void {
  }

}
