import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Input() recipes: any[]
  @Output() filteredRecipesEmmiter: EventEmitter<any[]> = new EventEmitter<any[]>()

  constructor() { }

  ngOnInit(): void {
  }

  filter(option: string) {
    const recent = this.recipes.filter(item => item.tag.toLowerCase().includes(option))
    console.log(recent)
    this.filteredRecipesEmmiter.emit(recent)
  }
}
