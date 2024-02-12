

   const gridContainer=document.querySelector(".container");
   createGrid(16);
   function createGrid(size){
      for (let i=0; i<size; i++){  
         for(let j=0;j<size; j++){
            const gridItem=document.createElement("div");
            gridItem.className="grid-item";
            gridItem.textContent=""
            gridContainer.appendChild(gridItem);  
         }
      }
      
   }
   
   const gridCells=document.querySelectorAll(".grid-item");
   gridCells.forEach(gridItem =>{
      gridItem.addEventListener("mousemove",()=>{
         gridItem.style.backgroundColor="yellow";
         //event.currentTarget.className("red");
      });
   });
   function changeColor(){
      

   }
   
   function changeGrid(){
      let gridSize=+prompt("enter a new grid number between 1 to 100");
      if(gridSize==0 || gridSize>=100 || isNaN(gridSize)){
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
   


   /*gridCells.forEach(gridItem =>{
      gridItem.addEventListener("mouseout",()=>{
         gridItem.style.backgroundColor="green";
         //event.currentTarget.className("red");
      });
   });*/
 
 

 






