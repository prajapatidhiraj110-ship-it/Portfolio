import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { heroData, aboutSection, skillGroups, experienceEntries, projectCards, journeyItems, achievements, resumeCard, contactLinks } from '../../data/portfolio.data';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { FeatureCardComponent } from '../../shared/components/feature-card/feature-card.component';
import { TimelineCardComponent } from '../../shared/components/timeline-card/timeline-card.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatDividerModule,
    SectionHeaderComponent,
    FeatureCardComponent,
    TimelineCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  readonly hero = heroData;
  readonly about = aboutSection;
  readonly skillGroups = skillGroups;
  readonly experienceEntries = experienceEntries;
  readonly projectCards = projectCards;
  readonly journeyItems = journeyItems;
  readonly achievements = achievements;
  readonly resume = resumeCard;
  readonly contactLinks = contactLinks;

  readonly expertise = [
    { name: 'Reactive Forms', level: 92 },
    { name: 'RxJS', level: 90 },
    { name: 'Lazy Loading', level: 94 },
    { name: 'Route Guards', level: 88 },
    { name: 'Interceptors', level: 90 },
    { name: 'State Management', level: 86 },
    { name: 'Performance Optimization', level: 93 },
  ];

  readonly submitted = signal(false);
  readonly successMessage = signal('');

  contactForm: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  submitContact(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.submitted.set(true);
    this.successMessage.set('Thanks for reaching out! I will respond soon.');
    this.contactForm.reset();
  }
}
