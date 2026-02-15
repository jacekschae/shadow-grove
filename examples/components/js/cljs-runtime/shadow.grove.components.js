goog.provide('shadow.grove.components');
goog.scope(function(){
  shadow.grove.components.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * @define {boolean}
 */
shadow.grove.components.DEBUG = goog.define("shadow.grove.components.DEBUG",goog.DEBUG);
if((typeof shadow !== 'undefined') && (typeof shadow.grove !== 'undefined') && (typeof shadow.grove.components !== 'undefined') && (typeof shadow.grove.components.components_ref !== 'undefined')){
} else {
shadow.grove.components.components_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.grove !== 'undefined') && (typeof shadow.grove.components !== 'undefined') && (typeof shadow.grove.components.instances_ref !== 'undefined')){
} else {
shadow.grove.components.instances_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
shadow.grove.components.debug_find_roots = (function shadow$grove$components$debug_find_roots(){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (all,instance){
if(cljs.core.truth_(new cljs.core.Keyword("shadow.grove.components","parent","shadow.grove.components/parent",522357606).cljs$core$IFn$_invoke$arity$1(instance.component_env))){
return all;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(all,instance);
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.vals(cljs.core.deref(shadow.grove.components.instances_ref)));
});
shadow.grove.components.debug_component_seq = (function shadow$grove$components$debug_component_seq(var_args){
var G__8656 = arguments.length;
switch (G__8656) {
case 0:
return shadow.grove.components.debug_component_seq.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.grove.components.debug_component_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.grove.components.debug_component_seq.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.grove.components.debug_component_seq.cljs$core$IFn$_invoke$arity$1(cljs.core.first(shadow.grove.components.debug_find_roots()));
}));

(shadow.grove.components.debug_component_seq.cljs$core$IFn$_invoke$arity$1 = (function (root){
return cljs.core.tree_seq((function (component){
return true;
}),(function (component){
return component.child_components;
}),root);
}));

(shadow.grove.components.debug_component_seq.cljs$lang$maxFixedArity = 1);

shadow.grove.components.debug_find_suspended = (function shadow$grove$components$debug_find_suspended(){
return cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__8658_SHARP_){
return p1__8658_SHARP_.suspended_QMARK_;
}),shadow.grove.components.debug_component_seq.cljs$core$IFn$_invoke$arity$0()));
});
shadow.grove.components.get_component = (function shadow$grove$components$get_component(env){
return new cljs.core.Keyword("shadow.grove.components","component","shadow.grove.components/component",-1606419021).cljs$core$IFn$_invoke$arity$1(env);
});
shadow.grove.components.mark_all_dirty_BANG_ = (function shadow$grove$components$mark_all_dirty_BANG_(){
var seq__8660 = cljs.core.seq(cljs.core.vals(cljs.core.deref(shadow.grove.components.instances_ref)));
var chunk__8661 = null;
var count__8662 = (0);
var i__8663 = (0);
while(true){
if((i__8663 < count__8662)){
var comp = chunk__8661.cljs$core$IIndexed$_nth$arity$2(null,i__8663);
comp.set_render_required_BANG_();


var G__8785 = seq__8660;
var G__8786 = chunk__8661;
var G__8787 = count__8662;
var G__8788 = (i__8663 + (1));
seq__8660 = G__8785;
chunk__8661 = G__8786;
count__8662 = G__8787;
i__8663 = G__8788;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__8660);
if(temp__5823__auto__){
var seq__8660__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8660__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__8660__$1);
var G__8790 = cljs.core.chunk_rest(seq__8660__$1);
var G__8791 = c__5548__auto__;
var G__8792 = cljs.core.count(c__5548__auto__);
var G__8793 = (0);
seq__8660 = G__8790;
chunk__8661 = G__8791;
count__8662 = G__8792;
i__8663 = G__8793;
continue;
} else {
var comp = cljs.core.first(seq__8660__$1);
comp.set_render_required_BANG_();


var G__8797 = cljs.core.next(seq__8660__$1);
var G__8798 = null;
var G__8799 = (0);
var G__8800 = (0);
seq__8660 = G__8797;
chunk__8661 = G__8798;
count__8662 = G__8799;
i__8663 = G__8800;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.grove.components.make_component_init = (function shadow$grove$components$make_component_init(component,args){
if(cljs.core.vector_QMARK_(args)){
} else {
throw (new Error("Assert failed: (vector? args)"));
}

return (new shadow.grove.components.ComponentInit(component,args));
});
(shadow.grove.protocols.ComponentConfig.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.grove.protocols.ComponentConfig.prototype.call = (function (unused__10325__auto__){
var self__ = this;
var G__8666 = (arguments.length - (1));
switch (G__8666) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
case (3):
return self__.cljs$core$IFn$_invoke$arity$3((arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (4):
return self__.cljs$core$IFn$_invoke$arity$4((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case (5):
return self__.cljs$core$IFn$_invoke$arity$5((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case (6):
return self__.cljs$core$IFn$_invoke$arity$6((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(shadow.grove.protocols.ComponentConfig.prototype.apply = (function (self__,args8665){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args8665)));
}));

(shadow.grove.protocols.ComponentConfig.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var this$ = this;
return shadow.grove.components.make_component_init(this$,cljs.core.PersistentVector.EMPTY);
}));

(shadow.grove.protocols.ComponentConfig.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a1){
var this$ = this;
return shadow.grove.components.make_component_init(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1], null));
}));

(shadow.grove.protocols.ComponentConfig.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a1,a2){
var this$ = this;
return shadow.grove.components.make_component_init(this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,a2], null));
}));

(shadow.grove.protocols.ComponentConfig.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a1,a2,a3){
var this$ = this;
return shadow.grove.components.make_component_init(this$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,a2,a3], null));
}));

(shadow.grove.protocols.ComponentConfig.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a1,a2,a3,a4){
var this$ = this;
return shadow.grove.components.make_component_init(this$,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,a2,a3,a4], null));
}));

(shadow.grove.protocols.ComponentConfig.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a1,a2,a3,a4,a5){
var this$ = this;
return shadow.grove.components.make_component_init(this$,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,a2,a3,a4,a5], null));
}));

(shadow.grove.protocols.ComponentConfig.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a1,a2,a3,a4,a5,a6){
var this$ = this;
return shadow.grove.components.make_component_init(this$,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,a2,a3,a4,a5,a6], null));
}));
shadow.grove.components.component_config_QMARK_ = (function shadow$grove$components$component_config_QMARK_(x){
return (x instanceof shadow.grove.protocols.ComponentConfig);
});
shadow.grove.components.safe_inc = (function shadow$grove$components$safe_inc(x){
if((x == null)){
return (0);
} else {
return (x + (1));
}
});
shadow.grove.components.sort_fn = (function shadow$grove$components$sort_fn(a,b){
return cljs.core.compare(new cljs.core.Keyword("shadow.grove.components","depth","shadow.grove.components/depth",-20661449).cljs$core$IFn$_invoke$arity$1(a.component_env),new cljs.core.Keyword("shadow.grove.components","depth","shadow.grove.components/depth",-20661449).cljs$core$IFn$_invoke$arity$1(b.component_env));
});
shadow.grove.components.find_first_set_bit_idx = (function shadow$grove$components$find_first_set_bit_idx(search){
if((!((search === (0))))){
} else {
throw (new Error("Assert failed: (not (zero? search))"));
}

var search__$1 = search;
var idx = (0);
while(true){
if(((1) === (search__$1 & (1)))){
return idx;
} else {
var G__8807 = (search__$1 >> (1));
var G__8808 = (idx + (1));
search__$1 = G__8807;
idx = G__8808;
continue;
}
break;
}
});
shadow.grove.components.handle_error_state_BANG_ = (function shadow$grove$components$handle_error_state_BANG_(component,ex){
console.error("component failed to render",component);

return console.error(ex);
});
shadow.grove.components.ManagedComponent = class shadow$grove$components$ManagedComponent {
  constructor(G__8668,G__8669,G__8670) {
var e_8809 = G__8668;
var c_8810 = G__8669;
var a_8811 = G__8670;
var self__ = this;
(self__.current_idx = ((0) | (0)));

(self__.on_destroy = cljs.core.PersistentArrayMap.EMPTY);

(self__.after_render = cljs.core.PersistentArrayMap.EMPTY);

(self__.after_render_cleanup = cljs.core.PersistentArrayMap.EMPTY);

(self__.before_render = cljs.core.PersistentArrayMap.EMPTY);

(self__.slot_refs = cljs.core.PersistentArrayMap.EMPTY);

(self__.dirty_from_args = ((0) | (0)));

(self__.dirty_slots = ((0) | (0)));

(self__.updated_slots = ((0) | (0)));

(self__.needs_render_QMARK_ = true);

(self__.work_set = (new Set()));

(self__.parent_env = e_8809);

(self__.config = c_8810);

(self__.args = a_8811);

(self__.scheduler = new cljs.core.Keyword("shadow.grove","scheduler","shadow.grove/scheduler",905620149).cljs$core$IFn$_invoke$arity$1(self__.parent_env));

if(shadow.grove.components.DEBUG){
(self__.child_components = (new Set()));

var temp__5827__auto___8812 = new cljs.core.Keyword("shadow.grove.components","component","shadow.grove.components/component",-1606419021).cljs$core$IFn$_invoke$arity$1(self__.parent_env);
if((temp__5827__auto___8812 == null)){
} else {
var parent_8813 = temp__5827__auto___8812;
parent_8813.child_components.add(self__);
}
} else {
}

(self__.component_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update.cljs$core$IFn$_invoke$arity$3(self__.parent_env,new cljs.core.Keyword("shadow.grove.components","depth","shadow.grove.components/depth",-20661449),shadow.grove.components.safe_inc),new cljs.core.Keyword("shadow.grove.components","parent","shadow.grove.components/parent",522357606),new cljs.core.Keyword("shadow.grove.components","component","shadow.grove.components/component",-1606419021).cljs$core$IFn$_invoke$arity$1(self__.parent_env),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.arborist.protocols","dom-event-handler","shadow.arborist.protocols/dom-event-handler",-755471285),self__,new cljs.core.Keyword("shadow.grove.components","component","shadow.grove.components/component",-1606419021),self__,new cljs.core.Keyword("shadow.grove.components","event-target","shadow.grove.components/event-target",-649187734),self__,new cljs.core.Keyword("shadow.grove","scheduler","shadow.grove/scheduler",905620149),self__], 0)));

if(shadow.grove.components.DEBUG){
var id_8817 = shadow.grove.runtime.next_id();
(self__.instance_id = id_8817);

shadow.grove.trace.component_create(self__);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.grove.components.instances_ref,cljs.core.assoc,id_8817,self__);

(self__.marker_before = (function (){var G__8675 = document.createComment(["component: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.config.component_name)].join(''));
(G__8675.shadow$instance = self__);

return G__8675;
})());

(self__.marker_after = (function (){var G__8679 = document.createComment(["/component: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.config.component_name)].join(''));
(G__8679.shadow$instance = self__);

return G__8679;
})());
} else {
}

(self__.root = shadow.arborist.common.managed_root(self__.component_env));

(self__.dirty_slots = self__.config.slot_init_bits);

(self__.slot_values = (new Array(self__.config.slots.length)));
  }
};
(shadow.grove.components.ManagedComponent.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.grove.components.ManagedComponent.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
}));

(shadow.grove.components.ManagedComponent.prototype.shadow$arborist$protocols$IManaged$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.grove.components.ManagedComponent.prototype.shadow$arborist$protocols$IManaged$dom_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(shadow.grove.components.DEBUG){
return this$__$1.marker_before;
} else {
return shadow.arborist.protocols.dom_first(self__.root);
}
}));

(shadow.grove.components.ManagedComponent.prototype.shadow$arborist$protocols$IManaged$dom_insert$arity$3 = (function (this$,parent,anchor){
var self__ = this;
var this$__$1 = this;
if(shadow.grove.components.DEBUG){
parent.insertBefore(this$__$1.marker_before,anchor);
} else {
}

shadow.arborist.protocols.dom_insert(self__.root,parent,anchor);

if(shadow.grove.components.DEBUG){
return parent.insertBefore(this$__$1.marker_after,anchor);
} else {
return null;
}
}));

(shadow.grove.components.ManagedComponent.prototype.shadow$arborist$protocols$IManaged$dom_entered_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
(self__.dom_entered_QMARK_ = true);

shadow.arborist.protocols.dom_entered_BANG_(self__.root);

return this$__$1.did_update_BANG_(true);
}));

(shadow.grove.components.ManagedComponent.prototype.shadow$arborist$protocols$IManaged$supports_QMARK_$arity$2 = (function (this$,next){
var self__ = this;
var this$__$1 = this;
var and__5023__auto__ = shadow.grove.components.component_init_QMARK_(next);
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = (function (){var other = next.component;
return (self__.config === other);
})();
if(and__5023__auto____$1){
var and__5023__auto____$2 = (function (){var stable_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.config.opts,new cljs.core.Keyword("shadow.grove.components","stable-args","shadow.grove.components/stable-args",691139503));
var or__5025__auto__ = (stable_args == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var old_args = self__.args;
var new_args = next.args;
return cljs.core.every_QMARK_((function (p1__8667_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(old_args,p1__8667_SHARP_),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_args,p1__8667_SHARP_));
}),stable_args);
}
})();
if(and__5023__auto____$2){
var custom_check = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.config.opts,new cljs.core.Keyword(null,"supports?","supports?",1642448130));
var or__5025__auto__ = (custom_check == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var G__8686 = self__.args;
var G__8687 = next.args;
return (custom_check.cljs$core$IFn$_invoke$arity$2 ? custom_check.cljs$core$IFn$_invoke$arity$2(G__8686,G__8687) : custom_check(G__8686,G__8687));
}
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}));

(shadow.grove.components.ManagedComponent.prototype.shadow$arborist$protocols$IManaged$dom_sync_BANG_$arity$2 = (function (this$,next){
var self__ = this;
var this$__$1 = this;
self__.config.check_args_fn(this$__$1,self__.args,next.args);

(self__.args = next.args);

var t_8830 = shadow.grove.trace.component_dom_sync(this$__$1,self__.dirty_from_args,self__.dirty_slots);
this$__$1.run_own_work_BANG_();

this$__$1.run_work_set_BANG_();

shadow.grove.trace.component_dom_sync_done(this$__$1,t_8830);

return undefined;
}));

(shadow.grove.components.ManagedComponent.prototype.shadow$arborist$protocols$IManaged$destroy_BANG_$arity$2 = (function (this$,dom_remove_QMARK_){
var self__ = this;
var this$__$1 = this;
this$__$1.unschedule_BANG_();

if(shadow.grove.components.DEBUG){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.grove.components.instances_ref,cljs.core.dissoc,this$__$1.instance_id);

var temp__5827__auto___8831 = new cljs.core.Keyword("shadow.grove.components","parent","shadow.grove.components/parent",522357606).cljs$core$IFn$_invoke$arity$1(self__.component_env);
if((temp__5827__auto___8831 == null)){
} else {
var parent_8832 = temp__5827__auto___8831;
parent_8832.child_components.delete(this$__$1);
}

if(dom_remove_QMARK_){
this$__$1.marker_before.remove();

this$__$1.marker_after.remove();
} else {
}
} else {
}

(self__.destroyed_QMARK_ = true);

self__.slot_refs.cljs$core$IKVReduce$_kv_reduce$arity$3(null,(function (_,slot_idx,ref){
var temp__5827__auto__ = ref.cleanup;
if((temp__5827__auto__ == null)){
return null;
} else {
var cleanup = temp__5827__auto__;
var t_8833 = shadow.grove.trace.component_slot_cleanup(this$__$1,slot_idx);
var G__8689_8834 = cljs.core.deref(ref);
(cleanup.cljs$core$IFn$_invoke$arity$1 ? cleanup.cljs$core$IFn$_invoke$arity$1(G__8689_8834) : cleanup(G__8689_8834));

shadow.grove.trace.component_slot_cleanup_done(this$__$1,slot_idx,t_8833);

return undefined;
}
}),null);

if(cljs.core.seq(self__.after_render_cleanup)){
var t_8835 = shadow.grove.trace.component_after_render_cleanup(this$__$1);
self__.after_render_cleanup.cljs$core$IKVReduce$_kv_reduce$arity$3(null,(function (_,ref,callback){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback());
}),null);

shadow.grove.trace.component_after_render_cleanup_done(this$__$1,t_8835);
} else {
}

var t_8836 = shadow.grove.trace.component_destroy(this$__$1);
shadow.arborist.protocols.destroy_BANG_(self__.root,dom_remove_QMARK_);

shadow.grove.trace.component_destroy_done(this$__$1,t_8836);

return undefined;
}));

(shadow.grove.components.ManagedComponent.prototype.shadow$grove$protocols$IHandleEvents$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.grove.components.ManagedComponent.prototype.shadow$grove$protocols$IHandleEvents$handle_event_BANG_$arity$4 = (function (this$,p__8690,e,origin){
var self__ = this;
var map__8691 = p__8690;
var map__8691__$1 = cljs.core.__destructure_map(map__8691);
var ev_map = map__8691__$1;
var ev_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8691__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var this$__$1 = this;
var handler = (((ev_id instanceof cljs.core.Keyword))?(function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.config.events,ev_id);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.config.opts,ev_id);
}
})():(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unknown event",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),ev_map], null))})());
if(cljs.core.truth_(handler)){
return (handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(self__.component_env,ev_map,e,origin) : handler(self__.component_env,ev_map,e,origin));
} else {
var temp__5825__auto__ = new cljs.core.Keyword("shadow.grove.components","event-target","shadow.grove.components/event-target",-649187734).cljs$core$IFn$_invoke$arity$1(self__.parent_env);
if((temp__5825__auto__ == null)){
return console.warn("event not handled",ev_id,ev_map);
} else {
var parent = temp__5825__auto__;
return shadow.grove.protocols.handle_event_BANG_(parent,ev_map,e,origin);
}
}
}));

(shadow.grove.components.ManagedComponent.prototype.shadow$grove$protocols$IScheduleWork$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.grove.components.ManagedComponent.prototype.shadow$grove$protocols$IScheduleWork$did_suspend_BANG_$arity$2 = (function (this$,work_task){
var self__ = this;
var this$__$1 = this;
return self__.scheduler.shadow$grove$protocols$IScheduleWork$did_suspend_BANG_$arity$2(null,work_task);
}));

(shadow.grove.components.ManagedComponent.prototype.shadow$grove$protocols$IScheduleWork$did_finish_BANG_$arity$2 = (function (this$,work_task){
var self__ = this;
var this$__$1 = this;
return self__.scheduler.shadow$grove$protocols$IScheduleWork$did_finish_BANG_$arity$2(null,work_task);
}));

(shadow.grove.components.ManagedComponent.prototype.shadow$grove$protocols$IScheduleWork$schedule_work_BANG_$arity$3 = (function (this$,work_task,trigger){
var self__ = this;
var this$__$1 = this;
if((self__.work_set.size === (0))){
self__.scheduler.shadow$grove$protocols$IScheduleWork$schedule_work_BANG_$arity$3(null,this$__$1,trigger);
} else {
}

return self__.work_set.add(work_task);
}));

(shadow.grove.components.ManagedComponent.prototype.shadow$grove$protocols$IScheduleWork$unschedule_BANG_$arity$2 = (function (this$,work_task){
var self__ = this;
var this$__$1 = this;
self__.work_set.delete(work_task);

if((self__.work_set.size === (0))){
return self__.scheduler.shadow$grove$protocols$IScheduleWork$unschedule_BANG_$arity$2(null,this$__$1);
} else {
return null;
}
}));

(shadow.grove.components.ManagedComponent.prototype.shadow$grove$protocols$IWork$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.grove.components.ManagedComponent.prototype.shadow$grove$protocols$IWork$work_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var t_8842 = shadow.grove.trace.component_work(this$__$1,self__.dirty_slots);
this$__$1.run_own_work_BANG_();

this$__$1.run_work_set_BANG_();

shadow.grove.trace.component_work_done(this$__$1,t_8842);

return undefined;
}));

(shadow.grove.components.ManagedComponent.prototype.shadow$grove$protocols$IProvideSlot$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.grove.components.ManagedComponent.prototype.shadow$grove$protocols$IProvideSlot$_init_slot_ref$arity$2 = (function (this$,idx){
var self__ = this;
var this$__$1 = this;
var or__5025__auto__ = self__.slot_refs.cljs$core$ILookup$_lookup$arity$2(null,idx);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var ref = (new shadow.grove.runtime.SlotRef(this$__$1,idx,null,null));
(self__.slot_refs = self__.slot_refs.cljs$core$IAssociative$_assoc$arity$3(null,idx,ref));

return ref;
}
}));

(shadow.grove.components.ManagedComponent.prototype.shadow$grove$protocols$IProvideSlot$_invalidate_slot_BANG_$arity$2 = (function (this$,idx){
var self__ = this;
var this$__$1 = this;
if(self__.destroyed_QMARK_){
} else {
(self__.dirty_slots = (self__.dirty_slots | (1 << idx)));

(self__.current_idx = Math.min(idx,self__.current_idx));

(self__.suspended_QMARK_ = false);

this$__$1.schedule_BANG_(new cljs.core.Keyword("shadow.grove.components","slot-invalidate!","shadow.grove.components/slot-invalidate!",-867939939));
}

return undefined;
}));

(shadow.grove.components.ManagedComponent.prototype.shadow$grove$protocols$IProvideSlot$_provide_new_value_BANG_$arity$3 = (function (this$,idx,new$){
var self__ = this;
var this$__$1 = this;
if(self__.destroyed_QMARK_){
return null;
} else {
var old = (self__.slot_values[idx]);
(self__.slot_values[idx] = new$);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
var slot_config = (self__.config.slots[idx]);
this$__$1.mark_slots_dirty_BANG_(slot_config.affects);

if(((self__.config.render_deps & (1 << idx)) != 0)){
this$__$1.set_render_required_BANG_();
} else {
}

return this$__$1.schedule_BANG_(new cljs.core.Keyword("shadow.grove.components","slot-provided-new-value!","shadow.grove.components/slot-provided-new-value!",-1945787600));
} else {
return null;
}
}
}));

(shadow.grove.components.ManagedComponent.prototype.get_slot_value = (function (idx){
var self__ = this;
var this$ = this;
return (self__.slot_values[idx]);
}));

(shadow.grove.components.ManagedComponent.prototype.mark_slots_dirty_BANG_ = (function (dirty_bits){
var self__ = this;
var this$ = this;
(self__.dirty_slots = (self__.dirty_slots | dirty_bits));

return (self__.current_idx = shadow.grove.components.find_first_set_bit_idx(self__.dirty_slots));
}));

(shadow.grove.components.ManagedComponent.prototype.mark_dirty_from_args_BANG_ = (function (dirty_bits){
var self__ = this;
var this$ = this;
(self__.dirty_from_args = (self__.dirty_from_args | dirty_bits));

return this$.mark_slots_dirty_BANG_(dirty_bits);
}));

(shadow.grove.components.ManagedComponent.prototype.set_render_required_BANG_ = (function (){
var self__ = this;
var this$ = this;
(self__.needs_render_QMARK_ = true);

(self__.current_idx = Math.min(self__.current_idx,self__.config.slots.length));

return undefined;
}));

(shadow.grove.components.ManagedComponent.prototype.add_after_render_effect = (function (key,callback){
var self__ = this;
var this$ = this;
(self__.after_render = self__.after_render.cljs$core$IAssociative$_assoc$arity$3(null,key,callback));

return this$;
}));

(shadow.grove.components.ManagedComponent.prototype.add_after_render_effect_once = (function (key,callback){
var self__ = this;
var this$ = this;
(self__.after_render = self__.after_render.cljs$core$IAssociative$_assoc$arity$3(null,key,(function (env){
(self__.after_render = self__.after_render.cljs$core$IMap$_dissoc$arity$2(null,key));

return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(env) : callback(env));
})));

return this$;
}));

(shadow.grove.components.ManagedComponent.prototype.run_slot_BANG_ = (function (idx){
var self__ = this;
var this$ = this;
if((!(((self__.dirty_slots & (1 << idx)) != 0)))){
(self__.current_idx = (self__.current_idx + (1)));
} else {
var slot_config_8851 = (self__.config.slots[idx]);
var prev_val_8852 = (self__.slot_values[idx]);
var t_8853 = shadow.grove.trace.component_run_slot(this$,idx);
var _STAR_slot_provider_STAR__orig_val__8708_8854 = shadow.grove.runtime._STAR_slot_provider_STAR_;
var _STAR_env_STAR__orig_val__8709_8855 = shadow.grove.runtime._STAR_env_STAR_;
var _STAR_slot_idx_STAR__orig_val__8710_8856 = shadow.grove.runtime._STAR_slot_idx_STAR_;
var _STAR_slot_value_STAR__orig_val__8711_8857 = shadow.grove.runtime._STAR_slot_value_STAR_;
var _STAR_claimed_STAR__orig_val__8712_8858 = shadow.grove.runtime._STAR_claimed_STAR_;
var _STAR_ready_STAR__orig_val__8713_8859 = shadow.grove.runtime._STAR_ready_STAR_;
var _STAR_slot_provider_STAR__temp_val__8714_8860 = this$;
var _STAR_env_STAR__temp_val__8715_8861 = self__.component_env;
var _STAR_slot_idx_STAR__temp_val__8716_8862 = idx;
var _STAR_slot_value_STAR__temp_val__8717_8863 = prev_val_8852;
var _STAR_claimed_STAR__temp_val__8718_8864 = false;
var _STAR_ready_STAR__temp_val__8719_8865 = true;
(shadow.grove.runtime._STAR_slot_provider_STAR_ = _STAR_slot_provider_STAR__temp_val__8714_8860);

(shadow.grove.runtime._STAR_env_STAR_ = _STAR_env_STAR__temp_val__8715_8861);

(shadow.grove.runtime._STAR_slot_idx_STAR_ = _STAR_slot_idx_STAR__temp_val__8716_8862);

(shadow.grove.runtime._STAR_slot_value_STAR_ = _STAR_slot_value_STAR__temp_val__8717_8863);

(shadow.grove.runtime._STAR_claimed_STAR_ = _STAR_claimed_STAR__temp_val__8718_8864);

(shadow.grove.runtime._STAR_ready_STAR_ = _STAR_ready_STAR__temp_val__8719_8865);

try{var val_8867 = slot_config_8851.run(this$);
(self__.slot_values[idx] = val_8867);

if(cljs.core.not(shadow.grove.runtime._STAR_ready_STAR_)){
this$.suspend_BANG_(idx);
} else {
(self__.dirty_slots = (self__.dirty_slots & ~(1 << idx)));

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val_8867,prev_val_8852)){
(self__.updated_slots = (self__.updated_slots | (1 << idx)));

(self__.dirty_slots = (self__.dirty_slots | slot_config_8851.affects));

if(((self__.config.render_deps & (1 << idx)) != 0)){
(self__.needs_render_QMARK_ = true);
} else {
}
} else {
}

(self__.current_idx = (self__.current_idx + (1)));
}

shadow.grove.trace.component_run_slot_done(this$,idx,t_8853);
}finally {(shadow.grove.runtime._STAR_ready_STAR_ = _STAR_ready_STAR__orig_val__8713_8859);

(shadow.grove.runtime._STAR_claimed_STAR_ = _STAR_claimed_STAR__orig_val__8712_8858);

(shadow.grove.runtime._STAR_slot_value_STAR_ = _STAR_slot_value_STAR__orig_val__8711_8857);

(shadow.grove.runtime._STAR_slot_idx_STAR_ = _STAR_slot_idx_STAR__orig_val__8710_8856);

(shadow.grove.runtime._STAR_env_STAR_ = _STAR_env_STAR__orig_val__8709_8855);

(shadow.grove.runtime._STAR_slot_provider_STAR_ = _STAR_slot_provider_STAR__orig_val__8708_8854);
}}

return undefined;
}));

(shadow.grove.components.ManagedComponent.prototype.run_next_BANG_ = (function (){
var self__ = this;
var this$ = this;
if((self__.current_idx === self__.config.slots.length)){
this$.component_render_BANG_();
} else {
this$.run_slot_BANG_(self__.current_idx);
}

return undefined;
}));

(shadow.grove.components.ManagedComponent.prototype.work_pending_QMARK_ = (function (){
var self__ = this;
var this$ = this;
return (((!(self__.destroyed_QMARK_))) && ((((!(self__.suspended_QMARK_))) && ((((self__.dirty_slots > (0))) || (((self__.needs_render_QMARK_) || ((self__.config.slots.length >= self__.current_idx)))))))));
}));

(shadow.grove.components.ManagedComponent.prototype.run_own_work_BANG_ = (function (){
var self__ = this;
var this$ = this;
try{while(true){
if(this$.work_pending_QMARK_()){
this$.run_next_BANG_();

continue;
} else {
}
break;
}
}catch (e8722){var e_8873 = e8722;
shadow.grove.components.handle_error_state_BANG_(this$,e_8873);
}
return undefined;
}));

(shadow.grove.components.ManagedComponent.prototype.run_work_set_BANG_ = (function (){
var self__ = this;
var this$ = this;
var iter_8874 = self__.work_set.values();
while(true){
var current_8875 = iter_8874.next();
if((!(current_8875.done))){
current_8875.value.shadow$grove$protocols$IWork$work_BANG_$arity$1(null);

continue;
} else {
}
break;
}

return undefined;
}));

(shadow.grove.components.ManagedComponent.prototype.suspend_BANG_ = (function (hook_causing_suspend){
var self__ = this;
var this$ = this;
this$.unschedule_BANG_();

self__.scheduler.shadow$grove$protocols$IScheduleWork$did_suspend_BANG_$arity$2(null,this$);

return (self__.suspended_QMARK_ = true);
}));

(shadow.grove.components.ManagedComponent.prototype.schedule_BANG_ = (function (trigger){
var self__ = this;
var this$ = this;
if(self__.destroyed_QMARK_){
return null;
} else {
return self__.scheduler.shadow$grove$protocols$IScheduleWork$schedule_work_BANG_$arity$3(null,this$,trigger);
}
}));

(shadow.grove.components.ManagedComponent.prototype.unschedule_BANG_ = (function (){
var self__ = this;
var this$ = this;
return self__.scheduler.shadow$grove$protocols$IScheduleWork$unschedule_BANG_$arity$2(null,this$);
}));

(shadow.grove.components.ManagedComponent.prototype.component_render_BANG_ = (function (){
var self__ = this;
var this$ = this;
if((self__.dirty_slots === (0))){
} else {
throw (new Error(["Assert failed: ","Got to render while slots are dirty","\n","(zero? dirty-slots)"].join('')));
}

var did_render_QMARK__8877 = self__.needs_render_QMARK_;
if(self__.needs_render_QMARK_){
var t_8878 = shadow.grove.trace.component_render(this$,self__.updated_slots);
var frag_8879 = self__.config.render_fn(this$);
(self__.rendered_args = self__.args);

(self__.needs_render_QMARK_ = false);

shadow.arborist.protocols.update_BANG_(self__.root,frag_8879);

shadow.grove.trace.component_render_done(this$,t_8878);
} else {
}

(self__.updated_slots = ((0) | (0)));

(self__.dirty_from_args = ((0) | (0)));

if(self__.dom_entered_QMARK_){
this$.did_update_BANG_(did_render_QMARK__8877);
} else {
}

(self__.current_idx = (self__.current_idx + (1)));

self__.scheduler.shadow$grove$protocols$IScheduleWork$did_finish_BANG_$arity$2(null,this$);

return this$.unschedule_BANG_();
}));

(shadow.grove.components.ManagedComponent.prototype.did_update_BANG_ = (function (did_render_QMARK_){
var self__ = this;
var this$ = this;
self__.after_render.cljs$core$IKVReduce$_kv_reduce$arity$3(null,(function (_,key,callback){
var temp__5827__auto___8881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.after_render_cleanup,key);
if((temp__5827__auto___8881 == null)){
} else {
var x_8883 = temp__5827__auto___8881;
x_8883();

(self__.after_render_cleanup = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.after_render_cleanup,key));
}

var result_8884 = (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(self__.component_env) : callback(self__.component_env));
if(cljs.core.fn_QMARK_(result_8884)){
(self__.after_render_cleanup = self__.after_render_cleanup.cljs$core$IAssociative$_assoc$arity$3(null,key,result_8884));
} else {
}

return null;
}),null);

return undefined;
}));
(shadow.grove.components.ManagedComponent.prototype.shadow$arborist$protocols$IHandleDOMEvents$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.grove.components.ManagedComponent.prototype.shadow$arborist$protocols$IHandleDOMEvents$validate_dom_event_value_BANG_$arity$4 = (function (this$,env,event,ev_value){
var this$__$1 = this;
if((((ev_value instanceof cljs.core.Keyword)) || (cljs.core.map_QMARK_(ev_value)))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["event: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)," expects a map or keyword value"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"value","value",305978217),ev_value], null));
}
}));

(shadow.grove.components.ManagedComponent.prototype.shadow$arborist$protocols$IHandleDOMEvents$handle_dom_event_BANG_$arity$5 = (function (this$,event_env,event,ev_value,dom_event){
var this$__$1 = this;
var ev_map = ((cljs.core.map_QMARK_(ev_value))?ev_value:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e","e",1381269198),ev_value], null));
return shadow.grove.protocols.handle_event_BANG_(this$__$1,ev_map,dom_event,event_env);
}));
shadow.grove.components.component_create = (function shadow$grove$components$component_create(env,config,args){
if(goog.DEBUG){
if((config instanceof shadow.grove.protocols.ComponentConfig)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("not a component definition",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"config","config",994861415),config,new cljs.core.Keyword(null,"props","props",453281727),args], null));
}
} else {
}

var G__8727 = (new shadow.grove.components.ManagedComponent(env,config,args));
shadow.grove.protocols.work_BANG_(G__8727);

return G__8727;
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {shadow.arborist.protocols.IConstruct}
*/
shadow.grove.components.ComponentInit = (function (component,args){
this.component = component;
this.args = args;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.grove.components.ComponentInit.prototype.shadow$arborist$protocols$IConstruct$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.grove.components.ComponentInit.prototype.shadow$arborist$protocols$IConstruct$as_managed$arity$2 = (function (this$,env){
var self__ = this;
var this$__$1 = this;
return shadow.grove.components.component_create(env,self__.component,self__.args);
}));

(shadow.grove.components.ComponentInit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof shadow.grove.components.ComponentInit)) && ((((self__.component === other.component)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.args,other.args)))));
}));

(shadow.grove.components.ComponentInit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component","component",-1098498987,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
}));

(shadow.grove.components.ComponentInit.cljs$lang$type = true);

(shadow.grove.components.ComponentInit.cljs$lang$ctorStr = "shadow.grove.components/ComponentInit");

(shadow.grove.components.ComponentInit.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.grove.components/ComponentInit");
}));

/**
 * Positional factory function for shadow.grove.components/ComponentInit.
 */
shadow.grove.components.__GT_ComponentInit = (function shadow$grove$components$__GT_ComponentInit(component,args){
return (new shadow.grove.components.ComponentInit(component,args));
});

shadow.grove.components.component_init_QMARK_ = (function shadow$grove$components$component_init_QMARK_(x){
return (x instanceof shadow.grove.components.ComponentInit);
});

/**
* @constructor
*/
shadow.grove.components.SlotConfig = (function (depends_on,affects,run,debug_info){
this.depends_on = depends_on;
this.affects = affects;
this.run = run;
this.debug_info = debug_info;
});

(shadow.grove.components.SlotConfig.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"depends-on","depends-on",192089505,null),new cljs.core.Symbol(null,"affects","affects",-118795949,null),new cljs.core.Symbol(null,"run","run",-180635126,null),new cljs.core.Symbol(null,"debug-info","debug-info",1773135838,null)], null);
}));

(shadow.grove.components.SlotConfig.cljs$lang$type = true);

(shadow.grove.components.SlotConfig.cljs$lang$ctorStr = "shadow.grove.components/SlotConfig");

(shadow.grove.components.SlotConfig.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.grove.components/SlotConfig");
}));

/**
 * Positional factory function for shadow.grove.components/SlotConfig.
 */
shadow.grove.components.__GT_SlotConfig = (function shadow$grove$components$__GT_SlotConfig(depends_on,affects,run,debug_info){
return (new shadow.grove.components.SlotConfig(depends_on,affects,run,debug_info));
});

/**
 * used by defc macro, do not use directly
 */
shadow.grove.components.make_slot_config = (function shadow$grove$components$make_slot_config(depends_on,affects,run,debug_info){
if(cljs.core.nat_int_QMARK_(depends_on)){
} else {
throw (new Error("Assert failed: (nat-int? depends-on)"));
}

if(cljs.core.nat_int_QMARK_(affects)){
} else {
throw (new Error("Assert failed: (nat-int? affects)"));
}

if(cljs.core.fn_QMARK_(run)){
} else {
throw (new Error("Assert failed: (fn? run)"));
}

return (new shadow.grove.components.SlotConfig(depends_on,affects,run,debug_info));
});
/**
 * used by defc macro, do not use directly
 */
shadow.grove.components.make_component_config = (function shadow$grove$components$make_component_config(component_name,slots,slot_dirty_bits,opts,check_args_fn,render_deps,render_fn,events,debug_info){
if(typeof component_name === 'string'){
} else {
throw (new Error("Assert failed: (string? component-name)"));
}

if(cljs.core.array_QMARK_(slots)){
} else {
throw (new Error("Assert failed: (array? slots)"));
}

if(cljs.core.every_QMARK_((function (p1__8736_SHARP_){
return (p1__8736_SHARP_ instanceof shadow.grove.components.SlotConfig);
}),slots)){
} else {
throw (new Error("Assert failed: (every? (fn* [p1__8736#] (instance? SlotConfig p1__8736#)) slots)"));
}

if(cljs.core.map_QMARK_(opts)){
} else {
throw (new Error("Assert failed: (map? opts)"));
}

if(cljs.core.fn_QMARK_(check_args_fn)){
} else {
throw (new Error("Assert failed: (fn? check-args-fn)"));
}

if(cljs.core.nat_int_QMARK_(render_deps)){
} else {
throw (new Error("Assert failed: (nat-int? render-deps)"));
}

if(cljs.core.fn_QMARK_(render_fn)){
} else {
throw (new Error("Assert failed: (fn? render-fn)"));
}

if(cljs.core.map_QMARK_(events)){
} else {
throw (new Error("Assert failed: (map? events)"));
}

var cfg = (new shadow.grove.protocols.ComponentConfig(component_name,slots,slot_dirty_bits,opts,check_args_fn,render_deps,render_fn,events,debug_info));
if(goog.DEBUG){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.grove.components.components_ref,cljs.core.assoc,component_name,cfg);
} else {
}

return cfg;
});
shadow.grove.components.get_arg = (function shadow$grove$components$get_arg(comp,idx){
return comp.args.cljs$core$IIndexed$_nth$arity$2(null,idx);
});
shadow.grove.components.check_args_BANG_ = (function shadow$grove$components$check_args_BANG_(comp,new_args,expected){
if((cljs.core.count(new_args) >= expected)){
return null;
} else {
throw (new Error(["Assert failed: ",["component ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(comp.config.component_name)," expected at least ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected)," arguments"].join(''),"\n","(>= (count new-args) expected)"].join('')));
}
});
shadow.grove.components.arg_triggers_slots_BANG_ = (function shadow$grove$components$arg_triggers_slots_BANG_(comp,idx,dirty_bits){
return comp.mark_dirty_from_args_BANG_(dirty_bits);
});
shadow.grove.components.arg_triggers_render_BANG_ = (function shadow$grove$components$arg_triggers_render_BANG_(comp,idx){
return comp.set_render_required_BANG_();
});
shadow.grove.components.get_slot_value = (function shadow$grove$components$get_slot_value(comp,idx){
return comp.get_slot_value(idx);
});
shadow.grove.components.arg_destructure = (function shadow$grove$components$arg_destructure(arg_idx,lookup,default$){
return (function (comp){
var val = shadow.grove.components.get_arg(comp,arg_idx);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(val,lookup,default$);
});
});
shadow.grove.components.arg_destructure_tail = (function shadow$grove$components$arg_destructure_tail(arg_idx,n_to_drop){
return (function (comp){
var val = shadow.grove.components.get_arg(comp,arg_idx);
return cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n_to_drop,val));
});
});
shadow.grove.components.slot_destructure = (function shadow$grove$components$slot_destructure(slot_idx,lookup,default$){
return (function (comp){
var val = shadow.grove.components.get_slot_value(comp,slot_idx);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(val,lookup,default$);
});
});
shadow.grove.components.slot_destructure_tail = (function shadow$grove$components$slot_destructure_tail(slot_idx,n_to_drop){
return (function (comp){
var val = shadow.grove.components.get_slot_value(comp,slot_idx);
return cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n_to_drop,val));
});
});
shadow.grove.components.get_events = (function shadow$grove$components$get_events(comp){
return comp.config.events;
});
shadow.grove.components.get_parent = (function shadow$grove$components$get_parent(comp){
return shadow.grove.components.get_component(comp.parent_env);
});
shadow.grove.components.get_component_name = (function shadow$grove$components$get_component_name(comp){
return comp.config.component_name;
});
shadow.grove.components.set_cleanup_BANG_ = (function shadow$grove$components$set_cleanup_BANG_(ref,callback){
return (ref.cleanup = callback);
});
shadow.grove.components.slot_effect = (function shadow$grove$components$slot_effect(deps,callback){
var ref = shadow.grove.runtime.claim_slot_BANG_(new cljs.core.Keyword("shadow.grove.components","slot-effect","shadow.grove.components/slot-effect",-1038005132));
var component = ref.provider;
if((component instanceof shadow.grove.components.ManagedComponent)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("only components support effects",cljs.core.PersistentArrayMap.EMPTY);
}

var G__8765_8915 = deps;
var G__8765_8916__$1 = (((G__8765_8915 instanceof cljs.core.Keyword))?G__8765_8915.fqn:null);
switch (G__8765_8916__$1) {
case "render":
component.add_after_render_effect(ref,callback);

break;
case "mount":
if(cljs.core.truth_(cljs.core.deref(ref))){
} else {
component.add_after_render_effect_once(ref,callback);

ref.cljs$core$IReset$_reset_BANG_$arity$2(null,new cljs.core.Keyword(null,"mount","mount",-1560582470));
}

break;
case "auto":
component.add_after_render_effect_once(ref,callback);

break;
default:
var prev_deps_8918 = cljs.core.deref(ref);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev_deps_8918,deps)){
component.add_after_render_effect_once(ref,callback);
} else {
}

}

return null;
});
shadow.grove.components.env_watch = (function shadow$grove$components$env_watch(key_to_atom,path_in_atom,default$){
var ref = shadow.grove.runtime.claim_slot_BANG_(new cljs.core.Keyword("shadow.grove.components","env-watch","shadow.grove.components/env-watch",1903560838));
var map__8766 = cljs.core.deref(ref);
var map__8766__$1 = cljs.core.__destructure_map(map__8766);
var state = map__8766__$1;
var prev_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8766__$1,new cljs.core.Keyword(null,"the-atom","the-atom",1473539112));
var the_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shadow.grove.runtime._STAR_env_STAR_,key_to_atom);
shadow.grove.components.set_cleanup_BANG_(ref,(function (p__8767){
var map__8768 = p__8767;
var map__8768__$1 = cljs.core.__destructure_map(map__8768);
var the_atom__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8768__$1,new cljs.core.Keyword(null,"the-atom","the-atom",1473539112));
return cljs.core.remove_watch(the_atom__$1,ref);
}));

if(cljs.core.truth_(the_atom)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("couldn't find to watch in env",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key_to_atom], null));
}

if((the_atom === prev_atom)){
} else {
if(cljs.core.truth_(prev_atom)){
cljs.core.remove_watch(prev_atom,ref);
} else {
}

cljs.core.add_watch(the_atom,ref,(function (_,___$1,old,new$){
var map__8769 = cljs.core.deref(ref);
var map__8769__$1 = cljs.core.__destructure_map(map__8769);
var state__$1 = map__8769__$1;
var path_in_atom__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8769__$1,new cljs.core.Keyword(null,"path-in-atom","path-in-atom",1834195361));
var default$__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8769__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var oval = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(old,path_in_atom__$1,default$__$1);
var nval = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(new$,path_in_atom__$1,default$__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(oval,nval)){
return shadow.grove.protocols.invalidate_BANG_(ref);
} else {
return null;
}
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ref,cljs.core.assoc,new cljs.core.Keyword(null,"the-atom","the-atom",1473539112),the_atom);
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(ref,cljs.core.assoc,new cljs.core.Keyword(null,"path-in-atom","path-in-atom",1834195361),path_in_atom,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"default","default",-1987822328),default$], 0));

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(the_atom),path_in_atom,default$);
});
shadow.grove.components.atom_watch = (function shadow$grove$components$atom_watch(the_atom,access_fn){
var ref = shadow.grove.runtime.claim_slot_BANG_(new cljs.core.Keyword("shadow.grove.components","atom-watch","shadow.grove.components/atom-watch",86007328));
var map__8770 = cljs.core.deref(ref);
var map__8770__$1 = cljs.core.__destructure_map(map__8770);
var state = map__8770__$1;
var prev_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8770__$1,new cljs.core.Keyword(null,"the-atom","the-atom",1473539112));
shadow.grove.components.set_cleanup_BANG_(ref,(function (p__8771){
var map__8772 = p__8771;
var map__8772__$1 = cljs.core.__destructure_map(map__8772);
var the_atom__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8772__$1,new cljs.core.Keyword(null,"the-atom","the-atom",1473539112));
return cljs.core.remove_watch(the_atom__$1,ref);
}));

if((the_atom === prev_atom)){
} else {
if(cljs.core.truth_(prev_atom)){
cljs.core.remove_watch(prev_atom,ref);
} else {
}

cljs.core.add_watch(the_atom,ref,(function (_,___$1,old,new$){
var map__8773 = cljs.core.deref(ref);
var map__8773__$1 = cljs.core.__destructure_map(map__8773);
var access_fn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8773__$1,new cljs.core.Keyword(null,"access-fn","access-fn",1480536140));
var oval = (access_fn__$1.cljs$core$IFn$_invoke$arity$1 ? access_fn__$1.cljs$core$IFn$_invoke$arity$1(old) : access_fn__$1(old));
var nval = (access_fn__$1.cljs$core$IFn$_invoke$arity$1 ? access_fn__$1.cljs$core$IFn$_invoke$arity$1(new$) : access_fn__$1(new$));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(oval,nval)){
return shadow.grove.protocols.invalidate_BANG_(ref);
} else {
return null;
}
}));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ref,cljs.core.assoc,new cljs.core.Keyword(null,"the-atom","the-atom",1473539112),the_atom);
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ref,cljs.core.assoc,new cljs.core.Keyword(null,"access-fn","access-fn",1480536140),access_fn);

var G__8774 = cljs.core.deref(the_atom);
return (access_fn.cljs$core$IFn$_invoke$arity$1 ? access_fn.cljs$core$IFn$_invoke$arity$1(G__8774) : access_fn(G__8774));
});
shadow.grove.components.track_change = (function shadow$grove$components$track_change(val,trigger_fn){
var ref = shadow.grove.runtime.claim_slot_BANG_(new cljs.core.Keyword("shadow.grove.components","track-change","shadow.grove.components/track-change",50863972));
var map__8775 = cljs.core.deref(ref);
var map__8775__$1 = cljs.core.__destructure_map(map__8775);
var state = map__8775__$1;
var prev_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8775__$1,new cljs.core.Keyword(null,"val","val",128701612));
var prev_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8775__$1,new cljs.core.Keyword(null,"result","result",1415092211));
if((((!((state == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prev_val,val)))){
return prev_result;
} else {
var result = (trigger_fn.cljs$core$IFn$_invoke$arity$4 ? trigger_fn.cljs$core$IFn$_invoke$arity$4(shadow.grove.runtime._STAR_env_STAR_,prev_val,val,prev_result) : trigger_fn(shadow.grove.runtime._STAR_env_STAR_,prev_val,val,prev_result));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(ref,cljs.core.assoc,new cljs.core.Keyword(null,"val","val",128701612),val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"result","result",1415092211),result], 0));

return result;
}
});

//# sourceMappingURL=shadow.grove.components.js.map
