goog.provide('shadow.grove.ui.separator');
shadow.grove.ui.separator.$base = (shadow.css.sel("shadow_grove_ui_separator__L6_C3"));
shadow.grove.ui.separator.$horizontal = (shadow.css.sel("shadow_grove_ui_separator__L10_C3"));
shadow.grove.ui.separator.$vertical = (shadow.css.sel("shadow_grove_ui_separator__L14_C3"));
shadow.grove.ui.separator.fragment_l21_c5 = shadow.arborist.fragments.make_fragment_code((function (frag9339,env9340,vals9341,element_fn9342){
var el0_div = element_fn9342(new cljs.core.Keyword(null,"div","div",1057191632));
shadow.arborist.fragments.set_attr(env9340,el0_div,new cljs.core.Keyword(null,"role","role",-736691072),null,"separator");

shadow.arborist.fragments.set_attr(env9340,el0_div,new cljs.core.Keyword(null,"aria-orientation","aria-orientation",-218196331),null,(vals9341[0]));

shadow.arborist.fragments.set_attr(env9340,el0_div,new cljs.core.Keyword(null,"class","class",-2030961996),null,(vals9341[1]));

return [el0_div];
}),shadow.arborist.fragments.frag_single_dom_mount,(function (this9372,env9373,exports9374,oldv9376,newv9381){
shadow.arborist.fragments.update_attr(env9373,exports9374,0,new cljs.core.Keyword(null,"aria-orientation","aria-orientation",-218196331),(oldv9376[0]),(newv9381[0]));

shadow.arborist.fragments.update_attr(env9373,exports9374,0,new cljs.core.Keyword(null,"class","class",-2030961996),(oldv9376[1]),(newv9381[1]));

return undefined;
}),(function (env9393,exports9391,oldv9394,dom_remove9395){
if(dom_remove9395){
shadow.arborist.fragments.dom_remove((exports9391[0]));
} else {
}

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"shadow/grove/ui/separator.cljs",new cljs.core.Keyword(null,"line","line",212345235),21,new cljs.core.Keyword(null,"column","column",2078222095),5], null));

shadow.grove.ui.separator.separator = (function shadow$grove$ui$separator$separator(opts){
var map__9319 = opts;
var map__9319__$1 = cljs.core.__destructure_map(map__9319);
var orientation = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9319__$1,new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"horizontal","horizontal",2062109475));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9319__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var orient_class = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orientation,new cljs.core.Keyword(null,"vertical","vertical",718696748)))?shadow.grove.ui.separator.$vertical:shadow.grove.ui.separator.$horizontal);
return shadow.arborist.fragments.fragment_init([cljs.core.name(orientation),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [shadow.grove.ui.separator.$base,orient_class,class$], null)],null,shadow.grove.ui.separator.fragment_l21_c5);
});

//# sourceMappingURL=shadow.grove.ui.separator.js.map
