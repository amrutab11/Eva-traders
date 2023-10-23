import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  ngOnInit(){
    this.changeCategory()
  }

  cementProducts = [
    {
      id: 1,
      name: 'Chettinad Cement',
      category: 'cement',
      price: 10.99,
      image: 'CHETTINAD.png'
    },
    {
      id: 2,
      name: 'Shree Cement',
      category: 'cement',
      price: 12.99,
      image: 'SHREE CEMENT.png'
    },
    {
      id: 3,
      name: 'Birla Shakti Cement',
      category: 'cement',
      price: 9.49,
      image: 'BIRLA SHAKTI.png'
    },
    // Add more cement products here
  ];

  steelProducts = [
    {
      id: 4,
      name: 'Uma Steel Bars',
      category: 'steel',
      price: 25.99,
      image: 'UMA LOGO.png'
    },
    {
      id: 5,
      name: 'Icon Steel Bars',
      category: 'steel',
      price: 22.99,
      image: 'icon logo.png'
    },
    {
      id: 6,
      name: 'Kalika Steel Bars',
      category: 'steel',
      price: 20.49,
      image: 'kalika logo.png'
    },
    // Add more steel products here
  ];

  aacBlockProducts = [
    {
      id: 7,
      name: 'Infra Market AAC Blocks',
      category: 'aac',
      price: 60.99,
      image: 'INFRA MARKET 2-blocks.png'
    },
    {
      id: 8,
      name: 'Magicrete AAC Blocks',
      category: 'aac',
      price: 58.99,
      image: 'INFRA MARKET 2-blocks.png'
    },
    {
      id: 9,
      name: 'Elite Eco Blocks',
      category: 'aac',
      price: 65.99,
      image: 'INFRA MARKET 2-blocks.png'
    },
    // Add more AAC block products here
  ];
  selectedCategory: string = 'all'; // Default to 'All Categories'
  productsToDisplay: any[] = [];
  changeCategory() {
    if (this.selectedCategory === 'all') {
      this.productsToDisplay = [
        ...this.cementProducts,
        ...this.steelProducts,
        ...this.aacBlockProducts,
      ];
    } else if (this.selectedCategory === 'cement') {
      this.productsToDisplay = this.cementProducts;
    } else if (this.selectedCategory === 'steel') {
      this.productsToDisplay = this.steelProducts;
    } else if (this.selectedCategory === 'aac') {
      this.productsToDisplay = this.aacBlockProducts;
    }
  }
  onValueChange(newValue: string) {
    this.selectedCategory = newValue;
  }

  addToCart(product: any) {
    // Implement your cart functionality here
  }
}
