goog.provide('shadow.grove.impl');

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
shadow.grove.impl.IndexKey = (function (kv_table,key,__meta,__extmap,__hash){
this.kv_table = kv_table;
this.key = key;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.grove.impl.IndexKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(shadow.grove.impl.IndexKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k8778,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__8802 = k8778;
var G__8802__$1 = (((G__8802 instanceof cljs.core.Keyword))?G__8802.fqn:null);
switch (G__8802__$1) {
case "kv-table":
return self__.kv_table;

break;
case "key":
return self__.key;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8778,else__5326__auto__);

}
}));

(shadow.grove.impl.IndexKey.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__8803){
var vec__8804 = p__8803;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8804,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8804,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__(ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(shadow.grove.impl.IndexKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#shadow.grove.impl.IndexKey{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kv-table","kv-table",1045619235),self__.kv_table],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null))], null),self__.__extmap));
}));

(shadow.grove.impl.IndexKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8777){
var self__ = this;
var G__8777__$1 = this;
return (new cljs.core.RecordIter((0),G__8777__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv-table","kv-table",1045619235),new cljs.core.Keyword(null,"key","key",-1516042587)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.grove.impl.IndexKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(shadow.grove.impl.IndexKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new shadow.grove.impl.IndexKey(self__.kv_table,self__.key,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.grove.impl.IndexKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.grove.impl.IndexKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (768338082 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(shadow.grove.impl.IndexKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8779,other8780){
var self__ = this;
var this8779__$1 = this;
return (((!((other8780 == null)))) && ((((this8779__$1.constructor === other8780.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8779__$1.kv_table,other8780.kv_table)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8779__$1.key,other8780.key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8779__$1.__extmap,other8780.__extmap)))))))));
}));

(shadow.grove.impl.IndexKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kv-table","kv-table",1045619235),null,new cljs.core.Keyword(null,"key","key",-1516042587),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new shadow.grove.impl.IndexKey(self__.kv_table,self__.key,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(shadow.grove.impl.IndexKey.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k8778){
var self__ = this;
var this__5330__auto____$1 = this;
var G__8818 = k8778;
var G__8818__$1 = (((G__8818 instanceof cljs.core.Keyword))?G__8818.fqn:null);
switch (G__8818__$1) {
case "kv-table":
case "key":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k8778);

}
}));

(shadow.grove.impl.IndexKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__8777){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__8820 = cljs.core.keyword_identical_QMARK_;
var expr__8821 = k__5332__auto__;
if(cljs.core.truth_((pred__8820.cljs$core$IFn$_invoke$arity$2 ? pred__8820.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kv-table","kv-table",1045619235),expr__8821) : pred__8820(new cljs.core.Keyword(null,"kv-table","kv-table",1045619235),expr__8821)))){
return (new shadow.grove.impl.IndexKey(G__8777,self__.key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__8820.cljs$core$IFn$_invoke$arity$2 ? pred__8820.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),expr__8821) : pred__8820(new cljs.core.Keyword(null,"key","key",-1516042587),expr__8821)))){
return (new shadow.grove.impl.IndexKey(self__.kv_table,G__8777,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.grove.impl.IndexKey(self__.kv_table,self__.key,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__8777),null));
}
}
}));

(shadow.grove.impl.IndexKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"kv-table","kv-table",1045619235),self__.kv_table,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null))], null),self__.__extmap));
}));

(shadow.grove.impl.IndexKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__8777){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.grove.impl.IndexKey(self__.kv_table,self__.key,G__8777,self__.__extmap,self__.__hash));
}));

(shadow.grove.impl.IndexKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(shadow.grove.impl.IndexKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"kv-table","kv-table",-1608816534,null),new cljs.core.Symbol(null,"key","key",124488940,null)], null);
}));

(shadow.grove.impl.IndexKey.cljs$lang$type = true);

(shadow.grove.impl.IndexKey.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"shadow.grove.impl/IndexKey",null,(1),null));
}));

(shadow.grove.impl.IndexKey.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"shadow.grove.impl/IndexKey");
}));

/**
 * Positional factory function for shadow.grove.impl/IndexKey.
 */
shadow.grove.impl.__GT_IndexKey = (function shadow$grove$impl$__GT_IndexKey(kv_table,key){
return (new shadow.grove.impl.IndexKey(kv_table,key,null,null,null));
});

/**
 * Factory function for shadow.grove.impl/IndexKey, taking a map of keywords to field values.
 */
shadow.grove.impl.map__GT_IndexKey = (function shadow$grove$impl$map__GT_IndexKey(G__8789){
var extmap__5365__auto__ = (function (){var G__8829 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__8789,new cljs.core.Keyword(null,"kv-table","kv-table",1045619235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"key","key",-1516042587)], 0));
if(cljs.core.record_QMARK_(G__8789)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__8829);
} else {
return G__8829;
}
})();
return (new shadow.grove.impl.IndexKey(new cljs.core.Keyword(null,"kv-table","kv-table",1045619235).cljs$core$IFn$_invoke$arity$1(G__8789),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__8789),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

if((typeof shadow !== 'undefined') && (typeof shadow.grove !== 'undefined') && (typeof shadow.grove.impl !== 'undefined') && (typeof shadow.grove.impl.active_queries_map !== 'undefined')){
} else {
shadow.grove.impl.active_queries_map = (new Map());
}
if((typeof shadow !== 'undefined') && (typeof shadow.grove !== 'undefined') && (typeof shadow.grove.impl !== 'undefined') && (typeof shadow.grove.impl.active_queries_ref !== 'undefined')){
} else {
shadow.grove.impl.active_queries_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.grove !== 'undefined') && (typeof shadow.grove.impl !== 'undefined') && (typeof shadow.grove.impl.key_index_ref !== 'undefined')){
} else {
shadow.grove.impl.key_index_ref = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
}
shadow.grove.impl.js_set_union = (function shadow$grove$impl$js_set_union(a,b){
return b.forEach((function (x){
return a.add(x);
}));
});
shadow.grove.impl.set_conj = (function shadow$grove$impl$set_conj(x,y){
if((x == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([y]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(x,y);
}
});
shadow.grove.impl.work_queue_task_BANG_ = (cljs.core.truth_((function (){var and__5023__auto__ = (typeof window !== 'undefined');
if(and__5023__auto__){
return window.requestIdleCallback;
} else {
return and__5023__auto__;
}
})())?(function (work_task){
return window.requestIdleCallback(work_task);
}):(function (work_task){
return setTimeout((function (){
var start = Date.now();
var fake_deadline = ({"timeRemaining": (function (){
return ((16) < (Date.now() - start));
})});
return work_task(fake_deadline);
}),(0));
}));
shadow.grove.impl.work_queue_cancel_BANG_ = (cljs.core.truth_((function (){var and__5023__auto__ = (typeof window !== 'undefined');
if(and__5023__auto__){
return window.cancelIdleCallback;
} else {
return and__5023__auto__;
}
})())?(function (id){
return window.cancelIdleCallback(id);
}):(function (id){
return clearTimeout(id);
}));
if((typeof shadow !== 'undefined') && (typeof shadow.grove !== 'undefined') && (typeof shadow.grove.impl !== 'undefined') && (typeof shadow.grove.impl.index_queue !== 'undefined')){
} else {
shadow.grove.impl.index_queue = (new Array());
}
if((typeof shadow !== 'undefined') && (typeof shadow.grove !== 'undefined') && (typeof shadow.grove.impl !== 'undefined') && (typeof shadow.grove.impl.work_queued_QMARK_ !== 'undefined')){
} else {
shadow.grove.impl.work_queued_QMARK_ = false;
}
if((typeof shadow !== 'undefined') && (typeof shadow.grove !== 'undefined') && (typeof shadow.grove.impl !== 'undefined') && (typeof shadow.grove.impl.work_timeout !== 'undefined')){
} else {
shadow.grove.impl.work_timeout = null;
}
shadow.grove.impl.index_work_all_BANG_ = (function shadow$grove$impl$index_work_all_BANG_(){
if(shadow.grove.impl.work_queued_QMARK_){
if(cljs.core.truth_(shadow.grove.impl.work_timeout)){
shadow.grove.impl.work_queue_cancel_BANG_(shadow.grove.impl.work_timeout);

(shadow.grove.impl.work_timeout = null);
} else {
}

while(true){
var task_9013 = shadow.grove.impl.index_queue.shift();
if(task_9013){
task_9013();

continue;
} else {
}
break;
}

return (shadow.grove.impl.work_queued_QMARK_ = false);
} else {
return null;
}
});
shadow.grove.impl.index_work_some_BANG_ = (function shadow$grove$impl$index_work_some_BANG_(deadline){
while(true){
if((deadline.timeRemaining() > (0))){
var task_9020 = shadow.grove.impl.index_queue.shift();
if(task_9020){
task_9020();

continue;
} else {
}
} else {
}
break;
}

if((shadow.grove.impl.index_queue.length > (0))){
(shadow.grove.impl.work_timeout = shadow.grove.impl.work_queue_task_BANG_(shadow.grove.impl.index_work_some_BANG_));

return (shadow.grove.impl.work_queued_QMARK_ = true);
} else {
(shadow.grove.impl.work_timeout = null);

return (shadow.grove.impl.work_queued_QMARK_ = false);
}
});
shadow.grove.impl.index_queue_some_BANG_ = (function shadow$grove$impl$index_queue_some_BANG_(){
if(shadow.grove.impl.work_queued_QMARK_){
return null;
} else {
(shadow.grove.impl.work_timeout = shadow.grove.impl.work_queue_task_BANG_(shadow.grove.impl.index_work_some_BANG_));

return (shadow.grove.impl.work_queued_QMARK_ = true);
}
});
shadow.grove.impl.get_key_index_set = (function shadow$grove$impl$get_key_index_set(key){
var or__5025__auto__ = cljs.core._lookup(cljs.core.deref(shadow.grove.impl.key_index_ref),key);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var s = (new Set());
shadow.grove.impl.key_index_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.grove.impl.key_index_ref.cljs$core$IDeref$_deref$arity$1(null),key,s));

return s;
}
});
shadow.grove.impl.index_query_key_STAR_ = (function shadow$grove$impl$index_query_key_STAR_(query_id,prev_key,next_key){
if(cljs.core.truth_(shadow.grove.impl.active_queries_map.has(query_id))){
if((prev_key == null)){
var set_9026 = shadow.grove.impl.get_key_index_set(next_key);
set_9026.add(query_id);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev_key,next_key)){
var prev_set_9028 = shadow.grove.impl.get_key_index_set(prev_key);
var next_set_9029 = shadow.grove.impl.get_key_index_set(next_key);
prev_set_9028.delete(query_id);

next_set_9029.add(query_id);
} else {
}
}
} else {
}

return undefined;
});
shadow.grove.impl.index_query_key = (function shadow$grove$impl$index_query_key(query_id,prev_key,next_key){
shadow.grove.impl.index_queue.push((function (){
return shadow.grove.impl.index_query_key_STAR_(query_id,prev_key,next_key);
}));

return shadow.grove.impl.index_queue_some_BANG_();
});
shadow.grove.impl.unindex_query_key_STAR_ = (function shadow$grove$impl$unindex_query_key_STAR_(query_id,key){
var temp__5827__auto__ = cljs.core._lookup(cljs.core.deref(shadow.grove.impl.key_index_ref),key);
if((temp__5827__auto__ == null)){
return null;
} else {
var s = temp__5827__auto__;
return s.delete(query_id);
}
});
shadow.grove.impl.unindex_query_key = (function shadow$grove$impl$unindex_query_key(query_id,key){
shadow.grove.impl.index_queue.push((function (){
return shadow.grove.impl.unindex_query_key_STAR_(query_id,key);
}));

return shadow.grove.impl.index_queue_some_BANG_();
});
shadow.grove.impl.index_query_keys_STAR_ = (function shadow$grove$impl$index_query_keys_STAR_(query_id,prev_keys,next_keys){
if(cljs.core.truth_(shadow.grove.impl.active_queries_map.has(query_id))){
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,key){
if(cljs.core.contains_QMARK_(prev_keys,key)){
} else {
var set_9039 = shadow.grove.impl.get_key_index_set(key);
set_9039.add(query_id);
}

return null;
}),null,next_keys);

if((prev_keys == null)){
} else {
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,key){
if(cljs.core.contains_QMARK_(next_keys,key)){
return null;
} else {
var set = shadow.grove.impl.get_key_index_set(key);
return set.delete(query_id);
}
}),null,prev_keys);
}
} else {
}

return undefined;
});
shadow.grove.impl.index_query_keys = (function shadow$grove$impl$index_query_keys(query_id,prev_keys,next_keys){
shadow.grove.impl.index_queue.push((function (){
return shadow.grove.impl.index_query_keys_STAR_(query_id,prev_keys,next_keys);
}));

return shadow.grove.impl.index_queue_some_BANG_();
});
shadow.grove.impl.unindex_query_keys_STAR_ = (function shadow$grove$impl$unindex_query_keys_STAR_(query_id,keys){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,key){
var temp__5827__auto__ = cljs.core._lookup(cljs.core.deref(shadow.grove.impl.key_index_ref),key);
if((temp__5827__auto__ == null)){
return null;
} else {
var s = temp__5827__auto__;
return s.delete(query_id);
}
}),null,keys);
});
shadow.grove.impl.unindex_query_keys = (function shadow$grove$impl$unindex_query_keys(query_id,keys){
shadow.grove.impl.index_queue.push((function (){
return shadow.grove.impl.unindex_query_keys_STAR_(query_id,keys);
}));

return shadow.grove.impl.index_queue_some_BANG_();
});
shadow.grove.impl.invalidate_kv_BANG_ = (function shadow$grove$impl$invalidate_kv_BANG_(tx_info){
shadow.grove.impl.index_work_all_BANG_();

var key_index_9054 = cljs.core.deref(shadow.grove.impl.key_index_ref);
var keys_to_invalidate_9055 = (new Array());
var query_ids_9056 = (new Set());
tx_info.cljs$core$IKVReduce$_kv_reduce$arity$3(null,(function (_,kv_table,tx_info__$1){
var keys_new_9058 = new cljs.core.Keyword(null,"keys-new","keys-new",546185618).cljs$core$IFn$_invoke$arity$1(tx_info__$1);
var keys_updated_9059 = new cljs.core.Keyword(null,"keys-updated","keys-updated",1209111301).cljs$core$IFn$_invoke$arity$1(tx_info__$1);
var keys_removed_9060 = new cljs.core.Keyword(null,"keys-removed","keys-removed",-110314827).cljs$core$IFn$_invoke$arity$1(tx_info__$1);
var add_9061 = (function (key){
return keys_to_invalidate_9055.push((new shadow.grove.impl.IndexKey(kv_table,key,null,null,null)));
});
if(((cljs.core.seq(keys_updated_9059)) || (((cljs.core.seq(keys_new_9058)) || (cljs.core.seq(keys_removed_9060)))))){
keys_to_invalidate_9055.push(kv_table);
} else {
}

cljs.core.run_BANG_(add_9061,keys_new_9058);

cljs.core.run_BANG_(add_9061,keys_updated_9059);

cljs.core.run_BANG_(add_9061,keys_removed_9060);

return null;
}),null);

keys_to_invalidate_9055.forEach((function (key){
var temp__5827__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(key_index_9054,key);
if((temp__5827__auto__ == null)){
return null;
} else {
var query_set = temp__5827__auto__;
return shadow.grove.impl.js_set_union(query_ids_9056,query_set);
}
}));

query_ids_9056.forEach((function (query_id){
var temp__5827__auto__ = shadow.grove.impl.active_queries_map.get(query_id);
if((temp__5827__auto__ == null)){
return null;
} else {
var callback = temp__5827__auto__;
return callback();
}
}));

return undefined;
});
shadow.grove.impl.merge_result = (function shadow$grove$impl$merge_result(tx_env,ev,result){
if((result == null)){
return tx_env;
} else {
if((!(cljs.core.map_QMARK_(result)))){
throw (new Error(["tx handler returned invalid result for event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(ev))].join('')));
} else {
if((new cljs.core.Keyword("shadow.grove.impl","tx-guard","shadow.grove.impl/tx-guard",1063602673).cljs$core$IFn$_invoke$arity$1(tx_env) === new cljs.core.Keyword("shadow.grove.impl","tx-guard","shadow.grove.impl/tx-guard",1063602673).cljs$core$IFn$_invoke$arity$1(result))){
return result;
} else {
throw (new Error(["tx handler returned invalid result for event",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(ev)),", expected a modified env"].join('')));

}
}
}
});
shadow.grove.impl.unhandled_event_ex_BANG_ = (function shadow$grove$impl$unhandled_event_ex_BANG_(ev_id,tx,origin){
if(cljs.core.truth_((function (){var and__5023__auto__ = goog.DEBUG;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.map_QMARK_(origin);
} else {
return and__5023__auto__;
}
})())){
var comp = shadow.grove.components.get_component(origin);
var err_msg = ["Unhandled Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev_id),"\n    Component Trace:"].join('');
while(true){
if(cljs.core.not(comp)){
console.error(err_msg);

throw (new Error(["Unhandled Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev_id)].join('')));
} else {
var G__9079 = shadow.grove.components.get_parent(comp);
var G__9080 = [err_msg,"\n    ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.grove.components.get_component_name(comp))].join('');
comp = G__9079;
err_msg = G__9080;
continue;
}
break;
}
} else {
console.error("Unhandled event",ev_id,tx,origin);

throw (new Error(["Unhandled Event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev_id)].join('')));
}
});
shadow.grove.impl.call_interceptors = (function shadow$grove$impl$call_interceptors(interceptors,tx_env){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (tx_env__$1,handler){
if((handler == null)){
return tx_env__$1;
} else {
var result = handler(tx_env__$1);
if((new cljs.core.Keyword("shadow.grove.impl","tx-guard","shadow.grove.impl/tx-guard",1063602673).cljs$core$IFn$_invoke$arity$1(result) === new cljs.core.Keyword("shadow.grove.impl","tx-guard","shadow.grove.impl/tx-guard",1063602673).cljs$core$IFn$_invoke$arity$1(tx_env__$1))){
} else {
throw (new Error("interceptor didn't return tx-env"));
}

return result;
}
}),tx_env,interceptors);
});
shadow.grove.impl.tx_reporter = null;
shadow.grove.impl.do_tx_report = (function shadow$grove$impl$do_tx_report(tx_env){
if((shadow.grove.impl.tx_reporter == null)){
return null;
} else {
return shadow.grove.runtime.next_tick((function (){
return shadow.grove.impl.tx_reporter(tx_env);
}));
}
});
shadow.grove.impl.kv_interceptor = (function shadow$grove$impl$kv_interceptor(tx_env){
var rt_ref = new cljs.core.Keyword("shadow.grove","runtime-ref","shadow.grove/runtime-ref",555646968).cljs$core$IFn$_invoke$arity$1(tx_env);
var before = new cljs.core.Keyword("shadow.grove","kv","shadow.grove/kv",556503171).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rt_ref));
var tx_env__$1 = before.cljs$core$IKVReduce$_kv_reduce$arity$3(null,(function (tx_env__$1,kv_table,kv){
return tx_env__$1.cljs$core$IAssociative$_assoc$arity$3(null,kv_table,shadow.grove.kv.transacted(kv));
}),tx_env);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(tx_env__$1,new cljs.core.Keyword("shadow.grove","tx-after","shadow.grove/tx-after",412311980),cljs.core.conj,(function shadow$grove$impl$kv_interceptor_$_kv_interceptor_after(tx_env__$2){
if((new cljs.core.Keyword("shadow.grove","kv","shadow.grove/kv",556503171).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rt_ref)) === before)){
} else {
throw (new Error("someone messed with kv state while in tx"));
}

var tx_info = before.cljs$core$IKVReduce$_kv_reduce$arity$3(null,(function (tx_info,kv_table,_){
var kv = tx_env__$2.cljs$core$ILookup$_lookup$arity$2(null,kv_table);
if((kv instanceof shadow.grove.kv.TransactedData)){
} else {
throw (new Error(["during transaction the ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kv_table)," table was replaced. only a modified table can be returned."].join('')));
}

var commit = kv.shadow$grove$kv$ITxCommit$tx_commit_BANG_$arity$1(null);
if((new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(commit) === new cljs.core.Keyword(null,"data-before","data-before",528494321).cljs$core$IFn$_invoke$arity$1(commit))){
return tx_info;
} else {
return tx_info.cljs$core$IAssociative$_assoc$arity$3(null,kv_table,commit);
}
}),cljs.core.PersistentArrayMap.EMPTY);
var kv_after = cljs.core._kv_reduce(tx_info,(function (m,kv_table,tx_info__$1){
return m.cljs$core$IAssociative$_assoc$arity$3(null,kv_table,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(tx_info__$1));
}),before);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(rt_ref,cljs.core.assoc,new cljs.core.Keyword("shadow.grove","kv","shadow.grove/kv",556503171),kv_after);

shadow.grove.impl.invalidate_kv_BANG_(tx_info);

return before.cljs$core$IKVReduce$_kv_reduce$arity$3(null,(function (tx_env__$3,kv_table,_){
return tx_env__$3.cljs$core$IMap$_dissoc$arity$2(null,kv_table);
}),tx_env__$2.cljs$core$IAssociative$_assoc$arity$3(null,new cljs.core.Keyword("shadow.grove","tx-info","shadow.grove/tx-info",536926930),tx_info));
}));
});
shadow.grove.impl.process_event = (function shadow$grove$impl$process_event(rt_ref,ev,dom_ev,origin){
if(cljs.core.map_QMARK_(ev)){
} else {
throw (new Error("Assert failed: (map? ev)"));
}

var map__8886 = cljs.core.deref(rt_ref);
var map__8886__$1 = cljs.core.__destructure_map(map__8886);
var env = map__8886__$1;
var event_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8886__$1,new cljs.core.Keyword("shadow.grove","event-config","shadow.grove/event-config",1344327341));
var event_interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8886__$1,new cljs.core.Keyword("shadow.grove","event-interceptors","shadow.grove/event-interceptors",1389832382));
var fx_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8886__$1,new cljs.core.Keyword("shadow.grove","fx-config","shadow.grove/fx-config",1659378758));
var ev_id = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(ev);
var handler = (function (){var or__5025__auto__ = new cljs.core.Keyword("shadow.grove","tx","shadow.grove/tx",-1105384755).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ev));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(event_config,ev_id);
}
})();
if(cljs.core.not(handler)){
return shadow.grove.impl.unhandled_event_ex_BANG_(ev_id,ev,origin);
} else {
try{var tx_guard = (new Object());
var tx_done_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var tx_env = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("shadow.grove.impl","tx-guard","shadow.grove.impl/tx-guard",1063602673),tx_guard,new cljs.core.Keyword("shadow.grove","runtime-ref","shadow.grove/runtime-ref",555646968),rt_ref,new cljs.core.Keyword("shadow.grove","tx-after","shadow.grove/tx-after",412311980),cljs.core.List.EMPTY,new cljs.core.Keyword("shadow.grove","fx","shadow.grove/fx",-1712376559),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("shadow.grove","origin","shadow.grove/origin",470160883),origin,new cljs.core.Keyword("shadow.grove","dom-event","shadow.grove/dom-event",719017637),dom_ev,new cljs.core.Keyword("shadow.grove","event","shadow.grove/event",984518123),ev], null);
var tx_env__$1 = shadow.grove.impl.call_interceptors(event_interceptors,tx_env);
var handler_result = (handler.cljs$core$IFn$_invoke$arity$3 ? handler.cljs$core$IFn$_invoke$arity$3(tx_env__$1,ev,dom_ev) : handler(tx_env__$1,ev,dom_ev));
var result = shadow.grove.impl.merge_result(tx_env__$1,ev,handler_result);
var result__$1 = shadow.grove.impl.call_interceptors(new cljs.core.Keyword("shadow.grove","tx-after","shadow.grove/tx-after",412311980).cljs$core$IFn$_invoke$arity$1(result),result);
shadow.grove.runtime.next_tick((function (){
var seq__8890 = cljs.core.seq(new cljs.core.Keyword("shadow.grove","fx","shadow.grove/fx",-1712376559).cljs$core$IFn$_invoke$arity$1(result__$1));
var chunk__8891 = null;
var count__8892 = (0);
var i__8893 = (0);
while(true){
if((i__8893 < count__8892)){
var vec__8901 = chunk__8891.cljs$core$IIndexed$_nth$arity$2(null,i__8893);
var fx_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8901,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8901,(1),null);
var fx_fn_9108 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fx_config,fx_key);
var fx_env_9109 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,new cljs.core.Keyword(null,"transact!","transact!",-822725810),((function (seq__8890,chunk__8891,count__8892,i__8893,fx_fn_9108,vec__8901,fx_key,value,tx_guard,tx_done_ref,tx_env,tx_env__$1,handler_result,result,result__$1,map__8886,map__8886__$1,env,event_config,event_interceptors,fx_config,ev_id,handler){
return (function (fx_tx){
if(cljs.core.truth_(cljs.core.deref(tx_done_ref))){
} else {
throw (new Error("cannot start another tx yet, current one is still running. transact! is meant for async events",cljs.core.PersistentArrayMap.EMPTY));
}

return (shadow.grove.impl.process_event.cljs$core$IFn$_invoke$arity$4 ? shadow.grove.impl.process_event.cljs$core$IFn$_invoke$arity$4(rt_ref,fx_tx,null,origin) : shadow.grove.impl.process_event(rt_ref,fx_tx,null,origin));
});})(seq__8890,chunk__8891,count__8892,i__8893,fx_fn_9108,vec__8901,fx_key,value,tx_guard,tx_done_ref,tx_env,tx_env__$1,handler_result,result,result__$1,map__8886,map__8886__$1,env,event_config,event_interceptors,fx_config,ev_id,handler))
);
if(cljs.core.not(fx_fn_9108)){
throw (new Error(["unknown fx ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fx_key)].join('')));
} else {
(fx_fn_9108.cljs$core$IFn$_invoke$arity$2 ? fx_fn_9108.cljs$core$IFn$_invoke$arity$2(fx_env_9109,value) : fx_fn_9108(fx_env_9109,value));
}


var G__9118 = seq__8890;
var G__9119 = chunk__8891;
var G__9120 = count__8892;
var G__9121 = (i__8893 + (1));
seq__8890 = G__9118;
chunk__8891 = G__9119;
count__8892 = G__9120;
i__8893 = G__9121;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__8890);
if(temp__5823__auto__){
var seq__8890__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8890__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__8890__$1);
var G__9122 = cljs.core.chunk_rest(seq__8890__$1);
var G__9123 = c__5548__auto__;
var G__9124 = cljs.core.count(c__5548__auto__);
var G__9125 = (0);
seq__8890 = G__9122;
chunk__8891 = G__9123;
count__8892 = G__9124;
i__8893 = G__9125;
continue;
} else {
var vec__8908 = cljs.core.first(seq__8890__$1);
var fx_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8908,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8908,(1),null);
var fx_fn_9126 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fx_config,fx_key);
var fx_env_9127 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,new cljs.core.Keyword(null,"transact!","transact!",-822725810),((function (seq__8890,chunk__8891,count__8892,i__8893,fx_fn_9126,vec__8908,fx_key,value,seq__8890__$1,temp__5823__auto__,tx_guard,tx_done_ref,tx_env,tx_env__$1,handler_result,result,result__$1,map__8886,map__8886__$1,env,event_config,event_interceptors,fx_config,ev_id,handler){
return (function (fx_tx){
if(cljs.core.truth_(cljs.core.deref(tx_done_ref))){
} else {
throw (new Error("cannot start another tx yet, current one is still running. transact! is meant for async events",cljs.core.PersistentArrayMap.EMPTY));
}

return (shadow.grove.impl.process_event.cljs$core$IFn$_invoke$arity$4 ? shadow.grove.impl.process_event.cljs$core$IFn$_invoke$arity$4(rt_ref,fx_tx,null,origin) : shadow.grove.impl.process_event(rt_ref,fx_tx,null,origin));
});})(seq__8890,chunk__8891,count__8892,i__8893,fx_fn_9126,vec__8908,fx_key,value,seq__8890__$1,temp__5823__auto__,tx_guard,tx_done_ref,tx_env,tx_env__$1,handler_result,result,result__$1,map__8886,map__8886__$1,env,event_config,event_interceptors,fx_config,ev_id,handler))
);
if(cljs.core.not(fx_fn_9126)){
throw (new Error(["unknown fx ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fx_key)].join('')));
} else {
(fx_fn_9126.cljs$core$IFn$_invoke$arity$2 ? fx_fn_9126.cljs$core$IFn$_invoke$arity$2(fx_env_9127,value) : fx_fn_9126(fx_env_9127,value));
}


var G__9133 = cljs.core.next(seq__8890__$1);
var G__9134 = null;
var G__9135 = (0);
var G__9136 = (0);
seq__8890 = G__9133;
chunk__8891 = G__9134;
count__8892 = G__9135;
i__8893 = G__9136;
continue;
}
} else {
return null;
}
}
break;
}
}));

shadow.grove.impl.do_tx_report(result__$1);

cljs.core.reset_BANG_(tx_done_ref,true);

return new cljs.core.Keyword(null,"return","return",-1891502105).cljs$core$IFn$_invoke$arity$1(result__$1);
}catch (e8888){var e = e8888;
var event_error_handler = new cljs.core.Keyword("shadow.grove","event-error-handler","shadow.grove/event-error-handler",1371547629).cljs$core$IFn$_invoke$arity$1(env);
return (event_error_handler.cljs$core$IFn$_invoke$arity$4 ? event_error_handler.cljs$core$IFn$_invoke$arity$4(env,ev,origin,e) : event_error_handler(env,ev,origin,e));
}}
});
shadow.grove.impl.lazy_seq_QMARK_ = (function shadow$grove$impl$lazy_seq_QMARK_(thing){
return (((thing instanceof cljs.core.LazySeq)) && ((!(cljs.core.realized_QMARK_(thing)))));
});

/**
* @constructor
*/
shadow.grove.impl.Query = (function (query_id,query_key,rt_ref,subs,invalidated,read_keys,result){
this.query_id = query_id;
this.query_key = query_key;
this.rt_ref = rt_ref;
this.subs = subs;
this.invalidated = invalidated;
this.read_keys = read_keys;
this.result = result;
});
(shadow.grove.impl.Query.prototype.add_sub = (function (ref){
var self__ = this;
var this$ = this;
return self__.subs.add(ref);
}));

(shadow.grove.impl.Query.prototype.del_sub = (function (ref){
var self__ = this;
var this$ = this;
self__.subs.delete(ref);

if((self__.subs.size === (0))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.grove.impl.active_queries_ref,cljs.core.dissoc,self__.query_key);

shadow.grove.impl.unindex_query_keys(self__.query_id,self__.read_keys);

return shadow.grove.impl.active_queries_map.delete(self__.query_id);
} else {
return null;
}
}));

(shadow.grove.impl.Query.prototype.setup_BANG_ = (function (){
var self__ = this;
var this$ = this;
return shadow.grove.impl.active_queries_map.set(self__.query_id,(function (){
return this$.invalidate_BANG_();
}));
}));

(shadow.grove.impl.Query.prototype.invalidate_BANG_ = (function (){
var self__ = this;
var this$ = this;
(self__.invalidated = true);

return self__.subs.forEach((function (ref){
return ref.shadow$grove$protocols$IInvalidateSlot$invalidate_BANG_$arity$1(null);
}));
}));

(shadow.grove.impl.Query.prototype.run_BANG_ = (function (){
var self__ = this;
var this$ = this;
var kv_9145 = new cljs.core.Keyword("shadow.grove","kv","shadow.grove/kv",556503171).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.rt_ref));
var query_env_9146 = cljs.core._kv_reduce(kv_9145,(function (query_env_9146,kv_table,kv__$1){
return cljs.core._assoc(query_env_9146,kv_table,shadow.grove.kv.observed(kv__$1));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shadow.grove","runtime-ref","shadow.grove/runtime-ref",555646968),self__.rt_ref,new cljs.core.Keyword("shadow.grove","previous-result","shadow.grove/previous-result",844599257),self__.result], null));
var next_result_9147 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(self__.query_key.cljs$core$IIndexed$_nth$arity$2(null,(0)),query_env_9146,self__.query_key.cljs$core$IIndexed$_nth$arity$2(null,(1)));
var __9148 = ((shadow.grove.impl.lazy_seq_QMARK_(next_result_9147))?(function(){throw (new Error("query functions are not allowed to return lazy sequences!"))})():null);
var new_keys_9149 = cljs.core._kv_reduce(kv_9145,(function (key_set,kv_table,___$1){
var observed = query_env_9146.cljs$core$ILookup$_lookup$arity$2(null,kv_table);
var vec__8935 = observed.shadow$grove$kv$IObserved$observed_keys$arity$1(null);
var seq_used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8935,(0),null);
var kv_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8935,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3((function (){var G__8938 = key_set;
if(cljs.core.truth_(seq_used)){
return G__8938.cljs$core$ICollection$_conj$arity$2(null,kv_table);
} else {
return G__8938;
}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__8923_SHARP_){
return (new shadow.grove.impl.IndexKey(kv_table,p1__8923_SHARP_,null,null,null));
})),kv_keys);
}),cljs.core.PersistentHashSet.EMPTY);
shadow.grove.impl.index_query_keys(self__.query_id,self__.read_keys,new_keys_9149);

(self__.read_keys = new_keys_9149);

(self__.invalidated = false);

(self__.result = next_result_9147);

return undefined;
}));

(shadow.grove.impl.Query.prototype.get_result = (function (){
var self__ = this;
var this$ = this;
if(cljs.core.truth_(self__.invalidated)){
this$.run_BANG_();
} else {
}

return self__.result;
}));

(shadow.grove.impl.Query.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"query-id","query-id",-1180306927,null),cljs.core.with_meta(new cljs.core.Symbol(null,"query-key","query-key",-1881063798,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),new cljs.core.Symbol(null,"rt-ref","rt-ref",-878707630,null),new cljs.core.Symbol(null,"subs","subs",1453849536,null),cljs.core.with_meta(new cljs.core.Symbol(null,"invalidated","invalidated",1469865442,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"read-keys","read-keys",1110378906,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(shadow.grove.impl.Query.cljs$lang$type = true);

(shadow.grove.impl.Query.cljs$lang$ctorStr = "shadow.grove.impl/Query");

(shadow.grove.impl.Query.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.grove.impl/Query");
}));

/**
 * Positional factory function for shadow.grove.impl/Query.
 */
shadow.grove.impl.__GT_Query = (function shadow$grove$impl$__GT_Query(query_id,query_key,rt_ref,subs,invalidated,read_keys,result){
return (new shadow.grove.impl.Query(query_id,query_key,rt_ref,subs,invalidated,read_keys,result));
});

shadow.grove.impl.setup_query = (function shadow$grove$impl$setup_query(rt_ref,query_key){
var q = (new shadow.grove.impl.Query(shadow.grove.runtime.next_id(),query_key,rt_ref,(new Set()),true,null,null));
q.setup_BANG_();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.grove.impl.active_queries_ref,cljs.core.assoc,query_key,q);

return q;
});
shadow.grove.impl.get_query = (function shadow$grove$impl$get_query(rt_ref,read_fn,args){
var query_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [read_fn,args], null);
var or__5025__auto__ = cljs.core._lookup(cljs.core.deref(shadow.grove.impl.active_queries_ref),query_key);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return shadow.grove.impl.setup_query(rt_ref,query_key);
}
});
shadow.grove.impl.slot_query = (function shadow$grove$impl$slot_query(args,read_fn){
var ref = shadow.grove.runtime.claim_slot_BANG_(new cljs.core.Keyword("shadow.grove.impl","slot-query","shadow.grove.impl/slot-query",-882075727));
var rt_ref = new cljs.core.Keyword("shadow.grove","runtime-ref","shadow.grove/runtime-ref",555646968).cljs$core$IFn$_invoke$arity$1(shadow.grove.runtime._STAR_env_STAR_);
var query = shadow.grove.impl.get_query(rt_ref,read_fn,args);
if((cljs.core.deref(ref) == null)){
shadow.grove.components.set_cleanup_BANG_(ref,(function (query__$1){
return query__$1.del_sub(ref);
}));
} else {
}

if((query === cljs.core.deref(ref))){
} else {
var temp__5827__auto___9193 = cljs.core.deref(ref);
if((temp__5827__auto___9193 == null)){
} else {
var prev_query_9194 = temp__5827__auto___9193;
prev_query_9194.del_sub(ref);
}

query.add_sub(ref);

cljs.core.reset_BANG_(ref,query);
}

return query.get_result();
});
shadow.grove.impl.slot_kv_get = (function shadow$grove$impl$slot_kv_get(kv_table){
var ref = shadow.grove.runtime.claim_slot_BANG_(new cljs.core.Keyword("shadow.grove.impl","slot-kv-get","shadow.grove.impl/slot-kv-get",1540761511));
var rt_ref = new cljs.core.Keyword("shadow.grove","runtime-ref","shadow.grove/runtime-ref",555646968).cljs$core$IFn$_invoke$arity$1(shadow.grove.runtime._STAR_env_STAR_);
if((cljs.core.deref(ref) == null)){
shadow.grove.components.set_cleanup_BANG_(ref,(function (p__8964){
var map__8965 = p__8964;
var map__8965__$1 = cljs.core.__destructure_map(map__8965);
var last_state = map__8965__$1;
var query_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8965__$1,new cljs.core.Keyword(null,"query-id","query-id",1474128842));
var read_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8965__$1,new cljs.core.Keyword(null,"read-key","read-key",-510415417));
shadow.grove.impl.unindex_query_key(query_id,read_key);

return shadow.grove.impl.active_queries_map.delete(query_id);
}));

var query_id_9195 = shadow.grove.runtime.next_id();
ref.cljs$core$ISwap$_swap_BANG_$arity$4(null,cljs.core.assoc,new cljs.core.Keyword(null,"query-id","query-id",1474128842),query_id_9195);

shadow.grove.impl.active_queries_map.set(query_id_9195,(function (){
return ref.shadow$grove$protocols$IInvalidateSlot$invalidate_BANG_$arity$1(null);
}));
} else {
}

var all = new cljs.core.Keyword("shadow.grove","kv","shadow.grove/kv",556503171).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rt_ref));
var map__8967 = cljs.core.deref(ref);
var map__8967__$1 = cljs.core.__destructure_map(map__8967);
var query_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8967__$1,new cljs.core.Keyword(null,"query-id","query-id",1474128842));
var read_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8967__$1,new cljs.core.Keyword(null,"read-key","read-key",-510415417));
var kv = shadow.grove.kv.get_kv_BANG_(all,kv_table);
shadow.grove.impl.index_query_key(query_id,read_key,kv_table);

ref.cljs$core$ISwap$_swap_BANG_$arity$4(null,cljs.core.assoc,new cljs.core.Keyword(null,"read-key","read-key",-510415417),kv_table);

return kv;
});
shadow.grove.impl.slot_kv_lookup = (function shadow$grove$impl$slot_kv_lookup(kv_table,key){
var ref = shadow.grove.runtime.claim_slot_BANG_(new cljs.core.Keyword("shadow.grove.impl","slot-kv-lookup","shadow.grove.impl/slot-kv-lookup",-1981061890));
var rt_ref = new cljs.core.Keyword("shadow.grove","runtime-ref","shadow.grove/runtime-ref",555646968).cljs$core$IFn$_invoke$arity$1(shadow.grove.runtime._STAR_env_STAR_);
if((cljs.core.deref(ref) == null)){
shadow.grove.components.set_cleanup_BANG_(ref,(function (p__8971){
var map__8972 = p__8971;
var map__8972__$1 = cljs.core.__destructure_map(map__8972);
var last_state = map__8972__$1;
var query_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8972__$1,new cljs.core.Keyword(null,"query-id","query-id",1474128842));
var read_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8972__$1,new cljs.core.Keyword(null,"read-key","read-key",-510415417));
shadow.grove.impl.unindex_query_key(query_id,read_key);

return shadow.grove.impl.active_queries_map.delete(query_id);
}));

var query_id_9206 = shadow.grove.runtime.next_id();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ref,cljs.core.assoc,new cljs.core.Keyword(null,"query-id","query-id",1474128842),query_id_9206);

shadow.grove.impl.active_queries_map.set(query_id_9206,(function (){
return shadow.grove.protocols.invalidate_BANG_(ref);
}));
} else {
}

var all = new cljs.core.Keyword("shadow.grove","kv","shadow.grove/kv",556503171).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rt_ref));
var map__8976 = cljs.core.deref(ref);
var map__8976__$1 = cljs.core.__destructure_map(map__8976);
var query_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8976__$1,new cljs.core.Keyword(null,"query-id","query-id",1474128842));
var read_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8976__$1,new cljs.core.Keyword(null,"read-key","read-key",-510415417));
var kv = shadow.grove.kv.get_kv_BANG_(all,kv_table);
var new_key = (new shadow.grove.impl.IndexKey(kv_table,key,null,null,null));
shadow.grove.impl.index_query_key(query_id,read_key,new_key);

cljs.core._swap_BANG_(ref,cljs.core.assoc,new cljs.core.Keyword(null,"read-key","read-key",-510415417),new_key);

return cljs.core._lookup(kv,key);
});
shadow.grove.impl.slot_state = (function shadow$grove$impl$slot_state(init_state,merge_fn){
var ref = shadow.grove.runtime.claim_slot_BANG_(new cljs.core.Keyword("shadow.grove.impl","slot-state","shadow.grove.impl/slot-state",800114715));
var state = cljs.core.deref(ref);
if((state == null)){
ref.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(init_state,cljs.core.assoc,new cljs.core.Keyword("shadow.grove.impl","ref","shadow.grove.impl/ref",-1691369936),ref,new cljs.core.Keyword("shadow.grove.impl","init-state","shadow.grove.impl/init-state",-196548527),init_state));
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = merge_fn;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(init_state,new cljs.core.Keyword("shadow.grove.impl","init-state","shadow.grove.impl/init-state",-196548527).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(state)));
} else {
return and__5023__auto__;
}
})())){
ref.cljs$core$ISwap$_swap_BANG_$arity$2(null,(function (state__$1){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6((merge_fn.cljs$core$IFn$_invoke$arity$2 ? merge_fn.cljs$core$IFn$_invoke$arity$2(state__$1,init_state) : merge_fn(state__$1,init_state)),cljs.core.assoc,new cljs.core.Keyword("shadow.grove.impl","ref","shadow.grove.impl/ref",-1691369936),ref,new cljs.core.Keyword("shadow.grove.impl","init-state","shadow.grove.impl/init-state",-196548527),init_state);
}));
} else {
}
}

return cljs.core.deref(ref);
});

//# sourceMappingURL=shadow.grove.impl.js.map
