(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-711b2eab"],{"7f7f":function(t,e,s){var n=s("86cc").f,o=Function.prototype,u=/^\s*function ([^ (]*)/,a="name";a in o||s("9e1e")&&n(o,a,{configurable:!0,get:function(){try{return(""+this).match(u)[1]}catch(t){return""}}})},bb51:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Message",{attrs:{show:t.msgShow,type:t.msgType,msg:t.msg},on:{"update:show":function(e){t.msgShow=e}}})],1)},o=[],u=(s("7f7f"),{name:"Home",data:function(){return{msg:"",msgType:"",msgShow:!1}},computed:{auth:function(){return this.$store.state.auth}},beforeRouteEnter:function(t,e,s){var n=e.name;s((function(t){if(t.$store.state.auth)switch(n){case"Register":t.showMsg("注册成功");break;case"Login":t.showMsg("登录成功");break}else logout&&t.showMsg("操作成功")}))},methods:{showMsg:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";this.msg=t,this.msgType=e,this.msgShow=!0}},watch:{auth:function(t){t||this.showMsg("操作成功")}}}),a=u,c=s("2877"),i=Object(c["a"])(a,n,o,!1,null,"1f61f58e",null);e["default"]=i.exports}}]);
//# sourceMappingURL=chunk-711b2eab.1ae95aa2.js.map