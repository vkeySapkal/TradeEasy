import { Component } from "@angular/core";

@Component({
  selector:'app-product-card',
  templateUrl:'product-card.component.html',
   styleUrls:['product-card.component.css']
})

export class ProductCardComponent
{
  property:any ={
    "Id":1,
    "Name": "Gloves",
    "Description": "Saftey Products",
    "Price": 1999
  }
}

