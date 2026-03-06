import { Injectable } from '@angular/core';
import { Suggestion } from '../models/Suggestion';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SuggestionService {
  url = 'http://localhost:3000/suggestions';
  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get<[Suggestion]>(this.url);
  }

  getById(id: number) {
    return this.http.get<{ status: string; suggestion: Suggestion }>(
      this.url + '/' + id,
    );
  }

  add(suggestion: Suggestion) {
    return this.http.post(this.url, suggestion);
  }

  update(id: number, suggestion: Suggestion) {
    return this.http.put<Suggestion>(this.url + '/' + id, suggestion);
  }
  delete(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
