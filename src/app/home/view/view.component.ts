import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public id : any;
  public callInfo : any;
  constructor(private route: ActivatedRoute,private apiService : ApiService) { }

  ngOnInit(): void {
    this.setId()
    this.getCallById()
  }
  setId(){
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')
    })
  }
  getCallById(){
    this.apiService.sendRequest(environment.baseURL + environment.callById+this.id , "get").subscribe(
      (response : any) =>
      {
        this.callInfo = response
      }
    )
  }

}
