goog.provide('shadow.grove.ui.badge');
shadow.grove.ui.badge.$base = (shadow.css.sel("shadow_grove_ui_badge__L6_C3"));
shadow.grove.ui.badge.$default = (shadow.css.sel("shadow_grove_ui_badge__L17_C3"));
shadow.grove.ui.badge.$secondary = (shadow.css.sel("shadow_grove_ui_badge__L21_C3"));
shadow.grove.ui.badge.$destructive = (shadow.css.sel("shadow_grove_ui_badge__L25_C3"));
shadow.grove.ui.badge.$outline = (shadow.css.sel("shadow_grove_ui_badge__L29_C3"));
shadow.grove.ui.badge.variant_map = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"default","default",-1987822328),shadow.grove.ui.badge.$default,new cljs.core.Keyword(null,"secondary","secondary",-669381460),shadow.grove.ui.badge.$secondary,new cljs.core.Keyword(null,"destructive","destructive",-1587723243),shadow.grove.ui.badge.$destructive,new cljs.core.Keyword(null,"outline","outline",793464534),shadow.grove.ui.badge.$outline], null);
shadow.grove.ui.badge.fragment_l42_c5 = shadow.arborist.fragments.make_fragment_code((function (frag9349,env9350,vals9351,element_fn9352){
var el0_div = element_fn9352(new cljs.core.Keyword(null,"div","div",1057191632));
var d1 = shadow.arborist.fragments.managed_create(env9350,(vals9351[1]));
shadow.arborist.fragments.set_attr(env9350,el0_div,new cljs.core.Keyword(null,"class","class",-2030961996),null,(vals9351[0]));

shadow.arborist.fragments.managed_append(el0_div,d1);

return [el0_div,d1];
}),shadow.arborist.fragments.frag_single_dom_mount,(function (this9382,env9383,exports9384,oldv9385,newv9386){
shadow.arborist.fragments.update_attr(env9383,exports9384,0,new cljs.core.Keyword(null,"class","class",-2030961996),(oldv9385[0]),(newv9386[0]));

shadow.arborist.fragments.update_managed(this9382,env9383,exports9384,1,(oldv9385[1]),(newv9386[1]));

return undefined;
}),(function (env9401,exports9400,oldv9402,dom_remove9403){
if(dom_remove9403){
shadow.arborist.fragments.dom_remove((exports9400[0]));
} else {
}

shadow.arborist.fragments.managed_remove((exports9400[1]),false);

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"shadow/grove/ui/badge.cljs",new cljs.core.Keyword(null,"line","line",212345235),42,new cljs.core.Keyword(null,"column","column",2078222095),5], null));

shadow.grove.ui.badge.badge = (function shadow$grove$ui$badge$badge(opts,body){
var map__9343 = opts;
var map__9343__$1 = cljs.core.__destructure_map(map__9343);
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9343__$1,new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"default","default",-1987822328));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9343__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return shadow.arborist.fragments.fragment_init([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [shadow.grove.ui.badge.$base,cljs.core.get.cljs$core$IFn$_invoke$arity$3(shadow.grove.ui.badge.variant_map,variant,shadow.grove.ui.badge.$default),class$], null),body],null,shadow.grove.ui.badge.fragment_l42_c5);
});

//# sourceMappingURL=shadow.grove.ui.badge.js.map
