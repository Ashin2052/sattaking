import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'colorModify'
})
export class ColorModifyPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {}

  transform(text: any): any {
  let  lxt=[]
     lxt=text.split("-")
    let text1;
    
    if(lxt[0]=="Goa"){  

        var str = text.replace(text, `<span style='background: yellow;font-style:strong'>${text}</span>`);
        text1 = str;
    
      }
      
 if(lxt[0]=="GHAZIABAD"){  

  var str = text.replace(text, `<span style='background: yellow;font-style:strong'>${text}</span>`);
  text1 = str;

}

 if(lxt[0]=="FARIDABAD"){  

  var str = text.replace(text, `<span style='background: yellow;font-style:strong'>${text}</span>`);
  text1 = str;

}
  return this.sanitized.bypassSecurityTrustHtml(text1);
}   

}

