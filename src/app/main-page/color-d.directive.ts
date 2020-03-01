import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorD]'
})
export class ColorDDirective {

  constructor(private elementRef :ElementRef){

  }

  ngOnInit(){
   
  }
  ngAfterViewInit()	
  {
    // console.log(  this.elementRef.nativeElement.innerHTML,"  this.elementRef.nativeElement.innerHTML")
    if(  this.elementRef.nativeElement.innerHTML=="GHAZIABAD" ||  
    this.elementRef.nativeElement.innerHTML=="FARIDABAD" ||
    this.elementRef.nativeElement.innerHTML=="DESAWAR" || this.elementRef.nativeElement.innerHTML=="Goa"  )
    {
      console.log(  "this.elementRef.nativeElement.innerHTML","  this.elementRef.nativeElement.innerHTML")

      this.elementRef.nativeElement.style.backgroundColor = "yellow";

    }
  }
}
