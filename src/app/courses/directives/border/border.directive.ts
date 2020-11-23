import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[coursesBorder]'
})
export class BorderDirective {
  @Input('coursesBorder') creationDate: string;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.setBorder();
  }

  private setBorder() {
    const current = new Date();
    const today = new Date(current.getFullYear(), current.getMonth(), current.getUTCDate());
    const courseDate = new Date(this.creationDate);
    const oneDay = 86400000;
    const duration = Number(((today.valueOf() - courseDate.valueOf()) / oneDay).toFixed(0));
    if (duration < 0) {
      this.el.nativeElement.style.borderColor = 'blue';
    } else if (duration <= 14) {
      this.el.nativeElement.style.borderColor = 'green';
    }
  }
}
