import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {BreadcrumbInterface} from '../../models/breadcrumb-interface';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent implements OnInit {
  @Input() items: BreadcrumbInterface[];

  constructor() { }

  ngOnInit(): void {
  }

}
