goog.provide('shadow.grove.ui.dialog');
shadow.grove.ui.dialog.$overlay = (shadow.css.sel("shadow_grove_ui_dialog__L6_C3"));
shadow.grove.ui.dialog.$panel = (shadow.css.sel("shadow_grove_ui_dialog__L18_C3"));
shadow.grove.ui.dialog.$close_button = (shadow.css.sel("shadow_grove_ui_dialog__L32_C3"));
shadow.grove.ui.dialog.$header = (shadow.css.sel("shadow_grove_ui_dialog__L54_C3"));
shadow.grove.ui.dialog.$title = (shadow.css.sel("shadow_grove_ui_dialog__L59_C3"));
shadow.grove.ui.dialog.$description = (shadow.css.sel("shadow_grove_ui_dialog__L64_C3"));
shadow.grove.ui.dialog.$footer = (shadow.css.sel("shadow_grove_ui_dialog__L68_C3"));
shadow.grove.ui.dialog.fragment_l96_c9 = shadow.arborist.fragments.make_fragment_code((function (frag9498,env9499,vals9500,element_fn9501){
var el0_div = element_fn9501(new cljs.core.Keyword(null,"div","div",1057191632));
var el1_div = element_fn9501(new cljs.core.Keyword(null,"div","div",1057191632));
var el2_button = element_fn9501(new cljs.core.Keyword(null,"button","button",1456579943));
var d4 = shadow.arborist.fragments.managed_create(env9499,(vals9500[0]));
shadow.arborist.fragments.set_attr(env9499,el0_div,new cljs.core.Keyword(null,"class","class",-2030961996),null,shadow.grove.ui.dialog.$overlay);

shadow.arborist.fragments.frag_add_static_event_listener(frag9498,el0_div,"click",new cljs.core.Keyword("shadow.grove.ui.dialog","overlay-click!","shadow.grove.ui.dialog/overlay-click!",861807186));

shadow.arborist.fragments.append_child(el0_div,el1_div);

shadow.arborist.fragments.set_attr(env9499,el1_div,new cljs.core.Keyword(null,"class","class",-2030961996),null,shadow.grove.ui.dialog.$panel);

shadow.arborist.fragments.set_attr(env9499,el1_div,new cljs.core.Keyword(null,"role","role",-736691072),null,"dialog");

shadow.arborist.fragments.set_attr(env9499,el1_div,new cljs.core.Keyword(null,"aria-modal","aria-modal",553474260),null,"true");

shadow.arborist.fragments.append_child(el1_div,el2_button);

(el2_button.textContent = "\u00D7");

shadow.arborist.fragments.set_attr(env9499,el2_button,new cljs.core.Keyword(null,"class","class",-2030961996),null,shadow.grove.ui.dialog.$close_button);

shadow.arborist.fragments.frag_add_static_event_listener(frag9498,el2_button,"click",new cljs.core.Keyword("shadow.grove.ui.dialog","close!","shadow.grove.ui.dialog/close!",869871835));

shadow.arborist.fragments.set_attr(env9499,el2_button,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),null,"Close");

shadow.arborist.fragments.managed_append(el1_div,d4);

return [el0_div,d4];
}),shadow.arborist.fragments.frag_single_dom_mount,(function (this9505,env9506,exports9507,oldv9508,newv9509){
shadow.arborist.fragments.update_managed(this9505,env9506,exports9507,1,(oldv9508[0]),(newv9509[0]));

return undefined;
}),(function (env9511,exports9510,oldv9512,dom_remove9513){
if(dom_remove9513){
shadow.arborist.fragments.dom_remove((exports9510[0]));
} else {
}

shadow.arborist.fragments.managed_remove((exports9510[1]),false);

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"shadow/grove/ui/dialog.cljs",new cljs.core.Keyword(null,"line","line",212345235),96,new cljs.core.Keyword(null,"column","column",2078222095),9], null));

shadow.grove.ui.dialog.dialog = shadow.grove.components.make_component_config("shadow.grove.ui.dialog/dialog",[shadow.grove.components.make_slot_config((0),(6),(function (comp9344){
var opts = shadow.grove.components.get_arg(comp9344,0);
return opts;
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"bind","bind",-113428417),new cljs.core.Keyword(null,"name","name",1843675177),"__slot$0",new cljs.core.Keyword(null,"column","column",2078222095),9,new cljs.core.Keyword(null,"line","line",212345235),73], null)),shadow.grove.components.make_slot_config((1),(8),shadow.grove.components.slot_destructure((0),new cljs.core.Keyword(null,"open","open",-1763596448),null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"destructure","destructure",90920883),new cljs.core.Keyword(null,"name","name",1843675177),"open",new cljs.core.Keyword(null,"from","from",1815293044),"__slot$0",new cljs.core.Keyword(null,"column","column",2078222095),17,new cljs.core.Keyword(null,"line","line",212345235),73], null)),shadow.grove.components.make_slot_config((1),(8),shadow.grove.components.slot_destructure((0),new cljs.core.Keyword(null,"on-close","on-close",-761178394),null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"destructure","destructure",90920883),new cljs.core.Keyword(null,"name","name",1843675177),"on-close",new cljs.core.Keyword(null,"from","from",1815293044),"__slot$0",new cljs.core.Keyword(null,"column","column",2078222095),22,new cljs.core.Keyword(null,"line","line",212345235),73], null)),shadow.grove.components.make_slot_config((6),(0),(function (comp9344){
var open = shadow.grove.components.get_slot_value(comp9344,(1));
var on_close = shadow.grove.components.get_slot_value(comp9344,(2));
return shadow.grove.components.slot_effect(open,(function (env){
if(cljs.core.truth_(open)){
var handler = (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Escape",e.key)){
if(cljs.core.truth_(on_close)){
return (on_close.cljs$core$IFn$_invoke$arity$0 ? on_close.cljs$core$IFn$_invoke$arity$0() : on_close());
} else {
return null;
}
} else {
return null;
}
});
document.addEventListener("keydown",handler);

return (function (){
return document.removeEventListener("keydown",handler);
});
} else {
return null;
}
}));
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"bind","bind",-113428417),new cljs.core.Keyword(null,"name","name",1843675177),"_",new cljs.core.Keyword(null,"column","column",2078222095),null,new cljs.core.Keyword(null,"line","line",212345235),null], null))],(15),cljs.core.PersistentArrayMap.EMPTY,(function (comp9344,old9345,new9346){
shadow.grove.components.check_args_BANG_(comp9344,new9346,2);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old9345.cljs$core$IIndexed$_nth$arity$2(null,0),new9346.cljs$core$IIndexed$_nth$arity$2(null,0))){
shadow.grove.components.arg_triggers_slots_BANG_(comp9344,0,(1));
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old9345.cljs$core$IIndexed$_nth$arity$2(null,1),new9346.cljs$core$IIndexed$_nth$arity$2(null,1))){
shadow.grove.components.arg_triggers_render_BANG_(comp9344,1);
} else {
}

return undefined;
}),(2),(function (comp9344){
var body = shadow.grove.components.get_arg(comp9344,1);
var open = shadow.grove.components.get_slot_value(comp9344,(1));
if(cljs.core.truth_(open)){
return shadow.grove.portal.cljs$core$IFn$_invoke$arity$1(shadow.arborist.fragments.fragment_init([body],null,shadow.grove.ui.dialog.fragment_l96_c9));
} else {
return null;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("shadow.grove.ui.dialog","close!","shadow.grove.ui.dialog/close!",869871835),(function (G__9407,G__9408,G__9409){
var comp9344_9747 = shadow.grove.components.get_component(G__9407);
var on_close_9748 = shadow.grove.components.get_slot_value(comp9344_9747,(2));
var env_9749 = G__9407;
var ev_9750 = G__9408;
var e_9751 = G__9409;
if(cljs.core.truth_(on_close_9748)){
(on_close_9748.cljs$core$IFn$_invoke$arity$0 ? on_close_9748.cljs$core$IFn$_invoke$arity$0() : on_close_9748());
} else {
}

return null;
}),new cljs.core.Keyword("shadow.grove.ui.dialog","overlay-click!","shadow.grove.ui.dialog/overlay-click!",861807186),(function (G__9411,G__9412,G__9413){
var comp9344_9770 = shadow.grove.components.get_component(G__9411);
var on_close_9771 = shadow.grove.components.get_slot_value(comp9344_9770,(2));
var env_9772 = G__9411;
var ev_9773 = G__9412;
var e_9774 = G__9413;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e_9774.target,e_9774.currentTarget)){
if(cljs.core.truth_(on_close_9771)){
(on_close_9771.cljs$core$IFn$_invoke$arity$0 ? on_close_9771.cljs$core$IFn$_invoke$arity$0() : on_close_9771());
} else {
}
} else {
}

return null;
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["opts","body"], null),new cljs.core.Keyword(null,"file","file",-1269645878),"shadow/grove/ui/dialog.cljs",new cljs.core.Keyword(null,"line","line",212345235),72,new cljs.core.Keyword(null,"column","column",2078222095),7], null));
shadow.grove.ui.dialog.fragment_l108_c3 = shadow.arborist.fragments.make_fragment_code((function (frag9573,env9574,vals9575,element_fn9576){
var el0_div = element_fn9576(new cljs.core.Keyword(null,"div","div",1057191632));
var d1 = shadow.arborist.fragments.managed_create(env9574,(vals9575[1]));
shadow.arborist.fragments.set_attr(env9574,el0_div,new cljs.core.Keyword(null,"class","class",-2030961996),null,(vals9575[0]));

shadow.arborist.fragments.managed_append(el0_div,d1);

return [el0_div,d1];
}),shadow.arborist.fragments.frag_single_dom_mount,(function (this9580,env9581,exports9582,oldv9583,newv9584){
shadow.arborist.fragments.update_attr(env9581,exports9582,0,new cljs.core.Keyword(null,"class","class",-2030961996),(oldv9583[0]),(newv9584[0]));

shadow.arborist.fragments.update_managed(this9580,env9581,exports9582,1,(oldv9583[1]),(newv9584[1]));

return undefined;
}),(function (env9586,exports9585,oldv9587,dom_remove9588){
if(dom_remove9588){
shadow.arborist.fragments.dom_remove((exports9585[0]));
} else {
}

shadow.arborist.fragments.managed_remove((exports9585[1]),false);

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"shadow/grove/ui/dialog.cljs",new cljs.core.Keyword(null,"line","line",212345235),108,new cljs.core.Keyword(null,"column","column",2078222095),3], null));

shadow.grove.ui.dialog.dialog_header = (function shadow$grove$ui$dialog$dialog_header(opts,body){
return shadow.arborist.fragments.fragment_init([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shadow.grove.ui.dialog.$header,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(opts)], null),body],null,shadow.grove.ui.dialog.fragment_l108_c3);
});
shadow.grove.ui.dialog.fragment_l112_c3 = shadow.arborist.fragments.make_fragment_code((function (frag9628,env9629,vals9630,element_fn9631){
var el0_h2 = element_fn9631(new cljs.core.Keyword(null,"h2","h2",-372662728));
var d1 = shadow.arborist.fragments.managed_create(env9629,(vals9630[1]));
shadow.arborist.fragments.set_attr(env9629,el0_h2,new cljs.core.Keyword(null,"class","class",-2030961996),null,(vals9630[0]));

shadow.arborist.fragments.managed_append(el0_h2,d1);

return [el0_h2,d1];
}),shadow.arborist.fragments.frag_single_dom_mount,(function (this9636,env9637,exports9638,oldv9639,newv9640){
shadow.arborist.fragments.update_attr(env9637,exports9638,0,new cljs.core.Keyword(null,"class","class",-2030961996),(oldv9639[0]),(newv9640[0]));

shadow.arborist.fragments.update_managed(this9636,env9637,exports9638,1,(oldv9639[1]),(newv9640[1]));

return undefined;
}),(function (env9642,exports9641,oldv9643,dom_remove9644){
if(dom_remove9644){
shadow.arborist.fragments.dom_remove((exports9641[0]));
} else {
}

shadow.arborist.fragments.managed_remove((exports9641[1]),false);

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"shadow/grove/ui/dialog.cljs",new cljs.core.Keyword(null,"line","line",212345235),112,new cljs.core.Keyword(null,"column","column",2078222095),3], null));

shadow.grove.ui.dialog.dialog_title = (function shadow$grove$ui$dialog$dialog_title(opts,body){
return shadow.arborist.fragments.fragment_init([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shadow.grove.ui.dialog.$title,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(opts)], null),body],null,shadow.grove.ui.dialog.fragment_l112_c3);
});
shadow.grove.ui.dialog.fragment_l116_c3 = shadow.arborist.fragments.make_fragment_code((function (frag9687,env9688,vals9689,element_fn9690){
var el0_p = element_fn9690(new cljs.core.Keyword(null,"p","p",151049309));
var d1 = shadow.arborist.fragments.managed_create(env9688,(vals9689[1]));
shadow.arborist.fragments.set_attr(env9688,el0_p,new cljs.core.Keyword(null,"class","class",-2030961996),null,(vals9689[0]));

shadow.arborist.fragments.managed_append(el0_p,d1);

return [el0_p,d1];
}),shadow.arborist.fragments.frag_single_dom_mount,(function (this9694,env9695,exports9696,oldv9697,newv9698){
shadow.arborist.fragments.update_attr(env9695,exports9696,0,new cljs.core.Keyword(null,"class","class",-2030961996),(oldv9697[0]),(newv9698[0]));

shadow.arborist.fragments.update_managed(this9694,env9695,exports9696,1,(oldv9697[1]),(newv9698[1]));

return undefined;
}),(function (env9700,exports9699,oldv9701,dom_remove9702){
if(dom_remove9702){
shadow.arborist.fragments.dom_remove((exports9699[0]));
} else {
}

shadow.arborist.fragments.managed_remove((exports9699[1]),false);

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"shadow/grove/ui/dialog.cljs",new cljs.core.Keyword(null,"line","line",212345235),116,new cljs.core.Keyword(null,"column","column",2078222095),3], null));

shadow.grove.ui.dialog.dialog_description = (function shadow$grove$ui$dialog$dialog_description(opts,body){
return shadow.arborist.fragments.fragment_init([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shadow.grove.ui.dialog.$description,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(opts)], null),body],null,shadow.grove.ui.dialog.fragment_l116_c3);
});
shadow.grove.ui.dialog.fragment_l120_c3 = shadow.arborist.fragments.make_fragment_code((function (frag9709,env9710,vals9711,element_fn9712){
var el0_div = element_fn9712(new cljs.core.Keyword(null,"div","div",1057191632));
var d1 = shadow.arborist.fragments.managed_create(env9710,(vals9711[1]));
shadow.arborist.fragments.set_attr(env9710,el0_div,new cljs.core.Keyword(null,"class","class",-2030961996),null,(vals9711[0]));

shadow.arborist.fragments.managed_append(el0_div,d1);

return [el0_div,d1];
}),shadow.arborist.fragments.frag_single_dom_mount,(function (this9716,env9717,exports9718,oldv9719,newv9720){
shadow.arborist.fragments.update_attr(env9717,exports9718,0,new cljs.core.Keyword(null,"class","class",-2030961996),(oldv9719[0]),(newv9720[0]));

shadow.arborist.fragments.update_managed(this9716,env9717,exports9718,1,(oldv9719[1]),(newv9720[1]));

return undefined;
}),(function (env9722,exports9721,oldv9723,dom_remove9724){
if(dom_remove9724){
shadow.arborist.fragments.dom_remove((exports9721[0]));
} else {
}

shadow.arborist.fragments.managed_remove((exports9721[1]),false);

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"shadow/grove/ui/dialog.cljs",new cljs.core.Keyword(null,"line","line",212345235),120,new cljs.core.Keyword(null,"column","column",2078222095),3], null));

shadow.grove.ui.dialog.dialog_footer = (function shadow$grove$ui$dialog$dialog_footer(opts,body){
return shadow.arborist.fragments.fragment_init([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shadow.grove.ui.dialog.$footer,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(opts)], null),body],null,shadow.grove.ui.dialog.fragment_l120_c3);
});

//# sourceMappingURL=shadow.grove.ui.dialog.js.map
