(this.webpackJsonpfront_end=this.webpackJsonpfront_end||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),s=n(6),i=n.n(s),a=(n(11),n(2)),l=(n(12),n(5),n(0));var r=function(e){return Object(l.jsx)("button",{onClick:e.onclick,children:e.text})},u=n(3);var j=function(e){var t=Object(c.useState)(""),n=Object(a.a)(t,2),o=n[0],s=n[1],i=Object(c.useState)(""),j=Object(a.a)(i,2),b=j[0],g=j[1],h=Object(c.useState)(""),d=Object(a.a)(h,2),O=d[0],x=d[1],p=Object(c.useState)(!1),m=Object(a.a)(p,2),f=m[0],v=m[1];Object(c.useEffect)((function(){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:b,password:o,email:O})};f&&(v(!1),fetch("/register",e).then((function(e){return e.json()})).then((function(e){console.log("Registered!"),console.log(e),s(""),g(""),x("");var t=e.success;console.log(t),console.log(o)})))}),[f,o,b,O,e]);var S=function(e){e.preventDefault(),console.log("Handling Submit"),v(!0)},k="891542752976-2b518b2l45tl0foe8c17pjm1h76pcf79.apps.googleusercontent.com",y=Object(c.useState)(!0),L=Object(a.a)(y,2),w=L[0],C=L[1],I=Object(c.useState)(!1),N=Object(a.a)(I,2),T=N[0],A=N[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Register"}),Object(l.jsxs)("form",{id:"Register",name:"Register",className:"Register",align:"Center",onSubmit:S,children:[Object(l.jsxs)("label",{children:["UserName:",Object(l.jsx)("input",{name:"username",type:"text",placeholder:"Username",required:!0,onChange:function(e){g(e.target.value)},value:b})]}),Object(l.jsxs)("label",{children:["Password:",Object(l.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,onChange:function(e){s(e.target.value)},value:o})]}),Object(l.jsxs)("label",{children:["Email:",Object(l.jsx)("input",{name:"email",type:"email",placeholder:"example@ex.com",required:!0,onChange:function(e){x(e.target.value)},value:O})]}),Object(l.jsx)("input",{type:"submit",value:"Submit",onClick:S}),Object(l.jsx)(r,{type:"Submit",className:"RedirectButton",text:"Already have an account: Login here",onclick:function(){return e.onclick("login")}}),w?Object(l.jsx)(u.GoogleLogin,{clientId:k,buttonText:"Login",onSuccess:function(e){console.log("Login Success:",e.profileObj),C(!1),A(!0)},onFailure:function(e){console.log("Login Failed:",e)},cookiePolicy:"single_host_origin",className:"gsignin"}):null,T?Object(l.jsx)(u.GoogleLogout,{clientId:k,buttonText:"Logout",onLogoutSuccess:function(e){alert("You have been signed out successfully."),C(!0),A(!1)}}):null]})]})};var b=function(e){var t="891542752976-2b518b2l45tl0foe8c17pjm1h76pcf79.apps.googleusercontent.com",n=Object(c.useState)(!0),o=Object(a.a)(n,2),s=o[0],i=o[1],j=Object(c.useState)(!1),b=Object(a.a)(j,2),g=b[0],h=b[1],d=Object(c.useState)(""),O=Object(a.a)(d,2),x=O[0],p=O[1],m=Object(c.useState)(""),f=Object(a.a)(m,2),v=f[0],S=f[1],k=Object(c.useState)(!1),y=Object(a.a)(k,2),L=y[0],w=y[1];Object(c.useEffect)((function(){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:v,password:x})};L&&(w(!1),fetch("/register",t).then((function(e){return e.json()})).then((function(t){console.log("LoggedIn!"),console.log(t),t.loggedIn&&(console.log("Changed to logged in"),e.changeLoginStatus()),console.log(v),e.setAccount(v);var n=t.success;console.log(n),p(""),S("")})))}),[L,x,v,e]);var C=function(e){e.preventDefault(),w(!0)};return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Login"}),Object(l.jsxs)("form",{id:"Login-Form",className:"Login",name:"Login",onSubmit:C,children:[Object(l.jsxs)("label",{children:[" Username:",Object(l.jsx)("input",{type:"text",name:"username",id:"username",placeholder:"Username",onChange:function(e){S(e.target.value)},value:v})]}),Object(l.jsxs)("label",{children:[" Password:",Object(l.jsx)("input",{type:"password",name:"password",id:"logPassword",placeholder:"Password",onChange:function(e){p(e.target.value)},value:x})]}),Object(l.jsx)("input",{type:"submit",name:"submit",value:"Submit",onSubmit:C}),Object(l.jsx)(r,{text:"Create an account",onclick:function(){return e.onclick("register")}}),s?Object(l.jsx)(u.GoogleLogin,{clientId:t,buttonText:"Login",onSuccess:function(e){console.log("Login Success:",e.profileObj),i(!1),h(!0)},onFailure:function(e){console.log("Login Failed:",e)},cookiePolicy:"single_host_origin"}):null,g?Object(l.jsx)(u.GoogleLogout,{clientId:t,buttonText:"Logout",onLogoutSuccess:function(e){alert("You have been signed out successfully."),i(!0),h(!1)}}):null]})]})},g=function(){return Object(l.jsxs)("div",{id:"home",children:[Object(l.jsx)("h1",{children:"Home"}),Object(l.jsx)("p",{children:"If you love to travel"}),Object(l.jsx)("p",{children:"Why not share your experience to the world?"})]})},h=function(e){return Object(l.jsxs)("div",{id:"account",children:[Object(l.jsx)("h2",{children:"My Account:"}),Object(l.jsxs)("p",{children:["Welcome ",e.accountName,"!"]})]})},d=function(){return Object(l.jsxs)("div",{id:"about",children:[Object(l.jsx)("h1",{children:"About us"}),Object(l.jsx)("h1",{children:"Development Team"}),Object(l.jsx)("h3",{children:"Background"}),Object(l.jsx)("p",{children:"We are a group of people who love to travel. Many of us a still pioneers at traveling, however, we know many people enjoy traveling as a hobby."}),Object(l.jsx)("h3",{children:"Goals"}),Object(l.jsx)("p",{children:"Our goal is to bring people together. Those who travel hundreds of miles can stay in cantact with each other and share their traveling expirences with other people."})]})},O=function(){return Object(l.jsxs)("div",{id:"contact",children:[Object(l.jsx)("h1",{children:"Contact us"}),Object(l.jsx)("p",{children:"If you are having trouble with the site or want more information. Feel free to contact us!"}),Object(l.jsx)("p",{children:"Information"}),Object(l.jsx)("p",{children:"Emails: some1@gmail.com"}),Object(l.jsx)("p",{children:"Phone: 777-7777-7777"}),Object(l.jsx)("p",{children:"Location: Buffalo"})]})},x=function(e){var t;return t="register"===e.name?Object(l.jsx)(j,{onclick:e.onclick,changeLoginStatus:e.changeLoginStatus}):"login"===e.name?Object(l.jsx)(b,{onclick:e.onclick,setAccount:e.setAccount,changeLoginStatus:e.changeLoginStatus}):"account"===e.name?Object(l.jsx)(h,{accountName:e.accountName}):"about"===e.name?Object(l.jsx)(d,{}):"contact"===e.name?Object(l.jsx)(O,{}):Object(l.jsx)(g,{}),Object(l.jsx)("div",{id:"page",children:t})},p=function(e){return Object(l.jsx)("button",{onClick:function(){return e.changeLoginStatus()},children:"Log Out"})},m=function(e){var t=e.links.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)(r,{text:e.text,onclick:function(){return e.onclick(e.path)}})},e.key)})),n=e.loggedIn?Object(l.jsx)(p,{changeLoginStatus:e.changeLoginStatus}):"";return Object(l.jsxs)("nav",{children:[Object(l.jsx)("h1",{children:"Travelon"}),Object(l.jsx)("ul",{className:"nav-links",children:t}),n]})},f=function(e){return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)(m,{links:e.links,changeLoginStatus:e.changeLoginStatus,loggedIn:e.loggedIn})})};var v=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],o=t[1],s=Object(c.useState)(""),i=Object(a.a)(s,2),r=i[0],u=i[1],j=Object(c.useState)(!1),b=Object(a.a)(j,2),g=b[0],h=b[1],d=function(e){o(e)},O=function(){console.log("changed login status"),h(!g)};Object(c.useEffect)((function(){document.title="Travelon "+n}),[n]);var p={onclick:d,text:"Login",path:"login",key:1},m={onclick:d,text:"Register",path:"register",key:2},v={onclick:d,text:"Account",path:"account",key:3},S=[{onclick:d,text:"Home",path:"home",key:0},{onclick:d,text:"About",path:"about",key:4},{onclick:d,text:"Contact",path:"contact",key:5}];return g||(S.push(p),S.push(m)),S.push(v),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(f,{links:S,loggedIn:g,changeLoginStatus:O}),Object(l.jsx)(x,{name:n,onclick:d,setAccount:function(e){u(e)},accountName:r,changeLoginStatus:O})]})})};i.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))},5:function(e,t,n){}},[[14,1,2]]]);
//# sourceMappingURL=main.7e451d15.chunk.js.map