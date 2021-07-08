(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{"2Jut":function(e,o,t){"use strict";t.r(o),t.d(o,"default",(function(){return h}));var r=t("q1tI"),a=t.n(r),n=t("hlFM"),i=t("tRbT"),l=t("ofer"),m=t("Z3vd"),c=t("TTf+"),s=t("VPqE"),d=t("41Hj"),p=[{name:"backgroundColor",type:"string",default:"",description:"Background color of the hero"},{name:"backgroundImg",type:"string",default:"",description:"Background image of the hero"},{name:"backgroundPosition",type:"string",default:"",description:"Background position of the hero"},{name:"children",type:"node",default:"",description:"Children to placed inside the hero"},{name:"contentSectionClassName",type:"string",default:"",description:"Custom classes for the content section"},{name:"disbaleCoverOpacity",type:"bool",default:"",description:"Should disable here cover opacity"},{name:"className",type:"string",default:"",description:"External classes"}],h=function(e){var o=Object.assign({},e);return a.a.createElement("div",o,a.a.createElement(s.e,{title:"Description",gutterBottom:!0},a.a.createElement(s.b,{title:"HeroBackground",path:"src/components/organisms/HeroBackground/HeroBackground.js",description:"Component to display the background hero"})),a.a.createElement(s.e,{title:"Import",gutterBottom:!0},a.a.createElement(s.a,{code:"\nimport { HeroBackground } from 'components/organisms';\n// or\nimport HeroBackground from 'components/organisms/HeroBackground';\n"})),a.a.createElement(s.e,{title:"Props & Methods",gutterBottom:!0},a.a.createElement(s.d,{dataProperties:p})),a.a.createElement(s.e,{title:"Basic Example",gutterBottom:!0},a.a.createElement(a.a.Fragment,null,a.a.createElement(n.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px"},a.a.createElement(d.o,null,a.a.createElement(i.a,{container:!0,spacing:4},a.a.createElement(i.a,{item:!0,xs:12},a.a.createElement(l.a,{variant:"h3",style:{color:"white",fontWeight:900}},"Join the world's leading companies at TheFront 2020")),a.a.createElement(i.a,{item:!0,xs:12,md:6},a.a.createElement(l.a,{variant:"h5",style:{color:"white"},gutterBottom:!0},"Whether it’s Porsche, Stripe, Intercom, Amazon, or Google, something about TheFront works for our global partners."),a.a.createElement(l.a,{variant:"h5",style:{color:"white"}},"Want more information? Download our overview and a member of our specialist team will be in touch to talk about your goals for TheFront 2020.")),a.a.createElement(i.a,{item:!0,xs:12,md:6},a.a.createElement(m.a,{variant:"contained"},"Download exhibitor overview"))))),a.a.createElement(s.a,{code:"\nimport React from 'react';\nimport { Box, Grid, Typography, Button } from '@material-ui/core';\nimport { HeroBackground } from 'components/organisms';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border=\"1px solid #ccc\" borderRadius=\"4px\">\n      <HeroBackground>\n        <Grid container spacing={4}>\n          <Grid item xs={12}>\n            <Typography variant=\"h3\" style={{ color: 'white', fontWeight: 900, }}>\n                Join the world's leading companies at TheFront 2020\n            </Typography>\n          </Grid>\n          <Grid item xs={12} md={6}>\n            <Typography variant=\"h5\" style={{ color: 'white' }} gutterBottom>\n                Whether it’s Porsche, Stripe, Intercom, Amazon, or Google, something about TheFront works for our global partners.\n            </Typography>\n            <Typography variant=\"h5\" style={{ color: 'white' }}>\n                Want more information? Download our overview and a member of our specialist team will be in touch to talk about your goals for TheFront 2020.\n            </Typography>\n          </Grid>\n          <Grid item xs={12} md={6}>\n            <Button variant=\"contained\">Download exhibitor overview</Button>\n          </Grid>\n        </Grid>\n      </HeroBackground>\n    </Box>\n  );\n}\n"}))),a.a.createElement(s.e,{title:"Custom Background Color Example",gutterBottom:!0},a.a.createElement(a.a.Fragment,null,a.a.createElement(n.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px"},a.a.createElement(d.o,{backgroundColor:c.a.blue[500]},a.a.createElement(i.a,{container:!0,spacing:4},a.a.createElement(i.a,{item:!0,xs:12},a.a.createElement(l.a,{variant:"h3",style:{color:"white",fontWeight:900}},"Join the world's leading companies at TheFront 2020")),a.a.createElement(i.a,{item:!0,xs:12,md:6},a.a.createElement(l.a,{variant:"h5",style:{color:"white"},gutterBottom:!0},"Whether it’s Porsche, Stripe, Intercom, Amazon, or Google, something about TheFront works for our global partners."),a.a.createElement(l.a,{variant:"h5",style:{color:"white"}},"Want more information? Download our overview and a member of our specialist team will be in touch to talk about your goals for TheFront 2020.")),a.a.createElement(i.a,{item:!0,xs:12,md:6},a.a.createElement(m.a,{variant:"contained"},"Download exhibitor overview"))))),a.a.createElement(s.a,{code:"\nimport React from 'react';\nimport { Box, Grid, Typography, Button, colors } from '@material-ui/core';\nimport { HeroBackground } from 'components/organisms';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border=\"1px solid #ccc\" borderRadius=\"4px\">\n      <HeroBackground backgroundColor={colors.blue[500]}>\n        <Grid container spacing={4}>\n          <Grid item xs={12}>\n            <Typography variant=\"h3\" style={{ color: 'white', fontWeight: 900, }}>\n                Join the world's leading companies at TheFront 2020\n            </Typography>\n          </Grid>\n          <Grid item xs={12} md={6}>\n            <Typography variant=\"h5\" style={{ color: 'white' }} gutterBottom>\n                Whether it’s Porsche, Stripe, Intercom, Amazon, or Google, something about TheFront works for our global partners.\n            </Typography>\n            <Typography variant=\"h5\" style={{ color: 'white' }}>\n                Want more information? Download our overview and a member of our specialist team will be in touch to talk about your goals for TheFront 2020.\n            </Typography>\n          </Grid>\n          <Grid item xs={12} md={6}>\n            <Button variant=\"contained\">Download exhibitor overview</Button>\n          </Grid>\n        </Grid>\n      </HeroBackground>\n    </Box>\n  );\n}\n"}))),a.a.createElement(s.e,{title:"Custom Background Image Example",gutterBottom:!0},a.a.createElement(a.a.Fragment,null,a.a.createElement(n.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px"},a.a.createElement(d.o,{backgroundImg:"https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery3.jpg"},a.a.createElement(i.a,{container:!0,spacing:4},a.a.createElement(i.a,{item:!0,xs:12},a.a.createElement(l.a,{variant:"h3",style:{color:"white",fontWeight:900}},"Join the world's leading companies at TheFront 2020")),a.a.createElement(i.a,{item:!0,xs:12,md:6},a.a.createElement(l.a,{variant:"h5",style:{color:"white"},gutterBottom:!0},"Whether it’s Porsche, Stripe, Intercom, Amazon, or Google, something about TheFront works for our global partners."),a.a.createElement(l.a,{variant:"h5",style:{color:"white"}},"Want more information? Download our overview and a member of our specialist team will be in touch to talk about your goals for TheFront 2020.")),a.a.createElement(i.a,{item:!0,xs:12,md:6},a.a.createElement(m.a,{variant:"contained"},"Download exhibitor overview"))))),a.a.createElement(s.a,{code:'\nimport React from \'react\';\nimport { Box, Grid, Typography, Button, colors } from \'@material-ui/core\';\nimport { HeroBackground } from \'components/organisms\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">\n      <HeroBackground backgroundImg="https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery3.jpg">\n        <Grid container spacing={4}>\n          <Grid item xs={12}>\n            <Typography variant="h3" style={{ color: \'white\', fontWeight: 900, }}>\n              Join the world\'s leading companies at TheFront 2020\n            </Typography>\n          </Grid>\n          <Grid item xs={12} md={6}>\n            <Typography variant="h5" style={{ color: \'white\' }} gutterBottom>\n              Whether it’s Porsche, Stripe, Intercom, Amazon, or Google, something about TheFront works for our global partners.\n            </Typography>\n            <Typography variant="h5" style={{ color: \'white\' }}>\n              Want more information? Download our overview and a member of our specialist team will be in touch to talk about your goals for TheFront 2020.\n            </Typography>\n          </Grid>\n          <Grid item xs={12} md={6}>\n            <Button variant="contained">Download exhibitor overview</Button>\n          </Grid>\n        </Grid>\n      </HeroBackground>\n    </Box>\n  );\n}\n'}))))}}}]);
//# sourceMappingURL=77-c7deb0731089cbb5ebe0.js.map