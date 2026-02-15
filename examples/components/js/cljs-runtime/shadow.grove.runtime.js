goog.provide('shadow.grove.runtime');
if((typeof shadow !== 'undefined') && (typeof shadow.grove !== 'undefined') && (typeof shadow.grove.runtime !== 'undefined') && (typeof shadow.grove.runtime.known_runtimes_ref !== 'undefined')){
} else {
shadow.grove.runtime.known_runtimes_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
shadow.grove.runtime.ref_QMARK_ = (function shadow$grove$runtime$ref_QMARK_(x){
var and__5023__auto__ = (x instanceof cljs.core.Atom);
if(and__5023__auto__){
return new cljs.core.Keyword("shadow.grove","runtime","shadow.grove/runtime",-1898524983).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(x));
} else {
return and__5023__auto__;
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.grove !== 'undefined') && (typeof shadow.grove.runtime !== 'undefined') && (typeof shadow.grove.runtime.id_seq !== 'undefined')){
} else {
shadow.grove.runtime.id_seq = cljs.core.volatile_BANG_((0));
}
shadow.grove.runtime.next_id = (function shadow$grove$runtime$next_id(){
return shadow.grove.runtime.id_seq.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(shadow.grove.runtime.id_seq.cljs$core$IDeref$_deref$arity$1(null) + (1)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.grove !== 'undefined') && (typeof shadow.grove.runtime !== 'undefined') && (typeof shadow.grove.runtime.ticker !== 'undefined')){
} else {
shadow.grove.runtime.ticker = Promise.resolve(null);
}
shadow.grove.runtime.next_tick = (function shadow$grove$runtime$next_tick(callback){
return goog.async.nextTick(callback);
});
shadow.grove.runtime.microtask = (function shadow$grove$runtime$microtask(callback){
return shadow.grove.runtime.ticker.then(callback);
});
shadow.grove.runtime._STAR_env_STAR_ = null;
shadow.grove.runtime._STAR_slot_provider_STAR_ = null;
shadow.grove.runtime._STAR_slot_idx_STAR_ = null;
shadow.grove.runtime._STAR_slot_value_STAR_ = new cljs.core.Keyword("shadow.grove.runtime","pending","shadow.grove.runtime/pending",373379514);
shadow.grove.runtime._STAR_claimed_STAR_ = null;
shadow.grove.runtime._STAR_ready_STAR_ = true;

/**
* @constructor
 * @implements {shadow.grove.protocols.IInvalidateSlot}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
*/
shadow.grove.runtime.SlotRef = (function (provider,idx,state,cleanup){
this.provider = provider;
this.idx = idx;
this.state = state;
this.cleanup = cleanup;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 98304;
});
(shadow.grove.runtime.SlotRef.prototype.shadow$grove$protocols$IInvalidateSlot$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.grove.runtime.SlotRef.prototype.shadow$grove$protocols$IInvalidateSlot$invalidate_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.grove.protocols._invalidate_slot_BANG_(self__.provider,self__.idx);
}));

(shadow.grove.runtime.SlotRef.prototype.shadow$grove$protocols$IInvalidateSlot$provide_new_value_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
return shadow.grove.protocols._provide_new_value_BANG_(self__.provider,self__.idx,new_value);
}));

(shadow.grove.runtime.SlotRef.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.state;
}));

(shadow.grove.runtime.SlotRef.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,nval){
var self__ = this;
var this$__$1 = this;
var oval_7911 = self__.state;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(oval_7911,nval)){
(self__.state = nval);

if((shadow.grove.runtime._STAR_slot_provider_STAR_ === self__.provider)){
} else {
if((self__.idx === shadow.grove.runtime._STAR_slot_idx_STAR_)){
} else {
this$__$1.shadow$grove$protocols$IInvalidateSlot$invalidate_BANG_$arity$1(null);
}
}
} else {
}

return nval;
}));

(shadow.grove.runtime.SlotRef.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.state) : f(self__.state)));
}));

(shadow.grove.runtime.SlotRef.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(self__.state,a) : f(self__.state,a)));
}));

(shadow.grove.runtime.SlotRef.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(self__.state,a,b) : f(self__.state,a,b)));
}));

(shadow.grove.runtime.SlotRef.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,a,b,xs));
}));

(shadow.grove.runtime.SlotRef.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"cleanup","cleanup",-1608658810,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(shadow.grove.runtime.SlotRef.cljs$lang$type = true);

(shadow.grove.runtime.SlotRef.cljs$lang$ctorStr = "shadow.grove.runtime/SlotRef");

(shadow.grove.runtime.SlotRef.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.grove.runtime/SlotRef");
}));

/**
 * Positional factory function for shadow.grove.runtime/SlotRef.
 */
shadow.grove.runtime.__GT_SlotRef = (function shadow$grove$runtime$__GT_SlotRef(provider,idx,state,cleanup){
return (new shadow.grove.runtime.SlotRef(provider,idx,state,cleanup));
});

shadow.grove.runtime.claim_slot_BANG_ = (function shadow$grove$runtime$claim_slot_BANG_(claim_id){
if(cljs.core.truth_(shadow.grove.runtime._STAR_slot_provider_STAR_)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("can only be used in component bind",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.not(shadow.grove.runtime._STAR_claimed_STAR_)){
(shadow.grove.runtime._STAR_claimed_STAR_ = claim_id);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("slot already claimed",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"idx","idx",1053688473),shadow.grove.runtime._STAR_slot_idx_STAR_,new cljs.core.Keyword(null,"claimed","claimed",-1569508946),shadow.grove.runtime._STAR_claimed_STAR_,new cljs.core.Keyword(null,"attempt","attempt",1611761308),claim_id], null));
}

return shadow.grove.protocols._init_slot_ref(shadow.grove.runtime._STAR_slot_provider_STAR_,shadow.grove.runtime._STAR_slot_idx_STAR_);
});

//# sourceMappingURL=shadow.grove.runtime.js.map
