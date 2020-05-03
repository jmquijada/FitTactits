import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlimentoCalcPage } from './alimento-calc.page';

describe('AlimentoCalcPage', () => {
  let component: AlimentoCalcPage;
  let fixture: ComponentFixture<AlimentoCalcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlimentoCalcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlimentoCalcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
