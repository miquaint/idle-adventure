import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuffComponent } from './buff/buff.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatProgressBarModule, MatButtonModule, MatCardModule } from '@angular/material';
import { ClickUpgradeComponent } from './click-upgrade/click-upgrade.component';

@NgModule({
  declarations: [
    AppComponent,
    BuffComponent,
    ClickUpgradeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatProgressBarModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
