import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaAlunoComponent } from './media.component';

describe('MediaAlunoComponent', () => {
  let component: MediaAlunoComponent;
  let fixture: ComponentFixture<MediaAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MediaAlunoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediaAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});