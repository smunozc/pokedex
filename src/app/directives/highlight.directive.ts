import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @Input() color: string = 'yellow';

  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackgroundColor(this.color);
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor('');
  }

  constructor(private readonly elementRef: ElementRef) { }

  private changeBackgroundColor(color: string): void {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

}
