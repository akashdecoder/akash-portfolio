import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';

declare var Typed: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

  }

  ngAfterViewInit(): void {
      const typedElement = this.elementRef.nativeElement.querySelector('.typed');
    if (typedElement) {
      let typed_strings = typedElement.getAttribute('data-typed-items');
      typed_strings = typed_strings.split(',');

      const typed = new Typed(typedElement, {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }
  }
}
