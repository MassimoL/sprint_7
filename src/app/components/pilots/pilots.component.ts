import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@app/_services/api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-pilots',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './pilots.component.html',
  styleUrl: './pilots.component.scss'
})

export class PilotsComponent implements OnInit {
  starshipDetails: any = {};
  starshipId: string | null = null;
  pilots: any[] = [];

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
          this.pilots = [];

          // Fetch each pilot's details
          this.starshipDetails.pilots.forEach((pilotUrl: string) => {
            this.apiService.getPilotByUrl(pilotUrl).subscribe((pilotDetails: any) => {
              this.pilots.push(pilotDetails);
            });
          });

          console.log('PRUEBAS PILOTS ::: imageURL:', this.pilots);
          console.log('PRUEBAS ::: starshipDetails:', this.starshipDetails);
        });
      }
    });
  }
}











