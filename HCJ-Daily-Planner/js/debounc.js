//searh debounce
export function debouncing(searchInput, render) {
   

   
    const data = JSON.parse(localStorage.getItem("tasks")) || [];
    
     function debounce(fun,delay){
        let timerid
        return function( arg){
            if(timerid) clearTimeout(timerid)
            timerid = setTimeout(()=>{
                fun(arg)
                console.log(Date.now())
            },delay)
        }
     }
    
     function main(value){
        let serchedQ  = data.filter(ele=> ele.task.toLowerCase().includes(value.toLowerCase()) )
        render(serchedQ)
     } 
     
     let  linking = debounce(main,500)


    searchInput.addEventListener("keyup", e => {
      let query = e.target.value
      linking(query)
  });
}
