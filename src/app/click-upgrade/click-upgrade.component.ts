import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-click-upgrade',
  templateUrl: './click-upgrade.component.html',
  styleUrls: ['./click-upgrade.component.scss']
})
export class ClickUpgradeComponent implements OnInit {
  @Input() essence: number;
  @Output() purchase = new EventEmitter<number>();
  @Input() drain_amount: number;
  @Output() drain_upgrade = new EventEmitter<number>();
  cost = 10;
  drain_increase = 1;

  constructor() { }

  ngOnInit() {
  }

  upgrade() {
    if (this.essence >= this.cost) {
      this.purchase.emit(this.cost);
      this.drain_upgrade.emit(this.drain_increase);
      this.cost = Math.floor(this.cost * 1.1);
    }
  }
}
