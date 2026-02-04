import React, { useContext } from "react";

import LightDarkMode from "../light_dark_mode";
import TabTest from "../custom_tabs/tab_test";
import Accordian from "../accordian";
import TreeView from "../tree-view";
import LoadMoreData from '../load_more_data'
import ImageSlider from '../image-slider'
import QRcode from '../qr_code_generator/QRcode'
import ScrollIndicator from '../scroll_indicator'
import StarRating from '../star_rating'
import TicTactToe from "../tic_tact_toe";
import { FeatureFlagContext } from "./context/flag.context";
import Menu from "../tree-view/data";
import RandomColor from "../random_color";
import Modal_test from "../modal/modal_test";
import GithubProfileFinder from "../github_profile_finder";
import SearchAutoComplete from "../search_autoComplete";
function FeatureFlags() {
  /*
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
  */
  const { loading, enabledFlags } = useContext(FeatureFlagContext);

  
  const ComponentsToRender = [
        {
      key: "showAccordian",
      component: <Accordian />,
    },
        {
      key: "showRandomColor",
      component: <RandomColor />,
    },
    { key : "showRatingStar",
      component : <StarRating/>
    },
        { key : "showImageSlider",
      component :  <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"}/>
    },
    {   key :'showLoadMoreData',
        component: <LoadMoreData/> 
    },
    {
      key: "showTreeView",
      component: <TreeView menu={Menu} />,
    },
        {
      key: "showQRcodeGen",
      component:  <QRcode/>,
    },
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
        {
      key: "showScrollIndicator",
      component: <ScrollIndicator url={`https://dummyjson.com/products?limit=200`}/> 
    },
        {
      key: "showTabs",
      component:  <TabTest /> 
    },
        {
      key: "showCustomModal",
      component: <Modal_test/>
    },
        {
      key: "showGithubProfileFinder",
      component:<GithubProfileFinder/>
    },
    {
      key: "showSearchAutoCompelete",
      component: <SearchAutoComplete/>
    },
    {
      key: "showTicTacToe",
      component: <TicTactToe />,
    },

     

  ];

  if (loading) return <h1>Loading Feature Flags...</h1>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {ComponentsToRender.map((item, i) =>
        enabledFlags[item.key] ? item.component : null,
      )}
    </div>
  );
}

export default FeatureFlags;
