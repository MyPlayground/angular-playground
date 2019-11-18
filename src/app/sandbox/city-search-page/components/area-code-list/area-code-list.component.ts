import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-code-list',
  templateUrl: './area-code-list.component.html',
  styleUrls: ['./area-code-list.component.scss']
})
export class AreaCodeListComponent implements OnInit {
  private static AREA_CODE_LIST = [
    [
      {
        code: '01',
        japanese: '北海道',
        english: 'Hokkaido'
      }
    ]
  ];

  items: string[] = ['aaa', 'bbb', 'ccc'];

  constructor() {}

  ngOnInit() {}
}
