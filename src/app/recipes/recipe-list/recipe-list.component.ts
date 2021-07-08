import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://images.ctfassets.net/uexfe9h31g3m/3Bo18bcgOQ2oyIUIE6S48Q/0b005fec068eff81fd657ba34627f894/Cottagepie_1024x768.jpg?w=1024&h=768&fm=webp&fit=thumb&q=90')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}