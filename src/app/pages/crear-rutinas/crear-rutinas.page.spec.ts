import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearRutinasPage } from './crear-rutinas.page';

describe('CrearRutinasPage', () => {
  let component: CrearRutinasPage;
  let fixture: ComponentFixture<CrearRutinasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearRutinasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearRutinasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
