import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {
  navbarlinks!: NodeListOf<Element>;

  constructor(private elementRef: ElementRef, private router: Router) {}

  ngAfterViewInit(): void {
    this.navbarlinks = document.querySelectorAll('#navbar .scrollto');
    // this.navbarlinksActive();
    this.toggleBacktotop();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    // this.navbarlinksActive();
    this.toggleBacktotop();
  }

  // navbarlinksActive(): void {
  //   const position = window.scrollY + 200;
  //   this.navbarlinks.forEach(navbarlink => {
  //     const hash = navbarlink.getAttribute('href');
  //     if (!hash) return;
  //     console.log();
  //     const section = document.querySelector(hash) as HTMLElement;
  //     if (!section) return;
  //     if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
  //       navbarlink.classList.add('active');
  //     } else {
  //       navbarlink.classList.remove('active');
  //     }
  //   });
  // }

  toggleBacktotop(): void {
    const backtotop = document.querySelector('.back-to-top');
    if (backtotop) {
      if (window.scrollY > 100) {
        backtotop.classList.add('active');
      } else {
        backtotop.classList.remove('active');
      }
    }
  }

  mobileNavToggle(event: MouseEvent): void {
    const body = this.elementRef.nativeElement.ownerDocument.body;
    body.classList.toggle('mobile-nav-active');
    const target = event.currentTarget as HTMLElement;
    target.classList.toggle('bi-list');
    target.classList.toggle('bi-x');
  }

  scrollToElement(el: string): void {
    const element = document.querySelector(el) as HTMLElement;
    if (element) {
      const elementPos = element.offsetTop;
      window.scrollTo({
        top: elementPos,
        behavior: 'smooth'
      });
    }
  }

  setActive(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const navbarLinks = document.querySelectorAll('#navbar .scrollto');

    navbarLinks.forEach(link => {
      link.classList.remove('active');
    });

    target.classList.add('active');
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
