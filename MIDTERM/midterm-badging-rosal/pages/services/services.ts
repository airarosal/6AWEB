import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { DataService } from '../../services/data.service';
import { TruncatePipe } from '../../pipes/truncate.pipe';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TruncatePipe],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  private data = inject(DataService);

  search = new FormControl('');

  filtered$ = combineLatest([
    this.data.posts$,
    this.search.valueChanges.pipe(startWith(''))
  ]).pipe(
    map(([posts, text]) => {
      if (!text || text.trim() === '') {
        return [];
      }

      const query = text.toLowerCase();
      return posts.filter((p: any) =>
        p.title.toLowerCase().includes(query) ||
        p.body.toLowerCase().includes(query)
      );
    })
  );

  constructor() {
    this.data.loadPosts();
  }
}
