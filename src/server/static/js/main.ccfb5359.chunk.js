(this.webpackJsonpfront_end=this.webpackJsonpfront_end||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),s=n(6),i=n.n(s),a=(n(11),n(2)),r=(n(12),n(4),n(0));var l=function(e){return Object(r.jsx)("button",{onClick:e.onclick,children:e.text})},u=n(3);var j=function(e){var t=Object(c.useState)(""),n=Object(a.a)(t,2),o=n[0],s=n[1],i=Object(c.useState)(""),j=Object(a.a)(i,2),b=j[0],d=j[1],h=Object(c.useState)(""),g=Object(a.a)(h,2),O=g[0],x=g[1],p=Object(c.useState)(!1),f=Object(a.a)(p,2),m=f[0],v=f[1];Object(c.useEffect)((function(){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:b,password:o,email:O})};m&&(v(!1),fetch("/register",e).then((function(e){return e.json()})).then((function(e){console.log("Registered!"),console.log(e),s(""),d(""),x("");var t=e.success;console.log(t),console.log(o)})))}),[m,o,b,O,e]);var S=function(e){e.preventDefault(),console.log("Handling Submit"),v(!0)},y="891542752976-2b518b2l45tl0foe8c17pjm1h76pcf79.apps.googleusercontent.com",k=Object(c.useState)(!0),L=Object(a.a)(k,2),w=L[0],C=L[1],F=Object(c.useState)(!1),N=Object(a.a)(F,2),A=N[0],I=N[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Register"}),Object(r.jsxs)("form",{id:"Register",name:"Register",className:"Register",align:"Center",onSubmit:S,children:[Object(r.jsxs)("label",{children:["UserName:",Object(r.jsx)("input",{name:"username",type:"text",placeholder:"Username",required:!0,onChange:function(e){d(e.target.value)},value:b})]}),Object(r.jsxs)("label",{children:["Password:",Object(r.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,onChange:function(e){s(e.target.value)},value:o})]}),Object(r.jsxs)("label",{children:["Email:",Object(r.jsx)("input",{name:"email",type:"email",placeholder:"example@ex.com",required:!0,onChange:function(e){x(e.target.value)},value:O})]}),Object(r.jsx)("input",{type:"submit",value:"Submit",onClick:S}),Object(r.jsx)(l,{type:"Submit",className:"RedirectButton",text:"Already have an account: Login here",onclick:function(){return e.onclick("login")}}),w?Object(r.jsx)(u.GoogleLogin,{clientId:y,buttonText:"Login",onSuccess:function(e){console.log("Login Success:",e.profileObj),C(!1),I(!0)},onFailure:function(e){console.log("Login Failed:",e)},cookiePolicy:"single_host_origin",className:"gsignin"}):null,A?Object(r.jsx)(u.GoogleLogout,{clientId:y,buttonText:"Logout",onLogoutSuccess:function(e){alert("You have been signed out successfully."),C(!0),I(!1)}}):null]})]})};var b=function(e){var t="891542752976-2b518b2l45tl0foe8c17pjm1h76pcf79.apps.googleusercontent.com",n=Object(c.useState)(!0),o=Object(a.a)(n,2),s=o[0],i=o[1],j=Object(c.useState)(!1),b=Object(a.a)(j,2),d=b[0],h=b[1],g=Object(c.useState)(""),O=Object(a.a)(g,2),x=O[0],p=O[1],f=Object(c.useState)(""),m=Object(a.a)(f,2),v=m[0],S=m[1],y=Object(c.useState)(!1),k=Object(a.a)(y,2),L=k[0],w=k[1];Object(c.useEffect)((function(){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:v,password:x})};L&&(w(!1),fetch("/register",t).then((function(e){return e.json()})).then((function(t){console.log("LoggedIn!"),console.log(t),t.loggedIn&&(console.log("Changed to logged in"),e.changeLoginStatus()),console.log(v),e.setAccount(v);var n=t.success;console.log(n),p(""),S("")})))}),[L,x,v,e]);var C=function(e){e.preventDefault(),w(!0)};return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsxs)("form",{id:"Login-Form",className:"Login",name:"Login",onSubmit:C,children:[Object(r.jsxs)("label",{children:[" Username:",Object(r.jsx)("input",{type:"text",name:"username",id:"username",placeholder:"Username",onChange:function(e){S(e.target.value)},value:v})]}),Object(r.jsxs)("label",{children:[" Password:",Object(r.jsx)("input",{type:"password",name:"password",id:"logPassword",placeholder:"Password",onChange:function(e){p(e.target.value)},value:x})]}),Object(r.jsx)("input",{type:"submit",name:"submit",value:"Submit",onSubmit:C}),Object(r.jsx)(l,{text:"Create an account",onclick:function(){return e.onclick("register")}}),s?Object(r.jsx)(u.GoogleLogin,{clientId:t,buttonText:"Login",onSuccess:function(e){console.log("Login Success:",e.profileObj),i(!1),h(!0)},onFailure:function(e){console.log("Login Failed:",e)},cookiePolicy:"single_host_origin"}):null,d?Object(r.jsx)(u.GoogleLogout,{clientId:t,buttonText:"Logout",onLogoutSuccess:function(e){alert("You have been signed out successfully."),i(!0),h(!1)}}):null]})]})},d=function(){return Object(r.jsxs)("div",{id:"home",children:[Object(r.jsx)("h1",{children:"Home"}),Object(r.jsx)("p",{children:"If you love to travel"}),Object(r.jsx)("p",{children:"Why not share your experience to the world?"})]})},h=function(e){return Object(r.jsxs)("div",{id:"account",children:[Object(r.jsx)("h2",{children:"My Account:"}),Object(r.jsxs)("p",{children:["Welcome ",e.accountName,"!"]})]})},g=function(){return Object(r.jsxs)("div",{id:"about",children:[Object(r.jsx)("h1",{children:"About us"}),Object(r.jsx)("h1",{children:"Development Team"}),Object(r.jsx)("h3",{children:"Background"}),Object(r.jsx)("p",{children:"We are a group of people who love to travel. Many of us a still pioneers at traveling, however, we know many people enjoy traveling as a hobby."}),Object(r.jsx)("h3",{children:"Goals"}),Object(r.jsx)("p",{children:"Our goal is to bring people together. Those who travel hundreds of miles can stay in cantact with each other and share their traveling expirences with other people."})]})},O=function(){return Object(r.jsxs)("div",{id:"contact",children:[Object(r.jsx)("h1",{children:"Contact us"}),Object(r.jsx)("p",{children:"If you are having trouble with the site or want more information. Feel free to contact us!"}),Object(r.jsx)("p",{children:"Information"}),Object(r.jsx)("p",{children:"Emails: some1@gmail.com"}),Object(r.jsx)("p",{children:"Phone: 777-7777-7777"}),Object(r.jsx)("p",{children:"Location: Buffalo"})]})},x=[],p=function(e){var t=Object(c.useState)(""),n=Object(a.a)(t,2),o=n[0],s=n[1],i=Object(c.useState)(""),l=Object(a.a)(i,2),u=l[0],j=l[1],b=Object(c.useState)(!1),d=Object(a.a)(b,2),h=d[0],g=d[1];Object(c.useEffect)((function(){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:u,friend:o})};h&&(g(!1),fetch("/friends",e).then((function(e){return e.json()})).then((function(e){console.log("Added friend!"),console.log(e),x=JSON.stringify(e),j(""),s("")})))}),[h,o,u,e]);var O=function(e){e.preventDefault(),g(!0)};return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Friend"}),Object(r.jsxs)("form",{id:"AddFriend-Form",className:"AddFriend",name:"AddFriend",onSubmit:O,children:[Object(r.jsxs)("label",{children:[" Your Username:",Object(r.jsx)("input",{type:"text",name:"username",id:"username",placeholder:"Username",onChange:function(e){j(e.target.value)},value:u})]}),Object(r.jsxs)("label",{children:[" Friend to Add:",Object(r.jsx)("input",{type:"friend",name:"friend",id:"logFriend",placeholder:"Friend",onChange:function(e){s(e.target.value)},value:o})]}),Object(r.jsx)("input",{type:"submit",name:"submit",value:"Submit",onSubmit:O})]}),Object(r.jsxs)("div",{children:[" ",Object(r.jsx)("h1",{children:' "My FriendsList" '}),Object(r.jsxs)("h2",{children:[" ",x," "]})]})]})},f=function(e){var t;return t="register"===e.name?Object(r.jsx)(j,{onclick:e.onclick,changeLoginStatus:e.changeLoginStatus}):"login"===e.name?Object(r.jsx)(b,{onclick:e.onclick,setAccount:e.setAccount,changeLoginStatus:e.changeLoginStatus}):"account"===e.name?Object(r.jsx)(h,{accountName:e.accountName}):"about"===e.name?Object(r.jsx)(g,{}):"contact"===e.name?Object(r.jsx)(O,{}):"friendslist"===e.name?Object(r.jsx)(p,{}):Object(r.jsx)(d,{}),Object(r.jsx)("div",{id:"page",children:t})},m=function(e){return Object(r.jsx)("button",{onClick:function(){return e.changeLoginStatus()},children:"Log Out"})},v=function(e){var t=e.links.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsx)(l,{text:e.text,onclick:function(){return e.onclick(e.path)}})},e.key)})),n=e.loggedIn?Object(r.jsx)(m,{changeLoginStatus:e.changeLoginStatus}):"";return Object(r.jsxs)("nav",{children:[Object(r.jsx)("h1",{children:"Travelon"}),Object(r.jsx)("ul",{className:"nav-links",children:t}),n]})},S=function(e){return Object(r.jsx)("header",{className:"header",children:Object(r.jsx)(v,{links:e.links,changeLoginStatus:e.changeLoginStatus,loggedIn:e.loggedIn})})};var y=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],o=t[1],s=Object(c.useState)(""),i=Object(a.a)(s,2),l=i[0],u=i[1],j=Object(c.useState)(!1),b=Object(a.a)(j,2),d=b[0],h=b[1],g=function(e){o(e)},O=function(){console.log("changed login status"),h(!d)};Object(c.useEffect)((function(){document.title="Travelon "+n}),[n]);var x={onclick:g,text:"Login",path:"login",key:1},p={onclick:g,text:"Register",path:"register",key:2},m={onclick:g,text:"Account",path:"account",key:3},v=[{onclick:g,text:"Home",path:"home",key:0},{onclick:g,text:"About",path:"about",key:4},{onclick:g,text:"Contact",path:"contact",key:5},{onclick:g,text:"Friendslist",path:"friendslist",key:6}];return d||(v.push(x),v.push(p)),v.push(m),Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(S,{links:v,loggedIn:d,changeLoginStatus:O}),Object(r.jsx)(f,{name:n,onclick:g,setAccount:function(e){u(e)},accountName:l,changeLoginStatus:O})]})})};i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(y,{})}),document.getElementById("root"))},4:function(e,t,n){}},[[14,1,2]]]);
//# sourceMappingURL=main.ccfb5359.chunk.js.map