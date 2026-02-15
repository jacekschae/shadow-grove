goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_11971 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__(this$));
} else {
var m__5372__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__(this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_11971(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_11972 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__(this$));
} else {
var m__5372__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__(this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_11972(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__10128 = coll;
var G__10129 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__10128,G__10129) : shadow.dom.lazy_native_coll_seq(G__10128,G__10129));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5025__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__10144 = arguments.length;
switch (G__10144) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__10147 = arguments.length;
switch (G__10147) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__10153 = arguments.length;
switch (G__10153) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__10156 = arguments.length;
switch (G__10156) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__10168 = arguments.length;
switch (G__10168) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__10189 = arguments.length;
switch (G__10189) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5025__auto__ = (!((typeof document !== 'undefined')));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler(e,el));
}));
}catch (e10231){if((e10231 instanceof Object)){
var e = e10231;
return console.log("didnt support attachEvent",el,e);
} else {
throw e10231;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5025__auto__ = (!((typeof document !== 'undefined')));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__10261 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__10262 = null;
var count__10263 = (0);
var i__10264 = (0);
while(true){
if((i__10264 < count__10263)){
var el = chunk__10262.cljs$core$IIndexed$_nth$arity$2(null,i__10264);
var handler_12038__$1 = ((function (seq__10261,chunk__10262,count__10263,i__10264,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler(e,el));
});})(seq__10261,chunk__10262,count__10263,i__10264,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12038__$1);


var G__12044 = seq__10261;
var G__12045 = chunk__10262;
var G__12046 = count__10263;
var G__12047 = (i__10264 + (1));
seq__10261 = G__12044;
chunk__10262 = G__12045;
count__10263 = G__12046;
i__10264 = G__12047;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__10261);
if(temp__5823__auto__){
var seq__10261__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10261__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__10261__$1);
var G__12048 = cljs.core.chunk_rest(seq__10261__$1);
var G__12049 = c__5548__auto__;
var G__12050 = cljs.core.count(c__5548__auto__);
var G__12051 = (0);
seq__10261 = G__12048;
chunk__10262 = G__12049;
count__10263 = G__12050;
i__10264 = G__12051;
continue;
} else {
var el = cljs.core.first(seq__10261__$1);
var handler_12052__$1 = ((function (seq__10261,chunk__10262,count__10263,i__10264,el,seq__10261__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler(e,el));
});})(seq__10261,chunk__10262,count__10263,i__10264,el,seq__10261__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12052__$1);


var G__12053 = cljs.core.next(seq__10261__$1);
var G__12054 = null;
var G__12055 = (0);
var G__12056 = (0);
seq__10261 = G__12053;
chunk__10262 = G__12054;
count__10263 = G__12055;
i__10264 = G__12056;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__10343 = arguments.length;
switch (G__10343) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler(e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__10398 = cljs.core.seq(events);
var chunk__10400 = null;
var count__10401 = (0);
var i__10402 = (0);
while(true){
if((i__10402 < count__10401)){
var vec__10452 = chunk__10400.cljs$core$IIndexed$_nth$arity$2(null,i__10402);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10452,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10452,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12073 = seq__10398;
var G__12074 = chunk__10400;
var G__12075 = count__10401;
var G__12076 = (i__10402 + (1));
seq__10398 = G__12073;
chunk__10400 = G__12074;
count__10401 = G__12075;
i__10402 = G__12076;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__10398);
if(temp__5823__auto__){
var seq__10398__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10398__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__10398__$1);
var G__12077 = cljs.core.chunk_rest(seq__10398__$1);
var G__12078 = c__5548__auto__;
var G__12079 = cljs.core.count(c__5548__auto__);
var G__12080 = (0);
seq__10398 = G__12077;
chunk__10400 = G__12078;
count__10401 = G__12079;
i__10402 = G__12080;
continue;
} else {
var vec__10470 = cljs.core.first(seq__10398__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10470,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10470,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12082 = cljs.core.next(seq__10398__$1);
var G__12083 = null;
var G__12084 = (0);
var G__12085 = (0);
seq__10398 = G__12082;
chunk__10400 = G__12083;
count__10401 = G__12084;
i__10402 = G__12085;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__10501 = cljs.core.seq(styles);
var chunk__10502 = null;
var count__10503 = (0);
var i__10504 = (0);
while(true){
if((i__10504 < count__10503)){
var vec__10546 = chunk__10502.cljs$core$IIndexed$_nth$arity$2(null,i__10504);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10546,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10546,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12087 = seq__10501;
var G__12088 = chunk__10502;
var G__12089 = count__10503;
var G__12090 = (i__10504 + (1));
seq__10501 = G__12087;
chunk__10502 = G__12088;
count__10503 = G__12089;
i__10504 = G__12090;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__10501);
if(temp__5823__auto__){
var seq__10501__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10501__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__10501__$1);
var G__12091 = cljs.core.chunk_rest(seq__10501__$1);
var G__12092 = c__5548__auto__;
var G__12093 = cljs.core.count(c__5548__auto__);
var G__12094 = (0);
seq__10501 = G__12091;
chunk__10502 = G__12092;
count__10503 = G__12093;
i__10504 = G__12094;
continue;
} else {
var vec__10551 = cljs.core.first(seq__10501__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10551,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10551,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12095 = cljs.core.next(seq__10501__$1);
var G__12096 = null;
var G__12097 = (0);
var G__12098 = (0);
seq__10501 = G__12095;
chunk__10502 = G__12096;
count__10503 = G__12097;
i__10504 = G__12098;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__10561_12100 = key;
var G__10561_12101__$1 = (((G__10561_12100 instanceof cljs.core.Keyword))?G__10561_12100.fqn:null);
switch (G__10561_12101__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_12110 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_12110,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_12110,"aria-");
}
})())){
el.setAttribute(ks_12110,value);
} else {
(el[ks_12110] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__10613){
var map__10615 = p__10613;
var map__10615__$1 = cljs.core.__destructure_map(map__10615);
var props = map__10615__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10615__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__10621 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10621,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10621,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10621,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__10630 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__10630,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__10630;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__10644 = arguments.length;
switch (G__10644) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__10656){
var vec__10659 = p__10656;
var seq__10660 = cljs.core.seq(vec__10659);
var first__10661 = cljs.core.first(seq__10660);
var seq__10660__$1 = cljs.core.next(seq__10660);
var nn = first__10661;
var first__10661__$1 = cljs.core.first(seq__10660__$1);
var seq__10660__$2 = cljs.core.next(seq__10660__$1);
var np = first__10661__$1;
var nc = seq__10660__$2;
var node = vec__10659;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__10670 = nn;
var G__10671 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__10670,G__10671) : create_fn(G__10670,G__10671));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn(nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__10672 = nn;
var G__10673 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__10672,G__10673) : create_fn(G__10672,G__10673));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__10680 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10680,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10680,(1),null);
var seq__10684_12135 = cljs.core.seq(node_children);
var chunk__10685_12136 = null;
var count__10686_12137 = (0);
var i__10687_12138 = (0);
while(true){
if((i__10687_12138 < count__10686_12137)){
var child_struct_12142 = chunk__10685_12136.cljs$core$IIndexed$_nth$arity$2(null,i__10687_12138);
var children_12144 = shadow.dom.dom_node(child_struct_12142);
if(cljs.core.seq_QMARK_(children_12144)){
var seq__10737_12148 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12144));
var chunk__10739_12149 = null;
var count__10740_12150 = (0);
var i__10741_12151 = (0);
while(true){
if((i__10741_12151 < count__10740_12150)){
var child_12154 = chunk__10739_12149.cljs$core$IIndexed$_nth$arity$2(null,i__10741_12151);
if(cljs.core.truth_(child_12154)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12154);


var G__12158 = seq__10737_12148;
var G__12159 = chunk__10739_12149;
var G__12160 = count__10740_12150;
var G__12161 = (i__10741_12151 + (1));
seq__10737_12148 = G__12158;
chunk__10739_12149 = G__12159;
count__10740_12150 = G__12160;
i__10741_12151 = G__12161;
continue;
} else {
var G__12163 = seq__10737_12148;
var G__12164 = chunk__10739_12149;
var G__12165 = count__10740_12150;
var G__12166 = (i__10741_12151 + (1));
seq__10737_12148 = G__12163;
chunk__10739_12149 = G__12164;
count__10740_12150 = G__12165;
i__10741_12151 = G__12166;
continue;
}
} else {
var temp__5823__auto___12169 = cljs.core.seq(seq__10737_12148);
if(temp__5823__auto___12169){
var seq__10737_12174__$1 = temp__5823__auto___12169;
if(cljs.core.chunked_seq_QMARK_(seq__10737_12174__$1)){
var c__5548__auto___12175 = cljs.core.chunk_first(seq__10737_12174__$1);
var G__12176 = cljs.core.chunk_rest(seq__10737_12174__$1);
var G__12177 = c__5548__auto___12175;
var G__12178 = cljs.core.count(c__5548__auto___12175);
var G__12179 = (0);
seq__10737_12148 = G__12176;
chunk__10739_12149 = G__12177;
count__10740_12150 = G__12178;
i__10741_12151 = G__12179;
continue;
} else {
var child_12181 = cljs.core.first(seq__10737_12174__$1);
if(cljs.core.truth_(child_12181)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12181);


var G__12182 = cljs.core.next(seq__10737_12174__$1);
var G__12183 = null;
var G__12184 = (0);
var G__12185 = (0);
seq__10737_12148 = G__12182;
chunk__10739_12149 = G__12183;
count__10740_12150 = G__12184;
i__10741_12151 = G__12185;
continue;
} else {
var G__12186 = cljs.core.next(seq__10737_12174__$1);
var G__12187 = null;
var G__12188 = (0);
var G__12189 = (0);
seq__10737_12148 = G__12186;
chunk__10739_12149 = G__12187;
count__10740_12150 = G__12188;
i__10741_12151 = G__12189;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12144);
}


var G__12190 = seq__10684_12135;
var G__12191 = chunk__10685_12136;
var G__12192 = count__10686_12137;
var G__12193 = (i__10687_12138 + (1));
seq__10684_12135 = G__12190;
chunk__10685_12136 = G__12191;
count__10686_12137 = G__12192;
i__10687_12138 = G__12193;
continue;
} else {
var temp__5823__auto___12194 = cljs.core.seq(seq__10684_12135);
if(temp__5823__auto___12194){
var seq__10684_12195__$1 = temp__5823__auto___12194;
if(cljs.core.chunked_seq_QMARK_(seq__10684_12195__$1)){
var c__5548__auto___12198 = cljs.core.chunk_first(seq__10684_12195__$1);
var G__12201 = cljs.core.chunk_rest(seq__10684_12195__$1);
var G__12202 = c__5548__auto___12198;
var G__12203 = cljs.core.count(c__5548__auto___12198);
var G__12204 = (0);
seq__10684_12135 = G__12201;
chunk__10685_12136 = G__12202;
count__10686_12137 = G__12203;
i__10687_12138 = G__12204;
continue;
} else {
var child_struct_12209 = cljs.core.first(seq__10684_12195__$1);
var children_12210 = shadow.dom.dom_node(child_struct_12209);
if(cljs.core.seq_QMARK_(children_12210)){
var seq__10765_12211 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12210));
var chunk__10767_12212 = null;
var count__10768_12213 = (0);
var i__10769_12214 = (0);
while(true){
if((i__10769_12214 < count__10768_12213)){
var child_12217 = chunk__10767_12212.cljs$core$IIndexed$_nth$arity$2(null,i__10769_12214);
if(cljs.core.truth_(child_12217)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12217);


var G__12218 = seq__10765_12211;
var G__12219 = chunk__10767_12212;
var G__12220 = count__10768_12213;
var G__12221 = (i__10769_12214 + (1));
seq__10765_12211 = G__12218;
chunk__10767_12212 = G__12219;
count__10768_12213 = G__12220;
i__10769_12214 = G__12221;
continue;
} else {
var G__12222 = seq__10765_12211;
var G__12223 = chunk__10767_12212;
var G__12224 = count__10768_12213;
var G__12225 = (i__10769_12214 + (1));
seq__10765_12211 = G__12222;
chunk__10767_12212 = G__12223;
count__10768_12213 = G__12224;
i__10769_12214 = G__12225;
continue;
}
} else {
var temp__5823__auto___12226__$1 = cljs.core.seq(seq__10765_12211);
if(temp__5823__auto___12226__$1){
var seq__10765_12227__$1 = temp__5823__auto___12226__$1;
if(cljs.core.chunked_seq_QMARK_(seq__10765_12227__$1)){
var c__5548__auto___12229 = cljs.core.chunk_first(seq__10765_12227__$1);
var G__12230 = cljs.core.chunk_rest(seq__10765_12227__$1);
var G__12231 = c__5548__auto___12229;
var G__12232 = cljs.core.count(c__5548__auto___12229);
var G__12233 = (0);
seq__10765_12211 = G__12230;
chunk__10767_12212 = G__12231;
count__10768_12213 = G__12232;
i__10769_12214 = G__12233;
continue;
} else {
var child_12234 = cljs.core.first(seq__10765_12227__$1);
if(cljs.core.truth_(child_12234)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12234);


var G__12235 = cljs.core.next(seq__10765_12227__$1);
var G__12236 = null;
var G__12237 = (0);
var G__12238 = (0);
seq__10765_12211 = G__12235;
chunk__10767_12212 = G__12236;
count__10768_12213 = G__12237;
i__10769_12214 = G__12238;
continue;
} else {
var G__12239 = cljs.core.next(seq__10765_12227__$1);
var G__12240 = null;
var G__12241 = (0);
var G__12242 = (0);
seq__10765_12211 = G__12239;
chunk__10767_12212 = G__12240;
count__10768_12213 = G__12241;
i__10769_12214 = G__12242;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12210);
}


var G__12243 = cljs.core.next(seq__10684_12195__$1);
var G__12244 = null;
var G__12245 = (0);
var G__12246 = (0);
seq__10684_12135 = G__12243;
chunk__10685_12136 = G__12244;
count__10686_12137 = G__12245;
i__10687_12138 = G__12246;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__10815 = cljs.core.seq(node);
var chunk__10816 = null;
var count__10817 = (0);
var i__10818 = (0);
while(true){
if((i__10818 < count__10817)){
var n = chunk__10816.cljs$core$IIndexed$_nth$arity$2(null,i__10818);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove(n));


var G__12265 = seq__10815;
var G__12266 = chunk__10816;
var G__12267 = count__10817;
var G__12268 = (i__10818 + (1));
seq__10815 = G__12265;
chunk__10816 = G__12266;
count__10817 = G__12267;
i__10818 = G__12268;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__10815);
if(temp__5823__auto__){
var seq__10815__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10815__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__10815__$1);
var G__12271 = cljs.core.chunk_rest(seq__10815__$1);
var G__12272 = c__5548__auto__;
var G__12273 = cljs.core.count(c__5548__auto__);
var G__12274 = (0);
seq__10815 = G__12271;
chunk__10816 = G__12272;
count__10817 = G__12273;
i__10818 = G__12274;
continue;
} else {
var n = cljs.core.first(seq__10815__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove(n));


var G__12290 = cljs.core.next(seq__10815__$1);
var G__12291 = null;
var G__12292 = (0);
var G__12293 = (0);
seq__10815 = G__12290;
chunk__10816 = G__12291;
count__10817 = G__12292;
i__10818 = G__12293;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__10830 = arguments.length;
switch (G__10830) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__10845 = arguments.length;
switch (G__10845) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__10856 = arguments.length;
switch (G__10856) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5025__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5755__auto__ = [];
var len__5749__auto___12345 = arguments.length;
var i__5750__auto___12347 = (0);
while(true){
if((i__5750__auto___12347 < len__5749__auto___12345)){
args__5755__auto__.push((arguments[i__5750__auto___12347]));

var G__12353 = (i__5750__auto___12347 + (1));
i__5750__auto___12347 = G__12353;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__10893_12358 = cljs.core.seq(nodes);
var chunk__10894_12359 = null;
var count__10895_12360 = (0);
var i__10896_12361 = (0);
while(true){
if((i__10896_12361 < count__10895_12360)){
var node_12364 = chunk__10894_12359.cljs$core$IIndexed$_nth$arity$2(null,i__10896_12361);
fragment.appendChild(shadow.dom._to_dom(node_12364));


var G__12365 = seq__10893_12358;
var G__12366 = chunk__10894_12359;
var G__12367 = count__10895_12360;
var G__12368 = (i__10896_12361 + (1));
seq__10893_12358 = G__12365;
chunk__10894_12359 = G__12366;
count__10895_12360 = G__12367;
i__10896_12361 = G__12368;
continue;
} else {
var temp__5823__auto___12373 = cljs.core.seq(seq__10893_12358);
if(temp__5823__auto___12373){
var seq__10893_12375__$1 = temp__5823__auto___12373;
if(cljs.core.chunked_seq_QMARK_(seq__10893_12375__$1)){
var c__5548__auto___12376 = cljs.core.chunk_first(seq__10893_12375__$1);
var G__12377 = cljs.core.chunk_rest(seq__10893_12375__$1);
var G__12378 = c__5548__auto___12376;
var G__12379 = cljs.core.count(c__5548__auto___12376);
var G__12380 = (0);
seq__10893_12358 = G__12377;
chunk__10894_12359 = G__12378;
count__10895_12360 = G__12379;
i__10896_12361 = G__12380;
continue;
} else {
var node_12383 = cljs.core.first(seq__10893_12375__$1);
fragment.appendChild(shadow.dom._to_dom(node_12383));


var G__12387 = cljs.core.next(seq__10893_12375__$1);
var G__12389 = null;
var G__12390 = (0);
var G__12392 = (0);
seq__10893_12358 = G__12387;
chunk__10894_12359 = G__12389;
count__10895_12360 = G__12390;
i__10896_12361 = G__12392;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq10884){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10884));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__10916_12408 = cljs.core.seq(scripts);
var chunk__10917_12409 = null;
var count__10918_12410 = (0);
var i__10919_12411 = (0);
while(true){
if((i__10919_12411 < count__10918_12410)){
var vec__10938_12417 = chunk__10917_12409.cljs$core$IIndexed$_nth$arity$2(null,i__10919_12411);
var script_tag_12418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10938_12417,(0),null);
var script_body_12419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10938_12417,(1),null);
eval(script_body_12419);


var G__12424 = seq__10916_12408;
var G__12425 = chunk__10917_12409;
var G__12426 = count__10918_12410;
var G__12427 = (i__10919_12411 + (1));
seq__10916_12408 = G__12424;
chunk__10917_12409 = G__12425;
count__10918_12410 = G__12426;
i__10919_12411 = G__12427;
continue;
} else {
var temp__5823__auto___12435 = cljs.core.seq(seq__10916_12408);
if(temp__5823__auto___12435){
var seq__10916_12436__$1 = temp__5823__auto___12435;
if(cljs.core.chunked_seq_QMARK_(seq__10916_12436__$1)){
var c__5548__auto___12437 = cljs.core.chunk_first(seq__10916_12436__$1);
var G__12438 = cljs.core.chunk_rest(seq__10916_12436__$1);
var G__12439 = c__5548__auto___12437;
var G__12440 = cljs.core.count(c__5548__auto___12437);
var G__12441 = (0);
seq__10916_12408 = G__12438;
chunk__10917_12409 = G__12439;
count__10918_12410 = G__12440;
i__10919_12411 = G__12441;
continue;
} else {
var vec__10944_12447 = cljs.core.first(seq__10916_12436__$1);
var script_tag_12448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10944_12447,(0),null);
var script_body_12449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10944_12447,(1),null);
eval(script_body_12449);


var G__12455 = cljs.core.next(seq__10916_12436__$1);
var G__12456 = null;
var G__12457 = (0);
var G__12458 = (0);
seq__10916_12408 = G__12455;
chunk__10917_12409 = G__12456;
count__10918_12410 = G__12457;
i__10919_12411 = G__12458;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__10949){
var vec__10950 = p__10949;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10950,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10950,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__10967 = arguments.length;
switch (G__10967) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__10992 = cljs.core.seq(style_keys);
var chunk__10993 = null;
var count__10994 = (0);
var i__10995 = (0);
while(true){
if((i__10995 < count__10994)){
var it = chunk__10993.cljs$core$IIndexed$_nth$arity$2(null,i__10995);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12485 = seq__10992;
var G__12486 = chunk__10993;
var G__12487 = count__10994;
var G__12488 = (i__10995 + (1));
seq__10992 = G__12485;
chunk__10993 = G__12486;
count__10994 = G__12487;
i__10995 = G__12488;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__10992);
if(temp__5823__auto__){
var seq__10992__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10992__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__10992__$1);
var G__12515 = cljs.core.chunk_rest(seq__10992__$1);
var G__12516 = c__5548__auto__;
var G__12517 = cljs.core.count(c__5548__auto__);
var G__12518 = (0);
seq__10992 = G__12515;
chunk__10993 = G__12516;
count__10994 = G__12517;
i__10995 = G__12518;
continue;
} else {
var it = cljs.core.first(seq__10992__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12541 = cljs.core.next(seq__10992__$1);
var G__12542 = null;
var G__12543 = (0);
var G__12544 = (0);
seq__10992 = G__12541;
chunk__10993 = G__12542;
count__10994 = G__12543;
i__10995 = G__12544;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k11024,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__11044 = k11024;
var G__11044__$1 = (((G__11044 instanceof cljs.core.Keyword))?G__11044.fqn:null);
switch (G__11044__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k11024,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__11053){
var vec__11054 = p__11053;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11054,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11054,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__(ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11023){
var self__ = this;
var G__11023__$1 = this;
return (new cljs.core.RecordIter((0),G__11023__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this11025,other11026){
var self__ = this;
var this11025__$1 = this;
return (((!((other11026 == null)))) && ((((this11025__$1.constructor === other11026.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11025__$1.x,other11026.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11025__$1.y,other11026.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11025__$1.__extmap,other11026.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k11024){
var self__ = this;
var this__5330__auto____$1 = this;
var G__11133 = k11024;
var G__11133__$1 = (((G__11133 instanceof cljs.core.Keyword))?G__11133.fqn:null);
switch (G__11133__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k11024);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__11023){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__11151 = cljs.core.keyword_identical_QMARK_;
var expr__11155 = k__5332__auto__;
if(cljs.core.truth_((pred__11151.cljs$core$IFn$_invoke$arity$2 ? pred__11151.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__11155) : pred__11151(new cljs.core.Keyword(null,"x","x",2099068185),expr__11155)))){
return (new shadow.dom.Coordinate(G__11023,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11151.cljs$core$IFn$_invoke$arity$2 ? pred__11151.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__11155) : pred__11151(new cljs.core.Keyword(null,"y","y",-1757859776),expr__11155)))){
return (new shadow.dom.Coordinate(self__.x,G__11023,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__11023),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__11023){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__11023,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__11032){
var extmap__5365__auto__ = (function (){var G__11227 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__11032,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__11032)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__11227);
} else {
return G__11227;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__11032),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__11032),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k11331,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__11347 = k11331;
var G__11347__$1 = (((G__11347 instanceof cljs.core.Keyword))?G__11347.fqn:null);
switch (G__11347__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k11331,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__11366){
var vec__11368 = p__11366;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11368,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11368,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__(ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#shadow.dom.Size{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11330){
var self__ = this;
var G__11330__$1 = this;
return (new cljs.core.RecordIter((0),G__11330__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this11332,other11333){
var self__ = this;
var this11332__$1 = this;
return (((!((other11333 == null)))) && ((((this11332__$1.constructor === other11333.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11332__$1.w,other11333.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11332__$1.h,other11333.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11332__$1.__extmap,other11333.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k11331){
var self__ = this;
var this__5330__auto____$1 = this;
var G__11519 = k11331;
var G__11519__$1 = (((G__11519 instanceof cljs.core.Keyword))?G__11519.fqn:null);
switch (G__11519__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k11331);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__11330){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__11525 = cljs.core.keyword_identical_QMARK_;
var expr__11526 = k__5332__auto__;
if(cljs.core.truth_((pred__11525.cljs$core$IFn$_invoke$arity$2 ? pred__11525.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__11526) : pred__11525(new cljs.core.Keyword(null,"w","w",354169001),expr__11526)))){
return (new shadow.dom.Size(G__11330,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11525.cljs$core$IFn$_invoke$arity$2 ? pred__11525.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__11526) : pred__11525(new cljs.core.Keyword(null,"h","h",1109658740),expr__11526)))){
return (new shadow.dom.Size(self__.w,G__11330,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__11330),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__11330){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__11330,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__11336){
var extmap__5365__auto__ = (function (){var G__11566 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__11336,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__11336)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__11566);
} else {
return G__11566;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__11336),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__11336),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5613__auto__ = opts;
var l__5614__auto__ = a__5613__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5614__auto__)){
var G__12831 = (i + (1));
var G__12832 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__12831;
ret = G__12832;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__11680){
var vec__11681 = p__11680;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11681,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11681,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__11703 = arguments.length;
switch (G__11703) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__12863 = ps;
var G__12864 = (i + (1));
el__$1 = G__12863;
i = G__12864;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents(parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__11811 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11811,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11811,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11811,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__11819_12876 = cljs.core.seq(props);
var chunk__11820_12877 = null;
var count__11821_12878 = (0);
var i__11822_12879 = (0);
while(true){
if((i__11822_12879 < count__11821_12878)){
var vec__11837_12880 = chunk__11820_12877.cljs$core$IIndexed$_nth$arity$2(null,i__11822_12879);
var k_12881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11837_12880,(0),null);
var v_12882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11837_12880,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_12881);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12881),v_12882);


var G__12884 = seq__11819_12876;
var G__12885 = chunk__11820_12877;
var G__12886 = count__11821_12878;
var G__12887 = (i__11822_12879 + (1));
seq__11819_12876 = G__12884;
chunk__11820_12877 = G__12885;
count__11821_12878 = G__12886;
i__11822_12879 = G__12887;
continue;
} else {
var temp__5823__auto___12888 = cljs.core.seq(seq__11819_12876);
if(temp__5823__auto___12888){
var seq__11819_12889__$1 = temp__5823__auto___12888;
if(cljs.core.chunked_seq_QMARK_(seq__11819_12889__$1)){
var c__5548__auto___12890 = cljs.core.chunk_first(seq__11819_12889__$1);
var G__12891 = cljs.core.chunk_rest(seq__11819_12889__$1);
var G__12892 = c__5548__auto___12890;
var G__12893 = cljs.core.count(c__5548__auto___12890);
var G__12894 = (0);
seq__11819_12876 = G__12891;
chunk__11820_12877 = G__12892;
count__11821_12878 = G__12893;
i__11822_12879 = G__12894;
continue;
} else {
var vec__11846_12895 = cljs.core.first(seq__11819_12889__$1);
var k_12896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11846_12895,(0),null);
var v_12897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11846_12895,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_12896);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12896),v_12897);


var G__12898 = cljs.core.next(seq__11819_12889__$1);
var G__12899 = null;
var G__12900 = (0);
var G__12901 = (0);
seq__11819_12876 = G__12898;
chunk__11820_12877 = G__12899;
count__11821_12878 = G__12900;
i__11822_12879 = G__12901;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__11863 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11863,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11863,(1),null);
var seq__11867_12907 = cljs.core.seq(node_children);
var chunk__11869_12908 = null;
var count__11870_12909 = (0);
var i__11871_12910 = (0);
while(true){
if((i__11871_12910 < count__11870_12909)){
var child_struct_12912 = chunk__11869_12908.cljs$core$IIndexed$_nth$arity$2(null,i__11871_12910);
if((!((child_struct_12912 == null)))){
if(typeof child_struct_12912 === 'string'){
var text_12917 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_12917),child_struct_12912].join(''));
} else {
var children_12918 = shadow.dom.svg_node(child_struct_12912);
if(cljs.core.seq_QMARK_(children_12918)){
var seq__11902_12920 = cljs.core.seq(children_12918);
var chunk__11904_12921 = null;
var count__11905_12922 = (0);
var i__11906_12923 = (0);
while(true){
if((i__11906_12923 < count__11905_12922)){
var child_12924 = chunk__11904_12921.cljs$core$IIndexed$_nth$arity$2(null,i__11906_12923);
if(cljs.core.truth_(child_12924)){
node.appendChild(child_12924);


var G__12929 = seq__11902_12920;
var G__12930 = chunk__11904_12921;
var G__12931 = count__11905_12922;
var G__12932 = (i__11906_12923 + (1));
seq__11902_12920 = G__12929;
chunk__11904_12921 = G__12930;
count__11905_12922 = G__12931;
i__11906_12923 = G__12932;
continue;
} else {
var G__12933 = seq__11902_12920;
var G__12934 = chunk__11904_12921;
var G__12935 = count__11905_12922;
var G__12936 = (i__11906_12923 + (1));
seq__11902_12920 = G__12933;
chunk__11904_12921 = G__12934;
count__11905_12922 = G__12935;
i__11906_12923 = G__12936;
continue;
}
} else {
var temp__5823__auto___12937 = cljs.core.seq(seq__11902_12920);
if(temp__5823__auto___12937){
var seq__11902_12938__$1 = temp__5823__auto___12937;
if(cljs.core.chunked_seq_QMARK_(seq__11902_12938__$1)){
var c__5548__auto___12939 = cljs.core.chunk_first(seq__11902_12938__$1);
var G__12940 = cljs.core.chunk_rest(seq__11902_12938__$1);
var G__12941 = c__5548__auto___12939;
var G__12942 = cljs.core.count(c__5548__auto___12939);
var G__12943 = (0);
seq__11902_12920 = G__12940;
chunk__11904_12921 = G__12941;
count__11905_12922 = G__12942;
i__11906_12923 = G__12943;
continue;
} else {
var child_12946 = cljs.core.first(seq__11902_12938__$1);
if(cljs.core.truth_(child_12946)){
node.appendChild(child_12946);


var G__12947 = cljs.core.next(seq__11902_12938__$1);
var G__12948 = null;
var G__12949 = (0);
var G__12950 = (0);
seq__11902_12920 = G__12947;
chunk__11904_12921 = G__12948;
count__11905_12922 = G__12949;
i__11906_12923 = G__12950;
continue;
} else {
var G__12951 = cljs.core.next(seq__11902_12938__$1);
var G__12952 = null;
var G__12953 = (0);
var G__12954 = (0);
seq__11902_12920 = G__12951;
chunk__11904_12921 = G__12952;
count__11905_12922 = G__12953;
i__11906_12923 = G__12954;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_12918);
}
}


var G__12955 = seq__11867_12907;
var G__12956 = chunk__11869_12908;
var G__12957 = count__11870_12909;
var G__12958 = (i__11871_12910 + (1));
seq__11867_12907 = G__12955;
chunk__11869_12908 = G__12956;
count__11870_12909 = G__12957;
i__11871_12910 = G__12958;
continue;
} else {
var G__12959 = seq__11867_12907;
var G__12960 = chunk__11869_12908;
var G__12961 = count__11870_12909;
var G__12962 = (i__11871_12910 + (1));
seq__11867_12907 = G__12959;
chunk__11869_12908 = G__12960;
count__11870_12909 = G__12961;
i__11871_12910 = G__12962;
continue;
}
} else {
var temp__5823__auto___12963 = cljs.core.seq(seq__11867_12907);
if(temp__5823__auto___12963){
var seq__11867_12964__$1 = temp__5823__auto___12963;
if(cljs.core.chunked_seq_QMARK_(seq__11867_12964__$1)){
var c__5548__auto___12965 = cljs.core.chunk_first(seq__11867_12964__$1);
var G__12966 = cljs.core.chunk_rest(seq__11867_12964__$1);
var G__12967 = c__5548__auto___12965;
var G__12968 = cljs.core.count(c__5548__auto___12965);
var G__12969 = (0);
seq__11867_12907 = G__12966;
chunk__11869_12908 = G__12967;
count__11870_12909 = G__12968;
i__11871_12910 = G__12969;
continue;
} else {
var child_struct_12971 = cljs.core.first(seq__11867_12964__$1);
if((!((child_struct_12971 == null)))){
if(typeof child_struct_12971 === 'string'){
var text_12973 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_12973),child_struct_12971].join(''));
} else {
var children_12976 = shadow.dom.svg_node(child_struct_12971);
if(cljs.core.seq_QMARK_(children_12976)){
var seq__11921_12978 = cljs.core.seq(children_12976);
var chunk__11923_12979 = null;
var count__11924_12980 = (0);
var i__11925_12981 = (0);
while(true){
if((i__11925_12981 < count__11924_12980)){
var child_12982 = chunk__11923_12979.cljs$core$IIndexed$_nth$arity$2(null,i__11925_12981);
if(cljs.core.truth_(child_12982)){
node.appendChild(child_12982);


var G__12983 = seq__11921_12978;
var G__12984 = chunk__11923_12979;
var G__12985 = count__11924_12980;
var G__12986 = (i__11925_12981 + (1));
seq__11921_12978 = G__12983;
chunk__11923_12979 = G__12984;
count__11924_12980 = G__12985;
i__11925_12981 = G__12986;
continue;
} else {
var G__12987 = seq__11921_12978;
var G__12988 = chunk__11923_12979;
var G__12989 = count__11924_12980;
var G__12990 = (i__11925_12981 + (1));
seq__11921_12978 = G__12987;
chunk__11923_12979 = G__12988;
count__11924_12980 = G__12989;
i__11925_12981 = G__12990;
continue;
}
} else {
var temp__5823__auto___12991__$1 = cljs.core.seq(seq__11921_12978);
if(temp__5823__auto___12991__$1){
var seq__11921_12992__$1 = temp__5823__auto___12991__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11921_12992__$1)){
var c__5548__auto___12993 = cljs.core.chunk_first(seq__11921_12992__$1);
var G__12994 = cljs.core.chunk_rest(seq__11921_12992__$1);
var G__12995 = c__5548__auto___12993;
var G__12996 = cljs.core.count(c__5548__auto___12993);
var G__12997 = (0);
seq__11921_12978 = G__12994;
chunk__11923_12979 = G__12995;
count__11924_12980 = G__12996;
i__11925_12981 = G__12997;
continue;
} else {
var child_12998 = cljs.core.first(seq__11921_12992__$1);
if(cljs.core.truth_(child_12998)){
node.appendChild(child_12998);


var G__12999 = cljs.core.next(seq__11921_12992__$1);
var G__13000 = null;
var G__13001 = (0);
var G__13002 = (0);
seq__11921_12978 = G__12999;
chunk__11923_12979 = G__13000;
count__11924_12980 = G__13001;
i__11925_12981 = G__13002;
continue;
} else {
var G__13003 = cljs.core.next(seq__11921_12992__$1);
var G__13004 = null;
var G__13005 = (0);
var G__13006 = (0);
seq__11921_12978 = G__13003;
chunk__11923_12979 = G__13004;
count__11924_12980 = G__13005;
i__11925_12981 = G__13006;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_12976);
}
}


var G__13007 = cljs.core.next(seq__11867_12964__$1);
var G__13008 = null;
var G__13009 = (0);
var G__13010 = (0);
seq__11867_12907 = G__13007;
chunk__11869_12908 = G__13008;
count__11870_12909 = G__13009;
i__11871_12910 = G__13010;
continue;
} else {
var G__13012 = cljs.core.next(seq__11867_12964__$1);
var G__13013 = null;
var G__13014 = (0);
var G__13015 = (0);
seq__11867_12907 = G__13012;
chunk__11869_12908 = G__13013;
count__11870_12909 = G__13014;
i__11871_12910 = G__13015;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___13018 = arguments.length;
var i__5750__auto___13019 = (0);
while(true){
if((i__5750__auto___13019 < len__5749__auto___13018)){
args__5755__auto__.push((arguments[i__5750__auto___13019]));

var G__13020 = (i__5750__auto___13019 + (1));
i__5750__auto___13019 = G__13020;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq11949){
var G__11950 = cljs.core.first(seq11949);
var seq11949__$1 = cljs.core.next(seq11949);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11950,seq11949__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
