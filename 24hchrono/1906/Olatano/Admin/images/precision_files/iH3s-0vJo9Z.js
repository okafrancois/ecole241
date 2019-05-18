if (self.CavalryLogger) { CavalryLogger.start_js(["yJdlO"]); }

__d("XPlaceClaimLogEntryPointController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pages/place_claim/log_entry_point/",{})}),null);
__d("PlaceClaimLogEntryPoint",["AsyncRequest","Event","XPlaceClaimLogEntryPointController"],(function(a,b,c,d,e,f){a={init:function(a,c,d){b("Event").listen(a,"click",function(){this.sendLoggingRequest(c,d)}.bind(this))},initMenu:function(a,b,c,d){a.subscribe("itemclick",function(a,e){e.item.getValue()==b&&this.sendLoggingRequest(c,d)}.bind(this))},sendLoggingRequest:function(a,c){var d=b("XPlaceClaimLogEntryPointController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(d).setData({pageid:a,pageevent:c}).setMethod("POST").send()}};e.exports=a}),null);
__d("SaveState",[],(function(a,b,c,d,e,f){a=Object.freeze({SAVING:"saving",SAVED:"saved",UNSAVING:"unsaving",UNSAVED:"unsaved"});e.exports=a}),null);
__d("SaveStateHandler",["Run","SaveState"],(function(a,b,c,d,e,f){__p&&__p();var g=null;function h(){"use strict";this.$1={},this.$2={},b("Run").onLeave(function(){g=null})}h.prototype.addListener=function(a,b){"use strict";this.$1[a]||(this.$1[a]=[]),this.$1[a].push(b)};h.prototype.setState=function(a,b){"use strict";a.forEach(function(a){this.$2[a]=b;if(!this.$1[a])return;a=this.$1[a];a.forEach(function(a){try{a.call(window,b)}catch(a){}})},this)};h.prototype.getState=function(a){"use strict";return this.$2[a]};h.$3=function(){"use strict";g||(g=new h());return g};h.listen=function(a,b){"use strict";this.$3().addListener(a,b)};h.getState=function(a){"use strict";this.$3().getState(a)};h.saving=function(a){"use strict";this.$3().setState(a,b("SaveState").SAVING)};h.saved=function(a){"use strict";this.$3().setState(a,b("SaveState").SAVED)};h.unsaving=function(a){"use strict";this.$3().setState(a,b("SaveState").UNSAVING)};h.unsaved=function(a){"use strict";this.$3().setState(a,b("SaveState").UNSAVED)};h.isSaveAction=function(a){"use strict";a=this.$3().getState(a);return a==b("SaveState").UNSAVED||a==b("SaveState").UNSAVING};e.exports=h}),null);
__d("CurationToggleButton",["cx","CSS","Event","SaveState","SaveStateHandler","tidyEvent"],(function(a,b,c,d,e,f,g){__p&&__p();var h="_vu",i="_vv";function a(a,c,d,e,f){"use strict";__p&&__p();this.$1=!1,this.$2=f,b("tidyEvent")([b("Event").listen(c,"click",this.setSaving.bind(this)),b("Event").listen(c,"error",this.setUnsaved.bind(this)),b("Event").listen(d,"click",this.setUnsaving.bind(this)),b("Event").listen(d,"error",this.setSaved.bind(this))]),b("SaveStateHandler").listen(e,function(e){__p&&__p();switch(e){case b("SaveState").SAVING:b("CSS").addClass(a,h);b("CSS").addClass(a,i);d.setAttribute("rel","");this.$1=!0;break;case b("SaveState").SAVED:b("CSS").addClass(a,h);b("CSS").removeClass(a,i);d.setAttribute("rel","async-post");this.$1=!1;break;case b("SaveState").UNSAVING:b("CSS").removeClass(a,h);b("CSS").addClass(a,i);c.setAttribute("rel","");this.$1=!0;break;case b("SaveState").UNSAVED:b("CSS").removeClass(a,h);b("CSS").removeClass(a,i);c.setAttribute("rel","async-post");this.$1=!1;break}}.bind(this))}a.prototype.setSaving=function(){"use strict";this.$1||b("SaveStateHandler").saving(this.$2)};a.prototype.setUnsaving=function(){"use strict";this.$1||b("SaveStateHandler").unsaving(this.$2)};a.prototype.setSaved=function(){"use strict";b("SaveStateHandler").saved(this.$2)};a.prototype.setUnsaved=function(){"use strict";b("SaveStateHandler").unsaved(this.$2)};e.exports=a}),null);
__d("SavedForLaterChromeExtensionInstallLink",["Banzai","Event","TimelineInHouseAppCollections","guid","tidyEvent"],(function(a,b,c,d,e,f){__p&&__p();var g="chrome_extension_install_link",h="saved_for_later:click",i="https://chrome.google.com/webstore/detail/",j="jmfikkaogpplgnfjmbjdpalkhclendgd";function a(a,c){"use strict";var d=document.createElement("link");d.rel="chrome-webstore-item";d.href=i+j;document.head.appendChild(d);b("tidyEvent")(b("Event").listen(a,"click",function(a){b("Banzai").post(h,{collection_id:b("TimelineInHouseAppCollections").SAVED_ALL,surface:c,mechanism:g,event_id:b("guid")()},{delay:0,retry:!0}),window.chrome&&window.chrome.webstore&&window.chrome.webstore.install()}))}e.exports=a}),null);
__d("XSavedForLaterNUXSeenController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/saved/nuxseen/",{action:{type:"Enum",enumType:1},surface:{type:"Enum",enumType:1},mechanism:{type:"Enum",enumType:1},collection_id:{type:"Enum",enumType:0},object_id:{type:"Int"},interaction_time:{type:"Int"}})}),null);
__d("SavedForLaterChromeExtensionToastNux",["AsyncRequest","Banzai","DataStore","Event","SavedForLaterChromeExtensionInstallLink","TimelineInHouseAppCollections","XSavedForLaterNUXSeenController","guid","tidyEvent"],(function(a,b,c,d,e,f){__p&&__p();var g="saved_for_later:click",h="impression",i="story",j="chrome_extension_toast_nux",k="SavedForLaterChromeExtensionToastNux",l="chrome_extension_install_link";function a(a,c){"use strict";b("DataStore").set(a,k,this),b("tidyEvent")(b("Event").listen(c,"click",function(a){b("Banzai").post(g,{surface:i,mechanism:l,event_id:b("guid")()},{delay:0,retry:!0})}))}a.onDisplay=function(a){"use strict";a=b("DataStore").get(a,k);if(!a)return;new(b("AsyncRequest"))(b("XSavedForLaterNUXSeenController").getURIBuilder().setEnum("action",h).setEnum("surface",i).setEnum("mechanism",j).setEnum("collection_id",b("TimelineInHouseAppCollections").SAVED_ALL).getURI()).setMethod("POST").send()};e.exports=a}),null);
__d("SaveCaretMenuItem",["csx","cx","AdsTransparencyReportAdTypedLogger","Banzai","CSS","DOM","DOMQuery","EntstreamFeedObject","EntstreamFeedObjectFollowup","Event","MenuItem","SavedForLaterChromeExtensionToastNux","SaveState","SaveStateHandler","ge"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i,j="saved_for_later:caret_action",k="imp",l="._22la";c=babelHelpers.inherits(a,b("MenuItem"));i=c&&c.prototype;function a(a){"use strict";i.constructor.call(this,a),this._data=this._updateData(),this.getRoot(),b("Event").listen(this._anchor,"error",this.handleError.bind(this)),b("SaveStateHandler").listen(a.primarysaveid,function(a){this._data=this._updateData(),this._doRender(a)}.bind(this))}a.prototype.handleClick=function(){"use strict";__p&&__p();var a=i.handleClick.call(this),c=babelHelpers["extends"]({},this._data),d=b("EntstreamFeedObject").getRoot(b("ge")(this._data.storydomid));if(this._data.isSaveAction){b("SaveStateHandler").saving(this._data.allsaveids);var e=this._data.savefollowupmarkup;this._data.chromeextensionnuxmarkup.hasChildNodes()&&(e=this._data.chromeextensionnuxmarkup,b("SavedForLaterChromeExtensionToastNux").onDisplay(e));if(d){var f=b("DOM").scry(d,"._5va1");if(f&&f.length>0){f=f[0];f&&(d=f)}b("EntstreamFeedObjectFollowup").addFollowup(d,e,["_521o","_4-u3","_3yll"]);f=b("DOMQuery").scry(d,l);if(f.length>0){e=new CustomEvent("savedShow");f[0].dispatchEvent(e)}}}else{b("SaveStateHandler").unsaving(this._data.allsaveids);f=b("EntstreamFeedObjectFollowup").getFollowup(d);f&&b("EntstreamFeedObjectFollowup").removeFollowup(d)}c.logdata.ad_impression&&new(b("AdsTransparencyReportAdTypedLogger"))().setAdID(c.logdata.ad_id).setEvent(c.logdata.event).setEntity(c.logdata.report_entity).setProductLocation(c.logdata.report_location).setSessionID(c.logdata.impression_session_id).setAdsPageType(c.logdata.ads_page_type).log();return a};a.prototype.handleError=function(){"use strict";this._data.isSaveAction?b("SaveStateHandler").saved(this._data.allsaveids):b("SaveStateHandler").unsaved(this._data.allsaveids)};a.prototype._updateData=function(){"use strict";var a=babelHelpers["extends"]({},this._data);a.isSaveAction=b("SaveStateHandler").isSaveAction(a.primarysaveid);a.isSaveAction?(a.markup=a.savemarkup,a.ajaxify=a.saveajaxify,a.title=a.savetitle):(a.markup=a.unsavemarkup,a.ajaxify=a.unsaveajaxify,a.title=a.unsavetitle);return a};a.prototype._doRender=function(a){"use strict";__p&&__p();if(!this._root)return;switch(a){case b("SaveState").SAVING:case b("SaveState").UNSAVING:b("CSS").addClass(this._root,"_5arm");window.setTimeout(this.disable.bind(this),10);break;case b("SaveState").SAVED:case b("SaveState").UNSAVED:b("CSS").removeClass(this._root,"_5arm");window.setTimeout(this.enable.bind(this),10);break}b("DOM").replace(this._anchor,this._renderItemContent());b("Event").listen(this._anchor,"error",this.handleError.bind(this))};a.prototype.onShow=function(){"use strict";var a=this._data.logdata;b("Banzai").post(j,{action:k,surface:a.surface,story_id:a.story_id,is_save:this._data.isSaveAction})};e.exports=a}),null);