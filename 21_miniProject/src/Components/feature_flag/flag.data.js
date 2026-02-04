
const dummyApiResponse = {
    showAccordian : true,
    showRandomColor : true,
    showRatingStar : true, //1
    showImageSlider : true, //2
    showLoadMoreData : true, //3
    showTreeView : true,
    showQRcodeGen : true, //4
    showLightAndDarkMode : true,
    showScrollIndicator : true, //5
    showTabs : false,
    showCustomModal : true, //6
    showGithubProfileFinder : true,//7
    showSearchAutoCompelete : true,//8
    showTicTacToe : true,
}
//✅
function  featureFlagDataServiceCall(){
    return new Promise((resolve,reject)=>{
      if(dummyApiResponse) setTimeout(()=>{resolve(dummyApiResponse)},1000)
      else reject('Some error occured! please try again later.')
    })
}


export default featureFlagDataServiceCall