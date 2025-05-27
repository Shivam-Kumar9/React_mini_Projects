

export function throttling(topbtn){


    window.addEventListener('scroll',()=>{
    const scrollPos = window.scrollY
    // console.log(scrollPos)

    scrollPos>100 ?
      topbtn.classList.add('visible') 
      : topbtn.classList.remove('visible')
       mainhandle( window.scrollY)
}) 
 
let mainhandle =   throttle(moveTop,1000)

function throttle(fun,delay){
   let prev = 0
  return (...arg)=>{
    let now =Date.now()
    if((now-prev) >= delay){
      fun(...arg)
      prev = now
    }
  }
}

function moveTop(scrolling){
  
} 
 topbtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
}
