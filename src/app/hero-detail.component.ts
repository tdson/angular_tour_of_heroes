import {Component, Input} from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details:</h2>
      <div>
        <label>ID:</label>
        <input [(ngModel)]="hero.id" placeholder="Name" readonly>
      </div>
      <div>
        <label>Name:</label>
        <input [(ngModel)]="hero.name" placeholder="Name">
      </div>
    </div>
  `
})

export class HerodetailComponent {
  @Input() hero: Hero;
}
