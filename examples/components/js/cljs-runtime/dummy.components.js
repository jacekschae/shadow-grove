goog.provide('dummy.components');
dummy.components.$section = (shadow.css.sel("dummy_components__L16_C3"));
dummy.components.$section_title = (shadow.css.sel("dummy_components__L19_C3"));
dummy.components.$row = (shadow.css.sel("dummy_components__L25_C3"));
dummy.components.$label = (shadow.css.sel("dummy_components__L31_C3"));
dummy.components.fragment_l39_c3 = shadow.arborist.fragments.make_fragment_code((function (frag19420,env19421,vals19422,element_fn19423){
var el0_div = element_fn19423(new cljs.core.Keyword(null,"div","div",1057191632));
var el1_h2 = element_fn19423(new cljs.core.Keyword(null,"h2","h2",-372662728));
var el3_div = element_fn19423(new cljs.core.Keyword(null,"div","div",1057191632));
var d4 = shadow.arborist.fragments.managed_create(env19421,(vals19422[0]));
var d5 = shadow.arborist.fragments.managed_create(env19421,(vals19422[1]));
var d6 = shadow.arborist.fragments.managed_create(env19421,(vals19422[2]));
var d7 = shadow.arborist.fragments.managed_create(env19421,(vals19422[3]));
shadow.arborist.fragments.set_attr(env19421,el0_div,new cljs.core.Keyword(null,"class","class",-2030961996),null,dummy.components.$section);

shadow.arborist.fragments.append_child(el0_div,el1_h2);

(el1_h2.textContent = "Badge");

shadow.arborist.fragments.set_attr(env19421,el1_h2,new cljs.core.Keyword(null,"class","class",-2030961996),null,dummy.components.$section_title);

shadow.arborist.fragments.append_child(el0_div,el3_div);

shadow.arborist.fragments.set_attr(env19421,el3_div,new cljs.core.Keyword(null,"class","class",-2030961996),null,dummy.components.$row);

shadow.arborist.fragments.managed_append(el3_div,d4);

shadow.arborist.fragments.managed_append(el3_div,d5);

shadow.arborist.fragments.managed_append(el3_div,d6);

shadow.arborist.fragments.managed_append(el3_div,d7);

return [el0_div,d4,d5,d6,d7];
}),shadow.arborist.fragments.frag_single_dom_mount,(function (this19427,env19428,exports19429,oldv19430,newv19431){
shadow.arborist.fragments.update_managed(this19427,env19428,exports19429,1,(oldv19430[0]),(newv19431[0]));

shadow.arborist.fragments.update_managed(this19427,env19428,exports19429,2,(oldv19430[1]),(newv19431[1]));

shadow.arborist.fragments.update_managed(this19427,env19428,exports19429,3,(oldv19430[2]),(newv19431[2]));

shadow.arborist.fragments.update_managed(this19427,env19428,exports19429,4,(oldv19430[3]),(newv19431[3]));

return undefined;
}),(function (env19433,exports19432,oldv19434,dom_remove19435){
if(dom_remove19435){
shadow.arborist.fragments.dom_remove((exports19432[0]));
} else {
}

shadow.arborist.fragments.managed_remove((exports19432[1]),false);

shadow.arborist.fragments.managed_remove((exports19432[2]),false);

shadow.arborist.fragments.managed_remove((exports19432[3]),false);

shadow.arborist.fragments.managed_remove((exports19432[4]),false);

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"dummy/components.cljs",new cljs.core.Keyword(null,"line","line",212345235),39,new cljs.core.Keyword(null,"column","column",2078222095),3], null));

dummy.components.demo_badges = (function dummy$components$demo_badges(){
return shadow.arborist.fragments.fragment_init([shadow.grove.ui.badge.badge(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"default","default",-1987822328)], null),"Default"),shadow.grove.ui.badge.badge(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"secondary","secondary",-669381460)], null),"Secondary"),shadow.grove.ui.badge.badge(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"destructive","destructive",-1587723243)], null),"Destructive"),shadow.grove.ui.badge.badge(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534)], null),"Outline")],null,dummy.components.fragment_l39_c3);
});
dummy.components.fragment_l50_c3 = shadow.arborist.fragments.make_fragment_code((function (frag19442,env19443,vals19444,element_fn19445){
var el0_div = element_fn19445(new cljs.core.Keyword(null,"div","div",1057191632));
var el1_h2 = element_fn19445(new cljs.core.Keyword(null,"h2","h2",-372662728));
var el3_div = element_fn19445(new cljs.core.Keyword(null,"div","div",1057191632));
var el4_p = element_fn19445(new cljs.core.Keyword(null,"p","p",151049309));
var d6 = shadow.arborist.fragments.managed_create(env19443,(vals19444[0]));
var el7_p = element_fn19445(new cljs.core.Keyword(null,"p","p",151049309));
var el9_div = element_fn19445(new cljs.core.Keyword(null,"div","div",1057191632));
var el10_span = element_fn19445(new cljs.core.Keyword(null,"span","span",1394872991));
var d12 = shadow.arborist.fragments.managed_create(env19443,(vals19444[1]));
var el13_span = element_fn19445(new cljs.core.Keyword(null,"span","span",1394872991));
var d15 = shadow.arborist.fragments.managed_create(env19443,(vals19444[1]));
var el16_span = element_fn19445(new cljs.core.Keyword(null,"span","span",1394872991));
shadow.arborist.fragments.set_attr(env19443,el0_div,new cljs.core.Keyword(null,"class","class",-2030961996),null,dummy.components.$section);

shadow.arborist.fragments.append_child(el0_div,el1_h2);

(el1_h2.textContent = "Separator");

shadow.arborist.fragments.set_attr(env19443,el1_h2,new cljs.core.Keyword(null,"class","class",-2030961996),null,dummy.components.$section_title);

shadow.arborist.fragments.append_child(el0_div,el3_div);

shadow.arborist.fragments.append_child(el3_div,el4_p);

(el4_p.textContent = "Content above");

shadow.arborist.fragments.set_attr(env19443,el4_p,new cljs.core.Keyword(null,"class","class",-2030961996),null,(shadow.css.sel("dummy_components__L53_C13")));

shadow.arborist.fragments.managed_append(el3_div,d6);

shadow.arborist.fragments.append_child(el3_div,el7_p);

(el7_p.textContent = "Content below");

shadow.arborist.fragments.set_attr(env19443,el7_p,new cljs.core.Keyword(null,"class","class",-2030961996),null,(shadow.css.sel("dummy_components__L55_C13")));

shadow.arborist.fragments.append_child(el0_div,el9_div);

shadow.arborist.fragments.set_attr(env19443,el9_div,new cljs.core.Keyword(null,"class","class",-2030961996),null,(shadow.css.sel("dummy_components__L56_C14")));

shadow.arborist.fragments.append_child(el9_div,el10_span);

(el10_span.textContent = "Left");

shadow.arborist.fragments.managed_append(el9_div,d12);

shadow.arborist.fragments.append_child(el9_div,el13_span);

(el13_span.textContent = "Middle");

shadow.arborist.fragments.managed_append(el9_div,d15);

shadow.arborist.fragments.append_child(el9_div,el16_span);

(el16_span.textContent = "Right");

return [el0_div,d6,d12,d15];
}),shadow.arborist.fragments.frag_single_dom_mount,(function (this19449,env19450,exports19451,oldv19452,newv19453){
shadow.arborist.fragments.update_managed(this19449,env19450,exports19451,1,(oldv19452[0]),(newv19453[0]));

shadow.arborist.fragments.update_managed(this19449,env19450,exports19451,2,(oldv19452[1]),(newv19453[1]));

shadow.arborist.fragments.update_managed(this19449,env19450,exports19451,3,(oldv19452[1]),(newv19453[1]));

return undefined;
}),(function (env19455,exports19454,oldv19456,dom_remove19457){
if(dom_remove19457){
shadow.arborist.fragments.dom_remove((exports19454[0]));
} else {
}

shadow.arborist.fragments.managed_remove((exports19454[1]),false);

shadow.arborist.fragments.managed_remove((exports19454[2]),false);

shadow.arborist.fragments.managed_remove((exports19454[3]),false);

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"dummy/components.cljs",new cljs.core.Keyword(null,"line","line",212345235),50,new cljs.core.Keyword(null,"column","column",2078222095),3], null));

dummy.components.demo_separators = (function dummy$components$demo_separators(){
return shadow.arborist.fragments.fragment_init([shadow.grove.ui.separator.separator(cljs.core.PersistentArrayMap.EMPTY),shadow.grove.ui.separator.separator(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"orientation","orientation",623557579),new cljs.core.Keyword(null,"vertical","vertical",718696748)], null))],null,dummy.components.fragment_l50_c3);
});
dummy.components.fragment_l66_c3 = shadow.arborist.fragments.make_fragment_code((function (frag19462,env19463,vals19464,element_fn19465){
var el0_div = element_fn19465(new cljs.core.Keyword(null,"div","div",1057191632));
var el1_h2 = element_fn19465(new cljs.core.Keyword(null,"h2","h2",-372662728));
var el3_div = element_fn19465(new cljs.core.Keyword(null,"div","div",1057191632));
var el4_span = element_fn19465(new cljs.core.Keyword(null,"span","span",1394872991));
var d6 = shadow.arborist.fragments.managed_create(env19463,(vals19464[0]));
var d7 = shadow.arborist.fragments.managed_create(env19463,(vals19464[1]));
var d8 = shadow.arborist.fragments.managed_create(env19463,(vals19464[2]));
var d9 = shadow.arborist.fragments.managed_create(env19463,(vals19464[3]));
var d10 = shadow.arborist.fragments.managed_create(env19463,(vals19464[4]));
var d11 = shadow.arborist.fragments.managed_create(env19463,(vals19464[5]));
var el12_div = element_fn19465(new cljs.core.Keyword(null,"div","div",1057191632));
var el13_span = element_fn19465(new cljs.core.Keyword(null,"span","span",1394872991));
var d15 = shadow.arborist.fragments.managed_create(env19463,(vals19464[6]));
var d16 = shadow.arborist.fragments.managed_create(env19463,(vals19464[7]));
var d17 = shadow.arborist.fragments.managed_create(env19463,(vals19464[8]));
var d18 = shadow.arborist.fragments.managed_create(env19463,(vals19464[9]));
var el19_div = element_fn19465(new cljs.core.Keyword(null,"div","div",1057191632));
var el20_span = element_fn19465(new cljs.core.Keyword(null,"span","span",1394872991));
var d22 = shadow.arborist.fragments.managed_create(env19463,(vals19464[10]));
var d23 = shadow.arborist.fragments.managed_create(env19463,(vals19464[11]));
shadow.arborist.fragments.set_attr(env19463,el0_div,new cljs.core.Keyword(null,"class","class",-2030961996),null,dummy.components.$section);

shadow.arborist.fragments.append_child(el0_div,el1_h2);

(el1_h2.textContent = "Button");

shadow.arborist.fragments.set_attr(env19463,el1_h2,new cljs.core.Keyword(null,"class","class",-2030961996),null,dummy.components.$section_title);

shadow.arborist.fragments.append_child(el0_div,el3_div);

shadow.arborist.fragments.set_attr(env19463,el3_div,new cljs.core.Keyword(null,"class","class",-2030961996),null,dummy.components.$row);

shadow.arborist.fragments.append_child(el3_div,el4_span);

(el4_span.textContent = "Variants:");

shadow.arborist.fragments.set_attr(env19463,el4_span,new cljs.core.Keyword(null,"class","class",-2030961996),null,dummy.components.$label);

shadow.arborist.fragments.managed_append(el3_div,d6);

shadow.arborist.fragments.managed_append(el3_div,d7);

shadow.arborist.fragments.managed_append(el3_div,d8);

shadow.arborist.fragments.managed_append(el3_div,d9);

shadow.arborist.fragments.managed_append(el3_div,d10);

shadow.arborist.fragments.managed_append(el3_div,d11);

shadow.arborist.fragments.append_child(el0_div,el12_div);

shadow.arborist.fragments.set_attr(env19463,el12_div,new cljs.core.Keyword(null,"class","class",-2030961996),null,dummy.components.$row);

shadow.arborist.fragments.append_child(el12_div,el13_span);

(el13_span.textContent = "Sizes:");

shadow.arborist.fragments.set_attr(env19463,el13_span,new cljs.core.Keyword(null,"class","class",-2030961996),null,dummy.components.$label);

shadow.arborist.fragments.managed_append(el12_div,d15);

shadow.arborist.fragments.managed_append(el12_div,d16);

shadow.arborist.fragments.managed_append(el12_div,d17);

shadow.arborist.fragments.managed_append(el12_div,d18);

shadow.arborist.fragments.append_child(el0_div,el19_div);

shadow.arborist.fragments.set_attr(env19463,el19_div,new cljs.core.Keyword(null,"class","class",-2030961996),null,dummy.components.$row);

shadow.arborist.fragments.append_child(el19_div,el20_span);

(el20_span.textContent = "Disabled:");

shadow.arborist.fragments.set_attr(env19463,el20_span,new cljs.core.Keyword(null,"class","class",-2030961996),null,dummy.components.$label);

shadow.arborist.fragments.managed_append(el19_div,d22);

shadow.arborist.fragments.managed_append(el19_div,d23);

return [el0_div,d6,d7,d8,d9,d10,d11,d15,d16,d17,d18,d22,d23];
}),shadow.arborist.fragments.frag_single_dom_mount,(function (this19469,env19470,exports19471,oldv19472,newv19473){
shadow.arborist.fragments.update_managed(this19469,env19470,exports19471,1,(oldv19472[0]),(newv19473[0]));

shadow.arborist.fragments.update_managed(this19469,env19470,exports19471,2,(oldv19472[1]),(newv19473[1]));

shadow.arborist.fragments.update_managed(this19469,env19470,exports19471,3,(oldv19472[2]),(newv19473[2]));

shadow.arborist.fragments.update_managed(this19469,env19470,exports19471,4,(oldv19472[3]),(newv19473[3]));

shadow.arborist.fragments.update_managed(this19469,env19470,exports19471,5,(oldv19472[4]),(newv19473[4]));

shadow.arborist.fragments.update_managed(this19469,env19470,exports19471,6,(oldv19472[5]),(newv19473[5]));

shadow.arborist.fragments.update_managed(this19469,env19470,exports19471,7,(oldv19472[6]),(newv19473[6]));

shadow.arborist.fragments.update_managed(this19469,env19470,exports19471,8,(oldv19472[7]),(newv19473[7]));

shadow.arborist.fragments.update_managed(this19469,env19470,exports19471,9,(oldv19472[8]),(newv19473[8]));

shadow.arborist.fragments.update_managed(this19469,env19470,exports19471,10,(oldv19472[9]),(newv19473[9]));

shadow.arborist.fragments.update_managed(this19469,env19470,exports19471,11,(oldv19472[10]),(newv19473[10]));

shadow.arborist.fragments.update_managed(this19469,env19470,exports19471,12,(oldv19472[11]),(newv19473[11]));

return undefined;
}),(function (env19475,exports19474,oldv19476,dom_remove19477){
if(dom_remove19477){
shadow.arborist.fragments.dom_remove((exports19474[0]));
} else {
}

shadow.arborist.fragments.managed_remove((exports19474[1]),false);

shadow.arborist.fragments.managed_remove((exports19474[2]),false);

shadow.arborist.fragments.managed_remove((exports19474[3]),false);

shadow.arborist.fragments.managed_remove((exports19474[4]),false);

shadow.arborist.fragments.managed_remove((exports19474[5]),false);

shadow.arborist.fragments.managed_remove((exports19474[6]),false);

shadow.arborist.fragments.managed_remove((exports19474[7]),false);

shadow.arborist.fragments.managed_remove((exports19474[8]),false);

shadow.arborist.fragments.managed_remove((exports19474[9]),false);

shadow.arborist.fragments.managed_remove((exports19474[10]),false);

shadow.arborist.fragments.managed_remove((exports19474[11]),false);

shadow.arborist.fragments.managed_remove((exports19474[12]),false);

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"dummy/components.cljs",new cljs.core.Keyword(null,"line","line",212345235),66,new cljs.core.Keyword(null,"column","column",2078222095),3], null));

dummy.components.demo_buttons = (function dummy$components$demo_buttons(){
return shadow.arborist.fragments.fragment_init([shadow.grove.ui.button.button(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"default","default",-1987822328)], null),"Default"),shadow.grove.ui.button.button(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"secondary","secondary",-669381460)], null),"Secondary"),shadow.grove.ui.button.button(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"destructive","destructive",-1587723243)], null),"Destructive"),shadow.grove.ui.button.button(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534)], null),"Outline"),shadow.grove.ui.button.button(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"ghost","ghost",-1531157576)], null),"Ghost"),shadow.grove.ui.button.button(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"link","link",-1769163468)], null),"Link"),shadow.grove.ui.button.button(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065)], null),"Small"),shadow.grove.ui.button.button(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"default","default",-1987822328)], null),"Default"),shadow.grove.ui.button.button(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"lg","lg",-80787836)], null),"Large"),shadow.grove.ui.button.button(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"icon","icon",1679606541)], null),"\u2606"),shadow.grove.ui.button.button(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),"Disabled"),shadow.grove.ui.button.button(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),"Disabled")],null,dummy.components.fragment_l66_c3);
});
dummy.components.fragment_l90_c3 = shadow.arborist.fragments.make_fragment_code((function (frag19479,env19480,vals19481,element_fn19482){
var el0_div = element_fn19482(new cljs.core.Keyword(null,"div","div",1057191632));
var el1_h2 = element_fn19482(new cljs.core.Keyword(null,"h2","h2",-372662728));
var el3_div = element_fn19482(new cljs.core.Keyword(null,"div","div",1057191632));
var d4 = shadow.arborist.fragments.managed_create(env19480,(vals19481[0]));
var d5 = shadow.arborist.fragments.managed_create(env19480,(vals19481[1]));
shadow.arborist.fragments.set_attr(env19480,el0_div,new cljs.core.Keyword(null,"class","class",-2030961996),null,dummy.components.$section);

shadow.arborist.fragments.append_child(el0_div,el1_h2);

(el1_h2.textContent = "Card");

shadow.arborist.fragments.set_attr(env19480,el1_h2,new cljs.core.Keyword(null,"class","class",-2030961996),null,dummy.components.$section_title);

shadow.arborist.fragments.append_child(el0_div,el3_div);

shadow.arborist.fragments.set_attr(env19480,el3_div,new cljs.core.Keyword(null,"class","class",-2030961996),null,(shadow.css.sel("dummy_components__L92_C14")));

shadow.arborist.fragments.managed_append(el3_div,d4);

shadow.arborist.fragments.managed_append(el3_div,d5);

return [el0_div,d4,d5];
}),shadow.arborist.fragments.frag_single_dom_mount,(function (this19486,env19487,exports19488,oldv19489,newv19490){
shadow.arborist.fragments.update_managed(this19486,env19487,exports19488,1,(oldv19489[0]),(newv19490[0]));

shadow.arborist.fragments.update_managed(this19486,env19487,exports19488,2,(oldv19489[1]),(newv19490[1]));

return undefined;
}),(function (env19492,exports19491,oldv19493,dom_remove19494){
if(dom_remove19494){
shadow.arborist.fragments.dom_remove((exports19491[0]));
} else {
}

shadow.arborist.fragments.managed_remove((exports19491[1]),false);

shadow.arborist.fragments.managed_remove((exports19491[2]),false);

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"dummy/components.cljs",new cljs.core.Keyword(null,"line","line",212345235),90,new cljs.core.Keyword(null,"column","column",2078222095),3], null));

dummy.components.fragment_l94_c11 = shadow.arborist.fragments.make_fragment_code((function (frag19495,env19496,vals19497,element_fn19498){
var d0 = shadow.arborist.fragments.managed_create(env19496,(vals19497[0]));
var d1 = shadow.arborist.fragments.managed_create(env19496,(vals19497[1]));
var d2 = shadow.arborist.fragments.managed_create(env19496,(vals19497[2]));
return [d0,d1,d2];
}),(function (exports19499,parent19500,anchor19501){
shadow.arborist.fragments.managed_insert((exports19499[0]),parent19500,anchor19501);

shadow.arborist.fragments.managed_insert((exports19499[1]),parent19500,anchor19501);

shadow.arborist.fragments.managed_insert((exports19499[2]),parent19500,anchor19501);

return undefined;
}),(function (this19502,env19503,exports19504,oldv19505,newv19506){
shadow.arborist.fragments.update_managed(this19502,env19503,exports19504,0,(oldv19505[0]),(newv19506[0]));

shadow.arborist.fragments.update_managed(this19502,env19503,exports19504,1,(oldv19505[1]),(newv19506[1]));

shadow.arborist.fragments.update_managed(this19502,env19503,exports19504,2,(oldv19505[2]),(newv19506[2]));

return undefined;
}),(function (env19508,exports19507,oldv19509,dom_remove19510){
shadow.arborist.fragments.managed_remove((exports19507[0]),dom_remove19510);

shadow.arborist.fragments.managed_remove((exports19507[1]),dom_remove19510);

shadow.arborist.fragments.managed_remove((exports19507[2]),dom_remove19510);

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"dummy/components.cljs",new cljs.core.Keyword(null,"line","line",212345235),94,new cljs.core.Keyword(null,"column","column",2078222095),11], null));

dummy.components.fragment_l95_c17 = shadow.arborist.fragments.make_fragment_code((function (frag19511,env19512,vals19513,element_fn19514){
var d0 = shadow.arborist.fragments.managed_create(env19512,(vals19513[0]));
var d1 = shadow.arborist.fragments.managed_create(env19512,(vals19513[1]));
return [d0,d1];
}),(function (exports19515,parent19516,anchor19517){
shadow.arborist.fragments.managed_insert((exports19515[0]),parent19516,anchor19517);

shadow.arborist.fragments.managed_insert((exports19515[1]),parent19516,anchor19517);

return undefined;
}),(function (this19518,env19519,exports19520,oldv19521,newv19522){
shadow.arborist.fragments.update_managed(this19518,env19519,exports19520,0,(oldv19521[0]),(newv19522[0]));

shadow.arborist.fragments.update_managed(this19518,env19519,exports19520,1,(oldv19521[1]),(newv19522[1]));

return undefined;
}),(function (env19524,exports19523,oldv19525,dom_remove19526){
shadow.arborist.fragments.managed_remove((exports19523[0]),dom_remove19526);

shadow.arborist.fragments.managed_remove((exports19523[1]),dom_remove19526);

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"dummy/components.cljs",new cljs.core.Keyword(null,"line","line",212345235),95,new cljs.core.Keyword(null,"column","column",2078222095),17], null));

dummy.components.fragment_l98_c17 = shadow.arborist.fragments.make_fragment_code((function (frag19528,env19529,vals19530,element_fn19531){
var el0_p = element_fn19531(new cljs.core.Keyword(null,"p","p",151049309));
(el0_p.textContent = "This is the card content area. You can put any content here.");

return [el0_p];
}),shadow.arborist.fragments.frag_single_dom_mount,shadow.arborist.fragments.noop,(function (env19541,exports19540,oldv19542,dom_remove19543){
if(dom_remove19543){
shadow.arborist.fragments.dom_remove((exports19540[0]));
} else {
}

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"dummy/components.cljs",new cljs.core.Keyword(null,"line","line",212345235),98,new cljs.core.Keyword(null,"column","column",2078222095),17], null));

dummy.components.fragment_l100_c17 = shadow.arborist.fragments.make_fragment_code((function (frag19544,env19545,vals19546,element_fn19547){
var d0 = shadow.arborist.fragments.managed_create(env19545,(vals19546[0]));
var d1 = shadow.arborist.fragments.managed_create(env19545,(vals19546[1]));
return [d0,d1];
}),(function (exports19548,parent19549,anchor19550){
shadow.arborist.fragments.managed_insert((exports19548[0]),parent19549,anchor19550);

shadow.arborist.fragments.managed_insert((exports19548[1]),parent19549,anchor19550);

return undefined;
}),(function (this19551,env19552,exports19553,oldv19554,newv19555){
shadow.arborist.fragments.update_managed(this19551,env19552,exports19553,0,(oldv19554[0]),(newv19555[0]));

shadow.arborist.fragments.update_managed(this19551,env19552,exports19553,1,(oldv19554[1]),(newv19555[1]));

return undefined;
}),(function (env19557,exports19556,oldv19558,dom_remove19559){
shadow.arborist.fragments.managed_remove((exports19556[0]),dom_remove19559);

shadow.arborist.fragments.managed_remove((exports19556[1]),dom_remove19559);

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"dummy/components.cljs",new cljs.core.Keyword(null,"line","line",212345235),100,new cljs.core.Keyword(null,"column","column",2078222095),17], null));

dummy.components.fragment_l104_c11 = shadow.arborist.fragments.make_fragment_code((function (frag19560,env19561,vals19562,element_fn19563){
var d0 = shadow.arborist.fragments.managed_create(env19561,(vals19562[0]));
var d1 = shadow.arborist.fragments.managed_create(env19561,(vals19562[1]));
return [d0,d1];
}),(function (exports19564,parent19565,anchor19566){
shadow.arborist.fragments.managed_insert((exports19564[0]),parent19565,anchor19566);

shadow.arborist.fragments.managed_insert((exports19564[1]),parent19565,anchor19566);

return undefined;
}),(function (this19567,env19568,exports19569,oldv19570,newv19571){
shadow.arborist.fragments.update_managed(this19567,env19568,exports19569,0,(oldv19570[0]),(newv19571[0]));

shadow.arborist.fragments.update_managed(this19567,env19568,exports19569,1,(oldv19570[1]),(newv19571[1]));

return undefined;
}),(function (env19573,exports19572,oldv19574,dom_remove19575){
shadow.arborist.fragments.managed_remove((exports19572[0]),dom_remove19575);

shadow.arborist.fragments.managed_remove((exports19572[1]),dom_remove19575);

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"dummy/components.cljs",new cljs.core.Keyword(null,"line","line",212345235),104,new cljs.core.Keyword(null,"column","column",2078222095),11], null));

dummy.components.fragment_l105_c17 = shadow.arborist.fragments.make_fragment_code((function (frag19576,env19577,vals19578,element_fn19579){
var d0 = shadow.arborist.fragments.managed_create(env19577,(vals19578[0]));
var d1 = shadow.arborist.fragments.managed_create(env19577,(vals19578[1]));
return [d0,d1];
}),(function (exports19580,parent19581,anchor19582){
shadow.arborist.fragments.managed_insert((exports19580[0]),parent19581,anchor19582);

shadow.arborist.fragments.managed_insert((exports19580[1]),parent19581,anchor19582);

return undefined;
}),(function (this19583,env19584,exports19585,oldv19586,newv19587){
shadow.arborist.fragments.update_managed(this19583,env19584,exports19585,0,(oldv19586[0]),(newv19587[0]));

shadow.arborist.fragments.update_managed(this19583,env19584,exports19585,1,(oldv19586[1]),(newv19587[1]));

return undefined;
}),(function (env19589,exports19588,oldv19590,dom_remove19591){
shadow.arborist.fragments.managed_remove((exports19588[0]),dom_remove19591);

shadow.arborist.fragments.managed_remove((exports19588[1]),dom_remove19591);

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"dummy/components.cljs",new cljs.core.Keyword(null,"line","line",212345235),105,new cljs.core.Keyword(null,"column","column",2078222095),17], null));

dummy.components.fragment_l108_c17 = shadow.arborist.fragments.make_fragment_code((function (frag19593,env19594,vals19595,element_fn19596){
var el0_p = element_fn19596(new cljs.core.Keyword(null,"p","p",151049309));
(el0_p.textContent = "Check your inbox for the latest updates.");

return [el0_p];
}),shadow.arborist.fragments.frag_single_dom_mount,shadow.arborist.fragments.noop,(function (env19606,exports19605,oldv19607,dom_remove19608){
if(dom_remove19608){
shadow.arborist.fragments.dom_remove((exports19605[0]));
} else {
}

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"dummy/components.cljs",new cljs.core.Keyword(null,"line","line",212345235),108,new cljs.core.Keyword(null,"column","column",2078222095),17], null));

dummy.components.demo_cards = (function dummy$components$demo_cards(){
return shadow.arborist.fragments.fragment_init([shadow.grove.ui.card.card(cljs.core.PersistentArrayMap.EMPTY,shadow.arborist.fragments.fragment_init([shadow.grove.ui.card.card_header(cljs.core.PersistentArrayMap.EMPTY,shadow.arborist.fragments.fragment_init([shadow.grove.ui.card.card_title(cljs.core.PersistentArrayMap.EMPTY,"Card Title"),shadow.grove.ui.card.card_description(cljs.core.PersistentArrayMap.EMPTY,"Card description goes here.")],null,dummy.components.fragment_l95_c17)),shadow.grove.ui.card.card_content(cljs.core.PersistentArrayMap.EMPTY,shadow.arborist.fragments.fragment_init([],null,dummy.components.fragment_l98_c17)),shadow.grove.ui.card.card_footer(cljs.core.PersistentArrayMap.EMPTY,shadow.arborist.fragments.fragment_init([shadow.grove.ui.button.button(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065)], null),"Cancel"),shadow.grove.ui.button.button(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065)], null),"Save")],null,dummy.components.fragment_l100_c17))],null,dummy.components.fragment_l94_c11)),shadow.grove.ui.card.card(cljs.core.PersistentArrayMap.EMPTY,shadow.arborist.fragments.fragment_init([shadow.grove.ui.card.card_header(cljs.core.PersistentArrayMap.EMPTY,shadow.arborist.fragments.fragment_init([shadow.grove.ui.card.card_title(cljs.core.PersistentArrayMap.EMPTY,"Notifications"),shadow.grove.ui.card.card_description(cljs.core.PersistentArrayMap.EMPTY,"You have 3 unread messages.")],null,dummy.components.fragment_l105_c17)),shadow.grove.ui.card.card_content(cljs.core.PersistentArrayMap.EMPTY,shadow.arborist.fragments.fragment_init([],null,dummy.components.fragment_l108_c17))],null,dummy.components.fragment_l104_c11))],null,dummy.components.fragment_l90_c3);
});
dummy.components.fragment_l117_c5 = shadow.arborist.fragments.make_fragment_code((function (frag19620,env19621,vals19622,element_fn19623){
var el0_div = element_fn19623(new cljs.core.Keyword(null,"div","div",1057191632));
var el1_h2 = element_fn19623(new cljs.core.Keyword(null,"h2","h2",-372662728));
var el3_div = element_fn19623(new cljs.core.Keyword(null,"div","div",1057191632));
var el4_span = element_fn19623(new cljs.core.Keyword(null,"span","span",1394872991));
var d6 = shadow.arborist.fragments.managed_create(env19621,(vals19622[0]));
var d7 = shadow.arborist.fragments.managed_create(env19621,(vals19622[1]));
var el8_div = element_fn19623(new cljs.core.Keyword(null,"div","div",1057191632));
var el9_span = element_fn19623(new cljs.core.Keyword(null,"span","span",1394872991));
var d11 = shadow.arborist.fragments.managed_create(env19621,(vals19622[2]));
var el12_div = element_fn19623(new cljs.core.Keyword(null,"div","div",1057191632));
var el13_span = element_fn19623(new cljs.core.Keyword(null,"span","span",1394872991));
var d15 = shadow.arborist.fragments.managed_create(env19621,(vals19622[3]));
var d16 = shadow.arborist.fragments.managed_create(env19621,(vals19622[4]));
var d17 = shadow.arborist.fragments.managed_create(env19621,(vals19622[5]));
var el18_div = element_fn19623(new cljs.core.Keyword(null,"div","div",1057191632));
var el19_span = element_fn19623(new cljs.core.Keyword(null,"span","span",1394872991));
var d21 = shadow.arborist.fragments.managed_create(env19621,(vals19622[6]));
var d22 = shadow.arborist.fragments.managed_create(env19621,(vals19622[7]));
shadow.arborist.fragments.set_attr(env19621,el0_div,new cljs.core.Keyword(null,"class","class",-2030961996),null,dummy.components.$section);

shadow.arborist.fragments.append_child(el0_div,el1_h2);

(el1_h2.textContent = "Toggle");

shadow.arborist.fragments.set_attr(env19621,el1_h2,new cljs.core.Keyword(null,"class","class",-2030961996),null,dummy.components.$section_title);

shadow.arborist.fragments.append_child(el0_div,el3_div);

shadow.arborist.fragments.set_attr(env19621,el3_div,new cljs.core.Keyword(null,"class","class",-2030961996),null,dummy.components.$row);

shadow.arborist.fragments.append_child(el3_div,el4_span);

(el4_span.textContent = "Default:");

shadow.arborist.fragments.set_attr(env19621,el4_span,new cljs.core.Keyword(null,"class","class",-2030961996),null,dummy.components.$label);

shadow.arborist.fragments.managed_append(el3_div,d6);

shadow.arborist.fragments.managed_append(el3_div,d7);

shadow.arborist.fragments.append_child(el0_div,el8_div);

shadow.arborist.fragments.set_attr(env19621,el8_div,new cljs.core.Keyword(null,"class","class",-2030961996),null,dummy.components.$row);

shadow.arborist.fragments.append_child(el8_div,el9_span);

(el9_span.textContent = "Outline:");

shadow.arborist.fragments.set_attr(env19621,el9_span,new cljs.core.Keyword(null,"class","class",-2030961996),null,dummy.components.$label);

shadow.arborist.fragments.managed_append(el8_div,d11);

shadow.arborist.fragments.append_child(el0_div,el12_div);

shadow.arborist.fragments.set_attr(env19621,el12_div,new cljs.core.Keyword(null,"class","class",-2030961996),null,dummy.components.$row);

shadow.arborist.fragments.append_child(el12_div,el13_span);

(el13_span.textContent = "Sizes:");

shadow.arborist.fragments.set_attr(env19621,el13_span,new cljs.core.Keyword(null,"class","class",-2030961996),null,dummy.components.$label);

shadow.arborist.fragments.managed_append(el12_div,d15);

shadow.arborist.fragments.managed_append(el12_div,d16);

shadow.arborist.fragments.managed_append(el12_div,d17);

shadow.arborist.fragments.append_child(el0_div,el18_div);

shadow.arborist.fragments.set_attr(env19621,el18_div,new cljs.core.Keyword(null,"class","class",-2030961996),null,dummy.components.$row);

shadow.arborist.fragments.append_child(el18_div,el19_span);

(el19_span.textContent = "Disabled:");

shadow.arborist.fragments.set_attr(env19621,el19_span,new cljs.core.Keyword(null,"class","class",-2030961996),null,dummy.components.$label);

shadow.arborist.fragments.managed_append(el18_div,d21);

shadow.arborist.fragments.managed_append(el18_div,d22);

return [el0_div,d6,d7,d11,d15,d16,d17,d21,d22];
}),shadow.arborist.fragments.frag_single_dom_mount,(function (this19627,env19628,exports19629,oldv19630,newv19631){
shadow.arborist.fragments.update_managed(this19627,env19628,exports19629,1,(oldv19630[0]),(newv19631[0]));

shadow.arborist.fragments.update_managed(this19627,env19628,exports19629,2,(oldv19630[1]),(newv19631[1]));

shadow.arborist.fragments.update_managed(this19627,env19628,exports19629,3,(oldv19630[2]),(newv19631[2]));

shadow.arborist.fragments.update_managed(this19627,env19628,exports19629,4,(oldv19630[3]),(newv19631[3]));

shadow.arborist.fragments.update_managed(this19627,env19628,exports19629,5,(oldv19630[4]),(newv19631[4]));

shadow.arborist.fragments.update_managed(this19627,env19628,exports19629,6,(oldv19630[5]),(newv19631[5]));

shadow.arborist.fragments.update_managed(this19627,env19628,exports19629,7,(oldv19630[6]),(newv19631[6]));

shadow.arborist.fragments.update_managed(this19627,env19628,exports19629,8,(oldv19630[7]),(newv19631[7]));

return undefined;
}),(function (env19633,exports19632,oldv19634,dom_remove19635){
if(dom_remove19635){
shadow.arborist.fragments.dom_remove((exports19632[0]));
} else {
}

shadow.arborist.fragments.managed_remove((exports19632[1]),false);

shadow.arborist.fragments.managed_remove((exports19632[2]),false);

shadow.arborist.fragments.managed_remove((exports19632[3]),false);

shadow.arborist.fragments.managed_remove((exports19632[4]),false);

shadow.arborist.fragments.managed_remove((exports19632[5]),false);

shadow.arborist.fragments.managed_remove((exports19632[6]),false);

shadow.arborist.fragments.managed_remove((exports19632[7]),false);

shadow.arborist.fragments.managed_remove((exports19632[8]),false);

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"dummy/components.cljs",new cljs.core.Keyword(null,"line","line",212345235),117,new cljs.core.Keyword(null,"column","column",2078222095),5], null));

dummy.components.demo_toggles = shadow.grove.components.make_component_config("dummy.components/demo-toggles",[shadow.grove.components.make_slot_config((0),(2),(function (comp19612){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bold","bold",-116809535),false,new cljs.core.Keyword(null,"italic","italic",32599196),false,new cljs.core.Keyword(null,"outline","outline",793464534),false], null));
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"bind","bind",-113428417),new cljs.core.Keyword(null,"name","name",1843675177),"toggle-state-ref",new cljs.core.Keyword(null,"column","column",2078222095),9,new cljs.core.Keyword(null,"line","line",212345235),113], null)),shadow.grove.components.make_slot_config((1),(0),(function (comp19612){
var toggle_state_ref = shadow.grove.components.get_slot_value(comp19612,(0));
return shadow.grove.watch.cljs$core$IFn$_invoke$arity$1(toggle_state_ref);
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"bind","bind",-113428417),new cljs.core.Keyword(null,"name","name",1843675177),"toggle-state",new cljs.core.Keyword(null,"column","column",2078222095),9,new cljs.core.Keyword(null,"line","line",212345235),114], null))],(3),cljs.core.PersistentArrayMap.EMPTY,(function (comp19612,old19613,new19614){
shadow.grove.components.check_args_BANG_(comp19612,new19614,0);

return undefined;
}),(3),(function (comp19612){
var toggle_state_ref = shadow.grove.components.get_slot_value(comp19612,(0));
var toggle_state = shadow.grove.components.get_slot_value(comp19612,(1));
return shadow.arborist.fragments.fragment_init([shadow.grove.ui.toggle.toggle.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pressed","pressed",1100937946),new cljs.core.Keyword(null,"bold","bold",-116809535).cljs$core$IFn$_invoke$arity$1(toggle_state),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__19609_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(toggle_state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"bold","bold",-116809535),p1__19609_SHARP_);
})], null),"B"),shadow.grove.ui.toggle.toggle.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pressed","pressed",1100937946),new cljs.core.Keyword(null,"italic","italic",32599196).cljs$core$IFn$_invoke$arity$1(toggle_state),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__19610_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(toggle_state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"italic","italic",32599196),p1__19610_SHARP_);
})], null),"I"),shadow.grove.ui.toggle.toggle.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"pressed","pressed",1100937946),new cljs.core.Keyword(null,"outline","outline",793464534).cljs$core$IFn$_invoke$arity$1(toggle_state),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__19611_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(toggle_state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"outline","outline",793464534),p1__19611_SHARP_);
})], null),"Toggle me"),shadow.grove.ui.toggle.toggle.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065)], null),"Sm"),shadow.grove.ui.toggle.toggle.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"default","default",-1987822328)], null),"Md"),shadow.grove.ui.toggle.toggle.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"lg","lg",-80787836)], null),"Lg"),shadow.grove.ui.toggle.toggle.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),"Off"),shadow.grove.ui.toggle.toggle.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pressed","pressed",1100937946),true,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),"On")],null,dummy.components.fragment_l117_c5);
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878),"dummy/components.cljs",new cljs.core.Keyword(null,"line","line",212345235),112,new cljs.core.Keyword(null,"column","column",2078222095),7], null));
dummy.components.fragment_l150_c5 = shadow.arborist.fragments.make_fragment_code((function (frag19647,env19648,vals19649,element_fn19650){
var el0_div = element_fn19650(new cljs.core.Keyword(null,"div","div",1057191632));
var el1_h2 = element_fn19650(new cljs.core.Keyword(null,"h2","h2",-372662728));
var el3_div = element_fn19650(new cljs.core.Keyword(null,"div","div",1057191632));
var el4_div = element_fn19650(new cljs.core.Keyword(null,"div","div",1057191632));
var d5 = shadow.arborist.fragments.managed_create(env19648,(vals19649[0]));
var el6_label = element_fn19650(new cljs.core.Keyword(null,"label","label",1718410804));
var el8_div = element_fn19650(new cljs.core.Keyword(null,"div","div",1057191632));
var d9 = shadow.arborist.fragments.managed_create(env19648,(vals19649[1]));
var el10_label = element_fn19650(new cljs.core.Keyword(null,"label","label",1718410804));
var el12_div = element_fn19650(new cljs.core.Keyword(null,"div","div",1057191632));
var d13 = shadow.arborist.fragments.managed_create(env19648,(vals19649[2]));
var el14_label = element_fn19650(new cljs.core.Keyword(null,"label","label",1718410804));
var el16_div = element_fn19650(new cljs.core.Keyword(null,"div","div",1057191632));
var d17 = shadow.arborist.fragments.managed_create(env19648,(vals19649[3]));
var el18_label = element_fn19650(new cljs.core.Keyword(null,"label","label",1718410804));
shadow.arborist.fragments.set_attr(env19648,el0_div,new cljs.core.Keyword(null,"class","class",-2030961996),null,dummy.components.$section);

shadow.arborist.fragments.append_child(el0_div,el1_h2);

(el1_h2.textContent = "Switch");

shadow.arborist.fragments.set_attr(env19648,el1_h2,new cljs.core.Keyword(null,"class","class",-2030961996),null,dummy.components.$section_title);

shadow.arborist.fragments.append_child(el0_div,el3_div);

shadow.arborist.fragments.set_attr(env19648,el3_div,new cljs.core.Keyword(null,"class","class",-2030961996),null,(shadow.css.sel("dummy_components__L152_C16")));

shadow.arborist.fragments.append_child(el3_div,el4_div);

shadow.arborist.fragments.set_attr(env19648,el4_div,new cljs.core.Keyword(null,"class","class",-2030961996),null,(shadow.css.sel("dummy_components__L153_C17")));

shadow.arborist.fragments.managed_append(el4_div,d5);

shadow.arborist.fragments.append_child(el4_div,el6_label);

(el6_label.textContent = "Airplane Mode");

shadow.arborist.fragments.set_attr(env19648,el6_label,new cljs.core.Keyword(null,"for","for",-1323786319),null,"airplane");

shadow.arborist.fragments.append_child(el3_div,el8_div);

shadow.arborist.fragments.set_attr(env19648,el8_div,new cljs.core.Keyword(null,"class","class",-2030961996),null,(shadow.css.sel("dummy_components__L158_C17")));

shadow.arborist.fragments.managed_append(el8_div,d9);

shadow.arborist.fragments.append_child(el8_div,el10_label);

(el10_label.textContent = "Wi-Fi");

shadow.arborist.fragments.set_attr(env19648,el10_label,new cljs.core.Keyword(null,"for","for",-1323786319),null,"wifi");

shadow.arborist.fragments.append_child(el3_div,el12_div);

shadow.arborist.fragments.set_attr(env19648,el12_div,new cljs.core.Keyword(null,"class","class",-2030961996),null,(shadow.css.sel("dummy_components__L163_C17")));

shadow.arborist.fragments.managed_append(el12_div,d13);

shadow.arborist.fragments.append_child(el12_div,el14_label);

(el14_label.textContent = "Bluetooth");

shadow.arborist.fragments.set_attr(env19648,el14_label,new cljs.core.Keyword(null,"for","for",-1323786319),null,"bluetooth");

shadow.arborist.fragments.append_child(el3_div,el16_div);

shadow.arborist.fragments.set_attr(env19648,el16_div,new cljs.core.Keyword(null,"class","class",-2030961996),null,(shadow.css.sel("dummy_components__L168_C17")));

shadow.arborist.fragments.managed_append(el16_div,d17);

shadow.arborist.fragments.append_child(el16_div,el18_label);

(el18_label.textContent = "Disabled");

shadow.arborist.fragments.set_attr(env19648,el18_label,new cljs.core.Keyword(null,"for","for",-1323786319),null,"disabled");

return [el0_div,d5,d9,d13,d17];
}),shadow.arborist.fragments.frag_single_dom_mount,(function (this19654,env19655,exports19656,oldv19657,newv19658){
shadow.arborist.fragments.update_managed(this19654,env19655,exports19656,1,(oldv19657[0]),(newv19658[0]));

shadow.arborist.fragments.update_managed(this19654,env19655,exports19656,2,(oldv19657[1]),(newv19658[1]));

shadow.arborist.fragments.update_managed(this19654,env19655,exports19656,3,(oldv19657[2]),(newv19658[2]));

shadow.arborist.fragments.update_managed(this19654,env19655,exports19656,4,(oldv19657[3]),(newv19658[3]));

return undefined;
}),(function (env19660,exports19659,oldv19661,dom_remove19662){
if(dom_remove19662){
shadow.arborist.fragments.dom_remove((exports19659[0]));
} else {
}

shadow.arborist.fragments.managed_remove((exports19659[1]),false);

shadow.arborist.fragments.managed_remove((exports19659[2]),false);

shadow.arborist.fragments.managed_remove((exports19659[3]),false);

shadow.arborist.fragments.managed_remove((exports19659[4]),false);

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"dummy/components.cljs",new cljs.core.Keyword(null,"line","line",212345235),150,new cljs.core.Keyword(null,"column","column",2078222095),5], null));

dummy.components.demo_switches = shadow.grove.components.make_component_config("dummy.components/demo-switches",[shadow.grove.components.make_slot_config((0),(2),(function (comp19639){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"airplane","airplane",828329053),false,new cljs.core.Keyword(null,"wifi","wifi",-1882242824),true,new cljs.core.Keyword(null,"bluetooth","bluetooth",1738618990),false], null));
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"bind","bind",-113428417),new cljs.core.Keyword(null,"name","name",1843675177),"switch-state-ref",new cljs.core.Keyword(null,"column","column",2078222095),9,new cljs.core.Keyword(null,"line","line",212345235),146], null)),shadow.grove.components.make_slot_config((1),(0),(function (comp19639){
var switch_state_ref = shadow.grove.components.get_slot_value(comp19639,(0));
return shadow.grove.watch.cljs$core$IFn$_invoke$arity$1(switch_state_ref);
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"bind","bind",-113428417),new cljs.core.Keyword(null,"name","name",1843675177),"switch-state",new cljs.core.Keyword(null,"column","column",2078222095),9,new cljs.core.Keyword(null,"line","line",212345235),147], null))],(3),cljs.core.PersistentArrayMap.EMPTY,(function (comp19639,old19640,new19641){
shadow.grove.components.check_args_BANG_(comp19639,new19641,0);

return undefined;
}),(3),(function (comp19639){
var switch_state_ref = shadow.grove.components.get_slot_value(comp19639,(0));
var switch_state = shadow.grove.components.get_slot_value(comp19639,(1));
return shadow.arborist.fragments.fragment_init([shadow.grove.ui.switch$.ui_switch.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"airplane","airplane",828329053).cljs$core$IFn$_invoke$arity$1(switch_state),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__19636_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(switch_state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"airplane","airplane",828329053),p1__19636_SHARP_);
}),new cljs.core.Keyword(null,"id","id",-1388402092),"airplane"], null)),shadow.grove.ui.switch$.ui_switch.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"wifi","wifi",-1882242824).cljs$core$IFn$_invoke$arity$1(switch_state),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__19637_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(switch_state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"wifi","wifi",-1882242824),p1__19637_SHARP_);
}),new cljs.core.Keyword(null,"id","id",-1388402092),"wifi"], null)),shadow.grove.ui.switch$.ui_switch.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"bluetooth","bluetooth",1738618990).cljs$core$IFn$_invoke$arity$1(switch_state),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__19638_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(switch_state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"bluetooth","bluetooth",1738618990),p1__19638_SHARP_);
}),new cljs.core.Keyword(null,"id","id",-1388402092),"bluetooth"], null)),shadow.grove.ui.switch$.ui_switch.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true,new cljs.core.Keyword(null,"id","id",-1388402092),"disabled"], null))],null,dummy.components.fragment_l150_c5);
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878),"dummy/components.cljs",new cljs.core.Keyword(null,"line","line",212345235),145,new cljs.core.Keyword(null,"column","column",2078222095),7], null));
dummy.components.fragment_l179_c5 = shadow.arborist.fragments.make_fragment_code((function (frag19667,env19668,vals19669,element_fn19670){
var el0_div = element_fn19670(new cljs.core.Keyword(null,"div","div",1057191632));
var el1_h2 = element_fn19670(new cljs.core.Keyword(null,"h2","h2",-372662728));
var d3 = shadow.arborist.fragments.managed_create(env19668,(vals19669[0]));
shadow.arborist.fragments.set_attr(env19668,el0_div,new cljs.core.Keyword(null,"class","class",-2030961996),null,dummy.components.$section);

shadow.arborist.fragments.append_child(el0_div,el1_h2);

(el1_h2.textContent = "Tabs");

shadow.arborist.fragments.set_attr(env19668,el1_h2,new cljs.core.Keyword(null,"class","class",-2030961996),null,dummy.components.$section_title);

shadow.arborist.fragments.managed_append(el0_div,d3);

return [el0_div,d3];
}),shadow.arborist.fragments.frag_single_dom_mount,(function (this19674,env19675,exports19676,oldv19677,newv19678){
shadow.arborist.fragments.update_managed(this19674,env19675,exports19676,1,(oldv19677[0]),(newv19678[0]));

return undefined;
}),(function (env19680,exports19679,oldv19681,dom_remove19682){
if(dom_remove19682){
shadow.arborist.fragments.dom_remove((exports19679[0]));
} else {
}

shadow.arborist.fragments.managed_remove((exports19679[1]),false);

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"dummy/components.cljs",new cljs.core.Keyword(null,"line","line",212345235),179,new cljs.core.Keyword(null,"column","column",2078222095),5], null));

dummy.components.fragment_l182_c12 = shadow.arborist.fragments.make_fragment_code((function (frag19683,env19684,vals19685,element_fn19686){
var d0 = shadow.arborist.fragments.managed_create(env19684,(vals19685[0]));
var d1 = shadow.arborist.fragments.managed_create(env19684,(vals19685[1]));
var d2 = shadow.arborist.fragments.managed_create(env19684,(vals19685[2]));
var d3 = shadow.arborist.fragments.managed_create(env19684,(vals19685[3]));
return [d0,d1,d2,d3];
}),(function (exports19687,parent19688,anchor19689){
shadow.arborist.fragments.managed_insert((exports19687[0]),parent19688,anchor19689);

shadow.arborist.fragments.managed_insert((exports19687[1]),parent19688,anchor19689);

shadow.arborist.fragments.managed_insert((exports19687[2]),parent19688,anchor19689);

shadow.arborist.fragments.managed_insert((exports19687[3]),parent19688,anchor19689);

return undefined;
}),(function (this19690,env19691,exports19692,oldv19693,newv19694){
shadow.arborist.fragments.update_managed(this19690,env19691,exports19692,0,(oldv19693[0]),(newv19694[0]));

shadow.arborist.fragments.update_managed(this19690,env19691,exports19692,1,(oldv19693[1]),(newv19694[1]));

shadow.arborist.fragments.update_managed(this19690,env19691,exports19692,2,(oldv19693[2]),(newv19694[2]));

shadow.arborist.fragments.update_managed(this19690,env19691,exports19692,3,(oldv19693[3]),(newv19694[3]));

return undefined;
}),(function (env19696,exports19695,oldv19697,dom_remove19698){
shadow.arborist.fragments.managed_remove((exports19695[0]),dom_remove19698);

shadow.arborist.fragments.managed_remove((exports19695[1]),dom_remove19698);

shadow.arborist.fragments.managed_remove((exports19695[2]),dom_remove19698);

shadow.arborist.fragments.managed_remove((exports19695[3]),dom_remove19698);

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"dummy/components.cljs",new cljs.core.Keyword(null,"line","line",212345235),182,new cljs.core.Keyword(null,"column","column",2078222095),12], null));

dummy.components.fragment_l183_c18 = shadow.arborist.fragments.make_fragment_code((function (frag19699,env19700,vals19701,element_fn19702){
var d0 = shadow.arborist.fragments.managed_create(env19700,(vals19701[0]));
var d1 = shadow.arborist.fragments.managed_create(env19700,(vals19701[1]));
var d2 = shadow.arborist.fragments.managed_create(env19700,(vals19701[2]));
return [d0,d1,d2];
}),(function (exports19703,parent19704,anchor19705){
shadow.arborist.fragments.managed_insert((exports19703[0]),parent19704,anchor19705);

shadow.arborist.fragments.managed_insert((exports19703[1]),parent19704,anchor19705);

shadow.arborist.fragments.managed_insert((exports19703[2]),parent19704,anchor19705);

return undefined;
}),(function (this19706,env19707,exports19708,oldv19709,newv19710){
shadow.arborist.fragments.update_managed(this19706,env19707,exports19708,0,(oldv19709[0]),(newv19710[0]));

shadow.arborist.fragments.update_managed(this19706,env19707,exports19708,1,(oldv19709[1]),(newv19710[1]));

shadow.arborist.fragments.update_managed(this19706,env19707,exports19708,2,(oldv19709[2]),(newv19710[2]));

return undefined;
}),(function (env19712,exports19711,oldv19713,dom_remove19714){
shadow.arborist.fragments.managed_remove((exports19711[0]),dom_remove19714);

shadow.arborist.fragments.managed_remove((exports19711[1]),dom_remove19714);

shadow.arborist.fragments.managed_remove((exports19711[2]),dom_remove19714);

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"dummy/components.cljs",new cljs.core.Keyword(null,"line","line",212345235),183,new cljs.core.Keyword(null,"column","column",2078222095),18], null));

dummy.components.fragment_l194_c24 = shadow.arborist.fragments.make_fragment_code((function (frag19731,env19732,vals19733,element_fn19734){
var d0 = shadow.arborist.fragments.managed_create(env19732,(vals19733[0]));
var d1 = shadow.arborist.fragments.managed_create(env19732,(vals19733[1]));
return [d0,d1];
}),(function (exports19735,parent19736,anchor19737){
shadow.arborist.fragments.managed_insert((exports19735[0]),parent19736,anchor19737);

shadow.arborist.fragments.managed_insert((exports19735[1]),parent19736,anchor19737);

return undefined;
}),(function (this19738,env19739,exports19740,oldv19741,newv19742){
shadow.arborist.fragments.update_managed(this19738,env19739,exports19740,0,(oldv19741[0]),(newv19742[0]));

shadow.arborist.fragments.update_managed(this19738,env19739,exports19740,1,(oldv19741[1]),(newv19742[1]));

return undefined;
}),(function (env19744,exports19743,oldv19745,dom_remove19746){
shadow.arborist.fragments.managed_remove((exports19743[0]),dom_remove19746);

shadow.arborist.fragments.managed_remove((exports19743[1]),dom_remove19746);

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"dummy/components.cljs",new cljs.core.Keyword(null,"line","line",212345235),194,new cljs.core.Keyword(null,"column","column",2078222095),24], null));

dummy.components.fragment_l195_c30 = shadow.arborist.fragments.make_fragment_code((function (frag19747,env19748,vals19749,element_fn19750){
var d0 = shadow.arborist.fragments.managed_create(env19748,(vals19749[0]));
var d1 = shadow.arborist.fragments.managed_create(env19748,(vals19749[1]));
return [d0,d1];
}),(function (exports19751,parent19752,anchor19753){
shadow.arborist.fragments.managed_insert((exports19751[0]),parent19752,anchor19753);

shadow.arborist.fragments.managed_insert((exports19751[1]),parent19752,anchor19753);

return undefined;
}),(function (this19754,env19755,exports19756,oldv19757,newv19758){
shadow.arborist.fragments.update_managed(this19754,env19755,exports19756,0,(oldv19757[0]),(newv19758[0]));

shadow.arborist.fragments.update_managed(this19754,env19755,exports19756,1,(oldv19757[1]),(newv19758[1]));

return undefined;
}),(function (env19760,exports19759,oldv19761,dom_remove19762){
shadow.arborist.fragments.managed_remove((exports19759[0]),dom_remove19762);

shadow.arborist.fragments.managed_remove((exports19759[1]),dom_remove19762);

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"dummy/components.cljs",new cljs.core.Keyword(null,"line","line",212345235),195,new cljs.core.Keyword(null,"column","column",2078222095),30], null));

dummy.components.fragment_l198_c30 = shadow.arborist.fragments.make_fragment_code((function (frag19764,env19765,vals19766,element_fn19767){
var el0_p = element_fn19767(new cljs.core.Keyword(null,"p","p",151049309));
(el0_p.textContent = "Your account settings and preferences.");

return [el0_p];
}),shadow.arborist.fragments.frag_single_dom_mount,shadow.arborist.fragments.noop,(function (env19777,exports19776,oldv19778,dom_remove19779){
if(dom_remove19779){
shadow.arborist.fragments.dom_remove((exports19776[0]));
} else {
}

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"dummy/components.cljs",new cljs.core.Keyword(null,"line","line",212345235),198,new cljs.core.Keyword(null,"column","column",2078222095),30], null));

dummy.components.fragment_l201_c24 = shadow.arborist.fragments.make_fragment_code((function (frag19796,env19797,vals19798,element_fn19799){
var d0 = shadow.arborist.fragments.managed_create(env19797,(vals19798[0]));
var d1 = shadow.arborist.fragments.managed_create(env19797,(vals19798[1]));
return [d0,d1];
}),(function (exports19800,parent19801,anchor19802){
shadow.arborist.fragments.managed_insert((exports19800[0]),parent19801,anchor19802);

shadow.arborist.fragments.managed_insert((exports19800[1]),parent19801,anchor19802);

return undefined;
}),(function (this19803,env19804,exports19805,oldv19806,newv19807){
shadow.arborist.fragments.update_managed(this19803,env19804,exports19805,0,(oldv19806[0]),(newv19807[0]));

shadow.arborist.fragments.update_managed(this19803,env19804,exports19805,1,(oldv19806[1]),(newv19807[1]));

return undefined;
}),(function (env19809,exports19808,oldv19810,dom_remove19811){
shadow.arborist.fragments.managed_remove((exports19808[0]),dom_remove19811);

shadow.arborist.fragments.managed_remove((exports19808[1]),dom_remove19811);

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"dummy/components.cljs",new cljs.core.Keyword(null,"line","line",212345235),201,new cljs.core.Keyword(null,"column","column",2078222095),24], null));

dummy.components.fragment_l202_c30 = shadow.arborist.fragments.make_fragment_code((function (frag19812,env19813,vals19814,element_fn19815){
var d0 = shadow.arborist.fragments.managed_create(env19813,(vals19814[0]));
var d1 = shadow.arborist.fragments.managed_create(env19813,(vals19814[1]));
return [d0,d1];
}),(function (exports19816,parent19817,anchor19818){
shadow.arborist.fragments.managed_insert((exports19816[0]),parent19817,anchor19818);

shadow.arborist.fragments.managed_insert((exports19816[1]),parent19817,anchor19818);

return undefined;
}),(function (this19819,env19820,exports19821,oldv19822,newv19823){
shadow.arborist.fragments.update_managed(this19819,env19820,exports19821,0,(oldv19822[0]),(newv19823[0]));

shadow.arborist.fragments.update_managed(this19819,env19820,exports19821,1,(oldv19822[1]),(newv19823[1]));

return undefined;
}),(function (env19825,exports19824,oldv19826,dom_remove19827){
shadow.arborist.fragments.managed_remove((exports19824[0]),dom_remove19827);

shadow.arborist.fragments.managed_remove((exports19824[1]),dom_remove19827);

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"dummy/components.cljs",new cljs.core.Keyword(null,"line","line",212345235),202,new cljs.core.Keyword(null,"column","column",2078222095),30], null));

dummy.components.fragment_l205_c30 = shadow.arborist.fragments.make_fragment_code((function (frag19829,env19830,vals19831,element_fn19832){
var el0_p = element_fn19832(new cljs.core.Keyword(null,"p","p",151049309));
(el0_p.textContent = "Update your password to keep your account secure.");

return [el0_p];
}),shadow.arborist.fragments.frag_single_dom_mount,shadow.arborist.fragments.noop,(function (env19842,exports19841,oldv19843,dom_remove19844){
if(dom_remove19844){
shadow.arborist.fragments.dom_remove((exports19841[0]));
} else {
}

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"dummy/components.cljs",new cljs.core.Keyword(null,"line","line",212345235),205,new cljs.core.Keyword(null,"column","column",2078222095),30], null));

dummy.components.fragment_l208_c24 = shadow.arborist.fragments.make_fragment_code((function (frag19861,env19862,vals19863,element_fn19864){
var d0 = shadow.arborist.fragments.managed_create(env19862,(vals19863[0]));
var d1 = shadow.arborist.fragments.managed_create(env19862,(vals19863[1]));
return [d0,d1];
}),(function (exports19865,parent19866,anchor19867){
shadow.arborist.fragments.managed_insert((exports19865[0]),parent19866,anchor19867);

shadow.arborist.fragments.managed_insert((exports19865[1]),parent19866,anchor19867);

return undefined;
}),(function (this19868,env19869,exports19870,oldv19871,newv19872){
shadow.arborist.fragments.update_managed(this19868,env19869,exports19870,0,(oldv19871[0]),(newv19872[0]));

shadow.arborist.fragments.update_managed(this19868,env19869,exports19870,1,(oldv19871[1]),(newv19872[1]));

return undefined;
}),(function (env19874,exports19873,oldv19875,dom_remove19876){
shadow.arborist.fragments.managed_remove((exports19873[0]),dom_remove19876);

shadow.arborist.fragments.managed_remove((exports19873[1]),dom_remove19876);

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"dummy/components.cljs",new cljs.core.Keyword(null,"line","line",212345235),208,new cljs.core.Keyword(null,"column","column",2078222095),24], null));

dummy.components.fragment_l209_c30 = shadow.arborist.fragments.make_fragment_code((function (frag19877,env19878,vals19879,element_fn19880){
var d0 = shadow.arborist.fragments.managed_create(env19878,(vals19879[0]));
var d1 = shadow.arborist.fragments.managed_create(env19878,(vals19879[1]));
return [d0,d1];
}),(function (exports19881,parent19882,anchor19883){
shadow.arborist.fragments.managed_insert((exports19881[0]),parent19882,anchor19883);

shadow.arborist.fragments.managed_insert((exports19881[1]),parent19882,anchor19883);

return undefined;
}),(function (this19884,env19885,exports19886,oldv19887,newv19888){
shadow.arborist.fragments.update_managed(this19884,env19885,exports19886,0,(oldv19887[0]),(newv19888[0]));

shadow.arborist.fragments.update_managed(this19884,env19885,exports19886,1,(oldv19887[1]),(newv19888[1]));

return undefined;
}),(function (env19890,exports19889,oldv19891,dom_remove19892){
shadow.arborist.fragments.managed_remove((exports19889[0]),dom_remove19892);

shadow.arborist.fragments.managed_remove((exports19889[1]),dom_remove19892);

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"dummy/components.cljs",new cljs.core.Keyword(null,"line","line",212345235),209,new cljs.core.Keyword(null,"column","column",2078222095),30], null));

dummy.components.fragment_l212_c30 = shadow.arborist.fragments.make_fragment_code((function (frag19894,env19895,vals19896,element_fn19897){
var el0_p = element_fn19897(new cljs.core.Keyword(null,"p","p",151049309));
(el0_p.textContent = "Configure notification preferences and more.");

return [el0_p];
}),shadow.arborist.fragments.frag_single_dom_mount,shadow.arborist.fragments.noop,(function (env19907,exports19906,oldv19908,dom_remove19909){
if(dom_remove19909){
shadow.arborist.fragments.dom_remove((exports19906[0]));
} else {
}

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"dummy/components.cljs",new cljs.core.Keyword(null,"line","line",212345235),212,new cljs.core.Keyword(null,"column","column",2078222095),30], null));

dummy.components.demo_tabs = shadow.grove.components.make_component_config("dummy.components/demo-tabs",[shadow.grove.components.make_slot_config((0),(2),(function (comp19663){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1("account");
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"bind","bind",-113428417),new cljs.core.Keyword(null,"name","name",1843675177),"tab-ref",new cljs.core.Keyword(null,"column","column",2078222095),9,new cljs.core.Keyword(null,"line","line",212345235),175], null)),shadow.grove.components.make_slot_config((1),(0),(function (comp19663){
var tab_ref = shadow.grove.components.get_slot_value(comp19663,(0));
return shadow.grove.watch.cljs$core$IFn$_invoke$arity$1(tab_ref);
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"bind","bind",-113428417),new cljs.core.Keyword(null,"name","name",1843675177),"active-tab",new cljs.core.Keyword(null,"column","column",2078222095),9,new cljs.core.Keyword(null,"line","line",212345235),176], null))],(3),cljs.core.PersistentArrayMap.EMPTY,(function (comp19663,old19664,new19665){
shadow.grove.components.check_args_BANG_(comp19663,new19665,0);

return undefined;
}),(3),(function (comp19663){
var tab_ref = shadow.grove.components.get_slot_value(comp19663,(0));
var active_tab = shadow.grove.components.get_slot_value(comp19663,(1));
return shadow.arborist.fragments.fragment_init([shadow.grove.ui.tabs.tabs(cljs.core.PersistentArrayMap.EMPTY,shadow.arborist.fragments.fragment_init([shadow.grove.ui.tabs.tabs_list(cljs.core.PersistentArrayMap.EMPTY,shadow.arborist.fragments.fragment_init([shadow.grove.ui.tabs.tabs_trigger(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"account",new cljs.core.Keyword(null,"active","active",1895962068),active_tab,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(tab_ref,"account");
})], null),"Account"),shadow.grove.ui.tabs.tabs_trigger(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"password",new cljs.core.Keyword(null,"active","active",1895962068),active_tab,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(tab_ref,"password");
})], null),"Password"),shadow.grove.ui.tabs.tabs_trigger(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"settings",new cljs.core.Keyword(null,"active","active",1895962068),active_tab,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(tab_ref,"settings");
})], null),"Settings")],null,dummy.components.fragment_l183_c18)),shadow.grove.ui.tabs.tabs_content(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"account",new cljs.core.Keyword(null,"active","active",1895962068),active_tab], null),shadow.grove.ui.card.card(cljs.core.PersistentArrayMap.EMPTY,shadow.arborist.fragments.fragment_init([shadow.grove.ui.card.card_header(cljs.core.PersistentArrayMap.EMPTY,shadow.arborist.fragments.fragment_init([shadow.grove.ui.card.card_title(cljs.core.PersistentArrayMap.EMPTY,"Account"),shadow.grove.ui.card.card_description(cljs.core.PersistentArrayMap.EMPTY,"Make changes to your account here.")],null,dummy.components.fragment_l195_c30)),shadow.grove.ui.card.card_content(cljs.core.PersistentArrayMap.EMPTY,shadow.arborist.fragments.fragment_init([],null,dummy.components.fragment_l198_c30))],null,dummy.components.fragment_l194_c24))),shadow.grove.ui.tabs.tabs_content(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"password",new cljs.core.Keyword(null,"active","active",1895962068),active_tab], null),shadow.grove.ui.card.card(cljs.core.PersistentArrayMap.EMPTY,shadow.arborist.fragments.fragment_init([shadow.grove.ui.card.card_header(cljs.core.PersistentArrayMap.EMPTY,shadow.arborist.fragments.fragment_init([shadow.grove.ui.card.card_title(cljs.core.PersistentArrayMap.EMPTY,"Password"),shadow.grove.ui.card.card_description(cljs.core.PersistentArrayMap.EMPTY,"Change your password here.")],null,dummy.components.fragment_l202_c30)),shadow.grove.ui.card.card_content(cljs.core.PersistentArrayMap.EMPTY,shadow.arborist.fragments.fragment_init([],null,dummy.components.fragment_l205_c30))],null,dummy.components.fragment_l201_c24))),shadow.grove.ui.tabs.tabs_content(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"settings",new cljs.core.Keyword(null,"active","active",1895962068),active_tab], null),shadow.grove.ui.card.card(cljs.core.PersistentArrayMap.EMPTY,shadow.arborist.fragments.fragment_init([shadow.grove.ui.card.card_header(cljs.core.PersistentArrayMap.EMPTY,shadow.arborist.fragments.fragment_init([shadow.grove.ui.card.card_title(cljs.core.PersistentArrayMap.EMPTY,"Settings"),shadow.grove.ui.card.card_description(cljs.core.PersistentArrayMap.EMPTY,"Manage your preferences.")],null,dummy.components.fragment_l209_c30)),shadow.grove.ui.card.card_content(cljs.core.PersistentArrayMap.EMPTY,shadow.arborist.fragments.fragment_init([],null,dummy.components.fragment_l212_c30))],null,dummy.components.fragment_l208_c24)))],null,dummy.components.fragment_l182_c12))],null,dummy.components.fragment_l179_c5);
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878),"dummy/components.cljs",new cljs.core.Keyword(null,"line","line",212345235),174,new cljs.core.Keyword(null,"column","column",2078222095),7], null));
dummy.components.fragment_l221_c5 = shadow.arborist.fragments.make_fragment_code((function (frag19914,env19915,vals19916,element_fn19917){
var el0_div = element_fn19917(new cljs.core.Keyword(null,"div","div",1057191632));
var el1_h2 = element_fn19917(new cljs.core.Keyword(null,"h2","h2",-372662728));
var d3 = shadow.arborist.fragments.managed_create(env19915,(vals19916[0]));
var d4 = shadow.arborist.fragments.managed_create(env19915,(vals19916[1]));
shadow.arborist.fragments.set_attr(env19915,el0_div,new cljs.core.Keyword(null,"class","class",-2030961996),null,dummy.components.$section);

shadow.arborist.fragments.append_child(el0_div,el1_h2);

(el1_h2.textContent = "Dialog");

shadow.arborist.fragments.set_attr(env19915,el1_h2,new cljs.core.Keyword(null,"class","class",-2030961996),null,dummy.components.$section_title);

shadow.arborist.fragments.managed_append(el0_div,d3);

shadow.arborist.fragments.managed_append(el0_div,d4);

return [el0_div,d3,d4];
}),shadow.arborist.fragments.frag_single_dom_mount,(function (this19921,env19922,exports19923,oldv19924,newv19925){
shadow.arborist.fragments.update_managed(this19921,env19922,exports19923,1,(oldv19924[0]),(newv19925[0]));

shadow.arborist.fragments.update_managed(this19921,env19922,exports19923,2,(oldv19924[1]),(newv19925[1]));

return undefined;
}),(function (env19927,exports19926,oldv19928,dom_remove19929){
if(dom_remove19929){
shadow.arborist.fragments.dom_remove((exports19926[0]));
} else {
}

shadow.arborist.fragments.managed_remove((exports19926[1]),false);

shadow.arborist.fragments.managed_remove((exports19926[2]),false);

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"dummy/components.cljs",new cljs.core.Keyword(null,"line","line",212345235),221,new cljs.core.Keyword(null,"column","column",2078222095),5], null));

dummy.components.fragment_l226_c12 = shadow.arborist.fragments.make_fragment_code((function (frag19930,env19931,vals19932,element_fn19933){
var d0 = shadow.arborist.fragments.managed_create(env19931,(vals19932[0]));
var d1 = shadow.arborist.fragments.managed_create(env19931,(vals19932[1]));
return [d0,d1];
}),(function (exports19934,parent19935,anchor19936){
shadow.arborist.fragments.managed_insert((exports19934[0]),parent19935,anchor19936);

shadow.arborist.fragments.managed_insert((exports19934[1]),parent19935,anchor19936);

return undefined;
}),(function (this19937,env19938,exports19939,oldv19940,newv19941){
shadow.arborist.fragments.update_managed(this19937,env19938,exports19939,0,(oldv19940[0]),(newv19941[0]));

shadow.arborist.fragments.update_managed(this19937,env19938,exports19939,1,(oldv19940[1]),(newv19941[1]));

return undefined;
}),(function (env19943,exports19942,oldv19944,dom_remove19945){
shadow.arborist.fragments.managed_remove((exports19942[0]),dom_remove19945);

shadow.arborist.fragments.managed_remove((exports19942[1]),dom_remove19945);

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"dummy/components.cljs",new cljs.core.Keyword(null,"line","line",212345235),226,new cljs.core.Keyword(null,"column","column",2078222095),12], null));

dummy.components.fragment_l227_c18 = shadow.arborist.fragments.make_fragment_code((function (frag19946,env19947,vals19948,element_fn19949){
var d0 = shadow.arborist.fragments.managed_create(env19947,(vals19948[0]));
var d1 = shadow.arborist.fragments.managed_create(env19947,(vals19948[1]));
return [d0,d1];
}),(function (exports19950,parent19951,anchor19952){
shadow.arborist.fragments.managed_insert((exports19950[0]),parent19951,anchor19952);

shadow.arborist.fragments.managed_insert((exports19950[1]),parent19951,anchor19952);

return undefined;
}),(function (this19953,env19954,exports19955,oldv19956,newv19957){
shadow.arborist.fragments.update_managed(this19953,env19954,exports19955,0,(oldv19956[0]),(newv19957[0]));

shadow.arborist.fragments.update_managed(this19953,env19954,exports19955,1,(oldv19956[1]),(newv19957[1]));

return undefined;
}),(function (env19959,exports19958,oldv19960,dom_remove19961){
shadow.arborist.fragments.managed_remove((exports19958[0]),dom_remove19961);

shadow.arborist.fragments.managed_remove((exports19958[1]),dom_remove19961);

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"dummy/components.cljs",new cljs.core.Keyword(null,"line","line",212345235),227,new cljs.core.Keyword(null,"column","column",2078222095),18], null));

dummy.components.fragment_l230_c18 = shadow.arborist.fragments.make_fragment_code((function (frag19962,env19963,vals19964,element_fn19965){
var d0 = shadow.arborist.fragments.managed_create(env19963,(vals19964[0]));
var d1 = shadow.arborist.fragments.managed_create(env19963,(vals19964[1]));
return [d0,d1];
}),(function (exports19966,parent19967,anchor19968){
shadow.arborist.fragments.managed_insert((exports19966[0]),parent19967,anchor19968);

shadow.arborist.fragments.managed_insert((exports19966[1]),parent19967,anchor19968);

return undefined;
}),(function (this19969,env19970,exports19971,oldv19972,newv19973){
shadow.arborist.fragments.update_managed(this19969,env19970,exports19971,0,(oldv19972[0]),(newv19973[0]));

shadow.arborist.fragments.update_managed(this19969,env19970,exports19971,1,(oldv19972[1]),(newv19973[1]));

return undefined;
}),(function (env19975,exports19974,oldv19976,dom_remove19977){
shadow.arborist.fragments.managed_remove((exports19974[0]),dom_remove19977);

shadow.arborist.fragments.managed_remove((exports19974[1]),dom_remove19977);

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"dummy/components.cljs",new cljs.core.Keyword(null,"line","line",212345235),230,new cljs.core.Keyword(null,"column","column",2078222095),18], null));

dummy.components.demo_dialog = shadow.grove.components.make_component_config("dummy.components/demo-dialog",[shadow.grove.components.make_slot_config((0),(2),(function (comp19910){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"bind","bind",-113428417),new cljs.core.Keyword(null,"name","name",1843675177),"dialog-ref",new cljs.core.Keyword(null,"column","column",2078222095),9,new cljs.core.Keyword(null,"line","line",212345235),217], null)),shadow.grove.components.make_slot_config((1),(0),(function (comp19910){
var dialog_ref = shadow.grove.components.get_slot_value(comp19910,(0));
return shadow.grove.watch.cljs$core$IFn$_invoke$arity$1(dialog_ref);
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"bind","bind",-113428417),new cljs.core.Keyword(null,"name","name",1843675177),"dialog-open?",new cljs.core.Keyword(null,"column","column",2078222095),9,new cljs.core.Keyword(null,"line","line",212345235),218], null))],(3),cljs.core.PersistentArrayMap.EMPTY,(function (comp19910,old19911,new19912){
shadow.grove.components.check_args_BANG_(comp19910,new19912,0);

return undefined;
}),(3),(function (comp19910){
var dialog_open_QMARK_ = shadow.grove.components.get_slot_value(comp19910,(1));
var dialog_ref = shadow.grove.components.get_slot_value(comp19910,(0));
return shadow.arborist.fragments.fragment_init([shadow.grove.ui.button.button(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(dialog_ref,true);
})], null),"Open Dialog"),shadow.grove.ui.dialog.dialog.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),dialog_open_QMARK_,new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (){
return cljs.core.reset_BANG_(dialog_ref,false);
})], null),shadow.arborist.fragments.fragment_init([shadow.grove.ui.dialog.dialog_header(cljs.core.PersistentArrayMap.EMPTY,shadow.arborist.fragments.fragment_init([shadow.grove.ui.dialog.dialog_title(cljs.core.PersistentArrayMap.EMPTY,"Are you sure?"),shadow.grove.ui.dialog.dialog_description(cljs.core.PersistentArrayMap.EMPTY,"This action cannot be undone. This will permanently delete your account.")],null,dummy.components.fragment_l227_c18)),shadow.grove.ui.dialog.dialog_footer(cljs.core.PersistentArrayMap.EMPTY,shadow.arborist.fragments.fragment_init([shadow.grove.ui.button.button(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(dialog_ref,false);
})], null),"Cancel"),shadow.grove.ui.button.button(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"destructive","destructive",-1587723243),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(dialog_ref,false);
})], null),"Delete")],null,dummy.components.fragment_l230_c18))],null,dummy.components.fragment_l226_c12))],null,dummy.components.fragment_l221_c5);
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878),"dummy/components.cljs",new cljs.core.Keyword(null,"line","line",212345235),216,new cljs.core.Keyword(null,"column","column",2078222095),7], null));
dummy.components.$app = (shadow.css.sel("dummy_components__L238_C3"));
dummy.components.$page_title = (shadow.css.sel("dummy_components__L247_C3"));
dummy.components.$page_desc = (shadow.css.sel("dummy_components__L253_C3"));
dummy.components.fragment_l259_c5 = shadow.arborist.fragments.make_fragment_code((function (frag19983,env19984,vals19985,element_fn19986){
var el0_div = element_fn19986(new cljs.core.Keyword(null,"div","div",1057191632));
var el1_h1 = element_fn19986(new cljs.core.Keyword(null,"h1","h1",-1896887462));
var el3_p = element_fn19986(new cljs.core.Keyword(null,"p","p",151049309));
var d5 = shadow.arborist.fragments.managed_create(env19984,(vals19985[0]));
var el6_div = element_fn19986(new cljs.core.Keyword(null,"div","div",1057191632));
var d7 = shadow.arborist.fragments.managed_create(env19984,(vals19985[1]));
var d8 = shadow.arborist.fragments.managed_create(env19984,(vals19985[2]));
var d9 = shadow.arborist.fragments.managed_create(env19984,(vals19985[3]));
var d10 = shadow.arborist.fragments.managed_create(env19984,(vals19985[4]));
var d11 = shadow.arborist.fragments.managed_create(env19984,(vals19985[5]));
var d12 = shadow.arborist.fragments.managed_create(env19984,(vals19985[6]));
var d13 = shadow.arborist.fragments.managed_create(env19984,(vals19985[7]));
var d14 = shadow.arborist.fragments.managed_create(env19984,(vals19985[8]));
shadow.arborist.fragments.set_attr(env19984,el0_div,new cljs.core.Keyword(null,"class","class",-2030961996),null,dummy.components.$app);

shadow.arborist.fragments.append_child(el0_div,el1_h1);

(el1_h1.textContent = "shadow-grove UI Components");

shadow.arborist.fragments.set_attr(env19984,el1_h1,new cljs.core.Keyword(null,"class","class",-2030961996),null,dummy.components.$page_title);

shadow.arborist.fragments.append_child(el0_div,el3_p);

(el3_p.textContent = "A port of shadcn/ui components for shadow-grove.");

shadow.arborist.fragments.set_attr(env19984,el3_p,new cljs.core.Keyword(null,"class","class",-2030961996),null,dummy.components.$page_desc);

shadow.arborist.fragments.managed_append(el0_div,d5);

shadow.arborist.fragments.append_child(el0_div,el6_div);

shadow.arborist.fragments.set_attr(env19984,el6_div,new cljs.core.Keyword(null,"class","class",-2030961996),null,(shadow.css.sel("dummy_components__L263_C16")));

shadow.arborist.fragments.managed_append(el6_div,d7);

shadow.arborist.fragments.managed_append(el6_div,d8);

shadow.arborist.fragments.managed_append(el6_div,d9);

shadow.arborist.fragments.managed_append(el6_div,d10);

shadow.arborist.fragments.managed_append(el6_div,d11);

shadow.arborist.fragments.managed_append(el6_div,d12);

shadow.arborist.fragments.managed_append(el6_div,d13);

shadow.arborist.fragments.managed_append(el6_div,d14);

return [el0_div,d5,d7,d8,d9,d10,d11,d12,d13,d14];
}),shadow.arborist.fragments.frag_single_dom_mount,(function (this19990,env19991,exports19992,oldv19993,newv19994){
shadow.arborist.fragments.update_managed(this19990,env19991,exports19992,1,(oldv19993[0]),(newv19994[0]));

shadow.arborist.fragments.update_managed(this19990,env19991,exports19992,2,(oldv19993[1]),(newv19994[1]));

shadow.arborist.fragments.update_managed(this19990,env19991,exports19992,3,(oldv19993[2]),(newv19994[2]));

shadow.arborist.fragments.update_managed(this19990,env19991,exports19992,4,(oldv19993[3]),(newv19994[3]));

shadow.arborist.fragments.update_managed(this19990,env19991,exports19992,5,(oldv19993[4]),(newv19994[4]));

shadow.arborist.fragments.update_managed(this19990,env19991,exports19992,6,(oldv19993[5]),(newv19994[5]));

shadow.arborist.fragments.update_managed(this19990,env19991,exports19992,7,(oldv19993[6]),(newv19994[6]));

shadow.arborist.fragments.update_managed(this19990,env19991,exports19992,8,(oldv19993[7]),(newv19994[7]));

shadow.arborist.fragments.update_managed(this19990,env19991,exports19992,9,(oldv19993[8]),(newv19994[8]));

return undefined;
}),(function (env19996,exports19995,oldv19997,dom_remove19998){
if(dom_remove19998){
shadow.arborist.fragments.dom_remove((exports19995[0]));
} else {
}

shadow.arborist.fragments.managed_remove((exports19995[1]),false);

shadow.arborist.fragments.managed_remove((exports19995[2]),false);

shadow.arborist.fragments.managed_remove((exports19995[3]),false);

shadow.arborist.fragments.managed_remove((exports19995[4]),false);

shadow.arborist.fragments.managed_remove((exports19995[5]),false);

shadow.arborist.fragments.managed_remove((exports19995[6]),false);

shadow.arborist.fragments.managed_remove((exports19995[7]),false);

shadow.arborist.fragments.managed_remove((exports19995[8]),false);

shadow.arborist.fragments.managed_remove((exports19995[9]),false);

return undefined;
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),"dummy/components.cljs",new cljs.core.Keyword(null,"line","line",212345235),259,new cljs.core.Keyword(null,"column","column",2078222095),5], null));

dummy.components.ui_root = shadow.grove.components.make_component_config("dummy.components/ui-root",[],(0),cljs.core.PersistentArrayMap.EMPTY,(function (comp19978,old19979,new19980){
shadow.grove.components.check_args_BANG_(comp19978,new19980,0);

return undefined;
}),(0),(function (comp19978){
return shadow.arborist.fragments.fragment_init([shadow.grove.ui.separator.separator(cljs.core.PersistentArrayMap.EMPTY),dummy.components.demo_badges(),dummy.components.demo_separators(),dummy.components.demo_buttons(),dummy.components.demo_cards(),dummy.components.demo_toggles.cljs$core$IFn$_invoke$arity$0(),dummy.components.demo_switches.cljs$core$IFn$_invoke$arity$0(),dummy.components.demo_tabs.cljs$core$IFn$_invoke$arity$0(),dummy.components.demo_dialog.cljs$core$IFn$_invoke$arity$0()],null,dummy.components.fragment_l259_c5);
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878),"dummy/components.cljs",new cljs.core.Keyword(null,"line","line",212345235),257,new cljs.core.Keyword(null,"column","column",2078222095),7], null));
if((typeof dummy !== 'undefined') && (typeof dummy.components !== 'undefined') && (typeof dummy.components.root_el !== 'undefined')){
} else {
dummy.components.root_el = document.getElementById("root");
}
if((typeof dummy !== 'undefined') && (typeof dummy.components !== 'undefined') && (typeof dummy.components.rt_ref !== 'undefined')){
} else {
dummy.components.rt_ref = shadow.grove.get_runtime(new cljs.core.Keyword("dummy.components","components","dummy.components/components",-1897323626));
}
dummy.components.start = (function dummy$components$start(){
return shadow.grove.render(dummy.components.rt_ref,dummy.components.root_el,dummy.components.ui_root.cljs$core$IFn$_invoke$arity$0());
});
dummy.components.init = (function dummy$components$init(){
return dummy.components.start();
});

//# sourceMappingURL=dummy.components.js.map
