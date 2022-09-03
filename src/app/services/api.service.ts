import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from "@angular/common/http";
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient,
    private storageService: StorageService) { }

  sendRequest(url: any, type: string, formData: any = {}, queryParams?: any) {
    let headers;
    if (this.storageService.getStorage("access_token")) {
      headers = new HttpHeaders();
      headers = headers.set('Authorization', `Bearer ${this.storageService.getStorage("access_token")}`,);
    }
    const params = this.transformFormDataToParams(formData || {});
    switch (type.toLowerCase()) {
      case 'post':
        return this.httpClient.post(url, formData, { params: queryParams, headers : headers })
      case 'put':
        return this.httpClient.put(url, formData,{headers : headers});
      case 'patch':
        return this.httpClient.patch(url, formData,{headers : headers});
      case 'delete':
        return this.httpClient.delete(url, { params: params, headers : headers });
      case 'upload_file':
        return this.httpClient.post(url, formData)
      default:
        return this.httpClient.get(url, { params: params,headers : headers });
    }
  }
  public transformFormDataToParams(formData: any) {
    let params = new HttpParams();
    if (Object.keys(formData).length) {
      Object.keys(formData).forEach((key) => {
        if (Array.isArray(formData[key])) {
          formData[key].forEach((k: any) => {
            params = params.append(key + '[]', k);
          });
        } else {
          params = params.append(key, formData[key]);
        }
      });
    }
    // console.log(params);

    return params;
  }
}
