import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  HostListener,
  Host,
} from '@angular/core';

@Directive({
  selector: '[appButtonHover]',
})
export class ButtonHoverDirective implements OnInit {
  constructor(private El: ElementRef, private renderer2: Renderer2) {}
  ngOnInit() {
    this.renderer2.setStyle(this.El.nativeElement, 'background-color', 'red');
    this.renderer2.setStyle(this.El.nativeElement, 'color', 'white');
    this.renderer2.setStyle(this.El.nativeElement, 'border', '1px solid red');
  }
  @HostListener('mouseenter') suKienHover() {
    this.renderer2.setStyle(
      this.El.nativeElement,
      'background-color',
      'transparent'
    );
    this.renderer2.setStyle(this.El.nativeElement, 'color', 'red');
  }
  @HostListener('mouseleave') suKienLeave() {
    this.renderer2.setStyle(this.El.nativeElement, 'background-color', 'red');
    this.renderer2.setStyle(this.El.nativeElement, 'color', 'white');
  }
}
