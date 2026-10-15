import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DofoPage } from './dofo.page';

describe('DofoPage', () => {
  let component: DofoPage;
  let fixture: ComponentFixture<DofoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DofoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
