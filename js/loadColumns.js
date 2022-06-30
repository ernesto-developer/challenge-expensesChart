
 import { colorColumn } from "./coloringColums.js";
 import { columnAnimations, dynamicAmount } from "./columnAnimation.js";

export function test (data){

    const columns = document.querySelectorAll(".expenses__body__chart__value--column");

    columns.forEach(column => {
        
        const day = column.getAttribute("name");
        colorColumn(column);
        columnAnimations(column,data);
        
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            if(day === element.day){
                column.style.height = `${element.amount * 2}px`;
            }
            
        }
        
        
    });
    dynamicAmount(data);
    

}


