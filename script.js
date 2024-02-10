
   const rows=16;
   const columns=16;
   const gridContainer=document.querySelector(".container");
   for (let i=0; i<rows; i++){  
      for(let j=0;j<columns; j++){
         const gridItem=document.createElement("div");
         gridItem.className="grid-item";
         gridItem.textContent=""
         gridContainer.appendChild(gridItem);
      }
   }




