import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() onSearch = new EventEmitter<string>();

  text = '';

  ngOnInit(): void {
  }

  onClick(): void {
    this.onSearch.emit(this.text);
  }
}
