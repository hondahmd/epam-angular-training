import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';

const debounce = (fn, delay) => {
  let timer;

  return (text) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(text);
    }, delay)
  }
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() onSearch = new EventEmitter<string>();

  text = '';

  textSubject: Subject<string> = new Subject<string>();

  checker: Function;

  constructor() {
    this.checker = debounce((text) => {
      this.onSearch.emit(text);
    }, 500)
  }

  ngOnInit(): void {
    this.textSubject.subscribe(text => {
      if (text.length === 0 || text.length >= 3) {
        this.checker(text);
      }
    })
  }

  onKeyUp(): void {
    this.textSubject.next(this.text);
  }
}
