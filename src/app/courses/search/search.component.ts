import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CoursesService } from '../courses.service';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'courses-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [FilterPipe]
})
export class SearchComponent implements OnInit {
  @Output() clickEvent = new EventEmitter<string>();

  input = '';

  constructor(
    private coursesService: CoursesService,
    private filterPipe: FilterPipe,
  ) { }

  ngOnInit(): void {
  }

  onKey(event: any): void {
    this.input = event.target.value;
  }

  onClick(): void {
    console.log(this.input);
    const filteredItems = this.filterPipe.transform(this.coursesService.initVals, this.input);
    this.coursesService.updateItems(filteredItems);
  }
}
