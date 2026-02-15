goog.provide('shadow.grove.ui.button');
shadow.grove.ui.button.$base = (shadow.css.sel("shadow_grove_ui_button__L6_C3"));
shadow.grove.ui.button.$default = (shadow.css.sel("shadow_grove_ui_button__L22_C3"));
shadow.grove.ui.button.$destructive = (shadow.css.sel("shadow_grove_ui_button__L27_C3"));
shadow.grove.ui.button.$outline = (shadow.css.sel("shadow_grove_ui_button__L32_C3"));
shadow.grove.ui.button.$secondary = (shadow.css.sel("shadow_grove_ui_button__L39_C3"));
shadow.grove.ui.button.$ghost = (shadow.css.sel("shadow_grove_ui_button__L44_C3"));
shadow.grove.ui.button.$link = (shadow.css.sel("shadow_grove_ui_button__L50_C3"));
shadow.grove.ui.button.variant_map = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"default","default",-1987822328),shadow.grove.ui.button.$default,new cljs.core.Keyword(null,"destructive","destructive",-1587723243),shadow.grove.ui.button.$destructive,new cljs.core.Keyword(null,"outline","outline",793464534),shadow.grove.ui.button.$outline,new cljs.core.Keyword(null,"secondary","secondary",-669381460),shadow.grove.ui.button.$secondary,new cljs.core.Keyword(null,"ghost","ghost",-1531157576),shadow.grove.ui.button.$ghost,new cljs.core.Keyword(null,"link","link",-1769163468),shadow.grove.ui.button.$link], null);
shadow.grove.ui.button.$size_default = (shadow.css.sel("shadow_grove_ui_button__L65_C3"));
shadow.grove.ui.button.$size_sm = (shadow.css.sel("shadow_grove_ui_button__L69_C3"));
shadow.grove.ui.button.$size_lg = (shadow.css.sel("shadow_grove_ui_button__L74_C3"));
shadow.grove.ui.button.$size_icon = (shadow.css.sel("shadow_grove_ui_button__L78_C3"));
shadow.grove.ui.button.size_map = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default","default",-1987822328),shadow.grove.ui.button.$size_default,new cljs.core.Keyword(null,"sm","sm",-1402575065),shadow.grove.ui.button.$size_sm,new cljs.core.Keyword(null,"lg","lg",-80787836),shadow.grove.ui.button.$size_lg,new cljs.core.Keyword(null,"icon","icon",1679606541),shadow.grove.ui.button.$size_icon], null);
shadow.grove.ui.button.fragment_l92_c5 = shadow.arborist.fragments.make_fragment_code((function (frag19403,env19404,vals19405,element_fn19406){
var el0_button = element_fn19406(new cljs.core.Keyword(null,"button","button",1456579943));
var d1 = shadow.arborist.fragments.managed_create(env19404,(vals19405[4]));
shadow.arborist.fragments.set_attr(env19404,el0_button,new cljs.core.Keyword(null,"class","class",-2030961996),null,(vals19405[0]));

shadow.arborist.fragments.set_attr(env19404,el0_button,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),null,(vals19405[1]));

shadow.arborist.fragments.set_attr(env19404,el0_button,new cljs.core.Keyword(null,"type","type",1174270348),null,(vals19405[2]));

shadow.arborist.fragments.frag_add_updating_event_listener(frag19403,el0_button,"click",3);

shadow.arborist.fragments.managed_append(el0_button,d1);

return [el0_button,d1];
}),shadow.arborist.fragments.frag_single_dom_mount,(function (this19410,env19411,exports19412,oldv19413,newv19414){
shadow.arborist.fragments.update_attr(env19411,exports19412,0,new cljs.core.Keyword(null,"class","class",-2030961996),(oldv19413[0]),(newv19414[0]));

shadow.arborist.fragments.update_attr(env19411,exports19412,0,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(oldv19413[1]),(newv19414[1]));

shadow.arborist.fragments.update_attr(env19411,exports19412,0,new cljs.core.Keyword(null,"type","type",1174270348),(oldv19413[2]),(newv19414[2]));

shadow.arborist.fragments.update_managed(this19410,env19411,exports19412,1,(oldv19413[4]),(newv19414[4]));

return undefined;
}),(function (env19416,exports19415,oldv19417,dom_remove19418){
if(dom_remove19418){
shadow.arborist.fragments.dom_remove((exports19415[0]));
} else {
}

shadow.arborist.fragments.managed_remove((exports19415[1]),false);

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"shadow/grove/ui/button.cljs",new cljs.core.Keyword(null,"line","line",212345235),92,new cljs.core.Keyword(null,"column","column",2078222095),5], null));

shadow.grove.ui.button.button = (function shadow$grove$ui$button$button(opts,body){
var map__19398 = opts;
var map__19398__$1 = cljs.core.__destructure_map(map__19398);
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19398__$1,new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"default","default",-1987822328));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19398__$1,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"default","default",-1987822328));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19398__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19398__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19398__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19398__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return shadow.arborist.fragments.fragment_init([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [shadow.grove.ui.button.$base,cljs.core.get.cljs$core$IFn$_invoke$arity$3(shadow.grove.ui.button.variant_map,variant,shadow.grove.ui.button.$default),cljs.core.get.cljs$core$IFn$_invoke$arity$3(shadow.grove.ui.button.size_map,size,shadow.grove.ui.button.$size_default),class$], null),disabled,type,on_click,body],null,shadow.grove.ui.button.fragment_l92_c5);
});

//# sourceMappingURL=shadow.grove.ui.button.js.map
