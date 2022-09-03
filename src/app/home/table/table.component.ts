import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data : any;
  @Input() limit : any;
  @Input() page : any;
  @Input() totalNo : any;
  @Output() changePage = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  pageChange(event : number){
    this.changePage.emit(event)
  }

}
