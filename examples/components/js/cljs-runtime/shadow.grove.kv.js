goog.provide('shadow.grove.kv');
shadow.grove.kv.NOT_FOUND = (new Object());

/**
 * @interface
 */
shadow.grove.kv.IObserved = function(){};

var shadow$grove$kv$IObserved$observed_keys$dyn_8302 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.grove.kv.observed_keys[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__(this$));
} else {
var m__5372__auto__ = (shadow.grove.kv.observed_keys["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__(this$));
} else {
throw cljs.core.missing_protocol("IObserved.observed-keys",this$);
}
}
});
shadow.grove.kv.observed_keys = (function shadow$grove$kv$observed_keys(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$grove$kv$IObserved$observed_keys$arity$1 == null)))))){
return this$.shadow$grove$kv$IObserved$observed_keys$arity$1(this$);
} else {
return shadow$grove$kv$IObserved$observed_keys$dyn_8302(this$);
}
});

shadow.grove.kv.is_nil_allowed_QMARK_ = (function shadow$grove$kv$is_nil_allowed_QMARK_(data){
return new cljs.core.Keyword(null,"allow-nil-key?","allow-nil-key?",767847168).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("shadow.grove.kv","config","shadow.grove.kv/config",-623442541).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(data)));
});

/**
* @constructor
 * @implements {shadow.grove.kv.IObserved}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.grove.kv.ObservedData = (function (seq_used,keys_used,data){
this.seq_used = seq_used;
this.keys_used = keys_used;
this.data = data;
this.cljs$lang$protocol_mask$partition0$ = 8521472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.grove.kv.ObservedData.prototype.shadow$grove$kv$IObserved$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.grove.kv.ObservedData.prototype.shadow$grove$kv$IObserved$observed_keys$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.seq_used,cljs.core.persistent_BANG_(self__.keys_used)], null);
}));

(shadow.grove.kv.ObservedData.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.data.cljs$core$IMeta$_meta$arity$1(null);
}));

(shadow.grove.kv.ObservedData.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("observed data is read-only",cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.grove.kv.ObservedData.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return self__.data.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(null,k);
}));

(shadow.grove.kv.ObservedData.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("observed data is read-only, assoc not allowed",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"k","k",-2146297393),k,new cljs.core.Keyword(null,"v","v",21465059),v], null));
}));

(shadow.grove.kv.ObservedData.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
(self__.seq_used = true);

return self__.data.cljs$core$ISeqable$_seq$arity$1(null);
}));

(shadow.grove.kv.ObservedData.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,key){
var self__ = this;
var ___$1 = this;
if((key == null)){
if(cljs.core.truth_(shadow.grove.kv.is_nil_allowed_QMARK_(self__.data))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot read nil key",cljs.core.PersistentArrayMap.EMPTY);
}
} else {
}

(self__.keys_used = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(self__.keys_used,key));

return self__.data.cljs$core$ILookup$_lookup$arity$2(null,key);
}));

(shadow.grove.kv.ObservedData.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,key,default$){
var self__ = this;
var ___$1 = this;
if((key == null)){
if(cljs.core.truth_(shadow.grove.kv.is_nil_allowed_QMARK_(self__.data))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot read nil key",cljs.core.PersistentArrayMap.EMPTY);
}
} else {
}

(self__.keys_used = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(self__.keys_used,key));

return self__.data.cljs$core$ILookup$_lookup$arity$3(null,key,default$);
}));

(shadow.grove.kv.ObservedData.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"seq-used","seq-used",-983329363,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"keys-used","keys-used",-35184854,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null))], null);
}));

(shadow.grove.kv.ObservedData.cljs$lang$type = true);

(shadow.grove.kv.ObservedData.cljs$lang$ctorStr = "shadow.grove.kv/ObservedData");

(shadow.grove.kv.ObservedData.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.grove.kv/ObservedData");
}));

/**
 * Positional factory function for shadow.grove.kv/ObservedData.
 */
shadow.grove.kv.__GT_ObservedData = (function shadow$grove$kv$__GT_ObservedData(seq_used,keys_used,data){
return (new shadow.grove.kv.ObservedData(seq_used,keys_used,data));
});

shadow.grove.kv.observed = (function shadow$grove$kv$observed(data){
return (new shadow.grove.kv.ObservedData(false,cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY),data));
});

/**
 * @interface
 */
shadow.grove.kv.ITxCommit = function(){};

var shadow$grove$kv$ITxCommit$tx_snapshot$dyn_8322 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.grove.kv.tx_snapshot[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__(this$));
} else {
var m__5372__auto__ = (shadow.grove.kv.tx_snapshot["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__(this$));
} else {
throw cljs.core.missing_protocol("ITxCommit.tx-snapshot",this$);
}
}
});
shadow.grove.kv.tx_snapshot = (function shadow$grove$kv$tx_snapshot(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$grove$kv$ITxCommit$tx_snapshot$arity$1 == null)))))){
return this$.shadow$grove$kv$ITxCommit$tx_snapshot$arity$1(this$);
} else {
return shadow$grove$kv$ITxCommit$tx_snapshot$dyn_8322(this$);
}
});

var shadow$grove$kv$ITxCommit$tx_commit_BANG_$dyn_8326 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.grove.kv.tx_commit_BANG_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__(this$));
} else {
var m__5372__auto__ = (shadow.grove.kv.tx_commit_BANG_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__(this$));
} else {
throw cljs.core.missing_protocol("ITxCommit.tx-commit!",this$);
}
}
});
shadow.grove.kv.tx_commit_BANG_ = (function shadow$grove$kv$tx_commit_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$grove$kv$ITxCommit$tx_commit_BANG_$arity$1 == null)))))){
return this$.shadow$grove$kv$ITxCommit$tx_commit_BANG_$arity$1(this$);
} else {
return shadow$grove$kv$ITxCommit$tx_commit_BANG_$dyn_8326(this$);
}
});


/**
* @constructor
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
 * @implements {shadow.grove.kv.ITxCommit}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.grove.kv.TransactedData = (function (data_before,data,keys_new,keys_updated,keys_removed,completed_ref){
this.data_before = data_before;
this.data = data;
this.keys_new = keys_new;
this.keys_updated = keys_updated;
this.keys_removed = keys_removed;
this.completed_ref = completed_ref;
this.cljs$lang$protocol_mask$partition0$ = 8816394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.grove.kv.TransactedData.prototype.check_completed_BANG_ = (function (){
var self__ = this;
var this$ = this;
if(cljs.core.truth_(cljs.core.deref(self__.completed_ref))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("transaction concluded, don't hold on to db while in tx",cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
}));

(shadow.grove.kv.TransactedData.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
this$__$1.check_completed_BANG_();

return self__.data.cljs$core$ILookup$_lookup$arity$2(null,key);
}));

(shadow.grove.kv.TransactedData.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,key,default$){
var self__ = this;
var this$__$1 = this;
this$__$1.check_completed_BANG_();

return self__.data.cljs$core$ILookup$_lookup$arity$3(null,key,default$);
}));

(shadow.grove.kv.TransactedData.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.data.cljs$core$IMeta$_meta$arity$1(null);
}));

(shadow.grove.kv.TransactedData.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.check_completed_BANG_();

return self__.data.cljs$core$ICounted$_count$arity$1(null);
}));

(shadow.grove.kv.TransactedData.prototype.shadow$grove$kv$ITxCommit$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.grove.kv.TransactedData.prototype.shadow$grove$kv$ITxCommit$tx_snapshot$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var new$ = cljs.core.persistent_BANG_(self__.keys_new);
var updated = cljs.core.persistent_BANG_(self__.keys_updated);
var removed = cljs.core.persistent_BANG_(self__.keys_removed);
(self__.keys_new = cljs.core.transient$(new$));

(self__.keys_updated = cljs.core.transient$(updated));

(self__.keys_removed = cljs.core.transient$(removed));

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data-before","data-before",528494321),self__.data_before,new cljs.core.Keyword(null,"data","data",-232669377),self__.data,new cljs.core.Keyword(null,"keys-new","keys-new",546185618),new$,new cljs.core.Keyword(null,"keys-updated","keys-updated",1209111301),updated,new cljs.core.Keyword(null,"keys-removed","keys-removed",-110314827),removed], null);
}));

(shadow.grove.kv.TransactedData.prototype.shadow$grove$kv$ITxCommit$tx_commit_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.vreset_BANG_(self__.completed_ref,true);

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"data-before","data-before",528494321),self__.data_before,new cljs.core.Keyword(null,"data","data",-232669377),self__.data,new cljs.core.Keyword(null,"keys-new","keys-new",546185618),cljs.core.persistent_BANG_(self__.keys_new),new cljs.core.Keyword(null,"keys-updated","keys-updated",1209111301),cljs.core.persistent_BANG_(self__.keys_updated),new cljs.core.Keyword(null,"keys-removed","keys-removed",-110314827),cljs.core.persistent_BANG_(self__.keys_removed)], null);
}));

(shadow.grove.kv.TransactedData.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
this$__$1.check_completed_BANG_();

var was_added_in_tx_QMARK_ = cljs.core.contains_QMARK_(self__.keys_new,key);
return (new shadow.grove.kv.TransactedData(self__.data_before,self__.data.cljs$core$IMap$_dissoc$arity$2(null,key),self__.keys_new.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(null,key),self__.keys_updated.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(null,key),((was_added_in_tx_QMARK_)?self__.keys_removed:self__.keys_removed.cljs$core$ITransientCollection$_conj_BANG_$arity$2(null,key)),self__.completed_ref));
}));

(shadow.grove.kv.TransactedData.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return self__.data.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(null,k);
}));

(shadow.grove.kv.TransactedData.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,key,value){
var self__ = this;
var this$__$1 = this;
this$__$1.check_completed_BANG_();

if((key == null)){
if(cljs.core.truth_(shadow.grove.kv.is_nil_allowed_QMARK_(self__.data))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("nil key not allowed",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null));
}
} else {
}

var config_8334 = new cljs.core.Keyword("shadow.grove.kv","config","shadow.grove.kv/config",-623442541).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(self__.data));
var temp__5827__auto___8335 = new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944).cljs$core$IFn$_invoke$arity$1(config_8334);
if((temp__5827__auto___8335 == null)){
} else {
var validate_fn_8337 = temp__5827__auto___8335;
(validate_fn_8337.cljs$core$IFn$_invoke$arity$3 ? validate_fn_8337.cljs$core$IFn$_invoke$arity$3(self__.data,key,value) : validate_fn_8337(self__.data,key,value));
}

var prev_val = self__.data.cljs$core$ILookup$_lookup$arity$3(null,key,shadow.grove.kv.NOT_FOUND);
if((prev_val === value)){
return this$__$1;
} else {
var data_next = self__.data.cljs$core$IAssociative$_assoc$arity$3(null,key,value);
var new_QMARK_ = (shadow.grove.kv.NOT_FOUND === prev_val);
var removed_in_tx_QMARK_ = cljs.core.contains_QMARK_(self__.keys_removed,key);
if(((new_QMARK_) && (removed_in_tx_QMARK_))){
return (new shadow.grove.kv.TransactedData(self__.data_before,data_next,self__.keys_new,cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(self__.keys_updated,key),cljs.core.disj_BANG_.cljs$core$IFn$_invoke$arity$2(self__.keys_removed,key),self__.completed_ref));
} else {
if(new_QMARK_){
return (new shadow.grove.kv.TransactedData(self__.data_before,data_next,cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(self__.keys_new,key),self__.keys_updated,self__.keys_removed,self__.completed_ref));
} else {
if((!(removed_in_tx_QMARK_))){
} else {
throw (new Error(["Assert failed: ","updating a removed key?","\n","(not removed-in-tx?)"].join('')));
}

return (new shadow.grove.kv.TransactedData(self__.data_before,data_next,self__.keys_new,((cljs.core.contains_QMARK_(self__.keys_new,key))?self__.keys_updated:cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(self__.keys_updated,key)),self__.keys_removed,self__.completed_ref));

}
}
}
}));

(shadow.grove.kv.TransactedData.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data.cljs$core$ISeqable$_seq$arity$1(null);
}));

(shadow.grove.kv.TransactedData.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta){
var self__ = this;
var this$__$1 = this;
this$__$1.check_completed_BANG_();

return (new shadow.grove.kv.TransactedData(self__.data_before,self__.data.cljs$core$IWithMeta$_with_meta$arity$2(null,meta),self__.keys_new,self__.keys_updated,self__.keys_removed,self__.completed_ref));
}));

(shadow.grove.kv.TransactedData.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return coll__$1.cljs$core$IAssociative$_assoc$arity$3(null,entry.cljs$core$IIndexed$_nth$arity$2(null,(0)),entry.cljs$core$IIndexed$_nth$arity$2(null,(1)));
} else {
var ret = coll__$1;
var es = cljs.core.seq(entry);
while(true){
if((es == null)){
return ret;
} else {
var e = cljs.core.first(es);
if(cljs.core.vector_QMARK_(e)){
var G__8351 = cljs.core._assoc(ret,e.cljs$core$IIndexed$_nth$arity$2(null,(0)),e.cljs$core$IIndexed$_nth$arity$2(null,(1)));
var G__8352 = cljs.core.next(es);
ret = G__8351;
es = G__8352;
continue;
} else {
throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
}));

(shadow.grove.kv.TransactedData.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.data;
}));

(shadow.grove.kv.TransactedData.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data-before","data-before",-2125941448,null),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"keys-new","keys-new",-2108250151,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"keys-updated","keys-updated",-1445324468,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"keys-removed","keys-removed",1530216700,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"completed-ref","completed-ref",-1986860423,null)], null);
}));

(shadow.grove.kv.TransactedData.cljs$lang$type = true);

(shadow.grove.kv.TransactedData.cljs$lang$ctorStr = "shadow.grove.kv/TransactedData");

(shadow.grove.kv.TransactedData.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.grove.kv/TransactedData");
}));

/**
 * Positional factory function for shadow.grove.kv/TransactedData.
 */
shadow.grove.kv.__GT_TransactedData = (function shadow$grove$kv$__GT_TransactedData(data_before,data,keys_new,keys_updated,keys_removed,completed_ref){
return (new shadow.grove.kv.TransactedData(data_before,data,keys_new,keys_updated,keys_removed,completed_ref));
});

shadow.grove.kv.transacted = (function shadow$grove$kv$transacted(data){
if(cljs.core.map_QMARK_(data)){
} else {
throw (new Error("Assert failed: (map? data)"));
}

return (new shadow.grove.kv.TransactedData(data,data,cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY),cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY),cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY),cljs.core.volatile_BANG_(false)));
});
shadow.grove.kv.get_kv_BANG_ = (function shadow$grove$kv$get_kv_BANG_(env,kv_table){
var kv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,kv_table);
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.map_QMARK_(kv);
if(and__5023__auto__){
return new cljs.core.Keyword("shadow.grove.kv","config","shadow.grove.kv/config",-623442541).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(kv));
} else {
return and__5023__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("can only work with grove-kv",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kv-table","kv-table",1045619235),kv_table,new cljs.core.Keyword(null,"not-kv","not-kv",-1657579785),kv], null));
}

return kv;
});
shadow.grove.kv.make_primary_key_fn = (function shadow$grove$kv$make_primary_key_fn(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(((cljs.core.vector_QMARK_(x)) && (((cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,x)) && (cljs.core.seq(x)))))){
return (function (val){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__8214_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(val,p1__8214_SHARP_);
}),x);
});
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid :primary-key value",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),x], null));

}
}
});
shadow.grove.kv.init = (function shadow$grove$kv$init(kv_table,p__8228,init_data){
var map__8229 = p__8228;
var map__8229__$1 = cljs.core.__destructure_map(map__8229);
var config = map__8229__$1;
var primary_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8229__$1,new cljs.core.Keyword(null,"primary-key","primary-key",1422512605));
var config__$1 = (function (){var G__8230 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"kv-table","kv-table",1045619235),kv_table);
if(cljs.core.truth_(primary_key)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__8230,new cljs.core.Keyword(null,"primary-key-fn","primary-key-fn",-1006009999),shadow.grove.kv.make_primary_key_fn(primary_key));
} else {
return G__8230;
}
})();
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(init_data,cljs.core.assoc,new cljs.core.Keyword("shadow.grove.kv","config","shadow.grove.kv/config",-623442541),config__$1);
});
shadow.grove.kv.set = (function shadow$grove$kv$set(env,kv_table,key,val){
var kv = shadow.grove.kv.get_kv_BANG_(env,kv_table);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,kv_table,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(kv,key,val));
});
shadow.grove.kv.update_val = (function shadow$grove$kv$update_val(var_args){
var args__5755__auto__ = [];
var len__5749__auto___8376 = arguments.length;
var i__5750__auto___8377 = (0);
while(true){
if((i__5750__auto___8377 < len__5749__auto___8376)){
args__5755__auto__.push((arguments[i__5750__auto___8377]));

var G__8380 = (i__5750__auto___8377 + (1));
i__5750__auto___8377 = G__8380;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((4) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((4)),(0),null)):null);
return shadow.grove.kv.update_val.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5756__auto__);
});

(shadow.grove.kv.update_val.cljs$core$IFn$_invoke$arity$variadic = (function (env,kv_table,key,update_fn,args){
var kv = shadow.grove.kv.get_kv_BANG_(env,kv_table);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(kv,key);
var next_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(update_fn,val,args);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,kv_table,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(kv,key,next_val));
}));

(shadow.grove.kv.update_val.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(shadow.grove.kv.update_val.cljs$lang$applyTo = (function (seq8236){
var G__8237 = cljs.core.first(seq8236);
var seq8236__$1 = cljs.core.next(seq8236);
var G__8238 = cljs.core.first(seq8236__$1);
var seq8236__$2 = cljs.core.next(seq8236__$1);
var G__8239 = cljs.core.first(seq8236__$2);
var seq8236__$3 = cljs.core.next(seq8236__$2);
var G__8240 = cljs.core.first(seq8236__$3);
var seq8236__$4 = cljs.core.next(seq8236__$3);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8237,G__8238,G__8239,G__8240,seq8236__$4);
}));

shadow.grove.kv.remove_all = (function shadow$grove$kv$remove_all(env,kv_table){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(env,kv_table,(function (kv){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,kv,cljs.core.keys(kv));
}));
});
shadow.grove.kv.normalize_STAR_ = (function shadow$grove$kv$normalize_STAR_(imports_ref,env,kv_table,item){
var kv = shadow.grove.kv.get_kv_BANG_(env,kv_table);
var map__8249 = new cljs.core.Keyword("shadow.grove.kv","config","shadow.grove.kv/config",-623442541).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(kv));
var map__8249__$1 = cljs.core.__destructure_map(map__8249);
var primary_key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8249__$1,new cljs.core.Keyword(null,"primary-key-fn","primary-key-fn",-1006009999));
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8249__$1,new cljs.core.Keyword(null,"joins","joins",1033962699));
var _ = (cljs.core.truth_(primary_key_fn)?null:(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("no primary-key defined for table",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kv-table","kv-table",1045619235),kv_table], null))})());
var pkey = (primary_key_fn.cljs$core$IFn$_invoke$arity$1 ? primary_key_fn.cljs$core$IFn$_invoke$arity$1(item) : primary_key_fn(item));
var ___$1 = (cljs.core.truth_(pkey)?null:(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("item with invalid primary key",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"kv-table","kv-table",1045619235),kv_table,new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"pkey","pkey",25004288),pkey], null))})());
var item__$1 = cljs.core.reduce_kv((function (item__$1,key,join_kv){
var curr_val = cljs.core.get.cljs$core$IFn$_invoke$arity$3(item__$1,key,shadow.grove.kv.NOT_FOUND);
var norm_val = ((cljs.core.map_QMARK_(curr_val))?(shadow.grove.kv.normalize_STAR_.cljs$core$IFn$_invoke$arity$4 ? shadow.grove.kv.normalize_STAR_.cljs$core$IFn$_invoke$arity$4(imports_ref,env,join_kv,curr_val) : shadow.grove.kv.normalize_STAR_(imports_ref,env,join_kv,curr_val)):((cljs.core.vector_QMARK_(curr_val))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__8248_SHARP_){
return (shadow.grove.kv.normalize_STAR_.cljs$core$IFn$_invoke$arity$4 ? shadow.grove.kv.normalize_STAR_.cljs$core$IFn$_invoke$arity$4(imports_ref,env,join_kv,p1__8248_SHARP_) : shadow.grove.kv.normalize_STAR_(imports_ref,env,join_kv,p1__8248_SHARP_));
}),curr_val):curr_val
));
if((curr_val === norm_val)){
return item__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item__$1,key,norm_val);
}
}),item,joins);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(imports_ref,cljs.core.conj,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kv_table,pkey,item__$1], null));

return pkey;
});
/**
 * returns a seq of [[ident item] ...] tuples
 */
shadow.grove.kv.normalize = (function shadow$grove$kv$normalize(env,kv_table,vals){
var imports_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
if(cljs.core.map_QMARK_(vals)){
shadow.grove.kv.normalize_STAR_(imports_ref,env,kv_table,vals);
} else {
if(cljs.core.sequential_QMARK_(vals)){
var seq__8253_8428 = cljs.core.seq(vals);
var chunk__8254_8429 = null;
var count__8255_8430 = (0);
var i__8256_8431 = (0);
while(true){
if((i__8256_8431 < count__8255_8430)){
var item_8432 = chunk__8254_8429.cljs$core$IIndexed$_nth$arity$2(null,i__8256_8431);
shadow.grove.kv.normalize_STAR_(imports_ref,env,kv_table,item_8432);


var G__8433 = seq__8253_8428;
var G__8434 = chunk__8254_8429;
var G__8435 = count__8255_8430;
var G__8436 = (i__8256_8431 + (1));
seq__8253_8428 = G__8433;
chunk__8254_8429 = G__8434;
count__8255_8430 = G__8435;
i__8256_8431 = G__8436;
continue;
} else {
var temp__5823__auto___8438 = cljs.core.seq(seq__8253_8428);
if(temp__5823__auto___8438){
var seq__8253_8439__$1 = temp__5823__auto___8438;
if(cljs.core.chunked_seq_QMARK_(seq__8253_8439__$1)){
var c__5548__auto___8441 = cljs.core.chunk_first(seq__8253_8439__$1);
var G__8443 = cljs.core.chunk_rest(seq__8253_8439__$1);
var G__8444 = c__5548__auto___8441;
var G__8445 = cljs.core.count(c__5548__auto___8441);
var G__8446 = (0);
seq__8253_8428 = G__8443;
chunk__8254_8429 = G__8444;
count__8255_8430 = G__8445;
i__8256_8431 = G__8446;
continue;
} else {
var item_8448 = cljs.core.first(seq__8253_8439__$1);
shadow.grove.kv.normalize_STAR_(imports_ref,env,kv_table,item_8448);


var G__8450 = cljs.core.next(seq__8253_8439__$1);
var G__8451 = null;
var G__8452 = (0);
var G__8453 = (0);
seq__8253_8428 = G__8450;
chunk__8254_8429 = G__8451;
count__8255_8430 = G__8452;
i__8256_8431 = G__8453;
continue;
}
} else {
}
}
break;
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot import",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kv-table","kv-table",1045619235),kv_table,new cljs.core.Keyword(null,"vals","vals",768058733),vals], null));

}
}

return cljs.core.deref(imports_ref);
});
shadow.grove.kv.merge_imports = (function shadow$grove$kv$merge_imports(env,imports){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$1,p__8260){
var vec__8261 = p__8260;
var kv_table = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8261,(0),null);
var pkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8261,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8261,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kv_table,pkey], null),cljs.core.merge,item);
}),env,imports);
});
shadow.grove.kv.merge_seq = (function shadow$grove$kv$merge_seq(var_args){
var G__8266 = arguments.length;
switch (G__8266) {
case 3:
return shadow.grove.kv.merge_seq.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.grove.kv.merge_seq.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.grove.kv.merge_seq.cljs$core$IFn$_invoke$arity$3 = (function (env,kv_table,coll){
return shadow.grove.kv.merge_seq.cljs$core$IFn$_invoke$arity$4(env,kv_table,coll,(function (env__$1,items){
return env__$1;
}));
}));

(shadow.grove.kv.merge_seq.cljs$core$IFn$_invoke$arity$4 = (function (env,kv_table,coll,target_path_or_fn){
if(cljs.core.map_QMARK_(env)){
} else {
throw (new Error("Assert failed: (map? env)"));
}

if((kv_table instanceof cljs.core.Keyword)){
} else {
throw (new Error("Assert failed: (keyword? kv-table)"));
}

if(cljs.core.sequential_QMARK_(coll)){
} else {
throw (new Error("Assert failed: (sequential? coll)"));
}

if(((cljs.core.fn_QMARK_(target_path_or_fn)) || (cljs.core.vector_QMARK_(target_path_or_fn)))){
} else {
throw (new Error("Assert failed: (or (fn? target-path-or-fn) (vector? target-path-or-fn))"));
}

var kv = shadow.grove.kv.get_kv_BANG_(env,kv_table);
var map__8279 = new cljs.core.Keyword("shadow.grove.kv","config","shadow.grove.kv/config",-623442541).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(kv));
var map__8279__$1 = cljs.core.__destructure_map(map__8279);
var config = map__8279__$1;
var primary_key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8279__$1,new cljs.core.Keyword(null,"primary-key-fn","primary-key-fn",-1006009999));
var _ = (cljs.core.truth_(primary_key_fn)?null:(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("no primary key defined for table",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kv-table","kv-table",1045619235),kv_table], null))})());
var coll_keys = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(primary_key_fn,coll));
var imports = shadow.grove.kv.normalize(env,kv_table,coll);
var G__8282 = shadow.grove.kv.merge_imports(env,imports);
var G__8282__$1 = ((cljs.core.fn_QMARK_(target_path_or_fn))?(target_path_or_fn.cljs$core$IFn$_invoke$arity$2 ? target_path_or_fn.cljs$core$IFn$_invoke$arity$2(G__8282,coll_keys) : target_path_or_fn(G__8282,coll_keys)):G__8282);
if(cljs.core.vector_QMARK_(target_path_or_fn)){
return cljs.core.assoc_in(G__8282__$1,target_path_or_fn,coll_keys);
} else {
return G__8282__$1;
}
}));

(shadow.grove.kv.merge_seq.cljs$lang$maxFixedArity = 4);

shadow.grove.kv.add = (function shadow$grove$kv$add(env,kv_table,val){
var imports = shadow.grove.kv.normalize(env,kv_table,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [val], null));
return shadow.grove.kv.merge_imports(env,imports);
});

//# sourceMappingURL=shadow.grove.kv.js.map
