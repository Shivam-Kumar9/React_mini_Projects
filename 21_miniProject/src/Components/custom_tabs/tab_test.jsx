import Tabs from "./tab"

function Random(){
    return <h1>Sab badiya ?merry x masts</h1>
}

export default function TabTest(){
    const tab = [
        { label : 'Tab 1',
          content : <div>kya hal </div>
        },
        { label : 'Tab 2',
          content : <div>bhai log</div>  
        },
        { label : 'Tab 3',
          content :  <Random/> 
        }
    ]
   function handleChange(currentIndex){
console.log(currentIndex);
   }

   return <Tabs tab_content={tab}  onchange={handleChange} /> 
}