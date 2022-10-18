import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css'],
})
export class SearcherComponent implements OnInit {
  keywordSearch!: string;
  showResults = false;

  constructor() {}

  ngOnInit(): void {}

  onSearch() {
    if (this.keywordSearch !== '') {
      setTimeout(() => {
        this.showResults = true;
      }, 2000);
    } else {
      this.showResults = false;
    }
  }
}
