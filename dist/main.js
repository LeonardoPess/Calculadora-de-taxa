(()=>{"use strict";class e{constructor(e){this.list=document.querySelectorAll(e),this.handleClick=this.handleClick.bind(this)}handleClick({currentTarget:e}){this.list.forEach((e=>e.classList.remove("selected"))),e.classList.add("selected")}handleEvents(){this.list.forEach((e=>e.addEventListener("click",this.handleClick)))}init(){this.handleEvents()}}!function(){const e=document.querySelectorAll(".conversor-wrapper .tipo-venda > *"),t=document.querySelector(".parcelamento"),r=document.querySelector("#oneDayOption"),c=document.querySelector("#twoDayOptionBox"),n=document.querySelector("#threeDayOptionBox");function o({target:e}){"Débito"==e.textContent&&(t.classList.add("hide"),c.classList.add("hide"),n.classList.add("hide"),r.checked=!0),"Crédito"==e.textContent&&(t.classList.remove("hide"),c.classList.remove("hide"),n.classList.remove("hide"))}e.forEach((e=>{e.addEventListener("click",o)}))}(),function(){document.querySelectorAll("[data-plano]");const e=document.querySelector(".conversor-wrapper"),t=document.querySelector(".conversor-wrapper [data-taxa]"),r=document.querySelectorAll(".conversor-wrapper [data-plano]"),c=document.querySelector(".conversor-wrapper #debito"),n=document.querySelector(".conversor-wrapper #parcelamento"),o=document.querySelector(".conversor-wrapper #bandeira"),a=document.querySelectorAll('.conversor-wrapper input[name="recebimento"]'),l=["1.45","2.90","3.59","3.93","4.26","4.59","4.92","5.83","6.16","6.48","6.81","7.13","7.44"],s=["1.48","2.96","4.04","4.58","5.12","5.66","6.20","6.74","7.28","7.82","8.36","8.90","9.44"],d=["1.99","4.73","8.96","10.74","12.01","13.27","14.51","15.72","16.92","18.09","19.23","20.36","21.46"],u=["2.45","4.09","4.78","5.11","5.44","5.77","6.09","6.90","7.23","7.55","7.86","8.18","8.50"],i=["2.48","4.15","5.23","5.77","6.31","6.85","7.39","7.93","8.47","9.01","9.55","10.09","10.63"];let p;function v(e,t){let r=Number(p);1!=e||t||(p=Math.round(100*(r-.01))/100),1==e&&"basico"==t&&(p=Math.round(100*(r-1))/100,"1"==n.value&&(p=Math.round(100*(r-.95))/100)),2!=e||t||(p=Math.round(100*(r-.02))/100),2==e&&"basico"==t&&(p=Math.round(100*(r-1.49))/100,"1"==n.value&&(p=Math.round(100*(r-1.71))/100))}function h(){r.forEach((e=>{e.classList.contains("selected")&&("GigaTon"==e.textContent&&(p=l[0],2==o.value&&(p=u[0]),c.classList.contains("selected")||(p=l[n.value],2==o.value&&(p=u[n.value]),a.forEach(((e,t)=>{e.checked&&0!=t&&v(t)})))),"MegaTon"==e.textContent&&(p=s[0],2==o.value&&(p=i[0]),c.classList.contains("selected")||(p=s[n.value],2==o.value&&(p=i[n.value]),a.forEach(((e,t)=>{e.checked&&0!=t&&v(t)})))),"Ton Básico"==e.textContent&&(p=d[0],c.classList.contains("selected")||(p=d[n.value],a.forEach(((e,t)=>{e.checked&&0!=t&&v(t,"basico")})))),t.innerHTML=p+"%")}))}[n,o].forEach((e=>{e.addEventListener("change",h)})),e.addEventListener("click",h),e.addEventListener("touchstart",h),h()}(),function(){document.querySelectorAll("[data-plano]");const e=document.querySelector(".conversor-wrapper"),t=document.querySelector(".conversor-wrapper [data-tarifa]"),r=document.querySelector(".conversor-wrapper [data-taxa]"),c=document.querySelector(".conversor-wrapper [data-valor]");let n;function o(){const e=r.innerText.replace("%","");let o=c.value,a=Number(o.replace(/\./g,"").replace(",",".").replace("R$ ","")).toFixed(2);n=a/100*e,function(){const e=n.toLocaleString("pt-br",{style:"currency",currency:"BRL"});t.innerHTML=e}()}[document.querySelector(".conversor-wrapper #parcelamento"),document.querySelector(".conversor-wrapper #bandeira")].forEach((e=>{e.addEventListener("change",o)})),c.addEventListener("keyup",o),e.addEventListener("click",o),e.addEventListener("touchstart",o),o()}(),function(){const e=document.querySelectorAll("[data-plano]"),t=document.querySelector(".conversor-wrapper"),r=document.querySelector(".conversor-wrapper [data-tarifa]"),c=document.querySelector(".conversor-wrapper [data-recebe]"),n=document.querySelector(".conversor-wrapper [data-valor");let o;function a(){const e=n.value;let t=Number(e.replace(/\./g,"").replace(",",".").replace("R$ ","")).toFixed(2),a=r.innerHTML.replace("R$&nbsp;","").replace(/\./g,"").replace(",",".");o=t-a,function(){const e=o.toLocaleString("pt-br",{style:"currency",currency:"BRL"});c.innerHTML=e}()}[document.querySelector(".conversor-wrapper #parcelamento"),document.querySelector(".conversor-wrapper #bandeira")].forEach((e=>{e.addEventListener("change",a)})),e.forEach((e=>{e.addEventListener("click",a())})),n.addEventListener("keyup",a),t.addEventListener("click",a),t.addEventListener("touchstart",a),a()}(),function(){const e=document.querySelectorAll("[data-plano]"),t=document.querySelector(".conversor-wrapper"),r=document.querySelector(".conversor-wrapper [data-economia"),c=document.querySelectorAll(".conversor-wrapper [data-plano]"),n=document.querySelector(".conversor-wrapper #debito"),o=document.querySelector(".conversor-wrapper #parcelamento"),a=document.querySelector(".conversor-wrapper #bandeira"),l=document.querySelectorAll('.conversor-wrapper input[name="recebimento"]'),s=document.querySelector(".conversor-wrapper [data-valor"),d=["2.54","3.83","7.37","8.93","9.75","10.68","11.59","11.89","12.76","13.61","14.42","15.23","16.02"],u=["2.51","3.77","6.92","8.16","8.89","9.61","10.31","10.98","11.64","12.27","12.87","13.46","14.02"],i=["2.54","2.64","6.18","7.63","8.57","9.50","10.42","10.82","11.69","12.54","13.37","14,18","14.96"],p=["2.51","3.77","6.92","8.16","8.89","9.61","10.31","10.98","11.64","12.27","12.87","13.46","14.02"];let v;function h(e){let t=Number(v);1==e&&(v=Math.round(100*(t-.94))/100),2==e&&(v=Math.round(100*(t-1.69))/100)}function m(){c.forEach((e=>{e.classList.contains("selected")&&("GigaTon"==e.textContent&&(v=d[0],2==a.value&&(v=i[0]),n.classList.contains("selected")||(v=d[o.value],2==a.value&&(v=i[o.value]),l.forEach(((e,t)=>{e.checked&&0!=t&&h(t)})))),"MegaTon"==e.textContent&&(v=u[0],2==a.value&&(v=p[0]),n.classList.contains("selected")||(v=u[o.value],2==a.value&&(v=p[o.value]),l.forEach(((e,t)=>{e.checked&&0!=t&&h(t)})))),"Ton Básico"==e.textContent&&(v=2),function(){const e=s.value.replace(/\./g,"").replace(",",".").replace("R$ ",""),t=Number(e);v=t/100*Number(v)}(),function(){const e=Number(v).toLocaleString("pt-br",{style:"currency",currency:"BRL"});r.innerHTML=e}())}))}[o,a].forEach((e=>{e.addEventListener("change",m)})),e.forEach((e=>{e.addEventListener("click",m)})),s.addEventListener("keyup",m),t.addEventListener("click",m),t.addEventListener("touchstart",m),m()}(),new e(".planos [data-plano]").init(),new e(".tipo-venda span").init()})();