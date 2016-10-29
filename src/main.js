const React=require("react");
const E=React.createElement;
const PT=React.PropTypes;
const CorpusTabMode=require("ksana2015-parallel").CorpusTabMode;
require("./localestring");
const maincomponent = React.createClass({
  getInitialState:function() {
    return {};
  },
  componentDidMount:function(){
  }
  ,render: function() {
    return E(CorpusTabMode,
      {corpus:"yinshun",appname:"yinshun",
      nav:["article","toc"],
      tabs:["toc","search","dictionary","source","config"],
      leftFlex:3,rightFlex:2} 
    );
  }
});
module.exports=maincomponent;