import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerEjercicioComponent } from './ver-ejercicio.component';

describe('VerEjercicioComponent', () => {
  let component: VerEjercicioComponent;
  let fixture: ComponentFixture<VerEjercicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerEjercicioComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerEjercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
