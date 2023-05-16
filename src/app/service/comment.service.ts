import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/enviroments/environment';
import { Comment } from 'src/app/Comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`;

  constructor(private http: HttpClient) {}

  createComment(data: Comment): Observable<Comment> {
    const url = `${this.apiUrl}/${data.momentId}/comments`;
    return this.http.post<Comment>(url, data);
  }
}
