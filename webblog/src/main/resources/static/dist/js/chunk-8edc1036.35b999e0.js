(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8edc1036"],{5326:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4 col-md-offset-4 floating-box"},[a("Message",{attrs:{show:t.msgShow,type:t.msgType,msg:t.msg},on:{"update:show":function(s){t.msgShow=s}}}),a("div",{staticClass:"panel panel-default"},[t._m(0),a("div",{staticClass:"panel-body",attrs:{"data-validator-form":""}},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label"},[t._v("用户名")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.username,expression:"username",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{title:"用户名"},expression:"{ title: '用户名' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"请填写用户名"},domProps:{value:t.username},on:{input:function(s){s.target.composing||(t.username=s.target.value.trim())},blur:function(s){return t.$forceUpdate()}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label"},[t._v("密码")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.password,expression:"password",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{title:"密码"},expression:"{ title: '密码' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{id:"password",type:"password",placeholder:"请填写密码"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value.trim())},blur:function(s){return t.$forceUpdate()}}})]),a("br"),a("button",{staticClass:"btn btn-lg btn-success btn-block",attrs:{type:"submit"},on:{click:t.login}},[a("i",{staticClass:"fa fa-btn fa-sign-in"}),t._v(" 登录\n        ")])])])],1)])},r=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"panel-heading"},[a("h3",{staticClass:"panel-title"},[t._v("请登录")])])}],i=(a("7f7f"),a("8d85")),n={name:"Login",data:function(){return{username:"",password:"",msg:"",msgType:"",msgShow:!1}},methods:{login:function(t){var s=this;setTimeout((function(){var a="submit"===t.target.type?t.target:t.target.parentElement;a.canSubmit&&s.submit()}))},submit:function(){var t=this,s={name:this.username,password:this.password},a=this.$store.state.user;a?a.username!=s.name||a.password!=s.password?this.showMsg("用户名或密码不正确"):this.$store.dispatch("login"):Object(i["a"])(this.username,this.password).then((function(s){var a={username:s.data.username,password:s.data.password,avatar:s.data.avatar};t.$store.dispatch("login",a),t.showMsg("登录成功",type="success")})).catch((function(s){t.showMsg("不存在该用户")}))},showMsg:function(t){var s=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";this.msg=t,this.msgType=a,this.msgShow=!1,this.$nextTick((function(){s.msgShow=!0}))}}},o=n,l=a("2877"),c=Object(l["a"])(o,e,r,!1,null,"38533008",null);s["default"]=c.exports},"7f7f":function(t,s,a){var e=a("86cc").f,r=Function.prototype,i=/^\s*function ([^ (]*)/,n="name";n in r||a("9e1e")&&e(r,n,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-8edc1036.35b999e0.js.map