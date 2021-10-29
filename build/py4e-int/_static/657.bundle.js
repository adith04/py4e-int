"use strict";(self.webpackChunkWebComponents=self.webpackChunkWebComponents||[]).push([[657],{2568:(e,t,o)=>{o.d(t,{Z:()=>n});var i=o(21294);class n{constructor(e){this.component_ready_promise=new Promise((e=>this._component_ready_resolve_fn=e)),this.optional=!1,void 0===window.allComponents&&(window.allComponents=[]),window.allComponents.push(this),e&&(this.sid=e.sid,this.graderactive=e.graderactive,this.showfeedback=!0,e.timed&&(this.isTimed=!0),e.enforceDeadline&&(this.deadline=e.deadline),$(e.orig).data("optional")?this.optional=!0:this.optional=!1,e.selector_id&&(this.selector_id=e.selector_id),void 0!==e.assessmentTaken?this.assessmentTaken=e.assessmentTaken:this.assessmentTaken=!0,void 0!==e.timedWrapper?this.timedWrapper=e.timedWrapper:location.href.indexOf("doAssignment")>=0?this.timedWrapper=$("h1#assignment_name").text():this.timedWrapper=null,$(e.orig).data("question_label")&&(this.question_label=$(e.orig).data("question_label"))),this.jsonHeaders=new Headers({"Content-type":"application/json; charset=utf-8",Accept:"application/json"})}async logBookEvent(e){if(this.graderactive)return;let t;return e.course=eBookConfig.course,e.clientLoginStatus=eBookConfig.isLoggedIn,e.timezoneoffset=(new Date).getTimezoneOffset()/60,this.percent&&(e.percent=this.percent),eBookConfig.useRunestoneServices&&eBookConfig.logLevel>0&&(t=this.postLogMessage(e)),this.isTimed&&!eBookConfig.debug||console.log("logging event "+JSON.stringify(e)),this.selector_id&&(e.div_id=this.selector_id.replace("-toggleSelectedQuestion",""),e.event="selectquestion",e.act="interaction",this.postLogMessage(e)),"function"==typeof i.j.updateProgress&&"edit"!=e.act&&0==this.optional&&i.j.updateProgress(e.div_id),t}async postLogMessage(e){var t;let o=new Request(eBookConfig.ajaxURL+"hsblog",{method:"POST",headers:this.jsonHeaders,body:JSON.stringify(e)});try{let e=await fetch(o);if(!e.ok)throw new Error("Failed to save the log entry");t=e.json()}catch(e){this.isTimed&&alert(`Error: Your action was not saved! The error was ${e}`),console.log(`Error: ${e}`)}return t}async logRunEvent(e){let t="done";if(!this.graderactive){if(e.course=eBookConfig.course,e.clientLoginStatus=eBookConfig.isLoggedIn,e.timezoneoffset=(new Date).getTimezoneOffset()/60,(this.forceSave||"to_save"in e==0)&&(e.save_code="True"),eBookConfig.useRunestoneServices&&eBookConfig.logLevel>0){let o=new Request(eBookConfig.ajaxURL+"runlog.json",{method:"POST",headers:this.jsonHeaders,body:JSON.stringify(e)}),i=await fetch(o);if(!i.ok)throw new Error("Failed to log the run");t=await i.json()}return this.isTimed&&!eBookConfig.debug||console.log("running "+JSON.stringify(e)),"function"==typeof i.j.updateProgress&&0==this.optional&&i.j.updateProgress(e.div_id),t}}async checkServer(e,t=!1){let o=this;if(this.checkServerComplete=new Promise((function(e,t){o.csresolver=e})),this.useRunestoneServices||this.graderactive){let t={};if(t.div_id=this.divid,t.course=eBookConfig.course,t.event=e,this.graderactive&&this.deadline&&(t.deadline=this.deadline,t.rawdeadline=this.rawdeadline,t.tzoff=this.tzoff),this.sid&&(t.sid=this.sid),!eBookConfig.practice_mode&&this.assessmentTaken){let e=new Request(eBookConfig.ajaxURL+"getAssessResults",{method:"POST",body:JSON.stringify(t),headers:this.jsonHeaders});try{let o=await fetch(e);t=await o.json(),this.repopulateFromStorage(t),this.csresolver("server")}catch(e){try{this.checkLocalStorage()}catch(e){console.log(e)}}}else this.loadData({}),this.csresolver("not taken")}else this.checkLocalStorage(),this.csresolver("local");t&&this.indicate_component_ready()}indicate_component_ready(){this.containerDiv.classList.add("runestone-component-ready"),this._component_ready_resolve_fn()}loadData(e){return null}repopulateFromStorage(e){null!==e&&this.shouldUseServer(e)?(this.restoreAnswers(e),this.setLocalStorage(e)):this.checkLocalStorage()}shouldUseServer(e){if("T"===e.correct||0===localStorage.length||!0===this.graderactive||this.isTimed)return!0;let t,o=localStorage.getItem(this.localStorageKey());if(null===o)return!0;try{t=JSON.parse(o)}catch(e){return console.log(e.message),localStorage.removeItem(this.localStorageKey()),!0}if(e.answer==t.answer)return!0;let i=new Date(t.timestamp);return new Date(e.timestamp)>=i}localStorageKey(){return eBookConfig.email+":"+eBookConfig.course+":"+this.divid+"-given"}addCaption(e){if(!this.isTimed){var t=document.createElement("p");this.question_label?(this.caption=`Activity: ${this.question_label} ${this.caption}  <span class="runestone_caption_divid">(${this.divid})</span>`,$(t).html(this.caption),$(t).addClass(`${e}_caption`)):($(t).html(this.caption+" ("+this.divid+")"),$(t).addClass(`${e}_caption`),$(t).addClass(`${e}_caption_text`)),this.capDiv=t,this.containerDiv.appendChild(t)}}hasUserActivity(){return this.isAnswered}checkCurrentAnswer(){console.log("Each component should provide an implementation of checkCurrentAnswer")}async logCurrentAnswer(){console.log("Each component should provide an implementation of logCurrentAnswer")}renderFeedback(){console.log("Each component should provide an implementation of renderFeedback")}disableInteraction(){console.log("Each component should provide an implementation of disableInteraction")}toString(){return`${this.constructor.name}: ${this.divid}`}queueMathJax(e){"2"===MathJax.version.substring(0,1)?MathJax.Hub.Queue(["Typeset",MathJax.Hub,e]):MathJax.typesetPromise([e])}}window.RunestoneBase=n},48657:(e,t,o)=>{o.r(t);var i=o(2568),n=[];class s extends i.Z{constructor(e){if(super(e),this.divid=e.orig.id,this.container=$(`#${this.divid}`),this.caption="YouTube",null==document.getElementById("youtubescript")){let e=document.createElement("script");e.id="youtubescript",e.src="https://www.youtube.com/player_api",document.body.appendChild(e)}this.containerDiv=this.container[0].parentElement,this.addCaption("runestone"),this.indicate_component_ready()}}window.onPlayerStateChange=function(e){let t=new i.Z,o=e.target.getCurrentTime(),n={event:"video",div_id:e.target.getIframe().id};e.data==YT.PlayerState.PLAYING?(console.log("playing "+e.target.getIframe().id),n.act="play:"+o):e.data==YT.PlayerState.ENDED?(console.log("ended "+e.target.getIframe().id),n.act="complete"):e.data==YT.PlayerState.PAUSED?(console.log("paused at "+o),n.act="pause:"+o):(console.log(`YT Player State: ${YT.PlayerState}`),n.act="ready"),t.logBookEvent(n)},window.onYouTubeIframeAPIReady=function(){$(".youtube-video").each((function(e,t){let o={};o.start=$(t).data("video-start"),-1!=$(t).data("video-end")&&(o.end=$(t).data("video-end")),new YT.Player($(t).data("video-divid"),{height:$(t).data("video-height"),width:$(t).data("video-width"),videoId:$(t).data("video-videoid"),playerVars:o,events:{onStateChange:window.onPlayerStateChange}})}))},$((function(){let e=document.createElement("script");e.src="https://www.youtube.com/player_api",document.body.appendChild(e)})),$(document).bind("runestone:login-complete",(function(){$("[data-component=youtube]").each((function(e){var t={orig:this,useRunestoneServices:eBookConfig.useRunestoneServices};n[this.id]=new s(t)}))})),void 0===window.component_factory&&(window.component_factory={}),window.component_factory.youtube=function(e){return new s(e)},window.component_factory.vimeo=function(e){return new s(e)}}}]);
//# sourceMappingURL=657.bundle.js.map?v=8b927c31db599696c54e