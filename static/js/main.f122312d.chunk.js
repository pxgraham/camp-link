(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),o=a(4),c=a(6),i=a(5),m=a(7),u=a(105),s=a(107),p=a(106);var h=function(){return l.a.createElement("img",{className:"logo"})},E=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"camplink-logo"},l.a.createElement(h,null)),l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"message"},l.a.createElement("div",{className:"full-form"},l.a.createElement("p",null,"CampLink is a social media network aimed to keep Coding Boot Camp cohorts in touch, even after the boot camp has been completed. Show off your portfolio, contact your peers, and even look for employment!"),l.a.createElement("a",{className:"button",href:"/login"},"login"),l.a.createElement("a",{className:"button",href:"/signup"},"signup"),l.a.createElement("a",{className:"button",href:"https://github.com/R-Delgado1203/camp-link-react"},"github")))))}}]),t}(n.Component),d=a(16),b=a(13),g=a.n(b),f=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={email:"",password:""},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(d.a)({},n,l)),console.log(a.state)},a.formPost=function(e){e.preventDefault(),g()({method:"post",url:"http://localhost:3001/users/authenticate",data:JSON.stringify({email:a.state.email,password:a.state.password}),headers:{"Content-Type":"application/json"},json:!0}).then(function(e){localStorage.setItem("token",e.data.token),window.location.replace("/directory")}).catch(function(e){alert("Login Failed, Please Try Again."),console.log(e)})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{class:"wrapper"},l.a.createElement("div",{class:"message"},l.a.createElement("div",{class:"full-form"},l.a.createElement("form",{action:"/users/authenticate",method:"POST",target:"/users/",className:"login-form"},l.a.createElement("h1",null,"login."),l.a.createElement("label",{htmlFor:"email"},l.a.createElement("b",null,"email")),l.a.createElement("input",{type:"text",placeholder:"enter email",onChange:this.handleInputChange,name:"email",required:!0}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"psw"},l.a.createElement("b",null,"password")),l.a.createElement("input",{type:"password",placeholder:"enter password",onChange:this.handleInputChange,name:"password",required:!0}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{type:"submit",className:"button",onClick:this.formPost},"login"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",{className:"new-user"},l.a.createElement("a",{href:"/signup"},"new user? click here to sign up."))))))}}]),t}(n.Component);function v(){localStorage.key("token")?localStorage.removeItem("token"):console.log(localStorage.key("token"))}var y=function(){return l.a.createElement("div",{className:"topnav responsive",id:"myTopnav"},l.a.createElement("a",{href:"/",className:"active"},"Home"),l.a.createElement("a",{href:"/login"},"Login"),l.a.createElement("a",{href:"/signup"},"Sign Up"),l.a.createElement("a",{href:"/directory"},"Directory"),l.a.createElement("a",{href:"/profile"},"My Profile"),l.a.createElement("a",{href:"/profile/update"},"Update My Profile"),l.a.createElement("a",{href:"/login",onClick:v},"Sign Out"))},j=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement(f,null))}}]),t}(n.Component),k=a(31);var C=function(e){return console.log(e),l.a.createElement("div",{class:"directory-card"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"profile-picture-holder"},l.a.createElement("img",{class:"card-picture",src:e.picture})),l.a.createElement("div",{class:"profile-info-holder"},l.a.createElement("div",{class:"name-holder"},l.a.createElement("a",{href:"/profile/".concat(e.id)},"".concat(e.firstName," ").concat(e.lastName),l.a.createElement("br",null))),l.a.createElement("div",{class:"cohort-holder"},"Year: ".concat(e.year)," ",l.a.createElement("br",null)),l.a.createElement("div",{class:"email-holder"},"Email: ".concat(e.email)," ",l.a.createElement("br",null)))))},w=localStorage.getItem("token"),O=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;g()({method:"get",url:"http://localhost:3001/users",headers:{Authorization:"Bearer "+w},json:!0}).then(function(t){var a=t.data;e.setState({userData:a})}).catch(function(e){window.location.replace("/login"),console.log("it failed with error: ".concat(e))})}},{key:"render",value:function(){var e=this.state.userData;return e?e=e.map(function(e){return l.a.createElement("div",null,l.a.createElement(C,{firstName:e.firstName,lastName:e.lastName,year:e.year,email:e.email,id:e._id}))}):console.log("nope"),l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement(k.Row,null,e))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={email:"",password:"",firstName:"",lastName:""},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(d.a)({},n,l)),console.log(a.state)},a.formPost=function(e){e.preventDefault(),g()({method:"post",url:"http://localhost:3001/users/register",data:JSON.stringify({email:a.state.email,password:a.state.password,firstName:a.state.firstName,lastName:a.state.lastName}),headers:{"Content-Type":"application/json"}}).then(function(e){alert("Congrats you have signed up!"),window.location.replace("/login"),console.log(e)}).catch(function(e){console.log(e)})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{className:"container"},l.a.createElement("h1",null,"Sign Up:"),l.a.createElement("label",{for:"first-name"},l.a.createElement("b",null,"First Name")),l.a.createElement("input",{type:"text",placeholder:"Enter First Name",onChange:this.handleInputChange,name:"firstName",required:!0}),l.a.createElement("label",{for:"last-name"},l.a.createElement("b",null,"Last Name")),l.a.createElement("input",{type:"text",placeholder:"Enter Last Name",onChange:this.handleInputChange,name:"lastName",required:!0}),l.a.createElement("label",{for:"email"},l.a.createElement("b",null,"Email")),l.a.createElement("input",{type:"text",placeholder:"Enter Email",onChange:this.handleInputChange,name:"email",required:!0}),l.a.createElement("label",{for:"psw"},l.a.createElement("b",null,"Password")),l.a.createElement("input",{type:"password",placeholder:"Enter Password",onChange:this.handleInputChange,name:"password",required:!0}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{type:"submit",onClick:this.formPost,class:"btn"},"Sign Up!"),l.a.createElement("p",{class:"new-user"},l.a.createElement("a",{href:"/"},"Existing user? Click here to sign in."))))}}]),t}(n.Component),I=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement(N,null))}}]),t}(n.Component);a(99),n.Component,localStorage.getItem("token");var S=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement("div",{class:"profile-wrapper"},"profile component goes here"),l.a.createElement("div",{class:"some-page-wrapper"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"column"},"                            "),l.a.createElement("div",{class:"column"},l.a.createElement("div",{class:"data-holder2"},l.a.createElement("div",{class:"coding-holder-header"},"coding."),l.a.createElement("div",{class:"attribute"},l.a.createElement("p",null,"Github: (INSERT HERE) "),l.a.createElement("p",null,"Portfolio: (INSERT HERE) "),l.a.createElement("p",null,"Favorite Language: (INSERT HERE) "),l.a.createElement("p",null,"Project Spotlight: (INSERT HERE) ")))),l.a.createElement("div",{class:"column"},l.a.createElement("div",{class:"data-holder3"},l.a.createElement("div",{class:"employment-holder-header"},"employment."),l.a.createElement("div",{class:"attribute"},l.a.createElement("p",null,"Current Job: (INSERT HERE) "),l.a.createElement("p",null,"Company Website: (INSERT HERE) "),l.a.createElement("p",null,"Looking to Hire?: (INSERT HERE) "),l.a.createElement("p",null,"Looking for Work?: (INSERT HERE) ")))))))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={email:"",phone:"",twitter:"",linkedIn:"",github:"",portfolio:"",language:"",project:"",currentJob:"",companySite:"",lookingForWork:"",lookingToHire:"",hobby:""},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(d.a)({},n,l)),console.log(a.state)},a.formPost=function(e){e.preventDefault();var t=localStorage.key("token");t?g()({method:"post",url:"http://localhost:3001/users/update",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"},data:JSON.stringify({email:a.state.email,phone:a.state.phone,twitter:a.state.twitter,linkedIn:a.state.linkedIn,github:a.state.github,portfolio:a.state.portfolio,language:a.state.language,project:a.state.project,currentJob:a.state.currentJob,companySite:a.state.companySite,lookingForWork:a.state.lookingForWork,lookingToHire:a.state.lookingToHire,hobby:a.state.hobby}),json:!0}).then(function(e){alert("Profile Updated!"),window.location.replace("/profile/:id"),console.log(e)}).catch(function(e){console.log(e)}):window.location.replace("/profile/:id")},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"camplink-logo"},l.a.createElement(h,null)),l.a.createElement("div",{class:"wrapper"},l.a.createElement("div",{class:"message1"},l.a.createElement("div",{class:"full-form"},l.a.createElement("h1",null,"update."),l.a.createElement("label",{htmlFor:"email"},l.a.createElement("b",null,"email")),l.a.createElement("input",{type:"email",placeholder:"Email Address",onChange:this.handleInputChange,name:"email",required:!0}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"phone"},l.a.createElement("b",null,"phone")),l.a.createElement("input",{type:"text",placeholder:"(xxx-xxx-xxxx)",onChange:this.handleInputChange,name:"phone",required:!0}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"twitter"},l.a.createElement("b",null,"twitter")),l.a.createElement("input",{type:"url",placeholder:"Twitter URL",onChange:this.handleInputChange,name:"twitter",required:!0}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"linked-in"},l.a.createElement("b",null,"linkedin")),l.a.createElement("input",{type:"url",placeholder:"LinkedIn URL",onChange:this.handleInputChange,name:"linked-in",required:!0}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"github"},l.a.createElement("b",null,"github")),l.a.createElement("input",{type:"url",placeholder:"Github URL",onChange:this.handleInputChange,name:"github",required:!0}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"portfolio"},l.a.createElement("b",null,"portfolio")),l.a.createElement("input",{type:"url",placeholder:"Portfolio URL",onChange:this.handleInputChange,name:"portfolio",required:!0}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"favorite-language"},l.a.createElement("b",null,"favorite language")),l.a.createElement("input",{type:"text",placeholder:"HTML, CSS, Javascript, etc.",onChange:this.handleInputChange,name:"favorite-language",required:!0}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"project-spotlight"},l.a.createElement("b",null,"project spotlight")),l.a.createElement("input",{type:"url",placeholder:"A project you're proud of",onChange:this.handleInputChange,name:"project-spotlight",required:!0}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"current-job"},l.a.createElement("b",null,"current job")),l.a.createElement("input",{type:"text",placeholder:"Job Title",onChange:this.handleInputChange,name:"current-job",required:!0}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"company-website"},l.a.createElement("b",null,"company website")),l.a.createElement("input",{type:"url",placeholder:"Company Website URL",onChange:this.handleInputChange,name:"company-website",required:!0}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"looking-radio"},l.a.createElement("b",null,"looking for work?")),l.a.createElement("select",{name:"looking-for-work"},l.a.createElement("option",{value:"looking-yes"},"yes"),l.a.createElement("option",{value:"looking-no"},"no")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"hiring-radio"},l.a.createElement("b",null,"looking to hire?")),l.a.createElement("select",{name:"looking-to-hire"},l.a.createElement("option",{value:"looking-hire-yes"},"yes"),l.a.createElement("option",{value:"looking-hire-no"},"no")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{class:"button",type:"submit",onClick:this.formPost},"update")))))}}]),t}(n.Component),R=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement(x,null))}}]),t}(n.Component),F=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement(s.a,null,l.a.createElement(p.a,{exact:!0,path:"/",component:E}),l.a.createElement(p.a,{exact:!0,path:"/login",component:j}),l.a.createElement(p.a,{exact:!0,path:"/signup",component:I}),l.a.createElement(p.a,{exact:!0,path:"/directory",component:O}),l.a.createElement(p.a,{exact:!0,path:"/profile/:id",component:S}),l.a.createElement(p.a,{exact:!0,path:"/profile/update/:id",component:R})))}}]),t}(n.Component),T=a(22),q=a.n(T);a(102);q.a.render(l.a.createElement(F,null),document.getElementById("root"))},34:function(e,t,a){e.exports=a(104)},99:function(e,t,a){}},[[34,2,1]]]);
//# sourceMappingURL=main.f122312d.chunk.js.map