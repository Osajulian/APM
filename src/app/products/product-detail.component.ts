import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: String = 'Product Detail';
  product: IProduct;


  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += ` ${id}`;

    // we hardcode  aproduct to test the id routing.
    // In a real world app, you'd write the code here to fetch data using http
    this.product = {
'productId': id,
'productName': 'Leaf Lake',
'productCode': 'GDN-0011',
'releaseDate': 'March 19, 2016',
'description': 'Leaf rake with 48-inch wooden handle',
'price': 19.95,
'starRating': 3.2,
'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
    };
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
