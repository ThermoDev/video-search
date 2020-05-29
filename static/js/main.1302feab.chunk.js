(this["webpackJsonpvideo-search"]=this["webpackJsonpvideo-search"]||[]).push([[0],{19:function(e,t,a){e.exports=a(44)},25:function(e,t,a){},26:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(16),o=a.n(i),c=a(6),s=a.n(c),l=a(17),m=a(2),u=a(3),d=a(5),p=a(4),v=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={term:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.term)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"ui segment"},n.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},n.a.createElement("div",{className:"ui field"},n.a.createElement("label",{style:{fontSize:"medium"}},"Search for a video"),n.a.createElement("input",{type:"text",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})},placeholder:"Search..."}))))}}]),a}(n.a.Component),h=(a(25),function(e){return n.a.createElement("div",{className:"ui stackable doubling two column",style:{width:"-webkit-fill-available"}},n.a.createElement("div",{className:"ui segment column",style:{height:"20em"}},n.a.createElement("div",{className:"ui active inverted dimmer"},e.content)))}),f=function(e){if(e.hasError){var t=n.a.createElement("div",{className:"ui"}," ",n.a.createElement("p",{style:{fontSize:"large",fontWeight:"700"}},"Error: ",e.error.code," "),n.a.createElement("p",{style:{fontSize:"medium"}},e.error.message));return n.a.createElement(h,{content:t})}if(e.video<=0){var a=n.a.createElement("div",{className:"ui text loader",style:{fontSize:"large",fontWeight:"700"}},"Awaiting Input...");return n.a.createElement(h,{content:a})}var r=e.video.snippet,i=r.title,o=r.description;return n.a.createElement("div",{className:"ui stackable doubling two column"},n.a.createElement("div",{className:"column grid video-container"},n.a.createElement("iframe",{src:"https://www.youtube.com/embed/"+e.video.id.videoId,title:i,frameBorder:"0",allowFullScreen:!0,className:"video column"})),n.a.createElement("div",{className:"ui segment column"},n.a.createElement("h3",null,i),n.a.createElement("p",null,o)))},E=(a(26),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.video.snippet,a=t.thumbnails,r=t.description,i=t.title;return n.a.createElement("div",{className:"item",onMouseUp:function(){return e.props.onVideoSelect(e.props.video)},style:{padding:"5px"}},n.a.createElement("div",{className:"video-item-button"},n.a.createElement("img",{className:"ui small image",src:a.medium.url,alt:r}),n.a.createElement("div",{className:"content header",style:{paddingLeft:"5px"}},i)))}}]),a}(n.a.Component)),b=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.videos.map((function(t){return n.a.createElement(E,{key:t.id.videoId,video:t,onVideoSelect:e.props.onVideoSelect,style:{padding:"5px"}})}));return n.a.createElement("div",{className:"ui middle aligned divided list column"},t)}}]),a}(n.a.Component),g=a(18),y=a.n(g),S="".concat("AIzaSyBTwNGv9nDcQgAjuB0X7eYPpdaNjJ3L3Rk".toString()),N=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={videos:[],video:[],hasError:!1,error:[]},e.onVideoSelect=function(t){e.setState({video:t,hasError:!1})},e.onSearchSubmit=function(){var t=Object(l.a)(s.a.mark((function t(a){var r,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.a.get("https://www.googleapis.com/youtube/v3/search",{params:{key:S,q:a,type:"video",part:"snippet"}});case 3:0===(r=t.sent).data.pageInfo.totalResults?(n={code:"204",message:"No search matched: "+a},e.setState({hasError:!0,error:n})):(console.log(r.data),e.setState({video:r.data.items[0],videos:r.data.items,hasError:!1})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e.setState({hasError:!0,error:t.t0.response.data.error});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"ui container",style:{paddingTop:"20px"}},n.a.createElement(v,{onSubmit:this.onSearchSubmit}),n.a.createElement("div",{style:{display:"flex"},className:"ui two column doubling grid"},n.a.createElement(f,{hasError:this.state.hasError,error:this.state.error,video:this.state.video,className:"column"}),n.a.createElement(b,{videos:this.state.videos,onVideoSelect:this.onVideoSelect})))}}]),a}(n.a.Component);o.a.render(n.a.createElement(N,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.1302feab.chunk.js.map