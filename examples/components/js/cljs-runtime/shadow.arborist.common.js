goog.provide('shadow.arborist.common');
shadow.arborist.common.ifn1_wrap = (function shadow$arborist$common$ifn1_wrap(x){
if(x.cljs$core$IFn$_invoke$arity$1){
return (function (a){
return x.cljs$core$IFn$_invoke$arity$1(a);
});
} else {
return x;
}
});
shadow.arborist.common.ifn2_wrap = (function shadow$arborist$common$ifn2_wrap(x){
if(x.cljs$core$IFn$_invoke$arity$2){
return (function (a,b,c){
return x.cljs$core$IFn$_invoke$arity$2(a,b);
});
} else {
return x;
}
});
shadow.arborist.common.ifn3_wrap = (function shadow$arborist$common$ifn3_wrap(x){
if(x.cljs$core$IFn$_invoke$arity$3){
return (function (a,b,c){
return x.cljs$core$IFn$_invoke$arity$3(a,b,c);
});
} else {
return x;
}
});
shadow.arborist.common.dom_marker = (function shadow$arborist$common$dom_marker(var_args){
var G__7784 = arguments.length;
switch (G__7784) {
case 1:
return shadow.arborist.common.dom_marker.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.arborist.common.dom_marker.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.arborist.common.dom_marker.cljs$core$IFn$_invoke$arity$1 = (function (env){
return document.createTextNode("");
}));

(shadow.arborist.common.dom_marker.cljs$core$IFn$_invoke$arity$2 = (function (env,label){
if(goog.DEBUG){
return document.createComment(label);
} else {
return document.createTextNode("");
}
}));

(shadow.arborist.common.dom_marker.cljs$lang$maxFixedArity = 2);

shadow.arborist.common.in_document_QMARK_ = (function shadow$arborist$common$in_document_QMARK_(el){
return goog.dom.isInDocument(el);
});
shadow.arborist.common.fragment_replace = (function shadow$arborist$common$fragment_replace(old_managed,new_managed){
var first_node = shadow.arborist.protocols.dom_first(old_managed);
var _ = (((!((first_node == null))))?null:(function(){throw (new Error(["Assert failed: ","fragment replacing a node that isn't in the DOM","\n","(some? first-node)"].join('')))})());
var parent = first_node.parentNode;
shadow.arborist.protocols.dom_insert(new_managed,parent,first_node);

shadow.arborist.protocols.destroy_BANG_(old_managed,true);

return new_managed;
});
shadow.arborist.common.replace_managed = (function shadow$arborist$common$replace_managed(env,old,nval){
var new$ = shadow.arborist.protocols.as_managed(nval,env);
return shadow.arborist.common.fragment_replace(old,new$);
});

/**
* @constructor
 * @implements {shadow.arborist.protocols.IDirectUpdate}
 * @implements {shadow.arborist.protocols.IManaged}
*/
shadow.arborist.common.ManagedRoot = (function (env,dom_entered_QMARK_,marker,node,val){
this.env = env;
this.dom_entered_QMARK_ = dom_entered_QMARK_;
this.marker = marker;
this.node = node;
this.val = val;
});
(shadow.arborist.common.ManagedRoot.prototype.shadow$arborist$protocols$IManaged$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.arborist.common.ManagedRoot.prototype.shadow$arborist$protocols$IManaged$dom_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.marker;
}));

(shadow.arborist.common.ManagedRoot.prototype.shadow$arborist$protocols$IManaged$dom_insert$arity$3 = (function (this$,parent,anchor){
var self__ = this;
var this$__$1 = this;
parent.insertBefore(self__.marker,anchor);

if(cljs.core.truth_(self__.node)){
return self__.node.shadow$arborist$protocols$IManaged$dom_insert$arity$3(null,parent,anchor);
} else {
return null;
}
}));

(shadow.arborist.common.ManagedRoot.prototype.shadow$arborist$protocols$IManaged$dom_entered_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
(self__.dom_entered_QMARK_ = true);

if(cljs.core.truth_(self__.node)){
return self__.node.shadow$arborist$protocols$IManaged$dom_entered_BANG_$arity$1(null);
} else {
return null;
}
}));

(shadow.arborist.common.ManagedRoot.prototype.shadow$arborist$protocols$IManaged$supports_QMARK_$arity$2 = (function (this$,next){
var self__ = this;
var this$__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid use, don't sync roots?",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"this","this",-611633625),this$__$1,new cljs.core.Keyword(null,"next","next",-117701485),next], null));
}));

(shadow.arborist.common.ManagedRoot.prototype.shadow$arborist$protocols$IManaged$dom_sync_BANG_$arity$2 = (function (this$,next){
var self__ = this;
var this$__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid use, don't sync roots?",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"this","this",-611633625),this$__$1,new cljs.core.Keyword(null,"next","next",-117701485),next], null));
}));

(shadow.arborist.common.ManagedRoot.prototype.shadow$arborist$protocols$IManaged$destroy_BANG_$arity$2 = (function (this$,dom_remove_QMARK_){
var self__ = this;
var this$__$1 = this;
if(dom_remove_QMARK_){
self__.marker.remove();
} else {
}

if(cljs.core.truth_(self__.node)){
return self__.node.shadow$arborist$protocols$IManaged$destroy_BANG_$arity$2(null,dom_remove_QMARK_);
} else {
return null;
}
}));

(shadow.arborist.common.ManagedRoot.prototype.shadow$arborist$protocols$IDirectUpdate$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.arborist.common.ManagedRoot.prototype.shadow$arborist$protocols$IDirectUpdate$update_BANG_$arity$2 = (function (this$,next){
var self__ = this;
var this$__$1 = this;
(self__.val = next);

var t_7906 = shadow.grove.trace.render_direct();
if(cljs.core.not(self__.node)){
var el_7907 = shadow.arborist.protocols.as_managed(self__.val,self__.env);
(self__.node = el_7907);

var temp__5827__auto___7908 = self__.marker.parentElement;
if((temp__5827__auto___7908 == null)){
} else {
var parent_7910 = temp__5827__auto___7908;
self__.node.shadow$arborist$protocols$IManaged$dom_insert$arity$3(null,parent_7910,self__.marker.nextSibling);

if(self__.dom_entered_QMARK_){
self__.node.shadow$arborist$protocols$IManaged$dom_entered_BANG_$arity$1(null);
} else {
}
}
} else {
if(self__.node.shadow$arborist$protocols$IManaged$supports_QMARK_$arity$2(null,next)){
self__.node.shadow$arborist$protocols$IManaged$dom_sync_BANG_$arity$2(null,next);
} else {
var new_7912 = shadow.arborist.common.replace_managed(self__.env,self__.node,next);
(self__.node = new_7912);

if(self__.dom_entered_QMARK_){
shadow.arborist.protocols.dom_entered_BANG_(new_7912);
} else {
}

}
}

shadow.grove.trace.render_direct_done(t_7906);

return undefined;
}));

(shadow.arborist.common.ManagedRoot.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"env","env",-175281708,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dom-entered?","dom-entered?",962657078,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"marker","marker",-1789317456,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"node","node",-2073234571,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(shadow.arborist.common.ManagedRoot.cljs$lang$type = true);

(shadow.arborist.common.ManagedRoot.cljs$lang$ctorStr = "shadow.arborist.common/ManagedRoot");

(shadow.arborist.common.ManagedRoot.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.arborist.common/ManagedRoot");
}));

/**
 * Positional factory function for shadow.arborist.common/ManagedRoot.
 */
shadow.arborist.common.__GT_ManagedRoot = (function shadow$arborist$common$__GT_ManagedRoot(env,dom_entered_QMARK_,marker,node,val){
return (new shadow.arborist.common.ManagedRoot(env,dom_entered_QMARK_,marker,node,val));
});

shadow.arborist.common.managed_root = (function shadow$arborist$common$managed_root(env){
return (new shadow.arborist.common.ManagedRoot(env,false,shadow.arborist.common.dom_marker.cljs$core$IFn$_invoke$arity$1(env),null,null));
});

/**
* @constructor
 * @implements {shadow.arborist.protocols.IManaged}
*/
shadow.arborist.common.ManagedText = (function (env,val,node){
this.env = env;
this.val = val;
this.node = node;
});
(shadow.arborist.common.ManagedText.prototype.shadow$arborist$protocols$IManaged$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.arborist.common.ManagedText.prototype.shadow$arborist$protocols$IManaged$dom_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.node;
}));

(shadow.arborist.common.ManagedText.prototype.shadow$arborist$protocols$IManaged$dom_insert$arity$3 = (function (this$,parent,anchor){
var self__ = this;
var this$__$1 = this;
return parent.insertBefore(self__.node,anchor);
}));

(shadow.arborist.common.ManagedText.prototype.shadow$arborist$protocols$IManaged$dom_entered_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
}));

(shadow.arborist.common.ManagedText.prototype.shadow$arborist$protocols$IManaged$supports_QMARK_$arity$2 = (function (this$,next){
var self__ = this;
var this$__$1 = this;
return ((typeof next === 'string') || (((typeof next === 'number') || ((next == null)))));
}));

(shadow.arborist.common.ManagedText.prototype.shadow$arborist$protocols$IManaged$dom_sync_BANG_$arity$2 = (function (this$,next){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(self__.val,next)){
(self__.val = next);

(self__.node.data = cljs.core.str.cljs$core$IFn$_invoke$arity$1(next));
} else {
}

return new cljs.core.Keyword(null,"synced","synced",-1518561120);
}));

(shadow.arborist.common.ManagedText.prototype.shadow$arborist$protocols$IManaged$destroy_BANG_$arity$2 = (function (this$,dom_remove_QMARK_){
var self__ = this;
var this$__$1 = this;
if(dom_remove_QMARK_){
return self__.node.remove();
} else {
return null;
}
}));

(shadow.arborist.common.ManagedText.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"env","env",-175281708,null),cljs.core.with_meta(new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"node","node",-2073234571,null)], null);
}));

(shadow.arborist.common.ManagedText.cljs$lang$type = true);

(shadow.arborist.common.ManagedText.cljs$lang$ctorStr = "shadow.arborist.common/ManagedText");

(shadow.arborist.common.ManagedText.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.arborist.common/ManagedText");
}));

/**
 * Positional factory function for shadow.arborist.common/ManagedText.
 */
shadow.arborist.common.__GT_ManagedText = (function shadow$arborist$common$__GT_ManagedText(env,val,node){
return (new shadow.arborist.common.ManagedText(env,val,node));
});

shadow.arborist.common.managed_text = (function shadow$arborist$common$managed_text(env,val){
return (new shadow.arborist.common.ManagedText(env,val,document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(val))));
});
(shadow.arborist.protocols.IConstruct["string"] = true);

(shadow.arborist.protocols.as_managed["string"] = (function (this$,env){
return shadow.arborist.common.managed_text(env,this$);
}));

(shadow.arborist.protocols.IConstruct["number"] = true);

(shadow.arborist.protocols.as_managed["number"] = (function (this$,env){
return shadow.arborist.common.managed_text(env,this$);
}));

(shadow.arborist.protocols.IConstruct["null"] = true);

(shadow.arborist.protocols.as_managed["null"] = (function (this$,env){
return shadow.arborist.common.managed_text(env,this$);
}));

/**
* @constructor
 * @implements {shadow.arborist.protocols.IManaged}
 * @implements {shadow.arborist.protocols.IConstruct}
*/
shadow.arborist.common.NativeElement = (function (node){
this.node = node;
});
(shadow.arborist.common.NativeElement.prototype.shadow$arborist$protocols$IConstruct$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.arborist.common.NativeElement.prototype.shadow$arborist$protocols$IConstruct$as_managed$arity$2 = (function (this$,env){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(shadow.arborist.common.NativeElement.prototype.shadow$arborist$protocols$IManaged$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.arborist.common.NativeElement.prototype.shadow$arborist$protocols$IManaged$dom_first$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.node;
}));

(shadow.arborist.common.NativeElement.prototype.shadow$arborist$protocols$IManaged$dom_insert$arity$3 = (function (this$,parent,anchor){
var self__ = this;
var this$__$1 = this;
return parent.insertBefore(self__.node,anchor);
}));

(shadow.arborist.common.NativeElement.prototype.shadow$arborist$protocols$IManaged$dom_entered_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
}));

(shadow.arborist.common.NativeElement.prototype.shadow$arborist$protocols$IManaged$supports_QMARK_$arity$2 = (function (this$,next){
var self__ = this;
var this$__$1 = this;
return (((next instanceof shadow.arborist.common.NativeElement)) && ((self__.node === next.node)));
}));

(shadow.arborist.common.NativeElement.prototype.shadow$arborist$protocols$IManaged$dom_sync_BANG_$arity$2 = (function (this$,next){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"synced","synced",-1518561120);
}));

(shadow.arborist.common.NativeElement.prototype.shadow$arborist$protocols$IManaged$destroy_BANG_$arity$2 = (function (this$,dom_remove_QMARK_){
var self__ = this;
var this$__$1 = this;
if(dom_remove_QMARK_){
return self__.node.remove();
} else {
return null;
}
}));

(shadow.arborist.common.NativeElement.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node","node",-2073234571,null)], null);
}));

(shadow.arborist.common.NativeElement.cljs$lang$type = true);

(shadow.arborist.common.NativeElement.cljs$lang$ctorStr = "shadow.arborist.common/NativeElement");

(shadow.arborist.common.NativeElement.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.arborist.common/NativeElement");
}));

/**
 * Positional factory function for shadow.arborist.common/NativeElement.
 */
shadow.arborist.common.__GT_NativeElement = (function shadow$arborist$common$__GT_NativeElement(node){
return (new shadow.arborist.common.NativeElement(node));
});

shadow.arborist.common.native_el = (function shadow$arborist$common$native_el(node){
return (new shadow.arborist.common.NativeElement(node));
});

//# sourceMappingURL=shadow.arborist.common.js.map
