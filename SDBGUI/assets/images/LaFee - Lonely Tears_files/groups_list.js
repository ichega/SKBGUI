﻿!function(r){function s(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return r[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}var e={};return s.m=r,s.c=e,s.d=function(r,e,t){s.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:t})},s.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},s.t=function(r,e){if(1&e&&(r=s(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var o in r)s.d(t,o,function(s){return r[s]}.bind(null,o));return t},s.n=function(r){var e=r&&r.__esModule?function(){return r["default"]}:function(){return r};return s.d(e,"a",e),e},s.o=function(r,s){return Object.prototype.hasOwnProperty.call(r,s)},s.p="",s(s.s=196)}({196:function(r,s,e){r.exports=e(225)},225:function(r,s,e){"use strict";e.r(s);var t=e(436);window.GroupsList={rand:function(){return Math.floor(1e4*Math.random())},toggleFave:function(r,s,e,t){var o=this,i=parseInt(r.getAttribute("data-value"))?1:0;ajax.post("fave.php",{act:i?"a_delete_group":"a_add_group",gid:s,hash:e},{onDone:function(e){val(r,e),r.setAttribute("data-value",1-i),o.updateGroupField(s,12,1-i)},showProgress:lockActionsMenuItem.pbind(r),hideProgress:unlockActionsMenuItem.pbind(r)}),cancelEvent(t)},toggleSubscription:function(r,s,e,t){var o=this,i=parseInt(r.getAttribute("data-value"))?1:0;ajax.post("al_wall.php",{act:"a_toggle_posts_subscription",subscribe:i?0:1,oid:-s,hash:e},{onDone:function(e){val(r,e),r.setAttribute("data-value",1-i),o.updateGroupField(s,13,1-i)},showProgress:lockActionsMenuItem.pbind(r),hideProgress:unlockActionsMenuItem.pbind(r)}),cancelEvent(t)},subscribe:function(r,s,e,t){var o=hasClass(r,"flat_button");if(!(o&&buttonLocked(r)||actionsMenuItemLocked(r))){var i=o?hasClass(r,"secondary"):!cur.scrollList.deleted[s],c=function n(t){ajax.post("al_groups.php",{act:i?"list_leave":"list_enter",gid:s,hash:e,confirm:t},{showProgress:(o?lockButton:lockActionsMenuItem).pbind(r),hideProgress:(o?unlockButton:unlockActionsMenuItem).pbind(r),onDone:function(e,t,c){if(t){var l=showFastBox(getLang("global_warning"),t,getLang("group_leave_group"),function(){l.hide(),n(1)},getLang("global_cancel"));return!0}if(val(r,e),cur.scrollList.deleted[s]=i,o)toggleClass(r,"secondary",!i);else{var a=domClosest("_gl_row",r);toggleClass(a,"deleted",i),c&&addClass(a,"closed")}},onFail:function(r){setTimeout(showFastBox(getLang("global_error"),r).hide,3e3)}})};c()}},updateGroupField:function(r,s,e){cur.scrollList&&cur.scrollList.lists&&each(cur.scrollList.lists,function(){if(this&&this.length)for(var t=0,o=this.length;o>t;++t)if(this[t][2]==r){this[t][s]=e;break}})},enter:function(r,s,e,o,i){var c=this;if(cur.invSwitching)return setTimeout(function(){return c.enter(r,s,e,o,i)},100),!1;var n=void 0,l=void 0,a=cur.scrollList.tab;"button"!=r.tagName.toLowerCase()?(r.backhtml||(r.backhtml=r.innerHTML),n=function(){var s=getSize(r)[0];r.innerHTML='<span class="progress_inline"></span>',setStyle(domFC(r),{width:s})},l=function(){r.innerHTML=r.backhtml}):(n=lockButton.pbind(r),l=unlockButton.pbind(r));var u=this.rand(),h=this.rand();cur.scrollList[u]=h,cur.invSwitching=!0,ajax.post("/al_groups.php",{act:"enter",gid:s,hash:e,context:"2"+(o?"_"+o:"")},{onDone:function(r,e){if(cur.invSwitching=!1,cur.scrollList&&cur.scrollList[u]==h){var n=cur.scrollList.lists[a],l=i?t.GROUPS_LIST_STATUS_SUBSCRIBED:t.GROUPS_LIST_STATUS_ACCEPTED;if("unsure"==o?l=i?t.GROUPS_LIST_STATUS_SUBSCRIBED:t.GROUPS_LIST_STATUS_UNSURE:"decline"==o?l=i?t.GROUPS_LIST_STATUS_UNSUBSCRIBED:t.GROUPS_LIST_STATUS_DECLINED:"undecided"==o&&(l=t.GROUPS_LIST_STATUS_UNDECIDED),n&&"loading"!=n&&"update"!=n)for(var d=0,p=n.length;p>d;++d)n[d][2]==s&&(n[d][1]=l);else cur.scrollList.processed[a][s]=l;if(r&&cur.scrollList.lists.groups){var g=cur.scrollList.lists.groups;if("join"!=o&&"unsure"!=o&&o){if("undecided"==o)for(var _ in g)g[_][2]==r[2]&&(g.splice(_,1),cur.scrollList.counts.groups--)}else g.unshift(r),cur.scrollList.counts.groups++;c.updateIndexer(g),c.showMore(!0)}TopNotifier&&!TopNotifier.shown()&&TopNotifier.invalidate();var f=ge("gl_inv"+s),L=f&&geByClass1("group_row_status",f);f&&(L.basehtml=L.innerHTML,L.innerHTML=e)}},onFail:function(r){return r?(setTimeout(showFastBox(getLang("global_error"),r).hide,3e3),!0):void 0},showProgress:n,hideProgress:l})},leave:function(r,s,e,o){var i=this;if(cur.invSwitching)return setTimeout(function(){return i.leave(r,s,e,o)},100),!1;if(!r.firstChild||"progress_inline"!=r.firstChild.className){var c=this.rand(),n=this.rand(),l=cur.scrollList.tab,a=void 0,u=void 0;cur.scrollList[c]=n,"button"!=r.tagName.toLowerCase()?(r.backhtml||(r.backhtml=r.innerHTML),a=function(){var s=getSize(r)[0];r.innerHTML='<span class="progress_inline"></span>',setStyle(domFC(r),{width:s})},u=function(){r.innerHTML=r.backhtml}):(a=lockButton.pbind(r),u=unlockButton.pbind(r)),cur.invSwitching=!0,ajax.post("/al_groups.php",{act:"leave",gid:s,hash:e,context:2},{onDone:function(r,e){if(cur.invSwitching=!1,cur.scrollList&&cur.scrollList[c]==n){var o=cur.scrollList.lists[l];if(o&&"loading"!=o&&"update"!=o)for(var i=0,a=o.length;a>i;++i)o[i][2]==s&&(o[i][1]=t.GROUPS_LIST_STATUS_DECLINED);else cur.scrollList.processed[l][s]=t.GROUPS_LIST_STATUS_DECLINED;TopNotifier&&!TopNotifier.shown()&&TopNotifier.invalidate();var u=ge("gl_inv"+s),h=u&&geByClass1("group_row_status",u);u&&(h.basehtml=h.innerHTML,h.innerHTML=e)}},showProgress:a,hideProgress:u})}},spam:function(r,s,e){if(!domFC(r)||"progress_inline"!=domFC(r)){var o=this.rand(),i=this.rand(),c=cur.scrollList.tab;cur.scrollList[o]=i,ajax.post("/al_groups.php",{act:"spam",gid:s,hash:e,context:1},{onDone:function(r){if(cur.scrollList&&cur.scrollList[o]==i){var e=cur.scrollList.lists[c];if(e&&"loading"!=e&&"update"!=e)for(var n=0,l=e.length;l>n;++n)e[n][2]==s&&(e[n][1]=t.GROUPS_LIST_STATUS_MARKED_AS_SPAM);else cur.scrollList.processed[c][s]=t.GROUPS_LIST_STATUS_MARKED_AS_SPAM;var a=ge("gl_inv"+s),u=a&&geByClass1("group_row_status",a);a&&(u.innerHTML=r)}},showProgress:function(){r.oldhtml=r.innerHTML;var s=getSize(r)[0];r.innerHTML='<span class="progress_inline"></span>',setStyle(domFC(r),{width:s})},hideProgress:function(){r.innerHTML=r.oldhtml}})}},cancel:function(r,s,e){var o=this;if(!domFC(r)||"progress_inline"!=domFC(r).className){var i=this.rand(),c=this.rand(),n=cur.scrollList.tab;cur.scrollList[i]=c,ajax.post("/al_groups.php",{act:"cancel",gid:s,hash:e,context:1},{onDone:function(){if(cur.scrollList&&cur.scrollList[i]==c){var r=cur.scrollList.lists[n];if(r&&"loading"!=r&&"update"!=r){for(var e in r)r[e][2]==s&&(r.splice(e,1),cur.scrollList.counts.groups--);o.updateIndexer(r),o.showMore(!0)}else cur.scrollList.processed[n][s]=t.GROUPS_LIST_STATUS_INVITED;var l=ge("gl_inv"+s),a=l&&geByClass1("group_row_status",l);l&&a&&a.basehtml&&(a.innerHTML=a.basehtml)}},showProgress:function(){r.oldhtml=r.innerHTML;var s=getSize(r)[0];r.innerHTML='<span class="progress_inline"></span>',setStyle(domFC(r),{width:s})},hideProgress:function(){r.innerHTML=r.oldhtml}})}},updateIndexer:function(r){cur.scrollList.cache.groups={all:[]};var s=cur.scrollList.cache.groups;for(var e in r)s.all.push(e);cur.scrollList.index.groups=new vkIndexer(s.all,function(s){return r[s][0]})},rejectAll:function(r,s){showFastBox(getLang("global_warning"),getLang("groups_sure_reject_all"),getLang("groups_reject_all_inv"),function(r){ajax.post("/al_groups.php",{act:"reject_all",hash:s},{showProgress:lockButton.pbind(r),hideProgress:unlockButton.pbind(r)})},getLang("global_cancel"))},scrollCheck:function(){if(!browser.mobile&&cur.scrollList){var r=ge("ui_"+cur.scrollList.tab+"_load_more"),s=ge("ui_search_load_more");if(isVisible(r)||(r=s,isVisible(r))){var e=document.documentElement,t=window.innerHeight||e.clientHeight||bodyNode.clientHeight,o=scrollGetY();(o+t>r.offsetTop||cur.searchOffset&&o+2*t>r.offsetTop)&&this.showMore()}}},initScroll:function(){var r=this;this.destroyScroll(),this._scrollCheck=function(){return r.scrollCheck()},addEvent(window,"scroll",this._scrollCheck),addEvent(window,"resize",this._scrollCheck)},destroyScroll:function(){removeEvent(window,"scroll",this._scrollCheck),removeEvent(window,"resize",this._scrollCheck)},locNav:function(r,s,e){var t=r.tab,o=t||("events"==e.act?"future":"groups");return delete r.tab,isEmpty(r)&&void 0!==t?(hide("groups_list_tab_"+cur.scrollList.tab),this.updateSummary(cur.scrollList.counts[cur.scrollList.tab]),cur.scrollList.tab=o,cur.scrollList.summary=geByClass1("ui_tab_count",ge("groups_"+o+"_tab")),show("groups_list_tab_"+o),checkPageBlocks(),nav.setLoc(e),window.uiSearch&&uiSearch.reset(cur.scrollList.query,!0),elfocus(cur.scrollList.query),this.updateSummary(cur.scrollList.counts[o]),cur.scrollList.offset=ge("groups_list_"+o).childNodes.length,this.showMore(!0),window.uiTabs&&uiTabs.hideProgress(ge("groups_"+o+"_tab")),!1):void 0},init:function(r){var s=this;extend(cur,{module:"groups_list",_back:{text:getLang("groups_back_to_list"),show:[function(){return s.initScroll},elfocus.pbind("groups_list_search")],hide:[function(){return s.destroyScroll}]},scrollList:{tab:r.tab,url:"al_groups.php",params:{act:"get_list",mid:r.mid},prefix:"groups_list_",query:ge("groups_list_search"),queryCont:gpeByClass("_wrap",ge("groups_list_search")),queryWrap:ge("group_u_search_input_wrap"),summary:geByClass1("ui_tab_count",ge("groups_"+(r.tab||"groups")+"_tab")),searchSummary:ge("groups_search_summary"),invites:ge("groups_invites_wrap"),invitesPreload:ge("groups_invites_preload"),invitesMoreLnk:ge("ui_invites_load_more"),searchWrap:ge("groups_list_search_wrap"),searchCont:ge("groups_list_search_cont"),eventsPopular:ge("events_popular_list"),perpage:20,offset:ge("groups_list_"+r.tab).childNodes.length,lists:{},cache:{},index:{},deleted:{},processed:{groups:{},admin:{},inv:{},future:{},past:{},events_concerts:{}},filtered:{},queries:{},counts:r.counts,genEmpty:r.genEmpty,genRow:r.genRow,genSummary:r.genSummary,genGroupsSummary:r.genGroupsSummary,invShown:r.invShown},filter:r.filter}),setTimeout(elfocus.pbind(cur.scrollList.query),0),cur.nav.push(function(){return s.locNav}),setTimeout(function(){return s.load},0),vk.version?addEvent(window,"load",function(){return s.initScroll}):this.initScroll(),cur.destroy.push(function(r){r==cur&&s.destroyScroll()})},updateSummary:function(r,s){val(s?cur.scrollList.searchSummary:cur.scrollList.summary,r?langNumeric(r,"%s",!0):"")},load:function(r,s){var e=this,t=s||cur.scrollList.tab;if(!cur.scrollList.lists[t]){var o=this.rand(),i=this.rand();cur.scrollList[o]=i,cur.scrollList.lists[t]="loading",ajax.post(cur.scrollList.url,extend(cur.scrollList.params,{tab:t}),{onDone:function(s){if(cur.scrollList&&cur.scrollList[o]==i){var c="update"==cur.scrollList.lists[t];if(c||"loading"==cur.scrollList.lists[t]){cur.scrollList.cache[t]={all:[]};for(var n=cur.scrollList.processed[t],l=0,a=s.length;a>l;++l){var u=n[s[l][2]];u&&(s[l][1]=u),cur.scrollList.cache[t].all.push(l)}cur.scrollList.lists[t]=s;var h=c?function(){cur.scrollList&&cur.scrollList[o]==i&&cur.scrollList.tab==t&&e.showMore(r)}:function(){};cur.scrollList.index[t]=new vkIndexer(cur.scrollList.cache[t].all,function(r){return cur.scrollList.lists[t][r][0]},h)}}},local:1})}},getHighlight:function(r){var s=cur.scrollList.index[cur.scrollList.tab],e=s.delimiter,t=s.trimmer;return r+=" "+(parseLatin(r)||""),r=escapeRE(r).replace(/&/g,"&amp;"),r=r.replace(t,"").replace(e,"|").replace(/(^\||\|$)/g,""),{re:new RegExp("("+r+")","gi"),val:'<span class="highlight">$1</span>'}},onSearchChange:function(r,s){delete cur.exactSearch,this.showMore(!1)},onSearchEnter:function(r,s){cur.exactSearch=1,this.showMore(!0)},showMore:function(r){var s=cur.scrollList.tab,e=cur.scrollList.lists[s];if(!e||"loading"==e||"update"==e)return e||this.load(r),void(cur.scrollList.lists[s]="update");s=cur.scrollList.tab,e=cur.scrollList.cache[s].all;var t=trim(cur.scrollList.query.value);cur.searchStr=t,void 0===cur.scrollList.queries[s]&&(cur.scrollList.queries[s]="");var o=r||t!=cur.scrollList.queries[s];if(o||r!==!1){cur.scrollList.queries[s]=t;var i=!1;if(t){if(e=cur.scrollList.cache[s]["_"+t],void 0===e){var c=cur.scrollList.index[s].search(t),n={};e=[];for(var l=0,a=c.length;a>l;++l)n[c[l]]||(n[c[l]]=!0,e.push(c[l]));e.sort(function(r,s){return r-s}),cur.scrollList.cache[s]["_"+t]=e}i=this.getHighlight(t)}var u=e.length,h=ge(cur.scrollList.prefix+s),d=ge("ui_"+s+"_load_more");if(this.updateSummary(u),!u)return h.innerHTML=cur.scrollList.genEmpty(t),void(t&&this.needSearch(s)?o?(this.serverSearch(h,t),hide(d)):cur.searchOffset&&this.serverSearchMore(h,t):(hide(d),hide(cur.scrollList.searchWrap),show(cur.scrollList.eventsPopular),cur.searchOffset=0));for(var p=o?0:cur.scrollList.offset,g=Math.min(u,p+cur.scrollList.perpage),_=[],f=p;g>f;++f){var L=cur.scrollList.lists[s][e[f]];if(L){var v=L[0];i&&(v=v.replace(i.re,i.val)),_.push(cur.scrollList.genRow(L,v))}}if(t||p&&!o||(hide(cur.scrollList.searchWrap),show(cur.scrollList.eventsPopular),cur.searchOffset=0),o)if(hasClass(cur.scrollList.queryCont,"ui_search_fixed")&&scrollToY(getXY(cur.scrollList.queryWrap)[1]+1,0),h.innerHTML=_.join(""),checkPageBlocks(),cur.searchOffset=!1,e.length<5&&t&&this.needSearch(s)){var S=[],m=void 0;for(var T in e)m=cur.scrollList.lists[s][e[T]],S.push(m[2]);this.serverSearch(h,t,S)}else hide(cur.scrollList.searchWrap),show(cur.scrollList.eventsPopular),cur.searchOffset=0;else h.innerHTML+=_.join(""),cur.searchOffset&&this.serverSearchMore(h,t);cur.scrollList.offset=g,cur.searchOffset||(u>g?show:hide)(d)}},showMoreInvites:function(r){if(!cur.loadingInvites){for(var s=cur.scrollList.invites&&geByClass1("groups_list",cur.scrollList.invites),e=cur.scrollList.invitesPreload,t=cur.scrollList.invitesMoreLnk;domFC(e);)s.appendChild(domFC(e)),cur.scrollList.invShown++;toggle(t,cur.scrollList.counts.invite>cur.scrollList.invShown),isVisible(t)&&ajax.post("/al_groups.php",{act:"more_invites",offset:cur.scrollList.invShown},{onDone:function(r,s){e.innerHTML=r,s&&(cur.scrollList.counts.invite-=s)},showProgress:function(){cur.loadingInvites=!0},hideProgress:function(){cur.loadingInvites=!1}})}},serverSearchMore:function(r,s){if(!cur.searchLoadingMore){cur.searchLoadingMore=1;var e=ge("ui_search_load_more");ajax.post("/al_groups.php",{act:"server_search",q:s,offset:cur.searchOffset,exact:cur.exactSearch,exclude:cur.searchExclude.join(",")},{onDone:function(r,s,e){cur.searchLoadingMore=0,r?(cur.searchOffset=e,cur.scrollList.searchCont.appendChild(cf(s))):cur.searchOffset=0,(!s||e>=r?hide:show)("ui_search_load_more")},onFail:function(){cur.searchLoadingMore=0},showProgress:lockButton.pbind(e),hideProgress:unlockButton.pbind(e)})}},extendedSearch:function(r){clearTimeout(cur.searchTimeout),cur.searchTimeout=setTimeout(function(){var s=geByClass1("groups_section_search");window.searcher&&s?hasClass(s,"ui_rmenu_item_sel")?searcher.onEnter():(uiRightMenu.switchMenu(s),uiRightMenu.showProgress(s),nav.go(s.href+"&c[like_hints]=1&c[q]="+r)):nav.go("/groups?act=catalog&c[q]="+r)},500)},onExtendedSearchChange:function(r,s){val("c[like_hints]",1),this.extendedSearch(r)},onExtendedSearchEnter:function(r,s,e){val("c[like_hints]",""),this.extendedSearch(s)},needSearch:function(r){return"groups"==r||"future"==r||"past"==r},serverSearch:function(r,s,e){var t=this;return this.needSearch(cur.scrollList.tab)?(clearTimeout(cur.searchTimeout),void(cur.searchTimeout=setTimeout(function(){cur.searchStr==s&&(cur.searchExclude=e||[],ajax.post("/al_groups.php",{act:"server_search",q:s,exact:cur.exactSearch,exclude:cur.searchExclude.join(",")},{onDone:function(r,e,o){cur.searchStr==s&&(r?(cur.scrollList.searchCont.innerHTML=e,show(cur.scrollList.searchWrap),hide(cur.scrollList.eventsPopular),(r>o||!e)&&show("ui_search_load_more")):(cur.scrollList.searchCont.innerHTML="",hide(cur.scrollList.searchWrap),show(cur.scrollList.eventsPopular)),checkPageBlocks(),t.updateSummary(r,!0),cur.searchOffset=o)},showProgress:uiSearch.showProgress.pbind(cur.scrollList.query),hideProgress:uiSearch.hideProgress.pbind(cur.scrollList.query)}))},300))):!1},showMapBox:function(r,s,e){var t=this;window.showZeroZoneBox&&showZeroZoneBox("places",function(){t.showMapBox(r,s,e)})||showTabbedBox("/al_places.php",{act:"show_photo_place",place_id:r},{stat:["places.css","map.css","maps.js","ui_controls.css","ui_controls.js"]})},feedbanGroup:function(r,s,e){var t=this,o=-s;ajax.post("/al_fans.php",{act:"feedtgl",oid:o,hash:e},{onDone:function(e,o){r.innerHTML=o,t.updateGroupField(s,9,e)},showProgress:function(){r.innerHTML='<span class="progress_inline"></span>'}})}};try{stManager.done(jsc("web/groups_list.js"))}catch(o){}},436:function(r,s,e){"use strict";e.r(s),e.d(s,"GROUPS_LIST_STATUS_DECLINED",function(){return t}),e.d(s,"GROUPS_LIST_STATUS_MARKED_AS_SPAM",function(){return o}),e.d(s,"GROUPS_LIST_STATUS_UNSUBSCRIBED",function(){return i}),e.d(s,"GROUPS_LIST_STATUS_INVITED",function(){return c}),e.d(s,"GROUPS_LIST_STATUS_ACCEPTED",function(){return n}),e.d(s,"GROUPS_LIST_STATUS_UNSURE",function(){return l}),e.d(s,"GROUPS_LIST_STATUS_UNDECIDED",function(){return a}),e.d(s,"GROUPS_LIST_STATUS_SUBSCRIBED",function(){return u});var t=-1,o=-2,i=-3,c=0,n=1,l=3,a=4,u=5}});