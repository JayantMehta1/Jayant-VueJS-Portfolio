webpackJsonp([0],{"6S+O":function(e,t){},AhPL:function(e,t){},I4Q9:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("span",{attrs:{id:"mediaSpacing"}},[t("a",{attrs:{id:"mediaDynamic",href:this.myMedia.myLink}},[t("span",[t("i",{class:this.myMedia.icon,attrs:{id:this.myMediaColour}})])])])},staticRenderFns:[]};var o={data:function(){return{myProfiles:[{icon:"fas fa-envelope fa-lg",myLink:"mailto: j7mehta@uwaterloo.ca"},{icon:"fab fa-linkedin-in fa-lg",myLink:"https://www.linkedin.com/in/jayant-mehta"},{icon:"fab fa-github fa-lg",myLink:"https://github.com/JayantMehta1"},{icon:"fas fa-file fa-lg",myLink:"../../../static/JayantMehtaResume.pdf"}]}},props:["passColour"],components:{Media:n("VU/8")({data:function(){return{myColour:"grey"}},props:["myMedia","myMediaColour"]},i,!1,function(e){n("hLxy")},null,null).exports}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"mediaBlock"}},e._l(e.myProfiles,function(t){return n("media",{staticClass:"iconMedia",attrs:{myMedia:t,myMediaColour:e.passColour}})}),1)])},staticRenderFns:[]};var s=n("VU/8")(o,r,!1,function(e){n("iH77")},"data-v-6fe4e1aa",null).exports,c={data:function(){return{accountsColourConclusion:"accountsColourWhite"}},props:["myName"],components:{Accounts:s}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("p",[e._v("j7mehta@uwaterloo.ca")]),e._v(" "),n("accounts",{attrs:{passColour:e.accountsColourConclusion}}),e._v(" "),n("p",{attrs:{id:"credit"}},[e._v("Designed and Developed by "+e._s(e.myName.first)+" "+e._s(e.myName.last))])],1)},staticRenderFns:[]};var d={data:function(){return{userName:{first:"Jayant",last:"Mehta"}}},components:{Conclusion:n("VU/8")(c,l,!1,function(e){n("XhPT")},"data-v-b27601fe",null).exports}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"wrapper"}},[n("nav",{staticClass:"navbar navbar-default"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"navbar-header"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e._v("Home")]),e._v(" "),n("router-link",{staticClass:"navbar-brand",attrs:{to:"/about"}},[e._v("About Me")]),e._v(" "),n("router-link",{staticClass:"navbar-brand",attrs:{to:"/resume"}},[e._v("Resume")])],1)])]),e._v(" "),n("div",{attrs:{id:"whole"}},[n("router-view")],1),e._v(" "),n("conclusion",{attrs:{myName:e.userName}})],1)},staticRenderFns:[]};var p=n("VU/8")(d,u,!1,function(e){n("WP0I")},"data-v-b7bbd9e6",null).exports,m=n("/ocq"),v={data:function(){return{accountsColourIntro:"accountsColourBlue",typing:!0}},props:["myName"],components:{Accounts:s}},f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"introWords"}},[n("h1",[e._v(" Hi, I'm "+e._s(e.myName.first)+"!")]),e._v(" "),n("p",[e._v("\n            I am a software developer studying Engineering at the University of Waterloo. Feel free to explore my website to get to know me :)\n        ")]),e._v(" "),n("p",[e._v("\n            I am seeking an internship for Fall 2020 (September - December).\n        ")])]),e._v(" "),n("a",{attrs:{href:"../../../static/JayantMehtaResume.pdf"}},[e._v("Here is my Resume")]),e._v(" "),n("div",{attrs:{id:"introAccounts"}},[n("accounts",{attrs:{passColour:e.accountsColourIntro}})],1)])},staticRenderFns:[]};var h=n("VU/8")(v,f,!1,function(e){n("QJGY")},"data-v-c3835bdc",null).exports,y={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{"data-aos":"fade-up"}},[t("div",{staticClass:"border hvr-grow"},[t("div",{staticClass:"left",attrs:{id:this.myPos.pic}}),this._v(" "),t("div",{staticClass:"right"},[t("h5",[this._v(this._s(this.myPos.position)+" at "+this._s(this.myPos.company))])])])])},staticRenderFns:[]};var _={data:function(){return{Experiences:[{company:"Government of Canada",position:"IT Full Stack Developer",pic:"picCanada"},{company:"Microsoft",position:"Microsoft Student Partner",pic:"picMicrosoft"},{company:"Design Net Specific",position:"Web Developer",pic:"picDesign"},{company:"Carte Wealth Management Inc.",position:"Computer Software Intern",pic:"picCarteSoftware"},{company:"Hack the North",position:"Judging Panel Coordinator",pic:"picNorth"},{company:"Professional Engineers of Ontario Oakville Chapter",position:"National Engineering Month Conference Coordinator",pic:"picPEO"},{company:"Bridges Canada Inc.",position:"Technology Camp Counsellor",pic:"picBridges"},{company:"City of Brampton",position:"Aquatics Instructor",pic:"picBrampton"}]}},components:{Experienceloop:n("VU/8")({props:["myPos"]},y,!1,function(e){n("ae0C")},"data-v-4625dcf6",null).exports}},g={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[this._m(0),this._v(" "),this._l(this.Experiences,function(e){return t("experienceloop",{attrs:{myPos:e}})})],2)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"experienceSpace"}},[t("h1",[this._v("Experience")])])}]};var C=n("VU/8")(_,g,!1,function(e){n("I4Q9")},"data-v-7662fd65",null).exports,w={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{"data-aos":"fade-up"}},[n("div",{staticClass:"border hvr-grow"},[n("div",{staticClass:"left",attrs:{id:e.myProject.pic}}),e._v(" "),n("div",{staticClass:"right"},[n("h5",[e._v(e._s(e.myProject.title))]),e._v(" "),n("p",[e._v(e._s(e.myProject.award))])])])])},staticRenderFns:[]};var b={data:function(){return{Projects:[{title:"Facebook Artificial Intelligence Hackathon: Sentimentally Postify",award:"A Python machine learning application developed to perform image recognition using the Google Cloud Vision API and post to matching Facebook groups using the Facebook Groups API. Implemented neural networks using PyTorch to work with React.js, Flask, JSON, and AJAX.",pic:"picFacebook"},{title:"Air Quality Analyzer Webapp",award:"A Vue.js Analyzer to compare and compute air qualities around the world. Developed in JavaScript, Vue.js, HTML, and CSS",pic:"picAir"},{title:"Angular Motion Mathematical Game",award:"A game in Java using object-oriented programming, data structures, and algorithms",pic:"picAngular"},{title:"Artificial Intelligence Mobile App for Workouts",award:"National Finalist in Medical Innovation by HOSA Canada",pic:"picHOSA"},{title:"Biometrics Bicycle Lock",award:"Provincial Finalist in Innovation by DECA Ontario",pic:"picDECA"}],stuff:"hello"}},components:{Projectsloop:n("VU/8")({props:["myProject"]},w,!1,function(e){n("o3a3")},"data-v-d9849b28",null).exports}},k={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[this._m(0),this._v(" "),this._l(this.Projects,function(e){return t("projectsloop",{attrs:{myProject:e}})})],2)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"projectSpace"}},[t("h1",[this._v("Projects")])])}]};var P={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("Programming Languages I work with")]),e._v(" "),n("div",{staticClass:"row"},e._l(e.myLanguages,function(e){return n("i",{directives:[{name:"tippy",rawName:"v-tippy"},{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",modifiers:{reset:!0}}],staticClass:"column",class:e.icon,attrs:{content:e.name}})}),0),e._v(" "),n("h3",[e._v("Tools I work with")]),e._v(" "),n("div",{staticClass:"row"},e._l(e.myTools,function(e){return n("i",{directives:[{name:"tippy",rawName:"v-tippy"},{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",modifiers:{reset:!0}}],staticClass:"column",class:e.icon,attrs:{content:e.name}})}),0)])},staticRenderFns:[]};var A={data:function(){return{userName:{first:"Jayant",last:"Mehta"}}},components:{Intro:h,Experience:C,Projects:n("VU/8")(b,k,!1,function(e){n("Stnj")},"data-v-12615f52",null).exports,Languages:n("VU/8")({data:function(){return{myLanguages:[{icon:"devicon-cplusplus-plain colored",name:"C++"},{icon:"devicon-java-plain-wordmark colored",name:"Java"},{icon:"devicon-python-plain-wordmark colored",name:"Python"},{icon:"devicon-ruby-plain-wordmark colored",name:"Ruby"},{icon:"devicon-javascript-plain colored",name:"JavaScript"}],myTools:[{icon:"devicon-react-original-wordmark colored",name:"React.js"},{icon:"devicon-docker-plain-wordmark colored",name:"Docker"},{icon:"devicon-facebook-plain colored",name:"Facebook for Developers"},{icon:"devicon-google-plain-wordmark colored",name:"Google Cloud Platform"},{icon:"devicon-nodejs-plain-wordmark colored",name:"Node.js"},{icon:"devicon-vuejs-plain-wordmark colored",name:"Vue.js"},{icon:"devicon-webpack-plain colored",name:"Webpack"},{icon:"devicon-photoshop-plain colored",name:"PhotoShop"}]}}},P,!1,function(e){n("gn37")},"data-v-6af98c24",null).exports}},E={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("intro",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",modifiers:{reset:!0}}],attrs:{myName:this.userName}}),this._v(" "),t("languages"),this._v(" "),t("experience"),this._v(" "),t("projects")],1)},staticRenderFns:[]};var M={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",modifiers:{reset:!0}}]},[n("h2",[e._v("My Biography")]),e._v(" "),n("p",[e._v(" I am currently studying Systems Design Engineering at the University of Waterloo.\r\n        With a passion for programming, I like to work on projects that allow me to express my creativity.")]),e._v(" "),n("ul",e._l(e.myAwards,function(t){return n("li",[e._v(e._s(t.description)+" "+e._s(t.dates))])}),0)]),e._v(" "),n("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",modifiers:{reset:!0}}]},[n("h2",[e._v("Community Involvement")]),e._v(" "),n("ul",e._l(e.myCommunity,function(t){return n("li",[e._v(e._s(t.description)+" "+e._s(t.dates))])}),0)])])},staticRenderFns:[]};var S={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h2",[this._v("My Resume")]),this._v(" "),t("a",{attrs:{href:"../../../static/JayantMehtaResume.pdf"}},[this._v("Please click here to access my resume")])])}]};var j=[{path:"/",component:n("VU/8")(A,E,!1,function(e){n("aYjv")},"data-v-2a5fb6a3",null).exports},{path:"/about",component:n("VU/8")({data:function(){return{myCommunity:[{description:"SHAD Ambassador",dates:"(Sep. 2018 - Present)"},{description:"DECA President",dates:"(Sep. 2015 - Jun. 2019)"},{description:"PEO Oakville Chapter National Engineering Month Conference Coordinator",dates:"(Mar. 2016 - Mar. 2019)"},{description:"Milton District Hospital Computer Information Desk Volunteer",dates:"(Jan. 2017 - Apr. 2019)"},{description:"S.T.E.M. Executive Diector of Technology, Engineering Lead",dates:"(Sep. 2016 - Jun. 2019)"},{description:"H.O.S.A Executive Diector",dates:"(May 2018 - Jun. 2019)"},{description:"Community Living North Halton Program Coordiantor Volunteer",dates:"(Sep. 2015 - Dec. 2018)"}],myAwards:[{description:"Schulich Leader National Scholarship Award - University of Toronto Engineering Science",dates:"(Apr. 2019)"},{description:"SHAD Fellow",dates:"(Jul. 2018)"},{description:"Nationals Finalist in Medical Innovation - H.O.S.A. Canada",dates:"(Mar. 2019)"},{description:"Provincials Finalist in Innovation - DECA Ontario",dates:"(Feb. 2018)"}]}}},M,!1,function(e){n("6S+O")},"data-v-d6736824",null).exports},{path:"/resume",component:n("VU/8")({},S,!1,function(e){n("remS")},"data-v-603edc84",null).exports}],I=n("Ubyc"),N=n.n(I),F=n("4t5/"),x=n.n(F),R=n("RInU"),D=n.n(R),J=(n("AhPL"),n("CRpV"));a.a.use(J.a),a.a.use(m.a),a.a.use(N.a),a.a.use(x.a),D.a.init(),a.a.config.productionTip=!1;var V=new m.a({mode:"history",routes:j});new a.a({el:"#app",router:V,components:{App:p},template:"<App/>"})},QJGY:function(e,t){},Stnj:function(e,t){},WP0I:function(e,t){},XhPT:function(e,t){},aYjv:function(e,t){},ae0C:function(e,t){},gn37:function(e,t){},hLxy:function(e,t){},iH77:function(e,t){},o3a3:function(e,t){},remS:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.7d62e4eb91f79ee91a53.js.map