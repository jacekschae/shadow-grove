goog.provide('shadow.arborist.collections');

/**
* @constructor
*/
shadow.arborist.collections.KeyedItem = (function (key,data,managed,moved_QMARK_){
this.key = key;
this.data = data;
this.managed = managed;
this.moved_QMARK_ = moved_QMARK_;
});

(shadow.arborist.collections.KeyedItem.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"managed","managed",-1698536450,null),new cljs.core.Symbol(null,"moved?","moved?",-1762609207,null)], null);
}));

(shadow.arborist.collections.KeyedItem.cljs$lang$type = true);

(shadow.arborist.collections.KeyedItem.cljs$lang$ctorStr = "shadow.arborist.collections/KeyedItem");

(shadow.arborist.collections.KeyedItem.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.arborist.collections/KeyedItem");
}));

/**
 * Positional factory function for shadow.arborist.collections/KeyedItem.
 */
shadow.arborist.collections.__GT_KeyedItem = (function shadow$arborist$collections$__GT_KeyedItem(key,data,managed,moved_QMARK_){
return (new shadow.arborist.collections.KeyedItem(key,data,managed,moved_QMARK_));
});


/**
* @constructor
 * @implements {shadow.arborist.protocols.IManaged}
*/
shadow.arborist.collections.KeyedCollection = (function (env,coll,key_fn,render_fn,items,item_keys,marker_before,marker_after,dom_entered_QMARK_){
this.env = env;
this.coll = coll;
this.key_fn = key_fn;
this.render_fn = render_fn;
this.items = items;
this.item_keys = item_keys;
this.marker_before = marker_before;
this.marker_after = marker_after;
this.dom_entered_QMARK_ = dom_entered_QMARK_;
});
(shadow.arborist.collections.KeyedCollection.prototype.shadow$arborist$protocols$IManaged$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.arborist.collections.KeyedCollection.prototype.shadow$arborist$protocols$IManaged$dom_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.marker_before;
}));

(shadow.arborist.collections.KeyedCollection.prototype.shadow$arborist$protocols$IManaged$dom_insert$arity$3 = (function (this$,parent,anchor){
var self__ = this;
var this$__$1 = this;
parent.insertBefore(self__.marker_before,anchor);

self__.items.forEach((function (item){
return item.managed.shadow$arborist$protocols$IManaged$dom_insert$arity$3(null,parent,anchor);
}));

return parent.insertBefore(self__.marker_after,anchor);
}));

(shadow.arborist.collections.KeyedCollection.prototype.shadow$arborist$protocols$IManaged$dom_entered_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
(self__.dom_entered_QMARK_ = true);

return self__.items.forEach((function (item){
return item.managed.shadow$arborist$protocols$IManaged$dom_entered_BANG_$arity$1(null);
}));
}));

(shadow.arborist.collections.KeyedCollection.prototype.shadow$arborist$protocols$IManaged$supports_QMARK_$arity$2 = (function (this$,next){
var self__ = this;
var this$__$1 = this;
return (next instanceof shadow.arborist.collections.KeyedCollectionInit);
}));

(shadow.arborist.collections.KeyedCollection.prototype.shadow$arborist$protocols$IManaged$dom_sync_BANG_$arity$2 = (function (this$,next){
var self__ = this;
var this$__$1 = this;
var old_coll_8065 = self__.coll;
var new_coll_8066 = next.coll;
var dom_parent_8067 = self__.marker_after.parentNode;
var rfn_identical_QMARK__8068 = (self__.render_fn === next.render_fn);
if(dom_parent_8067){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("sync while not in dom?",cljs.core.PersistentArrayMap.EMPTY);
}

if(((rfn_identical_QMARK__8068) && ((old_coll_8065 === new_coll_8066)))){
} else {
(self__.coll = new_coll_8066);

(self__.key_fn = next.key_fn);

(self__.render_fn = next.render_fn);

var kfn_8075 = shadow.arborist.common.ifn1_wrap(self__.key_fn);
var rfn_8076 = shadow.arborist.common.ifn3_wrap(self__.render_fn);
var new_len_8077 = new_coll_8066.cljs$core$ICounted$_count$arity$1(null);
var old_items_8078 = self__.items;
var new_items_8079 = (new Array(new_len_8077));
var new_keys_8080 = cljs.core._persistent_BANG_(cljs.core.reduce_kv((function (keys,idx,val){
var key = kfn_8075(val);
var item = (new shadow.arborist.collections.KeyedItem(key,val,null,false));
(new_items_8079[idx] = item);

return keys.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(null,key,item);
}),cljs.core._as_transient(cljs.core.PersistentArrayMap.EMPTY),new_coll_8066));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_keys_8080.cljs$core$ICounted$_count$arity$1(null),new_len_8077)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("collection contains duplicated keys",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"coll","coll",1647737163),new_coll_8066,new cljs.core.Keyword(null,"keys","keys",1068423698),new_keys_8080], null));
} else {
}

var old_items_8088__$1 = old_items_8078.filter((function (item){
if(cljs.core.contains_QMARK_(new_keys_8080,item.key)){
return true;
} else {
item.managed.shadow$arborist$protocols$IManaged$destroy_BANG_$arity$2(null,true);

return false;
}
}));
var anchor_8089 = self__.marker_after;
var idx_8090 = (new_len_8077 - (1));
var old_idx_8091 = (old_items_8088__$1.length - (1));
while(true){
if((idx_8090 < (0))){
} else {
var new_item_8092 = (new_items_8079[idx_8090]);
var old_item_8093 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.item_keys,new_item_8092.key);
if(cljs.core.not(old_item_8093)){
var rendered_8097 = rfn_8076(new_item_8092.data,idx_8090,new_item_8092.key);
var managed_8098 = shadow.arborist.protocols.as_managed(rendered_8097,self__.env);
managed_8098.shadow$arborist$protocols$IManaged$dom_insert$arity$3(null,dom_parent_8067,anchor_8089);

if(self__.dom_entered_QMARK_){
managed_8098.shadow$arborist$protocols$IManaged$dom_entered_BANG_$arity$1(null);
} else {
}

(new_item_8092.managed = managed_8098);

var G__8103 = managed_8098.shadow$arborist$protocols$IManaged$dom_first$arity$1(null);
var G__8105 = (idx_8090 - (1));
var G__8106 = old_idx_8091;
anchor_8089 = G__8103;
idx_8090 = G__8105;
old_idx_8091 = G__8106;
continue;
} else {
if((old_item_8093 === (old_items_8088__$1[old_idx_8091]))){
var managed_8109 = old_item_8093.managed;
if(((rfn_identical_QMARK__8068) && ((old_item_8093.data === new_item_8092.data)))){
(new_item_8092.managed = managed_8109);

if(old_item_8093.moved_QMARK_){
managed_8109.shadow$arborist$protocols$IManaged$dom_insert$arity$3(null,dom_parent_8067,anchor_8089);
} else {
}

var G__8110 = managed_8109.shadow$arborist$protocols$IManaged$dom_first$arity$1(null);
var G__8111 = (idx_8090 - (1));
var G__8112 = (old_idx_8091 - (1));
anchor_8089 = G__8110;
idx_8090 = G__8111;
old_idx_8091 = G__8112;
continue;
} else {
var rendered_8113 = rfn_8076(new_item_8092.data,idx_8090,new_item_8092.key);
if(managed_8109.shadow$arborist$protocols$IManaged$supports_QMARK_$arity$2(null,rendered_8113)){
managed_8109.shadow$arborist$protocols$IManaged$dom_sync_BANG_$arity$2(null,rendered_8113);

(new_item_8092.managed = managed_8109);

if(old_item_8093.moved_QMARK_){
managed_8109.shadow$arborist$protocols$IManaged$dom_insert$arity$3(null,dom_parent_8067,anchor_8089);
} else {
}

var G__8114 = managed_8109.shadow$arborist$protocols$IManaged$dom_first$arity$1(null);
var G__8115 = (idx_8090 - (1));
var G__8116 = (old_idx_8091 - (1));
anchor_8089 = G__8114;
idx_8090 = G__8115;
old_idx_8091 = G__8116;
continue;
} else {
var new_managed_8117 = shadow.arborist.protocols.as_managed(rendered_8113,self__.env);
new_managed_8117.shadow$arborist$protocols$IManaged$dom_insert$arity$3(null,dom_parent_8067,anchor_8089);

if(self__.dom_entered_QMARK_){
new_managed_8117.shadow$arborist$protocols$IManaged$dom_entered_BANG_$arity$1(null);
} else {
}

managed_8109.shadow$arborist$protocols$IManaged$destroy_BANG_$arity$2(null,true);

(new_item_8092.managed = new_managed_8117);

var G__8118 = new_managed_8117.shadow$arborist$protocols$IManaged$dom_first$arity$1(null);
var G__8119 = (idx_8090 - (1));
var G__8120 = (old_idx_8091 - (1));
anchor_8089 = G__8118;
idx_8090 = G__8119;
old_idx_8091 = G__8120;
continue;
}
}
} else {
var seek_idx_8121 = old_items_8088__$1.indexOf(old_item_8093);
var old_item_8122__$1 = (old_items_8088__$1[seek_idx_8121]);
var managed_8123 = old_item_8122__$1.managed;
var item_at_idx_8124 = (old_items_8088__$1[old_idx_8091]);
(item_at_idx_8124.moved_QMARK_ = true);

(old_items_8088__$1[seek_idx_8121] = item_at_idx_8124);

(old_items_8088__$1[old_idx_8091] = old_item_8122__$1);

if(((rfn_identical_QMARK__8068) && ((new_item_8092.data === old_item_8122__$1.data)))){
(new_item_8092.managed = managed_8123);

managed_8123.shadow$arborist$protocols$IManaged$dom_insert$arity$3(null,dom_parent_8067,anchor_8089);

var G__8125 = managed_8123.shadow$arborist$protocols$IManaged$dom_first$arity$1(null);
var G__8126 = (idx_8090 - (1));
var G__8127 = (old_idx_8091 - (1));
anchor_8089 = G__8125;
idx_8090 = G__8126;
old_idx_8091 = G__8127;
continue;
} else {
var rendered_8128 = rfn_8076(new_item_8092.data,idx_8090,new_item_8092.key);
if(managed_8123.shadow$arborist$protocols$IManaged$supports_QMARK_$arity$2(null,rendered_8128)){
(new_item_8092.managed = managed_8123);

managed_8123.shadow$arborist$protocols$IManaged$dom_sync_BANG_$arity$2(null,rendered_8128);

managed_8123.shadow$arborist$protocols$IManaged$dom_insert$arity$3(null,dom_parent_8067,anchor_8089);

var G__8129 = managed_8123.shadow$arborist$protocols$IManaged$dom_first$arity$1(null);
var G__8130 = (idx_8090 - (1));
var G__8131 = (old_idx_8091 - (1));
anchor_8089 = G__8129;
idx_8090 = G__8130;
old_idx_8091 = G__8131;
continue;
} else {
var new_managed_8132 = shadow.arborist.protocols.as_managed(rendered_8128,self__.env);
(new_item_8092.managed = new_managed_8132);

new_managed_8132.shadow$arborist$protocols$IManaged$dom_insert$arity$3(null,dom_parent_8067,anchor_8089);

if(self__.dom_entered_QMARK_){
new_managed_8132.shadow$arborist$protocols$IManaged$dom_entered_BANG_$arity$1(null);
} else {
}

managed_8123.shadow$arborist$protocols$IManaged$destroy_BANG_$arity$2(null,true);

var G__8133 = new_managed_8132.shadow$arborist$protocols$IManaged$dom_first$arity$1(null);
var G__8134 = (idx_8090 - (1));
var G__8135 = (old_idx_8091 - (1));
anchor_8089 = G__8133;
idx_8090 = G__8134;
old_idx_8091 = G__8135;
continue;
}
}

}
}
}
break;
}

(self__.item_keys = new_keys_8080);

(self__.items = new_items_8079);
}

return new cljs.core.Keyword(null,"synced","synced",-1518561120);
}));

(shadow.arborist.collections.KeyedCollection.prototype.shadow$arborist$protocols$IManaged$destroy_BANG_$arity$2 = (function (this$,dom_remove_QMARK_){
var self__ = this;
var this$__$1 = this;
if(dom_remove_QMARK_){
var G__7939_8136 = document.createRange();
G__7939_8136.setStartBefore(self__.marker_before);

G__7939_8136.setEndAfter(self__.marker_after);

G__7939_8136.deleteContents();

} else {
}

return self__.items.forEach((function (item){
return item.managed.shadow$arborist$protocols$IManaged$destroy_BANG_$arity$2(null,false);
}));
}));

(shadow.arborist.collections.KeyedCollection.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"env","env",-175281708,null),cljs.core.with_meta(new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"key-fn","key-fn",1004377048,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"render-fn","render-fn",2039328045,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"items","items",-1622480831,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"item-keys","item-keys",1023598268,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"marker-before","marker-before",-198173470,null),new cljs.core.Symbol(null,"marker-after","marker-after",-602144151,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dom-entered?","dom-entered?",962657078,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null))], null);
}));

(shadow.arborist.collections.KeyedCollection.cljs$lang$type = true);

(shadow.arborist.collections.KeyedCollection.cljs$lang$ctorStr = "shadow.arborist.collections/KeyedCollection");

(shadow.arborist.collections.KeyedCollection.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.arborist.collections/KeyedCollection");
}));

/**
 * Positional factory function for shadow.arborist.collections/KeyedCollection.
 */
shadow.arborist.collections.__GT_KeyedCollection = (function shadow$arborist$collections$__GT_KeyedCollection(env,coll,key_fn,render_fn,items,item_keys,marker_before,marker_after,dom_entered_QMARK_){
return (new shadow.arborist.collections.KeyedCollection(env,coll,key_fn,render_fn,items,item_keys,marker_before,marker_after,dom_entered_QMARK_));
});

shadow.arborist.collections.construct_keyed_seq = (function shadow$arborist$collections$construct_keyed_seq(env,coll,key_fn,render_fn){
var len = cljs.core.count(coll);
var marker_before = shadow.arborist.common.dom_marker.cljs$core$IFn$_invoke$arity$2(env,"keyed-seq-start");
var marker_after = shadow.arborist.common.dom_marker.cljs$core$IFn$_invoke$arity$2(env,"keyed-seq-end");
var kfn = shadow.arborist.common.ifn1_wrap(key_fn);
var rfn = shadow.arborist.common.ifn3_wrap(render_fn);
var items = (new Array(len));
var keys = cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (keys,idx,val){
var key = (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(val) : kfn(val));
var rendered = (rfn.cljs$core$IFn$_invoke$arity$3 ? rfn.cljs$core$IFn$_invoke$arity$3(val,idx,key) : rfn(val,idx,key));
var managed = shadow.arborist.protocols.as_managed(rendered,env);
var item = (new shadow.arborist.collections.KeyedItem(key,val,managed,false));
(items[idx] = item);

return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(keys,key,item);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(keys),len)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("collection contains duplicated keys",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return (new shadow.arborist.collections.KeyedCollection(env,coll,key_fn,render_fn,items,keys,marker_before,marker_after,false));
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {shadow.arborist.protocols.IConstruct}
*/
shadow.arborist.collections.KeyedCollectionInit = (function (coll,key_fn,render_fn){
this.coll = coll;
this.key_fn = key_fn;
this.render_fn = render_fn;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.arborist.collections.KeyedCollectionInit.prototype.shadow$arborist$protocols$IConstruct$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.arborist.collections.KeyedCollectionInit.prototype.shadow$arborist$protocols$IConstruct$as_managed$arity$2 = (function (this$,env){
var self__ = this;
var this$__$1 = this;
return shadow.arborist.collections.construct_keyed_seq(env,self__.coll,self__.key_fn,self__.render_fn);
}));

(shadow.arborist.collections.KeyedCollectionInit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof shadow.arborist.collections.KeyedCollectionInit)) && (((cljs.core.keyword_identical_QMARK_(self__.key_fn,other.key_fn)) && ((((self__.render_fn === other.render_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.coll,other.coll)))))));
}));

(shadow.arborist.collections.KeyedCollectionInit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"key-fn","key-fn",1004377048,null),new cljs.core.Symbol(null,"render-fn","render-fn",2039328045,null)], null);
}));

(shadow.arborist.collections.KeyedCollectionInit.cljs$lang$type = true);

(shadow.arborist.collections.KeyedCollectionInit.cljs$lang$ctorStr = "shadow.arborist.collections/KeyedCollectionInit");

(shadow.arborist.collections.KeyedCollectionInit.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.arborist.collections/KeyedCollectionInit");
}));

/**
 * Positional factory function for shadow.arborist.collections/KeyedCollectionInit.
 */
shadow.arborist.collections.__GT_KeyedCollectionInit = (function shadow$arborist$collections$__GT_KeyedCollectionInit(coll,key_fn,render_fn){
return (new shadow.arborist.collections.KeyedCollectionInit(coll,key_fn,render_fn));
});

shadow.arborist.collections.keyed_seq = (function shadow$arborist$collections$keyed_seq(coll,key_fn,render_fn){
if((((coll == null)) || (cljs.core.sequential_QMARK_(coll)))){
} else {
throw (new Error("Assert failed: (or (nil? coll) (sequential? coll))"));
}

if(cljs.core.ifn_QMARK_(key_fn)){
} else {
throw (new Error("Assert failed: (ifn? key-fn)"));
}

if(cljs.core.ifn_QMARK_(render_fn)){
} else {
throw (new Error("Assert failed: (ifn? render-fn)"));
}

if(cljs.core.empty_QMARK_(coll)){
return null;
} else {
return (new shadow.arborist.collections.KeyedCollectionInit(cljs.core.vec(coll),key_fn,render_fn));
}
});

/**
* @constructor
*/
shadow.arborist.collections.SimpleItem = (function (data,managed){
this.data = data;
this.managed = managed;
});

(shadow.arborist.collections.SimpleItem.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"managed","managed",-1698536450,null)], null);
}));

(shadow.arborist.collections.SimpleItem.cljs$lang$type = true);

(shadow.arborist.collections.SimpleItem.cljs$lang$ctorStr = "shadow.arborist.collections/SimpleItem");

(shadow.arborist.collections.SimpleItem.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.arborist.collections/SimpleItem");
}));

/**
 * Positional factory function for shadow.arborist.collections/SimpleItem.
 */
shadow.arborist.collections.__GT_SimpleItem = (function shadow$arborist$collections$__GT_SimpleItem(data,managed){
return (new shadow.arborist.collections.SimpleItem(data,managed));
});


/**
* @constructor
 * @implements {shadow.arborist.protocols.IManaged}
*/
shadow.arborist.collections.SimpleCollection = (function (env,coll,render_fn,items,marker_before,marker_after,dom_entered_QMARK_){
this.env = env;
this.coll = coll;
this.render_fn = render_fn;
this.items = items;
this.marker_before = marker_before;
this.marker_after = marker_after;
this.dom_entered_QMARK_ = dom_entered_QMARK_;
});
(shadow.arborist.collections.SimpleCollection.prototype.shadow$arborist$protocols$IManaged$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.arborist.collections.SimpleCollection.prototype.shadow$arborist$protocols$IManaged$dom_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.marker_before;
}));

(shadow.arborist.collections.SimpleCollection.prototype.shadow$arborist$protocols$IManaged$dom_insert$arity$3 = (function (this$,parent,anchor){
var self__ = this;
var this$__$1 = this;
parent.insertBefore(self__.marker_before,anchor);

self__.items.forEach((function (item){
return item.managed.shadow$arborist$protocols$IManaged$dom_insert$arity$3(null,parent,anchor);
}));

return parent.insertBefore(self__.marker_after,anchor);
}));

(shadow.arborist.collections.SimpleCollection.prototype.shadow$arborist$protocols$IManaged$dom_entered_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
(self__.dom_entered_QMARK_ = true);

return self__.items.forEach((function (item){
return item.managed.shadow$arborist$protocols$IManaged$dom_entered_BANG_$arity$1(null);
}));
}));

(shadow.arborist.collections.SimpleCollection.prototype.shadow$arborist$protocols$IManaged$supports_QMARK_$arity$2 = (function (this$,next){
var self__ = this;
var this$__$1 = this;
return (next instanceof shadow.arborist.collections.SimpleCollectionInit);
}));

(shadow.arborist.collections.SimpleCollection.prototype.shadow$arborist$protocols$IManaged$dom_sync_BANG_$arity$2 = (function (this$,next){
var self__ = this;
var this$__$1 = this;
var rfn_identical_QMARK__8143 = (self__.render_fn === next.render_fn);
var old_coll_8144 = self__.coll;
var new_coll_8145 = next.coll;
if(((rfn_identical_QMARK__8143) && ((old_coll_8144 === new_coll_8145)))){
} else {
var dom_parent_8146 = self__.marker_after.parentNode;
var oc_8147 = old_coll_8144.cljs$core$ICounted$_count$arity$1(null);
var nc_8148 = new_coll_8145.cljs$core$ICounted$_count$arity$1(null);
var max_idx_8149 = Math.min(oc_8147,nc_8148);
if(cljs.core.truth_(dom_parent_8146)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("sync while not in dom?",cljs.core.PersistentArrayMap.EMPTY);
}

(self__.coll = new_coll_8145);

(self__.render_fn = next.render_fn);

var rfn_8150 = shadow.arborist.common.ifn2_wrap(self__.render_fn);
var n__5616__auto___8151 = max_idx_8149;
var idx_8152 = (0);
while(true){
if((idx_8152 < n__5616__auto___8151)){
var item_8153 = (self__.items[idx_8152]);
var managed_8154 = item_8153.managed;
var new_data_8155 = new_coll_8145.cljs$core$IIndexed$_nth$arity$2(null,idx_8152);
if(((rfn_identical_QMARK__8143) && ((new_data_8155 === item_8153.data)))){
} else {
var new_rendered_8156 = rfn_8150(new_data_8155,idx_8152);
(item_8153.data = new_data_8155);

if(managed_8154.shadow$arborist$protocols$IManaged$supports_QMARK_$arity$2(null,new_rendered_8156)){
managed_8154.shadow$arborist$protocols$IManaged$dom_sync_BANG_$arity$2(null,new_rendered_8156);
} else {
var new_managed_8157 = shadow.arborist.common.replace_managed(self__.env,managed_8154,new_rendered_8156);
if(self__.dom_entered_QMARK_){
shadow.arborist.protocols.dom_entered_BANG_(new_managed_8157);
} else {
}

(item_8153.managed = new_managed_8157);
}
}

var G__8158 = (idx_8152 + (1));
idx_8152 = G__8158;
continue;
} else {
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oc_8147,nc_8148)){
} else {
if((oc_8147 > nc_8148)){
var n__5616__auto___8161 = (oc_8147 - nc_8148);
var idx_8162 = (0);
while(true){
if((idx_8162 < n__5616__auto___8161)){
var idx_8165__$1 = (max_idx_8149 + idx_8162);
var item_8166 = (self__.items[idx_8165__$1]);
item_8166.managed.shadow$arborist$protocols$IManaged$destroy_BANG_$arity$2(null,true);

var G__8169 = (idx_8162 + (1));
idx_8162 = G__8169;
continue;
} else {
}
break;
}

(self__.items.length = max_idx_8149);
} else {
if((oc_8147 < nc_8148)){
var n__5616__auto___8171 = (nc_8148 - oc_8147);
var idx_8172 = (0);
while(true){
if((idx_8172 < n__5616__auto___8171)){
var idx_8173__$1 = (max_idx_8149 + idx_8172);
var data_8174 = new_coll_8145.cljs$core$IIndexed$_nth$arity$2(null,idx_8173__$1);
var rendered_8175 = rfn_8150(data_8174,idx_8173__$1);
var managed_8176 = shadow.arborist.protocols.as_managed(rendered_8175,self__.env);
self__.items.push((new shadow.arborist.collections.SimpleItem(data_8174,managed_8176)));

shadow.arborist.protocols.dom_insert(managed_8176,dom_parent_8146,self__.marker_after);

if(self__.dom_entered_QMARK_){
shadow.arborist.protocols.dom_entered_BANG_(managed_8176);
} else {
}

var G__8177 = (idx_8172 + (1));
idx_8172 = G__8177;
continue;
} else {
}
break;
}
} else {
}
}
}
}

return new cljs.core.Keyword(null,"synced","synced",-1518561120);
}));

(shadow.arborist.collections.SimpleCollection.prototype.shadow$arborist$protocols$IManaged$destroy_BANG_$arity$2 = (function (this$,dom_remove_QMARK_){
var self__ = this;
var this$__$1 = this;
if(dom_remove_QMARK_){
var G__8029_8180 = document.createRange();
G__8029_8180.setStartBefore(self__.marker_before);

G__8029_8180.setEndAfter(self__.marker_after);

G__8029_8180.deleteContents();

} else {
}

return self__.items.forEach((function (item){
return item.managed.shadow$arborist$protocols$IManaged$destroy_BANG_$arity$2(null,false);
}));
}));

(shadow.arborist.collections.SimpleCollection.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"env","env",-175281708,null),cljs.core.with_meta(new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"render-fn","render-fn",2039328045,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"items","items",-1622480831,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"marker-before","marker-before",-198173470,null),new cljs.core.Symbol(null,"marker-after","marker-after",-602144151,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dom-entered?","dom-entered?",962657078,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null))], null);
}));

(shadow.arborist.collections.SimpleCollection.cljs$lang$type = true);

(shadow.arborist.collections.SimpleCollection.cljs$lang$ctorStr = "shadow.arborist.collections/SimpleCollection");

(shadow.arborist.collections.SimpleCollection.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.arborist.collections/SimpleCollection");
}));

/**
 * Positional factory function for shadow.arborist.collections/SimpleCollection.
 */
shadow.arborist.collections.__GT_SimpleCollection = (function shadow$arborist$collections$__GT_SimpleCollection(env,coll,render_fn,items,marker_before,marker_after,dom_entered_QMARK_){
return (new shadow.arborist.collections.SimpleCollection(env,coll,render_fn,items,marker_before,marker_after,dom_entered_QMARK_));
});

shadow.arborist.collections.construct_simple_seq = (function shadow$arborist$collections$construct_simple_seq(env,coll,render_fn){
var marker_before = shadow.arborist.common.dom_marker.cljs$core$IFn$_invoke$arity$2(env,"simple-seq-start");
var marker_after = shadow.arborist.common.dom_marker.cljs$core$IFn$_invoke$arity$2(env,"simple-seq-end");
var arr = (new Array(cljs.core.count(coll)));
var rfn = shadow.arborist.common.ifn2_wrap(render_fn);
cljs.core.reduce_kv((function (_,idx,data){
return (arr[idx] = (new shadow.arborist.collections.SimpleItem(data,shadow.arborist.protocols.as_managed((rfn.cljs$core$IFn$_invoke$arity$2 ? rfn.cljs$core$IFn$_invoke$arity$2(data,idx) : rfn(data,idx)),env))));
}),null,coll);

return (new shadow.arborist.collections.SimpleCollection(env,coll,render_fn,arr,marker_before,marker_after,false));
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {shadow.arborist.protocols.IConstruct}
*/
shadow.arborist.collections.SimpleCollectionInit = (function (coll,render_fn){
this.coll = coll;
this.render_fn = render_fn;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.arborist.collections.SimpleCollectionInit.prototype.shadow$arborist$protocols$IConstruct$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.arborist.collections.SimpleCollectionInit.prototype.shadow$arborist$protocols$IConstruct$as_managed$arity$2 = (function (this$,env){
var self__ = this;
var this$__$1 = this;
return shadow.arborist.collections.construct_simple_seq(env,self__.coll,self__.render_fn);
}));

(shadow.arborist.collections.SimpleCollectionInit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof shadow.arborist.collections.SimpleCollectionInit)) && ((((self__.render_fn === other.render_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.coll,other.coll)))));
}));

(shadow.arborist.collections.SimpleCollectionInit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"render-fn","render-fn",2039328045,null)], null);
}));

(shadow.arborist.collections.SimpleCollectionInit.cljs$lang$type = true);

(shadow.arborist.collections.SimpleCollectionInit.cljs$lang$ctorStr = "shadow.arborist.collections/SimpleCollectionInit");

(shadow.arborist.collections.SimpleCollectionInit.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.arborist.collections/SimpleCollectionInit");
}));

/**
 * Positional factory function for shadow.arborist.collections/SimpleCollectionInit.
 */
shadow.arborist.collections.__GT_SimpleCollectionInit = (function shadow$arborist$collections$__GT_SimpleCollectionInit(coll,render_fn){
return (new shadow.arborist.collections.SimpleCollectionInit(coll,render_fn));
});

shadow.arborist.collections.simple_seq = (function shadow$arborist$collections$simple_seq(coll,render_fn){
if((((coll == null)) || (cljs.core.sequential_QMARK_(coll)))){
} else {
throw (new Error("Assert failed: (or (nil? coll) (sequential? coll))"));
}

if(cljs.core.ifn_QMARK_(render_fn)){
} else {
throw (new Error("Assert failed: (ifn? render-fn)"));
}

if(cljs.core.empty_QMARK_(coll)){
return null;
} else {
return (new shadow.arborist.collections.SimpleCollectionInit(cljs.core.vec(coll),render_fn));
}
});

//# sourceMappingURL=shadow.arborist.collections.js.map
