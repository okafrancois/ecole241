if (self.CavalryLogger) { CavalryLogger.start_js(["75ZDT"]); }

__d("VideoPlaybackExperienceIssueType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({AUDIO_VIDEO_SYNC:"audio_video_sync",VIDEO_ONLY_STUTTER:"video_only_stutter",AUDIO_VIDEO_STUTTER:"audio_video_stutter",BLACK_SCREEN:"black_screen",VIDEO_WONT_PLAY:"video_wont_play"})}),null);
__d("XVideoPlaybackExperienceReportController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/videos/playback_report/",{video_id:{type:"FBID",required:!0},issue_type:{type:"String",required:!0},is_live:{type:"Int"},playback_timestamp:{type:"Int"}})}),null);
__d("VideoSettingsMenu.react",["ix","cx","fbt","AsyncRequest","BUISwitch.react","ClickableAreaButton.react","Image.react","Layout.react","Link.react","MessengerEnvironment","React","Selector.react","URI","VideoPlaybackExperienceIssueType","VideoPlayerShakaPerformanceLogger","XUIButton.react","XVideoPlaybackExperienceReportController","asset","gkx","isFacebookURI","shallowCompare"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j,k=b("Layout.react").Column,l=b("Layout.react").FillColumn,m=b("Selector.react").Option;c=b("React").PropTypes;var n=/(instagram)/g;j=babelHelpers.inherits(a,b("React").Component);j&&j.prototype;a.prototype.shouldComponentUpdate=function(a,c){"use strict";return b("shallowCompare")(this,a,c)};a.prototype.UNSAFE_componentWillMount=function(){"use strict";this.setState({autoSelectVideoQuality:!this.props.preferredQuality&&this.props.canAutoSelectVideoQuality,currentMenuContext:"main",feedbackSubmitted:!1})};a.prototype.createMenuItem=function(a,c,d,e,f,g){__p&&__p();g===void 0&&(g=!1);var h=function(){};c&&(h=function(a){e(),a.preventDefault()});var i="_2iw4"+(c?"":" _4t7o"),j;if(f==="checkBox"){var k=null;c&&d&&(k=b("React").createElement("div",{className:"_2iw1"}));j=b("React").createElement("div",{className:"_2iw3"},k)}else if(f==="radioButton"){k=null;c&&d&&(k=b("React").createElement("div",{className:"_4t7r"}));j=b("React").createElement("div",{className:"_4t7u"},k)}k=a;g&&(k=b("React").createElement("div",null,a.slice(0,-1),b("React").createElement("div",{className:"_4t7w"})));return b("React").createElement("a",{href:"#",key:a,className:i,onClick:h,tabIndex:this.props.tabIndex,"aria-checked":d?"true":"false",role:f==="radioButton"?"radio":"checkbox","aria-disabled":!c},j,b("React").createElement("div",{className:"_2iw5"+(d?"":" _4t8e")},k))};a.prototype.$1=function(){"use strict";var a=this.props,c=a.hasSubtitles,d=a.areSubtitlesActive;a=a.areSubtitlesAutogenerated;if(!c)return null;c=i._("Sous-titres");var e="_1x4f";a&&b("gkx")("678905")&&(c=i._("Sous-titres [Automatiques]"),e="_1x4f _6m2q");return b("React").createElement(b("Layout.react"),{"aria-checked":d,className:"_2iw4 _1x4e"},b("React").createElement(l,null,c),b("React").createElement(k,null,b("React").createElement("div",{className:e},b("React").createElement(b("BUISwitch.react"),{animate:!0,showLabel:!0,value:d,onToggle:this.props.onToggleSubtitles,tabIndex:this.props.tabIndex}))))};a.prototype.showQualitySelector=function(){"use strict";return this.props.showQualitySelector&&this.props.streamingFormat==="dash"&&!!this.props.availableQualities&&this.props.availableQualities.length>=this.props.qualitySelectorMinStreams&&this.props.availableQualities.every(function(a){return!!a})};a.prototype.$2=function(){"use strict";return b("React").createElement(b("Link.react"),{"aria-label":"Back",role:"button",onClick:function(){return this.setState({currentMenuContext:"main",currentFeedbackSelected:null,feedbackSubmitted:!1})}.bind(this)},b("React").createElement(b("Image.react"),{className:"_4t8f",src:g("480579")}))};a.prototype.$3=function(){"use strict";var a=i._("Autres param\u00e8tres vid\u00e9os"),c=new(b("URI"))("/settings/?tab=videos"),d=c.getQualifiedURI().getSubdomain();(d==="business"||d==="partners")&&c.setSubdomain("www");b("isFacebookURI")(c)||c.setDomain(c.getDomain().replace(n,"facebook"));b("MessengerEnvironment").messengerui&&c.setDomain("facebook.com").setSubdomain(d).setProtocol("https");return b("React").createElement("a",{href:c,target:"_blank",className:"_4t9q _2iw4",tabIndex:this.props.tabIndex},a)};a.prototype.$4=function(){"use strict";return b("React").createElement(b("Selector.react"),{name:"feedback_selector",onChange:function(a){this.setState({currentFeedbackSelected:a.value?a.value:null})}.bind(this),defaultValue:0},b("React").createElement(m,{value:0},i._("Quel est le probl\u00e8me avec cette vid\u00e9o\u00a0?")),b("React").createElement(m,{value:b("VideoPlaybackExperienceIssueType").AUDIO_VIDEO_SYNC},i._("Image et son d\u00e9synchronis\u00e9s")),b("React").createElement(m,{value:b("VideoPlaybackExperienceIssueType").VIDEO_ONLY_STUTTER},i._("Vid\u00e9o saccad\u00e9e")),b("React").createElement(m,{value:b("VideoPlaybackExperienceIssueType").AUDIO_VIDEO_STUTTER},i._("Image et son saccad\u00e9s")),b("React").createElement(m,{value:b("VideoPlaybackExperienceIssueType").BLACK_SCREEN},i._("\u00c9cran noir")),b("React").createElement(m,{value:b("VideoPlaybackExperienceIssueType").VIDEO_WONT_PLAY},i._("La vid\u00e9o ne se lance pas")))};a.prototype.$5=function(){"use strict";if(this.state.currentFeedbackSelected){var a=b("XVideoPlaybackExperienceReportController").getURIBuilder().setString("issue_type",this.state.currentFeedbackSelected).setFBID("video_id",this.props.videoID).setInt("is_live",this.props.isLive?1:0).getURI();new(b("AsyncRequest"))(a).send();this.setState({feedbackSubmitted:!0});b("VideoPlayerShakaPerformanceLogger").setVideoPlaybackExperienceIssue(this.state.currentFeedbackSelected)}};a.prototype.render=function(){"use strict";__p&&__p();var a=null,c=null,d=null,e=null;this.showQualitySelector()&&this.props.availableQualities?(a=this.props.availableQualities.map(function(a){return this.createMenuItem(a,!0,a===this.props.selectedQuality&&!this.state.autoSelectVideoQuality,function(){this.setState({autoSelectVideoQuality:!1}),this.props.onSelectQuality(a)}.bind(this),"radioButton",this.props.isSphericalVideo)}.bind(this)),a.push(this.createMenuItem(i._("Auto"),this.props.canAutoSelectVideoQuality,this.state.autoSelectVideoQuality,function(){this.setState({autoSelectVideoQuality:!0}),this.props.onSelectQuality(null)}.bind(this),"radioButton")),a.reverse(),c=b("React").createElement(b("ClickableAreaButton.react"),{onClick:function(){return this.setState({currentMenuContext:"quality"})}.bind(this),label:"Change Quality"},b("React").createElement("div",{className:"_2iw4 _4t9t"},b("React").createElement(b("Layout.react"),null,b("React").createElement(l,null,i._("Qualit\u00e9")),b("React").createElement(k,{className:"_4t9u"},this.state.autoSelectVideoQuality?i._("Auto"):null," ",b("React").createElement("span",null,this.props.selectedQuality),b("React").createElement(b("Image.react"),{className:"_4t9v",src:g("480587")})))))):e=this.createMenuItem(i._("HD"),this.props.hasHD,this.props.isHD,this.props.onToggleHD,"checkBox");(this.props.isLive||b("gkx")("678906"))&&(d=b("React").createElement(b("Link.react"),{onClick:function(){return this.setState({currentMenuContext:"feedback"})}.bind(this),className:"_2iw4 _4t9w"},b("React").createElement(b("Layout.react"),null,b("React").createElement(l,null,i._("Signaler un probl\u00e8me de vid\u00e9o")),b("React").createElement(k,{className:"_4t9u"},b("React").createElement(b("Image.react"),{className:"_4t9v",src:g("480587")})))));var f=null;switch(this.state.currentMenuContext){case"main":f=b("React").createElement("div",{className:"_2i_x"},e,this.$1(),c,this.$3(),d);break;case"quality":f=b("React").createElement("div",{className:"_2i_x"},b("React").createElement("div",{className:"_4t9q"},this.$2(),i._("Qualit\u00e9")),b("React").createElement("div",{className:"_4t9z",role:"radiogroup"},a));break;case"feedback":f=b("React").createElement("div",{className:"_2i_x"},b("React").createElement("div",{className:"_4t9q"},this.$2(),i._("Signaler un probl\u00e8me de vid\u00e9o")),b("React").createElement("div",{className:"_4t9z"},this.state.feedbackSubmitted?null:this.$4(),this.state.feedbackSubmitted?b("React").createElement("div",{className:"_4t9-"},i._("Merci de votre commentaire.")):b("React").createElement("div",{className:"_4ta3"},b("React").createElement(b("XUIButton.react"),{disabled:!this.state.currentFeedbackSelected,label:i._("Envoyer"),use:"confirm",onClick:this.$5.bind(this)}))));break}return b("React").createElement("div",{className:"_2i_w"},f,b("React").createElement("div",{className:"_2j03"}))};function a(){"use strict";j.apply(this,arguments)}a.propTypes={areSubtitlesActive:c.bool,areSubtitlesAutogenerated:c.bool,hasHD:c.bool,hasSubtitles:c.bool,isHD:c.bool,isLive:c.bool,isSphericalVideo:c.bool,onToggleHD:c.func,onToggleSubtitles:c.func,tabIndex:c.string,availableQualities:c.array,selectedQuality:c.string,preferredQuality:c.string,canAutoSelectVideoQuality:c.bool,onSelectQuality:c.func,showQualitySelector:c.bool,qualitySelectorMinStreams:c.number,streamingFormat:c.string};a.defaultProps={tabIndex:"-1",availableQualities:null,selectedQuality:null,preferredQuality:null,canAutoSelectVideoQuality:!1,showQualitySelector:!1,qualitySelectorMinStreams:2,streamingFormat:null,onSelectQuality:function(){}};e.exports=a}),null);
__d("VideoSettingsControl.react",["ix","cx","fbt","AbstractButton.react","BanzaiODS","ClickableArea.react","Image.react","React","TooltipData","TrackingNodes","VideoPlayerExperiments","VideoSettingsMenu.react","asset","gkx","shallowCompare"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j;c=b("React").PropTypes;var k=720,l=2160,m=14,n=15;d=babelHelpers.inherits(a,b("React").Component);j=d&&d.prototype;function a(a){"use strict";j.constructor.call(this,a),this.state={isFocus:!1}}a.prototype.shouldComponentUpdate=function(a,c){"use strict";return b("shallowCompare")(this,a,c)};a.prototype.onClick=function(){"use strict";!this.state.isFocus&&!this.props.disabled&&this.refs.menu&&this.refs.menu.showQualitySelector()&&b("BanzaiODS").bumpEntityKey("videos","quality_selector.impression"),this.setState(function(a){return{isFocus:!a.isFocus}}),this.props.onSettingsClick&&this.props.onSettingsClick()};a.prototype.getHDIndicator=function(){"use strict";__p&&__p();var a=b("VideoPlayerExperiments").showHDIndicator&&!this.props.isInline&&this.props.selectedQuality&&(this.props.selectedQuality=="HD"||parseInt(this.props.selectedQuality,10)>=k);if(!a)return null;if(!b("gkx")("678901")){a=null;parseInt(this.props.selectedQuality,10)>=l?a="4K":a="HD";return b("React").createElement("span",{className:"_132c"},a)}a=null;parseInt(this.props.selectedQuality,10)>=l?a=b("React").createElement(b("Image.react"),{src:"/images/4k_filled_12-1.5x.png",alt:"4k",height:m,width:n}):a=b("React").createElement(b("Image.react"),{src:"/images/hd_filled_12-1.5x.png",alt:"hd",height:m,width:n});return b("React").createElement("span",{className:"_3pyk"},a)};a.prototype.render=function(){"use strict";var a=b("React").createElement(b("Image.react"),{className:"_rwt",src:g("391244")}),c=i._("Param\u00e8tres visuels suppl\u00e9mentaires"),d=null;!this.props.disabled&&this.state.isFocus&&(d=b("React").createElement("div",{className:"_2iw7"+(this.state.isFocus?" _2iw8":"")},b("React").createElement(b("VideoSettingsMenu.react"),{areSubtitlesActive:this.props.areSubtitlesActive,areSubtitlesAutogenerated:this.props.areSubtitlesAutogenerated,hasHD:this.props.hasHD,hasSubtitles:this.props.hasSubtitles,isHD:this.props.isHD,isLive:this.props.isLive,isSphericalVideo:this.props.isSphericalVideo,onToggleHD:this.props.onToggleHD,onToggleSubtitles:this.props.onToggleSubtitles,tabIndex:this.props.tabIndex,availableQualities:this.props.availableQualities,selectedQuality:this.props.selectedQuality,preferredQuality:this.props.preferredQuality,canAutoSelectVideoQuality:this.props.canAutoSelectVideoQuality,onSelectQuality:this.props.onSelectQuality,showQualitySelector:this.props.showQualitySelector,qualitySelectorMinStreams:this.props.qualitySelectorMinStreams,streamingFormat:this.props.streamingFormat,videoID:this.props.videoID,ref:"menu"})));var e=this.getHDIndicator(),f="_zbd"+(this.props.disabled?" _132h":""),h=i._("Param\u00e8tres");f=b("React").createElement(b("AbstractButton.react"),{className:f,disabled:this.props.disabled,image:a,label:c,labelIsHidden:!0,ref:"button",tabIndex:this.props.tabIndex,type:"button"});a=b("TrackingNodes").getTrackingInfo(b("TrackingNodes").types.VIDEO_SETTINGS);return b("React").createElement("div",{className:"_2j04","data-ft":a},d,b("React").createElement(b("ClickableArea.react"),babelHelpers["extends"]({},b("TooltipData").propsFor(h,"above"),{onClick:this.onClick.bind(this)}),b("React").createElement("div",null,f,e)))};a.propTypes={disabled:c.bool,hasHD:c.bool,hasSubtitles:c.bool,isHD:c.bool,isInline:c.bool,isLive:c.bool,isSphericalVideo:c.bool,areSubtitlesActive:c.bool,areSubtitlesAutogenerated:c.bool,onToggleHD:c.func,onToggleSubtitles:c.func,tabIndex:c.string,availableQualities:c.array,selectedQuality:c.string,canAutoSelectVideoQuality:c.bool,onSelectQuality:c.func,showQualitySelector:c.bool,qualitySelectorMinStreams:c.number,streamingFormat:c.string};a.defaultProps={tabIndex:"-1"};e.exports=a}),null);