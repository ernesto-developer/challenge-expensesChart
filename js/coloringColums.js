export function colorColumn (column){

    const date = new Date();
    const actualDay = date.getDay();
    const columnDay = column.getAttribute("name");


    
   if(columnDay === 'sun' && actualDay === 0){
    column.style.backgroundColor = "#458FCC";
   }else 
   if(columnDay ==='mon' && actualDay === 1){
    column.style.backgroundColor = "#458FCC";
   }else 
   if(columnDay ==='tue' && actualDay === 2){
    column.style.backgroundColor = "#458FCC";
   }else 
   if(columnDay ==='wed' && actualDay === 3){
    column.style.backgroundColor = "#458FCC";
   }else 
   if(columnDay ==='thu' && actualDay === 4){
    column.style.backgroundColor = "#458FCC";
   }else 
   if(columnDay ==='fri' && actualDay === 5){
    column.style.backgroundColor = "#458FCC";
   }else 
   if(columnDay ==='sat' && actualDay === 6){
    column.style.backgroundColor = "#458FCC";
   }
   
}