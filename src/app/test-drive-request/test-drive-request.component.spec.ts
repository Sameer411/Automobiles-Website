import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDriveRequestComponent } from './test-drive-request.component';

describe('TestDriveRequestComponent', () => {
  let component: TestDriveRequestComponent;
  let fixture: ComponentFixture<TestDriveRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDriveRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDriveRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
