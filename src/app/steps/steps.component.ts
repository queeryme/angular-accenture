import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {

  stepList = [
    'Stir-fry the garlic until aromatic',
    'Add the pork cubes and fry for 10 minutes until half done',
    'Add the vinegar and simmer for 5 minutes',
    'Add the remaining ingredients and continue cooking until fully cooked',
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
