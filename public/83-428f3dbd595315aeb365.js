(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{d0t4:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return p}));var n=o("q1tI"),a=o.n(n),r=o("hlFM"),c=o("TTf+"),s=o("VPqE"),l=o("kbOB"),i=[{name:"fontIconClass",type:"string",default:"",description:"The classes of the font icon"},{name:"className",type:"string",default:"",description:"External classes"},{name:"color",type:"string",default:"",description:"Source set for the responsive images"},{name:"title",type:"string",default:"",description:"Title of the icon-text"},{name:"iconProps",type:"object",default:"",description:"Additional properties to pass to the Icon component"},{name:"typographyProps",type:"object",default:"",description:"Additional properties to pass to the Typography component"}],p=function(e){var t=Object.assign({},e);return a.a.createElement("div",t,a.a.createElement(s.e,{title:"Description",gutterBottom:!0},a.a.createElement(s.b,{title:"IconText",path:"src/components/atoms/IconText/IconText.js",description:"Component to display the icon text"})),a.a.createElement(s.e,{title:"Import",gutterBottom:!0},a.a.createElement(s.a,{code:"\nimport { IconText } from 'components/atoms';\n// or\nimport IconText from 'components/atoms/IconText';\n"})),a.a.createElement(s.e,{title:"Props & Methods",gutterBottom:!0},a.a.createElement(s.d,{dataProperties:i})),a.a.createElement(s.e,{title:"Example",gutterBottom:!0},a.a.createElement(a.a.Fragment,null,a.a.createElement(r.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",overflow:"auto"},a.a.createElement(r.a,{display:"flex",justifyContent:"space-between",alignItems:"center",minWidth:"650px"},a.a.createElement(l.c,{fontIconClass:"fas fa-users",color:c.a.pink[50],title:"Users Icon Text"}),a.a.createElement(l.c,{fontIconClass:"far fa-address-book",color:c.a.purple[500],title:"Book Icon Text"}),a.a.createElement(l.c,{fontIconClass:"fab fa-angellist",color:c.a.blue[500],title:"Cool Icon Text"}),a.a.createElement(l.c,{fontIconClass:"fas fa-phone-alt",color:c.a.green[500],title:"Phone Icon Text"}))),a.a.createElement(s.a,{code:'\nimport React from \'react\';\nimport { Box, colors } from \'@material-ui/core\';\nimport { IconText } from \'components/atoms\';\n\nexport default function IconExample() {\n  return (\n    <Box padding={2} border="1px solid #ccc" borderRadius="4px" overflow="auto">\n      <Box display="flex" justifyContent="space-between" alignItems="center" minWidth="650px">\n        <IconText fontIconClass="fas fa-users" color={colors.pink[50]} title="Users Icon Text" />\n        <IconText fontIconClass="far fa-address-book" color={colors.purple[500]} title="Book Icon Text" />\n        <IconText fontIconClass="fab fa-angellist" color={colors.blue[500]} title="Cool Icon Text" />\n        <IconText fontIconClass="fas fa-phone-alt"  color={colors.green[500]} title="Phone Icon Text" />\n      </Box>\n    </Box>\n  );\n}\n'}))))}}}]);
//# sourceMappingURL=83-428f3dbd595315aeb365.js.map