import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

interface Alumni {
  id: number;
  name: string;
  graduationYear: number;
  degree: string;
  currentPosition: string;
  company: string;
  employmentStatus: 'Employed' | 'Self-Employed' | 'Unemployed' | 'Student';
  email: string;
  phone: string;
  eventsAttended: number;
  lastEventDate: string;
  contributions: number;
  skills: string[];
}

interface Event {
  id: number;
  name: string;
  date: string;
  type: 'Networking' | 'Workshop' | 'Reunion' | 'Career Fair';
  attendees: number;
  location: string;
}

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'Alumni Tracking & Engagement System';
  currentView = 'dashboard';
  sidenavOpened = true;

  // Navigation items
  navigationItems = [
    { icon: 'dashboard', label: 'Dashboard', route: 'dashboard' },
    { icon: 'people', label: 'Alumni Directory', route: 'alumni' },
    { icon: 'event', label: 'Events', route: 'events' },
    { icon: 'analytics', label: 'Analytics', route: 'analytics' },
    { icon: 'school', label: 'Academic Records', route: 'academic' },
    { icon: 'work', label: 'Career Services', route: 'career' },
    { icon: 'volunteer_activism', label: 'Donations', route: 'donations' },
    { icon: 'settings', label: 'Settings', route: 'settings' },
  ];

  // Mock Alumni Data
  alumni: Alumni[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      graduationYear: 2020,
      degree: 'Computer Science',
      currentPosition: 'Senior Software Engineer',
      company: 'Microsoft',
      employmentStatus: 'Employed',
      email: 'sarah.johnson@email.com',
      phone: '+1-555-0123',
      eventsAttended: 5,
      lastEventDate: '2023-12-15',
      contributions: 15000,
      skills: ['JavaScript', 'React', 'Node.js', 'Azure'],
    },
    {
      id: 2,
      name: 'Michael Chen',
      graduationYear: 2019,
      degree: 'Business Administration',
      currentPosition: 'Product Manager',
      company: 'Amazon',
      employmentStatus: 'Employed',
      email: 'michael.chen@email.com',
      phone: '+1-555-0124',
      eventsAttended: 8,
      lastEventDate: '2024-01-20',
      contributions: 25000,
      skills: ['Product Strategy', 'Data Analysis', 'Leadership', 'Agile'],
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      graduationYear: 2021,
      degree: 'Marketing',
      currentPosition: 'Digital Marketing Specialist',
      company: 'Meta',
      employmentStatus: 'Employed',
      email: 'emily.rodriguez@email.com',
      phone: '+1-555-0125',
      eventsAttended: 3,
      lastEventDate: '2023-11-10',
      contributions: 5000,
      skills: ['SEO', 'Social Media', 'Content Strategy', 'Analytics'],
    },
    {
      id: 4,
      name: 'David Thompson',
      graduationYear: 2018,
      degree: 'Engineering',
      currentPosition: 'Startup Founder',
      company: 'TechFlow Solutions',
      employmentStatus: 'Self-Employed',
      email: 'david.thompson@email.com',
      phone: '+1-555-0126',
      eventsAttended: 12,
      lastEventDate: '2024-02-05',
      contributions: 50000,
      skills: ['Machine Learning', 'IoT', 'Team Building', 'Innovation'],
    },
    {
      id: 5,
      name: 'Lisa Park',
      graduationYear: 2022,
      degree: 'Data Science',
      currentPosition: 'Pursuing Masters',
      company: 'Stanford University',
      employmentStatus: 'Student',
      email: 'lisa.park@email.com',
      phone: '+1-555-0127',
      eventsAttended: 2,
      lastEventDate: '2023-09-22',
      contributions: 1000,
      skills: ['Python', 'Machine Learning', 'Statistics', 'Research'],
    },
  ];

  // Mock Events Data
  events: Event[] = [
    {
      id: 1,
      name: 'Annual Alumni Reunion',
      date: '2024-03-15',
      type: 'Reunion',
      attendees: 150,
      location: 'University Campus',
    },
    {
      id: 2,
      name: 'Tech Career Workshop',
      date: '2024-02-20',
      type: 'Workshop',
      attendees: 45,
      location: 'Virtual Event',
    },
    {
      id: 3,
      name: 'Networking Night',
      date: '2024-01-30',
      type: 'Networking',
      attendees: 80,
      location: 'Downtown Convention Center',
    },
    {
      id: 4,
      name: 'Career Fair 2024',
      date: '2024-04-10',
      type: 'Career Fair',
      attendees: 200,
      location: 'University Gymnasium',
    },
  ];

  // Display columns for alumni table
  alumniDisplayedColumns: string[] = [
    'name',
    'graduationYear',
    'currentPosition',
    'company',
    'employmentStatus',
    'eventsAttended',
    'contributions',
  ];

  // Display columns for events table
  eventsDisplayedColumns: string[] = [
    'name',
    'date',
    'type',
    'attendees',
    'location',
  ];

  // Statistics
  get totalAlumni(): number {
    return this.alumni.length;
  }

  get employedCount(): number {
    return this.alumni.filter((a) => a.employmentStatus === 'Employed').length;
  }

  get totalContributions(): number {
    return this.alumni.reduce((sum, a) => sum + a.contributions, 0);
  }

  get averageEventsAttended(): number {
    const total = this.alumni.reduce((sum, a) => sum + a.eventsAttended, 0);
    return Math.round((total / this.alumni.length) * 10) / 10;
  }

  // Add methods for template calculations
  getStatusCount(status: string): number {
    return this.alumni.filter((a) => a.employmentStatus === status).length;
  }

  getTopContributors(): Alumni[] {
    return this.alumni
      .slice()
      .sort((a, b) => b.contributions - a.contributions)
      .slice(0, 3);
  }

  getTopParticipants(): Alumni[] {
    return this.alumni
      .slice()
      .sort((a, b) => b.eventsAttended - a.eventsAttended)
      .slice(0, 3);
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'Employed':
        return 'primary';
      case 'Self-Employed':
        return 'accent';
      case 'Student':
        return 'warn';
      case 'Unemployed':
        return ''; // Use default styling for unemployed
      default:
        return '';
    }
  }

  getStatusBackgroundColor(status: string): string {
    switch (status) {
      case 'Employed':
        return '#3498db';
      case 'Self-Employed':
        return '#e74c3c';
      case 'Student':
        return '#f39c12';
      case 'Unemployed':
        return '#6c757d';
      default:
        return '#6c757d';
    }
  }

  getEventTypeColor(type: string): string {
    switch (type) {
      case 'Reunion':
        return 'primary';
      case 'Workshop':
        return 'accent';
      case 'Networking':
        return 'warn';
      case 'Career Fair':
        return '';
      default:
        return '';
    }
  }

  // Navigation methods
  navigateTo(route: string) {
    this.currentView = route;
  }

  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
  }
}
