(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(9),s=a.n(l),o=(a(16),a(17),a(18),a(2)),r=a(3),c=a(5),u=a(4),m=a(1),h=a(6),d={Cheerful:{value:4,icon:"1f601",action:"rubberBand"},Happy:{value:3,icon:"1f606",action:"tada"},Calm:{value:2,icon:"1f607",action:"rotateInUpLeft"},Good:{value:1,icon:"1f600",action:"slideInRight"},Neutral:{value:0,icon:"1f610",action:"slideInRight"},Sad:{value:-1,icon:"1f622",action:"fadeInLeft"},Annoyed:{value:-2,icon:"1f612",action:"wobble"},Frustrated:{value:-3,icon:"1f624",action:"pulse"},Angry:{value:-4,icon:"1f621",action:"shake"}},v=[],g=[];for(var f in d)v[d[f].value]=d[f],v[d[f].value].name=f,g.push(d[f].value);var b=d,p=a(8),E=function(){this.saveEmotion=function(e){var t=new Date,a=p(t,"yyyy-m-d"),n=localStorage.getItem(a);null==n&&(n=""),n+=e+",";try{localStorage.setItem(a,n)}catch(i){22===i.code&&(this.freeUpSpace(),this.saveEmotion(e))}},this.getAllEmotion=function(){var e=[];for(var t in localStorage)localStorage.getItem(t)&&(e[t]=localStorage.getItem(t).split(","));return e},this.getEmotion=function(e){var t=localStorage.getItem(e);return null==t&&(t=""),t=t.split(",")},this.freeUpSpace=function(){var e=this.getAllEmotion(),t=[];for(var a in e)t.push(a);(t=t.sort())[0]&&localStorage.removeItem(t[0])},this.clear=function(){var e=this.getAllEmotion();for(var t in e)localStorage.removeItem(t)}},y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).db=new E,a.state={selected_element:null,animate_class:""},a.saveEmotion=a.saveEmotion.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"saveEmotion",value:function(e){e.preventDefault();var t=e.target;"IMG"===t.tagName&&(t=t.parentElement.parentElement),"SPAN"===t.tagName&&(t=t.parentElement),this.db.saveEmotion(t.value),this.setState({selected_element:t.getAttribute("data-key"),animate_class:"animated  "+t.getAttribute("data-action")}),t.className="animated heartBeat"}},{key:"render",value:function(){var e=[];for(var t in b)e.push(i.a.createElement("li",{"data-key":t,key:t,value:b[t].value,"data-action":b[t].action,onClick:this.saveEmotion},i.a.createElement("span",null,i.a.createElement("img",{src:"https://pawnesh.github.io/mood-swings-tracker/images/"+b[t].icon+".svg",alt:t})),t));var a=null;return null!=this.state.selected_element&&(a=i.a.createElement("div",{className:"selected-element"},i.a.createElement("h3",null,"Entery saved!"),i.a.createElement("span",{className:this.state.animate_class},i.a.createElement("img",{src:"https://pawnesh.github.io/mood-swings-tracker/images/"+b[this.state.selected_element].icon+".svg",alt:t})),this.state.selected_element),e=null),i.a.createElement("div",{className:"emotions-list"},a,i.a.createElement("ul",null,e),i.a.createElement("div",{className:"clear"}))}}]),t}(i.a.Component),k=(a(19),a(8)),w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={today:null,week:null,month:null},a.db=new E,a.updateState=a.updateState.bind(Object(m.a)(a)),a.restart=a.restart.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.db.getAllEmotion(),t=[];for(var a in e)t.push(a);var n=[],i=new Date;a=k(i,"yyyy-m-d");this.db.getEmotion(a).forEach(function(e){v[e]&&n.push(v[e])});for(var l=[],s=0;s<7;s++){(i=new Date).setDate(i.getDate()-s);a=k(i,"yyyy-m-d");var o=this.db.getEmotion(a),r=0;if(null!=o&&(0!=o.length&&""!=o[0])){o.forEach(function(e){e&&(r+=parseInt(e))}),r/=o.length;var c=g.reduce(function(e,t){return Math.abs(t-r)<Math.abs(e-r)?t:e});l.push(v[c])}}console.log(l);var u=[];for(s=0;s<30;s++){(i=new Date).setDate(i.getDate()-s);a=k(i,"yyyy-m-d"),o=this.db.getEmotion(a),r=0;if(null!=o&&(0!=o.length&&""!=o[0])){o.forEach(function(e){e&&(r+=parseInt(e))}),r/=o.length;c=g.reduce(function(e,t){return Math.abs(t-r)<Math.abs(e-r)?t:e});u.push(v[c])}}this.updateState(n,l,u)}},{key:"updateState",value:function(e,t,a){var n=e||this.state.today,i=t||this.state.week,l=a||this.state.month;this.setState({today:n,week:i,month:l})}},{key:"getAverageTag",value:function(e){var t=e;g.includes(t)||(t=g.reduce(function(t,a){return Math.abs(a-e)<Math.abs(t-e)?a:t}));var a=v[t];return i.a.createElement("div",{className:"average"},i.a.createElement("img",{src:"https://pawnesh.github.io/mood-swings-tracker/images/"+a.icon+".svg",alt:a.name}),i.a.createElement("br",null),a.name)}},{key:"getBlock",value:function(e,t){var a=[],n=0;e.forEach(function(e,l){a.push(i.a.createElement("img",{src:"https://pawnesh.github.io/mood-swings-tracker/images/"+e.icon+".svg",alt:e.name,key:e.name+l+t})),n+=parseInt(e.value)});n/=e.length;return i.a.createElement("div",{className:"block",key:"block"+t},i.a.createElement("header",{className:"header"},i.a.createElement("h3",null,t)),i.a.createElement("div",{className:"content"},a),i.a.createElement("footer",null,this.getAverageTag(n)))}},{key:"restart",value:function(){window.confirm("This will delete all the logs?")&&this.db.clear()}},{key:"render",value:function(){var e=[];if(this.state.today&&this.state.today.length>0){var t=this.getBlock(this.state.today,"Today");e.push(t)}if(this.state.week&&this.state.week.length>0){t=this.getBlock(this.state.week,"Week");e.push(t)}if(this.state.month&&this.state.month.length>0){t=this.getBlock(this.state.month,"Month");e.push(t)}return 0==e.length&&(e=i.a.createElement("div",{class:"center"},i.a.createElement("img",{src:"https://pawnesh.github.io/mood-swings-tracker/images/1f34a.svg",alt:"empty log book"}),i.a.createElement("br",null),"Empty Logs")),i.a.createElement("div",{className:"dashboard"},e,i.a.createElement("button",{className:"restart",onClick:this.restart},"Start Fresh"))}}]),t}(i.a.Component),S=(a(20),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={activeTab:0},a.tabClick=a.tabClick.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"tabClick",value:function(e){e.preventDefault();var t=e.target.getAttribute("data-index");this.setState({activeTab:t})}},{key:"render",value:function(){var e=[],t=null,a=this,n="animated slideInLeft";return this.props.tabs.forEach(function(l,s){var o="";a.state.activeTab==s&&(o="active",t=l.element,"animated slideInLeft"===n&&(n="animated slideInRight")),e.push(i.a.createElement("li",{key:l.name,"data-index":s,className:o,onClick:a.tabClick},l.name))}),i.a.createElement("div",{className:"switcher"},i.a.createElement("header",null,i.a.createElement("ul",{className:"items"},e)),i.a.createElement("div",null,t))}}]),t}(i.a.Component));var j=function(){return i.a.createElement(S,{tabs:[{name:"Home",element:i.a.createElement(y,null)},{name:"Logs",element:i.a.createElement(w,null)}]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.8f9a5ee5.chunk.js.map