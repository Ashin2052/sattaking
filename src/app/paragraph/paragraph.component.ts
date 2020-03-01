import { Component, OnInit, ViewChild } from '@angular/core';
import { paragraphServicesService } from '../services/paragraph-services/paragraph-service.service';
import { ToastrService,ToastContainerDirective } from 'ngx-toastr';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {
p:number=1;
  paragraphArray=[]
  editValue;
  @ViewChild(ToastContainerDirective, {static: false}) toastContainer: ToastContainerDirective;
  constructor(private paragraphService:paragraphServicesService,private toastr:ToastrService ) { }

  ngOnInit() {
    this.getParagraph()
  }

  getParagraph()
  {
    this.paragraphService.getAllparagraph().subscribe((response:any)=>
    {
      this.paragraphArray=response;
    })
  }

  receivedData(newData) {
    let index = this.paragraphArray.findIndex(x => x._id == newData._id);
    if (index == -1) {
      console.log(newData,"newData")
      this.paragraphArray.push(newData);
    } else {
      this.paragraphArray[index] = newData;
    }
  
  }
  delete(list, i) {
    if (window.confirm("Do yo reallly want to delete??")) {

this.paragraphService.deleteparagraph(list._id).subscribe((response:any)=>
{
  this.toastr.success("Paragraph deleted successfully")
  this.paragraphArray.splice(i,1)
},err=>
{
  this.toastr.error("Paragraph deletion unsuccessful")

})
    }

  }

  update(list, i) {
    this.editValue = {...list};
  }
  addPlace() {

  }

}
