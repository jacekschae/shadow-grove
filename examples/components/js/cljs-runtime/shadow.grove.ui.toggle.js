goog.provide('shadow.grove.ui.toggle');
shadow.grove.ui.toggle.$base = (shadow.css.sel("shadow_grove_ui_toggle__L6_C3"));
shadow.grove.ui.toggle.$outline = (shadow.css.sel("shadow_grove_ui_toggle__L26_C3"));
shadow.grove.ui.toggle.variant_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"outline","outline",793464534),shadow.grove.ui.toggle.$outline], null);
shadow.grove.ui.toggle.$size_default = (shadow.css.sel("shadow_grove_ui_toggle__L34_C3"));
shadow.grove.ui.toggle.$size_sm = (shadow.css.sel("shadow_grove_ui_toggle__L38_C3"));
shadow.grove.ui.toggle.$size_lg = (shadow.css.sel("shadow_grove_ui_toggle__L43_C3"));
shadow.grove.ui.toggle.size_map = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),shadow.grove.ui.toggle.$size_default,new cljs.core.Keyword(null,"sm","sm",-1402575065),shadow.grove.ui.toggle.$size_sm,new cljs.core.Keyword(null,"lg","lg",-80787836),shadow.grove.ui.toggle.$size_lg], null);
shadow.grove.ui.toggle.fragment_l62_c5 = shadow.arborist.fragments.make_fragment_code((function (frag9670,env9671,vals9672,element_fn9673){
var el0_button = element_fn9673(new cljs.core.Keyword(null,"button","button",1456579943));
var d1 = shadow.arborist.fragments.managed_create(env9671,(vals9672[4]));
shadow.arborist.fragments.set_attr(env9671,el0_button,new cljs.core.Keyword(null,"class","class",-2030961996),null,(vals9672[0]));

shadow.arborist.fragments.set_attr(env9671,el0_button,new cljs.core.Keyword(null,"type","type",1174270348),null,"button");

shadow.arborist.fragments.set_attr(env9671,el0_button,new cljs.core.Keyword(null,"aria-pressed","aria-pressed",-1749058631),null,(vals9672[1]));

shadow.arborist.fragments.set_attr(env9671,el0_button,new cljs.core.Keyword(null,"data-state","data-state",1518559596),null,(vals9672[2]));

shadow.arborist.fragments.set_attr(env9671,el0_button,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),null,(vals9672[3]));

shadow.arborist.fragments.frag_add_static_event_listener(frag9670,el0_button,"click",new cljs.core.Keyword("shadow.grove.ui.toggle","press!","shadow.grove.ui.toggle/press!",1239351909));

shadow.arborist.fragments.managed_append(el0_button,d1);

return [el0_button,d1];
}),shadow.arborist.fragments.frag_single_dom_mount,(function (this9677,env9678,exports9679,oldv9680,newv9681){
shadow.arborist.fragments.update_attr(env9678,exports9679,0,new cljs.core.Keyword(null,"class","class",-2030961996),(oldv9680[0]),(newv9681[0]));

shadow.arborist.fragments.update_attr(env9678,exports9679,0,new cljs.core.Keyword(null,"aria-pressed","aria-pressed",-1749058631),(oldv9680[1]),(newv9681[1]));

shadow.arborist.fragments.update_attr(env9678,exports9679,0,new cljs.core.Keyword(null,"data-state","data-state",1518559596),(oldv9680[2]),(newv9681[2]));

shadow.arborist.fragments.update_attr(env9678,exports9679,0,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(oldv9680[3]),(newv9681[3]));

shadow.arborist.fragments.update_managed(this9677,env9678,exports9679,1,(oldv9680[4]),(newv9681[4]));

return undefined;
}),(function (env9683,exports9682,oldv9684,dom_remove9685){
if(dom_remove9685){
shadow.arborist.fragments.dom_remove((exports9682[0]));
} else {
}

shadow.arborist.fragments.managed_remove((exports9682[1]),false);

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"shadow/grove/ui/toggle.cljs",new cljs.core.Keyword(null,"line","line",212345235),62,new cljs.core.Keyword(null,"column","column",2078222095),5], null));

shadow.grove.ui.toggle.toggle = shadow.grove.components.make_component_config("shadow.grove.ui.toggle/toggle",[shadow.grove.components.make_slot_config((0),(126),(function (comp9491){
var opts = shadow.grove.components.get_arg(comp9491,0);
return opts;
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"bind","bind",-113428417),new cljs.core.Keyword(null,"name","name",1843675177),"__slot$0",new cljs.core.Keyword(null,"column","column",2078222095),9,new cljs.core.Keyword(null,"line","line",212345235),52], null)),shadow.grove.components.make_slot_config((1),(0),shadow.grove.components.slot_destructure((0),new cljs.core.Keyword(null,"pressed","pressed",1100937946),false),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"destructure","destructure",90920883),new cljs.core.Keyword(null,"name","name",1843675177),"pressed",new cljs.core.Keyword(null,"from","from",1815293044),"__slot$0",new cljs.core.Keyword(null,"column","column",2078222095),17,new cljs.core.Keyword(null,"line","line",212345235),52], null)),shadow.grove.components.make_slot_config((1),(0),shadow.grove.components.slot_destructure((0),new cljs.core.Keyword(null,"on-change","on-change",-732046149),null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"destructure","destructure",90920883),new cljs.core.Keyword(null,"name","name",1843675177),"on-change",new cljs.core.Keyword(null,"from","from",1815293044),"__slot$0",new cljs.core.Keyword(null,"column","column",2078222095),25,new cljs.core.Keyword(null,"line","line",212345235),52], null)),shadow.grove.components.make_slot_config((1),(0),shadow.grove.components.slot_destructure((0),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"default","default",-1987822328)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"destructure","destructure",90920883),new cljs.core.Keyword(null,"name","name",1843675177),"variant",new cljs.core.Keyword(null,"from","from",1815293044),"__slot$0",new cljs.core.Keyword(null,"column","column",2078222095),35,new cljs.core.Keyword(null,"line","line",212345235),52], null)),shadow.grove.components.make_slot_config((1),(0),shadow.grove.components.slot_destructure((0),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"default","default",-1987822328)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"destructure","destructure",90920883),new cljs.core.Keyword(null,"name","name",1843675177),"size",new cljs.core.Keyword(null,"from","from",1815293044),"__slot$0",new cljs.core.Keyword(null,"column","column",2078222095),43,new cljs.core.Keyword(null,"line","line",212345235),52], null)),shadow.grove.components.make_slot_config((1),(0),shadow.grove.components.slot_destructure((0),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"destructure","destructure",90920883),new cljs.core.Keyword(null,"name","name",1843675177),"disabled",new cljs.core.Keyword(null,"from","from",1815293044),"__slot$0",new cljs.core.Keyword(null,"column","column",2078222095),48,new cljs.core.Keyword(null,"line","line",212345235),52], null)),shadow.grove.components.make_slot_config((1),(0),shadow.grove.components.slot_destructure((0),new cljs.core.Keyword(null,"class","class",-2030961996),null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"destructure","destructure",90920883),new cljs.core.Keyword(null,"name","name",1843675177),"class",new cljs.core.Keyword(null,"from","from",1815293044),"__slot$0",new cljs.core.Keyword(null,"column","column",2078222095),57,new cljs.core.Keyword(null,"line","line",212345235),52], null))],(127),cljs.core.PersistentArrayMap.EMPTY,(function (comp9491,old9492,new9493){
shadow.grove.components.check_args_BANG_(comp9491,new9493,2);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old9492.cljs$core$IIndexed$_nth$arity$2(null,0),new9493.cljs$core$IIndexed$_nth$arity$2(null,0))){
shadow.grove.components.arg_triggers_slots_BANG_(comp9491,0,(1));
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old9492.cljs$core$IIndexed$_nth$arity$2(null,1),new9493.cljs$core$IIndexed$_nth$arity$2(null,1))){
shadow.grove.components.arg_triggers_render_BANG_(comp9491,1);
} else {
}

return undefined;
}),(122),(function (comp9491){
var pressed = shadow.grove.components.get_slot_value(comp9491,(1));
var body = shadow.grove.components.get_arg(comp9491,1);
var variant = shadow.grove.components.get_slot_value(comp9491,(3));
var disabled = shadow.grove.components.get_slot_value(comp9491,(5));
var size = shadow.grove.components.get_slot_value(comp9491,(4));
var class$ = shadow.grove.components.get_slot_value(comp9491,(6));
return shadow.arborist.fragments.fragment_init([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [shadow.grove.ui.toggle.$base,cljs.core.get.cljs$core$IFn$_invoke$arity$2(shadow.grove.ui.toggle.variant_map,variant),cljs.core.get.cljs$core$IFn$_invoke$arity$3(shadow.grove.ui.toggle.size_map,size,shadow.grove.ui.toggle.$size_default),class$], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.boolean$(pressed)),(cljs.core.truth_(pressed)?"on":"off"),disabled,body],null,shadow.grove.ui.toggle.fragment_l62_c5);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("shadow.grove.ui.toggle","press!","shadow.grove.ui.toggle/press!",1239351909),(function (G__9494,G__9495,G__9496){
var comp9491_9741 = shadow.grove.components.get_component(G__9494);
var pressed_9742 = shadow.grove.components.get_slot_value(comp9491_9741,(1));
var on_change_9743 = shadow.grove.components.get_slot_value(comp9491_9741,(2));
var env_9744 = G__9494;
var ev_9745 = G__9495;
var e_9746 = G__9496;
if(cljs.core.truth_(on_change_9743)){
var G__9704_9752 = cljs.core.not(pressed_9742);
(on_change_9743.cljs$core$IFn$_invoke$arity$1 ? on_change_9743.cljs$core$IFn$_invoke$arity$1(G__9704_9752) : on_change_9743(G__9704_9752));
} else {
}

return null;
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["opts","body"], null),new cljs.core.Keyword(null,"file","file",-1269645878),"shadow/grove/ui/toggle.cljs",new cljs.core.Keyword(null,"line","line",212345235),51,new cljs.core.Keyword(null,"column","column",2078222095),7], null));

//# sourceMappingURL=shadow.grove.ui.toggle.js.map
