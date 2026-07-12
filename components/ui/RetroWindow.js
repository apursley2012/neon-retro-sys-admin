import{j as e}from"../../assets/jsx-runtime.js";import{m}from"../../assets/proxy.js";import{c as t}from"../../assets/createLucideIcon.js";/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M5 12h14",key:"1ays0h"}]],y=t("minus",k);/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],h=t("square",p);/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],g=t("x",x);function w({title:a,children:s,color:r="magenta",className:i="",onClose:c,draggable:o=!1}){const n={magenta:"border-y2k-magenta shadow-retro-magenta",cyan:"border-y2k-cyan shadow-retro-cyan",lime:"border-y2k-lime shadow-retro-lime",purple:"border-y2k-purple shadow-retro-purple"},l={magenta:"bg-y2k-magenta",cyan:"bg-y2k-cyan",lime:"bg-y2k-lime",purple:"bg-y2k-purple"},d=o?m.div:"div",b=o?{drag:!0,dragMomentum:!1,dragElastic:.1}:{};return e.jsxs(d,{...b,className:`bg-y2k-black border-2 ${n[r]} flex flex-col ${i}`,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{duration:.2},children:[e.jsxs("div",{className:`${l[r]} text-y2k-black px-2 py-1 flex justify-between items-center border-b-2 border-y2k-black cursor-move`,children:[e.jsx("div",{className:"font-mono font-bold text-sm truncate pr-4",children:a}),e.jsxs("div",{className:"flex gap-1 shrink-0",children:[e.jsx("button",{className:"bg-y2k-black text-white p-0.5 border border-y2k-black hover:bg-white hover:text-black transition-colors",children:e.jsx(y,{size:12})}),e.jsx("button",{className:"bg-y2k-black text-white p-0.5 border border-y2k-black hover:bg-white hover:text-black transition-colors",children:e.jsx(h,{size:12})}),e.jsx("button",{onClick:c,className:"bg-y2k-black text-white p-0.5 border border-y2k-black hover:bg-red-500 hover:text-white transition-colors",children:e.jsx(g,{size:12})})]})]}),e.jsx("div",{className:"p-4 flex-1 overflow-auto bg-y2k-gray/50",children:s})]})}export{w as R};
