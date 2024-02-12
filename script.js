
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
   const gridCells=document.querySelectorAll(".grid-item");
 
   gridCells.forEach(gridItem =>{
      gridItem.addEventListener("mousemove",()=>{
         gridItem.style.backgroundColor="yellow";
         //event.currentTarget.className("red");
      });
   });


   /*gridCells.forEach(gridItem =>{
      gridItem.addEventListener("mouseout",()=>{
         gridItem.style.backgroundColor="green";
         //event.currentTarget.className("red");
      });
   });*/
 
 

 






