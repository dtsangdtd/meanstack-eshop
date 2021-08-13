import { takeUntil } from 'rxjs/operators';
import { ProductsService } from '@bluebits/products';
import { OrdersService } from '@bluebits/orders';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '@bluebits/users';
import { combineLatest, Subject } from 'rxjs';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {
  statistics = [];
  endSub$: Subject<any> = new Subject();
  constructor(
    private orderService: OrdersService,
    private usersService: UsersService,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this._getData();
  }
  ngOnDestroy() {
    this.endSub$.complete();
  }
  private _getData() {
    combineLatest([
      this.orderService.getCountOrder(),
      this.productService.getCountProduct(),
      this.usersService.getCountUser(),
      this.orderService.getTotalSales(),
    ])
      .pipe(takeUntil(this.endSub$))
      .subscribe((values) => {
        this.statistics = values;
      });
  }
}
