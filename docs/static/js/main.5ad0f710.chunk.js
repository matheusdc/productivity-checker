(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),o=a(2),s=a.n(o),l=(a(14),a(3)),r=a(4),c=a(6),u=a(5),m=a(7),d=function(){return n.a.createElement("div",{id:"about",className:"about"},n.a.createElement("h1",null,"About..."),n.a.createElement("p",null,"This website can send you an alert that would ask about if you are productive at that moment."),n.a.createElement("p",null,"This simple interruption gives you awareness of what you are doing and its importance, and will help you to stop procrastinating or prioritizing more you tasks."),n.a.createElement("p",null,"This is a simple productivity tip that I learn from"," ",n.a.createElement("a",{href:"https://www.amazon.com/Produtividade-Para-Tempo-Portugues-Brasil/dp/8545200978/ref=sr_1_1"},"this book")," ","that did an incredible productivity boost on my daily activities."),n.a.createElement("p",null,"Future versions of this website will allow users to download and use as an offline app on Android devices."))},f=function(e){var t=e.setNofiticationAlert,a=e.disableNotificationAlerts,i=e.isActive,o=i?"Turn off notifications":"Turn on notifications";return n.a.createElement("div",{className:"banner"},n.a.createElement("div",{className:"header"},n.a.createElement("span",null,"Are you"),n.a.createElement("span",null,"productive"),n.a.createElement("span",null,"right now?")),n.a.createElement("div",{className:"controls"},n.a.createElement("button",{className:"button white",onClick:function(){i?a():t()}},o)))},p=function(e){var t=e.handleMessageUpdate,a=e.handleTimeUpdate,i=e.setNofiticationAlert,o=e.disableNotificationAlerts;return n.a.createElement("div",{id:"customize",className:"configuration"},n.a.createElement("h1",null,"Customize..."),n.a.createElement("div",{className:"line"},n.a.createElement("label",null,"How would you like to be notified?"),n.a.createElement("input",{onChange:t,className:"input",type:"text",placeholder:"Notification message"})),n.a.createElement("div",{className:"line"},n.a.createElement("label",null,"After how many minutes would you like to be notified?"),n.a.createElement("input",{onChange:a,className:"input",type:"text",placeholder:"60"})),n.a.createElement("div",{className:"line"},n.a.createElement("button",{className:"button margin-right",type:"button",onClick:i},"Save and activate :)"),n.a.createElement("button",{className:"button margin-right",type:"button",onClick:o},"Turn off notifications :(")))},h=function(){return n.a.createElement("div",{id:"testimonials",className:"testimonials"},n.a.createElement("h1",null,"Testimonials..."),n.a.createElement("p",null,"Did this tool help you? Send me a message and I will post it here!!"))},v=(a(16),function(e){function t(){var e,a;Object(l.a)(this,t);for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={message:"Are you productive right now?",timeInMinutes:60,active:!1},a.notifyUser=function(e){return new Notification("Productivity Checker",{body:e})},a.setupNotificationAlerts=function(){var e=a.state.timeInMinutes;a.disableNotificationAlerts(),a.setNofiticationAlert(e),a.setState({active:!0})},a.requestNotificationPermission=function(){return Notification.requestPermission()},a.setNofiticationAlert=function(){var e=a.state,t=e.timeInMinutes,i=e.message,n=60*t*1e3;a.notifyUser("Preferences saved!"),a.setState({active:!0}),a.productivityAlertInterval=setInterval(function(){a.notifyUser(i)},n)},a.disableNotificationAlerts=function(){clearInterval(a.productivityAlertInterval),a.setState({active:!1}),a.notifyUser("Preferences saved!")},a.isAlertActive=function(){return a.state.active},a.handleTimeUpdate=function(e){var t=e.target.value;a.setState({timeInMinutes:t})},a.handleMessageUpdate=function(e){var t=e.target.value;a.setState({message:t})},a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentWillUnmount",value:function(){this.disableNotificationAlerts()}},{key:"render",value:function(){return this.requestNotificationPermission(),n.a.createElement("div",{className:"App"},n.a.createElement(f,{setNofiticationAlert:this.setNofiticationAlert,disableNotificationAlerts:this.disableNotificationAlerts,isActive:this.state.active}),n.a.createElement(d,null),n.a.createElement(p,{handleMessageUpdate:this.handleMessageUpdate,handleTimeUpdate:this.handleTimeUpdate,setNofiticationAlert:this.setNofiticationAlert,disableNotificationAlerts:this.disableNotificationAlerts}),n.a.createElement(h,null))}}]),t}(i.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.5ad0f710.chunk.js.map