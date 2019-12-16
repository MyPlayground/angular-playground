import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { CitySearchService } from 'src/app/core';
import { observable, of } from 'rxjs';

@Component({
  selector: 'app-lazy-page',
  templateUrl: './lazy-page.component.html',
  styleUrls: ['./lazy-page.component.scss']
})
export class LazyPageComponent implements OnInit, OnDestroy {
  event: EventEmitter<void> = new EventEmitter<void>();

  destroy: EventEmitter<void> = new EventEmitter<void>();

  constructor(service: CitySearchService) {}

  ngOnInit() {
    this.event.pipe(takeUntil(this.destroy)).subscribe(
      () => console.log('next'),
      error => console.log('error'),
      () => console.log('complete')
    );
  }

  ngOnDestroy() {
    this.destroy.emit();
  }

  onClickButton() {
    of(1, 2, 3)
      .pipe()
      .subscribe(
        value => console.log(value),
        error => console.error(error),
        () => console.log('complete')
      );
  }
}
