let boxes=document.querySelectorAll(".label")
let leftC=document.querySelector(".left")
let rightC=document.querySelector(".right")
let start=null
boxes.forEach((box)=>{
    box.addEventListener("dragstart",(e)=>{ //drag start will be one becouse intially u started from here
     let start=e.target   
     rightC.addEventListener("dragover",(e)=>{
        e.preventDefault() 
    }); 
    rightC.addEventListener("drop",(e)=>{    
        rightC.appendChild(start) //put the start element in the right box
         start=null;
            })

            leftC.addEventListener("dragover",(e)=>{ //from right box we put the selcted elemnt in the left box
                e.preventDefault()
               
            }); 
            leftC.addEventListener("drop",(e)=>{    
                 leftC.appendChild(start)
                 start=null;
                    })
    })
    
  
})


