import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateListComponent } from './create-list.component';

describe('CreateListComponent', () => {
  let component: CreateListComponent;
  let fixture: ComponentFixture<CreateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
