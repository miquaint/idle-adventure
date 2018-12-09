import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  drain_amount = 1;
  progress = 0;
  progress_per_sec = 0;
  requirement = 10;
  essence = 0;
  essence_per_completion = 1;

  drain() {
    this.progress += this.drain_amount;
    while(this.progress >= this.requirement) {
      this.progress -= this.requirement;
      this.essence += this.essence_per_completion;
    }
  }

  purchase(cost: number) {
    this.essence -= cost;
  }

  drain_upgrade(amount: number) {
    this.drain_amount += amount;
  }
}
