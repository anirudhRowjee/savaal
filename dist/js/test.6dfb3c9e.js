(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["test"],{"0456":function(t,e,n){"use strict";var r=n("b36b"),i=n.n(r);i.a},"057f":function(t,e,n){var r=n("fc6a"),i=n("241c").f,s={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return i(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==s.call(t)?u(t):i(r(t))}},"0cca":function(t,e,n){"use strict";var r=n("c276"),i=n.n(r);i.a},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),s=n("17c2"),o=n("9112");for(var u in i){var a=r[u],c=a&&a.prototype;if(c&&c.forEach!==s)try{o(c,"forEach",s)}catch(f){c.forEach=s}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("a640"),s=n("ae40"),o=i("forEach"),u=s("forEach");t.exports=o&&u?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"1b33":function(t,e,n){"use strict";var r=n("bdbe"),i=n.n(r);i.a},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),s=n("2d00"),o=i("species");t.exports=function(t){return s>=51||!r((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},4160:function(t,e,n){"use strict";var r=n("23e7"),i=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"4b67":function(t,e,n){},"4de4":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").filter,s=n("1dde"),o=n("ae40"),u=s("filter"),a=o("filter");r({target:"Array",proto:!0,forced:!u||!a},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),i=n("5899"),s="["+i+"]",o=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),a=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(u,"")),n}};t.exports={start:a(1),end:a(2),trim:a(3)}},"65f0":function(t,e,n){var r=n("861d"),i=n("e8b5"),s=n("b622"),o=s("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[o],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},7156:function(t,e,n){var r=n("861d"),i=n("d2bb");t.exports=function(t,e,n){var s,o;return i&&"function"==typeof(s=e.constructor)&&s!==n&&r(o=s.prototype)&&o!==n.prototype&&i(t,o),t}},"746f":function(t,e,n){var r=n("428f"),i=n("5135"),s=n("e538"),o=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||o(e,t,{value:s.f(t)})}},"78c1":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{attrs:{id:"testcontainer"}},[n("br"),n("div",{staticClass:"container"},[n("test_topbar",{attrs:{startFlag:t.startTest,time:t.getTestTime},on:{"update:startFlag":function(e){t.startTest=e},"update:start-flag":function(e){t.startTest=e},complete:t.handleEvaluate,"evaluate-test":t.handleEvaluate,"exit-test":t.handleExit}})],1),n("br"),n("b-row",{staticClass:"question_row",attrs:{fluid:""}},[n("b-col",{attrs:{sm:"",id:"questionbox_parent"}},[n("test_questionbox",{attrs:{currentQuestion:t.currentQuestion},on:{"update:currentQuestion":function(e){t.currentQuestion=e},"update:current-question":function(e){t.currentQuestion=e},"change-question":t.setQuestion,"update-question":t.handleUpdateQuestion}})],1),n("br"),n("b-col",{attrs:{sm:"",id:"questionlist_parent"}},[n("test_questionlist",{attrs:{questions:t.questions,currentQuestion:t.currentQuestion},on:{"update:questions":function(e){t.questions=e},"change-question":t.setQuestion,"update:currentQuestion":function(e){t.currentQuestion=e},"update:current-question":function(e){t.currentQuestion=e},"evaluate-test":t.handleEvaluate}})],1)],1)],1)},i=[],s=(n("4de4"),n("a9e3"),n("5530")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-card",{attrs:{"no-body":"",id:"topbar_container"}},[n("b-row",[n("b-col",{staticClass:"my-auto",attrs:{cols:"3",id:"topbar_exit"}},[n("b-btn",{attrs:{variant:"outline-danger"},on:{click:t.emitExitFromTest}},[t._v(" Exit ")])],1),n("b-col",{staticClass:"my-auto",attrs:{cols:"6",id:"timerbox"}},[n("b-card",[n("vue-countdown",{attrs:{seconds:t.time,start:t.startFlag},on:{"time-expire":t.handleExpire}})],1)],1),n("b-col",{staticClass:"my-auto",attrs:{cols:"3",id:"topbar_submit"}},[n("b-btn",{attrs:{variant:"outline-success"},on:{click:t.emitEvaluateTest}},[t._v(" Done ")])],1)],1)],1)],1)},u=[],a=n("d83c"),c=n.n(a),f={name:"test_topbar",props:["startFlag","time"],components:{"vue-countdown":c.a},data:function(){return{started:!1}},methods:{toggleTimer:function(){this.started=!this.started},handleExpire:function(){alert("Complete")},emitEvaluateTest:function(){this.$emit("evaluate-test")},emitExitFromTest:function(){this.$emit("exit-test")}}},l=f,d=(n("0456"),n("2877")),h=Object(d["a"])(l,o,u,!1,null,null,null),p=h.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"questionbox_container"},[n("b-card",{attrs:{title:"Question"}},[t._v(" "+t._s(t.currentQuestion.id)+" "),n("b-card-text",[t._v(" Choose The Correct Option ")]),n("b-card-text",[n("b-form-radio-group",{attrs:{buttons:"","button-variant":"outline-danger",size:"lg",options:t.options},model:{value:t.currentQuestion.selectedOption,callback:function(e){t.$set(t.currentQuestion,"selectedOption",e)},expression:"currentQuestion.selectedOption"}})],1),n("b-btn-group",[n("b-btn",{attrs:{variant:"outline-primary"},on:{click:function(e){return t.updateQuestion("p")}}},[n("font-awesome-icon",{attrs:{icon:"arrow-left"}})],1),t.isQuestionChecked()?n("b-btn",{attrs:{variant:"outline-primary"},on:{click:function(e){return t.clearChoices()}}},[t._v(" Clear ")]):t._e(),n("b-btn",{attrs:{variant:t.evalButtonStatus()},on:{click:function(e){return t.markForEvaluation()}}},[t._v(" Mark For Evaluation ")]),n("b-btn",{attrs:{variant:"outline-primary"},on:{click:function(e){return t.updateQuestion("f")}}},[n("font-awesome-icon",{attrs:{icon:"arrow-right"}})],1)],1),n("br")],1)],1)},b=[],m={name:"test_questionbox",props:["currentQuestion"],data:function(){return{options:["A","B","C","D"]}},methods:{isQuestionChecked:function(){return"X"!=this.currentQuestion.selectedOption},evalButtonStatus:function(){return this.currentQuestion.eval?"primary":"outline-primary"},clearChoices:function(){this.currentQuestion.selectedOption="X"},markForEvaluation:function(){this.currentQuestion.eval=!this.currentQuestion.eval},updateQuestion:function(t){this.$emit("update-question",this.currentQuestion);var e=0;e="f"==t?this.currentQuestion.id+1:this.currentQuestion.id-1,this.$emit("change-question",e)}}},g=m,y=(n("1b33"),Object(d["a"])(g,v,b,!1,null,null,null)),_=y.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"questionlist_container"},[n("b-card",{attrs:{title:"Question Overview - "+t.currentQuestion.id}},[t.questions?n("b-card-text",{staticClass:"grid-container"},[t._l(t.questions,(function(e){return n("b-btn",{key:e.id,staticClass:"btn grid-item question_jumpbutton",attrs:{variant:t.getColorFromQuestion(e),"text-variant":"dark",pill:t.getActiveStatus(e),size:"sm",color:"black"},on:{click:function(n){return t.changeToQuestion(e.id)}}},[t._v(" "+t._s(e.id))])})),n("br")],2):t._e(),n("b-btn",{attrs:{variant:"outline-success"},on:{click:function(t){return this.$emit("evaluate-test")}}},[t._v(" Submit Test ")]),n("br")],1)],1)},E=[],O={name:"test_questionlist",data:function(){return{}},props:{questions:Array,currentQuestion:Object},methods:{changeToQuestion:function(t){this.$emit("update-question",this.currentQuestion.id),this.$emit("change-question",t)},getActiveStatus:function(t){return t.id==this.currentQuestion.id},getColorFromQuestion:function(t){return t.eval?"warning":"X"==t.selectedOption?"primary":t.selectedOption.charCodeAt(0)>=65&&t.selectedOption.charCodeAt(0)<=68?"success":void 0}},mounted:function(){}},T=O,x=(n("0cca"),Object(d["a"])(T,w,E,!1,null,null,null)),Q=x.exports,S=n("2f62"),L={name:"Test",components:{test_topbar:p,test_questionbox:_,test_questionlist:Q},data:function(){return{startTest:!1,questions:[],countQuestions:90,toggleTestVisibility:!1,time:180,currentQuestion:{id:"",selectedOption:"",eval:""},instartup:!1}},methods:Object(s["a"])(Object(s["a"])({},Object(S["c"])({setQuestions:"setQuestions",setTotalMarks:"setTotalMarks"})),{},{getTestQuestions:function(t){var e=1,n=[];while(e<t+1)n.push({id:e,selectedOption:"X",eval:!1}),e+=1;return console.log("genereated Questions"),n},getQuestionByNumber:function(t){var e=this.questions.filter((function(e){return e.id==t}))[0];return console.log(e),e},saveQuestion:function(t){console.log("saving ",t)},setQuestion:function(t){if(this.instartup){console.log("setting to ",t);var e=this.getQuestionByNumber(t);return console.log(e),this.currentQuestion=e,e}this.saveQuestion(this.currentQuestion.id),console.log("setting to ",t);var n=this.getQuestionByNumber(t);return console.log(n),this.currentQuestion=n,n},handleUpdateQuestion:function(t){console.log("updating question ",t),this.questions[t].selectedOption=this.currentQuestion.selectedOption,this.questions[t].eval=this.currentQuestion.eval},handleEvaluate:function(){console.log("EVALUATION PROCESS BEGINNING"),console.log("saving questions to state"),this.setQuestions(this.questions),console.log("reading questions from state"),console.log(this.getQuestions),this.$router.push("/correction")},handleExit:function(){var t=confirm("Do You Really Want to Exit?");1==t?(console.log("Exiting ..."),this.$router.push("/")):alert("get back!")},startTestLoop:function(){var t=confirm("Do You Want to Start the Test?");t?(this.toggleTestVisibility=!0,this.startTest=!0):(alert("Exiting.."),this.handleExit())}}),computed:Object(s["a"])({},Object(S["b"])({getTestTime:"getTestTime",getQuestionsCount:"getQuestionsCount",getMarkingScheme:"getMarkingScheme",getQuestions:"getQuestions"})),mounted:function(){this.countQuestions=this.getQuestionsCount,this.time=this.getTestTime,null==this.time||null==this.countQuestions?(alert("Please Create a Test First"),this.$router.push("/")):(this.questions=this.getTestQuestions(Number(this.countQuestions)),console.log(this.questions),this.startTestLoop(),this.instartup=!0,this.setQuestion(1),this.instartup=!1,this.setTotalMarks())}},C=L,j=(n("ae10"),Object(d["a"])(C,r,i,!1,null,null,null));e["default"]=j.exports},8418:function(t,e,n){"use strict";var r=n("c04e"),i=n("9bf2"),s=n("5c6c");t.exports=function(t,e,n){var o=r(e);o in t?i.f(t,o,s(0,n)):t[o]=n}},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),s=n("d066"),o=n("c430"),u=n("83ab"),a=n("4930"),c=n("fdbf"),f=n("d039"),l=n("5135"),d=n("e8b5"),h=n("861d"),p=n("825a"),v=n("7b0b"),b=n("fc6a"),m=n("c04e"),g=n("5c6c"),y=n("7c73"),_=n("df75"),w=n("241c"),E=n("057f"),O=n("7418"),T=n("06cf"),x=n("9bf2"),Q=n("d1e7"),S=n("9112"),L=n("6eeb"),C=n("5692"),j=n("f772"),k=n("d012"),A=n("90e3"),N=n("b622"),q=n("e538"),P=n("746f"),M=n("d44e"),I=n("69f3"),F=n("b727").forEach,V=j("hidden"),$="Symbol",D="prototype",R=N("toPrimitive"),U=I.set,B=I.getterFor($),G=Object[D],X=i.Symbol,H=s("JSON","stringify"),J=T.f,Y=x.f,z=E.f,W=Q.f,K=C("symbols"),Z=C("op-symbols"),tt=C("string-to-symbol-registry"),et=C("symbol-to-string-registry"),nt=C("wks"),rt=i.QObject,it=!rt||!rt[D]||!rt[D].findChild,st=u&&f((function(){return 7!=y(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=J(G,e);r&&delete G[e],Y(t,e,n),r&&t!==G&&Y(G,e,r)}:Y,ot=function(t,e){var n=K[t]=y(X[D]);return U(n,{type:$,tag:t,description:e}),u||(n.description=e),n},ut=c?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof X},at=function(t,e,n){t===G&&at(Z,e,n),p(t);var r=m(e,!0);return p(n),l(K,r)?(n.enumerable?(l(t,V)&&t[V][r]&&(t[V][r]=!1),n=y(n,{enumerable:g(0,!1)})):(l(t,V)||Y(t,V,g(1,{})),t[V][r]=!0),st(t,r,n)):Y(t,r,n)},ct=function(t,e){p(t);var n=b(e),r=_(n).concat(pt(n));return F(r,(function(e){u&&!lt.call(n,e)||at(t,e,n[e])})),t},ft=function(t,e){return void 0===e?y(t):ct(y(t),e)},lt=function(t){var e=m(t,!0),n=W.call(this,e);return!(this===G&&l(K,e)&&!l(Z,e))&&(!(n||!l(this,e)||!l(K,e)||l(this,V)&&this[V][e])||n)},dt=function(t,e){var n=b(t),r=m(e,!0);if(n!==G||!l(K,r)||l(Z,r)){var i=J(n,r);return!i||!l(K,r)||l(n,V)&&n[V][r]||(i.enumerable=!0),i}},ht=function(t){var e=z(b(t)),n=[];return F(e,(function(t){l(K,t)||l(k,t)||n.push(t)})),n},pt=function(t){var e=t===G,n=z(e?Z:b(t)),r=[];return F(n,(function(t){!l(K,t)||e&&!l(G,t)||r.push(K[t])})),r};if(a||(X=function(){if(this instanceof X)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=A(t),n=function(t){this===G&&n.call(Z,t),l(this,V)&&l(this[V],e)&&(this[V][e]=!1),st(this,e,g(1,t))};return u&&it&&st(G,e,{configurable:!0,set:n}),ot(e,t)},L(X[D],"toString",(function(){return B(this).tag})),L(X,"withoutSetter",(function(t){return ot(A(t),t)})),Q.f=lt,x.f=at,T.f=dt,w.f=E.f=ht,O.f=pt,q.f=function(t){return ot(N(t),t)},u&&(Y(X[D],"description",{configurable:!0,get:function(){return B(this).description}}),o||L(G,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:X}),F(_(nt),(function(t){P(t)})),r({target:$,stat:!0,forced:!a},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=X(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!ut(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),r({target:"Object",stat:!0,forced:!a,sham:!u},{create:ft,defineProperty:at,defineProperties:ct,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:ht,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:f((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(v(t))}}),H){var vt=!a||f((function(){var t=X();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}));r({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,n){var r,i=[t],s=1;while(arguments.length>s)i.push(arguments[s++]);if(r=e,(h(e)||void 0!==t)&&!ut(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ut(e))return e}),i[1]=e,H.apply(null,i)}})}X[D][R]||S(X[D],R,X[D].valueOf),M(X,$),k[V]=!0},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},a9e3:function(t,e,n){"use strict";var r=n("83ab"),i=n("da84"),s=n("94ca"),o=n("6eeb"),u=n("5135"),a=n("c6b6"),c=n("7156"),f=n("c04e"),l=n("d039"),d=n("7c73"),h=n("241c").f,p=n("06cf").f,v=n("9bf2").f,b=n("58a8").trim,m="Number",g=i[m],y=g.prototype,_=a(d(y))==m,w=function(t){var e,n,r,i,s,o,u,a,c=f(t,!1);if("string"==typeof c&&c.length>2)if(c=b(c),e=c.charCodeAt(0),43===e||45===e){if(n=c.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+c}for(s=c.slice(2),o=s.length,u=0;u<o;u++)if(a=s.charCodeAt(u),a<48||a>i)return NaN;return parseInt(s,r)}return+c};if(s(m,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var E,O=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof O&&(_?l((function(){y.valueOf.call(n)})):a(n)!=m)?c(new g(w(e)),n,O):w(e)},T=r?h(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;T.length>x;x++)u(g,E=T[x])&&!u(O,E)&&v(O,E,p(g,E));O.prototype=y,y.constructor=O,o(i,m,O)}},ae10:function(t,e,n){"use strict";var r=n("4b67"),i=n.n(r);i.a},ae40:function(t,e,n){var r=n("83ab"),i=n("d039"),s=n("5135"),o=Object.defineProperty,u={},a=function(t){throw t};t.exports=function(t,e){if(s(u,t))return u[t];e||(e={});var n=[][t],c=!!s(e,"ACCESSORS")&&e.ACCESSORS,f=s(e,0)?e[0]:a,l=s(e,1)?e[1]:void 0;return u[t]=!!n&&!i((function(){if(c&&!r)return!0;var t={length:-1};c?o(t,1,{enumerable:!0,get:a}):t[1]=1,n.call(t,f,l)}))}},b36b:function(t,e,n){},b64b:function(t,e,n){var r=n("23e7"),i=n("7b0b"),s=n("df75"),o=n("d039"),u=o((function(){s(1)}));r({target:"Object",stat:!0,forced:u},{keys:function(t){return s(i(t))}})},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),s=n("7b0b"),o=n("50c4"),u=n("65f0"),a=[].push,c=function(t){var e=1==t,n=2==t,c=3==t,f=4==t,l=6==t,d=5==t||l;return function(h,p,v,b){for(var m,g,y=s(h),_=i(y),w=r(p,v,3),E=o(_.length),O=0,T=b||u,x=e?T(h,E):n?T(h,0):void 0;E>O;O++)if((d||O in _)&&(m=_[O],g=w(m,O,y),t))if(e)x[O]=g;else if(g)switch(t){case 3:return!0;case 5:return m;case 6:return O;case 2:a.call(x,m)}else if(f)return!1;return l?-1:c||f?f:x}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},bdbe:function(t,e,n){},c276:function(t,e,n){},d83c:function(t,e,n){(function(e,n){t.exports=n()})(0,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),i=n(5),s=n(1),o=null,u=null,a=null,c=s(r["a"],i["a"],o,u,a);c.options.__file="src/vue-countdown.vue",c.esModule&&Object.keys(c.esModule).some((function(t){return"default"!==t&&"__"!==t.substr(0,2)}))&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] vue-countdown.vue: functional components are not supported with templates, they should use render functions."),e["default"]=c.exports},function(t,e){t.exports=function(t,e,n,r,i){var s,o=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(s=t,o=t.default);var a,c="function"===typeof o?o.options:o;if(e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),r&&(c._scopeId=r),i?(a=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=a):n&&(a=n),a){var f=c.functional,l=f?c.render:c.beforeCreate;f?c.render=function(t,e){return a.call(e),l(t,e)}:c.beforeCreate=l?[].concat(l,a):[a]}return{esModule:s,exports:o,options:c}}},function(t,e,n){"use strict";var r=n(3),i=n.n(r);e["a"]={props:{seconds:Number,countdown:Boolean,message:String,date:String,units:Array,start:{type:Boolean,default:!0}},data:function(){return{timer:null,time:"",label:this.message?this.message:"Time's up!",timerUnits:this.units?this.units:["hours","minutes","seconds"],timerOptions:{}}},computed:{parsedDate:function(){return!!this.date&&Date.parse(this.date)}},created:function(){this.timer=new i.a;var t=this.parsedDate,e=Date.now(),n=this.seconds;if(this.timerOptions={countdown:!0},!t&&this.date)throw new Error("Please provide valid date");e<t&&(n=(t-e)/1e3),this.timerOptions.startValues={seconds:n},this.start&&this.timer.start(this.timerOptions),this.time=this.timer.getTimeValues().toString(this.timerUnits),this.timer.addEventListener("secondsUpdated",this.onTimeChange.bind(this)),this.timer.addEventListener("targetAchieved",this.onTimeExpire.bind(this))},methods:{onTimeChange:function(){this.time=this.timer.getTimeValues().toString(this.timerUnits)},onTimeExpire:function(){this.$emit("time-expire"),this.time=this.label}},watch:{start:function(t){t?this.timer.start(this.timerOptions):this.timer.stop()}}}},function(t,e,n){var r,i;
/**
 * @license easytimer.js v1.0
 * Created by Albert González
 * Licensed under The MIT License.
 *
* @class Timer
*/(function(t){"use strict";var s="undefined"!==typeof window?window.CustomEvent:void 0;"undefined"!==typeof window&&"function"!==typeof s&&(s=function(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n},s.prototype=window.Event.prototype,window.CustomEvent=s);var o=10,u=60,a=600,c=60,f=3600,l=36e3,d=24,h=0,p=1,v=2,b=3,m=4,g="secondTenths",y="seconds",_="minutes",w="hours",E="days",O={secondTenths:100,seconds:1e3,minutes:6e4,hours:36e5,days:864e5},T=t&&t.exports?n(4):void 0;function x(){return"undefined"!==typeof document}function Q(){return T}function S(t,e){return(t%e+e)%e}function L(t,e,n){var r,i="";for(r=0;r<e;r+=1)i+=String(n);return(i+t).slice(-i.length)}function C(){this.secondTenths=0,this.seconds=0,this.minutes=0,this.hours=0,this.days=0,this.toString=function(t,e,n){t=t||["hours","minutes","seconds"],e=e||":",n=n||2;var r,i,s=[];for(i=0;i<n;i+=1)"0";for(i=0;i<t.length;i+=1)void 0!==this[t[i]]&&s.push(L(this[t[i]],n,"0"));return r=s.join(e),r}}function j(){var t,e,n,r,i,L,j,k=new C,A=new C,N=x()?document.createElement("span"):Q()?new T.EventEmitter:void 0,q=!1,P=!1,M={};function I(){return M.countdown}function F(t,e){k[t]+=e,A[t]+=e}function V(t){F(E,t),st("daysUpdated")}function $(t){F(w,t),k.hours=S(k.hours,d),(I()&&k.hours===d-1||!I()&&0===k.hours)&&V(t),e===w&&(A[_]+=I()?-c:c,A[y]+=I()?-f:f,A[g]+=I()?-l:l),st("hoursUpdated")}function D(t){F(_,t),k.minutes=S(k.minutes,c),(I()&&k.minutes===c-1||!I()&&0===k.minutes)&&$(t),e===_&&(A[y]+=I()?-u:u,A[g]+=I()?-a:a),st("minutesUpdated")}function R(t){F(y,t),k.seconds=S(k.seconds,u),(I()&&k.seconds===u-1||!I()&&0===k.seconds)&&D(t),e===y&&(A[g]+=I()?-o:o),st("secondsUpdated")}function U(t){F(g,t),k.secondTenths=S(k.secondTenths,o),(I()&&k.secondTenths===o-1||!I()&&0===k.secondTenths)&&R(t),st("secondTenthsUpdated")}function B(){clearInterval(t),t=void 0,q=!1,P=!1}function G(){var i,s=O[e];switch(e){case E:i=V;break;case w:i=$;break;case _:i=D;break;case g:i=U;break;default:i=R}t=setInterval((function(){i(n),r(k),J()&&(st("targetAchieved"),tt())}),s),q=!0,P=!1}function X(){return k.hours>i[b]||k.hours===i[b]&&(k.minutes>i[v]||k.minutes===i[v]&&k.seconds>=i[p])}function H(){return k.hours<i[b]||k.hours===i[b]&&(k.minutes<i[v]||k.minutes===i[v]&&(k.seconds<i[p]||k.seconds===i[p]&&(k.secondTenths<i[h]||k.secondTenths===i[h])))}function J(){return i instanceof Array&&(M.countdown&&H()||!M.countdown&&X())}function Y(){for(var t in k)k.hasOwnProperty(t)&&"number"===typeof k[t]&&(k[t]=0);for(var t in A)A.hasOwnProperty(t)&&"number"===typeof A[t]&&(A[t]=0)}function z(t){e=t&&"string"===typeof t.precision?t.precision:y,r=t&&"function"===typeof t.callback?t.callback:function(){},n=t&&!0===t.countdown?-1:1,j=t&&1==t.countdown,t&&"object"===typeof t.target&&K(t.target),t&&"object"===typeof t.startValues&&Z(t.startValues),i=i||!j?i:[0,0,0,0,0],M={precision:e,callback:r,countdown:"object"===typeof t&&1==t.countdown,target:i,startValues:L}}function W(t){var e,n,r,i,s,a;if("object"===typeof t)if(t instanceof Array){if(5!=t.length)throw new Error("Array size not valid");a=t}else a=[t.secondTenths||0,t.seconds||0,t.minutes||0,t.hours||0,t.days||0];for(var f=0;f<t.length;f+=1)t[f]<0&&(t[f]=0);return e=a[h],n=a[p]+Math.floor(e/o),r=a[v]+Math.floor(n/u),i=a[b]+Math.floor(r/c),s=a[m]+Math.floor(i/d),a[h]=e%o,a[p]=n%u,a[v]=r%c,a[b]=i%d,a[m]=s,a}function K(t){i=W(t)}function Z(t){L=W(t),k.secondTenths=L[h],k.seconds=L[p],k.minutes=L[v],k.hours=L[b],k.days=L[m],A.days=k.days,A.hours=A.days*d+k.hours,A.minutes=A.hours*c+k.minutes,A.seconds=A.minutes*u+k.seconds,A.secondTenths=A.seconds*o+k.secondTenths}function tt(){B(),Y(),st("stopped")}function et(t){if(this.isRunning())throw new Error("Timer already running");this.isPaused()||z(t),J()||(G(),st("started"))}function nt(){B(),P=!0,st("paused")}function rt(t,e){x()?N.addEventListener(t,e):Q()&&N.on(t,e)}function it(t,e){x()?N.removeEventListener(t,e):Q()&&N.removeListener(t,e)}function st(t){x()?N.dispatchEvent(new s(t)):Q()&&N.emit(t)}function ot(){return q}function ut(){return P}function at(){return k}function ct(){return A}function ft(){return M}"undefined"!==typeof this&&(this.start=et,this.pause=nt,this.stop=tt,this.isRunning=ot,this.isPaused=ut,this.getTimeValues=at,this.getTotalTimeValues=ct,this.getConfig=ft,this.addEventListener=rt,this.removeEventListener=it)}t&&t.exports?t.exports=j:(r=[],i=function(){return j}.apply(e,r),void 0===i||(t.exports=i))})(t)},function(t,e){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(t){return"function"===typeof t}function i(t){return"number"===typeof t}function s(t){return"object"===typeof t&&null!==t}function o(t){return void 0===t}t.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(t){if(!i(t)||t<0||isNaN(t))throw TypeError("n must be a positive number");return this._maxListeners=t,this},n.prototype.emit=function(t){var e,n,i,u,a,c;if(this._events||(this._events={}),"error"===t&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if(e=arguments[1],e instanceof Error)throw e;var f=new Error('Uncaught, unspecified "error" event. ('+e+")");throw f.context=e,f}if(n=this._events[t],o(n))return!1;if(r(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:u=Array.prototype.slice.call(arguments,1),n.apply(this,u)}else if(s(n))for(u=Array.prototype.slice.call(arguments,1),c=n.slice(),i=c.length,a=0;a<i;a++)c[a].apply(this,u);return!0},n.prototype.addListener=function(t,e){var i;if(!r(e))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,r(e.listener)?e.listener:e),this._events[t]?s(this._events[t])?this._events[t].push(e):this._events[t]=[this._events[t],e]:this._events[t]=e,s(this._events[t])&&!this._events[t].warned&&(i=o(this._maxListeners)?n.defaultMaxListeners:this._maxListeners,i&&i>0&&this._events[t].length>i&&(this._events[t].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),"function"===typeof console.trace&&console.trace())),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(t,e){if(!r(e))throw TypeError("listener must be a function");var n=!1;function i(){this.removeListener(t,i),n||(n=!0,e.apply(this,arguments))}return i.listener=e,this.on(t,i),this},n.prototype.removeListener=function(t,e){var n,i,o,u;if(!r(e))throw TypeError("listener must be a function");if(!this._events||!this._events[t])return this;if(n=this._events[t],o=n.length,i=-1,n===e||r(n.listener)&&n.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e);else if(s(n)){for(u=o;u-- >0;)if(n[u]===e||n[u].listener&&n[u].listener===e){i=u;break}if(i<0)return this;1===n.length?(n.length=0,delete this._events[t]):n.splice(i,1),this._events.removeListener&&this.emit("removeListener",t,e)}return this},n.prototype.removeAllListeners=function(t){var e,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this;if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[t],r(n))this.removeListener(t,n);else if(n)while(n.length)this.removeListener(t,n[n.length-1]);return delete this._events[t],this},n.prototype.listeners=function(t){var e;return e=this._events&&this._events[t]?r(this._events[t])?[this._events[t]]:this._events[t].slice():[],e},n.prototype.listenerCount=function(t){if(this._events){var e=this._events[t];if(r(e))return 1;if(e)return e.length}return 0},n.listenerCount=function(t,e){return t.listenerCount(e)}},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-countdown"},[n("div",{staticClass:"vue-countdown--time"},[t._v("\n        "+t._s(t.time)+"\n    ")])])},i=[];r._withStripped=!0;var s={render:r,staticRenderFns:i};e["a"]=s}])}))},dbb4:function(t,e,n){var r=n("23e7"),i=n("83ab"),s=n("56ef"),o=n("fc6a"),u=n("06cf"),a=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,n,r=o(t),i=u.f,c=s(r),f={},l=0;while(c.length>l)n=i(r,e=c[l++]),void 0!==n&&a(f,e,n);return f}})},e439:function(t,e,n){var r=n("23e7"),i=n("d039"),s=n("fc6a"),o=n("06cf").f,u=n("83ab"),a=i((function(){o(1)})),c=!u||a;r({target:"Object",stat:!0,forced:c,sham:!u},{getOwnPropertyDescriptor:function(t,e){return o(s(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=test.6dfb3c9e.js.map