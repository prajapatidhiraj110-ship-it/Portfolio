import{$a as h,Aa as W,Ab as ai,Ba as w,Bb as oi,C as Gt,Ca as M,Cb as ce,D as Ut,Da as u,Db as ut,E as qt,Ea as o,Eb as si,Fa as s,Fb as li,G as Ae,Ga as v,Gb as me,Ha as R,I as Ie,Ia as T,Ib as ht,Ja as J,Jb as L,K as re,Ka as oe,Kb as di,L as Y,La as N,Lb as Ne,M as x,Ma as O,Mb as Le,Na as se,Nb as ci,O as p,Oa as k,Ob as mi,Pa as at,Q as m,Qa as Oe,Ra as F,Sa as E,Ta as Zt,Ua as Kt,Va as ot,Wa as st,Xa as lt,Y as U,Ya as y,Z as A,Za as dt,_a as d,a as S,aa as z,ab as Yt,b as P,ba as ke,bb as Jt,ca as ae,cb as ei,d as Nt,da as Ve,db as H,ea as I,eb as ti,f as Lt,g as B,ga as X,gb as Z,ha as l,hb as $,i as Bt,j as zt,ja as Wt,jb as ge,ka as j,kb as ii,la as _,lb as le,mb as _e,nb as Pe,o as Ee,ob as ni,pa as b,pb as ct,qa as C,ra as g,rb as Re,sa as q,sb as Te,t as jt,ta as f,tb as ri,u as Ht,ub as ee,v as Se,va as $t,wa as Qt,yb as de,za as Xt,zb as mt}from"./chunk-AFWYHN2K.js";var bi=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)(_(j),_(I))};static \u0275dir=g({type:t})}return t})(),Vn=(()=>{class t extends bi{static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ve(t)))(r||t)}})();static \u0275dir=g({type:t,features:[q]})}return t})(),yi=new p("");var On={provide:yi,useExisting:re(()=>Qe),multi:!0};function Pn(){let t=ct()?ct().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Rn=new p(""),Qe=(()=>{class t extends bi{_compositionMode;_composing=!1;constructor(e,n,r){super(e,n),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!Pn())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)(_(j),_(I),_(Rn,8))};static \u0275dir=g({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&N("input",function(c){return r._handleInput(c.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(c){return r._compositionEnd(c.target.value)})},standalone:!1,features:[H([On]),q]})}return t})();function vt(t){return t==null||bt(t)===0}function bt(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var yt=new p(""),xt=new p(""),Tn=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,G=class{static min(i){return Nn(i)}static max(i){return Ln(i)}static required(i){return Bn(i)}static requiredTrue(i){return zn(i)}static email(i){return jn(i)}static minLength(i){return Hn(i)}static maxLength(i){return Gn(i)}static pattern(i){return Un(i)}static nullValidator(i){return xi()}static compose(i){return Ei(i)}static composeAsync(i){return Si(i)}};function Nn(t){return i=>{if(i.value==null||t==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<t?{min:{min:t,actual:i.value}}:null}}function Ln(t){return i=>{if(i.value==null||t==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>t?{max:{max:t,actual:i.value}}:null}}function Bn(t){return vt(t.value)?{required:!0}:null}function zn(t){return t.value===!0?null:{required:!0}}function jn(t){return vt(t.value)||Tn.test(t.value)?null:{email:!0}}function Hn(t){return i=>{let e=i.value?.length??bt(i.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function Gn(t){return i=>{let e=i.value?.length??bt(i.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function Un(t){if(!t)return xi;let i,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=t.toString(),i=t),n=>{if(vt(n.value))return null;let r=n.value;return i.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function xi(t){return null}function Ci(t){return t!=null}function wi(t){return Qt(t)?zt(t):t}function Mi(t){let i={};return t.forEach(e=>{i=e!=null?S(S({},i),e):i}),Object.keys(i).length===0?null:i}function Di(t,i){return i.map(e=>e(t))}function qn(t){return!t.validate}function Fi(t){return t.map(i=>qn(i)?i:e=>i.validate(e))}function Ei(t){if(!t)return null;let i=t.filter(Ci);return i.length==0?null:function(e){return Mi(Di(e,i))}}function Ct(t){return t!=null?Ei(Fi(t)):null}function Si(t){if(!t)return null;let i=t.filter(Ci);return i.length==0?null:function(e){let n=Di(e,i).map(wi);return jt(n).pipe(Ee(Mi))}}function wt(t){return t!=null?Si(Fi(t)):null}function ui(t,i){return t===null?[i]:Array.isArray(t)?[...t,i]:[t,i]}function Ai(t){return t._rawValidators}function Ii(t){return t._rawAsyncValidators}function pt(t){return t?Array.isArray(t)?t:[t]:[]}function je(t,i){return Array.isArray(t)?t.includes(i):t===i}function hi(t,i){let e=pt(i);return pt(t).forEach(r=>{je(e,r)||e.push(r)}),e}function pi(t,i){return pt(i).filter(e=>!je(t,e))}var He=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=Ct(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=wt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},te=class extends He{name;get formDirective(){return null}get path(){return null}},ne=class extends He{_parent=null;name=null;valueAccessor=null},Ge=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var ki=(()=>{class t extends Ge{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(_(ne,2))};static \u0275dir=g({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&y("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[q]})}return t})(),Vi=(()=>{class t extends Ge{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(_(te,10))};static \u0275dir=g({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&y("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[q]})}return t})();var ve="VALID",Be="INVALID",ue="PENDING",be="DISABLED",ie=class{},Ue=class extends ie{value;source;constructor(i,e){super(),this.value=i,this.source=e}},xe=class extends ie{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},Ce=class extends ie{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},he=class extends ie{status;source;constructor(i,e){super(),this.status=i,this.source=e}},qe=class extends ie{source;constructor(i){super(),this.source=i}},we=class extends ie{source;constructor(i){super(),this.source=i}};function Mt(t){return(Xe(t)?t.validators:t)||null}function Wn(t){return Array.isArray(t)?Ct(t):t||null}function Dt(t,i){return(Xe(i)?i.asyncValidators:t)||null}function $n(t){return Array.isArray(t)?wt(t):t||null}function Xe(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Oi(t,i,e){let n=t.controls;if(!(i?Object.keys(n):n).length)throw new Ie(1e3,"");if(!n[e])throw new Ie(1001,"")}function Pi(t,i,e){t._forEachChild((n,r)=>{if(e[r]===void 0)throw new Ie(-1002,"")})}var pe=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return Z(this.statusReactive)}set status(i){Z(()=>this.statusReactive.set(i))}_status=$(()=>this.statusReactive());statusReactive=z(void 0);get valid(){return this.status===ve}get invalid(){return this.status===Be}get pending(){return this.status===ue}get disabled(){return this.status===be}get enabled(){return this.status!==be}errors;get pristine(){return Z(this.pristineReactive)}set pristine(i){Z(()=>this.pristineReactive.set(i))}_pristine=$(()=>this.pristineReactive());pristineReactive=z(!0);get dirty(){return!this.pristine}get touched(){return Z(this.touchedReactive)}set touched(i){Z(()=>this.touchedReactive.set(i))}_touched=$(()=>this.touchedReactive());touchedReactive=z(!1);get untouched(){return!this.touched}_events=new B;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(hi(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(hi(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(pi(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(pi(i,this._rawAsyncValidators))}hasValidator(i){return je(this._rawValidators,i)}hasAsyncValidator(i){return je(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let n=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(P(S({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new Ce(!0,n))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=i.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:n})}),i.onlySelf||this._parent?._updateTouched(i,n),e&&i.emitEvent!==!1&&this._events.next(new Ce(!1,n))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let n=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(P(S({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new xe(!1,n))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=i.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,n),e&&i.emitEvent!==!1&&this._events.next(new xe(!0,n))}markAsPending(i={}){this.status=ue;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new he(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(P(S({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=be,this.errors=null,this._forEachChild(r=>{r.disable(P(S({},i),{onlySelf:!0}))}),this._updateValue();let n=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Ue(this.value,n)),this._events.next(new he(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(P(S({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=ve,this._forEachChild(n=>{n.enable(P(S({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(P(S({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ve||this.status===ue)&&this._runAsyncValidator(n,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Ue(this.value,e)),this._events.next(new he(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(P(S({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?be:ve}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=ue,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let n=wi(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,r)=>n&&n._find(r),this)}getError(i,e){let n=e?this.get(e):this;return n?.errors?n.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,n){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||n)&&this._events.next(new he(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,n)}_initObservables(){this.valueChanges=new U,this.statusChanges=new U}_calculateStatus(){return this._allControlsDisabled()?be:this.errors?Be:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ue)?ue:this._anyControlsHaveStatus(Be)?Be:ve}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,i.onlySelf||this._parent?._updatePristine(i,e),r&&this._events.next(new xe(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new Ce(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){Xe(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=Wn(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=$n(this._rawAsyncValidators)}},fe=class extends pe{constructor(i,e,n){super(Mt(e),Dt(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){return this.controls[i]?this.controls[i]:(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,n={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,n={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,e={}){Pi(this,!0,i),Object.keys(i).forEach(n=>{Oi(this,!0,n),this.controls[n].setValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(n=>{let r=this.controls[n];r&&r.patchValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((n,r)=>{n.reset(i?i[r]:null,P(S({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new we(this))}getRawValue(){return this._reduceChildren({},(i,e,n)=>(i[n]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&i(n,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&i(n))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,n,r)=>((n.enabled||this.disabled)&&(e[r]=n.value),e))}_reduceChildren(i,e){let n=i;return this._forEachChild((r,a)=>{n=e(n,r,a)}),n}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var ft=class extends fe{};var Ft=new p("",{factory:()=>Et}),Et="always";function Qn(t,i){return[...i.path,t]}function gt(t,i,e=Et){St(t,i),i.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(t.disabled),Zn(t,i),Yn(t,i),Kn(t,i),Xn(t,i)}function fi(t,i,e=!0){let n=()=>{};i?.valueAccessor?.registerOnChange(n),i?.valueAccessor?.registerOnTouched(n),$e(t,i),t&&(i._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function We(t,i){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function Xn(t,i){if(i.valueAccessor.setDisabledState){let e=n=>{i.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),i._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function St(t,i){let e=Ai(t);i.validator!==null?t.setValidators(ui(e,i.validator)):typeof e=="function"&&t.setValidators([e]);let n=Ii(t);i.asyncValidator!==null?t.setAsyncValidators(ui(n,i.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();We(i._rawValidators,r),We(i._rawAsyncValidators,r)}function $e(t,i){let e=!1;if(t!==null){if(i.validator!==null){let r=Ai(t);if(Array.isArray(r)&&r.length>0){let a=r.filter(c=>c!==i.validator);a.length!==r.length&&(e=!0,t.setValidators(a))}}if(i.asyncValidator!==null){let r=Ii(t);if(Array.isArray(r)&&r.length>0){let a=r.filter(c=>c!==i.asyncValidator);a.length!==r.length&&(e=!0,t.setAsyncValidators(a))}}}let n=()=>{};return We(i._rawValidators,n),We(i._rawAsyncValidators,n),e}function Zn(t,i){i.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Ri(t,i)})}function Kn(t,i){i.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Ri(t,i),t.updateOn!=="submit"&&t.markAsTouched()})}function Ri(t,i){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Yn(t,i){let e=(n,r)=>{i.valueAccessor.writeValue(n),r&&i.viewToModelUpdate(n)};t.registerOnChange(e),i._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function Ti(t,i){t==null,St(t,i)}function Jn(t,i){return $e(t,i)}function er(t,i){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function tr(t){return Object.getPrototypeOf(t.constructor)===Vn}function Ni(t,i){t._syncPendingControls(),i.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function ir(t,i){if(!i)return null;Array.isArray(i);let e,n,r;return i.forEach(a=>{a.constructor===Qe?e=a:tr(a)?n=a:r=a}),r||n||e||null}function nr(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}var rr={provide:te,useExisting:re(()=>At)},ye=Promise.resolve(),At=(()=>{class t extends te{callSetDisabledState;get submitted(){return Z(this.submittedReactive)}_submitted=$(()=>this.submittedReactive());submittedReactive=z(!1);_directives=new Set;form;ngSubmit=new U;options;constructor(e,n,r){super(),this.callSetDisabledState=r,this.form=new fe({},Ct(e),wt(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){ye.then(()=>{let n=this._findContainer(e.path);e.control=n.registerControl(e.name,e.control),gt(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){ye.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){ye.then(()=>{let n=this._findContainer(e.path),r=new fe({});Ti(r,e),n.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){ye.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){ye.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Ni(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new qe(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(n){return new(n||t)(_(yt,10),_(xt,10),_(Ft,8))};static \u0275dir=g({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,r){n&1&&N("submit",function(c){return r.onSubmit(c)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[H([rr]),q]})}return t})();function gi(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}function _i(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var ze=class extends pe{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,n){super(Mt(e),Dt(n,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Xe(e)&&(e.nonNullable||e.initialValueIsDefault)&&(_i(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new we(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){gi(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){gi(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){_i(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var ar=t=>t instanceof ze;var Li=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=g({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var _t=class extends pe{constructor(i,e,n){super(Mt(e),Dt(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(i){return this.controls[this._adjustIndex(i)]}push(i,e={}){Array.isArray(i)?i.forEach(n=>{this.controls.push(n),this._registerControl(n)}):(this.controls.push(i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(i,e,n={}){this.controls.splice(i,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(i,e={}){let n=this._adjustIndex(i);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(i,e,n={}){let r=this._adjustIndex(i);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,e={}){Pi(this,!1,i),i.forEach((n,r)=>{Oi(this,!1,r),this.at(r).setValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(i.forEach((n,r)=>{this.at(r)&&this.at(r).patchValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i=[],e={}){this._forEachChild((n,r)=>{n.reset(i[r],P(S({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new we(this))}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((e,n)=>n._syncPendingControls()?!0:e,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((e,n)=>{i(e,n)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(e=>e.enabled&&i(e))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};var or=(()=>{class t extends te{callSetDisabledState;get submitted(){return Z(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=$(()=>this._submittedReactive());_submittedReactive=z(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,n,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&($e(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let n=this.form.get(e.path);return gt(n,e,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){fi(e.control||null,e,!1),nr(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,n){this.form.get(e.path).setValue(n)}onReset(){this.resetForm()}resetForm(e=void 0,n={}){this.form.reset(e,n),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,Ni(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new qe(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let n=e.control,r=this.form.get(e.path);n!==r&&(fi(n||null,e),ar(r)&&(gt(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let n=this.form.get(e.path);Ti(n,e),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let n=this.form?.get(e.path);n&&Jn(n,e)&&n.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){St(this.form,this),this._oldForm&&$e(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(n){return new(n||t)(_(yt,10),_(xt,10),_(Ft,8))};static \u0275dir=g({type:t,features:[q,ae]})}return t})();var Bi=new p("");var sr={provide:ne,useExisting:re(()=>It)},It=(()=>{class t extends ne{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new U;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,n,r,a,c){super(),this._ngModelWarningConfig=c,this._parent=e,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=ir(this,a)}ngOnChanges(e){this._added||this._setUpControl(),er(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return Qn(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(n){return new(n||t)(_(te,13),_(yt,10),_(xt,10),_(yi,10),_(Bi,8))};static \u0275dir=g({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[H([sr]),q,ae]})}return t})();var lr={provide:te,useExisting:re(()=>Me)},Me=(()=>{class t extends or{form=null;ngSubmit=new U;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=Ve(t)))(r||t)}})();static \u0275dir=g({type:t,selectors:[["","formGroup",""]],hostBindings:function(n,r){n&1&&N("submit",function(c){return r.onSubmit(c)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[H([lr]),q]})}return t})();var dr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=x({})}return t})();function vi(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var zi=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,n=null){let r=this._reduceControls(e),a={};return vi(n)?a=n:n!==null&&(a.validators=n.validator,a.asyncValidators=n.asyncValidator),new fe(r,a)}record(e,n=null){let r=this._reduceControls(e);return new ft(r,n)}control(e,n,r){let a={};return this.useNonNullable?(vi(n)?a=n:(a.validators=n,a.asyncValidators=r),new ze(e,P(S({},a),{nonNullable:!0}))):new ze(e,n,r)}array(e,n,r){let a=e.map(c=>this._createControl(c));return new _t(a,n,r)}_reduceControls(e){let n={};return Object.keys(e).forEach(r=>{n[r]=this._createControl(e[r])}),n}_createControl(e){if(e instanceof ze)return e;if(e instanceof pe)return e;if(Array.isArray(e)){let n=e[0],r=e.length>1?e[1]:null,a=e.length>2?e[2]:null;return this.control(n,r,a)}else return this.control(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=Y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ji=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Bi,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Ft,useValue:e.callSetDisabledState??Et}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=x({imports:[dr]})}return t})();var mr=["*"];var ur=new p("MAT_CARD_CONFIG"),Ze=(()=>{class t{appearance;constructor(){let e=m(ur,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=b({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(n,r){n&2&&y("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:mr,decls:1,vars:0,template:function(n,r){n&1&&(se(),k(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return t})();var Ke=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=x({imports:[L]})}return t})();var Ye=(()=>{class t{isErrorState(e,n){return!!(e&&e.invalid&&(e.touched||n&&n.submitted))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=Y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Je=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(i,e,n,r,a){this._defaultMatcher=i,this.ngControl=e,this._parentFormGroup=n,this._parentForm=r,this._stateChanges=a}updateErrorState(){let i=this.errorState,e=this._parentFormGroup||this._parentForm,n=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,a=n?.isErrorState(r,e)??!1;a!==i&&(this.errorState=a,this._stateChanges.next())}};var kt=class{_box;_destroyed=new B;_resizeSubject=new B;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new Lt(e=>{let n=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),n.unsubscribe(),this._elementObservables.delete(i)}}).pipe(Se(e=>e.some(n=>n.target===i)),Ut({bufferSize:1,refCount:!0}),Ae(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Gi=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=m(A);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,n){let r=n?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new kt(r)),this._observers.get(r).observe(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=Y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var hr=["notch"],pr=["matFormFieldNotchedOutline",""],fr=["*"],Ui=["iconPrefixContainer"],qi=["textPrefixContainer"],Wi=["iconSuffixContainer"],$i=["textSuffixContainer"],gr=["textField"],_r=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],vr=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function br(t,i){t&1&&v(0,"span",21)}function yr(t,i){if(t&1&&(o(0,"label",20),k(1,1),w(2,br,1,0,"span",21),s()),t&2){let e=O(2);u("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),W("for",e._control.disableAutomaticLabeling?null:e._control.id),l(2),M(!e.hideRequiredMarker&&e._control.required?2:-1)}}function xr(t,i){if(t&1&&w(0,yr,3,5,"label",20),t&2){let e=O();M(e._hasFloatingLabel()?0:-1)}}function Cr(t,i){t&1&&v(0,"div",7)}function wr(t,i){}function Mr(t,i){if(t&1&&f(0,wr,0,0,"ng-template",13),t&2){O(2);let e=st(1);u("ngTemplateOutlet",e)}}function Dr(t,i){if(t&1&&(o(0,"div",9),w(1,Mr,1,1,null,13),s()),t&2){let e=O();u("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),l(),M(e._forceDisplayInfixLabel()?-1:1)}}function Fr(t,i){t&1&&(o(0,"div",10,2),k(2,2),s())}function Er(t,i){t&1&&(o(0,"div",11,3),k(2,3),s())}function Sr(t,i){}function Ar(t,i){if(t&1&&f(0,Sr,0,0,"ng-template",13),t&2){O();let e=st(1);u("ngTemplateOutlet",e)}}function Ir(t,i){t&1&&(o(0,"div",14,4),k(2,4),s())}function kr(t,i){t&1&&(o(0,"div",15,5),k(2,5),s())}function Vr(t,i){t&1&&v(0,"div",16)}function Or(t,i){t&1&&(o(0,"div",18),k(1,6),s())}function Pr(t,i){if(t&1&&(o(0,"mat-hint",22),d(1),s()),t&2){let e=O(2);u("id",e._hintLabelId),l(),h(e.hintLabel)}}function Rr(t,i){if(t&1&&(o(0,"div",19),w(1,Pr,2,2,"mat-hint",22),k(2,7),v(3,"div",23),k(4,8),s()),t&2){let e=O();l(),M(e.hintLabel?1:-1)}}var De=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=g({type:t,selectors:[["mat-label"]]})}return t})(),en=new p("MatError"),Ot=(()=>{class t{id=m(ce).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=g({type:t,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(n,r){n&2&&oe("id",r.id)},inputs:{id:"id"},features:[H([{provide:en,useExisting:t}])]})}return t})(),Vt=(()=>{class t{align="start";id=m(ce).getId("mat-mdc-hint-");static \u0275fac=function(n){return new(n||t)};static \u0275dir=g({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(n,r){n&2&&(oe("id",r.id),W("align",null),y("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),Tr=new p("MatPrefix");var Nr=new p("MatSuffix");var tn=new p("FloatingLabelParent"),Qi=(()=>{class t{_elementRef=m(I);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=m(Gi);_ngZone=m(A);_parent=m(tn);_resizeSubscription=new Nt;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Lr(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=g({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(n,r){n&2&&y("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function Lr(t){let i=t;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let n=e.scrollWidth;return e.remove(),n}var Xi="mdc-line-ripple--active",et="mdc-line-ripple--deactivating",Zi=(()=>{class t{_elementRef=m(I);_cleanupTransitionEnd;constructor(){let e=m(A),n=m(j);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=n.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(et),e.add(Xi)}deactivate(){this._elementRef.nativeElement.classList.add(et)}_handleTransitionEnd=e=>{let n=this._elementRef.nativeElement.classList,r=n.contains(et);e.propertyName==="opacity"&&r&&n.remove(Xi,et)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=g({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),Ki=(()=>{class t{_elementRef=m(I);_ngZone=m(A);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,n=e.querySelector(".mdc-floating-label");n?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(n.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>n.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let n=this._notch.nativeElement;!this.open||!e?n.style.width="":n.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=b({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(n,r){if(n&1&&Oe(hr,5),n&2){let a;F(a=E())&&(r._notch=a.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(n,r){n&2&&y("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:pr,ngContentSelectors:fr,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(n,r){n&1&&(se(),J(0,"div",1),R(1,"div",2,0),k(3),T(),J(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),Pt=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(n){return new(n||t)};static \u0275dir=g({type:t})}return t})();var Rt=new p("MatFormField"),Br=new p("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Yi="fill",zr="auto",Ji="fixed",jr="translateY(-50%)",tt=(()=>{class t{_elementRef=m(I);_changeDetectorRef=m(le);_platform=m(de);_idGenerator=m(ce);_ngZone=m(A);_defaults=m(Br,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=ge("iconPrefixContainer");_textPrefixContainerSignal=ge("textPrefixContainer");_iconSuffixContainerSignal=ge("iconSuffixContainer");_textSuffixContainerSignal=ge("textSuffixContainer");_prefixSuffixContainers=$(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=ii(De);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=me(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||zr}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let n=e||this._defaults?.appearance||Yi;this._appearanceSignal.set(n)}_appearanceSignal=z(Yi);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Ji}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Ji}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new B;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=li();constructor(){let e=this._defaults,n=m(ht);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),ke(()=>this._currentDirection=n.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=$(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let n=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),n.controlType&&this._elementRef.nativeElement.classList.add(r+n.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=n.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=n.stateChanges.pipe(qt([void 0,void 0]),Ee(()=>[n.errorState,n.userAriaDescribedBy]),Gt(),Se(([[a,c],[D,K]])=>a!==D||c!==K)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),n.ngControl&&n.ngControl.valueChanges&&(this._valueChanges=n.ngControl.valueChanges.pipe(Ae(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Ht(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){ni({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=$(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let n=this._control?this._control.ngControl:null;return n&&n[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let a=this._hintChildren?this._hintChildren.find(D=>D.align==="start"):null,c=this._hintChildren?this._hintChildren.find(D=>D.align==="end"):null;a?e.push(a.id):this._hintLabel&&e.push(this._hintLabelId),c&&e.push(c.id)}else this._errorChildren&&e.push(...this._errorChildren.map(a=>a.id));let n=this._control.describedByIds,r;if(n){let a=this._describedByIds||e;r=e.concat(n.filter(c=>c&&!a.includes(c)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,n=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,a=this._textSuffixContainer?.nativeElement,c=e?.getBoundingClientRect().width??0,D=n?.getBoundingClientRect().width??0,K=r?.getBoundingClientRect().width??0,Q=a?.getBoundingClientRect().width??0,Dn=this._currentDirection==="rtl"?"-1":"1",Fn=`${c+D}px`,En=`calc(${Dn} * (${Fn} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,Sn=`var(--mat-mdc-form-field-label-transform, ${jr} translateX(${En}))`,An=c+D+K+Q;return[Sn,An]}_writeOutlinedLabelStyles(e){if(e!==null){let[n,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=n),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let n=e.getRootNode();return n&&n!==e}return document.documentElement.contains(e)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=b({type:t,selectors:[["mat-form-field"]],contentQueries:function(n,r,a){if(n&1&&(Zt(a,r._labelChild,De,5),at(a,Pt,5)(a,Tr,5)(a,Nr,5)(a,en,5)(a,Vt,5)),n&2){ot();let c;F(c=E())&&(r._formFieldControl=c.first),F(c=E())&&(r._prefixChildren=c),F(c=E())&&(r._suffixChildren=c),F(c=E())&&(r._errorChildren=c),F(c=E())&&(r._hintChildren=c)}},viewQuery:function(n,r){if(n&1&&(Kt(r._iconPrefixContainerSignal,Ui,5)(r._textPrefixContainerSignal,qi,5)(r._iconSuffixContainerSignal,Wi,5)(r._textSuffixContainerSignal,$i,5),Oe(gr,5)(Ui,5)(qi,5)(Wi,5)($i,5)(Qi,5)(Ki,5)(Zi,5)),n&2){ot(4);let a;F(a=E())&&(r._textField=a.first),F(a=E())&&(r._iconPrefixContainer=a.first),F(a=E())&&(r._textPrefixContainer=a.first),F(a=E())&&(r._iconSuffixContainer=a.first),F(a=E())&&(r._textSuffixContainer=a.first),F(a=E())&&(r._floatingLabel=a.first),F(a=E())&&(r._notchedOutline=a.first),F(a=E())&&(r._lineRipple=a.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(n,r){n&2&&y("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[H([{provide:Rt,useExisting:t},{provide:tn,useExisting:t}])],ngContentSelectors:vr,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(n,r){if(n&1&&(se(_r),f(0,xr,1,1,"ng-template",null,0,ti),o(2,"div",6,1),N("click",function(c){return r._control.onContainerClick(c)}),w(4,Cr,1,0,"div",7),o(5,"div",8),w(6,Dr,2,2,"div",9),w(7,Fr,3,0,"div",10),w(8,Er,3,0,"div",11),o(9,"div",12),w(10,Ar,1,1,null,13),k(11),s(),w(12,Ir,3,0,"div",14),w(13,kr,3,0,"div",15),s(),w(14,Vr,1,0,"div",16),s(),o(15,"div",17),w(16,Or,2,0,"div",18)(17,Rr,5,1,"div",19),s()),n&2){let a;l(2),y("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),l(2),M(!r._hasOutline()&&!r._control.disabled?4:-1),l(2),M(r._hasOutline()?6:-1),l(),M(r._hasIconPrefix?7:-1),l(),M(r._hasTextPrefix?8:-1),l(2),M(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),l(2),M(r._hasTextSuffix?12:-1),l(),M(r._hasIconSuffix?13:-1),l(),M(r._hasOutline()?-1:14),l(),y("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let c=r._getSubscriptMessageType();l(),M((a=c)==="error"?16:a==="hint"?17:-1)}},dependencies:[Qi,Ki,ri,Zi,Vt],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return t})();var Gr=new p("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})});var rn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=x({providers:[Ye,{provide:Gr,useValue:{separatorKeyCodes:[13]}}],imports:[di,L]})}return t})();var Fe=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=x({imports:[oi,tt,L]})}return t})();var qr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=b({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return t})(),Wr={passive:!0},an=(()=>{class t{_platform=m(de);_ngZone=m(A);_renderer=m(Wt).createRenderer(null,null);_styleLoader=m(ai);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Bt;this._styleLoader.load(qr);let n=mt(e),r=this._monitoredElements.get(n);if(r)return r.subject;let a=new B,c="cdk-text-field-autofilled",D=Q=>{Q.animationName==="cdk-text-field-autofill-start"&&!n.classList.contains(c)?(n.classList.add(c),this._ngZone.run(()=>a.next({target:Q.target,isAutofilled:!0}))):Q.animationName==="cdk-text-field-autofill-end"&&n.classList.contains(c)&&(n.classList.remove(c),this._ngZone.run(()=>a.next({target:Q.target,isAutofilled:!1})))},K=this._ngZone.runOutsideAngular(()=>(n.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(n,"animationstart",D,Wr)));return this._monitoredElements.set(n,{subject:a,unlisten:K}),a}stopMonitoring(e){let n=mt(e),r=this._monitoredElements.get(n);r&&(r.unlisten(),r.subject.complete(),n.classList.remove("cdk-text-field-autofill-monitored"),n.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(n))}ngOnDestroy(){this._monitoredElements.forEach((e,n)=>this.stopMonitoring(n))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=Y({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var on=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=x({})}return t})();var sn=new p("MAT_INPUT_VALUE_ACCESSOR");var $r=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Qr=new p("MAT_INPUT_CONFIG"),ln=(()=>{class t{_elementRef=m(I);_platform=m(de);ngControl=m(ne,{optional:!0,self:!0});_autofillMonitor=m(an);_ngZone=m(A);_formField=m(Rt,{optional:!0});_renderer=m(j);_uid=m(ce).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=m(Qr,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new B;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=me(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(G.required)??!1}set required(e){this._required=me(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&ut().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=me(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>ut().has(e));constructor(){let e=m(At,{optional:!0}),n=m(Me,{optional:!0}),r=m(Ye),a=m(sn,{optional:!0,self:!0}),c=this._elementRef.nativeElement,D=c.nodeName.toLowerCase();a?$t(a.value)?this._signalBasedValueAccessor=a:this._inputValueAccessor=a:this._inputValueAccessor=c,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(c,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Je(r,this.ngControl,n,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=D==="select",this._isTextarea=D==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=c.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&ke(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let n=this._elementRef.nativeElement;n.type==="number"?(n.type="text",n.setSelectionRange(0,0),n.type="number"):n.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let n=this._elementRef.nativeElement;this._previousPlaceholder=e,e?n.setAttribute("placeholder",e):n.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){$r.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,n=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&n&&n.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute("aria-describedby",e.join(" ")):n.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let n=e.target;!n.value&&n.selectionStart===0&&n.selectionEnd===0&&(n.setSelectionRange(1,1),n.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(n){return new(n||t)};static \u0275dir=g({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(n,r){n&1&&N("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),n&2&&(oe("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),W("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),y("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",_e]},exportAs:["matInput"],features:[H([{provide:Pt,useExisting:t}]),ae]})}return t})(),dn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=x({imports:[Fe,Fe,on,L]})}return t})();function Zr(t,i){t&1&&J(0,"div",2)}var Kr=new p("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var mn=(()=>{class t{_elementRef=m(I);_ngZone=m(A);_changeDetectorRef=m(le);_renderer=m(j);_cleanupTransitionEnd;constructor(){let e=si(),n=m(Kr,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),n&&(n.color&&(this.color=this._defaultColor=n.color),this.mode=n.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=cn(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=cn(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new U;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=b({type:t,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(n,r){n&2&&(W("aria-valuenow",r._isIndeterminate()?null:r.value)("mode",r.mode),dt("mat-"+r.color),y("_mat-animation-noopable",r._isNoopAnimation)("mdc-linear-progress--animation-ready",!r._isNoopAnimation)("mdc-linear-progress--indeterminate",r._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",Pe],bufferValue:[2,"bufferValue","bufferValue",Pe],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(n,r){n&1&&(R(0,"div",0),J(1,"div",1),w(2,Zr,1,0,"div",2),T(),R(3,"div",3),J(4,"span",4),T(),R(5,"div",5),J(6,"span",4),T()),n&2&&(l(),lt("flex-basis",r._getBufferBarFlexBasis()),l(),M(r.mode==="buffer"?2:-1),l(),lt("transform",r._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function cn(t,i=0,e=100){return Math.max(i,Math.min(e,t))}var un=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=x({imports:[L]})}return t})();var hn=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=C({type:t});static \u0275inj=x({imports:[L]})}return t})();var pn={name:"Dhiraj Prajapati",title:"Frontend Developer specializing in Angular Applications",summary:"4+ years of experience building scalable enterprise and fintech applications using Angular, TypeScript, RxJS, and modern frontend technologies.",resumeUrl:"assets/resume/dhiraj-prajapati-resume.pdf",projectsUrl:"#projects",contactUrl:"#contact",rolePills:["Angular Developer","Frontend Developer","Software Engineer"]},fn={overview:"I build enterprise-grade Angular applications with a strong focus on maintainable architecture, performance, and polished user experiences.",summary:"Over the last four years, I have partnered with product teams to deliver fintech and enterprise workflows, reusable component libraries, and API-driven experiences for high-value users.",strengths:["Component-driven development with standalone Angular architecture","Performance optimization and lazy-loading strategies","Strong collaboration with product, designers, and backend teams","Clean and accessible code with reusable UI systems"],value:"I bring a practical mindset that balances speed, scalability, and quality to help organizations ship reliable Angular products on time."},gn=[{title:"Frontend",items:["Angular","TypeScript","JavaScript","HTML5","CSS3","SCSS","Angular Material"]},{title:"Angular Expertise",items:["Reactive Forms","RxJS","Lazy Loading","Route Guards","Interceptors","State Management","Authentication","Performance Optimization"]},{title:"Tools",items:["Git","GitHub","VS Code","Postman"]}],_n=[{company:"Futurewise Technologies Pvt Ltd (IFANOW)",role:"SDE-II",dates:"Nov 2021 - Present",location:"Gujarat, India",responsibilities:["Developed enterprise fintech applications.","Integrated 100+ APIs.","Built investment workflows for SIPs and mandate setup.","Created reusable Angular components and shared UI patterns.","Improved application performance through profiling and lazy loading.","Collaborated closely with product and backend teams."]}],vn=[{title:"Wealth Management Platform",overview:"Enterprise-grade wealth management application enabling investor onboarding, SIP management, mandate setup, portfolio tracking and transaction processing.",technologies:["Angular","RxJS","Angular Material","SCSS","REST APIs"],features:["Investor onboarding","Portfolio analytics","Transaction workflows","Secure authorization flows"],architecture:["Modular lazy-loaded feature modules","Reusable component library","API-driven dashboards"],github:"https://github.com/dhirajprajapati/wealth-management-platform",demo:"https://demo.example.com/wealth-management"},{title:"Angular Upgrade Journey",overview:"Demonstration project showcasing migration from Angular 14 to newer Angular versions while maintaining performance and compatibility.",technologies:["Angular 14+","Standalone Components","TypeScript","NgRx","CI/CD"],features:["Incremental upgrade strategy","Compatibility testing","Performance benchmarks"],architecture:["Signal-friendly component design","Scoped route lazy loading","Automated upgrade validation"],github:"https://github.com/dhirajprajapati/angular-upgrade-journey",demo:"https://demo.example.com/angular-upgrade"},{title:"Dynamic Form Builder",overview:"Config-driven form generation system with dynamic validations and reusable controls.",technologies:["Angular Forms","Reactive Forms","SCSS","Angular Material"],features:["Dynamic field generation","Validation engine","Reusable control library"],architecture:["Config-first UX","Composable form controls","Central validation service"],github:"https://github.com/dhirajprajapati/dynamic-form-builder",demo:"https://demo.example.com/dynamic-form-builder"}],bn=[{version:"Angular 14",timeline:"Foundation",summary:"Built robust enterprise foundations with reusable component libraries and reactive forms."},{version:"Angular 15",timeline:"Modernization",summary:"Adopted standalone components and streamlined routing patterns for faster apps."},{version:"Angular 16",timeline:"Signals & Optimization",summary:"Added signals-based state and performance improvements across workflows."},{version:"Angular 17",timeline:"Modern Architecture",summary:"Refined architecture with typed injectors, image optimization, and SEO focus."},{version:"Angular 18+",timeline:"Future-ready",summary:"Focused on scalable enterprise patterns, accessibility, and developer experience."}],yn=[{title:"Hackathon Participation",detail:"Delivered rapid prototypes with Angular under tight deadlines."},{title:"Enterprise Application Development",detail:"Built production fintech modules for investor journeys and portfolio management."},{title:"API Integrations",detail:"Integrated 100+ APIs with robust error handling and retry strategies."},{title:"Production Deployments",detail:"Delivered multiple deploy-ready Angular applications with CI/CD readiness."}],xn={label:"Professional Resume",description:"Download a polished resume summarizing my Angular experience, enterprise delivery, and technical skills.",downloadUrl:"assets/resume/dhiraj-prajapati-resume.pdf"},Cn=[{name:"LinkedIn",icon:"linkedin",href:"https://linkedin.com/in/dhiraj-prajapati",label:"LinkedIn profile"},{name:"GitHub",icon:"github",href:"https://github.com/dhirajprajapati",label:"GitHub profile"},{name:"Email",icon:"mail",href:"mailto:dhiraj.prajapati@example.com",label:"Send email"}];function Jr(t,i){if(t&1&&(o(0,"p",4),d(1),s()),t&2){let e=O();l(),h(e.description)}}var it=class t{label="";title="";description="";static \u0275fac=function(e){return new(e||t)};static \u0275cmp=b({type:t,selectors:[["app-section-header"]],inputs:{label:"label",title:"title",description:"description"},decls:6,vars:3,consts:[[1,"section-header"],[1,"section-label"],[1,"section-title"],["class","section-description",4,"ngIf"],[1,"section-description"]],template:function(e,n){e&1&&(o(0,"div",0)(1,"span",1),d(2),s(),o(3,"h2",2),d(4),s(),f(5,Jr,2,1,"p",3),s()),e&2&&(l(2),h(n.label),l(2),h(n.title),l(),u("ngIf",n.description))},dependencies:[ee,Te],styles:[".section-header[_ngcontent-%COMP%]{display:grid;gap:.5rem;margin-bottom:2rem}.section-label[_ngcontent-%COMP%]{color:var(--accent);font-size:.8rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase}.section-title[_ngcontent-%COMP%]{margin:0;font-size:clamp(2rem,2.5vw,3rem);line-height:1.05}.section-description[_ngcontent-%COMP%]{max-width:52ch;color:var(--text-medium);margin:0;font-size:1rem;line-height:1.8}"]})};function ta(t,i){if(t&1&&(o(0,"li"),d(1),s()),t&2){let e=i.$implicit;l(),h(e)}}var nt=class t{project;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=b({type:t,selectors:[["app-feature-card"]],inputs:{project:"project"},decls:28,vars:7,consts:[[1,"feature-card"],[1,"feature-top"],[1,"feature-meta"],[1,"feature-list"],[4,"ngFor","ngForOf"],[1,"feature-actions"],["mat-stroked-button","","color","primary","target","_blank","rel","noreferrer",3,"href"],["mat-flat-button","","color","primary","target","_blank","rel","noreferrer",3,"href"]],template:function(e,n){e&1&&(o(0,"mat-card",0)(1,"div",1)(2,"div")(3,"h3"),d(4),s(),o(5,"p"),d(6),s()()(),o(7,"div",2)(8,"div")(9,"strong"),d(10,"Technologies"),s(),o(11,"p"),d(12),s()(),o(13,"div")(14,"strong"),d(15,"Architecture"),s(),o(16,"p"),d(17),s()()(),o(18,"div",3)(19,"strong"),d(20,"Key features"),s(),o(21,"ul"),f(22,ta,2,1,"li",4),s()(),o(23,"div",5)(24,"a",6),d(25,"GitHub"),s(),o(26,"a",7),d(27,"Live Demo"),s()()()),e&2&&(l(4),h(n.project.title),l(2),h(n.project.overview),l(6),h(n.project.technologies.join(" \u2022 ")),l(5),h(n.project.architecture.join(" \u2022 ")),l(5),u("ngForOf",n.project.features),l(2),u("href",n.project.github,X),l(2),u("href",n.project.demo,X))},dependencies:[ee,Re,Ke,Ze,Le,Ne],styles:[".feature-card[_ngcontent-%COMP%]{display:grid;gap:1.5rem;padding:1.75rem;border-radius:28px;background:var(--surface);border:1px solid var(--border);min-height:100%}.feature-top[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 .75rem}.feature-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .feature-meta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .feature-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:var(--text-medium)}.feature-meta[_ngcontent-%COMP%]{display:grid;gap:1rem}.feature-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:.75rem 0 0;padding-left:1.2rem}.feature-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:.5rem}.feature-actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:1rem}"]})};var rt=class t{item;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=b({type:t,selectors:[["app-timeline-card"]],inputs:{item:"item"},decls:7,vars:3,consts:[[1,"timeline-card"],[1,"timeline-version"]],template:function(e,n){e&1&&(R(0,"article",0)(1,"p",1),d(2),T(),R(3,"h3"),d(4),T(),R(5,"p"),d(6),T()()),e&2&&(l(2),h(n.item.version),l(2),h(n.item.timeline),l(2),h(n.item.summary))},dependencies:[ee],styles:[".timeline-card[_ngcontent-%COMP%]{padding:1.75rem;background:var(--surface);border:1px solid var(--border);border-radius:24px;min-height:220px;display:grid;gap:1rem}.timeline-version[_ngcontent-%COMP%]{margin:0;color:var(--accent);font-weight:700;text-transform:uppercase;letter-spacing:.2em;font-size:.8rem}.timeline-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0}.timeline-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:var(--text-medium)}"]})};function ia(t,i){if(t&1&&(o(0,"span",64),d(1),s()),t&2){let e=i.$implicit;l(),h(e)}}function na(t,i){if(t&1&&(o(0,"li"),d(1),s()),t&2){let e=i.$implicit;l(),h(e)}}function ra(t,i){if(t&1&&(o(0,"span",68),d(1),s()),t&2){let e=i.$implicit;l(),h(e)}}function aa(t,i){if(t&1&&(o(0,"article",65)(1,"h3"),d(2),s(),o(3,"div",66),f(4,ra,2,1,"span",67),s()()),t&2){let e=i.$implicit;l(2),h(e.title),l(2),u("ngForOf",e.items)}}function oa(t,i){if(t&1&&(o(0,"div",69)(1,"span"),d(2),s(),v(3,"mat-progress-bar",70),s()),t&2){let e=i.$implicit;l(2),h(e.name),l(),u("value",e.level)}}function sa(t,i){if(t&1&&(o(0,"li"),d(1),s()),t&2){let e=i.$implicit;l(),h(e)}}function la(t,i){if(t&1&&(o(0,"article",71)(1,"div",72)(2,"p",73),d(3),s(),o(4,"p",74),d(5),s()(),o(6,"p",75),d(7),s(),o(8,"ul"),f(9,sa,2,1,"li",15),s()()),t&2){let e=i.$implicit;l(3),h(e.company),l(2),h(e.dates),l(2),Jt("",e.role," \u2022 ",e.location),l(2),u("ngForOf",e.responsibilities)}}function da(t,i){if(t&1&&v(0,"app-feature-card",76),t&2){let e=i.$implicit;u("project",e)}}function ca(t,i){if(t&1&&v(0,"app-timeline-card",77),t&2){let e=i.$implicit;u("item",e)}}function ma(t,i){if(t&1&&(o(0,"article",78)(1,"strong"),d(2),s(),o(3,"p"),d(4),s()()),t&2){let e=i.$implicit;l(2),h(e.title),l(2),h(e.detail)}}function ua(t,i){t&1&&(o(0,"mat-error"),d(1,"Name is required"),s())}function ha(t,i){t&1&&(o(0,"mat-error"),d(1,"Minimum 2 characters"),s())}function pa(t,i){t&1&&(o(0,"mat-error"),d(1,"Email is required"),s())}function fa(t,i){t&1&&(o(0,"mat-error"),d(1,"Enter a valid email"),s())}function ga(t,i){t&1&&(o(0,"mat-error"),d(1,"Message is required"),s())}function _a(t,i){t&1&&(o(0,"mat-error"),d(1,"Please share more details"),s())}function va(t,i){if(t&1&&(o(0,"p",79),d(1),s()),t&2){let e=O();l(),h(e.successMessage())}}function ba(t,i){if(t&1&&(o(0,"div",80)(1,"a",81)(2,"mat-icon"),d(3),s(),d(4),s()()),t&2){let e=i.$implicit;l(),Xt("aria-label",ei(e.label)),u("href",e.href,X),l(2),h(e.icon==="mail"?"mail":e.icon),l(),Yt(" ",e.name," ")}}var Mn=class t{constructor(i){this.fb=i;this.contactForm=this.fb.group({name:["",[G.required,G.minLength(2)]],email:["",[G.required,G.email]],message:["",[G.required,G.minLength(10)]]})}hero=pn;about=fn;skillGroups=gn;experienceEntries=_n;projectCards=vn;journeyItems=bn;achievements=yn;resume=xn;contactLinks=Cn;expertise=[{name:"Reactive Forms",level:92},{name:"RxJS",level:90},{name:"Lazy Loading",level:94},{name:"Route Guards",level:88},{name:"Interceptors",level:90},{name:"State Management",level:86},{name:"Performance Optimization",level:93}];submitted=z(!1);successMessage=z("");contactForm;submitContact(){if(this.contactForm.invalid){this.contactForm.markAllAsTouched();return}this.submitted.set(!0),this.successMessage.set("Thanks for reaching out! I will respond soon."),this.contactForm.reset()}static \u0275fac=function(e){return new(e||t)(_(zi))};static \u0275cmp=b({type:t,selectors:[["app-home"]],decls:115,vars:28,consts:[["id","hero",1,"hero-section"],[1,"hero-copy"],[1,"eyebrow"],[1,"hero-actions"],["mat-flat-button","","color","primary","download","",1,"hero-button",3,"href"],["mat-stroked-button","","color","primary",1,"hero-button",3,"href"],[1,"hero-pillstrip"],["class","hero-pill",4,"ngFor","ngForOf"],[1,"hero-panel"],[1,"hero-panel-card"],[1,"panel-label"],["id","about",1,"section-block"],["label","About","title","Professional introduction","description","A concise summary of my career strengths and the value I bring to engineering teams."],[1,"about-grid"],[1,"about-card"],[4,"ngFor","ngForOf"],["id","skills",1,"section-block"],["label","Skills","title","Modern frontend and Angular expertise","description","A well-rounded skill set for shipping maintainable and performant Angular applications."],[1,"skills-grid"],["class","skill-panel",4,"ngFor","ngForOf"],[1,"expertise-grid"],[1,"expertise-list"],["class","expertise-item",4,"ngFor","ngForOf"],["id","experience",1,"section-block"],["label","Experience","title","Professional timeline","description","Enterprise fintech delivery and reusable Angular architecture in a senior engineering role."],[1,"timeline-list"],["class","timeline-card",4,"ngFor","ngForOf"],["id","projects",1,"section-block"],["label","Featured Projects","title","Select professional work","description","Project work that demonstrates Angular upgrade expertise, dynamic forms, and enterprise fintech delivery."],[1,"projects-grid"],[3,"project",4,"ngFor","ngForOf"],["id","journey",1,"section-block"],["label","Angular Journey","title","Continuous learning roadmap","description","A progression through Angular versions and modern architecture best practices."],[1,"journey-grid"],[3,"item",4,"ngFor","ngForOf"],["id","achievements",1,"section-block"],["label","Achievements","title","Career highlights","description","Cross-cutting accomplishments from hackathons to production deployments."],[1,"achievements-grid"],["class","achievement-card",4,"ngFor","ngForOf"],["id","resume",1,"section-block","resume-block"],["label","Resume","title","Professional resume preview","description","Download a polished resume highlighting my Angular and frontend delivery experience."],[1,"resume-card"],[1,"resume-label"],["mat-flat-button","","color","primary","download","",3,"href"],["id","contact",1,"section-block","contact-block"],["label","Contact","title","Let\u2019s build great Angular experiences","description","Send a message or connect through LinkedIn, GitHub, or email."],[1,"contact-grid"],[1,"contact-card"],[1,"contact-form",3,"ngSubmit","formGroup"],["appearance","outline"],["matInput","","formControlName","name"],[4,"ngIf"],["matInput","","formControlName","email","type","email"],["appearance","outline",1,"full-width"],["matInput","","formControlName","message","rows","6"],["mat-flat-button","","color","primary","type","submit"],["class","success-text",4,"ngIf"],[1,"contact-links"],["class","contact-pill",4,"ngFor","ngForOf"],[1,"site-footer"],[1,"footer-nav"],["href","#hero"],["href","#projects"],["href","#contact"],[1,"hero-pill"],[1,"skill-panel"],[1,"skill-list"],["class","skill-chip",4,"ngFor","ngForOf"],[1,"skill-chip"],[1,"expertise-item"],["mode","determinate","color","primary",3,"value"],[1,"timeline-card"],[1,"timeline-top"],[1,"timeline-company"],[1,"timeline-dates"],[1,"timeline-role"],[3,"project"],[3,"item"],[1,"achievement-card"],[1,"success-text"],[1,"contact-pill"],["target","_blank","rel","noreferrer",3,"href","aria-label"]],template:function(e,n){if(e&1&&(o(0,"section",0)(1,"div",1)(2,"span",2),d(3,"Frontend Developer | Angular Developer"),s(),o(4,"h1"),d(5),s(),o(6,"p"),d(7),s(),o(8,"div",3)(9,"a",4),d(10," Download Resume "),s(),o(11,"a",5),d(12," View Projects "),s(),o(13,"a",5),d(14," Contact Me "),s()(),o(15,"div",6),f(16,ia,2,1,"span",7),s()(),o(17,"div",8)(18,"div",9)(19,"p",10),d(20,"Experience"),s(),o(21,"strong"),d(22,"4+ Years"),s(),o(23,"p"),d(24,"Angular, enterprise fintech, performance optimization, and reusable component systems."),s()()()(),o(25,"section",11),v(26,"app-section-header",12),o(27,"div",13)(28,"article")(29,"p"),d(30),s(),o(31,"p"),d(32),s()(),o(33,"aside",14)(34,"h3"),d(35,"Strengths"),s(),o(36,"ul"),f(37,na,2,1,"li",15),s(),o(38,"p"),d(39),s()()()(),o(40,"section",16),v(41,"app-section-header",17),o(42,"div",18),f(43,aa,5,2,"article",19),s(),o(44,"div",20)(45,"h3"),d(46,"Angular Expertise"),s(),o(47,"div",21),f(48,oa,4,2,"div",22),s()()(),o(49,"section",23),v(50,"app-section-header",24),o(51,"div",25),f(52,la,10,5,"article",26),s()(),o(53,"section",27),v(54,"app-section-header",28),o(55,"div",29),f(56,da,1,1,"app-feature-card",30),s()(),o(57,"section",31),v(58,"app-section-header",32),o(59,"div",33),f(60,ca,1,1,"app-timeline-card",34),s()(),o(61,"section",35),v(62,"app-section-header",36),o(63,"div",37),f(64,ma,5,2,"article",38),s()(),o(65,"section",39),v(66,"app-section-header",40),o(67,"mat-card",41)(68,"div")(69,"p",42),d(70),s(),o(71,"p"),d(72),s()(),o(73,"a",43),d(74,"Download Resume"),s()()(),o(75,"section",44),v(76,"app-section-header",45),o(77,"div",46)(78,"mat-card",47)(79,"form",48),N("ngSubmit",function(){return n.submitContact()}),o(80,"mat-form-field",49)(81,"mat-label"),d(82,"Name"),s(),v(83,"input",50),f(84,ua,2,0,"mat-error",51)(85,ha,2,0,"mat-error",51),s(),o(86,"mat-form-field",49)(87,"mat-label"),d(88,"Email"),s(),v(89,"input",52),f(90,pa,2,0,"mat-error",51)(91,fa,2,0,"mat-error",51),s(),o(92,"mat-form-field",53)(93,"mat-label"),d(94,"Message"),s(),v(95,"textarea",54),f(96,ga,2,0,"mat-error",51)(97,_a,2,0,"mat-error",51),s(),o(98,"button",55),d(99,"Send Message"),s(),f(100,va,2,1,"p",56),s()(),o(101,"aside",57)(102,"p"),d(103,"Connect directly"),s(),f(104,ba,5,5,"div",58),s()()(),o(105,"footer",59)(106,"p"),d(107,"\xA9 2026 Dhiraj Prajapati \u2022 Angular Frontend Developer \u2022 Gujarat, India"),s(),o(108,"nav",60)(109,"a",61),d(110,"Home"),s(),o(111,"a",62),d(112,"Projects"),s(),o(113,"a",63),d(114,"Contact"),s()()()),e&2){let r,a,c,D,K,Q;l(5),h(n.hero.name),l(2),h(n.hero.summary),l(2),u("href",n.hero.resumeUrl,X),l(2),u("href",n.hero.projectsUrl,X),l(2),u("href",n.hero.contactUrl,X),l(3),u("ngForOf",n.hero.rolePills),l(14),h(n.about.overview),l(2),h(n.about.summary),l(5),u("ngForOf",n.about.strengths),l(2),h(n.about.value),l(4),u("ngForOf",n.skillGroups),l(5),u("ngForOf",n.expertise),l(4),u("ngForOf",n.experienceEntries),l(4),u("ngForOf",n.projectCards),l(4),u("ngForOf",n.journeyItems),l(4),u("ngForOf",n.achievements),l(6),h(n.resume.label),l(2),h(n.resume.description),l(),u("href",n.resume.downloadUrl,X),l(6),u("formGroup",n.contactForm),l(5),u("ngIf",(r=n.contactForm.get("name"))==null?null:r.hasError("required")),l(),u("ngIf",(a=n.contactForm.get("name"))==null?null:a.hasError("minlength")),l(5),u("ngIf",(c=n.contactForm.get("email"))==null?null:c.hasError("required")),l(),u("ngIf",(D=n.contactForm.get("email"))==null?null:D.hasError("email")),l(5),u("ngIf",(K=n.contactForm.get("message"))==null?null:K.hasError("required")),l(),u("ngIf",(Q=n.contactForm.get("message"))==null?null:Q.hasError("minlength")),l(3),u("ngIf",n.submitted()),l(4),u("ngForOf",n.contactLinks)}},dependencies:[ee,Re,Te,ji,Li,Qe,ki,Vi,Me,It,Le,Ne,Ke,Ze,rn,mi,ci,Fe,tt,De,Ot,dn,ln,un,mn,hn,it,nt,rt],styles:["[_nghost-%COMP%]{display:block;max-width:1280px;margin:0 auto}.section-block[_ngcontent-%COMP%]{padding:4rem 0;border-bottom:1px solid var(--border)}.hero-section[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(320px,.9fr);gap:2rem;align-items:center;padding:3rem 0}.hero-copy[_ngcontent-%COMP%]{display:grid;gap:1.5rem}.hero-copy[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%]{font-size:.85rem;letter-spacing:.22em;text-transform:uppercase;color:var(--accent);margin:0}.hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:clamp(3rem,4vw,4.5rem);line-height:1}.hero-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:52ch;color:var(--text-medium);font-size:1.05rem}.hero-actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:1rem}.hero-pillstrip[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.75rem}.hero-pill[_ngcontent-%COMP%]{display:inline-flex;padding:.65rem 1rem;border-radius:999px;background:var(--accent-soft);color:var(--accent);font-size:.9rem;font-weight:600}.hero-panel[_ngcontent-%COMP%]{position:relative}.hero-panel-card[_ngcontent-%COMP%]{min-height:260px;padding:2rem;border-radius:28px;background:linear-gradient(180deg,#0f4c9214,#0f4c9205);border:1px solid rgba(15,76,146,.1);box-shadow:var(--shadow);display:grid;gap:1rem}.panel-label[_ngcontent-%COMP%]{text-transform:uppercase;letter-spacing:.2em;font-size:.75rem;color:var(--accent);margin:0}.hero-panel-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:3.5rem;line-height:.95}.about-grid[_ngcontent-%COMP%], .skills-grid[_ngcontent-%COMP%], .expertise-grid[_ngcontent-%COMP%], .timeline-list[_ngcontent-%COMP%], .projects-grid[_ngcontent-%COMP%], .journey-grid[_ngcontent-%COMP%], .achievements-grid[_ngcontent-%COMP%], .contact-grid[_ngcontent-%COMP%]{display:grid;gap:1.5rem}.about-grid[_ngcontent-%COMP%]{grid-template-columns:1.5fr 1fr}.about-card[_ngcontent-%COMP%], .skill-panel[_ngcontent-%COMP%], .achievement-card[_ngcontent-%COMP%], .resume-card[_ngcontent-%COMP%], .contact-card[_ngcontent-%COMP%], .contact-links[_ngcontent-%COMP%]{background:var(--surface);border:1px solid var(--border);border-radius:24px;padding:1.75rem}.about-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .timeline-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:1rem 0 0;padding-left:1.2rem;color:var(--text-medium)}.about-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:.75rem}.skill-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 1rem}.skill-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.75rem}.skill-chip[_ngcontent-%COMP%]{padding:.65rem .95rem;border-radius:999px;background:var(--surface-alt);color:var(--text-high);font-size:.95rem}.expertise-grid[_ngcontent-%COMP%]{gap:1rem}.expertise-list[_ngcontent-%COMP%]{display:grid;gap:1rem}.expertise-item[_ngcontent-%COMP%]{display:grid;gap:.5rem}.expertise-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-flex;font-weight:600}.timeline-list[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fit,minmax(320px,1fr))}.timeline-card[_ngcontent-%COMP%]{padding:1.75rem;background:var(--surface);border:1px solid var(--border);border-radius:24px}.timeline-top[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:1rem;flex-wrap:wrap}.timeline-company[_ngcontent-%COMP%]{margin:0;font-weight:700}.timeline-dates[_ngcontent-%COMP%], .timeline-role[_ngcontent-%COMP%]{color:var(--text-medium);margin:.35rem 0 0}.projects-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fit,minmax(320px,1fr))}.journey-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fit,minmax(220px,1fr))}.achievements-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fit,minmax(240px,1fr))}.achievement-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;margin-bottom:.75rem;font-size:1.05rem}.resume-block[_ngcontent-%COMP%]{padding-top:4rem}.resume-card[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;gap:1.5rem}.resume-label[_ngcontent-%COMP%]{margin:0 0 .5rem;font-weight:700}.contact-block[_ngcontent-%COMP%]{padding-top:4rem}.contact-grid[_ngcontent-%COMP%]{grid-template-columns:1.4fr .8fr;align-items:start}.contact-form[_ngcontent-%COMP%]{display:grid;gap:1rem}.full-width[_ngcontent-%COMP%]{width:100%}.success-text[_ngcontent-%COMP%]{margin:0;color:var(--accent);font-weight:600}.contact-links[_ngcontent-%COMP%]{display:grid;gap:1rem}.contact-links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 .5rem;font-weight:700}.contact-pill[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;padding:1rem;border-radius:20px;background:var(--surface-alt);border:1px solid var(--border)}.contact-pill[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;color:var(--text-high);text-decoration:none}.site-footer[_ngcontent-%COMP%]{margin-top:3rem;display:flex;flex-wrap:wrap;justify-content:space-between;gap:1rem;padding-top:2rem;color:var(--text-medium)}.site-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.footer-nav[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:1rem}.footer-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--text-medium);text-decoration:none}.footer-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .footer-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible{color:var(--text-high)}@media(max-width:940px){.hero-section[_ngcontent-%COMP%], .about-grid[_ngcontent-%COMP%], .contact-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.resume-card[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch}}@media(max-width:640px){.app-main[_ngcontent-%COMP%]{padding:1.5rem 1rem 3rem}.hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:clamp(2.5rem,9vw,3.5rem)}}"]})};export{Mn as HomeComponent};
