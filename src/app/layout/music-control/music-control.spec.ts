import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicControl } from './music-control';

describe('MusicControl', () => {
  let component: MusicControl;
  let fixture: ComponentFixture<MusicControl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicControl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicControl);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
