import { Injectable } from '@angular/core';
import { apiServer } from '../components/apiServer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private ApiUrl: string = apiServer.serverUrl;

  constructor(private http: HttpClient) {}

  getProducto() {
    return this.http.get<any>(`${this.ApiUrl}`);
  }
}