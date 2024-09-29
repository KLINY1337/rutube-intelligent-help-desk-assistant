import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFileModalComponent } from './add-file-modal.component';

describe('AddFileModalComponent', () => {
  let component: AddFileModalComponent;
  let fixture: ComponentFixture<AddFileModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFileModalComponent]
    });
    fixture = TestBed.createComponent(AddFileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
