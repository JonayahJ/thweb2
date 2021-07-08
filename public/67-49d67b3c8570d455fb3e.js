(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{iegy:function(t,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return s}));var n=o("q1tI"),r=o.n(n),a=o("hlFM"),i=o("VPqE"),l=o("41Hj"),m=[{name:"subtitle",type:"string",default:"",description:"Job subtitle of the card"},{name:"title",type:"string",default:"",description:"Job title of the card"},{name:"showArrow",type:"bool",default:"false",description:"Should show arrow or not"},{name:"subtitleProps",type:"object",default:"",description:"Additional props to pass to the subtitle Typography component"},{name:"titleProps",type:"object",default:"",description:"Additional props to pass to the title Typography component"},{name:"className",type:"string",default:"",description:"External classes"}],s=function(t){var e=Object.assign({},t);return r.a.createElement("div",e,r.a.createElement(i.e,{title:"Description",gutterBottom:!0},r.a.createElement(i.b,{title:"CardJobMinimal",path:"src/components/organisms/CardJobMinimal/CardJobMinimal.js",description:"Component to display the job minimal card"})),r.a.createElement(i.e,{title:"Import",gutterBottom:!0},r.a.createElement(i.a,{code:"\nimport { CardJobMinimal } from 'components/organisms';\n// or\nimport CardJobMinimal from 'components/organisms/CardJobMinimal';\n"})),r.a.createElement(i.e,{title:"Props & Methods",gutterBottom:!0},r.a.createElement(i.d,{dataProperties:m})),r.a.createElement(i.e,{title:"Basic Example",gutterBottom:!0},r.a.createElement(r.a.Fragment,null,r.a.createElement(a.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px"},r.a.createElement(l.g,{title:"Front-end developer",subtitle:"Paris / Full time"})),r.a.createElement(i.a,{code:"\nimport React from 'react';\nimport { Box } from '@material-ui/core';\nimport { CardJobMinimal } from 'components/organisms';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border=\"1px solid #ccc\" borderRadius=\"4px\">\n      <CardJobMinimal\n        title={'Front-end developer'}\n        subtitle={'Paris / Full time'}\n      />\n    </Box>\n  );\n}\n"}))),r.a.createElement(i.e,{title:"Outlined",gutterBottom:!0},r.a.createElement(r.a.Fragment,null,r.a.createElement(a.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px"},r.a.createElement(l.g,{title:"Front-end developer",subtitle:"Paris / Full time",showArrow:!0,titleProps:{variant:"h6"},subtitleProps:{variant:"subtitle1"}})),r.a.createElement(i.a,{code:"\nimport React from 'react';\nimport { Box } from '@material-ui/core';\nimport { CardJobMinimal } from 'components/organisms';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border=\"1px solid #ccc\" borderRadius=\"4px\">\n      <CardJobMinimal\n        title={'Front-end developer'}\n        subtitle={'Paris / Full time'}\n        showArrow\n        titleProps={{\n            variant: 'h6',\n        }}\n        subtitleProps={{\n            variant: 'subtitle1',\n        }}\n      />\n    </Box>\n  );\n}\n"}))))}}}]);
//# sourceMappingURL=67-49d67b3c8570d455fb3e.js.map