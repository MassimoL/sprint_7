import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StarshipsComponent } from './starships.component';
import { ApiService } from '@app/_services/api.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('StarshipsComponent', () => {
  let component: StarshipsComponent;
  let fixture: ComponentFixture<StarshipsComponent>;
  let service: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [StarshipsComponent],
      providers: [ApiService]
    })
    .compileComponents();

    service = TestBed.inject(ApiService);
    fixture = TestBed.createComponent(StarshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch starships on init', () => {
    const spy = spyOn(component, 'fetchStarships');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should load more starships on scroll', () => {
    const spy = spyOn(component, 'loadMoreStarships');
    component.onScroll();
    expect(spy).toHaveBeenCalled();
  });

});
