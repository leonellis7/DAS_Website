(this["webpackJsonpreact-website-das"]=this["webpackJsonpreact-website-das"]||[]).push([[0],{112:function(e,n,t){e.exports=t(252)},119:function(e,n,t){},252:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),i=t(27),c=t.n(i),o=t(11),l=t(12);function u(){var e=Object(o.a)(["\n  border-radius: 4px;\n  background: ",";\n  white-space: nowrap;\n  padding: ",";\n  color: #fff;\n  font-size: ",";\n  outline: none;\n  border: none;\n  cursor: pointer;\n  &:hover {\n    transition: all 0.3s ease-out;\n    background: #fff;\n    background-color: ",";\n  }\n  @media screen and (max-width: 960px) {\n    width: 100%;\n  }\n"]);return u=function(){return e},e}function s(){var e=Object(o.a)(["\nz-index: 1;\nwidth: 100%;\nmax-width: 1300px;\nmargin-right: auto;\nmargin-left: auto;\npadding-right: 50px;\npadding-left: 50px;\n\n@media screen and (max-width: 991px){\n    padding-right: 30px;\n    padding-left: 30px;\n\n}\n"]);return s=function(){return e},e}function m(){var e=Object(o.a)(["\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: 'Source Sans Pro', sans-serif;\n}\n"]);return m=function(){return e},e}var f=Object(l.a)(m()),p=l.b.div(s()),d=l.b.button(u(),(function(e){return e.primary?"#4B59F7":"#0467FB"}),(function(e){return e.big?"12px 64px":"10px 20px"}),(function(e){return e.fontBig?"20px":"16px"}),(function(e){return e.primary?"#0467FB":"#4B59F7"})),b=f,h=t(21),x=t(3),g=t(75),E=t(74),v=t(0);t(119);function j(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n  padding: 8px 16px;\n  height: 100%;\n  width: 100%;\n  border: none;\n  outline: none;\n"]);return j=function(){return e},e}function y(){var e=Object(o.a)(["\n  @media screen and (max-width: 960px) {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 120px;\n  }\n"]);return y=function(){return e},e}function O(){var e=Object(o.a)(["\n    color: #fff;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    padding: 0.5rem 1rem;\n    height: 100%;\n\n@media screen and (max-width: 960px){\n    text-align: center;\n    padding: 2rem;\n    width: 100%;\n    display: table;\n\n    &:hover{\n        color: #4b59f7;\n        transition: all 0.3s ease;\n        }\n    }\n   "]);return O=function(){return e},e}function w(){var e=Object(o.a)(["\nheight: 80px;\nborder-bottom: 2px solid transparent;\n\n&:hover{\n    border-bottom: 2px solid #4b59f7;\n}\n\n@media screen and (max-width: 960px){\n    width: 100%;\n\n    &:hover{\n        border: none;\n    }\n}\n"]);return w=function(){return e},e}function C(){var e=Object(o.a)(["\ndisplay: flex;\nalign-items: center;\nlist-style: none;\ntext-align: center;\n\n@media screen and (max-width: 960px){\n    display: flex;\n    flex-direction: column;\n    width: 100%; \n    height: 90vh;\n    position: absolute;\n    top: 80px;\n    left: ",";\n    opacity: 1;\n    transition: all 0.5s ease;\n    background: #101522\n    }\n"]);return C=function(){return e},e}function N(){var e=Object(o.a)(["\ndisplay: none;\n\n@media screen and (max-width: 960px){\n    display: block;\n    position: absolute;\n    top: 0;\n    right:0;\n    transform: translate(-100%, 60%);\n    font-size: 1.8rem;\n    cursor: pointer;\n}\n"]);return N=function(){return e},e}function k(){var e=Object(o.a)(["\ncolor: #fff;\njustify-self: flex-start;\ncursor: pointer;\ntext-decoration: none;\nfont-size: 2rem;\ndisplay: flex;\nalign-items: center;\n"]);return k=function(){return e},e}function S(){var e=Object(o.a)(["\ndisplay: flex;\njustify-content: space-between;\nheight: 80px;\n\n","\n"]);return S=function(){return e},e}function F(){var e=Object(o.a)(["\nbackground: #101522;\nheight: 80px;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nfont-size: 1.2rem;\nposition: sticky;\ntop: 0;\nz-index: 999;\n"]);return F=function(){return e},e}var T=l.b.nav(F()),z=Object(l.b)(p)(S(),p),L=Object(l.b)(h.b)(k()),B=l.b.div(N()),P=l.b.ul(C(),(function(e){return e.click?0:"-100%"})),U=l.b.li(w()),D=Object(l.b)(h.b)(O()),I=l.b.li(y()),A=Object(l.b)(h.b)(j()),G=function(){var e=Object(a.useState)(!1),n=Object(g.a)(e,2),t=n[0],i=n[1],c=Object(a.useState)(!0),o=Object(g.a)(c,2),l=o[0],u=o[1],s=function(){return i(!t)},m=function(){return i(!1)},f=function(){window.innerWidth<=960?u(!1):u(!0)};return Object(a.useEffect)((function(){f()}),[]),window.addEventListener("resize",f),r.a.createElement(r.a.Fragment,null,r.a.createElement(v.b.Provider,{value:{color:"#fff"}},r.a.createElement(T,null,r.a.createElement(z,null,r.a.createElement(L,{to:"/"},"DAS"),r.a.createElement(B,{onClick:s},t?r.a.createElement(E.b,null):r.a.createElement(E.a,null)),r.a.createElement(P,{onCLick:s,click:t},r.a.createElement(U,null,r.a.createElement(D,{to:"/"},"Home")),r.a.createElement(h.b,{to:"/hoursCompleted",className:"nav-links",onClick:m},"Hours Completed"),r.a.createElement(h.b,{to:"/questionnaire",className:"nav-links",onClick:m},"Questionnaire"),r.a.createElement(I,null,l?r.a.createElement(A,{to:"/sign-up"},r.a.createElement(d,{primary:!0},"SIGN UP")):r.a.createElement(A,{to:"/sign-up"},r.a.createElement(d,{fontBig:!0,primary:!0},"SIGN UP"))))))))};t(41);var V=function(){return r.a.createElement(r.a.Fragment,null)},q=t(37),H=t(38),J=t(40),M=t(39),Q=t(108),R=t(109),W=t.n(R),Y=t(110),K=t.n(Y),X=t(51),Z=t.n(X),$=t(111),_=t.n($),ee=function(e){Object(J.a)(t,e);var n=Object(M.a)(t);function t(){var e;Object(q.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).continue=function(n){n.preventDefault(),e.props.nextStep()},e}return Object(H.a)(t,[{key:"render",value:function(){var e=this.props,n=e.values,t=e.handleChange;return r.a.createElement(W.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"titleCenter"},r.a.createElement(K.a,{title:"Enter User Details "})),r.a.createElement("div",{class:"center"},r.a.createElement(Z.a,{hintText:"Enter Your First Name",floatingLabelText:"First Name",onChange:t("firstName"),defaultValue:n.firstName,alignText:"Center"}),r.a.createElement("br",null),r.a.createElement(Z.a,{hintText:"Enter Last Name",floatingLabelText:"Last Name",onChange:t("lastName"),defaultValue:n.lastName}),r.a.createElement("br",null),r.a.createElement(Z.a,{hintText:"Enter Email",floatingLabelText:"Email",onChange:t("email"),defaultValue:n.email}),r.a.createElement("br",null),r.a.createElement(_.a,{label:"Continue",primary:!0,style:ne.button,onClick:this.continue}))))}}]),t}(a.Component),ne={button:{margin:10}},te=ee,ae=function(e){Object(J.a)(t,e);var n=Object(M.a)(t);function t(){var e;Object(q.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).state={step:1,firstName:"",lastName:"",email:"",occupation:"",city:"",bio:""},e.nextStep=function(){var n=e.state.step;e.setState({step:n+1})},e.prevStep=function(){var n=e.state.step;e.setState({step:n-1})},e.handleChange=function(n){return function(t){e.setState(Object(Q.a)({},n,t.target.value))}},e}return Object(H.a)(t,[{key:"render",value:function(){var e=this.state.step,n=this.state,t={firstName:n.firstName,lastName:n.lastName,email:n.email,occupation:n.occupation,city:n.city,bio:n.bio};switch(e){case 1:return r.a.createElement(te,{nextStep:this.nextStep,handleChange:this.handleChange,values:t});case 2:return r.a.createElement("h1",null," Personal Details");case 3:return r.a.createElement("h1",null," Confirm");case 4:return;default:console.log("This is a multi-step form built with React.")}}}]),t}(a.Component),re=function(e){Object(J.a)(t,e);var n=Object(M.a)(t);function t(){return Object(q.a)(this,t),n.apply(this,arguments)}return Object(H.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Questionnaire"},r.a.createElement(ae,null))}}]),t}(a.Component);function ie(){return r.a.createElement("h1",{className:"hoursCompleted"},"COMPLETED")}function ce(){return r.a.createElement("h1",{className:"signUp"},"SIGN UP")}var oe=function(){return r.a.createElement(h.a,null,r.a.createElement(b,null),r.a.createElement(G,null),r.a.createElement(x.c,null,r.a.createElement(x.a,{path:"/",exact:!0,component:V}),r.a.createElement(x.a,{path:"/questionnaire",component:re}),r.a.createElement(x.a,{path:"/hoursCompleted",component:ie}),r.a.createElement(x.a,{path:"/signUp",component:ce})))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(oe,null)),document.getElementById("root"))},41:function(e,n,t){}},[[112,1,2]]]);
//# sourceMappingURL=main.529cefa1.chunk.js.map