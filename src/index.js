const ReactDOM=require("react-dom");
const Accelon=require("accelon2016");
const {ptr,def,note,link}=require("accelon2016/decorators");
require("./localestring");
const stockcorpora=[
{label:"印順法師佛學著作集",name:"yinshun"},
{label:"大正新修大藏經",name:"taisho"}
]
const Main = Accelon(
  {corpus:"yinshun",appname:"yinshun",
    address:"59p9.0301",
    tabs:["source","search","dictionary","config","toc"],
    decorators:{ptr,def,note,link},
    stockcorpora,
    topMargin:"1.6em",
    leftFlex:5,rightFlex:3
  }
);

ReactDOM.render(Main,document.getElementById("root"));