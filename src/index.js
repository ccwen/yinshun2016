const ReactDOM=require("react-dom");
const Accelon=require("accelon2016");
const {ptr,def,note,link}=require("accelon2016/decorators");
require("./localestring");
const Main = Accelon(
  {corpus:"yinshun",appname:"yinshun",
    address:"59p9.0301",
    tabs:["source","search","dictionary","config","toc"],
    decorators:{ptr,def,note,link},
    topMargin:"1.5em",
    leftFlex:3,rightFlex:2
  }
);

ReactDOM.render(Main,document.getElementById("root"));