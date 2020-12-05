import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mute',
  styleUrls: ['mute.component.css'],
  template: `<div class="mute" [ngClass]="{'mute-fixed': fixed}">
        <div class="mute-container">
            <h1>Loading...</h1>
        </div>
    </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MuteComponent implements OnInit {
  /**
   * Position. Fixed = true for fullscreen mode
   */
  @Input() fixed = false;

  constructor() { }

  ngOnInit(): void {
  }

}
