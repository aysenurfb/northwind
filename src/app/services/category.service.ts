import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //apiye bağlanmak için gerekli http kodunu içeren kütüphane
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  apiUrl = 'https://localhost:7136/api/categories/getall';

  constructor(private httpClient: HttpClient) { }

  getCategories():Observable<ListResponseModel<Category>>{
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl);
  }
}

