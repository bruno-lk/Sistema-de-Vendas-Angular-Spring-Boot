import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RenderService } from './render-service/RenderService';

@Injectable({
  providedIn: 'root'
})
export class RenderServiceService {

  apiURL:string = environment.apiURLBase + '/api/render-services'

  constructor(
    private http:HttpClient
  ) { }

  save(renderService: RenderService):Observable<RenderService>{
    return this.http.post<RenderService>(this.apiURL,renderService)
  }
}
