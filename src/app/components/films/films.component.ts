import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@app/_services/api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})

export class FilmsComponent implements OnInit {
  starshipDetails: any = {};
  starshipId: string | null = null;
  films: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.starshipId = params['id'];

      if (this.starshipId) {
        this.apiService.getStarshipDetailsById(this.starshipId).subscribe((details: any) => {
          this.starshipDetails = details.details;
          this.films = [];

          // Fetch each film's details
          this.starshipDetails.films.forEach((filmUrl: string) => {
            this.apiService.getFilmByUrl(filmUrl).subscribe((filmDetails: any) => {
              this.films.push(filmDetails);
            });
          });

          console.log('PRUEBAS FILMS ::: imageURL:', this.films);
          console.log('PRUEBAS ::: starshipDetails:', this.starshipDetails);
        });
      }
    });
  }
}
