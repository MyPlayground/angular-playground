import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-list',
  templateUrl: './custom-list.component.html',
  styleUrls: ['./custom-list.component.scss']
})
export class CustomListComponent implements OnInit {
  @Input() items: string[];
  @Output() click: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}
}
