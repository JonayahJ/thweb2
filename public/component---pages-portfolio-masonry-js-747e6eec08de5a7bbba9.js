(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"7SZd":function(e,t,a){"use strict";var n=a("wx14"),r=a("Ff2n"),o=a("q1tI"),i=a("iuhU"),s=a("ofer"),c=a("H2TA"),l=a("4hqb"),m=o.forwardRef((function(e,t){var a=e.children,c=e.classes,m=e.className,p=e.component,u=void 0===p?"div":p,d=e.disablePointerEvents,g=void 0!==d&&d,h=e.disableTypography,f=void 0!==h&&h,b=e.position,v=e.variant,y=Object(r.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),E=Object(l.b)()||{},x=v;return v&&E.variant,E&&!x&&(x=E.variant),o.createElement(l.a.Provider,{value:null},o.createElement(u,Object(n.a)({className:Object(i.a)(c.root,m,g&&c.disablePointerEvents,E.hiddenLabel&&c.hiddenLabel,"filled"===x&&c.filled,{start:c.positionStart,end:c.positionEnd}[b],"dense"===E.margin&&c.marginDense),ref:t},y),"string"!=typeof a||f?a:o.createElement(s.a,{color:"textSecondary"},a)))}));t.a=Object(c.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(m)},EUXZ:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("41Hj"),i=a("zLVn"),s=a("iuhU"),c=a("R/WZ"),l=a("ADg1"),m=a("KmP9"),p=a("7SZd"),u=a("TTf+"),d=a("Z3vd"),g=a("kbOB"),h=a("Jc4N"),f=Object(c.a)((function(e){var t,a,n;return{pagePaddingTop:(t={paddingTop:e.spacing(3)},t[e.breakpoints.up("md")]={paddingTop:e.spacing(5)},t),sectionContainer:{backgroundColor:e.palette.primary.dark,borderRadius:"0 0 100% 0"},textWhite:{color:"white"},fontWeightBold:{fontWeight:"bold"},sectionNoPaddingTop:{paddingTop:0},searchInputContainer:(a={background:e.palette.background.paper,padding:e.spacing(2),boxShadow:"0 4px 14px 0 rgba(0, 0, 0, 0.11)",borderRadius:e.spacing(1),width:"100%",height:"100%",display:"flex",alignItems:"center","& .MuiOutlinedInput-notchedOutline":{border:"0 !important"},"& .MuiInputAdornment-positionStart":{marginRight:e.spacing(2)},"& .MuiOutlinedInput-adornedStart":{paddingLeft:0},"& .MuiOutlinedInput-input":{padding:0}},a[e.breakpoints.down("sm")]={padding:e.spacing(1)},a),searchButton:(n={maxHeight:45,minWidth:135},n[e.breakpoints.down("sm")]={minWidth:"auto"},n)}})),b=function(e){var t=e.className,a=Object(i.a)(e,["className"]),n=f();return r.a.createElement("div",Object.assign({className:t},a),r.a.createElement("div",{className:n.sectionContainer},r.a.createElement(o.u,{narrow:!0},r.a.createElement(r.a.Fragment,null,r.a.createElement(h.e,{title:"Our Work",subtitle:"We design & build products, tools, apps, and sites for companies trying to do great things for our planet.",titleProps:{className:Object(s.a)(n.textWhite,n.fontWeightBold),variant:"h2"},subtitleProps:{className:n.textWhite},"data-aos":"fade-up"}),r.a.createElement("div",{className:n.searchInputContainer,"data-aos":"fade-up"},r.a.createElement(l.a,{fullWidth:!0,variant:"outlined"},r.a.createElement(m.a,{startAdornment:r.a.createElement(p.a,{position:"start"},r.a.createElement(g.b,{fontIconClass:"fas fa-search",fontIconColor:u.a.blueGrey[900]})),placeholder:"Search for the article"})),r.a.createElement(d.a,{color:"primary",variant:"contained",size:"large",className:n.searchButton},"Search"))))))},v=a("ofer"),y=Object(c.a)((function(e){var t,a,n;return{folioItem:(a={position:"relative",overflow:"hidden",margin:e.spacing(1,0),boxShadow:"0 1.5rem 4rem rgba(22,28,45,.05)",borderRadius:e.spacing(2)},a[e.breakpoints.up("sm")]={margin:e.spacing(2)},a["&:last-child"]=(t={},t[e.breakpoints.up("md")]={marginBottom:0},t),a["&:hover"]={"& .folio__image":{transform:"scale(1.2)"},"& .folio__info-wrapper":{transform:"translateY(0)"}},a),image:{transitionDuration:".7s",transform:"scale(1.0)",objectFit:"cover"},folioInfoWrapper:{position:"absolute",left:0,right:0,bottom:0,background:e.palette.background.paper,padding:e.spacing(4,2),transition:"transform .6s",transform:"translateY(100%)",borderRadius:e.spacing(2,0)},folioTitle:{fontWeight:"bold"},folioSubtitle:{textTransform:"capitalize",margin:e.spacing(1,0)},grid:(n={display:"flex",flexDirection:"column"},n[e.breakpoints.up("sm")]={maxWidth:500,margin:"0 auto"},n[e.breakpoints.up("md")]={flexDirection:"row",maxWidth:"100%"},n),gridWrapper:{display:"flex",flexDirection:"column"}}})),E=function(e){var t=e.data,a=e.className,n=Object(i.a)(e,["data","className"]),o=y(),c=[t.slice(0,4),t.slice(4,8),t.slice(8)];return r.a.createElement("div",Object.assign({className:a},n),r.a.createElement("div",{className:o.grid},c.map((function(e,t){return r.a.createElement("div",{className:o.gridWrapper,key:t},e.map((function(e,t){return r.a.createElement("div",{className:o.folioItem,key:t,"data-aos":"fade-up",style:{height:e.h}},r.a.createElement(g.d,{src:e.cover,alt:e.title,className:Object(s.a)("folio__image",o.image),lazy:!1}),r.a.createElement("div",{className:Object(s.a)("folio__info-wrapper",o.folioInfoWrapper)},r.a.createElement("div",null,r.a.createElement(v.a,{variant:"h5",className:o.folioTitle,color:"textPrimary"},e.title),r.a.createElement(v.a,{variant:"body1",className:o.folioSubtitle,color:"textSecondary"},e.subtitle))))})))}))))},x=a("tRbT"),N=Object(c.a)((function(e){var t;return{root:{width:"100%"},noBg:{background:"transparent"},copy:(t={textAlign:"center",maxWidth:700,margin:"0 auto",padding:e.spacing(2,2,0,2)},t[e.breakpoints.up("md")]={padding:e.spacing(4,2,0,2)},t),title:{marginBottom:e.spacing(2)},logoImg:{maxWidth:100},fontWeight700:{fontWeight:700}}})),j=function(e){var t=e.data,a=e.className,n=Object(i.a)(e,["data","className"]),o=N();return r.a.createElement("div",Object.assign({className:Object(s.a)(o.root,a),"data-aos":"fade-up"},n),r.a.createElement("div",{className:o.copy},r.a.createElement(h.e,{title:"Our work has been featured",subtitle:"We design & build products, tools, apps, and sites for companies trying to do great things for our planet.","data-aos":"fade-up",align:"center"}),r.a.createElement(x.a,{container:!0,justify:"space-between"},t.map((function(e,t){return r.a.createElement(x.a,{item:!0,xs:6,sm:2,key:t},r.a.createElement(g.d,{src:e.logo,alt:e.name,className:o.logoImg,lazy:!1}))})))))},w=a("tr08"),k=a("lopY"),S=a("eD//"),O=a("tVbE"),T=a("SLcR"),W=a("469l"),I=a("IsqK"),P=a("r9w1"),q=Object(c.a)((function(e){var t,a,n;return{list:(t={display:"flex",flexDirection:"column"},t[e.breakpoints.up("md")]={flexDirection:"row"},t),listItemText:{display:"flex",flexDirection:"column",flex:"0 0 auto"},listItem:(a={justifyContent:"flex-start"},a[e.breakpoints.up("md")]={justifyContent:"center"},a),icon:{background:"transparent",borderRadius:0},form:(n={maxWidth:550,margin:"0 auto",marginTop:e.spacing(5)},n[e.breakpoints.up("md")]={marginTop:e.spacing(10)},n["& .MuiTextField-root"]={background:e.palette.background.paper},n["& .MuiOutlinedInput-input"]={background:e.palette.background.paper},n),inputTitle:{fontWeight:700,marginBottom:e.spacing(1)}}})),D=function(e){var t=e.className,a=Object(i.a)(e,["className"]),n=q(),o=Object(w.a)(),s=Object(k.a)(o.breakpoints.up("md"),{defaultMatches:!0});return r.a.createElement("div",Object.assign({className:t},a),r.a.createElement(h.e,{title:"Have a project to discuss? Contact us.",subtitle:"Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions.",subtitleProps:{variant:"body1",color:"textPrimary"},"data-aos":"fade-up",align:s?"center":"left"}),r.a.createElement(S.a,{disablePadding:!0,className:n.list},r.a.createElement(O.a,{disableGutters:!0,"data-aos":"fade-up",className:n.listItem},r.a.createElement(T.a,null,r.a.createElement(W.a,{src:"https://assets.maccarianagency.com/the-front/illustrations/contact-icon-phone.png",srcSet:"https://assets.maccarianagency.com/the-front/illustrations/contact-icon-phone@2x.png 2x",className:n.icon})),r.a.createElement(I.a,{className:n.listItemText,primary:"Phone",secondary:"+39 659-657-0133",primaryTypographyProps:{variant:"subtitle1",color:"textSecondary"},secondaryTypographyProps:{variant:"subtitle1",color:"textPrimary",component:"span"}})),r.a.createElement(O.a,{disableGutters:!0,"data-aos":"fade-up",className:n.listItem},r.a.createElement(T.a,null,r.a.createElement(W.a,{src:"https://assets.maccarianagency.com/the-front/illustrations/contact-icon-mail.png",srcSet:"https://assets.maccarianagency.com/the-front/illustrations/contact-icon-mail@2x.png 2x",className:n.icon})),r.a.createElement(I.a,{className:n.listItemText,primary:"Email",secondary:"hi@maccarianagency.com",primaryTypographyProps:{variant:"subtitle1",color:"textSecondary"},secondaryTypographyProps:{variant:"subtitle1",color:"textPrimary"}})),r.a.createElement(O.a,{disableGutters:!0,"data-aos":"fade-up",className:n.listItem},r.a.createElement(T.a,null,r.a.createElement(W.a,{src:"https://assets.maccarianagency.com/the-front/illustrations/contact-icon-pin.png",srcSet:"https://assets.maccarianagency.com/the-front/illustrations/contact-icon-pin@2x.png 2x",className:n.icon})),r.a.createElement(I.a,{className:n.listItemText,primary:"Head Office",secondary:"Via E. Golla 4",primaryTypographyProps:{variant:"subtitle1",color:"textSecondary"},secondaryTypographyProps:{variant:"subtitle1",color:"textPrimary"}}))),r.a.createElement("div",{className:n.form},r.a.createElement(x.a,{container:!0,spacing:s?4:2},r.a.createElement(x.a,{item:!0,xs:12,"data-aos":"fade-up"},r.a.createElement(v.a,{variant:"subtitle1",color:"textPrimary",className:n.inputTitle},"Full name"),r.a.createElement(P.a,{placeholder:"Your full name",variant:"outlined",size:"medium",name:"fullname",fullWidth:!0,type:"text"})),r.a.createElement(x.a,{item:!0,xs:12,"data-aos":"fade-up"},r.a.createElement(v.a,{variant:"subtitle1",color:"textPrimary",className:n.inputTitle},"E-mail"),r.a.createElement(P.a,{placeholder:"Your e-mail address",variant:"outlined",size:"medium",name:"email",fullWidth:!0,type:"email"})),r.a.createElement(x.a,{item:!0,xs:12,"data-aos":"fade-up"},r.a.createElement(v.a,{variant:"subtitle1",color:"textPrimary",className:n.inputTitle},"Message"),r.a.createElement(P.a,{placeholder:"Your question about our services",variant:"outlined",name:"message",fullWidth:!0,multiline:!0,rows:4})),r.a.createElement(x.a,{item:!0,container:!0,justify:"center",xs:12},r.a.createElement(d.a,{variant:"contained",type:"submit",color:"primary",size:"large"},"Send a request")))))},R=[{cover:"https://assets.maccarianagency.com/the-front/photos/blog/cover1.jpg",title:"Design component systems, not pages.",subtitle:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",h:420},{cover:"https://assets.maccarianagency.com/the-front/photos/blog/cover2.jpg",title:"Run your business on profit, not credit.",subtitle:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",h:300},{cover:"https://assets.maccarianagency.com/the-front/photos/blog/cover3.jpg",title:"Write documentation for everything.",subtitle:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",h:550},{cover:"https://assets.maccarianagency.com/the-front/photos/blog/cover4.jpg",title:"Run your business on profit, not credit.",subtitle:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",h:494},{cover:"https://assets.maccarianagency.com/the-front/photos/blog/cover4.jpg",title:"Build a culture where everyone designs.",subtitle:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",h:350},{cover:"https://assets.maccarianagency.com/the-front/photos/blog/cover3.jpg",title:"Detach your worth from your work.",subtitle:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",h:550},{cover:"https://assets.maccarianagency.com/the-front/photos/blog/cover2.jpg",title:"Designers can learn from interior design.",subtitle:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",h:350},{cover:"https://assets.maccarianagency.com/the-front/photos/blog/cover1.jpg",title:"Build a culture where everyone designs.",subtitle:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",h:518},{cover:"https://assets.maccarianagency.com/the-front/photos/blog/cover2.jpg",title:"Detach your worth from your work.",subtitle:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",h:550},{cover:"https://assets.maccarianagency.com/the-front/photos/blog/cover4.jpg",title:"Write documentation for everything.",subtitle:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",h:450},{cover:"https://assets.maccarianagency.com/the-front/photos/blog/cover1.jpg",title:"Design component systems, not pages.",subtitle:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",h:450},{cover:"https://assets.maccarianagency.com/the-front/photos/blog/cover3.jpg",title:"Run your business on profit, not credit.",subtitle:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",h:320}],B=[{name:"Airbnb",logo:"https://assets.maccarianagency.com/the-front/logos/airbnb.svg"},{name:"Coinbase",logo:"https://assets.maccarianagency.com/the-front/logos/coinbase.svg"},{name:"Dribbble",logo:"https://assets.maccarianagency.com/the-front/logos/dribbble.svg"},{name:"Instagram",logo:"https://assets.maccarianagency.com/the-front/logos/instagram.svg"},{name:"Netflix",logo:"https://assets.maccarianagency.com/the-front/logos/netflix.svg"},{name:"Pinterest",logo:"https://assets.maccarianagency.com/the-front/logos/pinterest.svg"}],C=function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(j,{data:B}),r.a.createElement(o.u,null,r.a.createElement(E,{data:R})),r.a.createElement(o.v,null,r.a.createElement(D,null)))},M=a("Exl5"),z=a("69Y9");t.default=function(){return r.a.createElement(z.a,{component:C,layout:M.a})}}}]);
//# sourceMappingURL=component---pages-portfolio-masonry-js-747e6eec08de5a7bbba9.js.map