import{i as s,I as u}from"./importImage.8d6b6cf6.js";import{j as o,C as c,a as t,u as i,f as p,g as l,m as f,h as d,r as x,p as h}from"./index.26b20e45.js";function g(){const{type:e,content:r}=i();if(e!=="main")return null;const{name:a,description:n}=r;return o(p,{children:[t(l,{textType:"h3",words:a,splitText:" "}),t(f.p,{variants:d,children:n})]})}function C(){const{type:e,content:r}=i(),{images:a,name:n}=r,m=x.exports.useMemo(()=>new URL("../../assets/"+s(a.portrait),import.meta.url).href,[a.portrait]);return e!=="image"?null:t(u,{name:n,defaultSrc:m,children:t("source",{srcSet:new URL("../../assets/"+s(a.landscape),import.meta.url).href,type:"image/jpg",media:`(max-width:${h.xl}px)`})})}function w(e){return o(c,{...e,children:[t(g,{}),t(C,{})]})}export{w as default};