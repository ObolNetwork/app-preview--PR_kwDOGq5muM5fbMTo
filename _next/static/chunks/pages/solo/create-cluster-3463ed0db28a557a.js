(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[731],{34928:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/solo/create-cluster",function(){return n(95969)}])},95969:function(e,t,n){"use strict";n.r(t);var o=n(85893),a=n(28014),s=n(67294),i=n(71958),c=n(41518),r=n(21237),u=n(11163),l=n(81259);let p=()=>{let e=(0,u.useRouter)(),t=(0,c.o)((0,s.useCallback)(e=>e.completeSoloStep,[])),n=(0,c.o)(e=>e.clusterDefinitionData),p=(null==n?void 0:n.config_hash)||(0,r.xs)(e,"configHash"),d=()=>{t("create-cluster"),e.push("/deposit/advisories#groupFlow")},[m,h]=(0,s.useState)(l.Z2.map((e,t)=>{let{contentTitle:n,contentSection:a,enableNextStep:s,rank:c,term:u,value:l,title:m}=e;return{content:(e,t,s,c)=>(0,o.jsx)(i.ns,{contentTitle:n,title:m,contentSection:a,commandsToReplace:[p],rank:e,onAccept:s,onBack:c,enableNextStep:t,term:u,onSubmit:d}),enableNextStep:s,rank:c,state:(0,r.d$)(t),value:l,title:m,term:u}})),[k,_]=(0,s.useState)(m[0]),f=e=>{h(m.map(t=>t.rank===e+1?(_(t),{...t,state:"enabled"}):t))},S=e=>{h(m.map(t=>t.rank===e?{...t,state:"upcoming"}:t));let t=m.find(t=>t.rank===e-1);t&&_(t)},w=()=>{},x=e=>{_(e)};return(0,o.jsxs)(a.kC,{direction:"column",css:{gap:"$2xl",width:"auto",margin:"0 -12.5%","& .advisory-content":{width:"700px"}},children:[(0,o.jsx)(a.xv,{variant:"h3",children:"Distributed Key Generation"}),(0,o.jsx)(a.I,{itemSelected:k,items:m,onItemChange:x,onComplete:w,onUpdateState:f,onBack:S})]})};t.default=p,p.layout="SoloProgressTrackerLayout"}},function(e){e.O(0,[774,888,179],function(){return e(e.s=34928)}),_N_E=e.O()}]);