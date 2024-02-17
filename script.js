

   const gridContainer=document.querySelector(".container");
  
   function createGrid(size){
      for (let i=0; i<size; i++){  
         for(let j=0;j<size; j++){
            const gridItem=document.createElement("div");
            gridItem.className="grid-item";
            gridItem.textContent=""
            gridContainer.appendChild(gridItem);  
            gridItem.addEventListener("mousemove",()=>{
               gridItem.style.backgroundColor="red";
               //event.currentTarget.className("red");
            });


         }

         
      }

      
   }


   /*const gridCells=document.querySelectorAll(".grid-item");
   gridCells.forEach(gridItem =>{
      gridItem.addEventListener("mousemove",()=>{
         gridItem.style.backgroundColor="red";
         //event.currentTarget.className("red");
      });
   });*/
   

  
   function generateRandomColor() {
      let h = Math.floor(Math.random() * 361);
      let s = Math.floor(Math.random() * 101);
      return `hsl(${h},${s}%)`;
      
    }
   
   function changeGrid(){
      let gridSize=+prompt("enter a new grid number between 1 to 100");
      if(gridSize<=0 || gridSize>100 || isNaN(gridSize)){
         alert("try a number between 1 to 100");
         
      }
      else {
         clearGrid();
         createGrid(gridSize);
         
      }
   }
   const btnGrid=document.querySelector(".btn");
   btnGrid.addEventListener("click", changeGrid);

   function clearGrid(){
      while(gridContainer.firstChild){
         gridContainer.firstChild.remove();
      }  
   }
   createGrid(16);
   
 

 






