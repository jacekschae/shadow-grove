goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__11930){
var map__11931 = p__11930;
var map__11931__$1 = cljs.core.__destructure_map(map__11931);
var runtime = map__11931__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11931__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5025__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_12205 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_12205)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__11935 = runtime;
var G__11936 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_12205);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__11935,G__11936) : shadow.remote.runtime.shared.process(G__11935,G__11936));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__11945,res){
var map__11947 = p__11945;
var map__11947__$1 = cljs.core.__destructure_map(map__11947);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11947__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11947__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__11951 = res;
var G__11951__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11951,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__11951);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11951__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__11951__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__11961 = arguments.length;
switch (G__11961) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__11962,msg,handlers,timeout_after_ms){
var map__11963 = p__11962;
var map__11963__$1 = cljs.core.__destructure_map(map__11963);
var runtime = map__11963__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11963__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___12254 = arguments.length;
var i__5750__auto___12259 = (0);
while(true){
if((i__5750__auto___12259 < len__5749__auto___12254)){
args__5755__auto__.push((arguments[i__5750__auto___12259]));

var G__12260 = (i__5750__auto___12259 + (1));
i__5750__auto___12259 = G__12260;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__11973,ev,args){
var map__11974 = p__11973;
var map__11974__$1 = cljs.core.__destructure_map(map__11974);
var runtime = map__11974__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11974__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__11975 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__11978 = null;
var count__11979 = (0);
var i__11980 = (0);
while(true){
if((i__11980 < count__11979)){
var ext = chunk__11978.cljs$core$IIndexed$_nth$arity$2(null,i__11980);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__12280 = seq__11975;
var G__12281 = chunk__11978;
var G__12282 = count__11979;
var G__12283 = (i__11980 + (1));
seq__11975 = G__12280;
chunk__11978 = G__12281;
count__11979 = G__12282;
i__11980 = G__12283;
continue;
} else {
var G__12286 = seq__11975;
var G__12287 = chunk__11978;
var G__12288 = count__11979;
var G__12289 = (i__11980 + (1));
seq__11975 = G__12286;
chunk__11978 = G__12287;
count__11979 = G__12288;
i__11980 = G__12289;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11975);
if(temp__5823__auto__){
var seq__11975__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11975__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__11975__$1);
var G__12294 = cljs.core.chunk_rest(seq__11975__$1);
var G__12295 = c__5548__auto__;
var G__12296 = cljs.core.count(c__5548__auto__);
var G__12297 = (0);
seq__11975 = G__12294;
chunk__11978 = G__12295;
count__11979 = G__12296;
i__11980 = G__12297;
continue;
} else {
var ext = cljs.core.first(seq__11975__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__12302 = cljs.core.next(seq__11975__$1);
var G__12303 = null;
var G__12304 = (0);
var G__12305 = (0);
seq__11975 = G__12302;
chunk__11978 = G__12303;
count__11979 = G__12304;
i__11980 = G__12305;
continue;
} else {
var G__12306 = cljs.core.next(seq__11975__$1);
var G__12307 = null;
var G__12308 = (0);
var G__12309 = (0);
seq__11975 = G__12306;
chunk__11978 = G__12307;
count__11979 = G__12308;
i__11980 = G__12309;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq11968){
var G__11969 = cljs.core.first(seq11968);
var seq11968__$1 = cljs.core.next(seq11968);
var G__11970 = cljs.core.first(seq11968__$1);
var seq11968__$2 = cljs.core.next(seq11968__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11969,G__11970,seq11968__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__11991,p__11992){
var map__11993 = p__11991;
var map__11993__$1 = cljs.core.__destructure_map(map__11993);
var runtime = map__11993__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11993__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__11994 = p__11992;
var map__11994__$1 = cljs.core.__destructure_map(map__11994);
var msg = map__11994__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11994__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__11995 = cljs.core.deref(state_ref);
var map__11995__$1 = cljs.core.__destructure_map(map__11995);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11995__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11995__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__12003,msg){
var map__12004 = p__12003;
var map__12004__$1 = cljs.core.__destructure_map(map__12004);
var runtime = map__12004__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12004__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__12023,key,p__12024){
var map__12025 = p__12023;
var map__12025__$1 = cljs.core.__destructure_map(map__12025);
var state = map__12025__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12025__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__12026 = p__12024;
var map__12026__$1 = cljs.core.__destructure_map(map__12026);
var spec = map__12026__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12026__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12026__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__12032,key,spec){
var map__12034 = p__12032;
var map__12034__$1 = cljs.core.__destructure_map(map__12034);
var runtime = map__12034__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12034__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___12381 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___12381 == null)){
} else {
var on_welcome_12386 = temp__5827__auto___12381;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_12386.cljs$core$IFn$_invoke$arity$0 ? on_welcome_12386.cljs$core$IFn$_invoke$arity$0() : on_welcome_12386());
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__12037_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__12037_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__12039_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__12039_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__12040_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__12040_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__12041_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__12041_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__12042_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__12042_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__12071,key){
var map__12072 = p__12071;
var map__12072__$1 = cljs.core.__destructure_map(map__12072);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12072__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__12081,msg){
var map__12086 = p__12081;
var map__12086__$1 = cljs.core.__destructure_map(map__12086);
var runtime = map__12086__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12086__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__12104,p__12105){
var map__12106 = p__12104;
var map__12106__$1 = cljs.core.__destructure_map(map__12106);
var runtime = map__12106__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12106__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__12107 = p__12105;
var map__12107__$1 = cljs.core.__destructure_map(map__12107);
var msg = map__12107__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12107__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12107__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler(msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler(msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler(msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__12121 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__12123 = null;
var count__12124 = (0);
var i__12125 = (0);
while(true){
if((i__12125 < count__12124)){
var map__12132 = chunk__12123.cljs$core$IIndexed$_nth$arity$2(null,i__12125);
var map__12132__$1 = cljs.core.__destructure_map(map__12132);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12132__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle());


var G__12501 = seq__12121;
var G__12502 = chunk__12123;
var G__12503 = count__12124;
var G__12504 = (i__12125 + (1));
seq__12121 = G__12501;
chunk__12123 = G__12502;
count__12124 = G__12503;
i__12125 = G__12504;
continue;
} else {
var G__12510 = seq__12121;
var G__12511 = chunk__12123;
var G__12512 = count__12124;
var G__12513 = (i__12125 + (1));
seq__12121 = G__12510;
chunk__12123 = G__12511;
count__12124 = G__12512;
i__12125 = G__12513;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12121);
if(temp__5823__auto__){
var seq__12121__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12121__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__12121__$1);
var G__12520 = cljs.core.chunk_rest(seq__12121__$1);
var G__12521 = c__5548__auto__;
var G__12522 = cljs.core.count(c__5548__auto__);
var G__12523 = (0);
seq__12121 = G__12520;
chunk__12123 = G__12521;
count__12124 = G__12522;
i__12125 = G__12523;
continue;
} else {
var map__12152 = cljs.core.first(seq__12121__$1);
var map__12152__$1 = cljs.core.__destructure_map(map__12152);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12152__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle());


var G__12529 = cljs.core.next(seq__12121__$1);
var G__12530 = null;
var G__12531 = (0);
var G__12532 = (0);
seq__12121 = G__12529;
chunk__12123 = G__12530;
count__12124 = G__12531;
i__12125 = G__12532;
continue;
} else {
var G__12533 = cljs.core.next(seq__12121__$1);
var G__12534 = null;
var G__12535 = (0);
var G__12536 = (0);
seq__12121 = G__12533;
chunk__12123 = G__12534;
count__12124 = G__12535;
i__12125 = G__12536;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
