(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"rR2/":function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),u=function(){return function(){}}(),i=t("pMnS"),o=t("ZYCi"),r=t("Ip0R"),s=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),a=e.qb({encapsulation:2,styles:[],data:{}});function c(l){return e.Fb(0,[(l()(),e.sb(0,0,null,null,5,"div",[["class","d-flex justify-content-center"]],null,null,null,null,null)),(l()(),e.sb(1,0,null,null,4,"div",[["class","alert alert-secondary w-100"],["role","alert"]],null,null,null,null,null)),(l()(),e.sb(2,0,null,null,1,"h3",[["class","text-center"]],null,null,null,null,null)),(l()(),e.Eb(3,null,[" "," "])),(l()(),e.sb(4,0,null,null,1,"p",[["class","text-center"]],null,null,null,null,null)),(l()(),e.Eb(5,null,[" "," "]))],null,function(l,n){var t=n.component;l(n,3,0,t.title),l(n,5,0,t.description)})}var b=t("ACVa"),d=function(){function l(){this.listTest=[{title:"Big Five",description:"The Big Five personality traits, also known as the five-factor model (FFM) and the OCEAN model, is a taxonomy for personality traits.It is based on common language descriptors. When factor analysis (a statistical technique) is applied to personality survey data, some words used to describe aspects of personality are often applied to the same person.",link:b.c.BIGFIVEPATH,buttonText:"Go To Big Five Test"}]}return l.prototype.ngOnInit=function(){},l}(),p=e.qb({encapsulation:2,styles:[],data:{}});function f(l){return e.Fb(0,[(l()(),e.sb(0,0,null,null,9,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),e.sb(1,0,null,null,8,"div",[["class","card"]],null,null,null,null,null)),(l()(),e.sb(2,0,null,null,7,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e.sb(3,0,null,null,1,"h5",[["class","card-title"]],null,null,null,null,null)),(l()(),e.Eb(4,null,["",""])),(l()(),e.sb(5,0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),e.Eb(6,null,["",""])),(l()(),e.sb(7,0,null,null,2,"a",[["class","btn btn-outline-info"],["href","#"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.Bb(l,8).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&u),u},null,null)),e.rb(8,671744,null,0,o.p,[o.n,o.a,r.h],{routerLink:[0,"routerLink"]},null),(l()(),e.Eb(9,null,["",""]))],function(l,n){l(n,8,0,n.context.$implicit.link)},function(l,n){l(n,4,0,n.context.$implicit.title),l(n,6,0,n.context.$implicit.description),l(n,7,0,e.Bb(n,8).target,e.Bb(n,8).href),l(n,9,0,n.context.$implicit.buttonText)})}function g(l){return e.Fb(0,[(l()(),e.sb(0,0,null,null,1,"app-page-title",[],null,null,null,c,a)),e.rb(1,114688,null,0,s,[],{title:[0,"title"],description:[1,"description"]},null),(l()(),e.sb(2,0,null,null,0,"hr",[["class","style2 border-info"]],null,null,null,null,null)),(l()(),e.sb(3,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.jb(16777216,null,null,1,null,f)),e.rb(5,278528,null,0,r.j,[e.Q,e.N,e.u],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,1,0,"Mettiti alla prova!","Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et doloremagna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."),l(n,5,0,t.listTest)},null)}function h(l){return e.Fb(0,[(l()(),e.sb(0,0,null,null,1,"app-test-list",[],null,null,null,g,p)),e.rb(1,114688,null,0,d,[],null,null)],function(l,n){l(n,1,0)},null)}var m=e.ob("app-test-list",d,h,{},{},[]),v=t("gIcY");t("K9Ia"),t("6blF"),t("T1DM"),t("isby"),t("nkY7"),t("p0ib"),t("2Bdj"),t("67Y/"),Object,t("mrSG"),t("IUTb"),t("MGBS"),t("zotm"),t("26FU"),t("VnD/"),t("15JJ"),t("ny24"),t("t9fZ"),t("FFOo"),t("60iU"),t("S1nX"),t("xMyE"),"undefined"==typeof Element||Element.prototype.closest||(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest=function(l){var n=this;if(!document.documentElement.contains(n))return null;do{if(n.matches(l))return n;n=n.parentElement||n.parentNode}while(null!==n&&1===n.nodeType);return null});var y=function(){return function(){}}(),F=0,B=function(){function l(){this._radios=new Set,this._value=null,this.name="ngb-radio-"+F++,this.onChange=function(l){},this.onTouched=function(){}}return Object.defineProperty(l.prototype,"disabled",{get:function(){return this._disabled},set:function(l){this.setDisabledState(l)},enumerable:!0,configurable:!0}),l.prototype.onRadioChange=function(l){this.writeValue(l.value),this.onChange(l.value)},l.prototype.onRadioValueUpdate=function(){this._updateRadiosValue()},l.prototype.register=function(l){this._radios.add(l)},l.prototype.registerOnChange=function(l){this.onChange=l},l.prototype.registerOnTouched=function(l){this.onTouched=l},l.prototype.setDisabledState=function(l){this._disabled=l,this._updateRadiosDisabled()},l.prototype.unregister=function(l){this._radios.delete(l)},l.prototype.writeValue=function(l){this._value=l,this._updateRadiosValue()},l.prototype._updateRadiosValue=function(){var l=this;this._radios.forEach(function(n){return n.updateValue(l._value)})},l.prototype._updateRadiosDisabled=function(){this._radios.forEach(function(l){return l.updateDisabled()})},l}(),C=function(){function l(l,n,t,e,u){this._group=l,this._label=n,this._renderer=t,this._element=e,this._cd=u,this._value=null,this._group.register(this),this.updateDisabled()}return Object.defineProperty(l.prototype,"value",{get:function(){return this._value},set:function(l){this._value=l;var n=l?l.toString():"";this._renderer.setProperty(this._element.nativeElement,"value",n),this._group.onRadioValueUpdate()},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"disabled",{get:function(){return this._group.disabled||this._disabled},set:function(l){this._disabled=!1!==l,this.updateDisabled()},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"focused",{set:function(l){this._label&&(this._label.focused=l),l||this._group.onTouched()},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"checked",{get:function(){return this._checked},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"nameAttr",{get:function(){return this.name||this._group.name},enumerable:!0,configurable:!0}),l.prototype.ngOnDestroy=function(){this._group.unregister(this)},l.prototype.onChange=function(){this._group.onRadioChange(this)},l.prototype.updateValue=function(l){this.value!==l&&this._cd.markForCheck(),this._checked=this.value===l,this._label.active=this._checked},l.prototype.updateDisabled=function(){this._label.disabled=this.disabled},l}(),_=function(){function l(){}return l.forRoot=function(){return{ngModule:l}},l}();"undefined"!=typeof navigator&&navigator.userAgent&&navigator;var x=function(){function l(){}return l.prototype.ngOnInit=function(){},l.prototype.createRange=function(l){this.items=[];for(var n=1;n<=l;n++)this.items.push(n);return this.items},l.prototype.capitalize=function(l){return l.charAt(0).toUpperCase()+l.slice(1)},l.prototype.assignColor=function(l,n){return l/2>n?"btn-danger":Math.ceil(l/2)<n?"btn-success":"btn-secondary"},l}(),k=e.qb({encapsulation:2,styles:[],data:{}});function w(l){return e.Fb(0,[(l()(),e.sb(0,0,null,null,6,null,null,null,null,null,null,null)),(l()(),e.sb(1,0,null,null,5,"label",[["ngbButtonLabel",""]],[[2,"btn",null],[2,"active",null],[2,"disabled",null],[2,"focus",null]],null,null,null,null)),e.rb(2,278528,null,0,r.i,[e.u,e.v,e.l,e.F],{ngClass:[0,"ngClass"]},null),e.rb(3,16384,null,0,y,[],null,null),(l()(),e.sb(4,0,null,null,1,"input",[["ngbButton",""],["type","radio"]],[[8,"checked",0],[8,"disabled",0],[8,"name",0]],[[null,"change"],[null,"focus"],[null,"blur"]],function(l,n,t){var u=!0;return"change"===n&&(u=!1!==e.Bb(l,5).onChange()&&u),"focus"===n&&(u=0!=(e.Bb(l,5).focused=!0)&&u),"blur"===n&&(u=0!=(e.Bb(l,5).focused=!1)&&u),u},null,null)),e.rb(5,147456,null,0,C,[B,y,e.F,e.l,e.i],{value:[0,"value"]},null),(l()(),e.Eb(6,null,[" "," "]))],function(l,n){var t=n.component;l(n,2,0,t.assignColor(t.count,n.context.$implicit)),l(n,5,0,n.context.$implicit)},function(l,n){l(n,1,0,!0,e.Bb(n,3).active,e.Bb(n,3).disabled,e.Bb(n,3).focused),l(n,4,0,e.Bb(n,5).checked,e.Bb(n,5).disabled,e.Bb(n,5).nameAttr),l(n,6,0,n.context.$implicit)})}function q(l){return e.Fb(0,[(l()(),e.sb(0,0,null,null,1,"div",[["class","alert alert-danger w-50 mx-auto mt-1"],["role","alert"]],null,null,null,null,null)),(l()(),e.Eb(1,null,[" Non hai selezionato un valore per ","! "]))],null,function(l,n){var t=n.component;l(n,1,0,t.capitalize(t.property))})}function A(l){return e.Fb(0,[(l()(),e.sb(0,0,null,null,1,"span",[["class","w-50 badge badge-dark"]],null,null,null,null,null)),(l()(),e.Eb(1,null,["",""])),(l()(),e.sb(2,0,null,null,13,"div",[["class","p-2"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,t){var u=!0;return"submit"===n&&(u=!1!==e.Bb(l,3).onSubmit(t)&&u),"reset"===n&&(u=!1!==e.Bb(l,3).onReset()&&u),u},null,null)),e.rb(3,540672,null,0,v.h,[[8,null],[8,null]],{form:[0,"form"]},null),e.Cb(2048,null,v.b,null,[v.h]),e.rb(5,16384,null,0,v.n,[[4,v.b]],null,null),(l()(),e.sb(6,0,null,null,7,"div",[["class","btn-group btn-group-toggle"],["ngbRadioGroup",""],["role","radiogroup"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,null,null)),e.rb(7,16384,null,0,B,[],{name:[0,"name"]},null),e.Cb(1024,null,v.k,function(l){return[l]},[B]),e.rb(9,671744,null,0,v.f,[[3,v.b],[8,null],[8,null],[6,v.k],[2,v.v]],{name:[0,"name"]},null),e.Cb(2048,null,v.l,null,[v.f]),e.rb(11,16384,null,0,v.m,[[4,v.l]],null,null),(l()(),e.jb(16777216,null,null,1,null,w)),e.rb(13,278528,null,0,r.j,[e.Q,e.N,e.u],{ngForOf:[0,"ngForOf"]},null),(l()(),e.jb(16777216,null,null,1,null,q)),e.rb(15,16384,null,0,r.k,[e.Q,e.N],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,3,0,t.parentForm),l(n,7,0,e.ub(1,"",t.property,"")),l(n,9,0,e.ub(1,"",t.property,"")),l(n,13,0,t.createRange(t.count)),l(n,15,0,t.control.touched&&t.control.invalid)},function(l,n){var t=n.component;l(n,1,0,t.capitalize(t.property)),l(n,2,0,e.Bb(n,5).ngClassUntouched,e.Bb(n,5).ngClassTouched,e.Bb(n,5).ngClassPristine,e.Bb(n,5).ngClassDirty,e.Bb(n,5).ngClassValid,e.Bb(n,5).ngClassInvalid,e.Bb(n,5).ngClassPending),l(n,6,0,e.Bb(n,11).ngClassUntouched,e.Bb(n,11).ngClassTouched,e.Bb(n,11).ngClassPristine,e.Bb(n,11).ngClassDirty,e.Bb(n,11).ngClassValid,e.Bb(n,11).ngClassInvalid,e.Bb(n,11).ngClassPending)})}var E=t("H/jg"),O=t("fdbx"),T=t("xgvH"),j=function(){function l(l,n){this.formBuilder=l,this.store=n,this.formControls=[],this.setupForm()}return l.prototype.setupForm=function(){var l=this;this.bigFiveForm=this.formBuilder.group({creativo:[null,v.r.required],fantasioso:[null,v.r.required],originale:[null,v.r.required],preciso:[null,v.r.required],ordinato:[null,v.r.required],diligente:[null,v.r.required],estroverso:[null,v.r.required],espansivo:[null,v.r.required],chiuso:[null,v.r.required],altruista:[null,v.r.required],disponibile:[null,v.r.required],generoso:[null,v.r.required],emotivo:[null,v.r.required],ansioso:[null,v.r.required],nervoso:[null,v.r.required]}),Object.keys(this.bigFiveForm.controls).forEach(function(n){l.formControls.push(n.toString())})},l.prototype.onSubmit=function(){this.validateAllFormFields(this.bigFiveForm),this.bigFiveForm.valid&&(this.bigFiveForm.disable(),this.store.dispatch(new T.a))},l.prototype.ngOnInit=function(){},l.prototype.validateAllFormFields=function(l){var n=this;Object.keys(l.controls).forEach(function(t){var e=l.get(t);e instanceof v.e?e.markAsTouched({onlySelf:!0}):e instanceof v.g&&n.validateAllFormFields(e)})},l}(),S=e.qb({encapsulation:2,styles:[],data:{}});function I(l){return e.Fb(0,[(l()(),e.sb(0,0,null,null,3,null,null,null,null,null,null,null)),(l()(),e.sb(1,0,null,null,1,"app-test-radio-group",[],null,null,null,A,k)),e.rb(2,114688,null,0,x,[],{control:[0,"control"],parentForm:[1,"parentForm"],property:[2,"property"],count:[3,"count"]},null),(l()(),e.sb(3,0,null,null,0,"hr",[["class","w-100 my-4"]],null,null,null,null,null))],function(l,n){var t=n.component;l(n,2,0,t.bigFiveForm.get(n.context.$implicit),t.bigFiveForm,n.context.$implicit,7)},null)}function R(l){return e.Fb(0,[(l()(),e.sb(0,0,null,null,1,"app-page-title",[],null,null,null,c,a)),e.rb(1,114688,null,0,s,[],{title:[0,"title"],description:[1,"description"]},null),(l()(),e.sb(2,0,null,null,13,"form",[["class","mt-5"],["ngxsForm","bigfive.bigFiveForm"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,t){var u=!0,i=l.component;return"submit"===n&&(u=!1!==e.Bb(l,4).onSubmit(t)&&u),"reset"===n&&(u=!1!==e.Bb(l,4).onReset()&&u),"ngSubmit"===n&&(u=!1!==i.onSubmit()&&u),u},null,null)),e.rb(3,16384,null,0,v.t,[],null,null),e.rb(4,540672,null,0,v.h,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.Cb(2048,null,v.b,null,[v.h]),e.rb(6,16384,null,0,v.n,[[4,v.b]],null,null),e.rb(7,212992,null,0,E.c,[O.h,v.h,e.i],{path:[0,"path"]},null),(l()(),e.sb(8,0,null,null,3,"div",[["class","d-flex w-100 justify-content-center"]],null,null,null,null,null)),(l()(),e.sb(9,0,null,null,2,"div",[["class","d-flex flex-column w-50 text-center"]],null,null,null,null,null)),(l()(),e.jb(16777216,null,null,1,null,I)),e.rb(11,278528,null,0,r.j,[e.Q,e.N,e.u],{ngForOf:[0,"ngForOf"]},null),(l()(),e.sb(12,0,null,null,3,"div",[["class","d-flex w-100 justify-content-center"]],null,null,null,null,null)),(l()(),e.sb(13,0,null,null,2,"div",[["class","d-flex flex-column w-25"]],null,null,null,null,null)),(l()(),e.sb(14,0,null,null,1,"button",[["class","btn btn-info"],["type","submit"]],null,null,null,null,null)),(l()(),e.Eb(-1,null,[" Submit"]))],function(l,n){var t=n.component;l(n,1,0,"Big Five Test","The following statements concern your perception about yourself in a variety of situations.Your task is to indicate the strength of your agreement with each statement,utilizing a scale in which 1 denotes strong disagreement,7 denotes strong agreement, and 2, 3, 4, 5 and 6 represent intermediate judgments. In the boxes after eachstatement, click a number from 1 to 7 from the following scale:"),l(n,4,0,t.bigFiveForm),l(n,7,0,"bigfive.bigFiveForm"),l(n,11,0,t.formControls)},function(l,n){l(n,2,0,e.Bb(n,6).ngClassUntouched,e.Bb(n,6).ngClassTouched,e.Bb(n,6).ngClassPristine,e.Bb(n,6).ngClassDirty,e.Bb(n,6).ngClassValid,e.Bb(n,6).ngClassInvalid,e.Bb(n,6).ngClassPending)})}function D(l){return e.Fb(0,[(l()(),e.sb(0,0,null,null,1,"app-test-big-five",[],null,null,null,R,S)),e.rb(1,114688,null,0,j,[v.d,O.h],null,null)],function(l,n){l(n,1,0)},null)}var V=e.ob("app-test-big-five",j,D,{},{},[]),P=function(){return function(){}}(),M=function(){return function(){}}();t.d(n,"TestModuleNgFactory",function(){return U});var U=e.pb(u,[],function(l){return e.zb([e.Ab(512,e.k,e.eb,[[8,[i.a,m,V]],[3,e.k],e.z]),e.Ab(4608,r.m,r.l,[e.w,[2,r.x]]),e.Ab(4608,v.d,v.d,[]),e.Ab(4608,v.u,v.u,[]),e.Ab(1073742336,r.b,r.b,[]),e.Ab(1073742336,_,_,[]),e.Ab(1073742336,v.s,v.s,[]),e.Ab(1073742336,v.p,v.p,[]),e.Ab(1073742336,E.b,E.b,[]),e.Ab(1073742336,o.q,o.q,[[2,o.x],[2,o.n]]),e.Ab(1073742336,P,P,[]),e.Ab(1073742336,v.i,v.i,[]),e.Ab(1073742336,M,M,[]),e.Ab(1073742336,u,u,[]),e.Ab(1024,o.k,function(){return[[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:d},{path:"bigfive",component:j}]]},[])])})}}]);