goog.provide('shadow.grove.protocols');

/**
 * @interface
 */
shadow.grove.protocols.IWork = function(){};

var shadow$grove$protocols$IWork$work_BANG_$dyn_7806 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.grove.protocols.work_BANG_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__(this$));
} else {
var m__5372__auto__ = (shadow.grove.protocols.work_BANG_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__(this$));
} else {
throw cljs.core.missing_protocol("IWork.work!",this$);
}
}
});
shadow.grove.protocols.work_BANG_ = (function shadow$grove$protocols$work_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$grove$protocols$IWork$work_BANG_$arity$1 == null)))))){
return this$.shadow$grove$protocols$IWork$work_BANG_$arity$1(this$);
} else {
return shadow$grove$protocols$IWork$work_BANG_$dyn_7806(this$);
}
});


/**
 * @interface
 */
shadow.grove.protocols.IScheduleWork = function(){};

var shadow$grove$protocols$IScheduleWork$schedule_work_BANG_$dyn_7807 = (function (this$,task,trigger){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.grove.protocols.schedule_work_BANG_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(this$,task,trigger) : m__5374__auto__(this$,task,trigger));
} else {
var m__5372__auto__ = (shadow.grove.protocols.schedule_work_BANG_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(this$,task,trigger) : m__5372__auto__(this$,task,trigger));
} else {
throw cljs.core.missing_protocol("IScheduleWork.schedule-work!",this$);
}
}
});
shadow.grove.protocols.schedule_work_BANG_ = (function shadow$grove$protocols$schedule_work_BANG_(this$,task,trigger){
if((((!((this$ == null)))) && ((!((this$.shadow$grove$protocols$IScheduleWork$schedule_work_BANG_$arity$3 == null)))))){
return this$.shadow$grove$protocols$IScheduleWork$schedule_work_BANG_$arity$3(this$,task,trigger);
} else {
return shadow$grove$protocols$IScheduleWork$schedule_work_BANG_$dyn_7807(this$,task,trigger);
}
});

var shadow$grove$protocols$IScheduleWork$unschedule_BANG_$dyn_7809 = (function (this$,task){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.grove.protocols.unschedule_BANG_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(this$,task) : m__5374__auto__(this$,task));
} else {
var m__5372__auto__ = (shadow.grove.protocols.unschedule_BANG_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(this$,task) : m__5372__auto__(this$,task));
} else {
throw cljs.core.missing_protocol("IScheduleWork.unschedule!",this$);
}
}
});
shadow.grove.protocols.unschedule_BANG_ = (function shadow$grove$protocols$unschedule_BANG_(this$,task){
if((((!((this$ == null)))) && ((!((this$.shadow$grove$protocols$IScheduleWork$unschedule_BANG_$arity$2 == null)))))){
return this$.shadow$grove$protocols$IScheduleWork$unschedule_BANG_$arity$2(this$,task);
} else {
return shadow$grove$protocols$IScheduleWork$unschedule_BANG_$dyn_7809(this$,task);
}
});

var shadow$grove$protocols$IScheduleWork$did_suspend_BANG_$dyn_7810 = (function (this$,target){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.grove.protocols.did_suspend_BANG_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(this$,target) : m__5374__auto__(this$,target));
} else {
var m__5372__auto__ = (shadow.grove.protocols.did_suspend_BANG_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(this$,target) : m__5372__auto__(this$,target));
} else {
throw cljs.core.missing_protocol("IScheduleWork.did-suspend!",this$);
}
}
});
shadow.grove.protocols.did_suspend_BANG_ = (function shadow$grove$protocols$did_suspend_BANG_(this$,target){
if((((!((this$ == null)))) && ((!((this$.shadow$grove$protocols$IScheduleWork$did_suspend_BANG_$arity$2 == null)))))){
return this$.shadow$grove$protocols$IScheduleWork$did_suspend_BANG_$arity$2(this$,target);
} else {
return shadow$grove$protocols$IScheduleWork$did_suspend_BANG_$dyn_7810(this$,target);
}
});

var shadow$grove$protocols$IScheduleWork$did_finish_BANG_$dyn_7814 = (function (this$,target){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.grove.protocols.did_finish_BANG_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(this$,target) : m__5374__auto__(this$,target));
} else {
var m__5372__auto__ = (shadow.grove.protocols.did_finish_BANG_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(this$,target) : m__5372__auto__(this$,target));
} else {
throw cljs.core.missing_protocol("IScheduleWork.did-finish!",this$);
}
}
});
shadow.grove.protocols.did_finish_BANG_ = (function shadow$grove$protocols$did_finish_BANG_(this$,target){
if((((!((this$ == null)))) && ((!((this$.shadow$grove$protocols$IScheduleWork$did_finish_BANG_$arity$2 == null)))))){
return this$.shadow$grove$protocols$IScheduleWork$did_finish_BANG_$arity$2(this$,target);
} else {
return shadow$grove$protocols$IScheduleWork$did_finish_BANG_$dyn_7814(this$,target);
}
});


/**
 * @interface
 */
shadow.grove.protocols.IHandleEvents = function(){};

var shadow$grove$protocols$IHandleEvents$handle_event_BANG_$dyn_7817 = (function (this$,ev_map,e,origin){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.grove.protocols.handle_event_BANG_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$4(this$,ev_map,e,origin) : m__5374__auto__(this$,ev_map,e,origin));
} else {
var m__5372__auto__ = (shadow.grove.protocols.handle_event_BANG_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$4(this$,ev_map,e,origin) : m__5372__auto__(this$,ev_map,e,origin));
} else {
throw cljs.core.missing_protocol("IHandleEvents.handle-event!",this$);
}
}
});
shadow.grove.protocols.handle_event_BANG_ = (function shadow$grove$protocols$handle_event_BANG_(this$,ev_map,e,origin){
if((((!((this$ == null)))) && ((!((this$.shadow$grove$protocols$IHandleEvents$handle_event_BANG_$arity$4 == null)))))){
return this$.shadow$grove$protocols$IHandleEvents$handle_event_BANG_$arity$4(this$,ev_map,e,origin);
} else {
return shadow$grove$protocols$IHandleEvents$handle_event_BANG_$dyn_7817(this$,ev_map,e,origin);
}
});


/**
 * @interface
 */
shadow.grove.protocols.IEnvSource = function(){};

var shadow$grove$protocols$IEnvSource$get_component_env$dyn_7841 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.grove.protocols.get_component_env[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__(this$));
} else {
var m__5372__auto__ = (shadow.grove.protocols.get_component_env["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__(this$));
} else {
throw cljs.core.missing_protocol("IEnvSource.get-component-env",this$);
}
}
});
shadow.grove.protocols.get_component_env = (function shadow$grove$protocols$get_component_env(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$grove$protocols$IEnvSource$get_component_env$arity$1 == null)))))){
return this$.shadow$grove$protocols$IEnvSource$get_component_env$arity$1(this$);
} else {
return shadow$grove$protocols$IEnvSource$get_component_env$dyn_7841(this$);
}
});


/**
 * @interface
 */
shadow.grove.protocols.ISchedulerSource = function(){};

var shadow$grove$protocols$ISchedulerSource$get_scheduler$dyn_7846 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.grove.protocols.get_scheduler[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__(this$));
} else {
var m__5372__auto__ = (shadow.grove.protocols.get_scheduler["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__(this$));
} else {
throw cljs.core.missing_protocol("ISchedulerSource.get-scheduler",this$);
}
}
});
shadow.grove.protocols.get_scheduler = (function shadow$grove$protocols$get_scheduler(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$grove$protocols$ISchedulerSource$get_scheduler$arity$1 == null)))))){
return this$.shadow$grove$protocols$ISchedulerSource$get_scheduler$arity$1(this$);
} else {
return shadow$grove$protocols$ISchedulerSource$get_scheduler$dyn_7846(this$);
}
});


/**
 * @interface
 */
shadow.grove.protocols.IInvalidateSlot = function(){};

var shadow$grove$protocols$IInvalidateSlot$invalidate_BANG_$dyn_7861 = (function (ref){
var x__5373__auto__ = (((ref == null))?null:ref);
var m__5374__auto__ = (shadow.grove.protocols.invalidate_BANG_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(ref) : m__5374__auto__(ref));
} else {
var m__5372__auto__ = (shadow.grove.protocols.invalidate_BANG_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(ref) : m__5372__auto__(ref));
} else {
throw cljs.core.missing_protocol("IInvalidateSlot.invalidate!",ref);
}
}
});
/**
 * invalidates slot and causes it to execute again
 */
shadow.grove.protocols.invalidate_BANG_ = (function shadow$grove$protocols$invalidate_BANG_(ref){
if((((!((ref == null)))) && ((!((ref.shadow$grove$protocols$IInvalidateSlot$invalidate_BANG_$arity$1 == null)))))){
return ref.shadow$grove$protocols$IInvalidateSlot$invalidate_BANG_$arity$1(ref);
} else {
return shadow$grove$protocols$IInvalidateSlot$invalidate_BANG_$dyn_7861(ref);
}
});

var shadow$grove$protocols$IInvalidateSlot$provide_new_value_BANG_$dyn_7881 = (function (ref,new_value){
var x__5373__auto__ = (((ref == null))?null:ref);
var m__5374__auto__ = (shadow.grove.protocols.provide_new_value_BANG_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(ref,new_value) : m__5374__auto__(ref,new_value));
} else {
var m__5372__auto__ = (shadow.grove.protocols.provide_new_value_BANG_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(ref,new_value) : m__5372__auto__(ref,new_value));
} else {
throw cljs.core.missing_protocol("IInvalidateSlot.provide-new-value!",ref);
}
}
});
/**
 * invalidates slot, but only causes dependents to run again, not itself
 */
shadow.grove.protocols.provide_new_value_BANG_ = (function shadow$grove$protocols$provide_new_value_BANG_(ref,new_value){
if((((!((ref == null)))) && ((!((ref.shadow$grove$protocols$IInvalidateSlot$provide_new_value_BANG_$arity$2 == null)))))){
return ref.shadow$grove$protocols$IInvalidateSlot$provide_new_value_BANG_$arity$2(ref,new_value);
} else {
return shadow$grove$protocols$IInvalidateSlot$provide_new_value_BANG_$dyn_7881(ref,new_value);
}
});


/**
 * @interface
 */
shadow.grove.protocols.IProvideSlot = function(){};

var shadow$grove$protocols$IProvideSlot$_invalidate_slot_BANG_$dyn_7894 = (function (this$,idx){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.grove.protocols._invalidate_slot_BANG_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(this$,idx) : m__5374__auto__(this$,idx));
} else {
var m__5372__auto__ = (shadow.grove.protocols._invalidate_slot_BANG_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(this$,idx) : m__5372__auto__(this$,idx));
} else {
throw cljs.core.missing_protocol("IProvideSlot.-invalidate-slot!",this$);
}
}
});
shadow.grove.protocols._invalidate_slot_BANG_ = (function shadow$grove$protocols$_invalidate_slot_BANG_(this$,idx){
if((((!((this$ == null)))) && ((!((this$.shadow$grove$protocols$IProvideSlot$_invalidate_slot_BANG_$arity$2 == null)))))){
return this$.shadow$grove$protocols$IProvideSlot$_invalidate_slot_BANG_$arity$2(this$,idx);
} else {
return shadow$grove$protocols$IProvideSlot$_invalidate_slot_BANG_$dyn_7894(this$,idx);
}
});

var shadow$grove$protocols$IProvideSlot$_provide_new_value_BANG_$dyn_7916 = (function (this$,idx,new_value){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.grove.protocols._provide_new_value_BANG_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(this$,idx,new_value) : m__5374__auto__(this$,idx,new_value));
} else {
var m__5372__auto__ = (shadow.grove.protocols._provide_new_value_BANG_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(this$,idx,new_value) : m__5372__auto__(this$,idx,new_value));
} else {
throw cljs.core.missing_protocol("IProvideSlot.-provide-new-value!",this$);
}
}
});
shadow.grove.protocols._provide_new_value_BANG_ = (function shadow$grove$protocols$_provide_new_value_BANG_(this$,idx,new_value){
if((((!((this$ == null)))) && ((!((this$.shadow$grove$protocols$IProvideSlot$_provide_new_value_BANG_$arity$3 == null)))))){
return this$.shadow$grove$protocols$IProvideSlot$_provide_new_value_BANG_$arity$3(this$,idx,new_value);
} else {
return shadow$grove$protocols$IProvideSlot$_provide_new_value_BANG_$dyn_7916(this$,idx,new_value);
}
});

var shadow$grove$protocols$IProvideSlot$_init_slot_ref$dyn_7926 = (function (this$,idx){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.grove.protocols._init_slot_ref[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(this$,idx) : m__5374__auto__(this$,idx));
} else {
var m__5372__auto__ = (shadow.grove.protocols._init_slot_ref["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(this$,idx) : m__5372__auto__(this$,idx));
} else {
throw cljs.core.missing_protocol("IProvideSlot.-init-slot-ref",this$);
}
}
});
shadow.grove.protocols._init_slot_ref = (function shadow$grove$protocols$_init_slot_ref(this$,idx){
if((((!((this$ == null)))) && ((!((this$.shadow$grove$protocols$IProvideSlot$_init_slot_ref$arity$2 == null)))))){
return this$.shadow$grove$protocols$IProvideSlot$_init_slot_ref$arity$2(this$,idx);
} else {
return shadow$grove$protocols$IProvideSlot$_init_slot_ref$dyn_7926(this$,idx);
}
});


/**
* @constructor
*/
shadow.grove.protocols.ComponentConfig = (function (component_name,slots,slot_init_bits,opts,check_args_fn,render_deps,render_fn,events,debug_info){
this.component_name = component_name;
this.slots = slots;
this.slot_init_bits = slot_init_bits;
this.opts = opts;
this.check_args_fn = check_args_fn;
this.render_deps = render_deps;
this.render_fn = render_fn;
this.events = events;
this.debug_info = debug_info;
});

(shadow.grove.protocols.ComponentConfig.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"component-name","component-name",321855471,null),new cljs.core.Symbol(null,"slots","slots",1917350125,null),new cljs.core.Symbol(null,"slot-init-bits","slot-init-bits",-214377725,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"check-args-fn","check-args-fn",-1217445005,null),new cljs.core.Symbol(null,"render-deps","render-deps",481702797,null),new cljs.core.Symbol(null,"render-fn","render-fn",2039328045,null),new cljs.core.Symbol(null,"events","events",-861883568,null),new cljs.core.Symbol(null,"debug-info","debug-info",1773135838,null)], null);
}));

(shadow.grove.protocols.ComponentConfig.cljs$lang$type = true);

(shadow.grove.protocols.ComponentConfig.cljs$lang$ctorStr = "shadow.grove.protocols/ComponentConfig");

(shadow.grove.protocols.ComponentConfig.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.grove.protocols/ComponentConfig");
}));

/**
 * Positional factory function for shadow.grove.protocols/ComponentConfig.
 */
shadow.grove.protocols.__GT_ComponentConfig = (function shadow$grove$protocols$__GT_ComponentConfig(component_name,slots,slot_init_bits,opts,check_args_fn,render_deps,render_fn,events,debug_info){
return (new shadow.grove.protocols.ComponentConfig(component_name,slots,slot_init_bits,opts,check_args_fn,render_deps,render_fn,events,debug_info));
});


//# sourceMappingURL=shadow.grove.protocols.js.map
