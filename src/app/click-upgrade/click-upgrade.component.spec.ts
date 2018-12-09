import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickUpgradeComponent } from './click-upgrade.component';

describe('ClickUpgradeComponent', () => {
  let component: ClickUpgradeComponent;
  let fixture: ComponentFixture<ClickUpgradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickUpgradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickUpgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
