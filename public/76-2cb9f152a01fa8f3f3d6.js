(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{"4I9C":function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return d}));var n=o("q1tI"),i=o.n(n),r=o("hlFM"),a=o("TTf+"),c=o("VPqE"),s=o("41Hj"),l=o("kbOB"),m=o("Jc4N"),p=[{name:"icon",type:"node",default:"",description:"Whether should show the alternate icon"},{name:"title",type:"string",default:"",description:"The title"},{name:"align",type:"enum",default:"center",description:"The alignment of the items. One of: left, right, center"},{name:"subtitle",type:"string",default:"",description:"The subtitle"},{name:"subtitleProps",type:"object",default:"",description:"Additional props to pass to the subtitle Typography component"},{name:"subtitleVariant",type:"string",default:"body1",description:"Subtitle variant"},{name:"titleProps",type:"object",default:"body1",description:"Additional props to pass to the title Typography component"},{name:"titleVariant",type:"string",default:"h6",description:"Title variant"},{name:"className",type:"string",default:"",description:"External classes"}],d=function(e){var t=Object.assign({},e);return i.a.createElement("div",t,i.a.createElement(c.e,{title:"Description",gutterBottom:!0},i.a.createElement(c.b,{title:"DescriptionListIcon",path:"src/components/organisms/DescriptionListIcon/DescriptionListIcon.js",description:"Component to display the description list with icon"})),i.a.createElement(c.e,{title:"Import",gutterBottom:!0},i.a.createElement(c.a,{code:"\nimport { DescriptionListIcon } from 'components/organisms';\n// or\nimport DescriptionListIcon from 'components/organisms/DescriptionListIcon';\n"})),i.a.createElement(c.e,{title:"Props & Methods",gutterBottom:!0},i.a.createElement(c.d,{dataProperties:p})),i.a.createElement(c.e,{title:"Basic Example",gutterBottom:!0},i.a.createElement(i.a.Fragment,null,i.a.createElement(r.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px"},i.a.createElement(s.n,{title:"Coworking communities",subtitle:"Connect in spaces designed to bring incredible people together. Learn with them and take your project to new heights.",icon:i.a.createElement(l.b,{fontIconClass:"far fa-address-book",size:"large",fontIconColor:a.a.purple[500]})})),i.a.createElement(c.a,{code:'\nimport React from \'react\';\nimport { Box, colors } from \'@material-ui/core\';\nimport { DescriptionListIcon } from \'components/organisms\';\nimport { Icon } from "components/atoms";\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">\n      <DescriptionListIcon\n        title="Coworking communities"\n        subtitle="Connect in spaces designed to bring incredible people together. Learn with them and take your project to new heights."\n        icon={<Icon fontIconClass="far fa-address-book" size="large" fontIconColor={colors.purple[500]} />}\n      />\n    </Box>\n  );\n}\n'}))),i.a.createElement(c.e,{title:"Custom Shadow Example",gutterBottom:!0},i.a.createElement(i.a.Fragment,null,i.a.createElement(r.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px"},i.a.createElement(s.n,{title:"Coworking communities",subtitle:"Connect in spaces designed to bring incredible people together. Learn with them and take your project to new heights.",icon:i.a.createElement(m.c,{fontIconClass:"far fa-address-book",size:"medium",color:a.a.purple})})),i.a.createElement(c.a,{code:'\nimport React from \'react\';\nimport { Box, colors } from \'@material-ui/core\';\nimport { DescriptionListIcon } from \'components/organisms\';\nimport { IconAlternate } from "components/molecules";\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">\n      <DescriptionListIcon\n        title="Coworking communities"\n        subtitle="Connect in spaces designed to bring incredible people together. Learn with them and take your project to new heights."\n        icon={<IconAlternate fontIconClass="far fa-address-book" size="medium" color={colors.purple} />}\n      />\n    </Box>\n  );\n}\n'}))),i.a.createElement(c.e,{title:"LiftUp Effect Example",gutterBottom:!0},i.a.createElement(i.a.Fragment,null,i.a.createElement(r.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px"},i.a.createElement(s.n,{title:"Coworking communities",subtitle:"Connect in spaces designed to bring incredible people together. Learn with them and take your project to new heights.",icon:i.a.createElement(m.c,{fontIconClass:"far fa-address-book",size:"medium",color:a.a.blue}),align:"left"})),i.a.createElement(c.a,{code:'\nimport React from \'react\';\nimport { Box, colors } from \'@material-ui/core\';\nimport { DescriptionListIcon } from \'components/organisms\';\nimport { IconAlternate } from "components/molecules";\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">\n      <DescriptionListIcon\n        title="Coworking communities"\n        subtitle="Connect in spaces designed to bring incredible people together. Learn with them and take your project to new heights."\n        icon={<IconAlternate fontIconClass="far fa-address-book" size="medium" color={colors.blue} />}\n        align="left"\n      />\n    </Box>\n  );\n}\n'}))),i.a.createElement(c.e,{title:"Basic Card with No Border and No Shadow Example",gutterBottom:!0},i.a.createElement(i.a.Fragment,null,i.a.createElement(r.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px"},i.a.createElement(s.n,{title:"Coworking communities",subtitle:"Connect in spaces designed to bring incredible people together. Learn with them and take your project to new heights.",icon:i.a.createElement(m.c,{fontIconClass:"far fa-address-book",size:"medium",color:a.a.blue}),align:"right"})),i.a.createElement(c.a,{code:'\nimport React from \'react\';\nimport { Box, colors } from \'@material-ui/core\';\nimport { DescriptionListIcon } from \'components/organisms\';\nimport { IconAlternate } from "components/molecules";\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">\n      <DescriptionListIcon\n        title="Coworking communities"\n        subtitle="Connect in spaces designed to bring incredible people together. Learn with them and take your project to new heights."\n        icon={<IconAlternate fontIconClass="far fa-address-book" size="medium" color={colors.blue} />}\n        align="right"\n      />\n    </Box>\n  );\n}\n'}))))}}}]);
//# sourceMappingURL=76-2cb9f152a01fa8f3f3d6.js.map