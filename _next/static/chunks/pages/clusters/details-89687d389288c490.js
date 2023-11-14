(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[205],{50068:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/clusters/details",function(){return t(92211)}])},92211:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return S}});var i=t(85893),n=t(28014),l=t(11163),r=t.n(l),a=t(2504),d=t(21237),o=t(30120),c=t(63029),u=t(48926),x=t(98376),h=t(81259),p=t(71866);let g=[{accessorKey:"address",header:"Address"},{accessorKey:"status",header:"Status",sortable:!0},{accessorKey:"withdrawalAddress",header:"Withdrawal Address"},{accessorKey:"feeRecipient",header:"Fee Recipient"}],v=e=>{let{validators:s,currentAccount:t}=e,l=(0,c.Z)(s.flatMap(e=>[e.withdrawalAddress,e.feeRecipient])),r=e=>{let{address:s,index:t}=e;return(0,i.jsxs)(n.xv,{size:"4",color:"obolGreen",css:{display:"flex",alignItems:"center",justifyContent:"start",gap:"xxxs"},children:[(0,i.jsxs)(n.kC,{direction:"column",css:{mr:"$xxs",fontWeight:"$bold"},children:[l[t]&&(0,i.jsxs)(i.Fragment,{children:[l[t],(0,i.jsx)("br",{})]}),(0,i.jsx)(n.dh,{css:{fontWeight:"bold",color:"$obolGreen",width:"120px !important"},value:(0,d.zN)(s,[0,6],5),readOnly:!0})]}),(0,i.jsx)(u.Z,{address:s})]})},a=e=>{let{address:s,index:t}=e;return l[t]?(0,i.jsxs)(i.Fragment,{children:[l[t],(0,i.jsx)("br",{}),(0,i.jsxs)(n.xu,{css:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,i.jsx)(n.dh,{value:s,readOnly:!0,css:{mr:"$xxs",color:"$obolGreen",width:"120px !important"}}),(0,i.jsx)(u.Z,{address:s})]})]}):(0,i.jsxs)(n.xu,{css:{display:"flex",alignItems:"center",justifyContent:"start"},children:[(0,i.jsx)(n.dh,{value:(0,d.zN)(s,[0,6],5),readOnly:!0,css:{mr:"$xxs",color:"$obolGreen",width:"120px !important"}}),(0,i.jsx)(u.Z,{address:s})]})};return(0,i.jsx)(p.g_,{css:{".table-container":{"@sm":{width:"900px"}}},children:(0,i.jsx)(n.Nk,{tabs:[{title:"Validators",tableProps:{columns:g,rows:s.map((e,s)=>({address:(0,i.jsxs)(n.xu,{css:{display:"flex",alignItems:"center",justifyContent:"start"},children:[(0,i.jsx)(n.dh,{value:(0,d.zN)(e.address,[0,6],5),readOnly:!0,css:{mr:"$xxs",color:"$obolGreen",width:"120px !important"}}),(0,i.jsx)(x.j,{link:"".concat(h.q2,"/validator/").concat(e.address)})]}),status:e.status||"Pending",withdrawalAddress:(0,d.qF)(t,e.withdrawalAddress)?(0,i.jsx)(r,{address:e.withdrawalAddress,index:s}):(0,i.jsx)(a,{address:e.withdrawalAddress,index:s}),feeRecipient:(0,d.qF)(t,e.feeRecipient)?(0,i.jsx)(r,{address:e.feeRecipient,index:s+1}):(0,i.jsx)(a,{address:e.feeRecipient,index:s+1})}))}}]})})},j=(0,n.zo)(n.kC,{flexDirection:"column",width:"auto",gap:"$2xl",px:"10%",py:"$5xl","@sm":{px:"10%",pb:"$5xl",pt:"$xl"}});var m=t(67294),f=t(19485);let w=e=>{let{icon:s,heading:t,children:l}=e;return(0,i.jsxs)(n.mh,{children:[(0,i.jsxs)(n.xu,{children:["successfully"===s&&(0,i.jsx)(n.nQ,{}),"loading"===s&&(0,i.jsx)(n.ZG,{}),"exiting"===s&&(0,i.jsx)(n.lR,{})]}),(0,i.jsx)(n.xu,{css:{display:"flex",fd:"column",gap:"$sm"},children:(0,i.jsxs)(n.xu,{css:{display:"flex",fd:"column",gap:"$xs"},children:[(0,i.jsx)(n.xv,{variant:"body",css:{color:"white"},children:t}),l]})})]})},b=e=>{let{clusterStatus:s,handleOnExit:t,txHash:l}=e;return"exiting"===s?(0,i.jsxs)(w,{icon:"exiting",heading:"Cluster is exiting",children:[(0,i.jsxs)(n.rU,{css:{fontSize:"$4",fontWeight:"$normal"},target:"_blank",href:"https://".concat(h.pn,".beaconchain.io/tx/").concat(l),children:["Check Status on Beaconchain",(0,i.jsx)(n._j,{size:"sm"})]}),(0,i.jsxs)(n.rU,{css:{fontSize:"$4",fontWeight:"$normal"},target:"_blank",href:"https://docs.obol.tech/docs/next/int/quickstart/quickstart-exit",children:["Learn More",(0,i.jsx)(n.ZJ,{size:"sm"})]})]}):"exited"===s?(0,i.jsxs)(n.kC,{direction:"column",css:{gap:"$sm"},children:[(0,i.jsx)(w,{icon:"successfully",heading:"Cluster is successfully exited"}),(0,i.jsx)(n.xv,{variant:"body",children:"Calling Waterfall Funds pushes the principal ETH to the Withdrawal Address and accrued rewards to the splitter contract."})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.xv,{variant:"body",children:"Exit all validators in this cluster."}),(0,i.jsx)(n.xv,{variant:"body",children:"This cluster will no longer earn rewards."}),(0,i.jsx)(n.xv,{variant:"body",children:"Upon exiting the cluster you will be able to withdraw the original principle & claim all rewards."}),(0,i.jsx)(n.zx,{color:"primary",type:"button",css:{width:"auto"},disabled:"active"!==s,onClick:()=>t(),children:"Exit Cluster"})]})},y=e=>{var s,t,l;let{userBalance:r,distributeAndClaimStatus:d,splitMetadata:o,clusterStatus:c,handleOnDistributeAndWithdrawUserFunds:u,handleOnExit:x}=e,{account:g}=(0,a.kR)(),v=(null==d?void 0:d.loading)?{variant:"tx"}:{},j="string"==typeof(null==d?void 0:d.txHash)?null==d?void 0:d.txHash:null==d?void 0:null===(s=d.txHash)||void 0===s?void 0:s.transactionHash;return(0,i.jsxs)(n.kC,{css:{gap:"$lg","@sm":{flexDirection:"column",gap:"$md",alignItems:"flex-start",justifyContent:"flex-start",gridColumn:"span 2"}},children:[(0,i.jsxs)(n.W2,{css:{gap:"$lg",alignItems:"flex-start",justifyContent:"flex-start",gridColumn:"span 1"},children:[(0,i.jsx)(n.kC,{css:{justifyContent:"space-between",alignItems:"center"},children:(0,i.jsx)(n.xv,{variant:"h4",children:"Exit Cluster"})}),(0,i.jsx)(b,{clusterStatus:c,handleOnExit:x,txHash:j})]}),(0,i.jsxs)(n.W2,{css:{gap:"$lg",alignItems:"flex-start",justifyContent:"flex-start",gridColumn:"span 1"},children:[(0,i.jsx)(n.kC,{direction:"column",children:(0,i.jsx)(n.xv,{variant:"h4",children:"Claim ETH"})}),(0,i.jsxs)(n.kC,{css:{alignItems:"center",gap:"$xxxs"},children:[(0,i.jsx)(n.xv,{css:{textTransform:"uppercase"},variant:"subline",color:"body",children:"Claimable"}),(0,i.jsx)(n.KZ,{content:"Your total amount of ETH claimable from the splitter contracts",children:(0,i.jsx)(n.xu,{css:{display:"flex"},children:(0,i.jsx)(n.by,{})})})]}),(0,i.jsxs)(n.kC,{css:{gap:"$xxs",alignItems:"center"},children:[(0,i.jsx)(n.Ee,{src:"/assets/eth-icon.svg",alt:"eth",width:24,height:24}),(0,i.jsx)(n.xv,{css:{textTransform:"uppercase"},variant:"h5",children:r.balance||"0.00"})]}),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(p.fl,{...v,color:"primary",type:"button",css:{width:"auto"},disabled:!(0,f.isAddress)(g)||!!r.error||!r.balance||(null==d?void 0:d.completed)||!(null==o?void 0:null===(t=o.recipients)||void 0===t?void 0:t.some(e=>e.address.toLowerCase()===(null==g?void 0:g.toLowerCase()))),onClick:()=>u(),fullWidth:!0,children:(null==d?void 0:d.loading)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.yC,{}),"Transaction in progress"]}):(0,i.jsx)(i.Fragment,{children:" Claim ETH"})}),(null==d?void 0:d.completed)&&(0,i.jsx)(w,{icon:"successfully",heading:"Successfully claimed ETH",children:(0,i.jsxs)(n.rU,{css:{fontSize:"$4",fontWeight:"$normal"},target:"_blank",href:"https://".concat(h.pn,".etherscan.io/tx/").concat(j),children:["View on Etherscan",(0,i.jsx)(n._j,{size:"sm"})]})}),o&&!(null===(l=o.recipients)||void 0===l?void 0:l.some(e=>e.address.toLowerCase()===(null==g?void 0:g.toLowerCase())))&&(0,i.jsx)(n.xv,{variant:"metadata",color:"test",children:"You are not a recipient of this split and cannot claim"})]})]})]})};var C=t(23500);let _=e=>{var s,t,l,d;let{clusterDefinition:c,validators:u,currentAccount:x,clusterStatus:g}=e,{account:f,provider:w,chainId:b}=(0,a.kR)(),_=r().query.lockHash,[k,$]=(0,m.useState)(),S=(null==c?void 0:c.fee_recipient_address)||((null==c?void 0:c.validators)?null===(s=null==c?void 0:c.validators[0])||void 0===s?void 0:s.fee_recipient_address:null),A=(null==c?void 0:c.withdrawal_address)||((null==c?void 0:c.validators)?null===(t=null==c?void 0:c.validators[0])||void 0===t?void 0:t.withdrawal_address:null),E=(0,a.ly)(S),R=(0,m.useMemo)(()=>({accounts:null==E?void 0:E.recipientsSorted[0],percentAllocations:null==E?void 0:E.recipientsSorted[1],distributorFee:h.Uu,split:S}),[E,S]),H=(0,a.Tm)(f,R,A),T=null===(l=null==E?void 0:null===(d=E.recipients)||void 0===d?void 0:d.find(e=>e.address===f))||void 0===l?void 0:l.percentAllocation,W=Number(null==H?void 0:H.owrBalance)*(T/100);W>0&&!isNaN(W)&&(null==H?void 0:H.balance)==null&&(H.balance=W.toString());let F=async()=>{$(e=>({...e,loading:!0})),A===S?(0,C.Vx)(f,R,w.getSigner(0),C.Ap).then(e=>{console.log("withdraw tx",e),$(s=>({...s,loading:!1,txHash:e,completed:!0}))}).catch(e=>{$(s=>({...s,loading:!1,errorMessage:e.message})),console.log("error",e)}):"0"!==H.owrBalance?(0,C.E4)(f,A,R,w.getSigner(0),C.Ap).then(e=>{console.log("withdraw tx",e),$(s=>({...s,loading:!1,txHash:e,completed:!0}))}).catch(e=>{$(s=>({...s,loading:!1,errorMessage:e.message})),console.log("error",e)}):(console.log("handleOnWithdrawFunds with OWR already distributed"),(0,C.h_)({chainId:b,provider:w,address:f}).then(e=>{console.log("withdraw tx",e),$(s=>({...s,loading:!1,txHash:e,completed:!0}))}).catch(e=>{$(s=>({...s,loading:!1,errorMessage:e.message})),console.log("error",e)}))},O=()=>{r().push({pathname:"/clusters/exit",query:{ctaRouteValue:_}})};return(0,i.jsxs)(j,{children:[(0,i.jsxs)(n.kC,{direction:"column",css:{gap:"$xxs"},children:[(0,i.jsx)(n.xv,{variant:"h3",children:null==c?void 0:c.name}),(0,i.jsx)(n.xv,{variant:"metadata",color:"body",children:"Created ".concat(o.ou.fromISO(null==c?void 0:c.timestamp).toRelativeCalendar()," on ").concat(o.ou.fromISO(null==c?void 0:c.timestamp).toFormat("yyyy LLL dd"))})]}),(0,i.jsxs)(n.kC,{css:{gap:"$lg","@sm":{flexDirection:"column"}},children:[g?(0,i.jsx)(n.gK,{heading:"Cluster Status",status:g,tooltipContent:"The cluster aggregate status"}):(0,i.jsx)(n.gK,{heading:"Cluster Status",content:"Loading...",tooltipContent:"The cluster aggregate status"}),(0,i.jsx)(n.gK,{heading:"Operators",content:c.operators.length||"0",tooltipContent:"The number of cluster operators"}),(0,i.jsx)(n.gK,{heading:"Validators",content:(null==u?void 0:u.length)||"0",tooltipContent:"The number of cluster validators"})]}),(0,i.jsx)(p.Dq,{operators:c.operators,currentAccount:x,creatorAddress:c.creator.address}),u&&(null==u?void 0:u.length)>0?(0,i.jsx)(v,{validators:u.map((e,s)=>({id:s.toString(),...e}))}):(0,i.jsxs)(n.W2,{css:{gap:"$lg",alignItems:"flex-start"},children:[(0,i.jsx)(n.sQ,{heading:"Distributed Key Generation is incomplete"}),(0,i.jsx)(n.zx,{as:"a",href:"/dv?configHash=".concat(c.config_hash),target:"_blank",children:"Complete DKG"})]}),(null==u?void 0:u.length)>0&&(0,i.jsx)(y,{feeRecipientAddress:c.fee_recipient_address,handleOnDistributeAndWithdrawUserFunds:F,handleOnExit:O,userBalance:H,distributeAndClaimStatus:k,splitMetadata:{recipients:null==E?void 0:E.recipients},clusterStatus:g})]})},k=e=>{let{children:s}=e;return(0,i.jsxs)(n.W2,{css:{borderRadius:0,marginTop:"$7xl"},children:[(0,i.jsx)(n.xv,{variant:"h4",children:"Error \uD83D\uDE25"}),(0,i.jsx)(n.xv,{variant:"body",children:s})]})},$=()=>{var e,s,t,r;let o=(0,l.useRouter)(),{account:c}=(0,a.kR)(),u=o.query.lockHash,{data:x,isLoading:h,error:p}=(0,a.sh)(u?"/lock/".concat(u):null);if(u&&!x&&!h)return(0,i.jsx)(k,{children:(null==p?void 0:null===(e=p.response)||void 0===e?void 0:null===(s=e.data)||void 0===s?void 0:s.message)||"Error: No details information provided, please double check the\n            link you followed or return to the home page."});if(p&&!x)return(0,i.jsx)(k,{children:null==p?void 0:null===(t=p.response)||void 0===t?void 0:null===(r=t.data)||void 0===r?void 0:r.message});if(!x||h)return(0,i.jsxs)(j,{children:[(0,i.jsx)(n.xv,{variant:"subline",children:"Loading cluster data..."}),";"]});let g=null==x?void 0:x.distributed_validators.map((e,s)=>({status:e.isLoadingValidatorStatus?(0,i.jsx)(n.xv,{children:"Loading ..."}):(0,i.jsx)(n.HV,{status:e.status,textVariant:"metricStatusCell"}),address:e.distributed_public_key,withdrawalAddress:(null==x?void 0:x.cluster_definition.validators)?null==x?void 0:x.cluster_definition.validators[s].withdrawal_address:null==x?void 0:x.cluster_definition.withdrawal_address,feeRecipient:(null==x?void 0:x.cluster_definition.validators)?null==x?void 0:x.cluster_definition.validators[s].fee_recipient_address:null==x?void 0:x.cluster_definition.fee_recipient_address}));return(0,i.jsx)(_,{clusterDefinition:x.cluster_definition,validators:g,currentAccount:c,clusterStatus:x.distributed_validators.some(e=>e.isLoadingValidatorStatus)?null:(0,d.Uq)(x)})};var S=$}},function(e){e.O(0,[120,774,888,179],function(){return e(e.s=50068)}),_N_E=e.O()}]);