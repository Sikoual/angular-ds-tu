import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator'

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  let component: AppComponent;

  const createComponent = createComponentFactory({
    component: AppComponent,
    declarations: [AppComponent]
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
