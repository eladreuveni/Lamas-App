(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7061:function(e,t,s){Promise.resolve().then(s.bind(s,8042)),Promise.resolve().then(s.bind(s,443)),Promise.resolve().then(s.bind(s,7356))},8042:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return b}});var a=s(7437),i=s(2265),l=s(5133),n=s(6691),r=s.n(n),c=s(7356),o=e=>{let{val:t,disabled:s}=e,{selectedTags:i,toggleTag:l}=(0,c.useAppContext)();return(0,a.jsx)("div",{onClick:e=>{s||(l(t),e.stopPropagation())},className:"no-select ".concat(!s&&"hover:animate-bounce2 cursor-pointer"," ").concat(i.has(t)?"text-sns-light-blue bg-sns-dark-blue":"bg-sns-light-blue text-sns-dark-blue","\n            shadow-xl rounded-lg p-1 transition-colors"),children:t})},h={src:"/_next/static/media/caret-left.5ee5f9cc.svg",height:512,width:256,blurWidth:0,blurHeight:0},u={src:"/_next/static/media/lightbulb.3fc91e6d.svg",height:512,width:384,blurWidth:0,blurHeight:0},x=e=>{let{fullSize:t,data:s}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"flex flex-wrap gap-2 ".concat(t?"order-3 self-center":""," flex-1 items-end"),children:s.tags.map(e=>(0,a.jsx)(o,{val:e,disabled:!0},e))}),(0,a.jsxs)("div",{className:"".concat(t?"font-semibold text-2xl pb-5":""," flex items-start gap-2 text-right"),children:[!t&&(0,a.jsx)(r(),{className:"w-4",priority:!0,src:h,alt:"title"}),s.text]}),t?(0,a.jsx)("div",{className:"",children:s.insights.map((e,t)=>(0,a.jsxs)("div",{className:"flex items-start gap-2 py-2 text-right",children:[(0,a.jsx)(r(),{className:"w-4",priority:!0,src:u,alt:"insight"}),(0,a.jsx)("span",{className:"",children:e})]},t))}):""]})};let d={card:{full:"z-10 h-fit w-fit p-5 flex gap-5",mini:"cursor-pointer w-80 h-80"},imgCont:{full:"basis-3/5",mini:"w-full h-1/2"},expCont:{full:"basis-2/5",mini:"px-1 pt-2"}};var g=e=>{let{fullSize:t,data:s}=e,{setSelectedCard:i}=(0,c.useAppContext)(),n=t?"full":"mini";return(0,a.jsxs)(l.Z,{sx:{boxShadow:10},onClick:()=>{t||i(s)},className:d.card[n],children:[t&&(0,a.jsx)("img",{onClick:e=>{console.log(e),i(null)},className:"cursor-pointer fixed top-2 left-2 w-5 h-5",src:"/icons/x.svg",alt:"x"}),(0,a.jsx)("div",{className:" ".concat(d.imgCont[n]),children:(0,a.jsx)("img",{src:s.img_path,alt:"",className:"h-full w-full"})}),(0,a.jsx)("div",{className:"flex flex-col gap-2 ".concat(d.expCont[n]),children:(0,a.jsx)(x,{fullSize:t,data:s})})]})},p=()=>{let{filteredCards:e}=(0,c.useAppContext)();return(0,a.jsx)("div",{className:"flex my-5 gap-10 m-auto flex-wrap",children:e.map(e=>(0,a.jsx)(g,{data:e},e.graph_id))})},m=s(4393),f=s(1855);let v=(0,m.ZP)(e=>(0,a.jsx)(f.Z,{value:e.value,InputLabelProps:{shrink:!1},...e}))(e=>{let{theme:t}=e;return{"& .MuiFormLabel-root":{left:"unset",right:"27px"}}});var j=()=>{let[e,t]=(0,i.useState)(""),{setSearchText:s,setSelectedCard:l,filteredCards:n}=(0,c.useAppContext)();return(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsx)(v,{onChange:e=>{t(e.target.value)},onKeyDown:t=>{"Enter"===t.key&&s(e)},value:e,className:"flex-1 text-right",placeholder:"פה מחפשים",variant:"outlined"}),(0,a.jsx)("img",{onClick:()=>s(e),src:"/icons/search.svg",alt:"חיפוש",className:"cursor-pointer h-8"}),(0,a.jsx)("img",{onClick:()=>{let e=Math.floor(Math.random()*n.length);l(n[e])},src:"/icons/random.png",alt:"רנדומלי",className:"cursor-pointer h-10"})]})},_=()=>{let{allTags:e}=(0,c.useAppContext)();return(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)("h1",{className:"basis-1/5 font-semibold text-xl",children:"אלו הגרפים המגניבים שלי"}),(0,a.jsx)(j,{}),(0,a.jsx)("div",{className:"basis-2/5 flex items-center justify-center flex-wrap gap-2",children:Array.from(e).map(e=>(0,a.jsx)(o,{val:e},e))})]})},b=()=>{let{selectedCard:e,setSelectedCard:t}=(0,c.useAppContext)(),s=(0,i.useRef)(null);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"m-auto w-11/12 mt-6",children:[(0,a.jsx)(_,{}),(0,a.jsx)(p,{})]}),e&&(0,a.jsx)("div",{onClick:e=>{var a;(null===(a=s.current)||void 0===a?void 0:a.contains(e.target))||t(null)},className:"w-full h-full fixed top-0 bottom-0 bg-black bg-opacity-50",children:(0,a.jsx)("div",{ref:s,className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12",children:(0,a.jsx)(g,{fullSize:!0,data:e})})})]})}},443:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return n}});var a=s(7437);s(2265);var i=e=>{let{href:t,src:s,alt:i}=e;return(0,a.jsx)("span",{className:"h-full p-1 hover:animate-pulse",children:(0,a.jsx)("a",{href:t,target:"_blank",children:(0,a.jsx)("img",{src:s,alt:i,className:"h-full"})})})},l=s(7356),n=()=>{let{selectedCard:e}=(0,l.useAppContext)();return(0,a.jsxs)("menu",{className:"".concat(e?"-bottom-10":"bottom-0"," transition-all duration-1000 fixed w-full h-10 px-10 flex justify-between items-center bg-sns-light-blue"),children:[(0,a.jsxs)("div",{className:"h-full flex gap-5 items-center",children:[(0,a.jsx)("span",{className:"text-2xl font-bold no-select",children:"צרו איתי קשר: "}),(0,a.jsx)(i,{href:"https://github.com/eladreuveni/Lamas",src:"/icons/github.svg",alt:"github"}),(0,a.jsx)(i,{href:"https://twitter.com/elado_blanco",src:"/icons/x-twitter.svg",alt:"twitter"}),(0,a.jsx)(i,{href:"mailto:elad.reuveni.7@gmail.com",src:"/icons/email.svg",alt:"email"}),(0,a.jsx)(i,{href:"https://www.linkedin.com/in/elad-reuveni-124609189/",src:"/icons/linkedin.svg",alt:"linkedin"})]}),(0,a.jsxs)("div",{className:"flex flex-col justify-center items-center text-xs no-select",children:[(0,a.jsx)("span",{children:"Ⓒ כל הזכויות שמורות לאלעד ראובני Ⓒ"}),(0,a.jsx)("span",{children:'*הנתונים לקוחים מסקר הוצאות משקי בית בין השנים 2012-2021, הלמ"ס*'})]})]})}},7356:function(e,t,s){"use strict";s.r(t),s.d(t,{AppContextProvider:function(){return c},useAppContext:function(){return r}});var a=s(7437),i=s(2265);let l=s(1913),n=(0,i.createContext)(void 0),r=()=>{let e=(0,i.useContext)(n);if(!e)throw Error("useAppContext must be used within an AppContextProvider");return e},c=e=>{let{children:t}=e,[s,r]=(0,i.useState)(l),[c,o]=(0,i.useState)(null),[h,u]=(0,i.useState)(new Set),[x,d]=(0,i.useState)(""),g=(0,i.useMemo)(()=>{let e=new Set;return s.forEach(t=>{t.tags.forEach(t=>{e.add(t)})}),e},[s]),p=(0,i.useMemo)(()=>{let e=s;return x&&(e=e.filter(e=>{let t=e.text.includes(x),s=e.insights.some(e=>e.includes(x));return t&&s})),h.size&&(e=e.filter(e=>{let t=e.tags.some(e=>h.has(e));return t})),e},[h,x]);return(0,a.jsx)(n.Provider,{value:{allGraphsData:s,allTags:g,selectedTags:h,toggleTag:e=>{u(t=>{let s=new Set(t);return s.delete(e)||s.add(e),s})},filteredCards:p,selectedCard:c,setSelectedCard:o,setSearchText:d},children:t})}},1913:function(e){"use strict";e.exports=JSON.parse('[{"graph_id":1,"img_path":"graphs/allowences21.png","tags":["קצבאות","הכנסות","רמת דתיות","דת"],"text":"הכנסות מקצבאות כאחוז מכלל ההכנסה של משק הבית, מחולק לפי דת ורמת דתיות של משק הבית.","insights":["לפי הגרף נראה שבאופן כללי ככל שמשק הבית מקיים אורך חיים דתי יותר, הכנסתו תלויה יותר בקצבאות."]},{"graph_id":2,"img_path":"graphs/food_incone_12_21.png","tags":["אוכל","הכנסות","הוצאות","מספר נפשות"],"text":"הוצאה על מזון כאחוז מההכנסה נטו של משק בית, מחולק לפי כמות נפשות במשק הבית.","insights":["ניתן לראות כי באופן כללי כמות הנפשות במשק הבית משפיע באופן ישיר על אחוז ההוצאה על מזון.","באופן לא צפוי, משקי בית בהם 3-5 נפשות מוציאות *פחות* מהכנסתן על מזון בהשוואה למשקי בית עם 1-2 נפשות.","ניתן לראות שבשנת 2020 הייתה ירידה חדה בהוצאה (אפשרי שהמדידה הטעתה באופן כלשהו)."]},{"graph_id":3,"img_path":"graphs/fruits_veg_food_12_21.png","tags":["אוכל","פירות","הוצאות","ירקות"],"text":"הוצאה על פירות וירקות כאחוז מסך ההוצאה של משק בית על אוכל.","insights":["ניתן לראות שההוצאה על פירות וירקות כאחוז מהמזון גדלה בעשר השנים האחרונות, שתי השערות הגיוניות הן:","1. מחירי הירקות עלו בטווח השנים הנתון.","2. אנשים קונים יותר ירקות ופירות."]},{"graph_id":4,"img_path":"graphs/housing_income_12_21.png","tags":["דיור","הכנסות","הוצאות","עשירון"],"text":"הוצאה על דיור כאחוז מההכנסה נטו של משק בית, מחולק על פי עשירונים.","insights":["ניתן לראות כי על פי הצפוי, העשירונים העשירים יותר מוציאים באופן יחסי פחות על דיור.","עשירונים 1-2 מוציאים בממוצע על דיור כ40 אחוז מהכנסתם בעוד עשירונים 9-10 מוציאים כ20-23 אחוזים בלבד."]},{"graph_id":5,"img_path":"graphs/meat_chicken_food_12_21.png","tags":["בשר","עוף","הוצאות","אוכל","פריפריה","מרכז"],"text":"הוצאה על עוף ובשר כאחוז מסך ההוצאה על אוכל, מחולק על פי מדד פריפריאליות.","insights":["ניתן לראות שבעלי המדד האמצעי (לא פריפריה ולא מרכז), מוציאים על בשר ועוף יותר ממשקי בית בפריפריה ובמרכז."]},{"graph_id":6,"img_path":"graphs/eat_out_12_21.png","tags":["אכילה בחוץ","הוצאות","אוכל","פריפריה","מרכז"],"text":"הוצאה על מזון בחוץ כאחוז מסך ההוצאה על אוכל, מחולק על פי מדד פריפריאליות.","insights":["ניתן לראות שמשקי בית במרכז מוציאים יותר על אוכל בחוץ (מתוך סך ההוצאה) מאשר בפריפריה."]},{"graph_id":7,"img_path":"graphs/alcohol_dist_periferia_12_21.png","tags":["אלכוהול","שתייה","הוצאות","אוכל","פריפריה","מרכז"],"text":"חלוקת ההוצאה על סוגים שונים של אלכוהול, מחולק על פי מדד פריפריאליות.","insights":["ככל שמשק הבית גר במקום מרכזי יותר, כך גדלה ההוצאה שלו על יין כאחוז מסך ההוצאה על אלכוהול.","באופן הפוך, ככל שמשק הבית יותר פריפריאלי מוציאים יותר על וודקה כאחוז מסך מההוצאה על אלכוהול."]},{"graph_id":8,"img_path":"graphs/alcohol_dist_decile_12_21.png","tags":["אלכוהול","שתייה","הוצאות","אוכל","עשירון"],"text":"סך ההוצאה על אלכוהול וחלוקה לפי משקאות, מחולק על פי עשירון.","insights":["ניתן לראות באופן צפוי שמשקי בית עשירים מוציאים יותר כסף על משקאות אלכוהוליים.","בגרף לא ציינתי אחוזים, אך ניתן לראות את אחוז היין הגדל כאשר עולים בעשירון."]}]')}},function(e){e.O(0,[252,971,472,744],function(){return e(e.s=7061)}),_N_E=e.O()}]);