import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  ingredientList = [
    'Soy Sauce',
    'Vinegar',
    'Pork Cubes',
    'Garlic',
    'Laurel Leaves',
    'Oil',
    'Whole Black Pepper',
  ];

  constructor() { }

  ngOnInit() {
  }

}
