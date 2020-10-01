import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  url = 'http://localhost:3000/user'

  constructor(private http: HttpClient) { }

  getListOfData() {
    return this.http.get(this.url);
  }

  addData(data) {
    // console.warn(data)
    return this.http.post(this.url, data);
  }

  deleteData(id) {
    return this.http.delete(`${this.url}/${id}`)
  }

  getCurrentRest(id) {
    return this.http.get(`${this.url}/${id}`)
  }
  
  updateRest(id, data) {
    return this.http.put(`${this.url}/${id}`, data)
  }

}
