import{u as v}from"./store-BJ_sutDb.js";import{d as f,s as c,r as _,a as o,c as i,f as s,t as r,k as p,u as d,F as g,l as w,_ as k}from"./index-CpWEYAR9.js";const m=u=>{let a,t=u%100;return t>=5&&t<=20?a="лет":(t=t%10,t==1?a="год":t>=2&&t<=4?a="года":a="лет"),a},x={class:"preview"},y={class:"preview-item item-personal"},B={class:"preview-item"},D={class:"kids-list"},b=f({__name:"Preview",setup(u){const a=v(),{userData:t}=c(a),l=_(t.value);return(F,e)=>(o(),i("section",x,[e[4]||(e[4]=s("h1",{class:"sr-only"},"Просмотр данных",-1)),s("div",y,[e[0]||(e[0]=s("p",{class:"preview-title"},"Персональные данные",-1)),s("span",null,r(l.value.name),1),e[1]||(e[1]=p(",")),s("span",null,r(l.value.age)+" "+r(d(m)(l.value.age)),1)]),s("div",B,[e[3]||(e[3]=s("p",{class:"preview-title"},"Дети",-1)),s("ul",D,[(o(!0),i(g,null,w(l.value.kids,n=>(o(),i("li",{class:"kids-item",key:n.id},[s("span",null,r(n.name),1),e[2]||(e[2]=p(", ")),s("span",null,r(n.age)+" "+r(d(m)(n.age)),1)]))),128))])])]))}}),S=k(b,[["__scopeId","data-v-d015b3cf"]]);export{S as default};
