goog.provide('shadow.grove.ui.switch$');
shadow.grove.ui.switch$.$track = (shadow.css.sel("shadow_grove_ui_switch__L6_C3"));
shadow.grove.ui.switch$.$thumb = (shadow.css.sel("shadow_grove_ui_switch__L24_C3"));
shadow.grove.ui.switch$.$thumb_checked = (shadow.css.sel("shadow_grove_ui_switch__L34_C3"));
shadow.grove.ui.switch$.fragment_l45_c5 = shadow.arborist.fragments.make_fragment_code((function (frag9423,env9424,vals9425,element_fn9426){
var el0_button = element_fn9426(new cljs.core.Keyword(null,"button","button",1456579943));
var el1_span = element_fn9426(new cljs.core.Keyword(null,"span","span",1394872991));
shadow.arborist.fragments.set_attr(env9424,el0_button,new cljs.core.Keyword(null,"class","class",-2030961996),null,(vals9425[0]));

shadow.arborist.fragments.set_attr(env9424,el0_button,new cljs.core.Keyword(null,"type","type",1174270348),null,"button");

shadow.arborist.fragments.set_attr(env9424,el0_button,new cljs.core.Keyword(null,"role","role",-736691072),null,"switch");

shadow.arborist.fragments.set_attr(env9424,el0_button,new cljs.core.Keyword(null,"id","id",-1388402092),null,(vals9425[1]));

shadow.arborist.fragments.set_attr(env9424,el0_button,new cljs.core.Keyword(null,"aria-checked","aria-checked",980530562),null,(vals9425[2]));

shadow.arborist.fragments.set_attr(env9424,el0_button,new cljs.core.Keyword(null,"data-state","data-state",1518559596),null,(vals9425[3]));

shadow.arborist.fragments.set_attr(env9424,el0_button,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),null,(vals9425[4]));

shadow.arborist.fragments.frag_add_static_event_listener(frag9423,el0_button,"click",new cljs.core.Keyword("shadow.grove.ui.switch","toggle!","shadow.grove.ui.switch/toggle!",-1553582916));

shadow.arborist.fragments.append_child(el0_button,el1_span);

shadow.arborist.fragments.set_attr(env9424,el1_span,new cljs.core.Keyword(null,"class","class",-2030961996),null,(vals9425[5]));

return [el0_button,el1_span];
}),shadow.arborist.fragments.frag_single_dom_mount,(function (this9430,env9431,exports9432,oldv9433,newv9434){
shadow.arborist.fragments.update_attr(env9431,exports9432,0,new cljs.core.Keyword(null,"class","class",-2030961996),(oldv9433[0]),(newv9434[0]));

shadow.arborist.fragments.update_attr(env9431,exports9432,0,new cljs.core.Keyword(null,"id","id",-1388402092),(oldv9433[1]),(newv9434[1]));

shadow.arborist.fragments.update_attr(env9431,exports9432,0,new cljs.core.Keyword(null,"aria-checked","aria-checked",980530562),(oldv9433[2]),(newv9434[2]));

shadow.arborist.fragments.update_attr(env9431,exports9432,0,new cljs.core.Keyword(null,"data-state","data-state",1518559596),(oldv9433[3]),(newv9434[3]));

shadow.arborist.fragments.update_attr(env9431,exports9432,0,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(oldv9433[4]),(newv9434[4]));

shadow.arborist.fragments.update_attr(env9431,exports9432,1,new cljs.core.Keyword(null,"class","class",-2030961996),(oldv9433[5]),(newv9434[5]));

return undefined;
}),(function (env9437,exports9436,oldv9438,dom_remove9439){
if(dom_remove9439){
shadow.arborist.fragments.dom_remove((exports9436[0]));
} else {
}

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"shadow/grove/ui/switch.cljs",new cljs.core.Keyword(null,"line","line",212345235),45,new cljs.core.Keyword(null,"column","column",2078222095),5], null));

shadow.grove.ui.switch$.ui_switch = shadow.grove.components.make_component_config("shadow.grove.ui.switch/ui-switch",[shadow.grove.components.make_slot_config((0),(62),(function (comp9336){
var opts = shadow.grove.components.get_arg(comp9336,0);
return opts;
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"bind","bind",-113428417),new cljs.core.Keyword(null,"name","name",1843675177),"__slot$0",new cljs.core.Keyword(null,"column","column",2078222095),9,new cljs.core.Keyword(null,"line","line",212345235),37], null)),shadow.grove.components.make_slot_config((1),(0),shadow.grove.components.slot_destructure((0),new cljs.core.Keyword(null,"checked","checked",-50955819),false),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"destructure","destructure",90920883),new cljs.core.Keyword(null,"name","name",1843675177),"checked",new cljs.core.Keyword(null,"from","from",1815293044),"__slot$0",new cljs.core.Keyword(null,"column","column",2078222095),17,new cljs.core.Keyword(null,"line","line",212345235),37], null)),shadow.grove.components.make_slot_config((1),(0),shadow.grove.components.slot_destructure((0),new cljs.core.Keyword(null,"on-change","on-change",-732046149),null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"destructure","destructure",90920883),new cljs.core.Keyword(null,"name","name",1843675177),"on-change",new cljs.core.Keyword(null,"from","from",1815293044),"__slot$0",new cljs.core.Keyword(null,"column","column",2078222095),25,new cljs.core.Keyword(null,"line","line",212345235),37], null)),shadow.grove.components.make_slot_config((1),(0),shadow.grove.components.slot_destructure((0),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"destructure","destructure",90920883),new cljs.core.Keyword(null,"name","name",1843675177),"disabled",new cljs.core.Keyword(null,"from","from",1815293044),"__slot$0",new cljs.core.Keyword(null,"column","column",2078222095),35,new cljs.core.Keyword(null,"line","line",212345235),37], null)),shadow.grove.components.make_slot_config((1),(0),shadow.grove.components.slot_destructure((0),new cljs.core.Keyword(null,"id","id",-1388402092),null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"destructure","destructure",90920883),new cljs.core.Keyword(null,"name","name",1843675177),"id",new cljs.core.Keyword(null,"from","from",1815293044),"__slot$0",new cljs.core.Keyword(null,"column","column",2078222095),44,new cljs.core.Keyword(null,"line","line",212345235),37], null)),shadow.grove.components.make_slot_config((1),(0),shadow.grove.components.slot_destructure((0),new cljs.core.Keyword(null,"class","class",-2030961996),null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"destructure","destructure",90920883),new cljs.core.Keyword(null,"name","name",1843675177),"class",new cljs.core.Keyword(null,"from","from",1815293044),"__slot$0",new cljs.core.Keyword(null,"column","column",2078222095),47,new cljs.core.Keyword(null,"line","line",212345235),37], null))],(63),cljs.core.PersistentArrayMap.EMPTY,(function (comp9336,old9337,new9338){
shadow.grove.components.check_args_BANG_(comp9336,new9338,1);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old9337.cljs$core$IIndexed$_nth$arity$2(null,0),new9338.cljs$core$IIndexed$_nth$arity$2(null,0))){
shadow.grove.components.arg_triggers_slots_BANG_(comp9336,0,(1));
} else {
}

return undefined;
}),(58),(function (comp9336){
var disabled = shadow.grove.components.get_slot_value(comp9336,(3));
var id = shadow.grove.components.get_slot_value(comp9336,(4));
var class$ = shadow.grove.components.get_slot_value(comp9336,(5));
var checked = shadow.grove.components.get_slot_value(comp9336,(1));
return shadow.arborist.fragments.fragment_init([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shadow.grove.ui.switch$.$track,class$], null),id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.boolean$(checked)),(cljs.core.truth_(checked)?"checked":"unchecked"),disabled,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shadow.grove.ui.switch$.$thumb,(cljs.core.truth_(checked)?shadow.grove.ui.switch$.$thumb_checked:null)], null)],null,shadow.grove.ui.switch$.fragment_l45_c5);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("shadow.grove.ui.switch","toggle!","shadow.grove.ui.switch/toggle!",-1553582916),(function (G__9404,G__9405,G__9406){
var comp9336_9733 = shadow.grove.components.get_component(G__9404);
var on_change_9734 = shadow.grove.components.get_slot_value(comp9336_9733,(2));
var checked_9735 = shadow.grove.components.get_slot_value(comp9336_9733,(1));
var env_9736 = G__9404;
var ev_9737 = G__9405;
var e_9738 = G__9406;
if(cljs.core.truth_(on_change_9734)){
var G__9648_9739 = cljs.core.not(checked_9735);
(on_change_9734.cljs$core$IFn$_invoke$arity$1 ? on_change_9734.cljs$core$IFn$_invoke$arity$1(G__9648_9739) : on_change_9734(G__9648_9739));
} else {
}

return null;
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["opts"], null),new cljs.core.Keyword(null,"file","file",-1269645878),"shadow/grove/ui/switch.cljs",new cljs.core.Keyword(null,"line","line",212345235),36,new cljs.core.Keyword(null,"column","column",2078222095),7], null));

//# sourceMappingURL=shadow.grove.ui.switch.js.map
