import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../car';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule],
  template: ` 
    <article class="listing">
        <div class="image-parent">
          <img class="product-image" src="https://placehold.co/100x100" />
        </div>
        <section class="details">
          <p class="title">{{carItem.make}} {{carItem.model}}</p>
          <hr />
          <p class="detail">
            <span>Year</span>
            <span>{{carItem.year}}</span>
          </p>
          <div class="detail">
            <span>Transmission</span>
            <span>{{carItem.transmission}}</span>
          </div>
          <p class="detail">
            <span>Mileage</span>
            <span>{{carItem.miles}}</span>
          </p>
          <p class="detail">
            <span>Price</span>
            <span>{{carItem.price}}</span>
          </p>
        </section>
      </article>
      <hr />
      <button (click)="handleCarSaved()">Save</button>
  `,
  styles: ``,
})
export class ListingComponent {
  
  @Input() carItem!: Car;
  @Output() carSaved = new EventEmitter<Car>();

  handleCarSaved() {
    this.carSaved.emit(this.carItem);
  }
}
