import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  input = '';

  constructor() { }

  ngOnInit(): void {
  }

  onKey(event: any): void {
    this.input = event.target.value;
  }

  onClick(): void {
    console.log(this.input);
  }
}
