(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{"/bAl":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return d}));var r=t("q1tI"),n=t.n(r),o=t("hlFM"),i=t("tRbT"),m=t("ofer"),c=t("VPqE"),s=t("41Hj"),l=[{name:"imageSrc",type:"string",default:"",description:"Side image"},{name:"backgroundColor",type:"string",default:"",description:"Background color of the hero"},{name:"children",type:"node",default:"",description:"Children to placed inside the hero"},{name:"imageSrcSet",type:"string",default:"",description:"Side image srcset"},{name:"reverse",type:"bool",default:"",description:"Should show in reverse order"},{name:"className",type:"string",default:"",description:"External classes"}],d=function(e){var a=Object.assign({},e);return n.a.createElement("div",a,n.a.createElement(c.e,{title:"Description",gutterBottom:!0},n.a.createElement(c.b,{title:"HeroSideImage",path:"src/components/organisms/HeroSideImage/HeroSideImage.js",description:"Component to display the side image hero"})),n.a.createElement(c.e,{title:"Import",gutterBottom:!0},n.a.createElement(c.a,{code:"\nimport { HeroSideImage } from 'components/organisms';\n// or\nimport HeroSideImage from 'components/organisms/HeroSideImage';\n"})),n.a.createElement(c.e,{title:"Props & Methods",gutterBottom:!0},n.a.createElement(c.d,{dataProperties:l})),n.a.createElement(c.e,{title:"Basic Example",gutterBottom:!0},n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px"},n.a.createElement(s.q,{imageSrc:"https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery1.jpg"},n.a.createElement(i.a,{container:!0,spacing:4},n.a.createElement(i.a,{item:!0,xs:12},n.a.createElement(m.a,{variant:"h4"},"Join the world's leading companies at TheFront 2020")),n.a.createElement(i.a,{item:!0,xs:12},n.a.createElement(m.a,{variant:"h6"},"Download our overview and a member of our specialist team will be in touch."))))),n.a.createElement(c.a,{code:"\nimport React from 'react';\nimport { Box, Grid, Typography } from '@material-ui/core';\nimport { HeroSideImage } from 'components/organisms';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border=\"1px solid #ccc\" borderRadius=\"4px\">\n      <HeroSideImage imageSrc=\"https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery1.jpg\">\n        <Grid container spacing={4}>\n          <Grid item xs={12}>\n            <Typography variant=\"h4\" style={{ color: isMd ? 'inherit' : 'white' }}>\n              Join the world's leading companies at TheFront 2020\n            </Typography>\n          </Grid>\n          <Grid item xs={12}>\n            <Typography variant=\"h6\" style={{ color: isMd ? 'inherit' : 'white' }}>\n              Download our overview and a member of our specialist team will be in touch.\n            </Typography>\n          </Grid>\n        </Grid>\n      </HeroSideImage>\n    </Box>\n  );\n}\n"}))),n.a.createElement(c.e,{title:"Reverse Order Example",gutterBottom:!0},n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px"},n.a.createElement(s.q,{imageSrc:"https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery2.jpg",reverse:!0},n.a.createElement(i.a,{container:!0,spacing:4},n.a.createElement(i.a,{item:!0,xs:12},n.a.createElement(m.a,{variant:"h4"},"Join the world's leading companies at TheFront 2020")),n.a.createElement(i.a,{item:!0,xs:12},n.a.createElement(m.a,{variant:"h6"},"Download our overview and a member of our specialist team will be in touch."))))),n.a.createElement(c.a,{code:'\nimport React from \'react\';\nimport { Box, Grid, Typography } from \'@material-ui/core\';\nimport { HeroSideImage } from \'components/organisms\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">\n      <HeroSideImage imageSrc="https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery2.jpg" reverse>\n        <Grid container spacing={4}>\n          <Grid item xs={12}>\n            <Typography variant="h4">\n              Join the world\'s leading companies at TheFront 2020\n            </Typography>\n          </Grid>\n          <Grid item xs={12}>\n            <Typography variant="h6">\n              Download our overview and a member of our specialist team will be in touch.\n            </Typography>\n          </Grid>\n        </Grid>\n      </HeroSideImage>\n    </Box>\n  );\n}\n'}))))}}}]);
//# sourceMappingURL=79-7161723589913efab732.js.map