//searh debounce
export function debouncing(searchInput, searchBtn, render) {
   

   
    const data = JSON.parse(localStorage.getItem("tasks")) || [];
    
     function debounce(fun,delay){
        let timerid
        return function(...arg){
            timerid = setTimeout(()=>{
                fun(...arg)
            },delay)
        }
     }
    
     function main(value){
        let serchedQ  = data.filter(ele=> ele.task.toLowerCase().includes(value.toLowerCase()) )
        render(serchedQ)
     } 
     
     let  linking = debounce(main,400)


    searchInput.addEventListener("keyup", e => {
      let query = e.target.value
      linking(query)
  });
}
