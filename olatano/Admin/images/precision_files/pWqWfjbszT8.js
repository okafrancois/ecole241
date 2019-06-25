if (self.CavalryLogger) { CavalryLogger.start_js(["LMKJE"]); }

__d("CommentVoteReactionType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({NONE:0,UPVOTE:1,DOWNVOTE:2})}),null);
__d("CommentVoteUIVersion",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({NONE:"none",INSIDE_BLING_BAR:"inside_bling_bar",VERTICAL_ON_THE_SIDE:"vertical_on_the_side"})}),null);
__d("FeedbackActionType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CHANGE_ACCEPTED_ANSWER:"fa-type:change-accepted-answer",COMMENT_LIKE:"fa-type:comment-like",COMMENT_REACTION:"fa-type:comment-reaction",COMMENT_SET_SPAM:"fa-type:mark-spam",COMMENT_KEEP_SPAM:"fa-type:keep_spam",COMMENT_APPEAL_SPAM:"fa-type:appeal_spam",COMMENT_SECURE_ACCOUNT:"fa-type:secure_account",COMMENT_VOTE:"fa-type:comment_vote",DELETE_COMMENT:"fa-type:delete-comment",DELETE_COMMENT_REMOVE_COMMENTER:"fa-type:delete_comment_remove_commenter",DISABLE_COMMENTS:"fa-type:disable-comments",LIVE_DELETE_COMMENT:"fa-type:live-delete-comment",LIKE_ACTION:"fa-type:like",SUBSCRIBE_ACTION:"fa-type:subscribe",SHARE_COUNT_UPDATE_ACTION:"fa-type:share_count_update",REMOVE_PREVIEW:"fa-type:remove-preview",MARK_COMMENT_SPAM:"fa-type:mark-spam",MUTE_MEMBER:"fa-type:mute-member",CONFIRM_COMMENT_REMOVAL:"fa-type:confirm-remove",TRANSLATE_COMMENT:"fa-type:translate-comment",TRANSLATE_ALL:"fa-type:translate-all-comments",COMMENT_LIKECOUNT_UPDATE:"fa-type:comment-likecount-update",ADD_COMMENT_ACTION:"fa-type:add-comment",REACTION:"fa-type:reaction",UPDATE_CONSTITUENT_BADGE:"fa-type:comment_update_constituent_title",COMMENT_AUTHOR_PIN_CHANGE:"fa-type:comment_author_pin_change"})}),null);
__d("FeedbackPayloadSourceType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({UNKNOWN:0,INITIAL_SERVER:1,LIVE_SEND:2,USER_ACTION:3,STREAMING:4,COLLAPSE_ACTION:7,ENDPOINT_LIKE:10,ENDPOINT_COMMENT_LIKE:11,ENDPOINT_ADD_COMMENT:12,ENDPOINT_EDIT_COMMENT:13,ENDPOINT_DELETE_COMMENT:14,ENDPOINT_HIDE_COMMENT:16,ENDPOINT_REMOVE_PREVIEW:17,ENDPOINT_ID_COMMENT_FETCH:18,ENDPOINT_COMMENT_FETCH:19,ENDPOINT_TRANSLATE_COMMENT:20,ENDPOINT_BAN:21,ENDPOINT_SUBSCRIBE:22,ENDPOINT_COMMENT_LIKECOUNT_UPDATE:23,ENDPOINT_DISABLE_COMMENTS:24,ENDPOINT_ACTOR_CHANGE:25,ENDPOINT_REACTION:26,ENDPOINT_PAGES_MODERATION:27,ENDPOINT_COMMENT_REACTION:28,ENDPOINT_COMMENT_ANSWER_ACCEPT:29,ENDPOINT_COMMENT_KEEP_SPAM:30,ENDPOINT_COMMENT_APPEAL_SPAM:31,ENDPOINT_COMMENT_SECURE_ACCOUNT:32,ENDPOINT_DELETE_COMMENT_AND_REMOVE_COMMENTER:33,ENTPOINT_MUTE_MEMBER:34,ENDPOINT_SUBSCRIBE_COMMENT:35,ENDPOINT_HIDE_TEXT_DELIGHTS:36,ENDPOINT_SEND_MESSAGE:37,ENDPOINT_COMMENT_VOTE:38,ENDPOINT_AUTHOR_PINNED_COMMENT:39,ENDPOINT_DELETE_COMMENT_WTH_FEEDBACK:40})}),null);
__d("UFIPaging",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({TOP:"top",BOTTOM:"bottom",ALL:"all"})}),null);
__d("UFIStatus",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({DELETED:"status:deleted",SPAM:"status:spam",SPAM_DISPLAY:"status:spam-display",LIVE_DELETED:"status:live-deleted",FAILED_ADD:"status:failed-add",FAILED_EDIT:"status:failed-edit",PENDING_EDIT:"status:pending-edit"})}),null);
__d("UFIConstants",["FeedbackActionType","CommentVoteReactionType","CommentVoteUIVersion","UFIFeedbackMode","FeedbackSourceType","FeedbackPayloadSourceType","UFIStatus","UFIPaging"],(function(a,b,c,d,e,f){"use strict";a=80;c={UFIActionType:b("FeedbackActionType"),UFICommentVoteType:b("CommentVoteReactionType"),UFICommentVoteUIVersion:b("CommentVoteUIVersion"),UFIFeedbackMode:b("UFIFeedbackMode"),UFIFeedbackSourceType:b("FeedbackSourceType"),UFIPayloadSourceType:b("FeedbackPayloadSourceType"),UFIStatus:b("UFIStatus"),UFIPaging:b("UFIPaging"),attachmentTruncationLength:a,commentTruncationLength:420,commentTruncationMaxLines:3,commentTruncationPercent:.6,commentURLTruncationLength:60,infiniteScrollRangeForQANDAPermalinks:1e3,maxScrollDistanceForAutoScroll:60,minCommentsForOrderingModeSelector:1,unavailableCommentKey:"unavailable_comment_key"};e.exports=c}),null);
__d("UFIInstanceActionType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CHANGE_ORDER_MODE:"story_change_order_mode",CHANGE_VISIBILITY:"story_change_visibility",INIT:"instance_init",PLAY_LIVE_VOD_HIGHLIGHTS:"play_live_vod_highlights",RECEIVED_VOD_COMMENTS:"received_vod_comments",REMOVE:"story_remove",REQUESTED_VOD_COMMENTS:"requested_vod_comments",TOGGLE_COMMENTS:"story_toggle_comments",TOGGLE_COMMERCIAL_BREAK:"story_toggle_commercial_break",TRANSLATE_ALL:"translate_all",FOUND_VIDEO_PLAYER_CONTROLLER:"found_video_player_controller"})}),null);
__d("UFIInstanceAction",["UFIInstanceActionType"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={changeOrderingMode:function(a,c){return{type:b("UFIInstanceActionType").CHANGE_ORDER_MODE,instanceID:a.instanceid,ftentidentifier:a.ftentidentifier,mode:c}},toggleComments:function(a){return{type:b("UFIInstanceActionType").TOGGLE_COMMENTS,instanceID:a.instanceid,ftentidentifier:a.ftentidentifier}},changeCommentListVisibility:function(a,c){return{type:b("UFIInstanceActionType").CHANGE_VISIBILITY,instanceID:a.instanceid,ftentidentifier:a.ftentidentifier,visibility:c}},init:function(a,c){return{type:b("UFIInstanceActionType").INIT,instanceID:a.instanceid,ftentidentifier:a.ftentidentifier,payload:c}},didRequestVODComments:function(a){return{type:b("UFIInstanceActionType").REQUESTED_VOD_COMMENTS,instanceID:a.instanceid,ftentidentifier:a.ftentidentifier}},didReceiveVODComments:function(a){return{type:b("UFIInstanceActionType").RECEIVED_VOD_COMMENTS,instanceID:a.instanceid,ftentidentifier:a.ftentidentifier}},remove:function(a){return{type:b("UFIInstanceActionType").REMOVE,instanceID:a.instanceid,ftentidentifier:a.ftentidentifier}},toggleCommercialBreak:function(a,c){return{type:b("UFIInstanceActionType").TOGGLE_COMMERCIAL_BREAK,instanceID:a.instanceid,ftentidentifier:a.ftentidentifier,inCommercial:c}},translateAll:function(a){return{type:b("UFIInstanceActionType").TRANSLATE_ALL,instanceID:a.instanceid,ftentidentifier:a.ftentidentifier}},playLiveVODHighlights:function(a,c){return{type:b("UFIInstanceActionType").PLAY_LIVE_VOD_HIGHLIGHTS,instanceID:a.instanceid,ftentidentifier:a.ftentidentifier,playingLiveVODHighlights:c}},foundVideoPlayerController:function(a,b){return{ftentidentifier:a.ftentidentifier,instanceID:a.instanceid,videoPlayerController:b,type:"found_video_player_controller"}}};e.exports=a}),null);
__d("UFIRange",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a,b){a===void 0&&(a=0),b===void 0&&(b=0),this.offset=a,this.length=b,this.requestedOffset=this.offset,this.requestedLength=this.length}g.prototype.getOffset=function(){return this.offset};g.prototype.getLength=function(){return this.length};g.prototype.getRequestedOffset=function(){return this.requestedOffset};g.prototype.getRequestedLength=function(){return this.requestedLength};g.prototype.updateRequestedRange=function(a,b){this.requestedOffset=a;this.requestedLength=b;return this};g.prototype.isLoadingNext=function(){var a=this.requestedOffset+this.requestedLength,b=this.offset+this.length;return a>b};g.prototype.isLoadingPrev=function(){return this.requestedOffset<this.offset};g.combine=function(a,b){__p&&__p();if(!b)return a;var c=Math.min(a.getOffset(),b.getOffset());a=Math.max(a.getLength(),b.getLength());var d=new g(c,a);if(b.getRequestedLength()>0){var e=Math.min(c,b.getRequestedOffset());c=Math.max(c+a,b.getRequestedOffset()+b.getRequestedLength());d.updateRequestedRange(e,c-e)}return d};e.exports=g}),null);
__d("UFIFeedbackStore",["FluxReduceStore","UFIDispatcherBase","UFIInstanceActionType"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("FluxReduceStore"));g&&g.prototype;a.prototype.getInitialState=function(){return{}};a.prototype.reduce=function(a,c){var d;switch(c.type){case b("UFIInstanceActionType").INIT:var e=c.payload;e=e.feedbacktarget?e.feedbacktarget:e.feedbacktargets&&e.feedbacktargets[0];return!e?a:babelHelpers["extends"]({},a,(d={},d[c.ftentidentifier]=babelHelpers["extends"]({orderingmodes:[],defaultcommentorderingmode:""},e),d))}return a};function a(){g.apply(this,arguments)}a.__moduleID=e.id;e.exports=new a(b("UFIDispatcherBase"))}),null);
__d("UFIOrderingModeStore",["invariant","FluxReduceStore","UFIDispatcherBase","UFIFeedbackStore","UFIInstanceActionType","WebCommentViewOption"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;function i(a,b){return a.filter(function(a){return a.selected}).map(function(a){return a.value}).pop()||b}h=babelHelpers.inherits(a,b("FluxReduceStore"));h&&h.prototype;a.prototype.getInitialState=function(){return new Map()};a.prototype.areEqual=function(a,b){return a===b};a.prototype.isLiveStreaming=function(a){return this.getState().get(a)==b("WebCommentViewOption").LIVE_STREAMING};a.prototype.isInverted=function(a,c){__p&&__p();var d=!1;c=b("UFIFeedbackStore").getState()[c];if(c){c=c.orderingmodes.filter(function(a){return a.selected}).pop();c&&(d=c.isBottomUpVideoCommentSreamingEnabled)}switch(a){case b("WebCommentViewOption").RECENT_ACTIVITY:case b("WebCommentViewOption").RANKED_THREADED:case b("WebCommentViewOption").RANKED_UNFILTERED:case b("WebCommentViewOption").LIVE_STREAMING:return!d}return!1};a.prototype.getOrderingMode=function(a){a=this.getState().get(a);a!==void 0||g(0,2896);return a};a.prototype.reduce=function(a,c){__p&&__p();switch(c.type){case b("UFIInstanceActionType").INIT:if(a.has(c.instanceID))return a;b("UFIDispatcherBase").waitFor([b("UFIFeedbackStore").getDispatchToken()]);var d=b("UFIFeedbackStore").getState()[c.ftentidentifier];a=new Map(a);return a.set(c.instanceID,i(d.orderingmodes,d.defaultcommentorderingmode));case b("UFIInstanceActionType").CHANGE_ORDER_MODE:(!a.has(c.instanceID)||a.get(c.instanceID)!==c.mode)&&(a=new Map(a),a.set(c.instanceID,c.mode));return a}return a};function a(){h.apply(this,arguments)}a.__moduleID=e.id;e.exports=new a(b("UFIDispatcherBase"))}),null);
__d("UFIPager.react",["cx","LeftRight.react","React","SutroBlingBarGatingConfig","UFIImageBlock.react","XUISpinner.react","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=h.constructor).call.apply(a,[this].concat(d)),this.onPagerClick=function(a){!this.props.isLoading&&this.props.onPagerClick&&this.props.onPagerClick(),a.nativeEvent.prevent()}.bind(this),b}a.prototype.render=function(){var a=this.onPagerClick,c=b("SutroBlingBarGatingConfig").enabled,d=b("joinClasses")("UFIRow"+(this.props.isUnseen?" UFIUnseenItem":"")+" UFIPagerRow _4oep"+(this.props.isFirstCommentComponent?" _48pi":"")+(this.props.isLastCommentComponent?" UFILastCommentComponent":"")+(this.props.isFirstComponent||c&&this.props.isFirstCommentComponent?" _4204":"")+(this.props.isLastComponent?" _2o9m":"")),e=null;this.props.isLoading&&(e=b("React").createElement(b("XUISpinner.react"),{className:"mls",background:"light",size:"small"}));e=b("React").createElement("a",{className:"UFIPagerLink",onClick:a,href:"#",role:"button"},this.props.pagerLabel,e);var f="fcg UFIPagerCount";c=c&&b("React").createElement("span",{className:f},this.props.countSentence);this.props.contextArgs.entstream||!this.props.isReply?f=b("React").createElement(b("LeftRight.react"),{direction:b("LeftRight.react").DIRECTION.right},e,c):f=b("React").createElement(b("UFIImageBlock.react"),null,b("React").createElement("a",{className:"UFIPagerIcon",onClick:a,href:"#",role:"button"}),e,c);return b("React").createElement("div",{className:d,"data-ft":this.props["data-ft"]},f)};e.exports=a}),null);
__d("UFIPagerLabel",["fbt","NumberFormat"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(a){return b("NumberFormat").formatInteger(a.count)}var i={VIEW_ONE:"view_one",VIEW_ONE_MORE:"view_one_more",VIEW_ALL:"view_all",VIEW_MORE_EXPLICIT:"view_more_explicit",VIEW_MORE:"view_more",VIEW_PREVIOUS:"view_previous",VIEW_PREVIOUS_EXPLICIT:"view_previous_explicit",_getReplyLabel:function(a,b){switch(a){case i.VIEW_ONE:return g._("Afficher 1 r\u00e9ponse");case i.VIEW_ONE_MORE:return g._("Afficher une autre r\u00e9ponse");case i.VIEW_ALL:return g._({"*":"Voir les {count} r\u00e9ponses"},[g._param("count",h(b),[0,b.count])]);case i.VIEW_MORE_EXPLICIT:return g._({"*":{"*":"Afficher {count} autres r\u00e9ponses","_1":"Voir {count} autre r\u00e9ponse"}},[g._param("count",h(b),[0,b.count]),g._plural(b.count)]);case i.VIEW_MORE:return g._("Voir plus de r\u00e9ponses");case i.VIEW_PREVIOUS:return g._("Voir les r\u00e9ponses pr\u00e9c\u00e9dentes");case i.VIEW_PREVIOUS_EXPLICIT:return g._({"*":{"*":"Voir {count} r\u00e9ponses pr\u00e9c\u00e9dentes","_1":"Voir {count} r\u00e9ponse pr\u00e9c\u00e9dente"}},[g._param("count",h(b),[0,b.count]),g._plural(b.count)]);default:return null}},_getCommentLabel:function(a,b){switch(a){case i.VIEW_ONE:return g._("Voir 1 commentaire");case i.VIEW_ONE_MORE:return g._("Afficher 1 autre commentaire");case i.VIEW_ALL:return g._({"*":"Afficher les {count} commentaires"},[g._param("count",h(b),[0,b.count])]);case i.VIEW_MORE_EXPLICIT:return g._({"*":{"*":"Afficher {count} autres commentaires","_1":"Voir {count} autre commentaire"}},[g._param("count",h(b),[0,b.count]),g._plural(b.count)]);case i.VIEW_MORE:return g._("Voir plus de commentaires");case i.VIEW_PREVIOUS_EXPLICIT:return g._({"*":{"*":"Voir {count} commentaires pr\u00e9c\u00e9dents","_1":"Voir {count} commentaire pr\u00e9c\u00e9dent"}},[g._param("count",h(b),[0,b.count]),g._plural(b.count)]);case i.VIEW_PREVIOUS:return g._("Voir les commentaires pr\u00e9c\u00e9dents");default:return null}},_getCommentLabelWithHiddenCommentCount:function(a,b){switch(a){case i.VIEW_ONE:return g._("Voir les commentaires");case i.VIEW_ALL:return g._("Afficher tous les commentaires");case i.VIEW_ONE_MORE:case i.VIEW_MORE_EXPLICIT:case i.VIEW_MORE:return g._("Afficher plus de commentaires");case i.VIEW_PREVIOUS_EXPLICIT:case i.VIEW_PREVIOUS:return g._("See previous comments");default:return null}},_getQuestionLabel:function(a,b){switch(a){case i.VIEW_ONE:return g._("Afficher une question");case i.VIEW_ONE_MORE:return g._("Afficher une autre question");case i.VIEW_ALL:return g._({"*":"Afficher les {count} questions"},[g._param("count",h(b),[0,b.count])]);case i.VIEW_MORE_EXPLICIT:return g._({"*":{"*":"Afficher {count} questions suppl\u00e9mentaires","_1":"Voir {count} autre question"}},[g._param("count",h(b),[0,b.count]),g._plural(b.count)]);case i.VIEW_MORE:return g._("Afficher plus de questions");case i.VIEW_PREVIOUS:return g._("Afficher les questions pr\u00e9c\u00e9dentes");case i.VIEW_PREVIOUS_EXPLICIT:return g._({"*":{"*":"Voir {count} questions pr\u00e9c\u00e9dentes","_1":"Voir {count} question pr\u00e9c\u00e9dente"}},[g._param("count",h(b),[0,b.count]),g._plural(b.count)]);default:return null}},_getAnswerLabel:function(a,b){switch(a){case i.VIEW_ONE:return g._("Afficher 1 r\u00e9ponse");case i.VIEW_ONE_MORE:return g._("Voir 1 r\u00e9ponse suppl\u00e9mentaire");case i.VIEW_ALL:return g._({"*":"Voir les {count} r\u00e9ponses"},[g._param("count",h(b),[0,b.count])]);case i.VIEW_MORE_EXPLICIT:return g._({"*":{"*":"Voir {count} r\u00e9ponses suppl\u00e9mentaires","_1":"Voir {count} r\u00e9ponse suppl\u00e9mentaire"}},[g._param("count",h(b),[0,b.count]),g._plural(b.count)]);case i.VIEW_MORE:return g._("Voir plus de r\u00e9ponses");case i.VIEW_PREVIOUS_EXPLICIT:return g._({"*":{"*":"Voir les {count} r\u00e9ponses pr\u00e9c\u00e9dentes","_1":"Voir {count} r\u00e9ponse pr\u00e9c\u00e9dente"}},[g._param("count",h(b),[0,b.count]),g._plural(b.count)]);case i.VIEW_PREVIOUS:return g._("Voir les r\u00e9ponses pr\u00e9c\u00e9dentes");default:return null}},getLabel:function(a,b,c){if(b)return i._getReplyLabel(a,c);else return c.hideCount?i._getCommentLabelWithHiddenCommentCount(a,c):i._getCommentLabel(a,c)}};e.exports=i}),null);
__d("UFIPagerGenerator",["fbt","NumberFormat","React","TrackingNodes","UFIConstants","UFIOrderingModeStore","UFIPager.react","UFIPagerLabel","UFIRange"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("UFIConstants").UFIPaging;a={isBottomPager:function(a,c,d){return b("UFIOrderingModeStore").isInverted(c,d)&&!a},needsStartOfRangePager:function(a){return a>0},renderPagers:function(a){__p&&__p();var c=a.commentCount,d=a.contextArgs,e=a.currentLength,f=a.currentOffset,i=a.deletedCount,j=a.feedback,k=a.hideCount,l=a.onPageCallback,m=a.orderingMode,n=a.range;a=a.targetID;var o=c-i;i=e-i;var p=a!==d.ftentidentifier,q=this.isBottomPager(p,m,a);m={topPager:null,bottomPager:null};var r=n.isLoadingPrev();n=n.isLoadingNext();k={count:0,hideCount:k};var s=f+e==c;if(c<d.pagesize&&s||i===0){var t=Math.min(c,d.pagesize);s=function(){return l(q?h.BOTTOM:h.TOP,new(b("UFIRange"))(c-t,t))};var u;i===0?o==1?u=b("UFIPagerLabel").VIEW_ONE:(k.count=o,u=b("UFIPagerLabel").VIEW_ALL):o-i==1?u=b("UFIPagerLabel").VIEW_ONE_MORE:(u=b("UFIPagerLabel").VIEW_MORE_EXPLICIT,k.count=o-i);var v=b("TrackingNodes").getTrackingInfo(b("TrackingNodes").types.VIEW_ALL_COMMENTS);u=b("UFIPagerLabel").getLabel(u,p,k);j=b("React").createElement(b("UFIPager.react"),{key:"allPager"+a,ref:q?"topLevelBottomPager":null,contextArgs:d,isUnseen:j.hasunseencollapsed,isLoading:q?n:r,isReply:p,pagerLabel:u,onPagerClick:s,"data-ft":v});q?m.bottomPager=j:m.topPager=j;return m}u=b("UFIPagerLabel").getLabel(b("UFIPagerLabel").VIEW_MORE,p,k);s=b("UFIPagerLabel").getLabel(b("UFIPagerLabel").VIEW_PREVIOUS,p,k);if(this.needsStartOfRangePager(f)){var w=Math.max(f-d.pagesize,0),x=f+e-w,y;if(!p||i>1){v=b("NumberFormat").formatInteger(i);j=b("NumberFormat").formatInteger(o);y=g._("{countshown}\/{totalcount}",[g._param("countshown",v),g._param("totalcount",j)])}k=function(){return l(q?h.BOTTOM:h.TOP,new(b("UFIRange"))(w,x))};q?m.bottomPager=b("React").createElement(b("UFIPager.react"),{key:"bottomPager"+a,ref:p?null:"topLevelBottomPager",contextArgs:d,isLoading:r,isReply:p,pagerLabel:u,onPagerClick:k,countSentence:y}):m.topPager=b("React").createElement(b("UFIPager.react"),{key:"topPager"+a,contextArgs:d,isLoading:r,isReply:p,pagerLabel:s,onPagerClick:k,countSentence:y})}if(f+e<c){var z=Math.min(e+d.pagesize,c-f);i=function(){return l(q?h.TOP:h.BOTTOM,new(b("UFIRange"))(f,z))};q?m.topPager=b("React").createElement(b("UFIPager.react"),{key:"topPager"+a,contextArgs:d,isLoading:n,isReply:p,pagerLabel:s,onPagerClick:i}):m.bottomPager=b("React").createElement(b("UFIPager.react"),{key:"bottomPager",ref:p?null:"topLevelBottomPager",contextArgs:d,isLoading:n,isReply:p,pagerLabel:u,onPagerClick:i})}return m}};e.exports=a}),null);
__d("UFICommentFilterFallbackWarning.react",["cx","fbt","React","UFIPagerGenerator","UFIPaging","WebCommentViewOption","distinctArrayBy"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;function j(a,c,d){var e=c.availableComments;c=c.repliesMap;d?d=c[a]||[]:d=e||[];d=b("distinctArrayBy")(d,function(a){return a.id});return d.length}i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.shouldRender=function(a,c,d,e){__p&&__p();if(!a)return!1;var f=a.availableComments,g=a.commentCounts,h=a.deletedCounts,i=a.hasPagedToplevel,k=a.orderingMode,l=a.ranges,m=a.repliesExpandedMap,n=a.repliesMap;if(!f||!g||!h||!k||!l||!m||!n)return!1;f=Math.max((g[c]||0)-(h[c]||0),0);n=l[c];if(!n||!f||k!==b("WebCommentViewOption").RANKED_THREADED||e&&!m[c]||!e&&!i)return!1;g=j(c,a,e);h=n.isLoadingPrev();l=n.isLoadingNext();m=n.getOffset();i=n.getLength();a=b("UFIPagerGenerator").isBottomPager(e,k,c);n=Math.min(i,f);if(d===b("UFIPaging").ALL)return!h&&!l&&m===0&&i>=f&&g<n;else if(!a&&d===b("UFIPaging").TOP||a&&d===b("UFIPaging").BOTTOM)return!h&&m===0&&g<n;else if(!a&&d===b("UFIPaging").BOTTOM||a&&d===b("UFIPaging").TOP)return!l&&m+i>=f&&g<n;return!1};a.prototype.$1=function(){__p&&__p();var a=this.props,b=a.asReplyWarning;a=a.ufiProps;a=a||{};var c=a.feedback,d=a.orderingMode;a=c&&c.orderingmodes||[];c=a.find(function(a){return a&&a.value===d});a=c&&c.name;if(b)if(a)return h._("{ordering mode name} est s\u00e9lectionn\u00e9, certaines r\u00e9ponses ont peut-\u00eatre \u00e9t\u00e9 filtr\u00e9es.",[h._param("ordering mode name",a)]);else return h._("Certaines r\u00e9ponses ont peut-\u00eatre \u00e9t\u00e9 filtr\u00e9es par le mode de classement s\u00e9lectionn\u00e9.");else if(a)return h._("{ordering mode name} est s\u00e9lectionn\u00e9, certains commentaires ont peut-\u00eatre \u00e9t\u00e9 filtr\u00e9s.",[h._param("ordering mode name",a)]);else return h._("Certains commentaires ont peut-\u00eatre \u00e9t\u00e9 filtr\u00e9s par le mode de classement s\u00e9lectionn\u00e9.")};a.prototype.render=function(){var a=this.props,c=a.ufiProps,d=a.targetID,e=a.pagingDirection;a=a.asReplyWarning;return!this.constructor.shouldRender(c,d,e,a)?null:b("React").createElement("div",{className:"_2ah8 _4oep UFIRow"},b("React").createElement("div",{className:"_2ah9"},this.$1()))};function a(){i.apply(this,arguments)}e.exports=a}),null);
__d("CommentPrelude",["BanzaiODS","CSS","FBLogger","Parent","clickRefAction","ifRequired"],(function(a,b,c,d,e,f){__p&&__p();function g(a,c){if(a==="ufi.react"||a==="ufi_mentions_input.react"||a==="ufi_controller"||a==="action_link_bling"||a==="action_link_timeline_bling")return;b("FBLogger")("ufi").warn("Deprecated CommentPrelude action %s called from ref %s",c||"unknown",a||"unknown");b("BanzaiODS").bumpEntityKey("comment_prelude",a)}function a(a,c,d){g(d,"click");var e=b("Parent").byTag(a,"form");if(!e||!b("CSS").hasClass(e,"collapsible_comments"))return;b("clickRefAction")("ufi",a,null,"FORCE");return h(a,c,d)}function h(a,c,d){__p&&__p();g(d,"expand");a=b("Parent").byTag(a,"form");if(!a||!b("CSS").hasClass(a,"collapsible_comments"))return;i(a,d);if(c!==!1){var e=a.add_comment_text_text||a.add_comment_text;d=e.length;d&&(!b("Parent").byClass(e[d-1],"UFIReplyList")?e=e[d-1]:!b("Parent").byClass(e[0],"UFIReplyList")?e=e[0]:e=null);e&&(e.focus(),b("ifRequired")("FbFeedCommentUFIScroller",function(a){return a.reveal(e)}))}return!1}function i(a,c){g(c,"uncollapse");if(!a||!b("CSS").hasClass(a,"collapsible_comments"))return;var d=b("CSS").removeClass.bind(null,a,"collapsed_comments");b("ifRequired")("ScrollAwareDOM",function(b){return b.monitor(a,d)},function(){return d()})}function c(a){var c=a.getAttribute("data-comment-prelude-ref");g(c,"blingbox");c=b("Parent").byTag(a,"form");if(!c||!b("CSS").hasClass(c,"collapsible_comments"))return;b("CSS").toggleClass(c,"collapsed_comments")}d={click:a,expand:h,uncollapse:i,onBlingboxClick:c,logRef:g};e.exports=d}),null);