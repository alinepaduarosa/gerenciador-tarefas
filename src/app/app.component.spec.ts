import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [AppComponent],
        });

        await TestBed.compileComponents();
    });

    it('deve renderizar o componente header', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const headerDebugEl = fixture.debugElement.query(By.css('app-header'));
        expect(headerDebugEl).toBeTruthy();
    });

    it('deve renderizar o componente router-outlet', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const routerOutletDebugEl = fixture.debugElement.query(By.css('router-outlet'));
        expect(routerOutletDebugEl).toBeTruthy();
    });
});
