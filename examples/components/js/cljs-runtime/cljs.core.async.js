goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12873 = (function (f,blockable,meta12874){
this.f = f;
this.blockable = blockable;
this.meta12874 = meta12874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async12873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12875,meta12874__$1){
var self__ = this;
var _12875__$1 = this;
return (new cljs.core.async.t_cljs$core$async12873(self__.f,self__.blockable,meta12874__$1));
}));

(cljs.core.async.t_cljs$core$async12873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12875){
var self__ = this;
var _12875__$1 = this;
return self__.meta12874;
}));

(cljs.core.async.t_cljs$core$async12873.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async12873.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async12873.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async12873.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async12873.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta12874","meta12874",-1631404961,null)], null);
}));

(cljs.core.async.t_cljs$core$async12873.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async12873.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12873");

(cljs.core.async.t_cljs$core$async12873.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async12873");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12873.
 */
cljs.core.async.__GT_t_cljs$core$async12873 = (function cljs$core$async$__GT_t_cljs$core$async12873(f,blockable,meta12874){
return (new cljs.core.async.t_cljs$core$async12873(f,blockable,meta12874));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__12872 = arguments.length;
switch (G__12872) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async12873(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__12974 = arguments.length;
switch (G__12974) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__13017 = arguments.length;
switch (G__13017) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__13026 = arguments.length;
switch (G__13026) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_15504 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15504) : fn1(val_15504));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15504) : fn1(val_15504));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__13033 = arguments.length;
switch (G__13033) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1(ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1(ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5616__auto___15509 = n;
var x_15510 = (0);
while(true){
if((x_15510 < n__5616__auto___15509)){
(a[x_15510] = x_15510);

var G__15514 = (x_15510 + (1));
x_15510 = G__15514;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13039 = (function (flag,meta13040){
this.flag = flag;
this.meta13040 = meta13040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13041,meta13040__$1){
var self__ = this;
var _13041__$1 = this;
return (new cljs.core.async.t_cljs$core$async13039(self__.flag,meta13040__$1));
}));

(cljs.core.async.t_cljs$core$async13039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13041){
var self__ = this;
var _13041__$1 = this;
return self__.meta13040;
}));

(cljs.core.async.t_cljs$core$async13039.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13039.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13039.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13039.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async13039.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13040","meta13040",404064460,null)], null);
}));

(cljs.core.async.t_cljs$core$async13039.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13039.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13039");

(cljs.core.async.t_cljs$core$async13039.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async13039");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13039.
 */
cljs.core.async.__GT_t_cljs$core$async13039 = (function cljs$core$async$__GT_t_cljs$core$async13039(flag,meta13040){
return (new cljs.core.async.t_cljs$core$async13039(flag,meta13040));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async13039(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13048 = (function (flag,cb,meta13049){
this.flag = flag;
this.cb = cb;
this.meta13049 = meta13049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13050,meta13049__$1){
var self__ = this;
var _13050__$1 = this;
return (new cljs.core.async.t_cljs$core$async13048(self__.flag,self__.cb,meta13049__$1));
}));

(cljs.core.async.t_cljs$core$async13048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13050){
var self__ = this;
var _13050__$1 = this;
return self__.meta13049;
}));

(cljs.core.async.t_cljs$core$async13048.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13048.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13048.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13048.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async13048.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13049","meta13049",-542116070,null)], null);
}));

(cljs.core.async.t_cljs$core$async13048.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13048.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13048");

(cljs.core.async.t_cljs$core$async13048.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async13048");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13048.
 */
cljs.core.async.__GT_t_cljs$core$async13048 = (function cljs$core$async$__GT_t_cljs$core$async13048(flag,cb,meta13049){
return (new cljs.core.async.t_cljs$core$async13048(flag,cb,meta13049));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async13048(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_15518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_15518)){
if((!(((port_15518.cljs$core$IFn$_invoke$arity$1 ? port_15518.cljs$core$IFn$_invoke$arity$1((1)) : port_15518((1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__15519 = (i + (1));
i = G__15519;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port((0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port((1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__13058_SHARP_){
var G__13061 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13058_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13061) : fret(G__13061));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__13059_SHARP_){
var G__13063 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13059_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13063) : fret(G__13063));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5025__auto__ = wport;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15520 = (i + (1));
i = G__15520;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5025__auto__ = ret;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5023__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5023__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___15521 = arguments.length;
var i__5750__auto___15522 = (0);
while(true){
if((i__5750__auto___15522 < len__5749__auto___15521)){
args__5755__auto__.push((arguments[i__5750__auto___15522]));

var G__15523 = (i__5750__auto___15522 + (1));
i__5750__auto___15522 = G__15523;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13067){
var map__13068 = p__13067;
var map__13068__$1 = cljs.core.__destructure_map(map__13068);
var opts = map__13068__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13064){
var G__13065 = cljs.core.first(seq13064);
var seq13064__$1 = cljs.core.next(seq13064);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13065,seq13064__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__13072 = arguments.length;
switch (G__13072) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__12710__auto___15533 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12711__auto__ = (function (){var switch__11851__auto__ = (function (state_13101){
var state_val_13102 = (state_13101[(1)]);
if((state_val_13102 === (7))){
var inst_13097 = (state_13101[(2)]);
var state_13101__$1 = state_13101;
var statearr_13105_15534 = state_13101__$1;
(statearr_13105_15534[(2)] = inst_13097);

(statearr_13105_15534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13102 === (1))){
var state_13101__$1 = state_13101;
var statearr_13106_15536 = state_13101__$1;
(statearr_13106_15536[(2)] = null);

(statearr_13106_15536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13102 === (4))){
var inst_13080 = (state_13101[(7)]);
var inst_13080__$1 = (state_13101[(2)]);
var inst_13081 = (inst_13080__$1 == null);
var state_13101__$1 = (function (){var statearr_13107 = state_13101;
(statearr_13107[(7)] = inst_13080__$1);

return statearr_13107;
})();
if(cljs.core.truth_(inst_13081)){
var statearr_13108_15537 = state_13101__$1;
(statearr_13108_15537[(1)] = (5));

} else {
var statearr_13109_15538 = state_13101__$1;
(statearr_13109_15538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13102 === (13))){
var state_13101__$1 = state_13101;
var statearr_13110_15539 = state_13101__$1;
(statearr_13110_15539[(2)] = null);

(statearr_13110_15539[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13102 === (6))){
var inst_13080 = (state_13101[(7)]);
var state_13101__$1 = state_13101;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13101__$1,(11),to,inst_13080);
} else {
if((state_val_13102 === (3))){
var inst_13099 = (state_13101[(2)]);
var state_13101__$1 = state_13101;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13101__$1,inst_13099);
} else {
if((state_val_13102 === (12))){
var state_13101__$1 = state_13101;
var statearr_13117_15543 = state_13101__$1;
(statearr_13117_15543[(2)] = null);

(statearr_13117_15543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13102 === (2))){
var state_13101__$1 = state_13101;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13101__$1,(4),from);
} else {
if((state_val_13102 === (11))){
var inst_13090 = (state_13101[(2)]);
var state_13101__$1 = state_13101;
if(cljs.core.truth_(inst_13090)){
var statearr_13118_15544 = state_13101__$1;
(statearr_13118_15544[(1)] = (12));

} else {
var statearr_13119_15545 = state_13101__$1;
(statearr_13119_15545[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13102 === (9))){
var state_13101__$1 = state_13101;
var statearr_13120_15546 = state_13101__$1;
(statearr_13120_15546[(2)] = null);

(statearr_13120_15546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13102 === (5))){
var state_13101__$1 = state_13101;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13121_15547 = state_13101__$1;
(statearr_13121_15547[(1)] = (8));

} else {
var statearr_13122_15548 = state_13101__$1;
(statearr_13122_15548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13102 === (14))){
var inst_13095 = (state_13101[(2)]);
var state_13101__$1 = state_13101;
var statearr_13125_15549 = state_13101__$1;
(statearr_13125_15549[(2)] = inst_13095);

(statearr_13125_15549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13102 === (10))){
var inst_13087 = (state_13101[(2)]);
var state_13101__$1 = state_13101;
var statearr_13126_15550 = state_13101__$1;
(statearr_13126_15550[(2)] = inst_13087);

(statearr_13126_15550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13102 === (8))){
var inst_13084 = cljs.core.async.close_BANG_(to);
var state_13101__$1 = state_13101;
var statearr_13131_15551 = state_13101__$1;
(statearr_13131_15551[(2)] = inst_13084);

(statearr_13131_15551[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11852__auto__ = null;
var cljs$core$async$state_machine__11852__auto____0 = (function (){
var statearr_13132 = [null,null,null,null,null,null,null,null];
(statearr_13132[(0)] = cljs$core$async$state_machine__11852__auto__);

(statearr_13132[(1)] = (1));

return statearr_13132;
});
var cljs$core$async$state_machine__11852__auto____1 = (function (state_13101){
while(true){
var ret_value__11853__auto__ = (function (){try{while(true){
var result__11854__auto__ = switch__11851__auto__(state_13101);
if(cljs.core.keyword_identical_QMARK_(result__11854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11854__auto__;
}
break;
}
}catch (e13133){var ex__11855__auto__ = e13133;
var statearr_13134_15557 = state_13101;
(statearr_13134_15557[(2)] = ex__11855__auto__);


if(cljs.core.seq((state_13101[(4)]))){
var statearr_13136_15558 = state_13101;
(statearr_13136_15558[(1)] = cljs.core.first((state_13101[(4)])));

} else {
throw ex__11855__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15559 = state_13101;
state_13101 = G__15559;
continue;
} else {
return ret_value__11853__auto__;
}
break;
}
});
cljs$core$async$state_machine__11852__auto__ = function(state_13101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11852__auto____1.call(this,state_13101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11852__auto____0;
cljs$core$async$state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11852__auto____1;
return cljs$core$async$state_machine__11852__auto__;
})()
})();
var state__12712__auto__ = (function (){var statearr_13137 = f__12711__auto__();
(statearr_13137[(6)] = c__12710__auto___15533);

return statearr_13137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12712__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__13139){
var vec__13140 = p__13139;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13140,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13140,(1),null);
var job = vec__13140;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__12710__auto___15562 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12711__auto__ = (function (){var switch__11851__auto__ = (function (state_13147){
var state_val_13149 = (state_13147[(1)]);
if((state_val_13149 === (1))){
var state_13147__$1 = state_13147;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13147__$1,(2),res,v);
} else {
if((state_val_13149 === (2))){
var inst_13144 = (state_13147[(2)]);
var inst_13145 = cljs.core.async.close_BANG_(res);
var state_13147__$1 = (function (){var statearr_13151 = state_13147;
(statearr_13151[(7)] = inst_13144);

return statearr_13151;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13147__$1,inst_13145);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11852__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11852__auto____0 = (function (){
var statearr_13155 = [null,null,null,null,null,null,null,null];
(statearr_13155[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11852__auto__);

(statearr_13155[(1)] = (1));

return statearr_13155;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11852__auto____1 = (function (state_13147){
while(true){
var ret_value__11853__auto__ = (function (){try{while(true){
var result__11854__auto__ = switch__11851__auto__(state_13147);
if(cljs.core.keyword_identical_QMARK_(result__11854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11854__auto__;
}
break;
}
}catch (e13157){var ex__11855__auto__ = e13157;
var statearr_13158_15564 = state_13147;
(statearr_13158_15564[(2)] = ex__11855__auto__);


if(cljs.core.seq((state_13147[(4)]))){
var statearr_13159_15565 = state_13147;
(statearr_13159_15565[(1)] = cljs.core.first((state_13147[(4)])));

} else {
throw ex__11855__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15566 = state_13147;
state_13147 = G__15566;
continue;
} else {
return ret_value__11853__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11852__auto__ = function(state_13147){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11852__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11852__auto____1.call(this,state_13147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11852__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11852__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11852__auto__;
})()
})();
var state__12712__auto__ = (function (){var statearr_13160 = f__12711__auto__();
(statearr_13160[(6)] = c__12710__auto___15562);

return statearr_13160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12712__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__13161){
var vec__13162 = p__13161;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13162,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13162,(1),null);
var job = vec__13162;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf(v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5616__auto___15569 = n;
var __15570 = (0);
while(true){
if((__15570 < n__5616__auto___15569)){
var G__13166_15571 = type;
var G__13166_15572__$1 = (((G__13166_15571 instanceof cljs.core.Keyword))?G__13166_15571.fqn:null);
switch (G__13166_15572__$1) {
case "compute":
var c__12710__auto___15574 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15570,c__12710__auto___15574,G__13166_15571,G__13166_15572__$1,n__5616__auto___15569,jobs,results,process__$1,async){
return (function (){
var f__12711__auto__ = (function (){var switch__11851__auto__ = ((function (__15570,c__12710__auto___15574,G__13166_15571,G__13166_15572__$1,n__5616__auto___15569,jobs,results,process__$1,async){
return (function (state_13180){
var state_val_13181 = (state_13180[(1)]);
if((state_val_13181 === (1))){
var state_13180__$1 = state_13180;
var statearr_13182_15575 = state_13180__$1;
(statearr_13182_15575[(2)] = null);

(statearr_13182_15575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13181 === (2))){
var state_13180__$1 = state_13180;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13180__$1,(4),jobs);
} else {
if((state_val_13181 === (3))){
var inst_13177 = (state_13180[(2)]);
var state_13180__$1 = state_13180;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13180__$1,inst_13177);
} else {
if((state_val_13181 === (4))){
var inst_13169 = (state_13180[(2)]);
var inst_13170 = process__$1(inst_13169);
var state_13180__$1 = state_13180;
if(cljs.core.truth_(inst_13170)){
var statearr_13184_15576 = state_13180__$1;
(statearr_13184_15576[(1)] = (5));

} else {
var statearr_13189_15577 = state_13180__$1;
(statearr_13189_15577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13181 === (5))){
var state_13180__$1 = state_13180;
var statearr_13190_15578 = state_13180__$1;
(statearr_13190_15578[(2)] = null);

(statearr_13190_15578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13181 === (6))){
var state_13180__$1 = state_13180;
var statearr_13192_15579 = state_13180__$1;
(statearr_13192_15579[(2)] = null);

(statearr_13192_15579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13181 === (7))){
var inst_13175 = (state_13180[(2)]);
var state_13180__$1 = state_13180;
var statearr_13193_15580 = state_13180__$1;
(statearr_13193_15580[(2)] = inst_13175);

(statearr_13193_15580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__15570,c__12710__auto___15574,G__13166_15571,G__13166_15572__$1,n__5616__auto___15569,jobs,results,process__$1,async))
;
return ((function (__15570,switch__11851__auto__,c__12710__auto___15574,G__13166_15571,G__13166_15572__$1,n__5616__auto___15569,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11852__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11852__auto____0 = (function (){
var statearr_13194 = [null,null,null,null,null,null,null];
(statearr_13194[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11852__auto__);

(statearr_13194[(1)] = (1));

return statearr_13194;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11852__auto____1 = (function (state_13180){
while(true){
var ret_value__11853__auto__ = (function (){try{while(true){
var result__11854__auto__ = switch__11851__auto__(state_13180);
if(cljs.core.keyword_identical_QMARK_(result__11854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11854__auto__;
}
break;
}
}catch (e13195){var ex__11855__auto__ = e13195;
var statearr_13197_15588 = state_13180;
(statearr_13197_15588[(2)] = ex__11855__auto__);


if(cljs.core.seq((state_13180[(4)]))){
var statearr_13198_15589 = state_13180;
(statearr_13198_15589[(1)] = cljs.core.first((state_13180[(4)])));

} else {
throw ex__11855__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15594 = state_13180;
state_13180 = G__15594;
continue;
} else {
return ret_value__11853__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11852__auto__ = function(state_13180){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11852__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11852__auto____1.call(this,state_13180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11852__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11852__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11852__auto__;
})()
;})(__15570,switch__11851__auto__,c__12710__auto___15574,G__13166_15571,G__13166_15572__$1,n__5616__auto___15569,jobs,results,process__$1,async))
})();
var state__12712__auto__ = (function (){var statearr_13201 = f__12711__auto__();
(statearr_13201[(6)] = c__12710__auto___15574);

return statearr_13201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12712__auto__);
});})(__15570,c__12710__auto___15574,G__13166_15571,G__13166_15572__$1,n__5616__auto___15569,jobs,results,process__$1,async))
);


break;
case "async":
var c__12710__auto___15595 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15570,c__12710__auto___15595,G__13166_15571,G__13166_15572__$1,n__5616__auto___15569,jobs,results,process__$1,async){
return (function (){
var f__12711__auto__ = (function (){var switch__11851__auto__ = ((function (__15570,c__12710__auto___15595,G__13166_15571,G__13166_15572__$1,n__5616__auto___15569,jobs,results,process__$1,async){
return (function (state_13217){
var state_val_13218 = (state_13217[(1)]);
if((state_val_13218 === (1))){
var state_13217__$1 = state_13217;
var statearr_13219_15600 = state_13217__$1;
(statearr_13219_15600[(2)] = null);

(statearr_13219_15600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13218 === (2))){
var state_13217__$1 = state_13217;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13217__$1,(4),jobs);
} else {
if((state_val_13218 === (3))){
var inst_13215 = (state_13217[(2)]);
var state_13217__$1 = state_13217;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13217__$1,inst_13215);
} else {
if((state_val_13218 === (4))){
var inst_13207 = (state_13217[(2)]);
var inst_13208 = async(inst_13207);
var state_13217__$1 = state_13217;
if(cljs.core.truth_(inst_13208)){
var statearr_13220_15601 = state_13217__$1;
(statearr_13220_15601[(1)] = (5));

} else {
var statearr_13221_15602 = state_13217__$1;
(statearr_13221_15602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13218 === (5))){
var state_13217__$1 = state_13217;
var statearr_13222_15604 = state_13217__$1;
(statearr_13222_15604[(2)] = null);

(statearr_13222_15604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13218 === (6))){
var state_13217__$1 = state_13217;
var statearr_13224_15605 = state_13217__$1;
(statearr_13224_15605[(2)] = null);

(statearr_13224_15605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13218 === (7))){
var inst_13213 = (state_13217[(2)]);
var state_13217__$1 = state_13217;
var statearr_13225_15606 = state_13217__$1;
(statearr_13225_15606[(2)] = inst_13213);

(statearr_13225_15606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__15570,c__12710__auto___15595,G__13166_15571,G__13166_15572__$1,n__5616__auto___15569,jobs,results,process__$1,async))
;
return ((function (__15570,switch__11851__auto__,c__12710__auto___15595,G__13166_15571,G__13166_15572__$1,n__5616__auto___15569,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11852__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11852__auto____0 = (function (){
var statearr_13226 = [null,null,null,null,null,null,null];
(statearr_13226[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11852__auto__);

(statearr_13226[(1)] = (1));

return statearr_13226;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11852__auto____1 = (function (state_13217){
while(true){
var ret_value__11853__auto__ = (function (){try{while(true){
var result__11854__auto__ = switch__11851__auto__(state_13217);
if(cljs.core.keyword_identical_QMARK_(result__11854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11854__auto__;
}
break;
}
}catch (e13227){var ex__11855__auto__ = e13227;
var statearr_13228_15607 = state_13217;
(statearr_13228_15607[(2)] = ex__11855__auto__);


if(cljs.core.seq((state_13217[(4)]))){
var statearr_13229_15608 = state_13217;
(statearr_13229_15608[(1)] = cljs.core.first((state_13217[(4)])));

} else {
throw ex__11855__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15610 = state_13217;
state_13217 = G__15610;
continue;
} else {
return ret_value__11853__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11852__auto__ = function(state_13217){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11852__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11852__auto____1.call(this,state_13217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11852__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11852__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11852__auto__;
})()
;})(__15570,switch__11851__auto__,c__12710__auto___15595,G__13166_15571,G__13166_15572__$1,n__5616__auto___15569,jobs,results,process__$1,async))
})();
var state__12712__auto__ = (function (){var statearr_13230 = f__12711__auto__();
(statearr_13230[(6)] = c__12710__auto___15595);

return statearr_13230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12712__auto__);
});})(__15570,c__12710__auto___15595,G__13166_15571,G__13166_15572__$1,n__5616__auto___15569,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13166_15572__$1)].join('')));

}

var G__15612 = (__15570 + (1));
__15570 = G__15612;
continue;
} else {
}
break;
}

var c__12710__auto___15613 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12711__auto__ = (function (){var switch__11851__auto__ = (function (state_13253){
var state_val_13254 = (state_13253[(1)]);
if((state_val_13254 === (7))){
var inst_13249 = (state_13253[(2)]);
var state_13253__$1 = state_13253;
var statearr_13259_15625 = state_13253__$1;
(statearr_13259_15625[(2)] = inst_13249);

(statearr_13259_15625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13254 === (1))){
var state_13253__$1 = state_13253;
var statearr_13260_15629 = state_13253__$1;
(statearr_13260_15629[(2)] = null);

(statearr_13260_15629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13254 === (4))){
var inst_13233 = (state_13253[(7)]);
var inst_13233__$1 = (state_13253[(2)]);
var inst_13234 = (inst_13233__$1 == null);
var state_13253__$1 = (function (){var statearr_13263 = state_13253;
(statearr_13263[(7)] = inst_13233__$1);

return statearr_13263;
})();
if(cljs.core.truth_(inst_13234)){
var statearr_13264_15636 = state_13253__$1;
(statearr_13264_15636[(1)] = (5));

} else {
var statearr_13265_15640 = state_13253__$1;
(statearr_13265_15640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13254 === (6))){
var inst_13233 = (state_13253[(7)]);
var inst_13238 = (state_13253[(8)]);
var inst_13238__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_13240 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13241 = [inst_13233,inst_13238__$1];
var inst_13242 = (new cljs.core.PersistentVector(null,2,(5),inst_13240,inst_13241,null));
var state_13253__$1 = (function (){var statearr_13266 = state_13253;
(statearr_13266[(8)] = inst_13238__$1);

return statearr_13266;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13253__$1,(8),jobs,inst_13242);
} else {
if((state_val_13254 === (3))){
var inst_13251 = (state_13253[(2)]);
var state_13253__$1 = state_13253;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13253__$1,inst_13251);
} else {
if((state_val_13254 === (2))){
var state_13253__$1 = state_13253;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13253__$1,(4),from);
} else {
if((state_val_13254 === (9))){
var inst_13246 = (state_13253[(2)]);
var state_13253__$1 = (function (){var statearr_13267 = state_13253;
(statearr_13267[(9)] = inst_13246);

return statearr_13267;
})();
var statearr_13268_15654 = state_13253__$1;
(statearr_13268_15654[(2)] = null);

(statearr_13268_15654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13254 === (5))){
var inst_13236 = cljs.core.async.close_BANG_(jobs);
var state_13253__$1 = state_13253;
var statearr_13269_15655 = state_13253__$1;
(statearr_13269_15655[(2)] = inst_13236);

(statearr_13269_15655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13254 === (8))){
var inst_13238 = (state_13253[(8)]);
var inst_13244 = (state_13253[(2)]);
var state_13253__$1 = (function (){var statearr_13270 = state_13253;
(statearr_13270[(10)] = inst_13244);

return statearr_13270;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13253__$1,(9),results,inst_13238);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11852__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11852__auto____0 = (function (){
var statearr_13271 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13271[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11852__auto__);

(statearr_13271[(1)] = (1));

return statearr_13271;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11852__auto____1 = (function (state_13253){
while(true){
var ret_value__11853__auto__ = (function (){try{while(true){
var result__11854__auto__ = switch__11851__auto__(state_13253);
if(cljs.core.keyword_identical_QMARK_(result__11854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11854__auto__;
}
break;
}
}catch (e13274){var ex__11855__auto__ = e13274;
var statearr_13275_15662 = state_13253;
(statearr_13275_15662[(2)] = ex__11855__auto__);


if(cljs.core.seq((state_13253[(4)]))){
var statearr_13276_15663 = state_13253;
(statearr_13276_15663[(1)] = cljs.core.first((state_13253[(4)])));

} else {
throw ex__11855__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15664 = state_13253;
state_13253 = G__15664;
continue;
} else {
return ret_value__11853__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11852__auto__ = function(state_13253){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11852__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11852__auto____1.call(this,state_13253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11852__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11852__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11852__auto__;
})()
})();
var state__12712__auto__ = (function (){var statearr_13278 = f__12711__auto__();
(statearr_13278[(6)] = c__12710__auto___15613);

return statearr_13278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12712__auto__);
}));


var c__12710__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12711__auto__ = (function (){var switch__11851__auto__ = (function (state_13316){
var state_val_13317 = (state_13316[(1)]);
if((state_val_13317 === (7))){
var inst_13312 = (state_13316[(2)]);
var state_13316__$1 = state_13316;
var statearr_13322_15667 = state_13316__$1;
(statearr_13322_15667[(2)] = inst_13312);

(statearr_13322_15667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13317 === (20))){
var state_13316__$1 = state_13316;
var statearr_13323_15671 = state_13316__$1;
(statearr_13323_15671[(2)] = null);

(statearr_13323_15671[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13317 === (1))){
var state_13316__$1 = state_13316;
var statearr_13324_15672 = state_13316__$1;
(statearr_13324_15672[(2)] = null);

(statearr_13324_15672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13317 === (4))){
var inst_13281 = (state_13316[(7)]);
var inst_13281__$1 = (state_13316[(2)]);
var inst_13282 = (inst_13281__$1 == null);
var state_13316__$1 = (function (){var statearr_13326 = state_13316;
(statearr_13326[(7)] = inst_13281__$1);

return statearr_13326;
})();
if(cljs.core.truth_(inst_13282)){
var statearr_13327_15675 = state_13316__$1;
(statearr_13327_15675[(1)] = (5));

} else {
var statearr_13328_15676 = state_13316__$1;
(statearr_13328_15676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13317 === (15))){
var inst_13294 = (state_13316[(8)]);
var state_13316__$1 = state_13316;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13316__$1,(18),to,inst_13294);
} else {
if((state_val_13317 === (21))){
var inst_13307 = (state_13316[(2)]);
var state_13316__$1 = state_13316;
var statearr_13329_15678 = state_13316__$1;
(statearr_13329_15678[(2)] = inst_13307);

(statearr_13329_15678[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13317 === (13))){
var inst_13309 = (state_13316[(2)]);
var state_13316__$1 = (function (){var statearr_13330 = state_13316;
(statearr_13330[(9)] = inst_13309);

return statearr_13330;
})();
var statearr_13332_15679 = state_13316__$1;
(statearr_13332_15679[(2)] = null);

(statearr_13332_15679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13317 === (6))){
var inst_13281 = (state_13316[(7)]);
var state_13316__$1 = state_13316;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13316__$1,(11),inst_13281);
} else {
if((state_val_13317 === (17))){
var inst_13302 = (state_13316[(2)]);
var state_13316__$1 = state_13316;
if(cljs.core.truth_(inst_13302)){
var statearr_13339_15680 = state_13316__$1;
(statearr_13339_15680[(1)] = (19));

} else {
var statearr_13340_15681 = state_13316__$1;
(statearr_13340_15681[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13317 === (3))){
var inst_13314 = (state_13316[(2)]);
var state_13316__$1 = state_13316;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13316__$1,inst_13314);
} else {
if((state_val_13317 === (12))){
var inst_13291 = (state_13316[(10)]);
var state_13316__$1 = state_13316;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13316__$1,(14),inst_13291);
} else {
if((state_val_13317 === (2))){
var state_13316__$1 = state_13316;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13316__$1,(4),results);
} else {
if((state_val_13317 === (19))){
var state_13316__$1 = state_13316;
var statearr_13341_15682 = state_13316__$1;
(statearr_13341_15682[(2)] = null);

(statearr_13341_15682[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13317 === (11))){
var inst_13291 = (state_13316[(2)]);
var state_13316__$1 = (function (){var statearr_13342 = state_13316;
(statearr_13342[(10)] = inst_13291);

return statearr_13342;
})();
var statearr_13343_15683 = state_13316__$1;
(statearr_13343_15683[(2)] = null);

(statearr_13343_15683[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13317 === (9))){
var state_13316__$1 = state_13316;
var statearr_13344_15684 = state_13316__$1;
(statearr_13344_15684[(2)] = null);

(statearr_13344_15684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13317 === (5))){
var state_13316__$1 = state_13316;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13345_15685 = state_13316__$1;
(statearr_13345_15685[(1)] = (8));

} else {
var statearr_13346_15686 = state_13316__$1;
(statearr_13346_15686[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13317 === (14))){
var inst_13294 = (state_13316[(8)]);
var inst_13296 = (state_13316[(11)]);
var inst_13294__$1 = (state_13316[(2)]);
var inst_13295 = (inst_13294__$1 == null);
var inst_13296__$1 = cljs.core.not(inst_13295);
var state_13316__$1 = (function (){var statearr_13347 = state_13316;
(statearr_13347[(8)] = inst_13294__$1);

(statearr_13347[(11)] = inst_13296__$1);

return statearr_13347;
})();
if(inst_13296__$1){
var statearr_13348_15687 = state_13316__$1;
(statearr_13348_15687[(1)] = (15));

} else {
var statearr_13349_15688 = state_13316__$1;
(statearr_13349_15688[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13317 === (16))){
var inst_13296 = (state_13316[(11)]);
var state_13316__$1 = state_13316;
var statearr_13350_15689 = state_13316__$1;
(statearr_13350_15689[(2)] = inst_13296);

(statearr_13350_15689[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13317 === (10))){
var inst_13288 = (state_13316[(2)]);
var state_13316__$1 = state_13316;
var statearr_13351_15694 = state_13316__$1;
(statearr_13351_15694[(2)] = inst_13288);

(statearr_13351_15694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13317 === (18))){
var inst_13299 = (state_13316[(2)]);
var state_13316__$1 = state_13316;
var statearr_13352_15698 = state_13316__$1;
(statearr_13352_15698[(2)] = inst_13299);

(statearr_13352_15698[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13317 === (8))){
var inst_13285 = cljs.core.async.close_BANG_(to);
var state_13316__$1 = state_13316;
var statearr_13356_15699 = state_13316__$1;
(statearr_13356_15699[(2)] = inst_13285);

(statearr_13356_15699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__11852__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__11852__auto____0 = (function (){
var statearr_13360 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13360[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__11852__auto__);

(statearr_13360[(1)] = (1));

return statearr_13360;
});
var cljs$core$async$pipeline_STAR__$_state_machine__11852__auto____1 = (function (state_13316){
while(true){
var ret_value__11853__auto__ = (function (){try{while(true){
var result__11854__auto__ = switch__11851__auto__(state_13316);
if(cljs.core.keyword_identical_QMARK_(result__11854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11854__auto__;
}
break;
}
}catch (e13365){var ex__11855__auto__ = e13365;
var statearr_13366_15700 = state_13316;
(statearr_13366_15700[(2)] = ex__11855__auto__);


if(cljs.core.seq((state_13316[(4)]))){
var statearr_13370_15701 = state_13316;
(statearr_13370_15701[(1)] = cljs.core.first((state_13316[(4)])));

} else {
throw ex__11855__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15709 = state_13316;
state_13316 = G__15709;
continue;
} else {
return ret_value__11853__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__11852__auto__ = function(state_13316){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__11852__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__11852__auto____1.call(this,state_13316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__11852__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__11852__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__11852__auto__;
})()
})();
var state__12712__auto__ = (function (){var statearr_13372 = f__12711__auto__();
(statearr_13372[(6)] = c__12710__auto__);

return statearr_13372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12712__auto__);
}));

return c__12710__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__13377 = arguments.length;
switch (G__13377) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__13385 = arguments.length;
switch (G__13385) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__13400 = arguments.length;
switch (G__13400) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__12710__auto___15713 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12711__auto__ = (function (){var switch__11851__auto__ = (function (state_13434){
var state_val_13435 = (state_13434[(1)]);
if((state_val_13435 === (7))){
var inst_13430 = (state_13434[(2)]);
var state_13434__$1 = state_13434;
var statearr_13439_15714 = state_13434__$1;
(statearr_13439_15714[(2)] = inst_13430);

(statearr_13439_15714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13435 === (1))){
var state_13434__$1 = state_13434;
var statearr_13441_15720 = state_13434__$1;
(statearr_13441_15720[(2)] = null);

(statearr_13441_15720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13435 === (4))){
var inst_13410 = (state_13434[(7)]);
var inst_13410__$1 = (state_13434[(2)]);
var inst_13412 = (inst_13410__$1 == null);
var state_13434__$1 = (function (){var statearr_13443 = state_13434;
(statearr_13443[(7)] = inst_13410__$1);

return statearr_13443;
})();
if(cljs.core.truth_(inst_13412)){
var statearr_13444_15724 = state_13434__$1;
(statearr_13444_15724[(1)] = (5));

} else {
var statearr_13445_15725 = state_13434__$1;
(statearr_13445_15725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13435 === (13))){
var state_13434__$1 = state_13434;
var statearr_13449_15726 = state_13434__$1;
(statearr_13449_15726[(2)] = null);

(statearr_13449_15726[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13435 === (6))){
var inst_13410 = (state_13434[(7)]);
var inst_13417 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_13410) : p(inst_13410));
var state_13434__$1 = state_13434;
if(cljs.core.truth_(inst_13417)){
var statearr_13452_15727 = state_13434__$1;
(statearr_13452_15727[(1)] = (9));

} else {
var statearr_13453_15728 = state_13434__$1;
(statearr_13453_15728[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13435 === (3))){
var inst_13432 = (state_13434[(2)]);
var state_13434__$1 = state_13434;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13434__$1,inst_13432);
} else {
if((state_val_13435 === (12))){
var state_13434__$1 = state_13434;
var statearr_13457_15729 = state_13434__$1;
(statearr_13457_15729[(2)] = null);

(statearr_13457_15729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13435 === (2))){
var state_13434__$1 = state_13434;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13434__$1,(4),ch);
} else {
if((state_val_13435 === (11))){
var inst_13410 = (state_13434[(7)]);
var inst_13421 = (state_13434[(2)]);
var state_13434__$1 = state_13434;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13434__$1,(8),inst_13421,inst_13410);
} else {
if((state_val_13435 === (9))){
var state_13434__$1 = state_13434;
var statearr_13459_15730 = state_13434__$1;
(statearr_13459_15730[(2)] = tc);

(statearr_13459_15730[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13435 === (5))){
var inst_13414 = cljs.core.async.close_BANG_(tc);
var inst_13415 = cljs.core.async.close_BANG_(fc);
var state_13434__$1 = (function (){var statearr_13463 = state_13434;
(statearr_13463[(8)] = inst_13414);

return statearr_13463;
})();
var statearr_13465_15731 = state_13434__$1;
(statearr_13465_15731[(2)] = inst_13415);

(statearr_13465_15731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13435 === (14))){
var inst_13428 = (state_13434[(2)]);
var state_13434__$1 = state_13434;
var statearr_13466_15732 = state_13434__$1;
(statearr_13466_15732[(2)] = inst_13428);

(statearr_13466_15732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13435 === (10))){
var state_13434__$1 = state_13434;
var statearr_13468_15733 = state_13434__$1;
(statearr_13468_15733[(2)] = fc);

(statearr_13468_15733[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13435 === (8))){
var inst_13423 = (state_13434[(2)]);
var state_13434__$1 = state_13434;
if(cljs.core.truth_(inst_13423)){
var statearr_13472_15737 = state_13434__$1;
(statearr_13472_15737[(1)] = (12));

} else {
var statearr_13474_15738 = state_13434__$1;
(statearr_13474_15738[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11852__auto__ = null;
var cljs$core$async$state_machine__11852__auto____0 = (function (){
var statearr_13479 = [null,null,null,null,null,null,null,null,null];
(statearr_13479[(0)] = cljs$core$async$state_machine__11852__auto__);

(statearr_13479[(1)] = (1));

return statearr_13479;
});
var cljs$core$async$state_machine__11852__auto____1 = (function (state_13434){
while(true){
var ret_value__11853__auto__ = (function (){try{while(true){
var result__11854__auto__ = switch__11851__auto__(state_13434);
if(cljs.core.keyword_identical_QMARK_(result__11854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11854__auto__;
}
break;
}
}catch (e13481){var ex__11855__auto__ = e13481;
var statearr_13482_15742 = state_13434;
(statearr_13482_15742[(2)] = ex__11855__auto__);


if(cljs.core.seq((state_13434[(4)]))){
var statearr_13486_15743 = state_13434;
(statearr_13486_15743[(1)] = cljs.core.first((state_13434[(4)])));

} else {
throw ex__11855__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15744 = state_13434;
state_13434 = G__15744;
continue;
} else {
return ret_value__11853__auto__;
}
break;
}
});
cljs$core$async$state_machine__11852__auto__ = function(state_13434){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11852__auto____1.call(this,state_13434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11852__auto____0;
cljs$core$async$state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11852__auto____1;
return cljs$core$async$state_machine__11852__auto__;
})()
})();
var state__12712__auto__ = (function (){var statearr_13488 = f__12711__auto__();
(statearr_13488[(6)] = c__12710__auto___15713);

return statearr_13488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12712__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__12710__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12711__auto__ = (function (){var switch__11851__auto__ = (function (state_13519){
var state_val_13520 = (state_13519[(1)]);
if((state_val_13520 === (7))){
var inst_13515 = (state_13519[(2)]);
var state_13519__$1 = state_13519;
var statearr_13524_15745 = state_13519__$1;
(statearr_13524_15745[(2)] = inst_13515);

(statearr_13524_15745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13520 === (1))){
var inst_13497 = init;
var inst_13498 = inst_13497;
var state_13519__$1 = (function (){var statearr_13530 = state_13519;
(statearr_13530[(7)] = inst_13498);

return statearr_13530;
})();
var statearr_13531_15746 = state_13519__$1;
(statearr_13531_15746[(2)] = null);

(statearr_13531_15746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13520 === (4))){
var inst_13501 = (state_13519[(8)]);
var inst_13501__$1 = (state_13519[(2)]);
var inst_13502 = (inst_13501__$1 == null);
var state_13519__$1 = (function (){var statearr_13536 = state_13519;
(statearr_13536[(8)] = inst_13501__$1);

return statearr_13536;
})();
if(cljs.core.truth_(inst_13502)){
var statearr_13537_15748 = state_13519__$1;
(statearr_13537_15748[(1)] = (5));

} else {
var statearr_13538_15751 = state_13519__$1;
(statearr_13538_15751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13520 === (6))){
var inst_13498 = (state_13519[(7)]);
var inst_13501 = (state_13519[(8)]);
var inst_13505 = (state_13519[(9)]);
var inst_13505__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_13498,inst_13501) : f(inst_13498,inst_13501));
var inst_13507 = cljs.core.reduced_QMARK_(inst_13505__$1);
var state_13519__$1 = (function (){var statearr_13540 = state_13519;
(statearr_13540[(9)] = inst_13505__$1);

return statearr_13540;
})();
if(inst_13507){
var statearr_13542_15752 = state_13519__$1;
(statearr_13542_15752[(1)] = (8));

} else {
var statearr_13543_15753 = state_13519__$1;
(statearr_13543_15753[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13520 === (3))){
var inst_13517 = (state_13519[(2)]);
var state_13519__$1 = state_13519;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13519__$1,inst_13517);
} else {
if((state_val_13520 === (2))){
var state_13519__$1 = state_13519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13519__$1,(4),ch);
} else {
if((state_val_13520 === (9))){
var inst_13505 = (state_13519[(9)]);
var inst_13498 = inst_13505;
var state_13519__$1 = (function (){var statearr_13548 = state_13519;
(statearr_13548[(7)] = inst_13498);

return statearr_13548;
})();
var statearr_13550_15754 = state_13519__$1;
(statearr_13550_15754[(2)] = null);

(statearr_13550_15754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13520 === (5))){
var inst_13498 = (state_13519[(7)]);
var state_13519__$1 = state_13519;
var statearr_13558_15755 = state_13519__$1;
(statearr_13558_15755[(2)] = inst_13498);

(statearr_13558_15755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13520 === (10))){
var inst_13513 = (state_13519[(2)]);
var state_13519__$1 = state_13519;
var statearr_13559_15756 = state_13519__$1;
(statearr_13559_15756[(2)] = inst_13513);

(statearr_13559_15756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13520 === (8))){
var inst_13505 = (state_13519[(9)]);
var inst_13509 = cljs.core.deref(inst_13505);
var state_13519__$1 = state_13519;
var statearr_13562_15757 = state_13519__$1;
(statearr_13562_15757[(2)] = inst_13509);

(statearr_13562_15757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__11852__auto__ = null;
var cljs$core$async$reduce_$_state_machine__11852__auto____0 = (function (){
var statearr_13564 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13564[(0)] = cljs$core$async$reduce_$_state_machine__11852__auto__);

(statearr_13564[(1)] = (1));

return statearr_13564;
});
var cljs$core$async$reduce_$_state_machine__11852__auto____1 = (function (state_13519){
while(true){
var ret_value__11853__auto__ = (function (){try{while(true){
var result__11854__auto__ = switch__11851__auto__(state_13519);
if(cljs.core.keyword_identical_QMARK_(result__11854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11854__auto__;
}
break;
}
}catch (e13565){var ex__11855__auto__ = e13565;
var statearr_13566_15758 = state_13519;
(statearr_13566_15758[(2)] = ex__11855__auto__);


if(cljs.core.seq((state_13519[(4)]))){
var statearr_13568_15759 = state_13519;
(statearr_13568_15759[(1)] = cljs.core.first((state_13519[(4)])));

} else {
throw ex__11855__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15760 = state_13519;
state_13519 = G__15760;
continue;
} else {
return ret_value__11853__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__11852__auto__ = function(state_13519){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__11852__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__11852__auto____1.call(this,state_13519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__11852__auto____0;
cljs$core$async$reduce_$_state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__11852__auto____1;
return cljs$core$async$reduce_$_state_machine__11852__auto__;
})()
})();
var state__12712__auto__ = (function (){var statearr_13569 = f__12711__auto__();
(statearr_13569[(6)] = c__12710__auto__);

return statearr_13569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12712__auto__);
}));

return c__12710__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform(f));
var c__12710__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12711__auto__ = (function (){var switch__11851__auto__ = (function (state_13581){
var state_val_13582 = (state_13581[(1)]);
if((state_val_13582 === (1))){
var inst_13575 = cljs.core.async.reduce(f__$1,init,ch);
var state_13581__$1 = state_13581;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13581__$1,(2),inst_13575);
} else {
if((state_val_13582 === (2))){
var inst_13577 = (state_13581[(2)]);
var inst_13578 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_13577) : f__$1(inst_13577));
var state_13581__$1 = state_13581;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13581__$1,inst_13578);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__11852__auto__ = null;
var cljs$core$async$transduce_$_state_machine__11852__auto____0 = (function (){
var statearr_13586 = [null,null,null,null,null,null,null];
(statearr_13586[(0)] = cljs$core$async$transduce_$_state_machine__11852__auto__);

(statearr_13586[(1)] = (1));

return statearr_13586;
});
var cljs$core$async$transduce_$_state_machine__11852__auto____1 = (function (state_13581){
while(true){
var ret_value__11853__auto__ = (function (){try{while(true){
var result__11854__auto__ = switch__11851__auto__(state_13581);
if(cljs.core.keyword_identical_QMARK_(result__11854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11854__auto__;
}
break;
}
}catch (e13588){var ex__11855__auto__ = e13588;
var statearr_13589_15770 = state_13581;
(statearr_13589_15770[(2)] = ex__11855__auto__);


if(cljs.core.seq((state_13581[(4)]))){
var statearr_13593_15771 = state_13581;
(statearr_13593_15771[(1)] = cljs.core.first((state_13581[(4)])));

} else {
throw ex__11855__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15773 = state_13581;
state_13581 = G__15773;
continue;
} else {
return ret_value__11853__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__11852__auto__ = function(state_13581){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__11852__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__11852__auto____1.call(this,state_13581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__11852__auto____0;
cljs$core$async$transduce_$_state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__11852__auto____1;
return cljs$core$async$transduce_$_state_machine__11852__auto__;
})()
})();
var state__12712__auto__ = (function (){var statearr_13597 = f__12711__auto__();
(statearr_13597[(6)] = c__12710__auto__);

return statearr_13597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12712__auto__);
}));

return c__12710__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__13608 = arguments.length;
switch (G__13608) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__12710__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12711__auto__ = (function (){var switch__11851__auto__ = (function (state_13640){
var state_val_13641 = (state_13640[(1)]);
if((state_val_13641 === (7))){
var inst_13620 = (state_13640[(2)]);
var state_13640__$1 = state_13640;
var statearr_13645_15778 = state_13640__$1;
(statearr_13645_15778[(2)] = inst_13620);

(statearr_13645_15778[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13641 === (1))){
var inst_13613 = cljs.core.seq(coll);
var inst_13614 = inst_13613;
var state_13640__$1 = (function (){var statearr_13647 = state_13640;
(statearr_13647[(7)] = inst_13614);

return statearr_13647;
})();
var statearr_13648_15781 = state_13640__$1;
(statearr_13648_15781[(2)] = null);

(statearr_13648_15781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13641 === (4))){
var inst_13614 = (state_13640[(7)]);
var inst_13618 = cljs.core.first(inst_13614);
var state_13640__$1 = state_13640;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13640__$1,(7),ch,inst_13618);
} else {
if((state_val_13641 === (13))){
var inst_13634 = (state_13640[(2)]);
var state_13640__$1 = state_13640;
var statearr_13653_15782 = state_13640__$1;
(statearr_13653_15782[(2)] = inst_13634);

(statearr_13653_15782[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13641 === (6))){
var inst_13623 = (state_13640[(2)]);
var state_13640__$1 = state_13640;
if(cljs.core.truth_(inst_13623)){
var statearr_13654_15783 = state_13640__$1;
(statearr_13654_15783[(1)] = (8));

} else {
var statearr_13656_15784 = state_13640__$1;
(statearr_13656_15784[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13641 === (3))){
var inst_13638 = (state_13640[(2)]);
var state_13640__$1 = state_13640;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13640__$1,inst_13638);
} else {
if((state_val_13641 === (12))){
var state_13640__$1 = state_13640;
var statearr_13657_15785 = state_13640__$1;
(statearr_13657_15785[(2)] = null);

(statearr_13657_15785[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13641 === (2))){
var inst_13614 = (state_13640[(7)]);
var state_13640__$1 = state_13640;
if(cljs.core.truth_(inst_13614)){
var statearr_13661_15786 = state_13640__$1;
(statearr_13661_15786[(1)] = (4));

} else {
var statearr_13662_15787 = state_13640__$1;
(statearr_13662_15787[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13641 === (11))){
var inst_13631 = cljs.core.async.close_BANG_(ch);
var state_13640__$1 = state_13640;
var statearr_13664_15788 = state_13640__$1;
(statearr_13664_15788[(2)] = inst_13631);

(statearr_13664_15788[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13641 === (9))){
var state_13640__$1 = state_13640;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13667_15789 = state_13640__$1;
(statearr_13667_15789[(1)] = (11));

} else {
var statearr_13668_15790 = state_13640__$1;
(statearr_13668_15790[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13641 === (5))){
var inst_13614 = (state_13640[(7)]);
var state_13640__$1 = state_13640;
var statearr_13671_15791 = state_13640__$1;
(statearr_13671_15791[(2)] = inst_13614);

(statearr_13671_15791[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13641 === (10))){
var inst_13636 = (state_13640[(2)]);
var state_13640__$1 = state_13640;
var statearr_13673_15792 = state_13640__$1;
(statearr_13673_15792[(2)] = inst_13636);

(statearr_13673_15792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13641 === (8))){
var inst_13614 = (state_13640[(7)]);
var inst_13626 = cljs.core.next(inst_13614);
var inst_13614__$1 = inst_13626;
var state_13640__$1 = (function (){var statearr_13676 = state_13640;
(statearr_13676[(7)] = inst_13614__$1);

return statearr_13676;
})();
var statearr_13677_15793 = state_13640__$1;
(statearr_13677_15793[(2)] = null);

(statearr_13677_15793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11852__auto__ = null;
var cljs$core$async$state_machine__11852__auto____0 = (function (){
var statearr_13681 = [null,null,null,null,null,null,null,null];
(statearr_13681[(0)] = cljs$core$async$state_machine__11852__auto__);

(statearr_13681[(1)] = (1));

return statearr_13681;
});
var cljs$core$async$state_machine__11852__auto____1 = (function (state_13640){
while(true){
var ret_value__11853__auto__ = (function (){try{while(true){
var result__11854__auto__ = switch__11851__auto__(state_13640);
if(cljs.core.keyword_identical_QMARK_(result__11854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11854__auto__;
}
break;
}
}catch (e13682){var ex__11855__auto__ = e13682;
var statearr_13683_15794 = state_13640;
(statearr_13683_15794[(2)] = ex__11855__auto__);


if(cljs.core.seq((state_13640[(4)]))){
var statearr_13685_15795 = state_13640;
(statearr_13685_15795[(1)] = cljs.core.first((state_13640[(4)])));

} else {
throw ex__11855__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15796 = state_13640;
state_13640 = G__15796;
continue;
} else {
return ret_value__11853__auto__;
}
break;
}
});
cljs$core$async$state_machine__11852__auto__ = function(state_13640){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11852__auto____1.call(this,state_13640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11852__auto____0;
cljs$core$async$state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11852__auto____1;
return cljs$core$async$state_machine__11852__auto__;
})()
})();
var state__12712__auto__ = (function (){var statearr_13689 = f__12711__auto__();
(statearr_13689[(6)] = c__12710__auto__);

return statearr_13689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12712__auto__);
}));

return c__12710__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__13696 = arguments.length;
switch (G__13696) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_15798 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__(_));
} else {
var m__5372__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__(_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_15798(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_15809 = (function (m,ch,close_QMARK_){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5374__auto__(m,ch,close_QMARK_));
} else {
var m__5372__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5372__auto__(m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_15809(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_15814 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__(m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__(m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_15814(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_15815 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5374__auto__(m));
} else {
var m__5372__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5372__auto__(m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_15815(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13759 = (function (ch,cs,meta13760){
this.ch = ch;
this.cs = cs;
this.meta13760 = meta13760;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13761,meta13760__$1){
var self__ = this;
var _13761__$1 = this;
return (new cljs.core.async.t_cljs$core$async13759(self__.ch,self__.cs,meta13760__$1));
}));

(cljs.core.async.t_cljs$core$async13759.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13761){
var self__ = this;
var _13761__$1 = this;
return self__.meta13760;
}));

(cljs.core.async.t_cljs$core$async13759.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13759.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async13759.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13759.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async13759.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async13759.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async13759.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13760","meta13760",853238699,null)], null);
}));

(cljs.core.async.t_cljs$core$async13759.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13759.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13759");

(cljs.core.async.t_cljs$core$async13759.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async13759");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13759.
 */
cljs.core.async.__GT_t_cljs$core$async13759 = (function cljs$core$async$__GT_t_cljs$core$async13759(ch,cs,meta13760){
return (new cljs.core.async.t_cljs$core$async13759(ch,cs,meta13760));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async13759(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__12710__auto___15820 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12711__auto__ = (function (){var switch__11851__auto__ = (function (state_13936){
var state_val_13937 = (state_13936[(1)]);
if((state_val_13937 === (7))){
var inst_13929 = (state_13936[(2)]);
var state_13936__$1 = state_13936;
var statearr_13940_15823 = state_13936__$1;
(statearr_13940_15823[(2)] = inst_13929);

(statearr_13940_15823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (20))){
var inst_13826 = (state_13936[(7)]);
var inst_13838 = cljs.core.first(inst_13826);
var inst_13839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13838,(0),null);
var inst_13840 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13838,(1),null);
var state_13936__$1 = (function (){var statearr_13941 = state_13936;
(statearr_13941[(8)] = inst_13839);

return statearr_13941;
})();
if(cljs.core.truth_(inst_13840)){
var statearr_13942_15824 = state_13936__$1;
(statearr_13942_15824[(1)] = (22));

} else {
var statearr_13943_15825 = state_13936__$1;
(statearr_13943_15825[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (27))){
var inst_13872 = (state_13936[(9)]);
var inst_13874 = (state_13936[(10)]);
var inst_13879 = (state_13936[(11)]);
var inst_13784 = (state_13936[(12)]);
var inst_13879__$1 = cljs.core._nth(inst_13872,inst_13874);
var inst_13880 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_13879__$1,inst_13784,done);
var state_13936__$1 = (function (){var statearr_13948 = state_13936;
(statearr_13948[(11)] = inst_13879__$1);

return statearr_13948;
})();
if(cljs.core.truth_(inst_13880)){
var statearr_13952_15832 = state_13936__$1;
(statearr_13952_15832[(1)] = (30));

} else {
var statearr_13953_15833 = state_13936__$1;
(statearr_13953_15833[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (1))){
var state_13936__$1 = state_13936;
var statearr_13955_15834 = state_13936__$1;
(statearr_13955_15834[(2)] = null);

(statearr_13955_15834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (24))){
var inst_13826 = (state_13936[(7)]);
var inst_13845 = (state_13936[(2)]);
var inst_13846 = cljs.core.next(inst_13826);
var inst_13800 = inst_13846;
var inst_13801 = null;
var inst_13802 = (0);
var inst_13803 = (0);
var state_13936__$1 = (function (){var statearr_13956 = state_13936;
(statearr_13956[(13)] = inst_13845);

(statearr_13956[(14)] = inst_13800);

(statearr_13956[(15)] = inst_13801);

(statearr_13956[(16)] = inst_13802);

(statearr_13956[(17)] = inst_13803);

return statearr_13956;
})();
var statearr_13960_15835 = state_13936__$1;
(statearr_13960_15835[(2)] = null);

(statearr_13960_15835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (39))){
var state_13936__$1 = state_13936;
var statearr_13966_15836 = state_13936__$1;
(statearr_13966_15836[(2)] = null);

(statearr_13966_15836[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (4))){
var inst_13784 = (state_13936[(12)]);
var inst_13784__$1 = (state_13936[(2)]);
var inst_13787 = (inst_13784__$1 == null);
var state_13936__$1 = (function (){var statearr_13967 = state_13936;
(statearr_13967[(12)] = inst_13784__$1);

return statearr_13967;
})();
if(cljs.core.truth_(inst_13787)){
var statearr_13968_15837 = state_13936__$1;
(statearr_13968_15837[(1)] = (5));

} else {
var statearr_13972_15838 = state_13936__$1;
(statearr_13972_15838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (15))){
var inst_13803 = (state_13936[(17)]);
var inst_13800 = (state_13936[(14)]);
var inst_13801 = (state_13936[(15)]);
var inst_13802 = (state_13936[(16)]);
var inst_13819 = (state_13936[(2)]);
var inst_13822 = (inst_13803 + (1));
var tmp13963 = inst_13801;
var tmp13964 = inst_13802;
var tmp13965 = inst_13800;
var inst_13800__$1 = tmp13965;
var inst_13801__$1 = tmp13963;
var inst_13802__$1 = tmp13964;
var inst_13803__$1 = inst_13822;
var state_13936__$1 = (function (){var statearr_13974 = state_13936;
(statearr_13974[(18)] = inst_13819);

(statearr_13974[(14)] = inst_13800__$1);

(statearr_13974[(15)] = inst_13801__$1);

(statearr_13974[(16)] = inst_13802__$1);

(statearr_13974[(17)] = inst_13803__$1);

return statearr_13974;
})();
var statearr_13975_15844 = state_13936__$1;
(statearr_13975_15844[(2)] = null);

(statearr_13975_15844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (21))){
var inst_13849 = (state_13936[(2)]);
var state_13936__$1 = state_13936;
var statearr_13983_15848 = state_13936__$1;
(statearr_13983_15848[(2)] = inst_13849);

(statearr_13983_15848[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (31))){
var inst_13879 = (state_13936[(11)]);
var inst_13883 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_13879);
var state_13936__$1 = state_13936;
var statearr_13984_15852 = state_13936__$1;
(statearr_13984_15852[(2)] = inst_13883);

(statearr_13984_15852[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (32))){
var inst_13874 = (state_13936[(10)]);
var inst_13871 = (state_13936[(19)]);
var inst_13872 = (state_13936[(9)]);
var inst_13873 = (state_13936[(20)]);
var inst_13885 = (state_13936[(2)]);
var inst_13886 = (inst_13874 + (1));
var tmp13979 = inst_13872;
var tmp13980 = inst_13873;
var tmp13981 = inst_13871;
var inst_13871__$1 = tmp13981;
var inst_13872__$1 = tmp13979;
var inst_13873__$1 = tmp13980;
var inst_13874__$1 = inst_13886;
var state_13936__$1 = (function (){var statearr_13987 = state_13936;
(statearr_13987[(21)] = inst_13885);

(statearr_13987[(19)] = inst_13871__$1);

(statearr_13987[(9)] = inst_13872__$1);

(statearr_13987[(20)] = inst_13873__$1);

(statearr_13987[(10)] = inst_13874__$1);

return statearr_13987;
})();
var statearr_13988_15853 = state_13936__$1;
(statearr_13988_15853[(2)] = null);

(statearr_13988_15853[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (40))){
var inst_13902 = (state_13936[(22)]);
var inst_13906 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_13902);
var state_13936__$1 = state_13936;
var statearr_13989_15854 = state_13936__$1;
(statearr_13989_15854[(2)] = inst_13906);

(statearr_13989_15854[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (33))){
var inst_13892 = (state_13936[(23)]);
var inst_13894 = cljs.core.chunked_seq_QMARK_(inst_13892);
var state_13936__$1 = state_13936;
if(inst_13894){
var statearr_13991_15855 = state_13936__$1;
(statearr_13991_15855[(1)] = (36));

} else {
var statearr_13992_15856 = state_13936__$1;
(statearr_13992_15856[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (13))){
var inst_13812 = (state_13936[(24)]);
var inst_13815 = cljs.core.async.close_BANG_(inst_13812);
var state_13936__$1 = state_13936;
var statearr_13997_15860 = state_13936__$1;
(statearr_13997_15860[(2)] = inst_13815);

(statearr_13997_15860[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (22))){
var inst_13839 = (state_13936[(8)]);
var inst_13842 = cljs.core.async.close_BANG_(inst_13839);
var state_13936__$1 = state_13936;
var statearr_14002_15861 = state_13936__$1;
(statearr_14002_15861[(2)] = inst_13842);

(statearr_14002_15861[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (36))){
var inst_13892 = (state_13936[(23)]);
var inst_13897 = cljs.core.chunk_first(inst_13892);
var inst_13898 = cljs.core.chunk_rest(inst_13892);
var inst_13899 = cljs.core.count(inst_13897);
var inst_13871 = inst_13898;
var inst_13872 = inst_13897;
var inst_13873 = inst_13899;
var inst_13874 = (0);
var state_13936__$1 = (function (){var statearr_14003 = state_13936;
(statearr_14003[(19)] = inst_13871);

(statearr_14003[(9)] = inst_13872);

(statearr_14003[(20)] = inst_13873);

(statearr_14003[(10)] = inst_13874);

return statearr_14003;
})();
var statearr_14007_15862 = state_13936__$1;
(statearr_14007_15862[(2)] = null);

(statearr_14007_15862[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (41))){
var inst_13892 = (state_13936[(23)]);
var inst_13908 = (state_13936[(2)]);
var inst_13909 = cljs.core.next(inst_13892);
var inst_13871 = inst_13909;
var inst_13872 = null;
var inst_13873 = (0);
var inst_13874 = (0);
var state_13936__$1 = (function (){var statearr_14009 = state_13936;
(statearr_14009[(25)] = inst_13908);

(statearr_14009[(19)] = inst_13871);

(statearr_14009[(9)] = inst_13872);

(statearr_14009[(20)] = inst_13873);

(statearr_14009[(10)] = inst_13874);

return statearr_14009;
})();
var statearr_14010_15866 = state_13936__$1;
(statearr_14010_15866[(2)] = null);

(statearr_14010_15866[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (43))){
var state_13936__$1 = state_13936;
var statearr_14015_15869 = state_13936__$1;
(statearr_14015_15869[(2)] = null);

(statearr_14015_15869[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (29))){
var inst_13917 = (state_13936[(2)]);
var state_13936__$1 = state_13936;
var statearr_14016_15874 = state_13936__$1;
(statearr_14016_15874[(2)] = inst_13917);

(statearr_14016_15874[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (44))){
var inst_13926 = (state_13936[(2)]);
var state_13936__$1 = (function (){var statearr_14017 = state_13936;
(statearr_14017[(26)] = inst_13926);

return statearr_14017;
})();
var statearr_14018_15875 = state_13936__$1;
(statearr_14018_15875[(2)] = null);

(statearr_14018_15875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (6))){
var inst_13862 = (state_13936[(27)]);
var inst_13861 = cljs.core.deref(cs);
var inst_13862__$1 = cljs.core.keys(inst_13861);
var inst_13863 = cljs.core.count(inst_13862__$1);
var inst_13864 = cljs.core.reset_BANG_(dctr,inst_13863);
var inst_13870 = cljs.core.seq(inst_13862__$1);
var inst_13871 = inst_13870;
var inst_13872 = null;
var inst_13873 = (0);
var inst_13874 = (0);
var state_13936__$1 = (function (){var statearr_14024 = state_13936;
(statearr_14024[(27)] = inst_13862__$1);

(statearr_14024[(28)] = inst_13864);

(statearr_14024[(19)] = inst_13871);

(statearr_14024[(9)] = inst_13872);

(statearr_14024[(20)] = inst_13873);

(statearr_14024[(10)] = inst_13874);

return statearr_14024;
})();
var statearr_14025_15881 = state_13936__$1;
(statearr_14025_15881[(2)] = null);

(statearr_14025_15881[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (28))){
var inst_13871 = (state_13936[(19)]);
var inst_13892 = (state_13936[(23)]);
var inst_13892__$1 = cljs.core.seq(inst_13871);
var state_13936__$1 = (function (){var statearr_14026 = state_13936;
(statearr_14026[(23)] = inst_13892__$1);

return statearr_14026;
})();
if(inst_13892__$1){
var statearr_14027_15887 = state_13936__$1;
(statearr_14027_15887[(1)] = (33));

} else {
var statearr_14028_15891 = state_13936__$1;
(statearr_14028_15891[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (25))){
var inst_13874 = (state_13936[(10)]);
var inst_13873 = (state_13936[(20)]);
var inst_13876 = (inst_13874 < inst_13873);
var inst_13877 = inst_13876;
var state_13936__$1 = state_13936;
if(cljs.core.truth_(inst_13877)){
var statearr_14029_15899 = state_13936__$1;
(statearr_14029_15899[(1)] = (27));

} else {
var statearr_14030_15906 = state_13936__$1;
(statearr_14030_15906[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (34))){
var state_13936__$1 = state_13936;
var statearr_14032_15907 = state_13936__$1;
(statearr_14032_15907[(2)] = null);

(statearr_14032_15907[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (17))){
var state_13936__$1 = state_13936;
var statearr_14035_15908 = state_13936__$1;
(statearr_14035_15908[(2)] = null);

(statearr_14035_15908[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (3))){
var inst_13931 = (state_13936[(2)]);
var state_13936__$1 = state_13936;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13936__$1,inst_13931);
} else {
if((state_val_13937 === (12))){
var inst_13854 = (state_13936[(2)]);
var state_13936__$1 = state_13936;
var statearr_14039_15912 = state_13936__$1;
(statearr_14039_15912[(2)] = inst_13854);

(statearr_14039_15912[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (2))){
var state_13936__$1 = state_13936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13936__$1,(4),ch);
} else {
if((state_val_13937 === (23))){
var state_13936__$1 = state_13936;
var statearr_14044_15925 = state_13936__$1;
(statearr_14044_15925[(2)] = null);

(statearr_14044_15925[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (35))){
var inst_13915 = (state_13936[(2)]);
var state_13936__$1 = state_13936;
var statearr_14045_15927 = state_13936__$1;
(statearr_14045_15927[(2)] = inst_13915);

(statearr_14045_15927[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (19))){
var inst_13826 = (state_13936[(7)]);
var inst_13830 = cljs.core.chunk_first(inst_13826);
var inst_13831 = cljs.core.chunk_rest(inst_13826);
var inst_13832 = cljs.core.count(inst_13830);
var inst_13800 = inst_13831;
var inst_13801 = inst_13830;
var inst_13802 = inst_13832;
var inst_13803 = (0);
var state_13936__$1 = (function (){var statearr_14047 = state_13936;
(statearr_14047[(14)] = inst_13800);

(statearr_14047[(15)] = inst_13801);

(statearr_14047[(16)] = inst_13802);

(statearr_14047[(17)] = inst_13803);

return statearr_14047;
})();
var statearr_14048_15936 = state_13936__$1;
(statearr_14048_15936[(2)] = null);

(statearr_14048_15936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (11))){
var inst_13800 = (state_13936[(14)]);
var inst_13826 = (state_13936[(7)]);
var inst_13826__$1 = cljs.core.seq(inst_13800);
var state_13936__$1 = (function (){var statearr_14049 = state_13936;
(statearr_14049[(7)] = inst_13826__$1);

return statearr_14049;
})();
if(inst_13826__$1){
var statearr_14050_15937 = state_13936__$1;
(statearr_14050_15937[(1)] = (16));

} else {
var statearr_14051_15938 = state_13936__$1;
(statearr_14051_15938[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (9))){
var inst_13859 = (state_13936[(2)]);
var state_13936__$1 = state_13936;
var statearr_14052_15939 = state_13936__$1;
(statearr_14052_15939[(2)] = inst_13859);

(statearr_14052_15939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (5))){
var inst_13798 = cljs.core.deref(cs);
var inst_13799 = cljs.core.seq(inst_13798);
var inst_13800 = inst_13799;
var inst_13801 = null;
var inst_13802 = (0);
var inst_13803 = (0);
var state_13936__$1 = (function (){var statearr_14053 = state_13936;
(statearr_14053[(14)] = inst_13800);

(statearr_14053[(15)] = inst_13801);

(statearr_14053[(16)] = inst_13802);

(statearr_14053[(17)] = inst_13803);

return statearr_14053;
})();
var statearr_14054_15941 = state_13936__$1;
(statearr_14054_15941[(2)] = null);

(statearr_14054_15941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (14))){
var state_13936__$1 = state_13936;
var statearr_14055_15942 = state_13936__$1;
(statearr_14055_15942[(2)] = null);

(statearr_14055_15942[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (45))){
var inst_13923 = (state_13936[(2)]);
var state_13936__$1 = state_13936;
var statearr_14056_15943 = state_13936__$1;
(statearr_14056_15943[(2)] = inst_13923);

(statearr_14056_15943[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (26))){
var inst_13862 = (state_13936[(27)]);
var inst_13919 = (state_13936[(2)]);
var inst_13920 = cljs.core.seq(inst_13862);
var state_13936__$1 = (function (){var statearr_14057 = state_13936;
(statearr_14057[(29)] = inst_13919);

return statearr_14057;
})();
if(inst_13920){
var statearr_14059_15948 = state_13936__$1;
(statearr_14059_15948[(1)] = (42));

} else {
var statearr_14060_15953 = state_13936__$1;
(statearr_14060_15953[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (16))){
var inst_13826 = (state_13936[(7)]);
var inst_13828 = cljs.core.chunked_seq_QMARK_(inst_13826);
var state_13936__$1 = state_13936;
if(inst_13828){
var statearr_14062_15954 = state_13936__$1;
(statearr_14062_15954[(1)] = (19));

} else {
var statearr_14063_15955 = state_13936__$1;
(statearr_14063_15955[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (38))){
var inst_13912 = (state_13936[(2)]);
var state_13936__$1 = state_13936;
var statearr_14064_15956 = state_13936__$1;
(statearr_14064_15956[(2)] = inst_13912);

(statearr_14064_15956[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (30))){
var state_13936__$1 = state_13936;
var statearr_14065_15961 = state_13936__$1;
(statearr_14065_15961[(2)] = null);

(statearr_14065_15961[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (10))){
var inst_13801 = (state_13936[(15)]);
var inst_13803 = (state_13936[(17)]);
var inst_13811 = cljs.core._nth(inst_13801,inst_13803);
var inst_13812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13811,(0),null);
var inst_13813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13811,(1),null);
var state_13936__$1 = (function (){var statearr_14066 = state_13936;
(statearr_14066[(24)] = inst_13812);

return statearr_14066;
})();
if(cljs.core.truth_(inst_13813)){
var statearr_14067_15966 = state_13936__$1;
(statearr_14067_15966[(1)] = (13));

} else {
var statearr_14068_15971 = state_13936__$1;
(statearr_14068_15971[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (18))){
var inst_13852 = (state_13936[(2)]);
var state_13936__$1 = state_13936;
var statearr_14069_15972 = state_13936__$1;
(statearr_14069_15972[(2)] = inst_13852);

(statearr_14069_15972[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (42))){
var state_13936__$1 = state_13936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13936__$1,(45),dchan);
} else {
if((state_val_13937 === (37))){
var inst_13892 = (state_13936[(23)]);
var inst_13902 = (state_13936[(22)]);
var inst_13784 = (state_13936[(12)]);
var inst_13902__$1 = cljs.core.first(inst_13892);
var inst_13903 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_13902__$1,inst_13784,done);
var state_13936__$1 = (function (){var statearr_14074 = state_13936;
(statearr_14074[(22)] = inst_13902__$1);

return statearr_14074;
})();
if(cljs.core.truth_(inst_13903)){
var statearr_14075_15978 = state_13936__$1;
(statearr_14075_15978[(1)] = (39));

} else {
var statearr_14076_15979 = state_13936__$1;
(statearr_14076_15979[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (8))){
var inst_13803 = (state_13936[(17)]);
var inst_13802 = (state_13936[(16)]);
var inst_13805 = (inst_13803 < inst_13802);
var inst_13806 = inst_13805;
var state_13936__$1 = state_13936;
if(cljs.core.truth_(inst_13806)){
var statearr_14077_15985 = state_13936__$1;
(statearr_14077_15985[(1)] = (10));

} else {
var statearr_14078_15986 = state_13936__$1;
(statearr_14078_15986[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__11852__auto__ = null;
var cljs$core$async$mult_$_state_machine__11852__auto____0 = (function (){
var statearr_14079 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14079[(0)] = cljs$core$async$mult_$_state_machine__11852__auto__);

(statearr_14079[(1)] = (1));

return statearr_14079;
});
var cljs$core$async$mult_$_state_machine__11852__auto____1 = (function (state_13936){
while(true){
var ret_value__11853__auto__ = (function (){try{while(true){
var result__11854__auto__ = switch__11851__auto__(state_13936);
if(cljs.core.keyword_identical_QMARK_(result__11854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11854__auto__;
}
break;
}
}catch (e14080){var ex__11855__auto__ = e14080;
var statearr_14081_15992 = state_13936;
(statearr_14081_15992[(2)] = ex__11855__auto__);


if(cljs.core.seq((state_13936[(4)]))){
var statearr_14082_15994 = state_13936;
(statearr_14082_15994[(1)] = cljs.core.first((state_13936[(4)])));

} else {
throw ex__11855__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15995 = state_13936;
state_13936 = G__15995;
continue;
} else {
return ret_value__11853__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__11852__auto__ = function(state_13936){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__11852__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__11852__auto____1.call(this,state_13936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__11852__auto____0;
cljs$core$async$mult_$_state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__11852__auto____1;
return cljs$core$async$mult_$_state_machine__11852__auto__;
})()
})();
var state__12712__auto__ = (function (){var statearr_14083 = f__12711__auto__();
(statearr_14083[(6)] = c__12710__auto___15820);

return statearr_14083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12712__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__14085 = arguments.length;
switch (G__14085) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_16003 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__(m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__(m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_16003(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_16004 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__(m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__(m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_16004(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_16007 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5374__auto__(m));
} else {
var m__5372__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5372__auto__(m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_16007(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_16011 = (function (m,state_map){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5374__auto__(m,state_map));
} else {
var m__5372__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5372__auto__(m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_16011(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_16013 = (function (m,mode){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5374__auto__(m,mode));
} else {
var m__5372__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5372__auto__(m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_16013(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___16016 = arguments.length;
var i__5750__auto___16017 = (0);
while(true){
if((i__5750__auto___16017 < len__5749__auto___16016)){
args__5755__auto__.push((arguments[i__5750__auto___16017]));

var G__16018 = (i__5750__auto___16017 + (1));
i__5750__auto___16017 = G__16018;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14102){
var map__14103 = p__14102;
var map__14103__$1 = cljs.core.__destructure_map(map__14103);
var opts = map__14103__$1;
var statearr_14105_16021 = state;
(statearr_14105_16021[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_14107_16022 = state;
(statearr_14107_16022[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_14108_16024 = state;
(statearr_14108_16024[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14098){
var G__14099 = cljs.core.first(seq14098);
var seq14098__$1 = cljs.core.next(seq14098);
var G__14100 = cljs.core.first(seq14098__$1);
var seq14098__$2 = cljs.core.next(seq14098__$1);
var G__14101 = cljs.core.first(seq14098__$2);
var seq14098__$3 = cljs.core.next(seq14098__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14099,G__14100,G__14101,seq14098__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14114 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14115){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14115 = meta14115;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14116,meta14115__$1){
var self__ = this;
var _14116__$1 = this;
return (new cljs.core.async.t_cljs$core$async14114(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14115__$1));
}));

(cljs.core.async.t_cljs$core$async14114.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14116){
var self__ = this;
var _14116__$1 = this;
return self__.meta14115;
}));

(cljs.core.async.t_cljs$core$async14114.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14114.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async14114.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14114.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed());
}));

(cljs.core.async.t_cljs$core$async14114.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed());
}));

(cljs.core.async.t_cljs$core$async14114.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed());
}));

(cljs.core.async.t_cljs$core$async14114.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed());
}));

(cljs.core.async.t_cljs$core$async14114.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes(mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed());
}));

(cljs.core.async.t_cljs$core$async14114.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta14115","meta14115",-1786038360,null)], null);
}));

(cljs.core.async.t_cljs$core$async14114.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14114.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14114");

(cljs.core.async.t_cljs$core$async14114.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async14114");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14114.
 */
cljs.core.async.__GT_t_cljs$core$async14114 = (function cljs$core$async$__GT_t_cljs$core$async14114(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14115){
return (new cljs.core.async.t_cljs$core$async14114(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14115));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr(v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async14114(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__12710__auto___16036 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12711__auto__ = (function (){var switch__11851__auto__ = (function (state_14196){
var state_val_14197 = (state_14196[(1)]);
if((state_val_14197 === (7))){
var inst_14155 = (state_14196[(2)]);
var state_14196__$1 = state_14196;
if(cljs.core.truth_(inst_14155)){
var statearr_14198_16037 = state_14196__$1;
(statearr_14198_16037[(1)] = (8));

} else {
var statearr_14199_16038 = state_14196__$1;
(statearr_14199_16038[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14197 === (20))){
var inst_14148 = (state_14196[(7)]);
var state_14196__$1 = state_14196;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14196__$1,(23),out,inst_14148);
} else {
if((state_val_14197 === (1))){
var inst_14127 = calc_state();
var inst_14128 = cljs.core.__destructure_map(inst_14127);
var inst_14129 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14128,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14130 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14128,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14128,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14133 = inst_14127;
var state_14196__$1 = (function (){var statearr_14213 = state_14196;
(statearr_14213[(8)] = inst_14129);

(statearr_14213[(9)] = inst_14130);

(statearr_14213[(10)] = inst_14131);

(statearr_14213[(11)] = inst_14133);

return statearr_14213;
})();
var statearr_14214_16042 = state_14196__$1;
(statearr_14214_16042[(2)] = null);

(statearr_14214_16042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14197 === (24))){
var inst_14139 = (state_14196[(12)]);
var inst_14133 = inst_14139;
var state_14196__$1 = (function (){var statearr_14221 = state_14196;
(statearr_14221[(11)] = inst_14133);

return statearr_14221;
})();
var statearr_14222_16043 = state_14196__$1;
(statearr_14222_16043[(2)] = null);

(statearr_14222_16043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14197 === (4))){
var inst_14148 = (state_14196[(7)]);
var inst_14150 = (state_14196[(13)]);
var inst_14147 = (state_14196[(2)]);
var inst_14148__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14147,(0),null);
var inst_14149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14147,(1),null);
var inst_14150__$1 = (inst_14148__$1 == null);
var state_14196__$1 = (function (){var statearr_14223 = state_14196;
(statearr_14223[(7)] = inst_14148__$1);

(statearr_14223[(14)] = inst_14149);

(statearr_14223[(13)] = inst_14150__$1);

return statearr_14223;
})();
if(cljs.core.truth_(inst_14150__$1)){
var statearr_14224_16044 = state_14196__$1;
(statearr_14224_16044[(1)] = (5));

} else {
var statearr_14225_16045 = state_14196__$1;
(statearr_14225_16045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14197 === (15))){
var inst_14140 = (state_14196[(15)]);
var inst_14169 = (state_14196[(16)]);
var inst_14169__$1 = cljs.core.empty_QMARK_(inst_14140);
var state_14196__$1 = (function (){var statearr_14228 = state_14196;
(statearr_14228[(16)] = inst_14169__$1);

return statearr_14228;
})();
if(inst_14169__$1){
var statearr_14233_16046 = state_14196__$1;
(statearr_14233_16046[(1)] = (17));

} else {
var statearr_14237_16048 = state_14196__$1;
(statearr_14237_16048[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14197 === (21))){
var inst_14139 = (state_14196[(12)]);
var inst_14133 = inst_14139;
var state_14196__$1 = (function (){var statearr_14238 = state_14196;
(statearr_14238[(11)] = inst_14133);

return statearr_14238;
})();
var statearr_14239_16049 = state_14196__$1;
(statearr_14239_16049[(2)] = null);

(statearr_14239_16049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14197 === (13))){
var inst_14162 = (state_14196[(2)]);
var inst_14163 = calc_state();
var inst_14133 = inst_14163;
var state_14196__$1 = (function (){var statearr_14260 = state_14196;
(statearr_14260[(17)] = inst_14162);

(statearr_14260[(11)] = inst_14133);

return statearr_14260;
})();
var statearr_14268_16054 = state_14196__$1;
(statearr_14268_16054[(2)] = null);

(statearr_14268_16054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14197 === (22))){
var inst_14190 = (state_14196[(2)]);
var state_14196__$1 = state_14196;
var statearr_14269_16059 = state_14196__$1;
(statearr_14269_16059[(2)] = inst_14190);

(statearr_14269_16059[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14197 === (6))){
var inst_14149 = (state_14196[(14)]);
var inst_14153 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14149,change);
var state_14196__$1 = state_14196;
var statearr_14270_16060 = state_14196__$1;
(statearr_14270_16060[(2)] = inst_14153);

(statearr_14270_16060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14197 === (25))){
var state_14196__$1 = state_14196;
var statearr_14274_16061 = state_14196__$1;
(statearr_14274_16061[(2)] = null);

(statearr_14274_16061[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14197 === (17))){
var inst_14141 = (state_14196[(18)]);
var inst_14149 = (state_14196[(14)]);
var inst_14171 = (inst_14141.cljs$core$IFn$_invoke$arity$1 ? inst_14141.cljs$core$IFn$_invoke$arity$1(inst_14149) : inst_14141(inst_14149));
var inst_14172 = cljs.core.not(inst_14171);
var state_14196__$1 = state_14196;
var statearr_14275_16062 = state_14196__$1;
(statearr_14275_16062[(2)] = inst_14172);

(statearr_14275_16062[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14197 === (3))){
var inst_14194 = (state_14196[(2)]);
var state_14196__$1 = state_14196;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14196__$1,inst_14194);
} else {
if((state_val_14197 === (12))){
var state_14196__$1 = state_14196;
var statearr_14276_16068 = state_14196__$1;
(statearr_14276_16068[(2)] = null);

(statearr_14276_16068[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14197 === (2))){
var inst_14133 = (state_14196[(11)]);
var inst_14139 = (state_14196[(12)]);
var inst_14139__$1 = cljs.core.__destructure_map(inst_14133);
var inst_14140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14139__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14139__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14139__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14196__$1 = (function (){var statearr_14279 = state_14196;
(statearr_14279[(12)] = inst_14139__$1);

(statearr_14279[(15)] = inst_14140);

(statearr_14279[(18)] = inst_14141);

return statearr_14279;
})();
return cljs.core.async.ioc_alts_BANG_(state_14196__$1,(4),inst_14142);
} else {
if((state_val_14197 === (23))){
var inst_14181 = (state_14196[(2)]);
var state_14196__$1 = state_14196;
if(cljs.core.truth_(inst_14181)){
var statearr_14282_16079 = state_14196__$1;
(statearr_14282_16079[(1)] = (24));

} else {
var statearr_14283_16084 = state_14196__$1;
(statearr_14283_16084[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14197 === (19))){
var inst_14175 = (state_14196[(2)]);
var state_14196__$1 = state_14196;
var statearr_14284_16085 = state_14196__$1;
(statearr_14284_16085[(2)] = inst_14175);

(statearr_14284_16085[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14197 === (11))){
var inst_14149 = (state_14196[(14)]);
var inst_14159 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_14149);
var state_14196__$1 = state_14196;
var statearr_14289_16090 = state_14196__$1;
(statearr_14289_16090[(2)] = inst_14159);

(statearr_14289_16090[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14197 === (9))){
var inst_14140 = (state_14196[(15)]);
var inst_14149 = (state_14196[(14)]);
var inst_14166 = (state_14196[(19)]);
var inst_14166__$1 = (inst_14140.cljs$core$IFn$_invoke$arity$1 ? inst_14140.cljs$core$IFn$_invoke$arity$1(inst_14149) : inst_14140(inst_14149));
var state_14196__$1 = (function (){var statearr_14290 = state_14196;
(statearr_14290[(19)] = inst_14166__$1);

return statearr_14290;
})();
if(cljs.core.truth_(inst_14166__$1)){
var statearr_14291_16091 = state_14196__$1;
(statearr_14291_16091[(1)] = (14));

} else {
var statearr_14292_16092 = state_14196__$1;
(statearr_14292_16092[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14197 === (5))){
var inst_14150 = (state_14196[(13)]);
var state_14196__$1 = state_14196;
var statearr_14295_16093 = state_14196__$1;
(statearr_14295_16093[(2)] = inst_14150);

(statearr_14295_16093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14197 === (14))){
var inst_14166 = (state_14196[(19)]);
var state_14196__$1 = state_14196;
var statearr_14296_16099 = state_14196__$1;
(statearr_14296_16099[(2)] = inst_14166);

(statearr_14296_16099[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14197 === (26))){
var inst_14186 = (state_14196[(2)]);
var state_14196__$1 = state_14196;
var statearr_14297_16100 = state_14196__$1;
(statearr_14297_16100[(2)] = inst_14186);

(statearr_14297_16100[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14197 === (16))){
var inst_14177 = (state_14196[(2)]);
var state_14196__$1 = state_14196;
if(cljs.core.truth_(inst_14177)){
var statearr_14300_16101 = state_14196__$1;
(statearr_14300_16101[(1)] = (20));

} else {
var statearr_14301_16102 = state_14196__$1;
(statearr_14301_16102[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14197 === (10))){
var inst_14192 = (state_14196[(2)]);
var state_14196__$1 = state_14196;
var statearr_14302_16103 = state_14196__$1;
(statearr_14302_16103[(2)] = inst_14192);

(statearr_14302_16103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14197 === (18))){
var inst_14169 = (state_14196[(16)]);
var state_14196__$1 = state_14196;
var statearr_14306_16104 = state_14196__$1;
(statearr_14306_16104[(2)] = inst_14169);

(statearr_14306_16104[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14197 === (8))){
var inst_14148 = (state_14196[(7)]);
var inst_14157 = (inst_14148 == null);
var state_14196__$1 = state_14196;
if(cljs.core.truth_(inst_14157)){
var statearr_14312_16105 = state_14196__$1;
(statearr_14312_16105[(1)] = (11));

} else {
var statearr_14313_16106 = state_14196__$1;
(statearr_14313_16106[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__11852__auto__ = null;
var cljs$core$async$mix_$_state_machine__11852__auto____0 = (function (){
var statearr_14316 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14316[(0)] = cljs$core$async$mix_$_state_machine__11852__auto__);

(statearr_14316[(1)] = (1));

return statearr_14316;
});
var cljs$core$async$mix_$_state_machine__11852__auto____1 = (function (state_14196){
while(true){
var ret_value__11853__auto__ = (function (){try{while(true){
var result__11854__auto__ = switch__11851__auto__(state_14196);
if(cljs.core.keyword_identical_QMARK_(result__11854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11854__auto__;
}
break;
}
}catch (e14317){var ex__11855__auto__ = e14317;
var statearr_14318_16111 = state_14196;
(statearr_14318_16111[(2)] = ex__11855__auto__);


if(cljs.core.seq((state_14196[(4)]))){
var statearr_14320_16113 = state_14196;
(statearr_14320_16113[(1)] = cljs.core.first((state_14196[(4)])));

} else {
throw ex__11855__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16120 = state_14196;
state_14196 = G__16120;
continue;
} else {
return ret_value__11853__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__11852__auto__ = function(state_14196){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__11852__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__11852__auto____1.call(this,state_14196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__11852__auto____0;
cljs$core$async$mix_$_state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__11852__auto____1;
return cljs$core$async$mix_$_state_machine__11852__auto__;
})()
})();
var state__12712__auto__ = (function (){var statearr_14322 = f__12711__auto__();
(statearr_14322[(6)] = c__12710__auto___16036);

return statearr_14322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12712__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_16206 = (function (p,v,ch,close_QMARK_){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5374__auto__(p,v,ch,close_QMARK_));
} else {
var m__5372__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5372__auto__(p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_16206(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_16232 = (function (p,v,ch){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5374__auto__(p,v,ch));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5372__auto__(p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_16232(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_16248 = (function() {
var G__16249 = null;
var G__16249__1 = (function (p){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5374__auto__(p));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5372__auto__(p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__16249__2 = (function (p,v){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5374__auto__(p,v));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5372__auto__(p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__16249 = function(p,v){
switch(arguments.length){
case 1:
return G__16249__1.call(this,p);
case 2:
return G__16249__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16249.cljs$core$IFn$_invoke$arity$1 = G__16249__1;
G__16249.cljs$core$IFn$_invoke$arity$2 = G__16249__2;
return G__16249;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__14339 = arguments.length;
switch (G__14339) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16248(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16248(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14352 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14353){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14353 = meta14353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14354,meta14353__$1){
var self__ = this;
var _14354__$1 = this;
return (new cljs.core.async.t_cljs$core$async14352(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14353__$1));
}));

(cljs.core.async.t_cljs$core$async14352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14354){
var self__ = this;
var _14354__$1 = this;
return self__.meta14353;
}));

(cljs.core.async.t_cljs$core$async14352.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14352.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14352.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14352.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult(topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async14352.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async14352.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async14352.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async14352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14353","meta14353",-208310169,null)], null);
}));

(cljs.core.async.t_cljs$core$async14352.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14352");

(cljs.core.async.t_cljs$core$async14352.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async14352");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14352.
 */
cljs.core.async.__GT_t_cljs$core$async14352 = (function cljs$core$async$__GT_t_cljs$core$async14352(ch,topic_fn,buf_fn,mults,ensure_mult,meta14353){
return (new cljs.core.async.t_cljs$core$async14352(ch,topic_fn,buf_fn,mults,ensure_mult,meta14353));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__14347 = arguments.length;
switch (G__14347) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__14341_SHARP_){
if(cljs.core.truth_((p1__14341_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14341_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__14341_SHARP_(topic)))){
return p1__14341_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14341_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn(topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async14352(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__12710__auto___16315 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12711__auto__ = (function (){var switch__11851__auto__ = (function (state_14438){
var state_val_14439 = (state_14438[(1)]);
if((state_val_14439 === (7))){
var inst_14434 = (state_14438[(2)]);
var state_14438__$1 = state_14438;
var statearr_14441_16322 = state_14438__$1;
(statearr_14441_16322[(2)] = inst_14434);

(statearr_14441_16322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (20))){
var state_14438__$1 = state_14438;
var statearr_14442_16323 = state_14438__$1;
(statearr_14442_16323[(2)] = null);

(statearr_14442_16323[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (1))){
var state_14438__$1 = state_14438;
var statearr_14443_16324 = state_14438__$1;
(statearr_14443_16324[(2)] = null);

(statearr_14443_16324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (24))){
var inst_14417 = (state_14438[(7)]);
var inst_14426 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_14417);
var state_14438__$1 = state_14438;
var statearr_14444_16326 = state_14438__$1;
(statearr_14444_16326[(2)] = inst_14426);

(statearr_14444_16326[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (4))){
var inst_14366 = (state_14438[(8)]);
var inst_14366__$1 = (state_14438[(2)]);
var inst_14367 = (inst_14366__$1 == null);
var state_14438__$1 = (function (){var statearr_14445 = state_14438;
(statearr_14445[(8)] = inst_14366__$1);

return statearr_14445;
})();
if(cljs.core.truth_(inst_14367)){
var statearr_14446_16327 = state_14438__$1;
(statearr_14446_16327[(1)] = (5));

} else {
var statearr_14447_16328 = state_14438__$1;
(statearr_14447_16328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (15))){
var inst_14411 = (state_14438[(2)]);
var state_14438__$1 = state_14438;
var statearr_14448_16329 = state_14438__$1;
(statearr_14448_16329[(2)] = inst_14411);

(statearr_14448_16329[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (21))){
var inst_14431 = (state_14438[(2)]);
var state_14438__$1 = (function (){var statearr_14449 = state_14438;
(statearr_14449[(9)] = inst_14431);

return statearr_14449;
})();
var statearr_14451_16335 = state_14438__$1;
(statearr_14451_16335[(2)] = null);

(statearr_14451_16335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (13))){
var inst_14393 = (state_14438[(10)]);
var inst_14395 = cljs.core.chunked_seq_QMARK_(inst_14393);
var state_14438__$1 = state_14438;
if(inst_14395){
var statearr_14455_16336 = state_14438__$1;
(statearr_14455_16336[(1)] = (16));

} else {
var statearr_14459_16337 = state_14438__$1;
(statearr_14459_16337[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (22))){
var inst_14423 = (state_14438[(2)]);
var state_14438__$1 = state_14438;
if(cljs.core.truth_(inst_14423)){
var statearr_14460_16338 = state_14438__$1;
(statearr_14460_16338[(1)] = (23));

} else {
var statearr_14461_16339 = state_14438__$1;
(statearr_14461_16339[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (6))){
var inst_14366 = (state_14438[(8)]);
var inst_14417 = (state_14438[(7)]);
var inst_14419 = (state_14438[(11)]);
var inst_14417__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_14366) : topic_fn(inst_14366));
var inst_14418 = cljs.core.deref(mults);
var inst_14419__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14418,inst_14417__$1);
var state_14438__$1 = (function (){var statearr_14464 = state_14438;
(statearr_14464[(7)] = inst_14417__$1);

(statearr_14464[(11)] = inst_14419__$1);

return statearr_14464;
})();
if(cljs.core.truth_(inst_14419__$1)){
var statearr_14469_16340 = state_14438__$1;
(statearr_14469_16340[(1)] = (19));

} else {
var statearr_14470_16341 = state_14438__$1;
(statearr_14470_16341[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (25))){
var inst_14428 = (state_14438[(2)]);
var state_14438__$1 = state_14438;
var statearr_14471_16342 = state_14438__$1;
(statearr_14471_16342[(2)] = inst_14428);

(statearr_14471_16342[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (17))){
var inst_14393 = (state_14438[(10)]);
var inst_14402 = cljs.core.first(inst_14393);
var inst_14403 = cljs.core.async.muxch_STAR_(inst_14402);
var inst_14404 = cljs.core.async.close_BANG_(inst_14403);
var inst_14405 = cljs.core.next(inst_14393);
var inst_14379 = inst_14405;
var inst_14380 = null;
var inst_14381 = (0);
var inst_14382 = (0);
var state_14438__$1 = (function (){var statearr_14476 = state_14438;
(statearr_14476[(12)] = inst_14404);

(statearr_14476[(13)] = inst_14379);

(statearr_14476[(14)] = inst_14380);

(statearr_14476[(15)] = inst_14381);

(statearr_14476[(16)] = inst_14382);

return statearr_14476;
})();
var statearr_14477_16348 = state_14438__$1;
(statearr_14477_16348[(2)] = null);

(statearr_14477_16348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (3))){
var inst_14436 = (state_14438[(2)]);
var state_14438__$1 = state_14438;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14438__$1,inst_14436);
} else {
if((state_val_14439 === (12))){
var inst_14413 = (state_14438[(2)]);
var state_14438__$1 = state_14438;
var statearr_14479_16350 = state_14438__$1;
(statearr_14479_16350[(2)] = inst_14413);

(statearr_14479_16350[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (2))){
var state_14438__$1 = state_14438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14438__$1,(4),ch);
} else {
if((state_val_14439 === (23))){
var state_14438__$1 = state_14438;
var statearr_14480_16351 = state_14438__$1;
(statearr_14480_16351[(2)] = null);

(statearr_14480_16351[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (19))){
var inst_14419 = (state_14438[(11)]);
var inst_14366 = (state_14438[(8)]);
var inst_14421 = cljs.core.async.muxch_STAR_(inst_14419);
var state_14438__$1 = state_14438;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14438__$1,(22),inst_14421,inst_14366);
} else {
if((state_val_14439 === (11))){
var inst_14379 = (state_14438[(13)]);
var inst_14393 = (state_14438[(10)]);
var inst_14393__$1 = cljs.core.seq(inst_14379);
var state_14438__$1 = (function (){var statearr_14482 = state_14438;
(statearr_14482[(10)] = inst_14393__$1);

return statearr_14482;
})();
if(inst_14393__$1){
var statearr_14483_16354 = state_14438__$1;
(statearr_14483_16354[(1)] = (13));

} else {
var statearr_14484_16356 = state_14438__$1;
(statearr_14484_16356[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (9))){
var inst_14415 = (state_14438[(2)]);
var state_14438__$1 = state_14438;
var statearr_14489_16357 = state_14438__$1;
(statearr_14489_16357[(2)] = inst_14415);

(statearr_14489_16357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (5))){
var inst_14373 = cljs.core.deref(mults);
var inst_14374 = cljs.core.vals(inst_14373);
var inst_14375 = cljs.core.seq(inst_14374);
var inst_14379 = inst_14375;
var inst_14380 = null;
var inst_14381 = (0);
var inst_14382 = (0);
var state_14438__$1 = (function (){var statearr_14490 = state_14438;
(statearr_14490[(13)] = inst_14379);

(statearr_14490[(14)] = inst_14380);

(statearr_14490[(15)] = inst_14381);

(statearr_14490[(16)] = inst_14382);

return statearr_14490;
})();
var statearr_14491_16360 = state_14438__$1;
(statearr_14491_16360[(2)] = null);

(statearr_14491_16360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (14))){
var state_14438__$1 = state_14438;
var statearr_14495_16361 = state_14438__$1;
(statearr_14495_16361[(2)] = null);

(statearr_14495_16361[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (16))){
var inst_14393 = (state_14438[(10)]);
var inst_14397 = cljs.core.chunk_first(inst_14393);
var inst_14398 = cljs.core.chunk_rest(inst_14393);
var inst_14399 = cljs.core.count(inst_14397);
var inst_14379 = inst_14398;
var inst_14380 = inst_14397;
var inst_14381 = inst_14399;
var inst_14382 = (0);
var state_14438__$1 = (function (){var statearr_14496 = state_14438;
(statearr_14496[(13)] = inst_14379);

(statearr_14496[(14)] = inst_14380);

(statearr_14496[(15)] = inst_14381);

(statearr_14496[(16)] = inst_14382);

return statearr_14496;
})();
var statearr_14497_16368 = state_14438__$1;
(statearr_14497_16368[(2)] = null);

(statearr_14497_16368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (10))){
var inst_14380 = (state_14438[(14)]);
var inst_14382 = (state_14438[(16)]);
var inst_14379 = (state_14438[(13)]);
var inst_14381 = (state_14438[(15)]);
var inst_14387 = cljs.core._nth(inst_14380,inst_14382);
var inst_14388 = cljs.core.async.muxch_STAR_(inst_14387);
var inst_14389 = cljs.core.async.close_BANG_(inst_14388);
var inst_14390 = (inst_14382 + (1));
var tmp14492 = inst_14380;
var tmp14493 = inst_14381;
var tmp14494 = inst_14379;
var inst_14379__$1 = tmp14494;
var inst_14380__$1 = tmp14492;
var inst_14381__$1 = tmp14493;
var inst_14382__$1 = inst_14390;
var state_14438__$1 = (function (){var statearr_14498 = state_14438;
(statearr_14498[(17)] = inst_14389);

(statearr_14498[(13)] = inst_14379__$1);

(statearr_14498[(14)] = inst_14380__$1);

(statearr_14498[(15)] = inst_14381__$1);

(statearr_14498[(16)] = inst_14382__$1);

return statearr_14498;
})();
var statearr_14499_16374 = state_14438__$1;
(statearr_14499_16374[(2)] = null);

(statearr_14499_16374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (18))){
var inst_14408 = (state_14438[(2)]);
var state_14438__$1 = state_14438;
var statearr_14501_16375 = state_14438__$1;
(statearr_14501_16375[(2)] = inst_14408);

(statearr_14501_16375[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14439 === (8))){
var inst_14382 = (state_14438[(16)]);
var inst_14381 = (state_14438[(15)]);
var inst_14384 = (inst_14382 < inst_14381);
var inst_14385 = inst_14384;
var state_14438__$1 = state_14438;
if(cljs.core.truth_(inst_14385)){
var statearr_14503_16380 = state_14438__$1;
(statearr_14503_16380[(1)] = (10));

} else {
var statearr_14504_16381 = state_14438__$1;
(statearr_14504_16381[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11852__auto__ = null;
var cljs$core$async$state_machine__11852__auto____0 = (function (){
var statearr_14505 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14505[(0)] = cljs$core$async$state_machine__11852__auto__);

(statearr_14505[(1)] = (1));

return statearr_14505;
});
var cljs$core$async$state_machine__11852__auto____1 = (function (state_14438){
while(true){
var ret_value__11853__auto__ = (function (){try{while(true){
var result__11854__auto__ = switch__11851__auto__(state_14438);
if(cljs.core.keyword_identical_QMARK_(result__11854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11854__auto__;
}
break;
}
}catch (e14506){var ex__11855__auto__ = e14506;
var statearr_14507_16383 = state_14438;
(statearr_14507_16383[(2)] = ex__11855__auto__);


if(cljs.core.seq((state_14438[(4)]))){
var statearr_14508_16384 = state_14438;
(statearr_14508_16384[(1)] = cljs.core.first((state_14438[(4)])));

} else {
throw ex__11855__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16385 = state_14438;
state_14438 = G__16385;
continue;
} else {
return ret_value__11853__auto__;
}
break;
}
});
cljs$core$async$state_machine__11852__auto__ = function(state_14438){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11852__auto____1.call(this,state_14438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11852__auto____0;
cljs$core$async$state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11852__auto____1;
return cljs$core$async$state_machine__11852__auto__;
})()
})();
var state__12712__auto__ = (function (){var statearr_14513 = f__12711__auto__();
(statearr_14513[(6)] = c__12710__auto___16315);

return statearr_14513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12712__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__14518 = arguments.length;
switch (G__14518) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__14520 = arguments.length;
switch (G__14520) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__14524 = arguments.length;
switch (G__14524) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__12710__auto___16415 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12711__auto__ = (function (){var switch__11851__auto__ = (function (state_14579){
var state_val_14580 = (state_14579[(1)]);
if((state_val_14580 === (7))){
var state_14579__$1 = state_14579;
var statearr_14584_16416 = state_14579__$1;
(statearr_14584_16416[(2)] = null);

(statearr_14584_16416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14580 === (1))){
var state_14579__$1 = state_14579;
var statearr_14585_16417 = state_14579__$1;
(statearr_14585_16417[(2)] = null);

(statearr_14585_16417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14580 === (4))){
var inst_14540 = (state_14579[(7)]);
var inst_14539 = (state_14579[(8)]);
var inst_14542 = (inst_14540 < inst_14539);
var state_14579__$1 = state_14579;
if(cljs.core.truth_(inst_14542)){
var statearr_14586_16418 = state_14579__$1;
(statearr_14586_16418[(1)] = (6));

} else {
var statearr_14587_16419 = state_14579__$1;
(statearr_14587_16419[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14580 === (15))){
var inst_14565 = (state_14579[(9)]);
var inst_14570 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_14565);
var state_14579__$1 = state_14579;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14579__$1,(17),out,inst_14570);
} else {
if((state_val_14580 === (13))){
var inst_14565 = (state_14579[(9)]);
var inst_14565__$1 = (state_14579[(2)]);
var inst_14566 = cljs.core.some(cljs.core.nil_QMARK_,inst_14565__$1);
var state_14579__$1 = (function (){var statearr_14588 = state_14579;
(statearr_14588[(9)] = inst_14565__$1);

return statearr_14588;
})();
if(cljs.core.truth_(inst_14566)){
var statearr_14589_16420 = state_14579__$1;
(statearr_14589_16420[(1)] = (14));

} else {
var statearr_14590_16421 = state_14579__$1;
(statearr_14590_16421[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14580 === (6))){
var state_14579__$1 = state_14579;
var statearr_14591_16422 = state_14579__$1;
(statearr_14591_16422[(2)] = null);

(statearr_14591_16422[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14580 === (17))){
var inst_14572 = (state_14579[(2)]);
var state_14579__$1 = (function (){var statearr_14596 = state_14579;
(statearr_14596[(10)] = inst_14572);

return statearr_14596;
})();
var statearr_14597_16423 = state_14579__$1;
(statearr_14597_16423[(2)] = null);

(statearr_14597_16423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14580 === (3))){
var inst_14577 = (state_14579[(2)]);
var state_14579__$1 = state_14579;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14579__$1,inst_14577);
} else {
if((state_val_14580 === (12))){
var _ = (function (){var statearr_14598 = state_14579;
(statearr_14598[(4)] = cljs.core.rest((state_14579[(4)])));

return statearr_14598;
})();
var state_14579__$1 = state_14579;
var ex14594 = (state_14579__$1[(2)]);
var statearr_14599_16427 = state_14579__$1;
(statearr_14599_16427[(5)] = ex14594);


if((ex14594 instanceof Object)){
var statearr_14600_16428 = state_14579__$1;
(statearr_14600_16428[(1)] = (11));

(statearr_14600_16428[(5)] = null);

} else {
throw ex14594;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14580 === (2))){
var inst_14538 = cljs.core.reset_BANG_(dctr,cnt);
var inst_14539 = cnt;
var inst_14540 = (0);
var state_14579__$1 = (function (){var statearr_14601 = state_14579;
(statearr_14601[(11)] = inst_14538);

(statearr_14601[(8)] = inst_14539);

(statearr_14601[(7)] = inst_14540);

return statearr_14601;
})();
var statearr_14605_16433 = state_14579__$1;
(statearr_14605_16433[(2)] = null);

(statearr_14605_16433[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14580 === (11))){
var inst_14544 = (state_14579[(2)]);
var inst_14545 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_14579__$1 = (function (){var statearr_14606 = state_14579;
(statearr_14606[(12)] = inst_14544);

return statearr_14606;
})();
var statearr_14607_16435 = state_14579__$1;
(statearr_14607_16435[(2)] = inst_14545);

(statearr_14607_16435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14580 === (9))){
var inst_14540 = (state_14579[(7)]);
var _ = (function (){var statearr_14609 = state_14579;
(statearr_14609[(4)] = cljs.core.cons((12),(state_14579[(4)])));

return statearr_14609;
})();
var inst_14551 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_14540) : chs__$1(inst_14540));
var inst_14552 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_14540) : done(inst_14540));
var inst_14553 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_14551,inst_14552);
var ___$1 = (function (){var statearr_14610 = state_14579;
(statearr_14610[(4)] = cljs.core.rest((state_14579[(4)])));

return statearr_14610;
})();
var state_14579__$1 = state_14579;
var statearr_14611_16436 = state_14579__$1;
(statearr_14611_16436[(2)] = inst_14553);

(statearr_14611_16436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14580 === (5))){
var inst_14563 = (state_14579[(2)]);
var state_14579__$1 = (function (){var statearr_14615 = state_14579;
(statearr_14615[(13)] = inst_14563);

return statearr_14615;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14579__$1,(13),dchan);
} else {
if((state_val_14580 === (14))){
var inst_14568 = cljs.core.async.close_BANG_(out);
var state_14579__$1 = state_14579;
var statearr_14616_16438 = state_14579__$1;
(statearr_14616_16438[(2)] = inst_14568);

(statearr_14616_16438[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14580 === (16))){
var inst_14575 = (state_14579[(2)]);
var state_14579__$1 = state_14579;
var statearr_14621_16439 = state_14579__$1;
(statearr_14621_16439[(2)] = inst_14575);

(statearr_14621_16439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14580 === (10))){
var inst_14540 = (state_14579[(7)]);
var inst_14556 = (state_14579[(2)]);
var inst_14557 = (inst_14540 + (1));
var inst_14540__$1 = inst_14557;
var state_14579__$1 = (function (){var statearr_14622 = state_14579;
(statearr_14622[(14)] = inst_14556);

(statearr_14622[(7)] = inst_14540__$1);

return statearr_14622;
})();
var statearr_14623_16448 = state_14579__$1;
(statearr_14623_16448[(2)] = null);

(statearr_14623_16448[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14580 === (8))){
var inst_14561 = (state_14579[(2)]);
var state_14579__$1 = state_14579;
var statearr_14624_16452 = state_14579__$1;
(statearr_14624_16452[(2)] = inst_14561);

(statearr_14624_16452[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11852__auto__ = null;
var cljs$core$async$state_machine__11852__auto____0 = (function (){
var statearr_14625 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14625[(0)] = cljs$core$async$state_machine__11852__auto__);

(statearr_14625[(1)] = (1));

return statearr_14625;
});
var cljs$core$async$state_machine__11852__auto____1 = (function (state_14579){
while(true){
var ret_value__11853__auto__ = (function (){try{while(true){
var result__11854__auto__ = switch__11851__auto__(state_14579);
if(cljs.core.keyword_identical_QMARK_(result__11854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11854__auto__;
}
break;
}
}catch (e14626){var ex__11855__auto__ = e14626;
var statearr_14627_16460 = state_14579;
(statearr_14627_16460[(2)] = ex__11855__auto__);


if(cljs.core.seq((state_14579[(4)]))){
var statearr_14628_16461 = state_14579;
(statearr_14628_16461[(1)] = cljs.core.first((state_14579[(4)])));

} else {
throw ex__11855__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16462 = state_14579;
state_14579 = G__16462;
continue;
} else {
return ret_value__11853__auto__;
}
break;
}
});
cljs$core$async$state_machine__11852__auto__ = function(state_14579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11852__auto____1.call(this,state_14579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11852__auto____0;
cljs$core$async$state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11852__auto____1;
return cljs$core$async$state_machine__11852__auto__;
})()
})();
var state__12712__auto__ = (function (){var statearr_14629 = f__12711__auto__();
(statearr_14629[(6)] = c__12710__auto___16415);

return statearr_14629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12712__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__14632 = arguments.length;
switch (G__14632) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12710__auto___16465 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12711__auto__ = (function (){var switch__11851__auto__ = (function (state_14678){
var state_val_14679 = (state_14678[(1)]);
if((state_val_14679 === (7))){
var inst_14643 = (state_14678[(7)]);
var inst_14644 = (state_14678[(8)]);
var inst_14643__$1 = (state_14678[(2)]);
var inst_14644__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14643__$1,(0),null);
var inst_14645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14643__$1,(1),null);
var inst_14646 = (inst_14644__$1 == null);
var state_14678__$1 = (function (){var statearr_14686 = state_14678;
(statearr_14686[(7)] = inst_14643__$1);

(statearr_14686[(8)] = inst_14644__$1);

(statearr_14686[(9)] = inst_14645);

return statearr_14686;
})();
if(cljs.core.truth_(inst_14646)){
var statearr_14687_16478 = state_14678__$1;
(statearr_14687_16478[(1)] = (8));

} else {
var statearr_14688_16479 = state_14678__$1;
(statearr_14688_16479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (1))){
var inst_14633 = cljs.core.vec(chs);
var inst_14634 = inst_14633;
var state_14678__$1 = (function (){var statearr_14697 = state_14678;
(statearr_14697[(10)] = inst_14634);

return statearr_14697;
})();
var statearr_14704_16480 = state_14678__$1;
(statearr_14704_16480[(2)] = null);

(statearr_14704_16480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (4))){
var inst_14634 = (state_14678[(10)]);
var state_14678__$1 = state_14678;
return cljs.core.async.ioc_alts_BANG_(state_14678__$1,(7),inst_14634);
} else {
if((state_val_14679 === (6))){
var inst_14674 = (state_14678[(2)]);
var state_14678__$1 = state_14678;
var statearr_14711_16483 = state_14678__$1;
(statearr_14711_16483[(2)] = inst_14674);

(statearr_14711_16483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (3))){
var inst_14676 = (state_14678[(2)]);
var state_14678__$1 = state_14678;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14678__$1,inst_14676);
} else {
if((state_val_14679 === (2))){
var inst_14634 = (state_14678[(10)]);
var inst_14636 = cljs.core.count(inst_14634);
var inst_14637 = (inst_14636 > (0));
var state_14678__$1 = state_14678;
if(cljs.core.truth_(inst_14637)){
var statearr_14713_16491 = state_14678__$1;
(statearr_14713_16491[(1)] = (4));

} else {
var statearr_14714_16492 = state_14678__$1;
(statearr_14714_16492[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (11))){
var inst_14634 = (state_14678[(10)]);
var inst_14661 = (state_14678[(2)]);
var tmp14712 = inst_14634;
var inst_14634__$1 = tmp14712;
var state_14678__$1 = (function (){var statearr_14715 = state_14678;
(statearr_14715[(11)] = inst_14661);

(statearr_14715[(10)] = inst_14634__$1);

return statearr_14715;
})();
var statearr_14716_16496 = state_14678__$1;
(statearr_14716_16496[(2)] = null);

(statearr_14716_16496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (9))){
var inst_14644 = (state_14678[(8)]);
var state_14678__$1 = state_14678;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14678__$1,(11),out,inst_14644);
} else {
if((state_val_14679 === (5))){
var inst_14672 = cljs.core.async.close_BANG_(out);
var state_14678__$1 = state_14678;
var statearr_14719_16497 = state_14678__$1;
(statearr_14719_16497[(2)] = inst_14672);

(statearr_14719_16497[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (10))){
var inst_14670 = (state_14678[(2)]);
var state_14678__$1 = state_14678;
var statearr_14721_16498 = state_14678__$1;
(statearr_14721_16498[(2)] = inst_14670);

(statearr_14721_16498[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (8))){
var inst_14634 = (state_14678[(10)]);
var inst_14643 = (state_14678[(7)]);
var inst_14644 = (state_14678[(8)]);
var inst_14645 = (state_14678[(9)]);
var inst_14651 = (function (){var cs = inst_14634;
var vec__14639 = inst_14643;
var v = inst_14644;
var c = inst_14645;
return (function (p1__14630_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__14630_SHARP_);
});
})();
var inst_14657 = cljs.core.filterv(inst_14651,inst_14634);
var inst_14634__$1 = inst_14657;
var state_14678__$1 = (function (){var statearr_14722 = state_14678;
(statearr_14722[(10)] = inst_14634__$1);

return statearr_14722;
})();
var statearr_14723_16503 = state_14678__$1;
(statearr_14723_16503[(2)] = null);

(statearr_14723_16503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11852__auto__ = null;
var cljs$core$async$state_machine__11852__auto____0 = (function (){
var statearr_14724 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14724[(0)] = cljs$core$async$state_machine__11852__auto__);

(statearr_14724[(1)] = (1));

return statearr_14724;
});
var cljs$core$async$state_machine__11852__auto____1 = (function (state_14678){
while(true){
var ret_value__11853__auto__ = (function (){try{while(true){
var result__11854__auto__ = switch__11851__auto__(state_14678);
if(cljs.core.keyword_identical_QMARK_(result__11854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11854__auto__;
}
break;
}
}catch (e14725){var ex__11855__auto__ = e14725;
var statearr_14726_16504 = state_14678;
(statearr_14726_16504[(2)] = ex__11855__auto__);


if(cljs.core.seq((state_14678[(4)]))){
var statearr_14727_16505 = state_14678;
(statearr_14727_16505[(1)] = cljs.core.first((state_14678[(4)])));

} else {
throw ex__11855__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16506 = state_14678;
state_14678 = G__16506;
continue;
} else {
return ret_value__11853__auto__;
}
break;
}
});
cljs$core$async$state_machine__11852__auto__ = function(state_14678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11852__auto____1.call(this,state_14678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11852__auto____0;
cljs$core$async$state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11852__auto____1;
return cljs$core$async$state_machine__11852__auto__;
})()
})();
var state__12712__auto__ = (function (){var statearr_14731 = f__12711__auto__();
(statearr_14731[(6)] = c__12710__auto___16465);

return statearr_14731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12712__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__14736 = arguments.length;
switch (G__14736) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12710__auto___16522 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12711__auto__ = (function (){var switch__11851__auto__ = (function (state_14760){
var state_val_14761 = (state_14760[(1)]);
if((state_val_14761 === (7))){
var inst_14742 = (state_14760[(7)]);
var inst_14742__$1 = (state_14760[(2)]);
var inst_14743 = (inst_14742__$1 == null);
var inst_14744 = cljs.core.not(inst_14743);
var state_14760__$1 = (function (){var statearr_14762 = state_14760;
(statearr_14762[(7)] = inst_14742__$1);

return statearr_14762;
})();
if(inst_14744){
var statearr_14763_16523 = state_14760__$1;
(statearr_14763_16523[(1)] = (8));

} else {
var statearr_14764_16524 = state_14760__$1;
(statearr_14764_16524[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14761 === (1))){
var inst_14737 = (0);
var state_14760__$1 = (function (){var statearr_14765 = state_14760;
(statearr_14765[(8)] = inst_14737);

return statearr_14765;
})();
var statearr_14766_16528 = state_14760__$1;
(statearr_14766_16528[(2)] = null);

(statearr_14766_16528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14761 === (4))){
var state_14760__$1 = state_14760;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14760__$1,(7),ch);
} else {
if((state_val_14761 === (6))){
var inst_14755 = (state_14760[(2)]);
var state_14760__$1 = state_14760;
var statearr_14767_16529 = state_14760__$1;
(statearr_14767_16529[(2)] = inst_14755);

(statearr_14767_16529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14761 === (3))){
var inst_14757 = (state_14760[(2)]);
var inst_14758 = cljs.core.async.close_BANG_(out);
var state_14760__$1 = (function (){var statearr_14768 = state_14760;
(statearr_14768[(9)] = inst_14757);

return statearr_14768;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14760__$1,inst_14758);
} else {
if((state_val_14761 === (2))){
var inst_14737 = (state_14760[(8)]);
var inst_14739 = (inst_14737 < n);
var state_14760__$1 = state_14760;
if(cljs.core.truth_(inst_14739)){
var statearr_14769_16530 = state_14760__$1;
(statearr_14769_16530[(1)] = (4));

} else {
var statearr_14770_16531 = state_14760__$1;
(statearr_14770_16531[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14761 === (11))){
var inst_14737 = (state_14760[(8)]);
var inst_14747 = (state_14760[(2)]);
var inst_14748 = (inst_14737 + (1));
var inst_14737__$1 = inst_14748;
var state_14760__$1 = (function (){var statearr_14771 = state_14760;
(statearr_14771[(10)] = inst_14747);

(statearr_14771[(8)] = inst_14737__$1);

return statearr_14771;
})();
var statearr_14772_16536 = state_14760__$1;
(statearr_14772_16536[(2)] = null);

(statearr_14772_16536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14761 === (9))){
var state_14760__$1 = state_14760;
var statearr_14773_16537 = state_14760__$1;
(statearr_14773_16537[(2)] = null);

(statearr_14773_16537[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14761 === (5))){
var state_14760__$1 = state_14760;
var statearr_14777_16542 = state_14760__$1;
(statearr_14777_16542[(2)] = null);

(statearr_14777_16542[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14761 === (10))){
var inst_14752 = (state_14760[(2)]);
var state_14760__$1 = state_14760;
var statearr_14778_16544 = state_14760__$1;
(statearr_14778_16544[(2)] = inst_14752);

(statearr_14778_16544[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14761 === (8))){
var inst_14742 = (state_14760[(7)]);
var state_14760__$1 = state_14760;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14760__$1,(11),out,inst_14742);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11852__auto__ = null;
var cljs$core$async$state_machine__11852__auto____0 = (function (){
var statearr_14784 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14784[(0)] = cljs$core$async$state_machine__11852__auto__);

(statearr_14784[(1)] = (1));

return statearr_14784;
});
var cljs$core$async$state_machine__11852__auto____1 = (function (state_14760){
while(true){
var ret_value__11853__auto__ = (function (){try{while(true){
var result__11854__auto__ = switch__11851__auto__(state_14760);
if(cljs.core.keyword_identical_QMARK_(result__11854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11854__auto__;
}
break;
}
}catch (e14788){var ex__11855__auto__ = e14788;
var statearr_14789_16548 = state_14760;
(statearr_14789_16548[(2)] = ex__11855__auto__);


if(cljs.core.seq((state_14760[(4)]))){
var statearr_14790_16549 = state_14760;
(statearr_14790_16549[(1)] = cljs.core.first((state_14760[(4)])));

} else {
throw ex__11855__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16552 = state_14760;
state_14760 = G__16552;
continue;
} else {
return ret_value__11853__auto__;
}
break;
}
});
cljs$core$async$state_machine__11852__auto__ = function(state_14760){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11852__auto____1.call(this,state_14760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11852__auto____0;
cljs$core$async$state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11852__auto____1;
return cljs$core$async$state_machine__11852__auto__;
})()
})();
var state__12712__auto__ = (function (){var statearr_14794 = f__12711__auto__();
(statearr_14794[(6)] = c__12710__auto___16522);

return statearr_14794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12712__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14802 = (function (f,ch,meta14797,_,fn1,meta14803){
this.f = f;
this.ch = ch;
this.meta14797 = meta14797;
this._ = _;
this.fn1 = fn1;
this.meta14803 = meta14803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14804,meta14803__$1){
var self__ = this;
var _14804__$1 = this;
return (new cljs.core.async.t_cljs$core$async14802(self__.f,self__.ch,self__.meta14797,self__._,self__.fn1,meta14803__$1));
}));

(cljs.core.async.t_cljs$core$async14802.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14804){
var self__ = this;
var _14804__$1 = this;
return self__.meta14803;
}));

(cljs.core.async.t_cljs$core$async14802.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14802.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async14802.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14802.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__14795_SHARP_){
var G__14805 = (((p1__14795_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__14795_SHARP_) : self__.f(p1__14795_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__14805) : f1(G__14805));
});
}));

(cljs.core.async.t_cljs$core$async14802.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14797","meta14797",-2145983228,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14796","cljs.core.async/t_cljs$core$async14796",372865110,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14803","meta14803",499516811,null)], null);
}));

(cljs.core.async.t_cljs$core$async14802.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14802.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14802");

(cljs.core.async.t_cljs$core$async14802.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async14802");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14802.
 */
cljs.core.async.__GT_t_cljs$core$async14802 = (function cljs$core$async$__GT_t_cljs$core$async14802(f,ch,meta14797,_,fn1,meta14803){
return (new cljs.core.async.t_cljs$core$async14802(f,ch,meta14797,_,fn1,meta14803));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14796 = (function (f,ch,meta14797){
this.f = f;
this.ch = ch;
this.meta14797 = meta14797;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14798,meta14797__$1){
var self__ = this;
var _14798__$1 = this;
return (new cljs.core.async.t_cljs$core$async14796(self__.f,self__.ch,meta14797__$1));
}));

(cljs.core.async.t_cljs$core$async14796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14798){
var self__ = this;
var _14798__$1 = this;
return self__.meta14797;
}));

(cljs.core.async.t_cljs$core$async14796.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14796.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14796.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14796.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14796.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async14802(self__.f,self__.ch,self__.meta14797,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__14807 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__14807) : self__.f(G__14807));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async14796.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14796.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async14796.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14797","meta14797",-2145983228,null)], null);
}));

(cljs.core.async.t_cljs$core$async14796.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14796.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14796");

(cljs.core.async.t_cljs$core$async14796.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async14796");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14796.
 */
cljs.core.async.__GT_t_cljs$core$async14796 = (function cljs$core$async$__GT_t_cljs$core$async14796(f,ch,meta14797){
return (new cljs.core.async.t_cljs$core$async14796(f,ch,meta14797));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async14796(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14812 = (function (f,ch,meta14813){
this.f = f;
this.ch = ch;
this.meta14813 = meta14813;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14814,meta14813__$1){
var self__ = this;
var _14814__$1 = this;
return (new cljs.core.async.t_cljs$core$async14812(self__.f,self__.ch,meta14813__$1));
}));

(cljs.core.async.t_cljs$core$async14812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14814){
var self__ = this;
var _14814__$1 = this;
return self__.meta14813;
}));

(cljs.core.async.t_cljs$core$async14812.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14812.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14812.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14812.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async14812.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14812.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f(val)),fn1);
}));

(cljs.core.async.t_cljs$core$async14812.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14813","meta14813",-1531790323,null)], null);
}));

(cljs.core.async.t_cljs$core$async14812.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14812.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14812");

(cljs.core.async.t_cljs$core$async14812.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async14812");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14812.
 */
cljs.core.async.__GT_t_cljs$core$async14812 = (function cljs$core$async$__GT_t_cljs$core$async14812(f,ch,meta14813){
return (new cljs.core.async.t_cljs$core$async14812(f,ch,meta14813));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async14812(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14832 = (function (p,ch,meta14833){
this.p = p;
this.ch = ch;
this.meta14833 = meta14833;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14834,meta14833__$1){
var self__ = this;
var _14834__$1 = this;
return (new cljs.core.async.t_cljs$core$async14832(self__.p,self__.ch,meta14833__$1));
}));

(cljs.core.async.t_cljs$core$async14832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14834){
var self__ = this;
var _14834__$1 = this;
return self__.meta14833;
}));

(cljs.core.async.t_cljs$core$async14832.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14832.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14832.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async14832.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14832.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async14832.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14832.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p(val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async14832.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14833","meta14833",-873740119,null)], null);
}));

(cljs.core.async.t_cljs$core$async14832.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14832.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14832");

(cljs.core.async.t_cljs$core$async14832.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async14832");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14832.
 */
cljs.core.async.__GT_t_cljs$core$async14832 = (function cljs$core$async$__GT_t_cljs$core$async14832(p,ch,meta14833){
return (new cljs.core.async.t_cljs$core$async14832(p,ch,meta14833));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async14832(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__14844 = arguments.length;
switch (G__14844) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12710__auto___16634 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12711__auto__ = (function (){var switch__11851__auto__ = (function (state_14871){
var state_val_14872 = (state_14871[(1)]);
if((state_val_14872 === (7))){
var inst_14867 = (state_14871[(2)]);
var state_14871__$1 = state_14871;
var statearr_14873_16635 = state_14871__$1;
(statearr_14873_16635[(2)] = inst_14867);

(statearr_14873_16635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (1))){
var state_14871__$1 = state_14871;
var statearr_14874_16641 = state_14871__$1;
(statearr_14874_16641[(2)] = null);

(statearr_14874_16641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (4))){
var inst_14850 = (state_14871[(7)]);
var inst_14850__$1 = (state_14871[(2)]);
var inst_14852 = (inst_14850__$1 == null);
var state_14871__$1 = (function (){var statearr_14875 = state_14871;
(statearr_14875[(7)] = inst_14850__$1);

return statearr_14875;
})();
if(cljs.core.truth_(inst_14852)){
var statearr_14879_16642 = state_14871__$1;
(statearr_14879_16642[(1)] = (5));

} else {
var statearr_14880_16643 = state_14871__$1;
(statearr_14880_16643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (6))){
var inst_14850 = (state_14871[(7)]);
var inst_14858 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14850) : p(inst_14850));
var state_14871__$1 = state_14871;
if(cljs.core.truth_(inst_14858)){
var statearr_14888_16645 = state_14871__$1;
(statearr_14888_16645[(1)] = (8));

} else {
var statearr_14889_16646 = state_14871__$1;
(statearr_14889_16646[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (3))){
var inst_14869 = (state_14871[(2)]);
var state_14871__$1 = state_14871;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14871__$1,inst_14869);
} else {
if((state_val_14872 === (2))){
var state_14871__$1 = state_14871;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14871__$1,(4),ch);
} else {
if((state_val_14872 === (11))){
var inst_14861 = (state_14871[(2)]);
var state_14871__$1 = state_14871;
var statearr_14893_16655 = state_14871__$1;
(statearr_14893_16655[(2)] = inst_14861);

(statearr_14893_16655[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (9))){
var state_14871__$1 = state_14871;
var statearr_14894_16656 = state_14871__$1;
(statearr_14894_16656[(2)] = null);

(statearr_14894_16656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (5))){
var inst_14856 = cljs.core.async.close_BANG_(out);
var state_14871__$1 = state_14871;
var statearr_14895_16657 = state_14871__$1;
(statearr_14895_16657[(2)] = inst_14856);

(statearr_14895_16657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (10))){
var inst_14864 = (state_14871[(2)]);
var state_14871__$1 = (function (){var statearr_14896 = state_14871;
(statearr_14896[(8)] = inst_14864);

return statearr_14896;
})();
var statearr_14900_16659 = state_14871__$1;
(statearr_14900_16659[(2)] = null);

(statearr_14900_16659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14872 === (8))){
var inst_14850 = (state_14871[(7)]);
var state_14871__$1 = state_14871;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14871__$1,(11),out,inst_14850);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11852__auto__ = null;
var cljs$core$async$state_machine__11852__auto____0 = (function (){
var statearr_14911 = [null,null,null,null,null,null,null,null,null];
(statearr_14911[(0)] = cljs$core$async$state_machine__11852__auto__);

(statearr_14911[(1)] = (1));

return statearr_14911;
});
var cljs$core$async$state_machine__11852__auto____1 = (function (state_14871){
while(true){
var ret_value__11853__auto__ = (function (){try{while(true){
var result__11854__auto__ = switch__11851__auto__(state_14871);
if(cljs.core.keyword_identical_QMARK_(result__11854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11854__auto__;
}
break;
}
}catch (e14912){var ex__11855__auto__ = e14912;
var statearr_14913_16664 = state_14871;
(statearr_14913_16664[(2)] = ex__11855__auto__);


if(cljs.core.seq((state_14871[(4)]))){
var statearr_14914_16667 = state_14871;
(statearr_14914_16667[(1)] = cljs.core.first((state_14871[(4)])));

} else {
throw ex__11855__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16669 = state_14871;
state_14871 = G__16669;
continue;
} else {
return ret_value__11853__auto__;
}
break;
}
});
cljs$core$async$state_machine__11852__auto__ = function(state_14871){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11852__auto____1.call(this,state_14871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11852__auto____0;
cljs$core$async$state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11852__auto____1;
return cljs$core$async$state_machine__11852__auto__;
})()
})();
var state__12712__auto__ = (function (){var statearr_14918 = f__12711__auto__();
(statearr_14918[(6)] = c__12710__auto___16634);

return statearr_14918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12712__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__14930 = arguments.length;
switch (G__14930) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__12710__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12711__auto__ = (function (){var switch__11851__auto__ = (function (state_15001){
var state_val_15002 = (state_15001[(1)]);
if((state_val_15002 === (7))){
var inst_14997 = (state_15001[(2)]);
var state_15001__$1 = state_15001;
var statearr_15003_16680 = state_15001__$1;
(statearr_15003_16680[(2)] = inst_14997);

(statearr_15003_16680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (20))){
var inst_14967 = (state_15001[(7)]);
var inst_14978 = (state_15001[(2)]);
var inst_14979 = cljs.core.next(inst_14967);
var inst_14953 = inst_14979;
var inst_14954 = null;
var inst_14955 = (0);
var inst_14956 = (0);
var state_15001__$1 = (function (){var statearr_15004 = state_15001;
(statearr_15004[(8)] = inst_14978);

(statearr_15004[(9)] = inst_14953);

(statearr_15004[(10)] = inst_14954);

(statearr_15004[(11)] = inst_14955);

(statearr_15004[(12)] = inst_14956);

return statearr_15004;
})();
var statearr_15005_16687 = state_15001__$1;
(statearr_15005_16687[(2)] = null);

(statearr_15005_16687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (1))){
var state_15001__$1 = state_15001;
var statearr_15006_16692 = state_15001__$1;
(statearr_15006_16692[(2)] = null);

(statearr_15006_16692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (4))){
var inst_14942 = (state_15001[(13)]);
var inst_14942__$1 = (state_15001[(2)]);
var inst_14943 = (inst_14942__$1 == null);
var state_15001__$1 = (function (){var statearr_15007 = state_15001;
(statearr_15007[(13)] = inst_14942__$1);

return statearr_15007;
})();
if(cljs.core.truth_(inst_14943)){
var statearr_15008_16696 = state_15001__$1;
(statearr_15008_16696[(1)] = (5));

} else {
var statearr_15021_16698 = state_15001__$1;
(statearr_15021_16698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (15))){
var state_15001__$1 = state_15001;
var statearr_15025_16701 = state_15001__$1;
(statearr_15025_16701[(2)] = null);

(statearr_15025_16701[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (21))){
var state_15001__$1 = state_15001;
var statearr_15026_16706 = state_15001__$1;
(statearr_15026_16706[(2)] = null);

(statearr_15026_16706[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (13))){
var inst_14956 = (state_15001[(12)]);
var inst_14953 = (state_15001[(9)]);
var inst_14954 = (state_15001[(10)]);
var inst_14955 = (state_15001[(11)]);
var inst_14963 = (state_15001[(2)]);
var inst_14964 = (inst_14956 + (1));
var tmp15022 = inst_14954;
var tmp15023 = inst_14955;
var tmp15024 = inst_14953;
var inst_14953__$1 = tmp15024;
var inst_14954__$1 = tmp15022;
var inst_14955__$1 = tmp15023;
var inst_14956__$1 = inst_14964;
var state_15001__$1 = (function (){var statearr_15027 = state_15001;
(statearr_15027[(14)] = inst_14963);

(statearr_15027[(9)] = inst_14953__$1);

(statearr_15027[(10)] = inst_14954__$1);

(statearr_15027[(11)] = inst_14955__$1);

(statearr_15027[(12)] = inst_14956__$1);

return statearr_15027;
})();
var statearr_15028_16713 = state_15001__$1;
(statearr_15028_16713[(2)] = null);

(statearr_15028_16713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (22))){
var state_15001__$1 = state_15001;
var statearr_15029_16714 = state_15001__$1;
(statearr_15029_16714[(2)] = null);

(statearr_15029_16714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (6))){
var inst_14942 = (state_15001[(13)]);
var inst_14951 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_14942) : f(inst_14942));
var inst_14952 = cljs.core.seq(inst_14951);
var inst_14953 = inst_14952;
var inst_14954 = null;
var inst_14955 = (0);
var inst_14956 = (0);
var state_15001__$1 = (function (){var statearr_15030 = state_15001;
(statearr_15030[(9)] = inst_14953);

(statearr_15030[(10)] = inst_14954);

(statearr_15030[(11)] = inst_14955);

(statearr_15030[(12)] = inst_14956);

return statearr_15030;
})();
var statearr_15031_16716 = state_15001__$1;
(statearr_15031_16716[(2)] = null);

(statearr_15031_16716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (17))){
var inst_14967 = (state_15001[(7)]);
var inst_14971 = cljs.core.chunk_first(inst_14967);
var inst_14972 = cljs.core.chunk_rest(inst_14967);
var inst_14973 = cljs.core.count(inst_14971);
var inst_14953 = inst_14972;
var inst_14954 = inst_14971;
var inst_14955 = inst_14973;
var inst_14956 = (0);
var state_15001__$1 = (function (){var statearr_15032 = state_15001;
(statearr_15032[(9)] = inst_14953);

(statearr_15032[(10)] = inst_14954);

(statearr_15032[(11)] = inst_14955);

(statearr_15032[(12)] = inst_14956);

return statearr_15032;
})();
var statearr_15033_16719 = state_15001__$1;
(statearr_15033_16719[(2)] = null);

(statearr_15033_16719[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (3))){
var inst_14999 = (state_15001[(2)]);
var state_15001__$1 = state_15001;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15001__$1,inst_14999);
} else {
if((state_val_15002 === (12))){
var inst_14987 = (state_15001[(2)]);
var state_15001__$1 = state_15001;
var statearr_15036_16723 = state_15001__$1;
(statearr_15036_16723[(2)] = inst_14987);

(statearr_15036_16723[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (2))){
var state_15001__$1 = state_15001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15001__$1,(4),in$);
} else {
if((state_val_15002 === (23))){
var inst_14995 = (state_15001[(2)]);
var state_15001__$1 = state_15001;
var statearr_15037_16725 = state_15001__$1;
(statearr_15037_16725[(2)] = inst_14995);

(statearr_15037_16725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (19))){
var inst_14982 = (state_15001[(2)]);
var state_15001__$1 = state_15001;
var statearr_15039_16726 = state_15001__$1;
(statearr_15039_16726[(2)] = inst_14982);

(statearr_15039_16726[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (11))){
var inst_14953 = (state_15001[(9)]);
var inst_14967 = (state_15001[(7)]);
var inst_14967__$1 = cljs.core.seq(inst_14953);
var state_15001__$1 = (function (){var statearr_15050 = state_15001;
(statearr_15050[(7)] = inst_14967__$1);

return statearr_15050;
})();
if(inst_14967__$1){
var statearr_15051_16727 = state_15001__$1;
(statearr_15051_16727[(1)] = (14));

} else {
var statearr_15052_16728 = state_15001__$1;
(statearr_15052_16728[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (9))){
var inst_14989 = (state_15001[(2)]);
var inst_14990 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_15001__$1 = (function (){var statearr_15053 = state_15001;
(statearr_15053[(15)] = inst_14989);

return statearr_15053;
})();
if(cljs.core.truth_(inst_14990)){
var statearr_15055_16731 = state_15001__$1;
(statearr_15055_16731[(1)] = (21));

} else {
var statearr_15056_16733 = state_15001__$1;
(statearr_15056_16733[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (5))){
var inst_14945 = cljs.core.async.close_BANG_(out);
var state_15001__$1 = state_15001;
var statearr_15057_16735 = state_15001__$1;
(statearr_15057_16735[(2)] = inst_14945);

(statearr_15057_16735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (14))){
var inst_14967 = (state_15001[(7)]);
var inst_14969 = cljs.core.chunked_seq_QMARK_(inst_14967);
var state_15001__$1 = state_15001;
if(inst_14969){
var statearr_15069_16736 = state_15001__$1;
(statearr_15069_16736[(1)] = (17));

} else {
var statearr_15070_16737 = state_15001__$1;
(statearr_15070_16737[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (16))){
var inst_14985 = (state_15001[(2)]);
var state_15001__$1 = state_15001;
var statearr_15077_16738 = state_15001__$1;
(statearr_15077_16738[(2)] = inst_14985);

(statearr_15077_16738[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15002 === (10))){
var inst_14954 = (state_15001[(10)]);
var inst_14956 = (state_15001[(12)]);
var inst_14961 = cljs.core._nth(inst_14954,inst_14956);
var state_15001__$1 = state_15001;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15001__$1,(13),out,inst_14961);
} else {
if((state_val_15002 === (18))){
var inst_14967 = (state_15001[(7)]);
var inst_14976 = cljs.core.first(inst_14967);
var state_15001__$1 = state_15001;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15001__$1,(20),out,inst_14976);
} else {
if((state_val_15002 === (8))){
var inst_14956 = (state_15001[(12)]);
var inst_14955 = (state_15001[(11)]);
var inst_14958 = (inst_14956 < inst_14955);
var inst_14959 = inst_14958;
var state_15001__$1 = state_15001;
if(cljs.core.truth_(inst_14959)){
var statearr_15078_16751 = state_15001__$1;
(statearr_15078_16751[(1)] = (10));

} else {
var statearr_15079_16752 = state_15001__$1;
(statearr_15079_16752[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__11852__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__11852__auto____0 = (function (){
var statearr_15080 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15080[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__11852__auto__);

(statearr_15080[(1)] = (1));

return statearr_15080;
});
var cljs$core$async$mapcat_STAR__$_state_machine__11852__auto____1 = (function (state_15001){
while(true){
var ret_value__11853__auto__ = (function (){try{while(true){
var result__11854__auto__ = switch__11851__auto__(state_15001);
if(cljs.core.keyword_identical_QMARK_(result__11854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11854__auto__;
}
break;
}
}catch (e15081){var ex__11855__auto__ = e15081;
var statearr_15082_16763 = state_15001;
(statearr_15082_16763[(2)] = ex__11855__auto__);


if(cljs.core.seq((state_15001[(4)]))){
var statearr_15083_16766 = state_15001;
(statearr_15083_16766[(1)] = cljs.core.first((state_15001[(4)])));

} else {
throw ex__11855__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16772 = state_15001;
state_15001 = G__16772;
continue;
} else {
return ret_value__11853__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__11852__auto__ = function(state_15001){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__11852__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__11852__auto____1.call(this,state_15001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__11852__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__11852__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__11852__auto__;
})()
})();
var state__12712__auto__ = (function (){var statearr_15084 = f__12711__auto__();
(statearr_15084[(6)] = c__12710__auto__);

return statearr_15084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12712__auto__);
}));

return c__12710__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__15088 = arguments.length;
switch (G__15088) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__15091 = arguments.length;
switch (G__15091) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__15109 = arguments.length;
switch (G__15109) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12710__auto___16798 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12711__auto__ = (function (){var switch__11851__auto__ = (function (state_15142){
var state_val_15143 = (state_15142[(1)]);
if((state_val_15143 === (7))){
var inst_15137 = (state_15142[(2)]);
var state_15142__$1 = state_15142;
var statearr_15146_16799 = state_15142__$1;
(statearr_15146_16799[(2)] = inst_15137);

(statearr_15146_16799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (1))){
var inst_15119 = null;
var state_15142__$1 = (function (){var statearr_15147 = state_15142;
(statearr_15147[(7)] = inst_15119);

return statearr_15147;
})();
var statearr_15148_16805 = state_15142__$1;
(statearr_15148_16805[(2)] = null);

(statearr_15148_16805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (4))){
var inst_15122 = (state_15142[(8)]);
var inst_15122__$1 = (state_15142[(2)]);
var inst_15123 = (inst_15122__$1 == null);
var inst_15124 = cljs.core.not(inst_15123);
var state_15142__$1 = (function (){var statearr_15150 = state_15142;
(statearr_15150[(8)] = inst_15122__$1);

return statearr_15150;
})();
if(inst_15124){
var statearr_15152_16807 = state_15142__$1;
(statearr_15152_16807[(1)] = (5));

} else {
var statearr_15153_16809 = state_15142__$1;
(statearr_15153_16809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (6))){
var state_15142__$1 = state_15142;
var statearr_15154_16814 = state_15142__$1;
(statearr_15154_16814[(2)] = null);

(statearr_15154_16814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (3))){
var inst_15139 = (state_15142[(2)]);
var inst_15140 = cljs.core.async.close_BANG_(out);
var state_15142__$1 = (function (){var statearr_15158 = state_15142;
(statearr_15158[(9)] = inst_15139);

return statearr_15158;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15142__$1,inst_15140);
} else {
if((state_val_15143 === (2))){
var state_15142__$1 = state_15142;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15142__$1,(4),ch);
} else {
if((state_val_15143 === (11))){
var inst_15122 = (state_15142[(8)]);
var inst_15131 = (state_15142[(2)]);
var inst_15119 = inst_15122;
var state_15142__$1 = (function (){var statearr_15159 = state_15142;
(statearr_15159[(10)] = inst_15131);

(statearr_15159[(7)] = inst_15119);

return statearr_15159;
})();
var statearr_15160_16815 = state_15142__$1;
(statearr_15160_16815[(2)] = null);

(statearr_15160_16815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (9))){
var inst_15122 = (state_15142[(8)]);
var state_15142__$1 = state_15142;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15142__$1,(11),out,inst_15122);
} else {
if((state_val_15143 === (5))){
var inst_15122 = (state_15142[(8)]);
var inst_15119 = (state_15142[(7)]);
var inst_15126 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15122,inst_15119);
var state_15142__$1 = state_15142;
if(inst_15126){
var statearr_15172_16820 = state_15142__$1;
(statearr_15172_16820[(1)] = (8));

} else {
var statearr_15173_16821 = state_15142__$1;
(statearr_15173_16821[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (10))){
var inst_15134 = (state_15142[(2)]);
var state_15142__$1 = state_15142;
var statearr_15178_16823 = state_15142__$1;
(statearr_15178_16823[(2)] = inst_15134);

(statearr_15178_16823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15143 === (8))){
var inst_15119 = (state_15142[(7)]);
var tmp15164 = inst_15119;
var inst_15119__$1 = tmp15164;
var state_15142__$1 = (function (){var statearr_15179 = state_15142;
(statearr_15179[(7)] = inst_15119__$1);

return statearr_15179;
})();
var statearr_15180_16824 = state_15142__$1;
(statearr_15180_16824[(2)] = null);

(statearr_15180_16824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11852__auto__ = null;
var cljs$core$async$state_machine__11852__auto____0 = (function (){
var statearr_15190 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15190[(0)] = cljs$core$async$state_machine__11852__auto__);

(statearr_15190[(1)] = (1));

return statearr_15190;
});
var cljs$core$async$state_machine__11852__auto____1 = (function (state_15142){
while(true){
var ret_value__11853__auto__ = (function (){try{while(true){
var result__11854__auto__ = switch__11851__auto__(state_15142);
if(cljs.core.keyword_identical_QMARK_(result__11854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11854__auto__;
}
break;
}
}catch (e15197){var ex__11855__auto__ = e15197;
var statearr_15198_16831 = state_15142;
(statearr_15198_16831[(2)] = ex__11855__auto__);


if(cljs.core.seq((state_15142[(4)]))){
var statearr_15200_16832 = state_15142;
(statearr_15200_16832[(1)] = cljs.core.first((state_15142[(4)])));

} else {
throw ex__11855__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16834 = state_15142;
state_15142 = G__16834;
continue;
} else {
return ret_value__11853__auto__;
}
break;
}
});
cljs$core$async$state_machine__11852__auto__ = function(state_15142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11852__auto____1.call(this,state_15142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11852__auto____0;
cljs$core$async$state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11852__auto____1;
return cljs$core$async$state_machine__11852__auto__;
})()
})();
var state__12712__auto__ = (function (){var statearr_15204 = f__12711__auto__();
(statearr_15204[(6)] = c__12710__auto___16798);

return statearr_15204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12712__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__15214 = arguments.length;
switch (G__15214) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12710__auto___16849 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12711__auto__ = (function (){var switch__11851__auto__ = (function (state_15265){
var state_val_15266 = (state_15265[(1)]);
if((state_val_15266 === (7))){
var inst_15255 = (state_15265[(2)]);
var state_15265__$1 = state_15265;
var statearr_15268_16855 = state_15265__$1;
(statearr_15268_16855[(2)] = inst_15255);

(statearr_15268_16855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (1))){
var inst_15217 = (new Array(n));
var inst_15218 = inst_15217;
var inst_15219 = (0);
var state_15265__$1 = (function (){var statearr_15272 = state_15265;
(statearr_15272[(7)] = inst_15218);

(statearr_15272[(8)] = inst_15219);

return statearr_15272;
})();
var statearr_15273_16859 = state_15265__$1;
(statearr_15273_16859[(2)] = null);

(statearr_15273_16859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (4))){
var inst_15222 = (state_15265[(9)]);
var inst_15222__$1 = (state_15265[(2)]);
var inst_15223 = (inst_15222__$1 == null);
var inst_15224 = cljs.core.not(inst_15223);
var state_15265__$1 = (function (){var statearr_15275 = state_15265;
(statearr_15275[(9)] = inst_15222__$1);

return statearr_15275;
})();
if(inst_15224){
var statearr_15276_16866 = state_15265__$1;
(statearr_15276_16866[(1)] = (5));

} else {
var statearr_15277_16867 = state_15265__$1;
(statearr_15277_16867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (15))){
var inst_15249 = (state_15265[(2)]);
var state_15265__$1 = state_15265;
var statearr_15278_16872 = state_15265__$1;
(statearr_15278_16872[(2)] = inst_15249);

(statearr_15278_16872[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (13))){
var state_15265__$1 = state_15265;
var statearr_15279_16873 = state_15265__$1;
(statearr_15279_16873[(2)] = null);

(statearr_15279_16873[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (6))){
var inst_15219 = (state_15265[(8)]);
var inst_15245 = (inst_15219 > (0));
var state_15265__$1 = state_15265;
if(cljs.core.truth_(inst_15245)){
var statearr_15280_16878 = state_15265__$1;
(statearr_15280_16878[(1)] = (12));

} else {
var statearr_15281_16879 = state_15265__$1;
(statearr_15281_16879[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (3))){
var inst_15257 = (state_15265[(2)]);
var state_15265__$1 = state_15265;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15265__$1,inst_15257);
} else {
if((state_val_15266 === (12))){
var inst_15218 = (state_15265[(7)]);
var inst_15247 = cljs.core.vec(inst_15218);
var state_15265__$1 = state_15265;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15265__$1,(15),out,inst_15247);
} else {
if((state_val_15266 === (2))){
var state_15265__$1 = state_15265;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15265__$1,(4),ch);
} else {
if((state_val_15266 === (11))){
var inst_15239 = (state_15265[(2)]);
var inst_15240 = (new Array(n));
var inst_15218 = inst_15240;
var inst_15219 = (0);
var state_15265__$1 = (function (){var statearr_15283 = state_15265;
(statearr_15283[(10)] = inst_15239);

(statearr_15283[(7)] = inst_15218);

(statearr_15283[(8)] = inst_15219);

return statearr_15283;
})();
var statearr_15287_16883 = state_15265__$1;
(statearr_15287_16883[(2)] = null);

(statearr_15287_16883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (9))){
var inst_15218 = (state_15265[(7)]);
var inst_15237 = cljs.core.vec(inst_15218);
var state_15265__$1 = state_15265;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15265__$1,(11),out,inst_15237);
} else {
if((state_val_15266 === (5))){
var inst_15218 = (state_15265[(7)]);
var inst_15219 = (state_15265[(8)]);
var inst_15222 = (state_15265[(9)]);
var inst_15230 = (state_15265[(11)]);
var inst_15226 = (inst_15218[inst_15219] = inst_15222);
var inst_15230__$1 = (inst_15219 + (1));
var inst_15233 = (inst_15230__$1 < n);
var state_15265__$1 = (function (){var statearr_15295 = state_15265;
(statearr_15295[(12)] = inst_15226);

(statearr_15295[(11)] = inst_15230__$1);

return statearr_15295;
})();
if(cljs.core.truth_(inst_15233)){
var statearr_15296_16886 = state_15265__$1;
(statearr_15296_16886[(1)] = (8));

} else {
var statearr_15297_16887 = state_15265__$1;
(statearr_15297_16887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (14))){
var inst_15252 = (state_15265[(2)]);
var inst_15253 = cljs.core.async.close_BANG_(out);
var state_15265__$1 = (function (){var statearr_15300 = state_15265;
(statearr_15300[(13)] = inst_15252);

return statearr_15300;
})();
var statearr_15301_16892 = state_15265__$1;
(statearr_15301_16892[(2)] = inst_15253);

(statearr_15301_16892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (10))){
var inst_15243 = (state_15265[(2)]);
var state_15265__$1 = state_15265;
var statearr_15302_16893 = state_15265__$1;
(statearr_15302_16893[(2)] = inst_15243);

(statearr_15302_16893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15266 === (8))){
var inst_15218 = (state_15265[(7)]);
var inst_15230 = (state_15265[(11)]);
var tmp15298 = inst_15218;
var inst_15218__$1 = tmp15298;
var inst_15219 = inst_15230;
var state_15265__$1 = (function (){var statearr_15303 = state_15265;
(statearr_15303[(7)] = inst_15218__$1);

(statearr_15303[(8)] = inst_15219);

return statearr_15303;
})();
var statearr_15304_16898 = state_15265__$1;
(statearr_15304_16898[(2)] = null);

(statearr_15304_16898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11852__auto__ = null;
var cljs$core$async$state_machine__11852__auto____0 = (function (){
var statearr_15307 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15307[(0)] = cljs$core$async$state_machine__11852__auto__);

(statearr_15307[(1)] = (1));

return statearr_15307;
});
var cljs$core$async$state_machine__11852__auto____1 = (function (state_15265){
while(true){
var ret_value__11853__auto__ = (function (){try{while(true){
var result__11854__auto__ = switch__11851__auto__(state_15265);
if(cljs.core.keyword_identical_QMARK_(result__11854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11854__auto__;
}
break;
}
}catch (e15308){var ex__11855__auto__ = e15308;
var statearr_15309_16901 = state_15265;
(statearr_15309_16901[(2)] = ex__11855__auto__);


if(cljs.core.seq((state_15265[(4)]))){
var statearr_15310_16902 = state_15265;
(statearr_15310_16902[(1)] = cljs.core.first((state_15265[(4)])));

} else {
throw ex__11855__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16904 = state_15265;
state_15265 = G__16904;
continue;
} else {
return ret_value__11853__auto__;
}
break;
}
});
cljs$core$async$state_machine__11852__auto__ = function(state_15265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11852__auto____1.call(this,state_15265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11852__auto____0;
cljs$core$async$state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11852__auto____1;
return cljs$core$async$state_machine__11852__auto__;
})()
})();
var state__12712__auto__ = (function (){var statearr_15313 = f__12711__auto__();
(statearr_15313[(6)] = c__12710__auto___16849);

return statearr_15313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12712__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__15319 = arguments.length;
switch (G__15319) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12710__auto___16910 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12711__auto__ = (function (){var switch__11851__auto__ = (function (state_15371){
var state_val_15372 = (state_15371[(1)]);
if((state_val_15372 === (7))){
var inst_15367 = (state_15371[(2)]);
var state_15371__$1 = state_15371;
var statearr_15373_16912 = state_15371__$1;
(statearr_15373_16912[(2)] = inst_15367);

(statearr_15373_16912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (1))){
var inst_15324 = [];
var inst_15325 = inst_15324;
var inst_15326 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15371__$1 = (function (){var statearr_15374 = state_15371;
(statearr_15374[(7)] = inst_15325);

(statearr_15374[(8)] = inst_15326);

return statearr_15374;
})();
var statearr_15375_16913 = state_15371__$1;
(statearr_15375_16913[(2)] = null);

(statearr_15375_16913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (4))){
var inst_15329 = (state_15371[(9)]);
var inst_15329__$1 = (state_15371[(2)]);
var inst_15333 = (inst_15329__$1 == null);
var inst_15334 = cljs.core.not(inst_15333);
var state_15371__$1 = (function (){var statearr_15376 = state_15371;
(statearr_15376[(9)] = inst_15329__$1);

return statearr_15376;
})();
if(inst_15334){
var statearr_15377_16917 = state_15371__$1;
(statearr_15377_16917[(1)] = (5));

} else {
var statearr_15381_16918 = state_15371__$1;
(statearr_15381_16918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (15))){
var inst_15325 = (state_15371[(7)]);
var inst_15359 = cljs.core.vec(inst_15325);
var state_15371__$1 = state_15371;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15371__$1,(18),out,inst_15359);
} else {
if((state_val_15372 === (13))){
var inst_15354 = (state_15371[(2)]);
var state_15371__$1 = state_15371;
var statearr_15388_16920 = state_15371__$1;
(statearr_15388_16920[(2)] = inst_15354);

(statearr_15388_16920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (6))){
var inst_15325 = (state_15371[(7)]);
var inst_15356 = inst_15325.length;
var inst_15357 = (inst_15356 > (0));
var state_15371__$1 = state_15371;
if(cljs.core.truth_(inst_15357)){
var statearr_15389_16924 = state_15371__$1;
(statearr_15389_16924[(1)] = (15));

} else {
var statearr_15390_16925 = state_15371__$1;
(statearr_15390_16925[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (17))){
var inst_15364 = (state_15371[(2)]);
var inst_15365 = cljs.core.async.close_BANG_(out);
var state_15371__$1 = (function (){var statearr_15397 = state_15371;
(statearr_15397[(10)] = inst_15364);

return statearr_15397;
})();
var statearr_15398_16926 = state_15371__$1;
(statearr_15398_16926[(2)] = inst_15365);

(statearr_15398_16926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (3))){
var inst_15369 = (state_15371[(2)]);
var state_15371__$1 = state_15371;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15371__$1,inst_15369);
} else {
if((state_val_15372 === (12))){
var inst_15325 = (state_15371[(7)]);
var inst_15347 = cljs.core.vec(inst_15325);
var state_15371__$1 = state_15371;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15371__$1,(14),out,inst_15347);
} else {
if((state_val_15372 === (2))){
var state_15371__$1 = state_15371;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15371__$1,(4),ch);
} else {
if((state_val_15372 === (11))){
var inst_15325 = (state_15371[(7)]);
var inst_15329 = (state_15371[(9)]);
var inst_15336 = (state_15371[(11)]);
var inst_15344 = inst_15325.push(inst_15329);
var tmp15399 = inst_15325;
var inst_15325__$1 = tmp15399;
var inst_15326 = inst_15336;
var state_15371__$1 = (function (){var statearr_15406 = state_15371;
(statearr_15406[(12)] = inst_15344);

(statearr_15406[(7)] = inst_15325__$1);

(statearr_15406[(8)] = inst_15326);

return statearr_15406;
})();
var statearr_15410_16932 = state_15371__$1;
(statearr_15410_16932[(2)] = null);

(statearr_15410_16932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (9))){
var inst_15326 = (state_15371[(8)]);
var inst_15340 = cljs.core.keyword_identical_QMARK_(inst_15326,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_15371__$1 = state_15371;
var statearr_15411_16933 = state_15371__$1;
(statearr_15411_16933[(2)] = inst_15340);

(statearr_15411_16933[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (5))){
var inst_15329 = (state_15371[(9)]);
var inst_15336 = (state_15371[(11)]);
var inst_15326 = (state_15371[(8)]);
var inst_15337 = (state_15371[(13)]);
var inst_15336__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15329) : f(inst_15329));
var inst_15337__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15336__$1,inst_15326);
var state_15371__$1 = (function (){var statearr_15416 = state_15371;
(statearr_15416[(11)] = inst_15336__$1);

(statearr_15416[(13)] = inst_15337__$1);

return statearr_15416;
})();
if(inst_15337__$1){
var statearr_15429_16935 = state_15371__$1;
(statearr_15429_16935[(1)] = (8));

} else {
var statearr_15430_16936 = state_15371__$1;
(statearr_15430_16936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (14))){
var inst_15329 = (state_15371[(9)]);
var inst_15336 = (state_15371[(11)]);
var inst_15349 = (state_15371[(2)]);
var inst_15350 = [];
var inst_15351 = inst_15350.push(inst_15329);
var inst_15325 = inst_15350;
var inst_15326 = inst_15336;
var state_15371__$1 = (function (){var statearr_15431 = state_15371;
(statearr_15431[(14)] = inst_15349);

(statearr_15431[(15)] = inst_15351);

(statearr_15431[(7)] = inst_15325);

(statearr_15431[(8)] = inst_15326);

return statearr_15431;
})();
var statearr_15432_16937 = state_15371__$1;
(statearr_15432_16937[(2)] = null);

(statearr_15432_16937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (16))){
var state_15371__$1 = state_15371;
var statearr_15439_16942 = state_15371__$1;
(statearr_15439_16942[(2)] = null);

(statearr_15439_16942[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (10))){
var inst_15342 = (state_15371[(2)]);
var state_15371__$1 = state_15371;
if(cljs.core.truth_(inst_15342)){
var statearr_15440_16944 = state_15371__$1;
(statearr_15440_16944[(1)] = (11));

} else {
var statearr_15441_16945 = state_15371__$1;
(statearr_15441_16945[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (18))){
var inst_15361 = (state_15371[(2)]);
var state_15371__$1 = state_15371;
var statearr_15442_16948 = state_15371__$1;
(statearr_15442_16948[(2)] = inst_15361);

(statearr_15442_16948[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (8))){
var inst_15337 = (state_15371[(13)]);
var state_15371__$1 = state_15371;
var statearr_15449_16956 = state_15371__$1;
(statearr_15449_16956[(2)] = inst_15337);

(statearr_15449_16956[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__11852__auto__ = null;
var cljs$core$async$state_machine__11852__auto____0 = (function (){
var statearr_15450 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15450[(0)] = cljs$core$async$state_machine__11852__auto__);

(statearr_15450[(1)] = (1));

return statearr_15450;
});
var cljs$core$async$state_machine__11852__auto____1 = (function (state_15371){
while(true){
var ret_value__11853__auto__ = (function (){try{while(true){
var result__11854__auto__ = switch__11851__auto__(state_15371);
if(cljs.core.keyword_identical_QMARK_(result__11854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11854__auto__;
}
break;
}
}catch (e15451){var ex__11855__auto__ = e15451;
var statearr_15452_16963 = state_15371;
(statearr_15452_16963[(2)] = ex__11855__auto__);


if(cljs.core.seq((state_15371[(4)]))){
var statearr_15453_16964 = state_15371;
(statearr_15453_16964[(1)] = cljs.core.first((state_15371[(4)])));

} else {
throw ex__11855__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16967 = state_15371;
state_15371 = G__16967;
continue;
} else {
return ret_value__11853__auto__;
}
break;
}
});
cljs$core$async$state_machine__11852__auto__ = function(state_15371){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__11852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__11852__auto____1.call(this,state_15371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__11852__auto____0;
cljs$core$async$state_machine__11852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__11852__auto____1;
return cljs$core$async$state_machine__11852__auto__;
})()
})();
var state__12712__auto__ = (function (){var statearr_15454 = f__12711__auto__();
(statearr_15454[(6)] = c__12710__auto___16910);

return statearr_15454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12712__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
