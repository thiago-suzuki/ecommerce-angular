import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, debounceTime, filter, switchMap } from 'rxjs';
import { ProductSearchService } from '../services/product-search/product-search.service';
import { Product } from '../models/product-search';

@Component({
  selector: 'ecommerce-angular-products',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  control = new FormControl('', {nonNullable: true})
  products$?: Observable<Product[]>

  // constructor(private productSearchService: ProductSearchService) {}

  // ngOnInit() {
  //   this.products$ = this.control.valueChanges.pipe(
  //     filter(text => text.length > 1),
  //     debounceTime(400),
  //     switchMap(text => this.productSearchService.searchByTerm(text))
  //   );
  // }

  send(valor: string) : void {
    console.log(valor);
  }
}
