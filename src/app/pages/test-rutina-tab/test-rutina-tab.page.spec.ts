import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestRutinaTabPage } from './test-rutina-tab.page';

describe('TestRutinaTabPage', () => {
  let component: TestRutinaTabPage;
  let fixture: ComponentFixture<TestRutinaTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRutinaTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestRutinaTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
