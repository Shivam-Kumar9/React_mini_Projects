
const dummyApiResponse = {
    showLightAndDarkMode : true,
    showTicTacToe : true,
    showAccordian : true,
    showTreeView : true,
    showTabs : false,
    showRandomColor : true
}

function  featureFlagDataServiceCall(){
    return new Promise((resolve,reject)=>{
      if(dummyApiResponse) setTimeout(()=>{resolve(dummyApiResponse)},1000)
      else reject('Some error occured! please try again later.')
    })
}


export default featureFlagDataServiceCall