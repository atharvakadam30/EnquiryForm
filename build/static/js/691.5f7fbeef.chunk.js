"use strict";(self.webpackChunktokyo_white_react_admin_dashboard=self.webpackChunktokyo_white_react_admin_dashboard||[]).push([[691],{6687:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var i=n(4645),o=n(7392),c=n(8070),r=n(8903),l=n(6946),s=n(5865),a=n(3404),d=n(7731),x=n(5679),h=n(778),A=n(5043),m=n(3471),u=n(4556),p=n(6971),j=n(435),v=n(579);const f=e=>{let{ClassFeeId:t}=e;const n=(0,u.wA)(),f=((0,p.Zp)(),(0,u.d4)((e=>e.Enquiry.EnquiryList))),g=(0,u.d4)((e=>e.Fees.ClassFeeList));console.log(f);const[k,b]=(0,A.useState)(0),y=g.slice(10*k,10*(k+1)),C=[{Id:1,Icon:(0,v.jsx)(i.A,{title:"Edit Fee Details",children:(0,v.jsx)(o.A,{children:(0,v.jsx)(h.A,{sx:{color:"#ffc107"}})})}),Action:"Edit",Value:"1"},{Id:2,Icon:(0,v.jsx)(i.A,{title:"Delete Fee Details",children:(0,v.jsx)(o.A,{children:(0,v.jsx)(m.A,{sx:{color:"#ff1943"}})})}),Action:"Remove"}],I=g.length,w=10*k+1,z=Math.min(10*(k+1),I);return console.log(g),console.log(y),(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(c.A,{children:(0,v.jsxs)(r.Ay,{container:!0,spacing:2,sx:{width:"100%",overflow:"hidden"},children:[(0,v.jsx)(r.Ay,{item:!0,xs:12,children:(0,v.jsx)(x.A,{heading:"Class Fee List",subheading:""})}),(0,v.jsx)(r.Ay,{item:!0,xs:12}),(0,v.jsxs)(r.Ay,{item:!0,xs:12,sx:{display:"flex",flexDirection:"column",flexGrow:1,position:"relative"},children:[(0,v.jsx)("div",{style:{flexGrow:1,overflow:"auto"},children:(0,v.jsx)(d.A,{HeaderList:["Class","Academic Year","Fee Name","Fee Type","Amount","End Date","Edit","Delete"],ItemList:y,IconList:C,ClickItem:e=>{"Edit"===e.Action?t(e.Id):"Remove"===e.Action&&window.confirm("Are you sure you want to delete this FollowUp Detail?")&&n((0,j.CE)({ID:Number(e.Id)}))}})}),(0,v.jsxs)(l.A,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"16px"},children:[(0,v.jsxs)(s.A,{variant:"body2",children:["Fee List ",w,"-",z," of ",I," Fee Records"]}),(0,v.jsxs)(l.A,{sx:{display:"flex",gap:1},children:[(0,v.jsx)(a.A,{onClick:()=>{b(k-1)},variant:"outlined",disabled:0===k,style:{color:"#878686",minWidth:"120px"},children:"Previous Page"}),(0,v.jsx)(a.A,{onClick:()=>{b(k+1)},variant:"outlined",disabled:10*(k+1)>=I,style:{color:"#878686"},children:"Next Page"})]})]})]})]})})})}},7731:(e,t,n)=>{n.d(t,{A:()=>m});var i=n(5865),o=n(1962),c=n(6328),r=n(1596),l=n(1806),s=n(3460),a=n(2420),d=n(9650),x=n(4882),h=n(8076),A=n(579);const m=e=>{let{HeaderList:t,ItemList:n,IconList:m,ClickItem:u,ClickCheck:p,IsSelect:j=0}=e;const v=()=>{let e=[];e=n.map((e=>({...e,IsActive:!f()}))),p({Id:0,Value:e,Action:"Select"})},f=()=>{let e=!0;return n.map((t=>{t.IsActive||(e=!1)})),e};return(0,A.jsx)(d.A,{component:r.A,children:(0,A.jsxs)(l.A,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,A.jsx)(x.A,{children:(0,A.jsx)(h.A,{sx:{backgroundColor:"#90caf9"},children:t.map(((e,t)=>(0,A.jsxs)(a.A,{align:"center",sx:{color:"grey"},children:[(0,A.jsx)(i.A,{variant:"body1",fontWeight:"bold",children:(0,A.jsx)("b",{children:e})}),2==j&&0==t&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)("br",{}),(0,A.jsx)(o.A,{checked:f(),onChange:v})]})]},t)))})}),(0,A.jsx)(c.A,{in:!0,timeout:1500,children:(0,A.jsx)(s.A,{children:n.map(((e,t)=>(0,A.jsxs)(h.A,{children:[void 0!=e.Text1&&(0,A.jsx)(a.A,{align:"left",children:e.Text1}),void 0!=e.Text2&&(0,A.jsx)(a.A,{align:"center",children:e.Text2}),void 0!=e.Text3&&(0,A.jsx)(a.A,{align:"center",children:e.Text3}),void 0!=e.Text4&&(0,A.jsx)(a.A,{align:"center",children:e.Text4}),void 0!=e.Text5&&(0,A.jsx)(a.A,{align:"center",children:e.Text5}),void 0!=e.Text6&&(0,A.jsx)(a.A,{align:"center",children:e.Text6}),void 0!=e.Text7&&(0,A.jsx)(a.A,{align:"center",children:e.Text7}),null===m||void 0===m?void 0:m.map(((t,n)=>(0,A.jsx)(a.A,{align:"center",onClick:()=>{u({Id:e.Id,Action:t.Action})},children:t.Icon},n)))]},t)))})})]})})}},5679:(e,t,n)=>{n.d(t,{A:()=>l});var i=n(6240),o=n(6946),c=n(5865),r=n(579);const l=e=>{let{heading:t,subheading:n=""}=e;(0,i.A)();return(0,r.jsxs)(o.A,{children:[(0,r.jsxs)(c.A,{variant:"h3",sx:{display:"flex",alignItems:"center",gap:1,my:0},children:[(0,r.jsx)(o.A,{sx:{height:"24px",width:"5px",backgroundColor:e=>e.palette.primary.main}}),t]}),n&&(0,r.jsx)(c.A,{variant:"subtitle2",children:n})]})}},3471:(e,t,n)=>{var i=n(5709);t.A=void 0;var o=i(n(39)),c=n(579),r=(0,o.default)((0,c.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.A=r},778:(e,t,n)=>{var i=n(5709);t.A=void 0;var o=i(n(39)),c=n(579),r=(0,o.default)((0,c.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.A=r},1962:(e,t,n)=>{n.d(t,{A:()=>I});var i=n(8587),o=n(8168),c=n(5043),r=(n(5173),n(222)),l=n(310),s=n(3064),a=n(6734),d=n(579);const x=(0,a.A)((0,d.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),h=(0,a.A)((0,d.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),A=(0,a.A)((0,d.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");var m=n(6803),u=n(7864),p=n(2056),j=n(3088);function v(e){return(0,j.A)("MuiCheckbox",e)}const f=(0,n(5904).A)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),g=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],k=(0,p.Ay)(s.A,{shouldForwardProp:e=>(0,p.ep)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t["color".concat((0,m.A)(n.color))]]}})((e=>{let{theme:t,ownerState:n}=e;return(0,o.A)({color:t.palette.text.secondary},!n.disableRipple&&{"&:hover":{backgroundColor:(0,l.X4)("default"===n.color?t.palette.action.active:t.palette[n.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&{["&.".concat(f.checked,", &.").concat(f.indeterminate)]:{color:t.palette[n.color].main},["&.".concat(f.disabled)]:{color:t.palette.action.disabled}})})),b=(0,d.jsx)(h,{}),y=(0,d.jsx)(x,{}),C=(0,d.jsx)(A,{}),I=c.forwardRef((function(e,t){var n,l;const s=(0,u.A)({props:e,name:"MuiCheckbox"}),{checkedIcon:a=b,color:x="primary",icon:h=y,indeterminate:A=!1,indeterminateIcon:p=C,inputProps:j,size:f="medium"}=s,I=(0,i.A)(s,g),w=A?p:h,z=A?p:a,T=(0,o.A)({},s,{color:x,indeterminate:A,size:f}),F=(e=>{const{classes:t,indeterminate:n,color:i}=e,c={root:["root",n&&"indeterminate","color".concat((0,m.A)(i))]},l=(0,r.A)(c,v,t);return(0,o.A)({},t,l)})(T);return(0,d.jsx)(k,(0,o.A)({type:"checkbox",inputProps:(0,o.A)({"data-indeterminate":A},j),icon:c.cloneElement(w,{fontSize:null!=(n=w.props.fontSize)?n:f}),checkedIcon:c.cloneElement(z,{fontSize:null!=(l=z.props.fontSize)?l:f}),ownerState:T,ref:t},I,{classes:F}))}))},1053:(e,t,n)=>{n.d(t,{A:()=>i});const i=n(5043).createContext()},5213:(e,t,n)=>{n.d(t,{A:()=>c});var i=n(5043),o=n(1053);function c(){return i.useContext(o.A)}}}]);
//# sourceMappingURL=691.5f7fbeef.chunk.js.map