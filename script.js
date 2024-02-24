

   const gridContainer=document.querySelector(".container");
   
  
   function createGrid(size){
      const square= size**2;
      const gridSize= `${100 / size}%`;
      //const containerStyle= getComputedStyle(gridContainer);
      //const containerWidth= containerStyle.width;
      //const containerHeight= containerStyle.height;
      //const gridWidth= +containerWidth.split('px')[0] / size;
      //const gridHeight= +containerHeight.split('px')[0] / size;
      for (let i=0; i<square; i++){  
      
            const gridItem=document.createElement("div");
            gridItem.className="grid-item";
            gridItem.textContent="";
            gridContainer.appendChild(gridItem);
            gridItem.style.width=gridSize;
            gridItem.style.height=gridSize;
            //gridItem.style.width=`${gridWidth}px`;
            //gridItem.style.height=`${gridWidth}px`;
               
         
            gridItem.addEventListener("mouseover",()=>{
            let brightness = gridItem.dataset.brightness || 100;
            gridItem.style.filter = `brightness(${brightness}%)`;
            gridItem.dataset.brightness = Math.max(brightness - 10, 0);
            });  
            /*gridItem.addEventListener("mouseover",()=>{
               gridItem.style.backgroundColor=generateRandomColor();
               //event.currentTarget.className("red");
            });*/
              
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
      /*let currentBrightness = gridItem.dataset.brightness;
    currentBrightness = parseInt(currentBrightness) - 10;

    if (currentBrightness >= 0) {
        gridItem.style.backgroundColor = `hsl(240, 100%,${currentBrightness}%)`
        gridItem.dataset.brightness = currentBrightness;
    }*/
      let brightness = gridItem.dataset.brightness || 100;
      gridItem.style.filter = `brightness(${brightness}%)`;
      gridItem.dataset.brightness = Math.max(brightness - 10, 0);
     
      //return 'hsla(' + (Math.floor(Math.random()*360)) + ', 100%, 80%, 1)';
      //let h = Math.floor(Math.random() * 360);
      //let s = Math.floor(Math.random() * 100);
      //return 'hsl(${h},${s}%,${luminosity}%)';
      
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
 

 






