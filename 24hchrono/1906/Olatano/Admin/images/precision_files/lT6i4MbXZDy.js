if (self.CavalryLogger) { CavalryLogger.start_js(["npS02"]); }

__d("GroupSellProductDetailActionsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.$1={}}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:GroupSellProductDetailActionsLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:GroupSellProductDetailActionsLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:GroupSellProductDetailActionsLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setClientTimeStr=function(a){this.$1.client_time_str=a;return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setExceptionMessage=function(a){this.$1.exception_message=a;return this};a.prototype.setGroupID=function(a){this.$1.group_id=a;return this};a.prototype.setIsEmployee=function(a){this.$1.is_employee=a;return this};a.prototype.setReferralSurface=function(a){this.$1.referral_surface=a;return this};a.prototype.setStoryID=function(a){this.$1.story_id=a;return this};a.prototype.setSurface=function(a){this.$1.surface=a;return this};a.prototype.setTime=function(a){this.$1.time=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.setWeight=function(a){this.$1.weight=a;return this};a.prototype.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};var g={client_time_str:!0,event:!0,exception_message:!0,group_id:!0,is_employee:!0,referral_surface:!0,story_id:!0,surface:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("GroupSellProductDetailsEvent",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({PHOTO_CLICK:"photo_click",SHOW_DIALOG:"show_dialog",HIDE_DIALOG:"hide_dialog",PROFILE_LINK_CLICK:"profile_link_click",GROUP_LINK_CLICK:"group_link_click",PERMALINK_CLICK:"permalink_click",ASYNC_DATA_REQUEST_FAIL:"async_data_request_fail",DIALOG_INSTANCE_NULL:"dialog_instance_null",MESSAGE_SELLER_CLICK:"message_seller_click",UFI_CLICK:"ufi_click",MARK_AS_SOLD_CLICK:"mark_as_sold_click",FAILED_SALE_POST_GEN:"failed_sale_post_gen",PHOTO_SWIPE:"photo_swipe",GROUP_POST_LIKE:"group_post_like",GROUP_POST_COMMENT:"group_post_comment",SUGGESTED_ITEM_VPV:"suggested_item_vpv",SUGGESTED_ITEM_CLICK:"suggested_item_click",GROUP_POST_COMMENT_ERROR:"group_post_comment_error",GROUP_POST_COMMENT_TEXT_ENTERED:"group_post_comment_text_entered",GROUP_POST_COMMENT_INPUT_FOCUS:"group_post_comment_input_focus",GROUP_POST_COMMENT_WITH_PHOTO:"group_post_comment_with_photo",GROUP_POST_COMMENT_WITH_STICKER:"group_post_comment_with_sticker",GROUP_POST_COMMENT_INPUT_PREDICTIVE_TEXT_PRESS:"group_post_comment_input_predictive_text_press",GROUP_POST_SHARE_CLICK:"group_post_share_click",PDP_INITIAL_LOAD:"pdp_initial_load",PDP_NETWORK_FAILURE:"pdp_network_failure",PDP_RECOMMENDED_ITEMS_GRID_SEE_ALL_PRESS:"pdp_recommended_items_grid_see_all_press",PDP_RECOMMENDED_ITEMS_GRID_ITEM_PRESS:"pdp_recommended_items_grid_item_press",PDP_RECOMMENDED_ITEMS_HSCROLL_SEE_ALL_PRESS:"pdp_recommended_items_hscroll_see_all_press",PDP_RECOMMENDED_ITEMS_HSCROLL_ITEM_PRESS:"pdp_recommended_items_hscroll_item_press"})}),null);
__d("GroupSellProductDetailsImageAspect",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({HORIZONTAL:"horizontal",VERTICAL:"vertical",WIDE_HORIZONTAL:"wide_horizontal",WIDE_VERTICAL:"wide_vertical",SQUARE:"square",HEIGHT_BOUND:"height_bound"})}),null);
__d("GroupCommerceProductDetailImageContainer.react",["cx","DOM","Event","GroupSellProductDetailActionsTypedLogger","GroupSellProductDetailsEvent","GroupSellProductDetailsImageAspect","Image.react","React","ScaledImage.react","ScrollableArea.react","Style","Vector"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=38,j=483;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(a,c){__p&&__p();h.constructor.call(this,a,c),this.$6=function(a){__p&&__p();var b=a.target;if(b.nodeName==="INPUT"||b.nodeName==="TEXTAREA")return;while(b){if(b.id===this.props.ufiID)return;b=b.parentElement}switch(a.keyCode){case 37:case 38:a.stopPropagation();this.$9();break;case 39:case 40:a.stopPropagation();this.$10();break}}.bind(this),this.$11=function(a){new(b("GroupSellProductDetailActionsTypedLogger"))().setEvent(b("GroupSellProductDetailsEvent").PHOTO_CLICK).setStoryID(this.props.storyID).setGroupID(this.props.group.id).log(),this.$7(a,this.props.media),this.setState({currentIndex:a})}.bind(this),this.state={currentIndex:0,stageWidth:this.props.maxWidth||j,stageHeight:558}}a.prototype.render=function(){return b("React").createElement("div",null,b("React").createElement("div",{className:"_57xm"},this.$2()),b("React").createElement("div",{className:"_57xn"},this.props.media.length?this.$3():this.$4()))};a.prototype.componentDidUpdate=function(a,c){this.props.media&&this.props.media.length>1&&this.props.media!==a.media?(this.$5(),this.$1=b("Event").listen(document.body,"keydown",this.$6)):(!this.props.media||this.props.media.length<1)&&this.$5()};a.prototype.componentWillUnmount=function(){this.$5()};a.prototype.UNSAFE_componentWillReceiveProps=function(a){__p&&__p();if(this.props.media!==a.media){var b=0;if(a.media.length<1)this.setState({stageWidth:this.props.maxWidth||j});else{var c=this.props.query;c&&c.fbid&&(b=a.media.findIndex(function(a){return a.id.toString()===c.fbid}),b==-1&&(b=0));this.$7(b,a.media)}this.setState({currentIndex:b})}};a.prototype.$4=function(){__p&&__p();var a=this.props.elem;if(!a)return null;var c=b("DOM").scry(a,"img")[0];a=b("DOM").scry(a,"i")[0];if(c){var d=b("Vector").from(c.naturalWidth,c.naturalHeight);return b("React").createElement(b("Image.react"),{className:"_580_",width:d.x,height:d.y,src:c.src,style:this.$8(d.x,d.y)})}else if(a){c=b("Style").get(a,"backgroundImage").replace(/.*url\(\"?([^\"]*)\"?\).*/,"$1");return b("React").createElement(b("Image.react"),{className:"_580_",src:c})}return null};a.prototype.$5=function(){this.$1&&(this.$1.remove(),this.$1=null)};a.prototype.$7=function(a,c){__p&&__p();c=c[a];a=this.state.stageWidth;switch(c.aspect){case b("GroupSellProductDetailsImageAspect").HORIZONTAL:case b("GroupSellProductDetailsImageAspect").WIDE_HORIZONTAL:a=744;break;case b("GroupSellProductDetailsImageAspect").WIDE_VERTICAL:a=314;break;case b("GroupSellProductDetailsImageAspect").VERTICAL:a=419;break;case b("GroupSellProductDetailsImageAspect").SQUARE:a=558;break;case b("GroupSellProductDetailsImageAspect").HEIGHT_BOUND:a=c.width;break}this.props.maxWidth!=null&&(a=Math.min(a,this.props.maxWidth));this.props.onResize(c.aspect,a);this.setState({stageWidth:a})};a.prototype.$10=function(){var a=this.state.currentIndex+1,b=this.props.media.length-1;a>b&&(a=0);this.$11(a)};a.prototype.$9=function(){var a=this.state.currentIndex-1,b=this.props.media.length-1;a<0&&(a=b);this.$11(a)};a.prototype.$3=function(){var a=[],c=this.props.media.length;for(var d=0;d<c;d++){var e=this.props.media[d];a.push(b("React").createElement(b("Image.react"),{className:(this.state.currentIndex!=d?"_5810":"")+" _580_",width:e.width,height:e.height,src:e.uri,key:"stage"+e.id+("_"+d),style:this.$8(e.width,e.height)}))}return a};a.prototype.$8=function(a,b){var c;a>this.state.stageWidth&&(c=this.state.stageWidth/a,a*=c,b*=c);b>this.state.stageHeight&&(c=this.state.stageHeight/b,a*=c,b*=c);return{paddingTop:(this.state.stageHeight-b)/2+"px",paddingLeft:(this.state.stageWidth-a)/2+"px",maxWidth:this.state.stageWidth,maxHeight:this.state.stageHeight}};a.prototype.$2=function(){var a=[],c=this.props.media.length;for(var d=0;d<c;d++){var e=this.props.media[d];a.push(b("React").createElement(b("ScaledImage.react"),{className:"_5811"+(this.state.currentIndex==d?" _5812":""),width:i,height:i,imageSize:{height:e.height,width:e.width},src:e.uriThumb,onClick:this.$11.bind(this,d),key:"thumbnail"+e.id+("_"+d)}))}return b("React").createElement("div",null,b("React").createElement(b("ScrollableArea.react"),{height:this.props.maxHeight,shadow:!1},a),b("React").createElement("div",{className:"_2dh4",style:{width:i}}))};e.exports=a}),null);
__d("GroupCommerceProductDetailRHCContent.react",["cx","fbt","ix","GroupSellProductDetailActionsTypedLogger","GroupSellProductDetailsEvent","Image.react","React","XUIGrayText.react","XUIText.react"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j;c=b("React").PropTypes;j=babelHelpers.inherits(a,b("React").Component);j&&j.prototype;a.prototype.render=function(){return b("React").createElement("div",{className:"_4g63"+(this.props.actor.profilePicURI?"":" _34xy")},b("React").createElement("div",{className:"_4g65"},this.$1(),this.$2(),this.$3(),b("React").createElement("div",{className:"_4g67"},this.props.description),b("React").createElement("div",{className:"_4g68"},this.props.actionButton)),b("React").createElement("div",{className:"_4g6d",onClick:function(){new(b("GroupSellProductDetailActionsTypedLogger"))().setEvent(b("GroupSellProductDetailsEvent").UFI_CLICK).setStoryID(this.props.storyID).setGroupID(this.props.group.id).log()}.bind(this),ref:"ufi",role:"presentation"},this.props.ufi))};a.prototype.$1=function(){var a=this.props.product.statusText?this.props.product.statusText+" "+this.props.product.title:this.props.product.title;return b("React").createElement(b("XUIText.react"),{id:this.props.titleID,className:"_4g6e"},a)};a.prototype.$3=function(){var a=this.props.product.price;this.props.product.previousPrice!==null&&this.props.product.priceDropEnabled&&(a=h._("Maintenant \u00e0 {current_price}",[h._param("current_price",a)]));var c=null;this.props.product.priceDropEnabled&&(c=b("React").createElement(b("XUIText.react"),null,b("React").createElement(b("XUIGrayText.react"),{className:"_3crf",shade:"light",size:"meta1"},this.props.product.previousPrice)," "));return b("React").createElement("div",{className:"_4g66"},c,a)};a.prototype.$2=function(){var a=this.props.product.deliveryNote?b("React").createElement(b("XUIText.react"),{display:"inline"},this.props.product.deliveryNote):null,c=a?b("React").createElement(b("Image.react"),{className:"_4g6g",src:i("75362")}):null;return b("React").createElement("div",{className:"_4g6h"},c,b("React").createElement(b("XUIText.react"),null,a))};function a(){j.apply(this,arguments)}a.propTypes={actor:c.object.isRequired,product:c.object.isRequired,group:c.object.isRequired,feedback:c.object.isRequired,ufi:c.any.isRequired,actionButton:c.any.isRequired,storyID:c.string,description:c.any.isRequired,titleID:c.string};e.exports=a}),null);
__d("GroupCommerceProductDetailRHCHeader.react",["cx","ix","GroupSellProductDetailActionsTypedLogger","GroupSellProductDetailsEvent","Image.react","Link.react","React","ReactLayeredComponentMixin_DEPRECATED","XUIContextualDialog.react","XUIContextualDialogBody.react","classWithMixins","isEmpty","mixin"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=b("React").PropTypes;var j=104,k=40;i=babelHelpers.inherits(a,b("classWithMixins")(b("React").Component,b("mixin")(b("ReactLayeredComponentMixin_DEPRECATED"))));i&&i.prototype;a.prototype.renderLayers=function(){return{actorDialog:b("React").createElement(b("XUIContextualDialog.react"),{contextRef:function(){return this.refs.actorName}.bind(this),shown:!0,hoverContextRef:function(){return this.refs.actorName}.bind(this),hideOnEscape:!0,hoverHideDelay:0,hoverShowDelay:500,autoFocus:!1,width:b("XUIContextualDialog.react").WIDTH.WIDE,position:"below"},b("React").createElement(b("XUIContextualDialogBody.react"),null,b("React").createElement("div",{id:this.props.actorHoverID}))),actorImageDialog:b("React").createElement(b("XUIContextualDialog.react"),{contextRef:function(){return this.refs.actorImage}.bind(this),shown:!0,hoverContextRef:function(){return this.refs.actorImage}.bind(this),hideOnEscape:!0,hoverHideDelay:0,hoverShowDelay:500,autoFocus:!1,width:b("XUIContextualDialog.react").WIDTH.WIDE,position:"below"},b("React").createElement(b("XUIContextualDialogBody.react"),null,b("React").createElement("div",{id:this.props.actorImageHoverID}))),groupDialog:b("React").createElement(b("XUIContextualDialog.react"),{contextRef:function(){return this.refs.groupName}.bind(this),shown:!0,hoverContextRef:function(){return this.refs.groupName}.bind(this),hideOnEscape:!0,hoverHideDelay:0,hoverShowDelay:500,autoFocus:!1,width:b("XUIContextualDialog.react").WIDTH.WIDE,position:"below"},b("React").createElement(b("XUIContextualDialogBody.react"),null,b("React").createElement("div",{id:this.props.groupHoverID})))}};a.prototype.render=function(){return b("React").createElement("div",{className:"_34xx"+(this.props.actor.profilePicURI?"":" _34xy")},b("React").createElement(b("Image.react"),{className:"_34xz",width:k,height:k,src:this.props.actor.profilePicURI,ref:"actorImage"}),b("React").createElement("div",{className:"_34x-"},b("React").createElement("div",{className:"_34x_"},b("React").createElement("div",{ref:"actorName",className:"_34y0"},b("React").createElement(b("Link.react"),{href:this.props.actor.uri,onClick:function(){new(b("GroupSellProductDetailActionsTypedLogger"))().setEvent(b("GroupSellProductDetailsEvent").PROFILE_LINK_CLICK).setStoryID(this.props.storyID).setGroupID(this.props.group.id).log(),this.props.hideDialog()}.bind(this)},this.props.actor.name)),b("isEmpty")(this.props.group)?null:b("React").createElement(b("Image.react"),{className:"_34y1",src:h("82443")}),b("React").createElement("div",{ref:"groupName",className:"_34y0"},b("React").createElement(b("Link.react"),{href:this.props.group.uri,onClick:function(){new(b("GroupSellProductDetailActionsTypedLogger"))().setEvent(b("GroupSellProductDetailsEvent").GROUP_LINK_CLICK).setStoryID(this.props.storyID).setGroupID(this.props.group.id).log(),this.props.hideDialog()}.bind(this)},this.props.group.name))),b("React").createElement("div",{className:"_4g6i"},b("React").createElement(b("Link.react"),{href:this.props.product.uri,onClick:function(){new(b("GroupSellProductDetailActionsTypedLogger"))().setEvent(b("GroupSellProductDetailsEvent").PERMALINK_CLICK).setStoryID(this.props.storyID).setGroupID(this.props.group.id).log(),this.props.hideDialog()}.bind(this)},this.props.timestamp))),b("React").createElement("div",{id:this.props.chevronID}))};a.prototype.componentDidUpdate=function(a,b){a=this.refs.actorName.offsetWidth;b=j-a;this.refs.groupName.style.maxWidth=j+b+"px"};function a(){i.apply(this,arguments)}a.propTypes={actor:c.object.isRequired,group:c.object.isRequired,storyID:c.string,actorHoverID:c.string.isRequired,actorImageHoverID:c.string.isRequired,groupHoverID:c.string.isRequired,chevronID:c.string.isRequired,product:c.object.isRequired,timestamp:c.any.isRequired};e.exports=a}),null);
__d("MarketplaceUpsellIconLink.react",["ix","cx","fbt","FlexLayout.react","Image.react","Link.react","React","XUIText.react","asset"],(function(a,b,c,d,e,f,g,h,i){"use strict";function a(a){return b("React").createElement(b("Link.react"),{className:a.className,href:a.href},b("React").createElement(b("XUIText.react"),{className:"_15t5",size:"header4"},b("React").createElement(b("FlexLayout.react"),{align:"center"},b("React").createElement("div",{className:"_6u4t _3-91"},b("React").createElement(b("Image.react"),{src:g("504156")})),b("React").createElement("div",null,i._("Voir d\u2019autres articles \u00e0 vendre sur Marketplace")),b("React").createElement(b("Image.react"),{className:"_3-9b",src:g("482834")}))))}e.exports=a}),null);
__d("XGroupCommerceMarketplaceProductDetailController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/marketplace/product_detail/",{sale_post_id:{type:"FBID",required:!0},ufi_id:{type:"String",required:!0},date_time_id:{type:"String",required:!0},action_button_id:{type:"String",required:!0},actor_dialog_id:{type:"String",required:!0},actor_image_dialog_id:{type:"String",required:!0},description_id:{type:"String",required:!0},title_id:{type:"String",required:!0},group_hover_id:{type:"String",required:!0},ufi_instance_id:{type:"String",required:!0},chevron_id:{type:"String",required:!0},story_dom_id:{type:"String"}})}),null);
__d("GroupCommerceProductDetail.react",["csx","cx","fbt","Arbiter","AsyncRequest","GroupCommerceProductDetailImageContainer.react","GroupCommerceProductDetailRHCContent.react","GroupCommerceProductDetailRHCHeader.react","GroupSellProductDetailActionsTypedLogger","GroupSellProductDetailsEvent","GroupSellProductDetailsImageAspect","LayerFadeOnHide","LayerHideOnEscape","LeftRight.react","MarketplaceUpsellIconLink.react","Parent","React","ReactRenderer","ResponsiveBlock.react","ScrollableArea.react","WorkModeConfig","XGroupCommerceMarketplaceProductDetailController","XMarketplaceHomePageController","XUIDialog.react","XUIDialogBody.react","XUIDialogTitle.react","XUISpinner.react","guid"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j,k=558,l=530,m=891;a=babelHelpers.inherits(n,b("React").Component);j=a&&a.prototype;function n(a,c){__p&&__p();j.constructor.call(this,a,c);this.hideDialog=function(){this.$3(!1)}.bind(this);this.$6=function(a,c){__p&&__p();var d=this.state.width;switch(a){case b("GroupSellProductDetailsImageAspect").HORIZONTAL:case b("GroupSellProductDetailsImageAspect").WIDE_HORIZONTAL:d=1153;break;case b("GroupSellProductDetailsImageAspect").WIDE_VERTICAL:d=723;break;case b("GroupSellProductDetailsImageAspect").VERTICAL:d=828;break;case b("GroupSellProductDetailsImageAspect").SQUARE:d=967;break;case b("GroupSellProductDetailsImageAspect").HEIGHT_BOUND:d=c+409;break}this.setState({width:d})}.bind(this);this.$4=function(a,b){b>k&&(b=k),this.setState({rhcHeight:b})}.bind(this);this.$3=function(a){n.$9!==null&&this.setState({isDialogShown:a}),a||(new(b("GroupSellProductDetailActionsTypedLogger"))().setEvent(b("GroupSellProductDetailsEvent").HIDE_DIALOG).setStoryID(this.state.payload.storyID).setGroupID(this.state.payload.group.id).log(),this.props.onHide&&this.props.onHide(),n.$9!==null&&window.setTimeout(function(){this.setState({payload:this.$7(),query:null,elem:null})}.bind(this)))}.bind(this);this.$5=function(a){new(b("GroupSellProductDetailActionsTypedLogger"))().setEvent(b("GroupSellProductDetailsEvent").SHOW_DIALOG).setStoryID(a.payload.storyID).setGroupID(a.payload.group.id).log(),this.setState({payload:a.payload,isDialogShown:!0,isLoading:!1})}.bind(this);a=this;a.hideDialog=this.hideDialog.bind(this);a.showDialog=this.showDialog.bind(this);a.$3=this.$3.bind(this);a.$4=this.$4.bind(this);a.$5=this.$5.bind(this);a.$6=this.$6.bind(this);this.$2={};this.state={isDialogShown:!1,isLoading:!1,width:m,rhcHeight:200,payload:this.$7(),ufiID:"ufi_detail_"+b("guid")(),datetimeID:"datetime_"+b("guid")(),actionButtonID:"actionButton"+b("guid")(),actorHoverID:"actorHoverID"+b("guid")(),actorImageHoverID:"actorImageHoverID"+b("guid")(),descriptionID:"descriptionID"+b("guid")(),titleID:"titleID"+b("guid")(),groupHoverID:"groupHoverID"+b("guid")(),ufiInstanceID:"ufiInstanceID"+b("guid")(),chevronID:"chevronID"+b("guid")(),query:null,elem:null,salePostID:null,storyDomID:null}}n.prototype.componentDidMount=function(){this.$1=b("Arbiter").subscribe("XComposerEditDialog/doneEditing",function(){this.state.salePostID&&this.$8(this.state.salePostID,this.state.storyDomID)}.bind(this))};n.prototype.componentWillUnmount=function(){var a=this.refs.modal;a!=null&&a.layer.hide();n.$9=null;this.$1&&this.$1.unsubscribe();this.$1=null};n.prototype.renderModal=function(a){var c=b("XMarketplaceHomePageController").getURIBuilder().setString("ref","sale_groups").getURI();c=b("React").createElement(b("MarketplaceUpsellIconLink.react"),{className:"_1mle _2pie",href:c});return b("React").createElement(b("XUIDialog.react"),{shown:!0,onToggle:this.$3,ref:"modal",width:this.state.width,behaviors:{LayerFadeOnHide:b("LayerFadeOnHide"),LayerHideOnEscape:b("LayerHideOnEscape")},className:"_1mlf"},b("React").createElement(b("XUIDialogTitle.react"),null,i._("D\u00e9tails de l\u2019article")),b("React").createElement(b("XUIDialogBody.react"),null,a),b("WorkModeConfig").is_work_user?null:c)};n.prototype.render=function(){if(!this.state.isDialogShown)return null;var a=b("React").createElement("span",{id:this.state.datetimeID}),c=b("React").createElement("div",{id:this.state.ufiID}),d=b("React").createElement("div",{id:this.state.actionButtonID}),e=b("React").createElement("div",{className:"_3g5q",id:this.state.descriptionID});a=b("React").createElement("div",{className:"_3g6d"},b("React").createElement(b("LeftRight.react"),null,b("React").createElement("div",{className:"_3g6e"},b("React").createElement(b("GroupCommerceProductDetailImageContainer.react"),{elem:this.state.elem,group:this.state.payload.group,maxHeight:l,maxWidth:this.props.maxImageWidth,media:this.state.payload.media,onResize:this.$6,query:this.state.query,storyID:this.state.payload.storyID,ufiID:this.state.ufiID})),b("React").createElement("div",{className:"_3g6f"},b("React").createElement(b("ScrollableArea.react"),{className:"_3g6g",height:this.state.rhcHeight},b("React").createElement(b("ResponsiveBlock.react"),{className:"_3g6h",onResize:this.$4},this.$10(),b("React").createElement(b("GroupCommerceProductDetailRHCHeader.react"),{actor:this.state.payload.actor,group:this.state.payload.group,hideDialog:this.hideDialog,storyID:this.state.payload.storyID,actorHoverID:this.state.actorHoverID,actorImageHoverID:this.state.actorImageHoverID,groupHoverID:this.state.groupHoverID,chevronID:this.state.chevronID,product:this.state.payload.product,timestamp:a}),b("React").createElement(b("GroupCommerceProductDetailRHCContent.react"),{actor:this.state.payload.actor,product:this.state.payload.product,group:this.state.payload.group,feedback:this.state.payload.feedback,actionButton:d,ufi:c,hideDialog:this.hideDialog,storyID:this.state.payload.storyID,description:e,titleID:this.state.titleID}))))));return this.props.useModal===!1?a:this.renderModal(a)};n.prototype.showDialog=function(a,b,c,d){this.$8(a,d),this.setState({payload:this.$7(),salePostID:a,query:b,elem:c,storyDomID:d,isDialogShown:!0,isLoading:!0,width:m})};n.prototype.$10=function(){return!this.state.isLoading?null:b("React").createElement("div",{className:"_msc"},b("React").createElement(b("XUISpinner.react"),{size:"large"}))};n.prototype.$8=function(a,c){c=b("XGroupCommerceMarketplaceProductDetailController").getURIBuilder().setFBID("sale_post_id",a).setString("ufi_id",this.state.ufiID).setString("date_time_id",this.state.datetimeID).setString("action_button_id",this.state.actionButtonID).setString("actor_dialog_id",this.state.actorHoverID).setString("actor_image_dialog_id",this.state.actorImageHoverID).setString("description_id",this.state.descriptionID).setString("title_id",this.state.titleID).setString("group_hover_id",this.state.groupHoverID).setString("ufi_instance_id",this.state.ufiInstanceID).setString("chevron_id",this.state.chevronID).setString("story_dom_id",c).getURI();new(b("AsyncRequest"))().setURI(c).setMethod("GET").setHandler(this.$5).setErrorHandler(function(c){new(b("GroupSellProductDetailActionsTypedLogger"))().setEvent(b("GroupSellProductDetailsEvent").ASYNC_DATA_REQUEST_FAIL).setStoryID(a.toString()).log()}).setReadOnly(!0).send()};n.prototype.$7=function(){return{actor:{profilePicURI:null},group:{},product:{},feedback:{},media:[],ufi:{}}};n.init=function(a,c){c===void 0&&(c={});c=b("ReactRenderer").constructAndRenderComponent(n,babelHelpers["extends"]({},c),a);n.$11=a;n.$9=c;n.$12&&(n.showDialog(n.$12,n.$13,n.$14,n.$15),n.$12=null,n.$13=null,n.$14=null,n.$15=null)};n.showDialog=function(a,c,d,e){__p&&__p();if(!n.$9){if(!n.$11){n.$12=a;n.$13=c;n.$14=d;n.$15=e;return}n.init(n.$11)}if(!n.$9){new(b("GroupSellProductDetailActionsTypedLogger"))().setEvent(b("GroupSellProductDetailsEvent").DIALOG_INSTANCE_NULL).setStoryID(a.toString()).log();return}n.$9.showDialog(a,c,d,e)};n.defaultProps={onHide:function(){},useModal:!0};n.$9=null;n.$12=null;n.$11=null;n.$14=null;n.$13=null;n.$15=null;e.exports=n}),null);
__d("GroupCommerceProductDetailLayer",["GroupCommerceProductDetail.react","Layer"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("Layer"));g&&g.prototype;a.prototype._buildWrapper=function(a,c){b("GroupCommerceProductDetail.react").init(c);return c};function a(){g.apply(this,arguments)}e.exports=a}),null);