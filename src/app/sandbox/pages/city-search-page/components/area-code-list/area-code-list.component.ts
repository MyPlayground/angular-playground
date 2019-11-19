import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-code-list',
  templateUrl: './area-code-list.component.html',
  styleUrls: ['./area-code-list.component.scss']
})
export class AreaCodeListComponent implements OnInit {
  items: string[] = ['aaa', 'bbb', 'ccc'];

  constructor() {}

  ngOnInit() {}
}
