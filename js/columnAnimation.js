export function columnAnimations(column){

   const completeColumn = column.parentNode;
        completeColumn.addEventListener('mouseenter', ()=> {
            column.style.opacity = "0.5";
            completeColumn.firstElementChild.style.display = "block";
        });
        
        completeColumn.addEventListener('mouseleave', ()=> {
            column.style.opacity = "1";
            completeColumn.firstElementChild.style.display = "none";
        });
    

}

export function dynamicAmount(data){
    const amounts = document.querySelectorAll('.expenses__body__chart__value--amount');
    amounts.forEach(( amount, i ) => {
        amount.innerHTML = data[i].amount;
    });
   
}