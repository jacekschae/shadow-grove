goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___19105 = arguments.length;
var i__5750__auto___19106 = (0);
while(true){
if((i__5750__auto___19106 < len__5749__auto___19105)){
args__5755__auto__.push((arguments[i__5750__auto___19106]));

var G__19107 = (i__5750__auto___19106 + (1));
i__5750__auto___19106 = G__19107;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq18712){
var G__18713 = cljs.core.first(seq18712);
var seq18712__$1 = cljs.core.next(seq18712);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18713,seq18712__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__18738 = cljs.core.seq(sources);
var chunk__18739 = null;
var count__18740 = (0);
var i__18741 = (0);
while(true){
if((i__18741 < count__18740)){
var map__18751 = chunk__18739.cljs$core$IIndexed$_nth$arity$2(null,i__18741);
var map__18751__$1 = cljs.core.__destructure_map(map__18751);
var src = map__18751__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18751__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18751__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18751__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18751__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e18752){var e_19108 = e18752;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_19108);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_19108.message)].join('')));
}

var G__19109 = seq__18738;
var G__19110 = chunk__18739;
var G__19111 = count__18740;
var G__19112 = (i__18741 + (1));
seq__18738 = G__19109;
chunk__18739 = G__19110;
count__18740 = G__19111;
i__18741 = G__19112;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__18738);
if(temp__5823__auto__){
var seq__18738__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18738__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__18738__$1);
var G__19113 = cljs.core.chunk_rest(seq__18738__$1);
var G__19114 = c__5548__auto__;
var G__19115 = cljs.core.count(c__5548__auto__);
var G__19116 = (0);
seq__18738 = G__19113;
chunk__18739 = G__19114;
count__18740 = G__19115;
i__18741 = G__19116;
continue;
} else {
var map__18754 = cljs.core.first(seq__18738__$1);
var map__18754__$1 = cljs.core.__destructure_map(map__18754);
var src = map__18754__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18754__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18754__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18754__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18754__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e18755){var e_19117 = e18755;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_19117);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_19117.message)].join('')));
}

var G__19118 = cljs.core.next(seq__18738__$1);
var G__19119 = null;
var G__19120 = (0);
var G__19121 = (0);
seq__18738 = G__19118;
chunk__18739 = G__19119;
count__18740 = G__19120;
i__18741 = G__19121;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next());
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__18769 = cljs.core.seq(js_requires);
var chunk__18770 = null;
var count__18771 = (0);
var i__18772 = (0);
while(true){
if((i__18772 < count__18771)){
var js_ns = chunk__18770.cljs$core$IIndexed$_nth$arity$2(null,i__18772);
var require_str_19122 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_19122);


var G__19123 = seq__18769;
var G__19124 = chunk__18770;
var G__19125 = count__18771;
var G__19126 = (i__18772 + (1));
seq__18769 = G__19123;
chunk__18770 = G__19124;
count__18771 = G__19125;
i__18772 = G__19126;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__18769);
if(temp__5823__auto__){
var seq__18769__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18769__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__18769__$1);
var G__19127 = cljs.core.chunk_rest(seq__18769__$1);
var G__19128 = c__5548__auto__;
var G__19129 = cljs.core.count(c__5548__auto__);
var G__19130 = (0);
seq__18769 = G__19127;
chunk__18770 = G__19128;
count__18771 = G__19129;
i__18772 = G__19130;
continue;
} else {
var js_ns = cljs.core.first(seq__18769__$1);
var require_str_19131 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_19131);


var G__19132 = cljs.core.next(seq__18769__$1);
var G__19133 = null;
var G__19134 = (0);
var G__19135 = (0);
seq__18769 = G__19132;
chunk__18770 = G__19133;
count__18771 = G__19134;
i__18772 = G__19135;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__18774){
var map__18775 = p__18774;
var map__18775__$1 = cljs.core.__destructure_map(map__18775);
var msg = map__18775__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18775__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18775__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5503__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__18776(s__18777){
return (new cljs.core.LazySeq(null,(function (){
var s__18777__$1 = s__18777;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__18777__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__18782 = cljs.core.first(xs__6383__auto__);
var map__18782__$1 = cljs.core.__destructure_map(map__18782);
var src = map__18782__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18782__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18782__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5499__auto__ = ((function (s__18777__$1,map__18782,map__18782__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__18775,map__18775__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__18776_$_iter__18778(s__18779){
return (new cljs.core.LazySeq(null,((function (s__18777__$1,map__18782,map__18782__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__18775,map__18775__$1,msg,info,reload_info){
return (function (){
var s__18779__$1 = s__18779;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__18779__$1);
if(temp__5823__auto____$1){
var s__18779__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__18779__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__18779__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__18781 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__18780 = (0);
while(true){
if((i__18780 < size__5502__auto__)){
var warning = cljs.core._nth(c__5501__auto__,i__18780);
cljs.core.chunk_append(b__18781,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__19136 = (i__18780 + (1));
i__18780 = G__19136;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18781),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__18776_$_iter__18778(cljs.core.chunk_rest(s__18779__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18781),null);
}
} else {
var warning = cljs.core.first(s__18779__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__18776_$_iter__18778(cljs.core.rest(s__18779__$2)));
}
} else {
return null;
}
break;
}
});})(s__18777__$1,map__18782,map__18782__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__18775,map__18775__$1,msg,info,reload_info))
,null,null));
});})(s__18777__$1,map__18782,map__18782__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__18775,map__18775__$1,msg,info,reload_info))
;
var fs__5500__auto__ = cljs.core.seq(iterys__5499__auto__(warnings));
if(fs__5500__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5500__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__18776(cljs.core.rest(s__18777__$1)));
} else {
var G__19137 = cljs.core.rest(s__18777__$1);
s__18777__$1 = G__19137;
continue;
}
} else {
var G__19138 = cljs.core.rest(s__18777__$1);
s__18777__$1 = G__19138;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__18785_19139 = cljs.core.seq(warnings);
var chunk__18786_19140 = null;
var count__18787_19141 = (0);
var i__18788_19142 = (0);
while(true){
if((i__18788_19142 < count__18787_19141)){
var map__18796_19143 = chunk__18786_19140.cljs$core$IIndexed$_nth$arity$2(null,i__18788_19142);
var map__18796_19144__$1 = cljs.core.__destructure_map(map__18796_19143);
var w_19145 = map__18796_19144__$1;
var msg_19146__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18796_19144__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_19147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18796_19144__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_19148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18796_19144__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_19149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18796_19144__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_19149)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_19147),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_19148),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_19146__$1)].join(''));


var G__19150 = seq__18785_19139;
var G__19151 = chunk__18786_19140;
var G__19152 = count__18787_19141;
var G__19153 = (i__18788_19142 + (1));
seq__18785_19139 = G__19150;
chunk__18786_19140 = G__19151;
count__18787_19141 = G__19152;
i__18788_19142 = G__19153;
continue;
} else {
var temp__5823__auto___19154 = cljs.core.seq(seq__18785_19139);
if(temp__5823__auto___19154){
var seq__18785_19155__$1 = temp__5823__auto___19154;
if(cljs.core.chunked_seq_QMARK_(seq__18785_19155__$1)){
var c__5548__auto___19156 = cljs.core.chunk_first(seq__18785_19155__$1);
var G__19157 = cljs.core.chunk_rest(seq__18785_19155__$1);
var G__19158 = c__5548__auto___19156;
var G__19159 = cljs.core.count(c__5548__auto___19156);
var G__19160 = (0);
seq__18785_19139 = G__19157;
chunk__18786_19140 = G__19158;
count__18787_19141 = G__19159;
i__18788_19142 = G__19160;
continue;
} else {
var map__18801_19161 = cljs.core.first(seq__18785_19155__$1);
var map__18801_19162__$1 = cljs.core.__destructure_map(map__18801_19161);
var w_19163 = map__18801_19162__$1;
var msg_19164__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18801_19162__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_19165 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18801_19162__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_19166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18801_19162__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_19167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18801_19162__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_19167)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_19165),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_19166),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_19164__$1)].join(''));


var G__19168 = cljs.core.next(seq__18785_19155__$1);
var G__19169 = null;
var G__19170 = (0);
var G__19171 = (0);
seq__18785_19139 = G__19168;
chunk__18786_19140 = G__19169;
count__18787_19141 = G__19170;
i__18788_19142 = G__19171;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__18773_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__18773_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5023__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5023__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__18837 = node_uri;
G__18837.setQuery(null);

G__18837.setPath(new$);

return G__18837;
})());
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__18843){
var map__18845 = p__18843;
var map__18845__$1 = cljs.core.__destructure_map(map__18845);
var msg = map__18845__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18845__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18845__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__18846 = cljs.core.seq(updates);
var chunk__18848 = null;
var count__18849 = (0);
var i__18850 = (0);
while(true){
if((i__18850 < count__18849)){
var path = chunk__18848.cljs$core$IIndexed$_nth$arity$2(null,i__18850);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__18975_19172 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__18979_19173 = null;
var count__18980_19174 = (0);
var i__18981_19175 = (0);
while(true){
if((i__18981_19175 < count__18980_19174)){
var node_19176 = chunk__18979_19173.cljs$core$IIndexed$_nth$arity$2(null,i__18981_19175);
if(cljs.core.not(node_19176.shadow$old)){
var path_match_19177 = shadow.cljs.devtools.client.browser.match_paths(node_19176.getAttribute("href"),path);
if(cljs.core.truth_(path_match_19177)){
var new_link_19178 = (function (){var G__19007 = node_19176.cloneNode(true);
G__19007.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_19177),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__19007;
})();
(node_19176.shadow$old = true);

(new_link_19178.onload = ((function (seq__18975_19172,chunk__18979_19173,count__18980_19174,i__18981_19175,seq__18846,chunk__18848,count__18849,i__18850,new_link_19178,path_match_19177,node_19176,path,map__18845,map__18845__$1,msg,updates,reload_info){
return (function (e){
var seq__19008_19179 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__19010_19180 = null;
var count__19011_19181 = (0);
var i__19012_19182 = (0);
while(true){
if((i__19012_19182 < count__19011_19181)){
var map__19016_19183 = chunk__19010_19180.cljs$core$IIndexed$_nth$arity$2(null,i__19012_19182);
var map__19016_19184__$1 = cljs.core.__destructure_map(map__19016_19183);
var task_19185 = map__19016_19184__$1;
var fn_str_19186 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19016_19184__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_19187 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19016_19184__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_19188 = goog.getObjectByName(fn_str_19186,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_19187)].join(''));

fn_obj_19188(path,new_link_19178);


var G__19189 = seq__19008_19179;
var G__19190 = chunk__19010_19180;
var G__19191 = count__19011_19181;
var G__19192 = (i__19012_19182 + (1));
seq__19008_19179 = G__19189;
chunk__19010_19180 = G__19190;
count__19011_19181 = G__19191;
i__19012_19182 = G__19192;
continue;
} else {
var temp__5823__auto___19193 = cljs.core.seq(seq__19008_19179);
if(temp__5823__auto___19193){
var seq__19008_19194__$1 = temp__5823__auto___19193;
if(cljs.core.chunked_seq_QMARK_(seq__19008_19194__$1)){
var c__5548__auto___19195 = cljs.core.chunk_first(seq__19008_19194__$1);
var G__19196 = cljs.core.chunk_rest(seq__19008_19194__$1);
var G__19197 = c__5548__auto___19195;
var G__19198 = cljs.core.count(c__5548__auto___19195);
var G__19199 = (0);
seq__19008_19179 = G__19196;
chunk__19010_19180 = G__19197;
count__19011_19181 = G__19198;
i__19012_19182 = G__19199;
continue;
} else {
var map__19017_19200 = cljs.core.first(seq__19008_19194__$1);
var map__19017_19201__$1 = cljs.core.__destructure_map(map__19017_19200);
var task_19202 = map__19017_19201__$1;
var fn_str_19203 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19017_19201__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_19204 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19017_19201__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_19205 = goog.getObjectByName(fn_str_19203,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_19204)].join(''));

fn_obj_19205(path,new_link_19178);


var G__19206 = cljs.core.next(seq__19008_19194__$1);
var G__19207 = null;
var G__19208 = (0);
var G__19209 = (0);
seq__19008_19179 = G__19206;
chunk__19010_19180 = G__19207;
count__19011_19181 = G__19208;
i__19012_19182 = G__19209;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_19176);
});})(seq__18975_19172,chunk__18979_19173,count__18980_19174,i__18981_19175,seq__18846,chunk__18848,count__18849,i__18850,new_link_19178,path_match_19177,node_19176,path,map__18845,map__18845__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_19177], 0));

goog.dom.insertSiblingAfter(new_link_19178,node_19176);


var G__19210 = seq__18975_19172;
var G__19211 = chunk__18979_19173;
var G__19212 = count__18980_19174;
var G__19213 = (i__18981_19175 + (1));
seq__18975_19172 = G__19210;
chunk__18979_19173 = G__19211;
count__18980_19174 = G__19212;
i__18981_19175 = G__19213;
continue;
} else {
var G__19214 = seq__18975_19172;
var G__19215 = chunk__18979_19173;
var G__19216 = count__18980_19174;
var G__19217 = (i__18981_19175 + (1));
seq__18975_19172 = G__19214;
chunk__18979_19173 = G__19215;
count__18980_19174 = G__19216;
i__18981_19175 = G__19217;
continue;
}
} else {
var G__19218 = seq__18975_19172;
var G__19219 = chunk__18979_19173;
var G__19220 = count__18980_19174;
var G__19221 = (i__18981_19175 + (1));
seq__18975_19172 = G__19218;
chunk__18979_19173 = G__19219;
count__18980_19174 = G__19220;
i__18981_19175 = G__19221;
continue;
}
} else {
var temp__5823__auto___19222 = cljs.core.seq(seq__18975_19172);
if(temp__5823__auto___19222){
var seq__18975_19223__$1 = temp__5823__auto___19222;
if(cljs.core.chunked_seq_QMARK_(seq__18975_19223__$1)){
var c__5548__auto___19224 = cljs.core.chunk_first(seq__18975_19223__$1);
var G__19225 = cljs.core.chunk_rest(seq__18975_19223__$1);
var G__19226 = c__5548__auto___19224;
var G__19227 = cljs.core.count(c__5548__auto___19224);
var G__19228 = (0);
seq__18975_19172 = G__19225;
chunk__18979_19173 = G__19226;
count__18980_19174 = G__19227;
i__18981_19175 = G__19228;
continue;
} else {
var node_19229 = cljs.core.first(seq__18975_19223__$1);
if(cljs.core.not(node_19229.shadow$old)){
var path_match_19230 = shadow.cljs.devtools.client.browser.match_paths(node_19229.getAttribute("href"),path);
if(cljs.core.truth_(path_match_19230)){
var new_link_19231 = (function (){var G__19018 = node_19229.cloneNode(true);
G__19018.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_19230),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__19018;
})();
(node_19229.shadow$old = true);

(new_link_19231.onload = ((function (seq__18975_19172,chunk__18979_19173,count__18980_19174,i__18981_19175,seq__18846,chunk__18848,count__18849,i__18850,new_link_19231,path_match_19230,node_19229,seq__18975_19223__$1,temp__5823__auto___19222,path,map__18845,map__18845__$1,msg,updates,reload_info){
return (function (e){
var seq__19019_19232 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__19021_19233 = null;
var count__19022_19234 = (0);
var i__19023_19235 = (0);
while(true){
if((i__19023_19235 < count__19022_19234)){
var map__19027_19236 = chunk__19021_19233.cljs$core$IIndexed$_nth$arity$2(null,i__19023_19235);
var map__19027_19237__$1 = cljs.core.__destructure_map(map__19027_19236);
var task_19238 = map__19027_19237__$1;
var fn_str_19239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19027_19237__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_19240 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19027_19237__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_19241 = goog.getObjectByName(fn_str_19239,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_19240)].join(''));

fn_obj_19241(path,new_link_19231);


var G__19242 = seq__19019_19232;
var G__19243 = chunk__19021_19233;
var G__19244 = count__19022_19234;
var G__19245 = (i__19023_19235 + (1));
seq__19019_19232 = G__19242;
chunk__19021_19233 = G__19243;
count__19022_19234 = G__19244;
i__19023_19235 = G__19245;
continue;
} else {
var temp__5823__auto___19246__$1 = cljs.core.seq(seq__19019_19232);
if(temp__5823__auto___19246__$1){
var seq__19019_19247__$1 = temp__5823__auto___19246__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19019_19247__$1)){
var c__5548__auto___19248 = cljs.core.chunk_first(seq__19019_19247__$1);
var G__19249 = cljs.core.chunk_rest(seq__19019_19247__$1);
var G__19250 = c__5548__auto___19248;
var G__19251 = cljs.core.count(c__5548__auto___19248);
var G__19252 = (0);
seq__19019_19232 = G__19249;
chunk__19021_19233 = G__19250;
count__19022_19234 = G__19251;
i__19023_19235 = G__19252;
continue;
} else {
var map__19028_19253 = cljs.core.first(seq__19019_19247__$1);
var map__19028_19254__$1 = cljs.core.__destructure_map(map__19028_19253);
var task_19255 = map__19028_19254__$1;
var fn_str_19256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19028_19254__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_19257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19028_19254__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_19258 = goog.getObjectByName(fn_str_19256,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_19257)].join(''));

fn_obj_19258(path,new_link_19231);


var G__19259 = cljs.core.next(seq__19019_19247__$1);
var G__19260 = null;
var G__19261 = (0);
var G__19262 = (0);
seq__19019_19232 = G__19259;
chunk__19021_19233 = G__19260;
count__19022_19234 = G__19261;
i__19023_19235 = G__19262;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_19229);
});})(seq__18975_19172,chunk__18979_19173,count__18980_19174,i__18981_19175,seq__18846,chunk__18848,count__18849,i__18850,new_link_19231,path_match_19230,node_19229,seq__18975_19223__$1,temp__5823__auto___19222,path,map__18845,map__18845__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_19230], 0));

goog.dom.insertSiblingAfter(new_link_19231,node_19229);


var G__19263 = cljs.core.next(seq__18975_19223__$1);
var G__19264 = null;
var G__19265 = (0);
var G__19266 = (0);
seq__18975_19172 = G__19263;
chunk__18979_19173 = G__19264;
count__18980_19174 = G__19265;
i__18981_19175 = G__19266;
continue;
} else {
var G__19267 = cljs.core.next(seq__18975_19223__$1);
var G__19268 = null;
var G__19269 = (0);
var G__19270 = (0);
seq__18975_19172 = G__19267;
chunk__18979_19173 = G__19268;
count__18980_19174 = G__19269;
i__18981_19175 = G__19270;
continue;
}
} else {
var G__19271 = cljs.core.next(seq__18975_19223__$1);
var G__19272 = null;
var G__19273 = (0);
var G__19274 = (0);
seq__18975_19172 = G__19271;
chunk__18979_19173 = G__19272;
count__18980_19174 = G__19273;
i__18981_19175 = G__19274;
continue;
}
}
} else {
}
}
break;
}


var G__19275 = seq__18846;
var G__19276 = chunk__18848;
var G__19277 = count__18849;
var G__19278 = (i__18850 + (1));
seq__18846 = G__19275;
chunk__18848 = G__19276;
count__18849 = G__19277;
i__18850 = G__19278;
continue;
} else {
var G__19279 = seq__18846;
var G__19280 = chunk__18848;
var G__19281 = count__18849;
var G__19282 = (i__18850 + (1));
seq__18846 = G__19279;
chunk__18848 = G__19280;
count__18849 = G__19281;
i__18850 = G__19282;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__18846);
if(temp__5823__auto__){
var seq__18846__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18846__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__18846__$1);
var G__19283 = cljs.core.chunk_rest(seq__18846__$1);
var G__19284 = c__5548__auto__;
var G__19285 = cljs.core.count(c__5548__auto__);
var G__19286 = (0);
seq__18846 = G__19283;
chunk__18848 = G__19284;
count__18849 = G__19285;
i__18850 = G__19286;
continue;
} else {
var path = cljs.core.first(seq__18846__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__19029_19287 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__19033_19288 = null;
var count__19034_19289 = (0);
var i__19035_19290 = (0);
while(true){
if((i__19035_19290 < count__19034_19289)){
var node_19291 = chunk__19033_19288.cljs$core$IIndexed$_nth$arity$2(null,i__19035_19290);
if(cljs.core.not(node_19291.shadow$old)){
var path_match_19292 = shadow.cljs.devtools.client.browser.match_paths(node_19291.getAttribute("href"),path);
if(cljs.core.truth_(path_match_19292)){
var new_link_19293 = (function (){var G__19061 = node_19291.cloneNode(true);
G__19061.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_19292),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__19061;
})();
(node_19291.shadow$old = true);

(new_link_19293.onload = ((function (seq__19029_19287,chunk__19033_19288,count__19034_19289,i__19035_19290,seq__18846,chunk__18848,count__18849,i__18850,new_link_19293,path_match_19292,node_19291,path,seq__18846__$1,temp__5823__auto__,map__18845,map__18845__$1,msg,updates,reload_info){
return (function (e){
var seq__19062_19294 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__19064_19295 = null;
var count__19065_19296 = (0);
var i__19066_19297 = (0);
while(true){
if((i__19066_19297 < count__19065_19296)){
var map__19070_19298 = chunk__19064_19295.cljs$core$IIndexed$_nth$arity$2(null,i__19066_19297);
var map__19070_19299__$1 = cljs.core.__destructure_map(map__19070_19298);
var task_19300 = map__19070_19299__$1;
var fn_str_19301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19070_19299__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_19302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19070_19299__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_19303 = goog.getObjectByName(fn_str_19301,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_19302)].join(''));

fn_obj_19303(path,new_link_19293);


var G__19304 = seq__19062_19294;
var G__19305 = chunk__19064_19295;
var G__19306 = count__19065_19296;
var G__19307 = (i__19066_19297 + (1));
seq__19062_19294 = G__19304;
chunk__19064_19295 = G__19305;
count__19065_19296 = G__19306;
i__19066_19297 = G__19307;
continue;
} else {
var temp__5823__auto___19308__$1 = cljs.core.seq(seq__19062_19294);
if(temp__5823__auto___19308__$1){
var seq__19062_19309__$1 = temp__5823__auto___19308__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19062_19309__$1)){
var c__5548__auto___19310 = cljs.core.chunk_first(seq__19062_19309__$1);
var G__19311 = cljs.core.chunk_rest(seq__19062_19309__$1);
var G__19312 = c__5548__auto___19310;
var G__19313 = cljs.core.count(c__5548__auto___19310);
var G__19314 = (0);
seq__19062_19294 = G__19311;
chunk__19064_19295 = G__19312;
count__19065_19296 = G__19313;
i__19066_19297 = G__19314;
continue;
} else {
var map__19071_19315 = cljs.core.first(seq__19062_19309__$1);
var map__19071_19316__$1 = cljs.core.__destructure_map(map__19071_19315);
var task_19317 = map__19071_19316__$1;
var fn_str_19318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19071_19316__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_19319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19071_19316__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_19320 = goog.getObjectByName(fn_str_19318,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_19319)].join(''));

fn_obj_19320(path,new_link_19293);


var G__19321 = cljs.core.next(seq__19062_19309__$1);
var G__19322 = null;
var G__19323 = (0);
var G__19324 = (0);
seq__19062_19294 = G__19321;
chunk__19064_19295 = G__19322;
count__19065_19296 = G__19323;
i__19066_19297 = G__19324;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_19291);
});})(seq__19029_19287,chunk__19033_19288,count__19034_19289,i__19035_19290,seq__18846,chunk__18848,count__18849,i__18850,new_link_19293,path_match_19292,node_19291,path,seq__18846__$1,temp__5823__auto__,map__18845,map__18845__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_19292], 0));

goog.dom.insertSiblingAfter(new_link_19293,node_19291);


var G__19325 = seq__19029_19287;
var G__19326 = chunk__19033_19288;
var G__19327 = count__19034_19289;
var G__19328 = (i__19035_19290 + (1));
seq__19029_19287 = G__19325;
chunk__19033_19288 = G__19326;
count__19034_19289 = G__19327;
i__19035_19290 = G__19328;
continue;
} else {
var G__19329 = seq__19029_19287;
var G__19330 = chunk__19033_19288;
var G__19331 = count__19034_19289;
var G__19332 = (i__19035_19290 + (1));
seq__19029_19287 = G__19329;
chunk__19033_19288 = G__19330;
count__19034_19289 = G__19331;
i__19035_19290 = G__19332;
continue;
}
} else {
var G__19333 = seq__19029_19287;
var G__19334 = chunk__19033_19288;
var G__19335 = count__19034_19289;
var G__19336 = (i__19035_19290 + (1));
seq__19029_19287 = G__19333;
chunk__19033_19288 = G__19334;
count__19034_19289 = G__19335;
i__19035_19290 = G__19336;
continue;
}
} else {
var temp__5823__auto___19337__$1 = cljs.core.seq(seq__19029_19287);
if(temp__5823__auto___19337__$1){
var seq__19029_19338__$1 = temp__5823__auto___19337__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19029_19338__$1)){
var c__5548__auto___19339 = cljs.core.chunk_first(seq__19029_19338__$1);
var G__19340 = cljs.core.chunk_rest(seq__19029_19338__$1);
var G__19341 = c__5548__auto___19339;
var G__19342 = cljs.core.count(c__5548__auto___19339);
var G__19343 = (0);
seq__19029_19287 = G__19340;
chunk__19033_19288 = G__19341;
count__19034_19289 = G__19342;
i__19035_19290 = G__19343;
continue;
} else {
var node_19344 = cljs.core.first(seq__19029_19338__$1);
if(cljs.core.not(node_19344.shadow$old)){
var path_match_19345 = shadow.cljs.devtools.client.browser.match_paths(node_19344.getAttribute("href"),path);
if(cljs.core.truth_(path_match_19345)){
var new_link_19346 = (function (){var G__19072 = node_19344.cloneNode(true);
G__19072.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_19345),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__19072;
})();
(node_19344.shadow$old = true);

(new_link_19346.onload = ((function (seq__19029_19287,chunk__19033_19288,count__19034_19289,i__19035_19290,seq__18846,chunk__18848,count__18849,i__18850,new_link_19346,path_match_19345,node_19344,seq__19029_19338__$1,temp__5823__auto___19337__$1,path,seq__18846__$1,temp__5823__auto__,map__18845,map__18845__$1,msg,updates,reload_info){
return (function (e){
var seq__19073_19347 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__19075_19348 = null;
var count__19076_19349 = (0);
var i__19077_19350 = (0);
while(true){
if((i__19077_19350 < count__19076_19349)){
var map__19081_19351 = chunk__19075_19348.cljs$core$IIndexed$_nth$arity$2(null,i__19077_19350);
var map__19081_19352__$1 = cljs.core.__destructure_map(map__19081_19351);
var task_19353 = map__19081_19352__$1;
var fn_str_19354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19081_19352__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_19355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19081_19352__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_19356 = goog.getObjectByName(fn_str_19354,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_19355)].join(''));

fn_obj_19356(path,new_link_19346);


var G__19357 = seq__19073_19347;
var G__19358 = chunk__19075_19348;
var G__19359 = count__19076_19349;
var G__19360 = (i__19077_19350 + (1));
seq__19073_19347 = G__19357;
chunk__19075_19348 = G__19358;
count__19076_19349 = G__19359;
i__19077_19350 = G__19360;
continue;
} else {
var temp__5823__auto___19361__$2 = cljs.core.seq(seq__19073_19347);
if(temp__5823__auto___19361__$2){
var seq__19073_19362__$1 = temp__5823__auto___19361__$2;
if(cljs.core.chunked_seq_QMARK_(seq__19073_19362__$1)){
var c__5548__auto___19363 = cljs.core.chunk_first(seq__19073_19362__$1);
var G__19364 = cljs.core.chunk_rest(seq__19073_19362__$1);
var G__19365 = c__5548__auto___19363;
var G__19366 = cljs.core.count(c__5548__auto___19363);
var G__19367 = (0);
seq__19073_19347 = G__19364;
chunk__19075_19348 = G__19365;
count__19076_19349 = G__19366;
i__19077_19350 = G__19367;
continue;
} else {
var map__19082_19368 = cljs.core.first(seq__19073_19362__$1);
var map__19082_19369__$1 = cljs.core.__destructure_map(map__19082_19368);
var task_19370 = map__19082_19369__$1;
var fn_str_19371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19082_19369__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_19372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19082_19369__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_19373 = goog.getObjectByName(fn_str_19371,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_19372)].join(''));

fn_obj_19373(path,new_link_19346);


var G__19374 = cljs.core.next(seq__19073_19362__$1);
var G__19375 = null;
var G__19376 = (0);
var G__19377 = (0);
seq__19073_19347 = G__19374;
chunk__19075_19348 = G__19375;
count__19076_19349 = G__19376;
i__19077_19350 = G__19377;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_19344);
});})(seq__19029_19287,chunk__19033_19288,count__19034_19289,i__19035_19290,seq__18846,chunk__18848,count__18849,i__18850,new_link_19346,path_match_19345,node_19344,seq__19029_19338__$1,temp__5823__auto___19337__$1,path,seq__18846__$1,temp__5823__auto__,map__18845,map__18845__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_19345], 0));

goog.dom.insertSiblingAfter(new_link_19346,node_19344);


var G__19378 = cljs.core.next(seq__19029_19338__$1);
var G__19379 = null;
var G__19380 = (0);
var G__19381 = (0);
seq__19029_19287 = G__19378;
chunk__19033_19288 = G__19379;
count__19034_19289 = G__19380;
i__19035_19290 = G__19381;
continue;
} else {
var G__19382 = cljs.core.next(seq__19029_19338__$1);
var G__19383 = null;
var G__19384 = (0);
var G__19385 = (0);
seq__19029_19287 = G__19382;
chunk__19033_19288 = G__19383;
count__19034_19289 = G__19384;
i__19035_19290 = G__19385;
continue;
}
} else {
var G__19386 = cljs.core.next(seq__19029_19338__$1);
var G__19387 = null;
var G__19388 = (0);
var G__19389 = (0);
seq__19029_19287 = G__19386;
chunk__19033_19288 = G__19387;
count__19034_19289 = G__19388;
i__19035_19290 = G__19389;
continue;
}
}
} else {
}
}
break;
}


var G__19390 = cljs.core.next(seq__18846__$1);
var G__19391 = null;
var G__19392 = (0);
var G__19393 = (0);
seq__18846 = G__19390;
chunk__18848 = G__19391;
count__18849 = G__19392;
i__18850 = G__19393;
continue;
} else {
var G__19394 = cljs.core.next(seq__18846__$1);
var G__19395 = null;
var G__19396 = (0);
var G__19397 = (0);
seq__18846 = G__19394;
chunk__18848 = G__19395;
count__18849 = G__19396;
i__18850 = G__19397;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__19084 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__19084) : success(G__19084));
}catch (e19083){var e = e19083;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail(e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__19085,success,fail){
var map__19086 = p__19085;
var map__19086__$1 = cljs.core.__destructure_map(map__19086);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19086__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__19088 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__19088) : success(G__19088));
}catch (e19087){var e = e19087;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail(e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__19089,done,error){
var map__19090 = p__19089;
var map__19090__$1 = cljs.core.__destructure_map(map__19090);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19090__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done());
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__19091,done,error){
var map__19092 = p__19091;
var map__19092__$1 = cljs.core.__destructure_map(map__19092);
var msg = map__19092__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19092__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19092__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19092__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__19093){
var map__19094 = p__19093;
var map__19094__$1 = cljs.core.__destructure_map(map__19094);
var src = map__19094__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19094__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5023__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5023__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__19095 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__19095) : done(G__19095));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__19096){
var map__19097 = p__19096;
var map__19097__$1 = cljs.core.__destructure_map(map__19097);
var msg__$1 = map__19097__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19097__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done(sources_to_load));
}catch (e19098){var ex = e19098;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error(ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__19099){
var map__19100 = p__19099;
var map__19100__$1 = cljs.core.__destructure_map(map__19100);
var env = map__19100__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19100__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__19101){
var map__19102 = p__19101;
var map__19102__$1 = cljs.core.__destructure_map(map__19102);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19102__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19102__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__19103){
var map__19104 = p__19103;
var map__19104__$1 = cljs.core.__destructure_map(map__19104);
var svc = map__19104__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19104__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
