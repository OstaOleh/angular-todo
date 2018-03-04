import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInpComponent } from './todo-inp.component';

describe('TodoInpComponent', () => {
  let component: TodoInpComponent;
  let fixture: ComponentFixture<TodoInpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoInpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoInpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
