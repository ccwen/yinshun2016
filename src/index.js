const ReactDOM=require("react-dom");
const Accelon=require("accelon2016");
require("./localestring");
const Main = Accelon(
  {corpus:"yinshun",appname:"yinshun",
    address:"59p9.0301",
    tabs:["source","search","dictionary","config","toc"],
    topMargin:"1.4em",
    leftFlex:3,rightFlex:2
  }
);

ReactDOM.render(Main,document.getElementById("root"));