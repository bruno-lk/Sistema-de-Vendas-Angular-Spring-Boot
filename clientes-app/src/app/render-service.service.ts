import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RenderServiceSearch } from './render-service/render-service-list/RenderServiceSearch';
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

  search(name:string, month:number) : Observable<RenderServiceSearch[]> {
    const httpParams = new HttpParams()
      .set("name", name? name : '')
      .set("month", month ? month.toString() : '')
    const url = this.apiURL + "?" + httpParams.toString()

    return this.http.get<any>(url)
  }
}
