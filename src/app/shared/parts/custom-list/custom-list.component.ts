import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatSelectionList, MatListOption, MatSelectionListChange } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

/**
 * @see https://stackoverflow.com/questions/48277904/angular-mat-selection-list-how-to-make-single-checkbox-select-similar-to-radio/50268504
 */
@Component({
  selector: 'app-custom-list',
  templateUrl: './custom-list.component.html',
  styleUrls: ['./custom-list.component.scss']
})
export class CustomListComponent implements OnInit {
  @ViewChild(MatSelectionList, { static: true })
  private selectionList: MatSelectionList;

  @Input() items: string[];
  @Output() selectionChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
    this.selectionList.selectedOptions = new SelectionModel<MatListOption>(false);
    this.selectionList.selectionChange.subscribe((s: MatSelectionListChange) => {
      this.selectionChange.emit(s.option.value);
    });
  }
}
