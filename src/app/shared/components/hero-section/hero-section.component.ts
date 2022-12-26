import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {
  iconArray:string[] = ['<i class="fab fa-apple fa-3x" alt="Apple" title="Apple"></i>', '<i class="fas fa-robot fa-3x" alt="Robot" title="Robot"></i>','<i class="fab fa-windows fa-3x" alt="Window" title="Window"></i>']
  constructor() { }

  ngOnInit(): void {
  }

}
