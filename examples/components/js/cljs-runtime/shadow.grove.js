goog.provide('shadow.grove');
shadow.grove.vec_conj = (function shadow$grove$vec_conj(x,y){
if((x == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [y], null);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(x,y);
}
});
shadow.grove.dev_log_handler = null;
shadow.grove.dispatch_up_BANG_ = (function shadow$grove$dispatch_up_BANG_(p__9113,ev_map){
var map__9116 = p__9113;
var map__9116__$1 = cljs.core.__destructure_map(map__9116);
var env = map__9116__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9116__$1,new cljs.core.Keyword("shadow.grove.components","parent","shadow.grove.components/parent",522357606));
if(cljs.core.map_QMARK_(env)){
} else {
throw (new Error("Assert failed: (map? env)"));
}

if(cljs.core.map_QMARK_(ev_map)){
} else {
throw (new Error("Assert failed: (map? ev-map)"));
}

if(cljs.core.qualified_keyword_QMARK_(new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(ev_map))){
} else {
throw (new Error("Assert failed: (qualified-keyword? (:e ev-map))"));
}

return parent.shadow$grove$protocols$IHandleEvents$handle_event_BANG_$arity$4(null,ev_map,null,env);
});
shadow.grove.suspend_BANG_ = (function shadow$grove$suspend_BANG_(var_args){
var G__9131 = arguments.length;
switch (G__9131) {
case 0:
return shadow.grove.suspend_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.grove.suspend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.grove.suspend_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.grove.suspend_BANG_.cljs$core$IFn$_invoke$arity$1(null);
}));

(shadow.grove.suspend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (default_return){
(shadow.grove.runtime._STAR_ready_STAR_ = false);

var or__5025__auto__ = shadow.grove.runtime._STAR_slot_value_STAR_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return default_return;
}
}));

(shadow.grove.suspend_BANG_.cljs$lang$maxFixedArity = 1);

shadow.grove.query = (function shadow$grove$query(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9321 = arguments.length;
var i__5750__auto___9322 = (0);
while(true){
if((i__5750__auto___9322 < len__5749__auto___9321)){
args__5755__auto__.push((arguments[i__5750__auto___9322]));

var G__9323 = (i__5750__auto___9322 + (1));
i__5750__auto___9322 = G__9323;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return shadow.grove.query.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(shadow.grove.query.cljs$core$IFn$_invoke$arity$variadic = (function (query_fn,args){
return shadow.grove.impl.slot_query(args,query_fn);
}));

(shadow.grove.query.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.grove.query.cljs$lang$applyTo = (function (seq9139){
var G__9140 = cljs.core.first(seq9139);
var seq9139__$1 = cljs.core.next(seq9139);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9140,seq9139__$1);
}));

shadow.grove.kv_lookups = (function shadow$grove$kv_lookups(kv_table,keys){
return shadow.grove.impl.slot_query(null,(function (env){
return cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,kv_table),keys);
}));
});
shadow.grove.kv_lookup = (function shadow$grove$kv_lookup(var_args){
var G__9175 = arguments.length;
switch (G__9175) {
case 1:
return shadow.grove.kv_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.grove.kv_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___9362 = arguments.length;
var i__5750__auto___9380 = (0);
while(true){
if((i__5750__auto___9380 < len__5749__auto___9362)){
args_arr__5774__auto__.push((arguments[i__5750__auto___9380]));

var G__9387 = (i__5750__auto___9380 + (1));
i__5750__auto___9380 = G__9387;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return shadow.grove.kv_lookup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(shadow.grove.kv_lookup.cljs$core$IFn$_invoke$arity$1 = (function (kv_table){
return shadow.grove.impl.slot_kv_get(kv_table);
}));

(shadow.grove.kv_lookup.cljs$core$IFn$_invoke$arity$2 = (function (kv_table,key){
return shadow.grove.impl.slot_kv_lookup(kv_table,key);
}));

(shadow.grove.kv_lookup.cljs$core$IFn$_invoke$arity$variadic = (function (kv_table,key,path){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shadow.grove.kv_lookup.cljs$core$IFn$_invoke$arity$2(kv_table,key),path);
}));

/** @this {Function} */
(shadow.grove.kv_lookup.cljs$lang$applyTo = (function (seq9167){
var G__9168 = cljs.core.first(seq9167);
var seq9167__$1 = cljs.core.next(seq9167);
var G__9169 = cljs.core.first(seq9167__$1);
var seq9167__$2 = cljs.core.next(seq9167__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9168,G__9169,seq9167__$2);
}));

(shadow.grove.kv_lookup.cljs$lang$maxFixedArity = (2));

shadow.grove.use_state = (function shadow$grove$use_state(var_args){
var G__9186 = arguments.length;
switch (G__9186) {
case 0:
return shadow.grove.use_state.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.grove.use_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.grove.use_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.grove.use_state.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.grove.impl.slot_state(cljs.core.PersistentArrayMap.EMPTY,null);
}));

(shadow.grove.use_state.cljs$core$IFn$_invoke$arity$1 = (function (init_state){
if((((!((init_state == null))))?(((((init_state.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === init_state.cljs$core$IMeta$))))?true:(((!init_state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,init_state):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,init_state))){
} else {
throw (new Error("Assert failed: (satisfies? IMeta init-state)"));
}

return shadow.grove.impl.slot_state(init_state,null);
}));

(shadow.grove.use_state.cljs$core$IFn$_invoke$arity$2 = (function (init_state,merge_fn){
if((((!((init_state == null))))?(((((init_state.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === init_state.cljs$core$IMeta$))))?true:(((!init_state.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,init_state):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,init_state))){
} else {
throw (new Error("Assert failed: (satisfies? IMeta init-state)"));
}

if(cljs.core.fn_QMARK_(merge_fn)){
} else {
throw (new Error("Assert failed: (fn? merge-fn)"));
}

return shadow.grove.impl.slot_state(init_state,merge_fn);
}));

(shadow.grove.use_state.cljs$lang$maxFixedArity = 2);

shadow.grove.swap_state_BANG_ = (function shadow$grove$swap_state_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___9414 = arguments.length;
var i__5750__auto___9415 = (0);
while(true){
if((i__5750__auto___9415 < len__5749__auto___9414)){
args__5755__auto__.push((arguments[i__5750__auto___9415]));

var G__9416 = (i__5750__auto___9415 + (1));
i__5750__auto___9415 = G__9416;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return shadow.grove.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(shadow.grove.swap_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,update_fn,args){
var ref = new cljs.core.Keyword("shadow.grove.impl","ref","shadow.grove.impl/ref",-1691369936).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(state));
if(cljs.core.truth_(ref)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("can only swap-state! things created via use-state",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"thing","thing",270525715),state], null));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ref,(function (state__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(update_fn,state__$1,args);
}));
}));

(shadow.grove.swap_state_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.grove.swap_state_BANG_.cljs$lang$applyTo = (function (seq9190){
var G__9191 = cljs.core.first(seq9190);
var seq9190__$1 = cljs.core.next(seq9190);
var G__9192 = cljs.core.first(seq9190__$1);
var seq9190__$2 = cljs.core.next(seq9190__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9191,G__9192,seq9190__$2);
}));

shadow.grove.run = (function shadow$grove$run(env,other_tx){
var process_fn = new cljs.core.Keyword("shadow.grove","tx","shadow.grove/tx",-1105384755).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(other_tx));
if(cljs.core.truth_(process_fn)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid run call, expected a deftx result",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"other-tx","other-tx",337309802),other_tx], null));
}

var G__9196 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword("shadow.grove","chain","shadow.grove/chain",1593290992),shadow.grove.vec_conj,other_tx);
var G__9197 = other_tx;
var G__9198 = new cljs.core.Keyword("shadow.grove","dom-event","shadow.grove/dom-event",719017637).cljs$core$IFn$_invoke$arity$1(env);
return (process_fn.cljs$core$IFn$_invoke$arity$3 ? process_fn.cljs$core$IFn$_invoke$arity$3(G__9196,G__9197,G__9198) : process_fn(G__9196,G__9197,G__9198));
});
shadow.grove.run_tx = (function shadow$grove$run_tx(var_args){
var G__9200 = arguments.length;
switch (G__9200) {
case 2:
return shadow.grove.run_tx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.grove.run_tx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.grove.run_tx.cljs$core$IFn$_invoke$arity$2 = (function (p__9201,tx){
var map__9202 = p__9201;
var map__9202__$1 = cljs.core.__destructure_map(map__9202);
var env = map__9202__$1;
var runtime_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9202__$1,new cljs.core.Keyword("shadow.grove","runtime-ref","shadow.grove/runtime-ref",555646968));
return shadow.grove.impl.process_event(runtime_ref,tx,null,env);
}));

(shadow.grove.run_tx.cljs$core$IFn$_invoke$arity$3 = (function (p__9203,tx,dom_event){
var map__9204 = p__9203;
var map__9204__$1 = cljs.core.__destructure_map(map__9204);
var env = map__9204__$1;
var runtime_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9204__$1,new cljs.core.Keyword("shadow.grove","runtime-ref","shadow.grove/runtime-ref",555646968));
return shadow.grove.impl.process_event(runtime_ref,tx,dom_event,env);
}));

(shadow.grove.run_tx.cljs$lang$maxFixedArity = 3);

shadow.grove.run_tx_BANG_ = (function shadow$grove$run_tx_BANG_(runtime_ref,tx){
if(cljs.core.truth_(shadow.grove.runtime.ref_QMARK_(runtime_ref))){
} else {
throw (new Error(["Assert failed: ","expected runtime ref?","\n","(rt/ref? runtime-ref)"].join('')));
}

var map__9207 = cljs.core.deref(runtime_ref);
var map__9207__$1 = cljs.core.__destructure_map(map__9207);
var scheduler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9207__$1,new cljs.core.Keyword("shadow.grove","scheduler","shadow.grove/scheduler",905620149));
var tx__$1 = ((cljs.core.fn_QMARK_(tx))?cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword("shadow.grove","fn!","shadow.grove/fn!",-745132315)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("shadow.grove","tx","shadow.grove/tx",-1105384755),tx], null)):((((cljs.core.map_QMARK_(tx)) && ((new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(tx) instanceof cljs.core.Keyword))))?tx:(function(){throw (new Error("run-tx! only accepts functions or maps as tx argument"))})()
));
return shadow.grove.impl.process_event(runtime_ref,tx__$1,null,null);
});
shadow.grove.unmount_root = (function shadow$grove$unmount_root(root_el){
var temp__5823__auto__ = root_el.sg$root;
if(cljs.core.truth_(temp__5823__auto__)){
var root = temp__5823__auto__;
root.destroy_BANG_(true);

delete root_el["sg$root"];

return delete root_el["sg$env"];
} else {
return null;
}
});
/**
 * watches an atom and triggers an update on change
 * accepts an optional path-or-fn arg that can be used for quick diffs
 * 
 * (watch the-atom [:foo])
 * (watch the-atom (fn [old new] ...))
 */
shadow.grove.watch = (function shadow$grove$watch(var_args){
var G__9210 = arguments.length;
switch (G__9210) {
case 1:
return shadow.grove.watch.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.grove.watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.grove.watch.cljs$core$IFn$_invoke$arity$1 = (function (watchable){
return shadow.grove.watch.cljs$core$IFn$_invoke$arity$2(watchable,cljs.core.identity);
}));

(shadow.grove.watch.cljs$core$IFn$_invoke$arity$2 = (function (watchable,path_or_fn){
if((((!((watchable == null))))?(((((watchable.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === watchable.cljs$core$IWatchable$))))?true:(((!watchable.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,watchable):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,watchable))){
} else {
throw (new Error("Assert failed: (satisfies? IWatchable watchable)"));
}

if((((!((watchable == null))))?(((((watchable.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === watchable.cljs$core$IDeref$))))?true:(((!watchable.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,watchable):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,watchable))){
} else {
throw (new Error("Assert failed: (satisfies? IDeref watchable)"));
}

if(cljs.core.vector_QMARK_(path_or_fn)){
return shadow.grove.components.atom_watch(watchable,(function (val){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(val,path_or_fn);
}));
} else {
return shadow.grove.components.atom_watch(watchable,path_or_fn);
}
}));

(shadow.grove.watch.cljs$lang$maxFixedArity = 2);

shadow.grove.env_watch = (function shadow$grove$env_watch(var_args){
var G__9214 = arguments.length;
switch (G__9214) {
case 1:
return shadow.grove.env_watch.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.grove.env_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.grove.env_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.grove.env_watch.cljs$core$IFn$_invoke$arity$1 = (function (key_to_atom){
return shadow.grove.env_watch.cljs$core$IFn$_invoke$arity$3(key_to_atom,cljs.core.PersistentVector.EMPTY,null);
}));

(shadow.grove.env_watch.cljs$core$IFn$_invoke$arity$2 = (function (key_to_atom,path){
return shadow.grove.env_watch.cljs$core$IFn$_invoke$arity$3(key_to_atom,path,null);
}));

(shadow.grove.env_watch.cljs$core$IFn$_invoke$arity$3 = (function (key_to_atom,path,default$){
if((key_to_atom instanceof cljs.core.Keyword)){
} else {
throw (new Error("Assert failed: (keyword? key-to-atom)"));
}

if(cljs.core.vector_QMARK_(path)){
} else {
throw (new Error("Assert failed: (vector? path)"));
}

return shadow.grove.components.env_watch(key_to_atom,path,default$);
}));

(shadow.grove.env_watch.cljs$lang$maxFixedArity = 3);

shadow.grove.suspense = (function shadow$grove$suspense(opts,vnode){
return (new shadow.grove.ui.suspense.SuspenseInit(opts,vnode));
});
shadow.grove.simple_seq = (function shadow$grove$simple_seq(coll,render_fn){
return shadow.arborist.collections.simple_seq(coll,render_fn);
});
shadow.grove.keyed_seq = (function shadow$grove$keyed_seq(coll,key_fn,render_fn){
return shadow.arborist.collections.keyed_seq(coll,key_fn,render_fn);
});
/**
 * (bind x
 *   (sg/track-change val
 *     (fn [env old new prev-result]
 *       ...))
 * 
 * only calls trigger-fn if val has changed, even if trigger-fn itself may have changed
 * calls (trigger-fn env nil val) on mount
 * return value is used for bind (i.e. x above)
 * calls (trigger-fn env prev-val val prev-result) when val changed between renders
 * 
 * env is component environment
 */
shadow.grove.track_change = (function shadow$grove$track_change(val,trigger_fn){
return shadow.grove.components.track_change(val,trigger_fn);
});
shadow.grove.ref = (function shadow$grove$ref(){
return cljs.core.volatile_BANG_(null);
});
/**
 * calls (callback env) after render when provided deps argument changes
 * callback can return a function which will be called if cleanup is required
 */
shadow.grove.effect = (function shadow$grove$effect(deps,callback){
if(cljs.core.fn_QMARK_(callback)){
} else {
throw (new Error("Assert failed: (fn? callback)"));
}

return shadow.grove.components.slot_effect(deps,callback);
});
/**
 * call (callback env) after every render
 */
shadow.grove.render_effect = (function shadow$grove$render_effect(callback){
if(cljs.core.fn_QMARK_(callback)){
} else {
throw (new Error("Assert failed: (fn? callback)"));
}

return shadow.grove.components.slot_effect(new cljs.core.Keyword(null,"render","render",-1408033454),callback);
});
/**
 * call (callback env) on mount once
 */
shadow.grove.mount_effect = (function shadow$grove$mount_effect(callback){
if(cljs.core.fn_QMARK_(callback)){
} else {
throw (new Error("Assert failed: (fn? callback)"));
}

return shadow.grove.components.slot_effect(new cljs.core.Keyword(null,"mount","mount",-1560582470),callback);
});
shadow.grove.portal = (function shadow$grove$portal(var_args){
var G__9224 = arguments.length;
switch (G__9224) {
case 1:
return shadow.grove.portal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.grove.portal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.grove.portal.cljs$core$IFn$_invoke$arity$1 = (function (body){
return shadow.grove.ui.portal.portal(document.body,body);
}));

(shadow.grove.portal.cljs$core$IFn$_invoke$arity$2 = (function (ref_node,body){
return shadow.grove.ui.portal.portal(ref_node,body);
}));

(shadow.grove.portal.cljs$lang$maxFixedArity = 2);

shadow.grove.default_error_handler = (function shadow$grove$default_error_handler(component,ex){
if(goog.DEBUG){
console.error(["An Error occurred in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component.config.component_name),", it will not be rendered."].join(''),component);
} else {
console.error("An Error occurred in Component, it will not be rendered.",component);
}

return console.error(ex);
});

/**
* @constructor
 * @implements {shadow.grove.protocols.IHandleEvents}
*/
shadow.grove.RootEventTarget = (function (rt_ref){
this.rt_ref = rt_ref;
});
(shadow.grove.RootEventTarget.prototype.shadow$grove$protocols$IHandleEvents$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.grove.RootEventTarget.prototype.shadow$grove$protocols$IHandleEvents$handle_event_BANG_$arity$4 = (function (this$,ev_map,e,origin){
var self__ = this;
var this$__$1 = this;
return shadow.grove.impl.process_event(self__.rt_ref,ev_map,e,origin);
}));

(shadow.grove.RootEventTarget.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rt-ref","rt-ref",-878707630,null)], null);
}));

(shadow.grove.RootEventTarget.cljs$lang$type = true);

(shadow.grove.RootEventTarget.cljs$lang$ctorStr = "shadow.grove/RootEventTarget");

(shadow.grove.RootEventTarget.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.grove/RootEventTarget");
}));

/**
 * Positional factory function for shadow.grove/RootEventTarget.
 */
shadow.grove.__GT_RootEventTarget = (function shadow$grove$__GT_RootEventTarget(rt_ref){
return (new shadow.grove.RootEventTarget(rt_ref));
});

shadow.grove.make_root_env = (function shadow$grove$make_root_env(rt_ref,root_el){
var event_target = (new shadow.grove.RootEventTarget(rt_ref));
var env_init = new cljs.core.Keyword("shadow.grove","env-init","shadow.grove/env-init",-169976051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rt_ref));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env,init_fn){
return (init_fn.cljs$core$IFn$_invoke$arity$1 ? init_fn.cljs$core$IFn$_invoke$arity$1(env) : init_fn(env));
}),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("shadow.grove","scheduler","shadow.grove/scheduler",905620149),new cljs.core.Keyword("shadow.grove","scheduler","shadow.grove/scheduler",905620149).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rt_ref)),new cljs.core.Keyword("shadow.grove.components","event-target","shadow.grove.components/event-target",-649187734),event_target,new cljs.core.Keyword("shadow.grove","suspense-keys","shadow.grove/suspense-keys",-1050374121),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword("shadow.grove","root-el","shadow.grove/root-el",1692884204),root_el,new cljs.core.Keyword("shadow.grove","runtime-ref","shadow.grove/runtime-ref",555646968),rt_ref,new cljs.core.Keyword("shadow.grove.components","error-handler","shadow.grove.components/error-handler",-1078927315),shadow.grove.default_error_handler], null),env_init);
});
shadow.grove.render_STAR_ = (function shadow$grove$render_STAR_(rt_ref,root_el,root_node){
if(cljs.core.truth_(shadow.grove.runtime.ref_QMARK_(rt_ref))){
} else {
throw (new Error("Assert failed: (rt/ref? rt-ref)"));
}

var temp__5821__auto__ = root_el.sg$root;
if(cljs.core.truth_(temp__5821__auto__)){
var active_root = temp__5821__auto__;
if(goog.DEBUG){
shadow.grove.components.mark_all_dirty_BANG_();
} else {
}

shadow.arborist.update_BANG_(active_root,root_node);

return new cljs.core.Keyword("shadow.grove","updated","shadow.grove/updated",1086195901);
} else {
var new_env = shadow.grove.make_root_env(rt_ref,root_el);
var new_root = shadow.arborist.dom_root.cljs$core$IFn$_invoke$arity$2(root_el,new_env);
shadow.arborist.update_BANG_(new_root,root_node);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(rt_ref,cljs.core.update,new cljs.core.Keyword("shadow.grove","roots","shadow.grove/roots",550329575),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_root], 0));

(root_el.sg$root = new_root);

(root_el.sg$env = new_env);

return new cljs.core.Keyword("shadow.grove","started","shadow.grove/started",-1053419007);
}
});
shadow.grove.render = (function shadow$grove$render(rt_ref,root_el,root_node){
if(cljs.core.truth_(shadow.grove.runtime.ref_QMARK_(rt_ref))){
} else {
throw (new Error("Assert failed: (rt/ref? rt-ref)"));
}

var t = shadow.grove.trace.render_root();
var res = shadow.grove.render_STAR_(rt_ref,root_el,root_node);
shadow.grove.trace.render_root_done(t);

return res;
});

/**
* @constructor
 * @implements {shadow.grove.protocols.IScheduleWork}
*/
shadow.grove.RootScheduler = (function (update_pending_QMARK_,work_set){
this.update_pending_QMARK_ = update_pending_QMARK_;
this.work_set = work_set;
});
(shadow.grove.RootScheduler.prototype.shadow$grove$protocols$IScheduleWork$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.grove.RootScheduler.prototype.shadow$grove$protocols$IScheduleWork$schedule_work_BANG_$arity$3 = (function (this$,work_task,trigger){
var self__ = this;
var this$__$1 = this;
self__.work_set.add(work_task);

if(cljs.core.truth_(self__.update_pending_QMARK_)){
return null;
} else {
(self__.update_pending_QMARK_ = true);

return shadow.grove.runtime.microtask((function (){
return this$__$1.microtask_start(trigger);
}));
}
}));

(shadow.grove.RootScheduler.prototype.shadow$grove$protocols$IScheduleWork$unschedule_BANG_$arity$2 = (function (this$,work_task){
var self__ = this;
var this$__$1 = this;
return self__.work_set.delete(work_task);
}));

(shadow.grove.RootScheduler.prototype.shadow$grove$protocols$IScheduleWork$did_suspend_BANG_$arity$2 = (function (this$,target){
var self__ = this;
var this$__$1 = this;
return null;
}));

(shadow.grove.RootScheduler.prototype.shadow$grove$protocols$IScheduleWork$did_finish_BANG_$arity$2 = (function (this$,target){
var self__ = this;
var this$__$1 = this;
return null;
}));

(shadow.grove.RootScheduler.prototype.microtask_start = (function (trigger){
var self__ = this;
var this$ = this;
var t_9725 = shadow.grove.trace.run_microtask(this$,trigger);
try{this$.process_work_BANG_(trigger);
}finally {shadow.grove.trace.run_microtask_done(this$,trigger,t_9725);
}
return undefined;
}));

(shadow.grove.RootScheduler.prototype.process_work_BANG_ = (function (trigger){
var self__ = this;
var this$ = this;
var t_9726 = shadow.grove.trace.run_work(this$,trigger);
try{var iter_9727 = self__.work_set.values();
while(true){
var current_9728 = iter_9727.next();
if((!(current_9728.done))){
current_9728.value.shadow$grove$protocols$IWork$work_BANG_$arity$1(null);

continue;
} else {
}
break;
}

undefined;
}finally {shadow.grove.trace.run_work_done(this$,trigger,t_9726);

(self__.update_pending_QMARK_ = false);
}
return undefined;
}));

(shadow.grove.RootScheduler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"update-pending?","update-pending?",1522583236,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"work-set","work-set",1431323643,null)], null);
}));

(shadow.grove.RootScheduler.cljs$lang$type = true);

(shadow.grove.RootScheduler.cljs$lang$ctorStr = "shadow.grove/RootScheduler");

(shadow.grove.RootScheduler.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.grove/RootScheduler");
}));

/**
 * Positional factory function for shadow.grove/RootScheduler.
 */
shadow.grove.__GT_RootScheduler = (function shadow$grove$__GT_RootScheduler(update_pending_QMARK_,work_set){
return (new shadow.grove.RootScheduler(update_pending_QMARK_,work_set));
});

shadow.grove.make_kv_navigable = (function shadow$grove$make_kv_navigable(init_data){
return cljs.core.with_meta(init_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("clojure.core.protocols","nav","clojure.core.protocols/nav",298936762,null),(function (kv,table_id,table){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(table,cljs.core.assoc,new cljs.core.Symbol("clojure.core.protocols","nav","clojure.core.protocols/nav",298936762,null),(function (table__$1,entry_key,v){
if((!(cljs.core.map_QMARK_(v)))){
return v;
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(v,cljs.core.assoc,new cljs.core.Symbol("clojure.core.protocols","nav","clojure.core.protocols/nav",298936762,null),(function (entry,k,v__$1){
if((v__$1 == null)){
return v__$1;
} else {
var fk_reference = (function (){var G__9232 = cljs.core.meta(table__$1);
var G__9232__$1 = (((G__9232 == null))?null:new cljs.core.Keyword("shadow.grove.kv","config","shadow.grove.kv/config",-623442541).cljs$core$IFn$_invoke$arity$1(G__9232));
var G__9232__$2 = (((G__9232__$1 == null))?null:new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__9232__$1));
var G__9232__$3 = (((G__9232__$2 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__9232__$2,k));
if((G__9232__$3 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"references","references",882562509).cljs$core$IFn$_invoke$arity$1(G__9232__$3);
}
})();
if(cljs.core.not(fk_reference)){
return v__$1;
} else {
var table__$2 = clojure.core.protocols.nav(kv,fk_reference,cljs.core.get.cljs$core$IFn$_invoke$arity$2(kv,fk_reference));
return clojure.core.protocols.nav(table__$2,v__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$2(table__$2,v__$1));
}
}
}));
}
}));
})], null));
});
shadow.grove.prepare = (function shadow$grove$prepare(app_id){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.grove.runtime.known_runtimes_ref),app_id))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["app ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app_id)," already registered!"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-id","app-id",2035039555),app_id], null));
} else {
}

var root_scheduler = (new shadow.grove.RootScheduler(false,(new Set())));
var rt_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("shadow.grove","kv","shadow.grove/kv",556503171),new cljs.core.Keyword("shadow.grove","fx-config","shadow.grove/fx-config",1659378758),new cljs.core.Keyword("shadow.grove","timeouts","shadow.grove/timeouts",-1977783386),new cljs.core.Keyword("shadow.grove","roots","shadow.grove/roots",550329575),new cljs.core.Keyword("shadow.grove","runtime","shadow.grove/runtime",-1898524983),new cljs.core.Keyword("shadow.grove","event-config","shadow.grove/event-config",1344327341),new cljs.core.Keyword("shadow.grove","env-init","shadow.grove/env-init",-169976051),new cljs.core.Keyword("shadow.grove","event-error-handler","shadow.grove/event-error-handler",1371547629),new cljs.core.Keyword("shadow.grove","scheduler","shadow.grove/scheduler",905620149),new cljs.core.Keyword("shadow.grove","app-id","shadow.grove/app-id",394484090),new cljs.core.Keyword("shadow.grove","event-interceptors","shadow.grove/event-interceptors",1389832382)],[shadow.grove.make_kv_navigable(cljs.core.PersistentArrayMap.EMPTY),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY,true,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,(function (env,ev,origin,ex){
console.error("--- FAILED TO PROCESS EVENT ---",ev);

console.error(ex);

return new cljs.core.Keyword("shadow.grove","failed!","shadow.grove/failed!",605318681);
}),root_scheduler,app_id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shadow.grove.impl.kv_interceptor], null)]));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(rt_ref,cljs.core.update,new cljs.core.Keyword("shadow.grove","fx-config","shadow.grove/fx-config",1659378758),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shadow.grove","timeout","shadow.grove/timeout",1187972639),(function (env,p__9235){
var map__9236 = p__9235;
var map__9236__$1 = cljs.core.__destructure_map(map__9236);
var timeout_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9236__$1,new cljs.core.Keyword(null,"timeout-id","timeout-id",-1230045451));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9236__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var ev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9236__$1,new cljs.core.Keyword(null,"ev","ev",-406827324));
var tid = setTimeout((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(rt_ref,cljs.core.update,new cljs.core.Keyword("shadow.grove","timeouts","shadow.grove/timeouts",-1977783386),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([timeout_id], 0));

return shadow.grove.run_tx_BANG_(rt_ref,ev);
}),timeout);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(rt_ref,cljs.core.update,new cljs.core.Keyword("shadow.grove","timeouts","shadow.grove/timeouts",-1977783386),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([timeout_id,tid], 0));
}),new cljs.core.Keyword("shadow.grove","timeout-clear","shadow.grove/timeout-clear",-731688173),(function (env,p__9243){
var map__9244 = p__9243;
var map__9244__$1 = cljs.core.__destructure_map(map__9244);
var timeout_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9244__$1,new cljs.core.Keyword(null,"timeout-id","timeout-id",-1230045451));
var temp__5827__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(rt_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.grove","timeouts","shadow.grove/timeouts",-1977783386),timeout_id], null));
if((temp__5827__auto__ == null)){
return null;
} else {
var tid = temp__5827__auto__;
clearTimeout(tid);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(rt_ref,cljs.core.update,new cljs.core.Keyword("shadow.grove","timeouts","shadow.grove/timeouts",-1977783386),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([timeout_id], 0));
}
})], null)], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.grove.runtime.known_runtimes_ref,cljs.core.assoc,app_id,rt_ref);

return rt_ref;
});
shadow.grove.get_runtime = (function shadow$grove$get_runtime(app_id){
if((app_id instanceof cljs.core.Keyword)){
var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.grove.runtime.known_runtimes_ref),app_id);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return shadow.grove.prepare(app_id);
}
} else {
if(cljs.core.truth_(shadow.grove.runtime.ref_QMARK_(app_id))){
return app_id;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid app-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-id","app-id",2035039555),app_id], null));

}
}
});
shadow.grove.reg_event = (function shadow$grove$reg_event(var_args){
var G__9263 = arguments.length;
switch (G__9263) {
case 2:
return shadow.grove.reg_event.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.grove.reg_event.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.grove.reg_event.cljs$core$IFn$_invoke$arity$2 = (function (ev_id,handler_fn){
return shadow.grove.reg_event.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"default","default",-1987822328),ev_id,handler_fn);
}));

(shadow.grove.reg_event.cljs$core$IFn$_invoke$arity$3 = (function (app_id,ev_id,handler_fn){
if((ev_id instanceof cljs.core.Keyword)){
} else {
throw (new Error("Assert failed: (keyword? ev-id)"));
}

if(cljs.core.ifn_QMARK_(handler_fn)){
} else {
throw (new Error("Assert failed: (ifn? handler-fn)"));
}

var rt_ref = shadow.grove.get_runtime(app_id);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(rt_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.grove","event-config","shadow.grove/event-config",1344327341),ev_id], null),handler_fn);

return rt_ref;
}));

(shadow.grove.reg_event.cljs$lang$maxFixedArity = 3);

shadow.grove.queue_fx = (function shadow$grove$queue_fx(env,fx_id,fx_val){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword("shadow.grove","fx","shadow.grove/fx",-1712376559),shadow.grove.vec_conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fx_id,fx_val], null));
});
shadow.grove.reg_fx = (function shadow$grove$reg_fx(rt_ref,fx_id,handler_fn){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(rt_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.grove","fx-config","shadow.grove/fx-config",1659378758),fx_id], null),handler_fn);

return rt_ref;
});
shadow.grove.add_animation_callbacks = (function shadow$grove$add_animation_callbacks(anim,callbacks){
cljs.core.reduce_kv((function (_,key,val){
var G__9276 = key;
var G__9276__$1 = (((G__9276 instanceof cljs.core.Keyword))?G__9276.fqn:null);
switch (G__9276__$1) {
case "on-finish":
return anim.addEventListener("finish",val);

break;
case "on-cancel":
return anim.addEventListener("cancel",val);

break;
case "on-remove":
return anim.addEventListener("remove",val);

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["unknown animate callback ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"val","val",128701612),val], null));

}
}),null,callbacks);

return anim;
});
/**
 * helper for Element.animate Web Animations API, saves manually repeating clj->js
 */
shadow.grove.animate = (function shadow$grove$animate(var_args){
var G__9279 = arguments.length;
switch (G__9279) {
case 3:
return shadow.grove.animate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.grove.animate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.grove.animate.cljs$core$IFn$_invoke$arity$3 = (function (node,keyframes,options){
return shadow.grove.animate.cljs$core$IFn$_invoke$arity$4(node,keyframes,options,null);
}));

(shadow.grove.animate.cljs$core$IFn$_invoke$arity$4 = (function (node,keyframes,options,callbacks){
var G__9283 = node.animate(cljs.core.clj__GT_js(keyframes),cljs.core.clj__GT_js(options));
shadow.grove.add_animation_callbacks(G__9283,callbacks);

return G__9283;
}));

(shadow.grove.animate.cljs$lang$maxFixedArity = 4);


/**
* @constructor
 * @implements {cljs.core.IFn}
*/
shadow.grove.PreparedAnimation = (function (keyframes,options){
this.keyframes = keyframes;
this.options = options;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.grove.PreparedAnimation.prototype.call = (function (unused__10325__auto__){
var self__ = this;
var self__ = this;
var G__9286 = (arguments.length - (1));
switch (G__9286) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(shadow.grove.PreparedAnimation.prototype.apply = (function (self__,args9284){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args9284)));
}));

(shadow.grove.PreparedAnimation.prototype.cljs$core$IFn$_invoke$arity$1 = (function (node){
var self__ = this;
var this$ = this;
return node.animate(self__.keyframes,self__.options);
}));

(shadow.grove.PreparedAnimation.prototype.cljs$core$IFn$_invoke$arity$2 = (function (node,callbacks){
var self__ = this;
var this$ = this;
var G__9297 = node.animate(self__.keyframes,self__.options);
shadow.grove.add_animation_callbacks(G__9297,callbacks);

return G__9297;
}));

(shadow.grove.PreparedAnimation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keyframes","keyframes",202555515,null),new cljs.core.Symbol(null,"options","options",1740170016,null)], null);
}));

(shadow.grove.PreparedAnimation.cljs$lang$type = true);

(shadow.grove.PreparedAnimation.cljs$lang$ctorStr = "shadow.grove/PreparedAnimation");

(shadow.grove.PreparedAnimation.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.grove/PreparedAnimation");
}));

/**
 * Positional factory function for shadow.grove/PreparedAnimation.
 */
shadow.grove.__GT_PreparedAnimation = (function shadow$grove$__GT_PreparedAnimation(keyframes,options){
return (new shadow.grove.PreparedAnimation(keyframes,options));
});

shadow.grove.prepare_animation = (function shadow$grove$prepare_animation(keyframes,options){
return shadow.grove.__GT_PreparedAnimation(cljs.core.clj__GT_js(keyframes),cljs.core.clj__GT_js(options));
});
shadow.grove.check_unmounted_BANG_ = (function shadow$grove$check_unmounted_BANG_(rt_ref){
if(cljs.core.seq(new cljs.core.Keyword("shadow.grove","roots","shadow.grove/roots",550329575).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rt_ref)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("operation not allowed, runtime already mounted",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rt-ref","rt-ref",1775728139),rt_ref], null));
} else {
return null;
}
});
shadow.grove.add_kv_table = (function shadow$grove$add_kv_table(var_args){
var G__9314 = arguments.length;
switch (G__9314) {
case 3:
return shadow.grove.add_kv_table.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.grove.add_kv_table.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.grove.add_kv_table.cljs$core$IFn$_invoke$arity$3 = (function (rt_ref,kv_table,config){
return shadow.grove.add_kv_table.cljs$core$IFn$_invoke$arity$4(rt_ref,kv_table,config,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.grove.add_kv_table.cljs$core$IFn$_invoke$arity$4 = (function (rt_ref,kv_table,config,init_data){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(rt_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.grove","kv","shadow.grove/kv",556503171),kv_table], null),shadow.grove.kv.init(kv_table,config,init_data));

return rt_ref;
}));

(shadow.grove.add_kv_table.cljs$lang$maxFixedArity = 4);

shadow.grove.kv_init = (function shadow$grove$kv_init(rt_ref,init_fn){
shadow.grove.check_unmounted_BANG_(rt_ref);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(rt_ref,cljs.core.update,new cljs.core.Keyword("shadow.grove","kv","shadow.grove/kv",556503171),init_fn);

return rt_ref;
});
shadow.grove.valid_interceptor_QMARK_ = (function shadow$grove$valid_interceptor_QMARK_(x){
return cljs.core.fn_QMARK_(x);
});
shadow.grove.kv_interceptor = shadow.grove.impl.kv_interceptor;
shadow.grove.set_interceptors_BANG_ = (function shadow$grove$set_interceptors_BANG_(rt_ref,interceptors){
if(cljs.core.vector_QMARK_(interceptors)){
} else {
throw (new Error("Assert failed: (vector? interceptors)"));
}

if(cljs.core.every_QMARK_(shadow.grove.valid_interceptor_QMARK_,interceptors)){
} else {
throw (new Error("Assert failed: (every? valid-interceptor? interceptors)"));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(rt_ref,cljs.core.assoc,new cljs.core.Keyword("shadow.grove","event-interceptors","shadow.grove/event-interceptors",1389832382),interceptors);
});
shadow.grove.queue_after_interceptor = (function shadow$grove$queue_after_interceptor(tx_env,interceptor){
if(cljs.core.fn_QMARK_(interceptor)){
} else {
throw (new Error("Assert failed: (fn? interceptor)"));
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(tx_env,new cljs.core.Keyword("shadow.grove","tx-after","shadow.grove/tx-after",412311980),cljs.core.conj,interceptor);
});
shadow.grove.fx_timeout = (function shadow$grove$fx_timeout(env,timeout_id,timeout,ev){
return shadow.grove.queue_fx(env,new cljs.core.Keyword("shadow.grove","timeout","shadow.grove/timeout",1187972639),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"timeout-id","timeout-id",-1230045451),timeout_id,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout,new cljs.core.Keyword(null,"ev","ev",-406827324),ev], null));
});
shadow.grove.fx_timeout_clear = (function shadow$grove$fx_timeout_clear(env,timeout_id){
return shadow.grove.queue_fx(env,new cljs.core.Keyword("shadow.grove","timeout-clear","shadow.grove/timeout-clear",-731688173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timeout-id","timeout-id",-1230045451),timeout_id], null));
});

//# sourceMappingURL=shadow.grove.js.map
