"use strict";(self.webpackChunktokyo_white_react_admin_dashboard=self.webpackChunktokyo_white_react_admin_dashboard||[]).push([[466],{3466:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var o=n(8070),r=n(2110),s=n(6946),i=n(8903),a=n(9413),l=n(4605),d=n(4598),c=n(5043),x=n(6971),m=n(6925),h=n(9056),u=n(9303),A=n(3346),p=n(5678),j=n(9731),g=n(8038),I=n(8331),b=n(2220),v=n(8096),f=n(5679),y=n(7731),C=n(4556),k=n(579);const S=()=>{const{Id:e}=(0,x.g)(),t=(0,C.wA)(),n=(0,C.d4)((e=>e.FollowUp.FollowUpHistory));(0,c.useEffect)((()=>{t((0,b.Dt)({StudentId:Number(e)}))}),[t]);const r=n.length;return console.log(n),(0,k.jsx)(o.A,{children:(0,k.jsxs)(i.Ay,{container:!0,spacing:2,children:[(0,k.jsx)(i.Ay,{item:!0,xs:12,children:(0,k.jsx)(f.A,{heading:"FollowUp Count : ".concat(r),subheading:""})}),(0,k.jsx)(i.Ay,{item:!0,xs:12,children:(0,k.jsx)(y.A,{HeaderList:["CountNo","Status","Reminder","Comment","Followup date-Time"],ItemList:n,ClickItem:()=>{}})})]})})};var w=n(3652);const N=()=>{const e=(0,I.wA)(),{Id:t}=(0,x.g)(),n=(0,I.d4)((e=>e.FollowUp.FollowUpHistory)),[f,y]=(0,c.useState)("0"),[C,N]=(0,c.useState)(!1),[M,E]=(0,c.useState)("0"),[F,z]=(0,c.useState)(""),[L,U]=(0,c.useState)(""),[T,P]=(0,c.useState)([{Id:1,Name:"Male",Value:"1"},{Id:2,Name:"Female",Value:"2"}]),[R,D]=(0,c.useState)("0"),[V,H]=(0,c.useState)(""),[_,q]=(0,c.useState)(""),[B,$]=(0,c.useState)(""),[W,O]=(0,c.useState)(""),[Z,K]=(0,c.useState)(""),[X,G]=(0,c.useState)(""),[J,Q]=(0,c.useState)("0"),[Y,ee]=(0,c.useState)("0"),[te,ne]=(0,c.useState)(""),[oe,re]=(0,c.useState)(""),[se,ie]=(0,c.useState)(""),[ae,le]=(0,c.useState)(""),de=(0,I.d4)((e=>e.Enquiry.Class)),ce=(0,I.d4)((e=>e.Enquiry.EnquiryDetails)),xe=(0,I.d4)((e=>e.Enquiry.AddEnquiryMsg));console.log(ce);const me=(0,I.d4)((e=>e.FollowUp.Status)),he=(0,I.d4)((e=>e.FollowUp.AddFollowUpMsg));(0,c.useEffect)((()=>{if(e((0,g.t0)()),void 0!==t){const n={ID:Number(t)};e((0,g.IC)(n))}}),[t,e]),(0,c.useEffect)((()=>{null!==ce&&(y(ce.ClassId),z(ce.StudentName),q(ce.FatherName),$(ce.FatherPhoneNo),O(ce.MotherName),K(ce.MotherPhoneNo),G(ce.EmailId))}),[ce]),(0,c.useEffect)((()=>{e((0,b.bZ)())}),[]),(0,c.useEffect)((()=>{""!==he&&(""!==xe?(v.oR.success("FollowUp Taken Successfully with some Updates."),e((0,b.kh)()),e((0,g.yn)()),be(),e((0,b.Dt)({StudentId:Number(t)}))):(v.oR.success(he),e((0,b.kh)()),be(),e((0,b.Dt)({StudentId:Number(t)}))))}),[he]);const[ue,Ae]=(0,c.useState)(""),[pe,je]=(0,c.useState)(""),[ge,Ie]=(0,c.useState)(""),be=()=>{Q("0"),re(""),ne("")};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(j.A,{heading:"FollowUp Form"}),(0,k.jsx)(o.A,{sx:{py:2},children:(0,k.jsx)(r.A,{variant:"outlined",children:(0,k.jsx)(s.A,{p:2,children:(0,k.jsxs)("form",{children:[(0,k.jsx)(i.Ay,{item:!0,xs:12,sx:{display:"flex",justifyContent:"flex-end"},children:(0,k.jsx)(a.A,{children:(0,k.jsx)(l.A,{control:(0,k.jsx)(d.A,{checked:C,onChange:()=>{!1===C?N(!0):!0===C&&N(!1)}}),label:"Edit Mode"})})}),(0,k.jsxs)(i.Ay,{container:!0,spacing:2,children:[(0,k.jsx)(i.Ay,{item:!0,xs:6,sm:6,children:(0,k.jsx)(u.A,{Item:F,Label:"Student Name",ClickItem:e=>{!0===C&&z(e)},ErrorMessage:void 0})}),(0,k.jsx)(i.Ay,{item:!0,xs:6,sm:6,sx:{mt:2.7},children:(0,k.jsx)(h.A,{ItemList:de,Label:"Class",DefaultValue:f,ClickItem:e=>{!0===C&&y(e)},ErrorMessage:""})}),(0,k.jsx)(i.Ay,{item:!0,xs:6,children:(0,k.jsx)(u.A,{Item:_,Label:"Father Name",ClickItem:e=>{!0===C&&q(e)},ErrorMessage:void 0})}),(0,k.jsx)(i.Ay,{item:!0,xs:6,children:(0,k.jsx)(u.A,{Item:B,Label:"FatherPhoneNo",ClickItem:e=>{!0===C&&$(e)},ErrorMessage:void 0})}),(0,k.jsx)(i.Ay,{item:!0,xs:6,children:(0,k.jsx)(u.A,{Item:W,Label:"Mother Name",ClickItem:e=>{!0===C&&O(e)},ErrorMessage:void 0})}),(0,k.jsx)(i.Ay,{item:!0,xs:6,children:(0,k.jsx)(u.A,{Item:Z,Label:"MotherPhoneNo",ClickItem:e=>{!0===C&&K(e)},ErrorMessage:void 0})}),(0,k.jsx)(i.Ay,{item:!0,xs:12,children:(0,k.jsx)(u.A,{Item:X,Label:"EmailId",ClickItem:e=>{!0===C&&G(e)},ErrorMessage:void 0})}),(0,k.jsxs)(i.Ay,{item:!0,xs:6,children:[(0,k.jsx)(A.A,{ItemList:me,Label:"Status",DefaultValue:J,ClickItem:e=>{Q(e)},ErrorMessage:void 0}),ue&&(0,k.jsx)("span",{style:{color:"red"},children:ue})]}),(0,k.jsxs)(i.Ay,{item:!0,xs:6,children:[(0,k.jsx)(m.A,{Item:te,Label:"Reminder",ClickItem:e=>{ne(e)},ErrorMessage:void 0}),pe&&(0,k.jsx)("span",{style:{color:"red"},children:pe})]}),(0,k.jsxs)(i.Ay,{item:!0,xs:12,children:[(0,k.jsx)(u.A,{Item:oe,Label:"Comment",ClickItem:e=>{re(e)},ErrorMessage:void 0}),ge&&(0,k.jsx)("span",{style:{color:"red"},children:ge})]}),(0,k.jsx)(i.Ay,{item:!0,xs:6,children:(0,k.jsxs)(w.$$,{onClick:()=>{const o={ID:0,ClassId:Number(f),StudentId:Number(ce.ID),StudentName:F,FatherName:_,FatherPhoneNo:B,MotherName:W,MotherPhoneNo:Z,EmailId:X.trim(),StatusId:Number(J),FollowUpCount:Number(n.length+1),Reminder:te,Comment:oe},r={ID:Number(t),StudentName:F,ClassId:Number(f),FatherName:_,FatherPhoneNo:B,MotherName:W,MotherPhoneNo:Z,EmailId:X.trim()};e((0,g.dl)(r)),e((0,b.Mi)(o)),e((0,b.Dt)({StudentId:Number(t)}))},children:["Submit\xa0",(0,k.jsx)(p.A,{fontSize:"small"})]})}),(0,k.jsx)(i.Ay,{item:!0,xs:6,children:(0,k.jsx)(w.$$,{onClick:be,children:"Clear"})})]})]})})})}),(0,k.jsx)("br",{}),(0,k.jsx)("br",{}),(0,k.jsx)("br",{}),(0,k.jsx)(S,{})]})}},6925:(e,t,n)=>{n.d(t,{A:()=>a});var o=n(5865),r=n(5795),s=n(9764),i=n(579);const a=e=>{let{Item:t,ClickItem:n,Label:a,ErrorMessage:l=""}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.A,{children:a}),(0,i.jsx)(r.A,{value:t,type:"date",fullWidth:!0,onChange:e=>{n(e.target.value)},size:"small"}),(0,i.jsx)(s.Ud,{children:l})]})}},9056:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(2880),r=n(9764),s=n(579);const i=e=>{let{ItemList:t,ClickItem:n,Label:i,DefaultValue:a,ErrorMessage:l="",Placeholder:d="select option"}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.A,{value:a,fullWidth:!0,variant:"outlined",size:"small",required:!0,onChange:e=>n(e.target.value),children:[(0,s.jsx)("option",{value:"0",children:d}),null===t||void 0===t?void 0:t.map(((e,t)=>(0,s.jsx)("option",{value:e.Value,children:e.Name},t)))]}),(0,s.jsx)(r.Ud,{children:l})]})}},7731:(e,t,n)=>{n.d(t,{A:()=>u});var o=n(5865),r=n(1962),s=n(6328),i=n(1596),a=n(1806),l=n(3460),d=n(2420),c=n(9650),x=n(4882),m=n(8076),h=n(579);const u=e=>{let{HeaderList:t,ItemList:n,IconList:u,ClickItem:A,ClickCheck:p,IsSelect:j=0}=e;const g=()=>{let e=[];e=n.map((e=>({...e,IsActive:!I()}))),p({Id:0,Value:e,Action:"Select"})},I=()=>{let e=!0;return n.map((t=>{t.IsActive||(e=!1)})),e};return(0,h.jsx)(c.A,{component:i.A,children:(0,h.jsxs)(a.A,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,h.jsx)(x.A,{children:(0,h.jsx)(m.A,{sx:{backgroundColor:"#90caf9"},children:t.map(((e,t)=>(0,h.jsxs)(d.A,{align:"center",sx:{color:"grey"},children:[(0,h.jsx)(o.A,{variant:"body1",fontWeight:"bold",children:(0,h.jsx)("b",{children:e})}),2==j&&0==t&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("br",{}),(0,h.jsx)(r.A,{checked:I(),onChange:g})]})]},t)))})}),(0,h.jsx)(s.A,{in:!0,timeout:1500,children:(0,h.jsx)(l.A,{children:n.map(((e,t)=>(0,h.jsxs)(m.A,{children:[void 0!=e.Text1&&(0,h.jsx)(d.A,{align:"left",children:e.Text1}),void 0!=e.Text2&&(0,h.jsx)(d.A,{align:"center",children:e.Text2}),void 0!=e.Text3&&(0,h.jsx)(d.A,{align:"center",children:e.Text3}),void 0!=e.Text4&&(0,h.jsx)(d.A,{align:"center",children:e.Text4}),void 0!=e.Text5&&(0,h.jsx)(d.A,{align:"center",children:e.Text5}),void 0!=e.Text6&&(0,h.jsx)(d.A,{align:"center",children:e.Text6}),void 0!=e.Text7&&(0,h.jsx)(d.A,{align:"center",children:e.Text7}),null===u||void 0===u?void 0:u.map(((t,n)=>(0,h.jsx)(d.A,{align:"center",onClick:()=>{A({Id:e.Id,Action:t.Action})},children:t.Icon},n)))]},t)))})})]})})}},9303:(e,t,n)=>{n.d(t,{A:()=>i});var o=n(5795),r=n(9764),s=n(579);const i=e=>{let{Item:t,Label:n,ErrorMessage:i="",ClickItem:a,BlurItem:l,KeyPressItem:d}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.A,{value:t,onChange:e=>{a(e.target.value)},onBlur:l,size:"small",label:n,variant:"standard",fullWidth:!0,required:!0}),(0,s.jsx)(r.Ud,{children:i})]})}},3346:(e,t,n)=>{n.d(t,{A:()=>d});var o=n(5865),r=n(4714),s=n(4605),i=n(4256),a=n(9764),l=n(579);const d=e=>{let{ItemList:t,ClickItem:n,Label:d,DefaultValue:c,ErrorMessage:x=""}=e;return console.log(x),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.A,{children:d}),(0,l.jsx)(r.A,{value:c,onChange:e=>n(e.target.value),children:(0,l.jsx)("div",{children:null===t||void 0===t?void 0:t.map(((e,t)=>(0,l.jsx)(s.A,{value:e.Value,control:(0,l.jsx)(i.A,{size:"small"}),label:e.Name},t)))})}),(0,l.jsx)(a.Ud,{children:x})]})}},5679:(e,t,n)=>{n.d(t,{A:()=>a});var o=n(6240),r=n(6946),s=n(5865),i=n(579);const a=e=>{let{heading:t,subheading:n=""}=e;(0,o.A)();return(0,i.jsxs)(r.A,{children:[(0,i.jsxs)(s.A,{variant:"h3",sx:{display:"flex",alignItems:"center",gap:1,my:0},children:[(0,i.jsx)(r.A,{sx:{height:"24px",width:"5px",backgroundColor:e=>e.palette.primary.main}}),t]}),n&&(0,i.jsx)(s.A,{variant:"subtitle2",children:n})]})}},9764:(e,t,n)=>{n.d(t,{Ud:()=>c});var o,r,s,i,a=n(7528),l=n(2056),d=n(5865);const c=(0,l.Ay)(d.A)(o||(o=(0,a.A)(["\n  font-size: 12px;\n  color: red;\n  text-align: center;\n  font-family: 'Roboto';\n  @media (max-width: 280px) {\n    font-size: 10px;\n  }\n"])));(0,l.Ay)(d.A)(r||(r=(0,a.A)(["\n  font-size: 12px;\n  // color: red;\n  text-align: center;\n  font-family: 'Roboto';\n  @media (max-width: 280px) {\n    font-size: 10px;\n  }\n"]))),(0,l.Ay)(d.A)(s||(s=(0,a.A)(["\n  font-size: 12px;\n  color: red;\n  margin-top: -10px;\n  font-family: 'Roboto';\n  @media (max-width: 280px) {\n    font-size: 10px;\n  }\n"]))),(0,l.Ay)(d.A)(i||(i=(0,a.A)(["\n  font-size: 12px;\n  color: red;\n\n  font-family: 'Roboto';\n  @media (max-width: 280px) {\n    font-size: 10px;\n  }\n"])))},3652:(e,t,n)=>{n.d(t,{$$:()=>x,dF:()=>c,uL:()=>d});var o,r=n(7528),s=n(2056),i=n(5865),a=n(6946),l=n(3404);const d=(0,s.Ay)(i.A)((e=>{let{theme:t}=e;return"\n\nfont-weight: 500;\nfont-size: 20px;\ncolor: black;\nmargin: auto;\ntext-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);\nfont-family: roboto;\n@media (min-width: 280px) and (max-width: 320px)  {\n  font-size: 18px;\n};\n@media (min-width: 600px)  {\n  font-size: 22px;\n};\n"})),c=(0,s.Ay)(a.A)(o||(o=(0,r.A)(["\n \n  width:70px;\n  height:75px;\n  @media (max-width: 320px) {\n    width: 60px;\n    height: 65px;\n  }\n  @media (max-width: 280px) {\n    width: 50px;\n    height: 55px;\n  }\n\n  border-radius: 10px;\n  margin-bottom: 5px;\n  text-align: center;\ntext-decoration: none;\n  box-shadow: 1px 4px 5px 2px rgba(0, 0, 0, 0.3);\n"]))),x=(0,s.Ay)(l.A)((e=>{let{theme:t,color:n}=e;return"\ncolor: white;\nfont-size: 12px;\nfont-family: 'Roboto';\ntext-decoration: none;\nheight:30px;\nborder-radius: 3px;\nbox-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);\n@media (min-width: 600px) {\n  \n };\n"}))},9731:(e,t,n)=>{n.d(t,{A:()=>x});var o=n(2056),r=n(6946),s=n(6240),i=n(8070),a=n(3652),l=n(6971),d=n(579);const c=(0,o.Ay)(r.A)((e=>{let{theme:t}=e;return"\n        margin-top: ".concat(t.spacing(2),";\n        margin-bottom: ").concat(t.spacing(2),";\n")})),x=e=>{let{heading:t}=e;(0,s.A)();const n=(0,l.Zp)();return null!==sessionStorage.getItem("UserId")&&void 0!==sessionStorage.getItem("UserId")||n("/"),(0,d.jsx)(i.A,{children:(0,d.jsx)(c,{display:"flex",alignItems:"center",children:(0,d.jsx)(a.uL,{children:t})})})}},1962:(e,t,n)=>{n.d(t,{A:()=>k});var o=n(8587),r=n(8168),s=n(5043),i=(n(5173),n(222)),a=n(310),l=n(3064),d=n(6734),c=n(579);const x=(0,d.A)((0,c.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),m=(0,d.A)((0,c.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),h=(0,d.A)((0,c.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");var u=n(6803),A=n(7864),p=n(2056),j=n(3088);function g(e){return(0,j.A)("MuiCheckbox",e)}const I=(0,n(5904).A)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),b=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],v=(0,p.Ay)(l.A,{shouldForwardProp:e=>(0,p.ep)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t["color".concat((0,u.A)(n.color))]]}})((e=>{let{theme:t,ownerState:n}=e;return(0,r.A)({color:t.palette.text.secondary},!n.disableRipple&&{"&:hover":{backgroundColor:(0,a.X4)("default"===n.color?t.palette.action.active:t.palette[n.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&{["&.".concat(I.checked,", &.").concat(I.indeterminate)]:{color:t.palette[n.color].main},["&.".concat(I.disabled)]:{color:t.palette.action.disabled}})})),f=(0,c.jsx)(m,{}),y=(0,c.jsx)(x,{}),C=(0,c.jsx)(h,{}),k=s.forwardRef((function(e,t){var n,a;const l=(0,A.A)({props:e,name:"MuiCheckbox"}),{checkedIcon:d=f,color:x="primary",icon:m=y,indeterminate:h=!1,indeterminateIcon:p=C,inputProps:j,size:I="medium"}=l,k=(0,o.A)(l,b),S=h?p:m,w=h?p:d,N=(0,r.A)({},l,{color:x,indeterminate:h,size:I}),M=(e=>{const{classes:t,indeterminate:n,color:o}=e,s={root:["root",n&&"indeterminate","color".concat((0,u.A)(o))]},a=(0,i.A)(s,g,t);return(0,r.A)({},t,a)})(N);return(0,c.jsx)(v,(0,r.A)({type:"checkbox",inputProps:(0,r.A)({"data-indeterminate":h},j),icon:s.cloneElement(S,{fontSize:null!=(n=S.props.fontSize)?n:I}),checkedIcon:s.cloneElement(w,{fontSize:null!=(a=w.props.fontSize)?a:I}),ownerState:N,ref:t},k,{classes:M}))}))}}]);
//# sourceMappingURL=466.ff759a70.chunk.js.map