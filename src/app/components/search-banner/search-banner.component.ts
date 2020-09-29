import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-banner',
  templateUrl: './search-banner.component.html',
  styleUrls: ['./search-banner.component.css']
})

export class SearchBannerComponent implements OnInit {

  @Input() recipes: any[]
  @Output() filteredRecipesEmmiter: EventEmitter<any[]> = new EventEmitter<any[]>()

  constructor() { }

  search(searchText: string) {
    console.log(searchText);
    const search = this.recipes.filter(
      item => item.name.toLowerCase().includes(searchText.toLowerCase())
      || item.tag.toLowerCase().includes(searchText.toLowerCase()))
    console.log(search);
    this.filteredRecipesEmmiter.emit(search)
  }

  ngOnInit(): void {
  }

}
