(this.webpackJsonptrudysgallery=this.webpackJsonptrudysgallery||[]).push([[0],{105:function(e,t,c){},113:function(e,t,c){},114:function(e,t,c){},115:function(e,t,c){},116:function(e,t,c){},117:function(e,t,c){},118:function(e,t,c){},152:function(e,t,c){},154:function(e,t,c){},155:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(52),i=c.n(r),s=(c(61),c(4)),o=(c(62),c(7)),u=c(5),l=(c(63),c(0));var d=function(e){return Object(l.jsxs)("div",{className:"aboutBlurb",children:[Object(l.jsx)("p",{children:"I am a painter and crafter who loves the natural world and spiritual realm."}),Object(l.jsx)("p",{children:"I love working with Terra Cotta pots and also making empowering feminine pieces."}),Object(l.jsx)("p",{children:"Reach out to me to discuss making your idea a reality!"})]})},j=c(13),b=c(8),m={templateID:"template_g4r8hhf",userID:"user_EmHot90cGgneEKKLIjOll"},h=c(25),p=function(e,t){return t.map((function(t){return t.productInfo.id===e.id?Object(b.a)(Object(b.a)({},t),{},{quantity:++t.quantity}):t}))},f=function(e,t){return t.some((function(t){return t.productInfo.id===e.id}))};c(65);var O=function(e){var t=e.currentCart,c=Object(n.useState)(!0),a=Object(s.a)(c,2),r=a[0],i=a[1],o=Object(n.useState)({feedbackName:"",feedbackEmail:"",feedbackMessage:"",feedbackCart:{}}),u=Object(s.a)(o,2),d=u[0],h=u[1],p=Object(n.useState)(!1),f=Object(s.a)(p,2),O=f[0],x=f[1],g=Object(n.useState)(!1),v=Object(s.a)(g,2),y=v[0],N=v[1],k=function(e,t){window.emailjs.send("default_service",e,t).then((function(e){N(!0)}),(function(e){console.log(e),alert("Sorry, we could not send your message! Please email trudysgallery@gmail.com instead.")}))},C=function(e){var t=e.target,c=t.name,n=t.value;h(Object(b.a)(Object(b.a)({},d),{},Object(j.a)({},c,n)))};return O&&y?Object(l.jsx)("h2",{children:"Thank You! I will reach out to you shortly!."}):Object(l.jsxs)("div",{className:"contact-page",children:[Object(l.jsx)("h1",{className:"contact-page-welcome-text",children:"Let's make art together!"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),k(m.templateID,d),x(!0)},className:"contact-page-form",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{onChange:C,value:d.feedbackName,name:"feedbackName",type:"text",id:"name",maxLength:"75",required:!0})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(l.jsx)("input",{onChange:C,value:d.feedbackEmail,name:"feedbackEmail",type:"email",id:"email",maxLength:"75",required:!0})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{onChange:C,value:d.feedbackMessage,name:"feedbackMessage",id:"message",placeholder:"Contact me to order, discuss custom requests, or talk about anything! Please include your address if you would like to place an order.",rows:"5",cols:"50",required:!0})]}),Object(l.jsxs)("div",{className:"contact-page-include-cart-checkbox",children:[Object(l.jsx)("label",{htmlFor:"cardCheckbox",children:"Include current wishlist in message?"}),Object(l.jsx)("input",{checked:r,onChange:function(e){i((function(e){return!e}));var c=e.currentTarget.checked?t.reduce((function(e,t){return e+t.quantity+" "+t.productInfo.title+";"}),""):{};h(Object(b.a)(Object(b.a)({},d),{},{feedbackCart:c}))},type:"checkbox",id:"cardCheckbox",name:"Include cart?",value:d.feedbackCart})]}),Object(l.jsx)("div",{className:"contact-page-submit-section",children:Object(l.jsx)("button",{className:"contact-page-submit-button",type:"submit",children:"Submit"})})]})]})},x=c(19),g=c(2),v=c.n(g),y=c(3),N="ARTWORK",k=5e3;function C(e){return new Promise((function(t,c){setTimeout((function(){c(new Error("Failed to find product"))}),e)}))}function w(e,t,c){return I.apply(this,arguments)}function I(){return(I=Object(y.a)(v.a.mark((function e(t,c,n){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(N).return().where(c.eq("id",n)).one();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(y.a)(v.a.mark((function e(t,c,n){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.race([C(k),w(t,c,n)]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){return q.apply(this,arguments)}function q(){return(q=Object(y.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(N).return().all();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c(105);var E=function(e){var t=e.data,c=e.onLoadData,a=Object(n.useState)(!1),r=Object(s.a)(a,2),i=r[0],u=r[1],d=function(e){return e.preventDefault()},j=Object(x.b)().db;return Object(n.useEffect)((function(){0===t.length&&D(j).then((function(e){c(e)})),u(!0)}),[j,c,t]),i?Object(l.jsx)("div",{className:"gallery",children:Object(l.jsx)("div",{className:"gallery-images",children:t.map((function(e){return Object(l.jsx)(o.b,{to:"/gallery/".concat(e.id),children:Object(l.jsx)("img",{className:"gallery-image",src:e.galleryimage,alt:e.title,onDragStart:d})},e.id)}))})}):Object(l.jsx)("div",{})};c(113);var T=function(e){var t=e.productTitle,c=e.images,a=c.length-1,r=Object(n.useState)(0),i=Object(s.a)(r,2),o=i[0],u=i[1];return Object(l.jsxs)("div",{className:"product-pictures",children:[Object(l.jsx)("span",{className:"material-icons rotate-left-button",onClick:function(){u(0===o?a:o-1)},children:"undo"}),Object(l.jsx)("img",{className:"product-pictures-image",src:c[o],alt:"Pictures of "+t}),Object(l.jsx)("span",{className:"material-icons rotate-right-button",onClick:function(){u(o===a?0:o+1)},children:"undo"})]})};c(114);var F=function(e){var t,c=Object(n.useState)(),a=Object(s.a)(c,2),r=a[0],i=a[1],o=Object(n.useState)(!1),d=Object(s.a)(o,2),j=d[0],b=d[1],m=Object(x.b)(),h=m.db,p=m.e,f=e.data,O=Object(u.g)().productId,g=Object(u.f)();return Object(n.useEffect)((function(){f.length>0?(i(function(e,t){return e.find((function(e){return e.id===t}))}(f,O)),b(!0)):function(e,t,c){return S.apply(this,arguments)}(h,p,O).then((function(e){i(e),b(!0)})).catch((function(e){console.log(e),g.push("/gallery")}))}),[h,p,f,g,O]),j?Object(l.jsxs)("div",{className:"current-product",children:[Object(l.jsx)("div",{className:"current-product-image-page-half",children:Object(l.jsx)(T,{images:(t=r,Object.keys(t).filter((function(e){return e.startsWith("image")})).reduce((function(e,c){return null!==t[c]&&e.push(t[c]),e}),[])),productTitle:r.title})}),Object(l.jsxs)("div",{className:"current-product-info-page-half",children:[Object(l.jsxs)("div",{className:"current-product-text",children:[Object(l.jsx)("h1",{className:"current-product-title",children:r.title}),Object(l.jsx)("p",{className:"current-product-description",children:r.description})]}),Object(l.jsx)("div",{className:"current-product-add-to-cart-section",children:Object(l.jsx)("button",{className:"current-product-add-to-cart-button",onClick:function(){e.onAddToCart({item:r,operation:"add"})},children:"Add to wishlist!"})})]})]}):Object(l.jsx)("div",{})};c(115);var L=function(e){var t=e.cartItemQuantity>1?Object(l.jsx)("button",{className:"cart-item-counter-button",onClick:e.onDecrementCartItem,children:"-"}):null;return Object(l.jsxs)("div",{className:"cart-item-counter",children:[Object(l.jsx)("button",{className:"cart-item-counter-button",onClick:e.onIncrementCartItem,children:"+"}),Object(l.jsx)("div",{className:"cart-item-counter-value",children:e.cartItemQuantity}),t]})};c(116);var P=function(e){var t=e.product.productInfo,c=e.product.quantity;function n(c){e.onEditCart({item:t,operation:c})}return Object(l.jsxs)("div",{className:"shopping-cart-item",children:[Object(l.jsx)(o.b,{to:"/gallery/".concat(t.id),children:Object(l.jsx)("img",{className:"shopping-cart-item-img",src:t.galleryimage,alt:t.title})}),Object(l.jsx)(o.b,{className:"shopping-cart-item-title-link",to:"/gallery/".concat(t.id),children:Object(l.jsx)("h2",{className:"shopping-cart-item-title",children:t.title})}),Object(l.jsx)(L,{cartItemQuantity:c,onIncrementCartItem:function(){n("increment")},onDecrementCartItem:function(){n("decrement")}}),Object(l.jsx)("button",{className:"material-icons shopping-cart-remove-button",onClick:function(){n("remove")},children:"remove_shopping_cart"})]})};c(117);var A=function(e){var t=e.currentCart,c=e.onEditCart;return function(e){e.reduce((function(e,t){return e+t.productInfo.price*t.quantity}),0)}(t),0===t.length?Object(l.jsx)("div",{className:"shopping-cart-empty",children:"Your wishlist is empty."}):Object(l.jsxs)("div",{className:"shopping-cart-page",children:[Object(l.jsx)(o.b,{to:"/contact",children:Object(l.jsx)("button",{className:"shopping-cart-checkout-button",children:"Contact me to order"})}),Object(l.jsx)("div",{className:"shopping-cart-box",children:Object(l.jsx)("div",{className:"shopping-cart-items",children:e.currentCart.map((function(e){return Object(l.jsx)(P,{className:"shopping-cart-item",product:e,onEditCart:c},e.productInfo.id)}))})})]})};c(118);var M=function(e){var t=0===e.cartSize?null:e.cartSize;return Object(l.jsxs)("nav",{className:"nav-bar",children:[Object(l.jsx)(o.b,{to:"/gallery",className:"nav-bar-item",children:"Gallery"}),Object(l.jsx)(o.b,{to:"/about",className:"nav-bar-item",children:"About"}),Object(l.jsx)(o.b,{to:"/contact",className:"nav-bar-item",children:"Contact Me"}),Object(l.jsxs)("div",{className:"nav-bar-cart-icon",children:[Object(l.jsx)(o.b,{to:"/wishlist",className:"material-icons cart",children:"shopping_cart"}),Object(l.jsx)("div",{className:"nav-bar-cart-size",children:t})]})]})};c(56),c(152),c(153);c(154);var R=function(e){return Object(l.jsx)("div",{className:"welcomeHeader",children:Object(l.jsx)("h1",{className:"welcomeHeaderText",children:"Welcome to Trudy's Gallery"})})},G={integration:"react-1-V883hiKD43rRfvuQ-7JfIBj8-MY7vlUcj12asCd6jRX1GD4CN4hj4CS-8gPPdJi0BACK4CkVoD-DRM2RX4cdb38xVi5HIiw22p0OwnNkGnutuYzEmTcKZ1sV",tt:"tt-1-a6YQNOCa-r3FqdYbREAa9dpDqVS4r3kljsT2GvwTQw0=",version:"2020-11-20"};var K=function(){var e,t=Object(n.useState)(0),c=Object(s.a)(t,2),a=(c[0],c[1],Object(n.useState)([])),r=Object(s.a)(a,2),i=r[0],j=r[1],m=Object(n.useState)([]),g=Object(s.a)(m,2),v=g[0],y=g[1],N=function(e){var t=e.item;switch(e.operation){case"add":k(t);break;case"remove":C(t);break;case"increment":w(t);break;case"decrement":I(t)}},k=function(e){j(function(e,t){return f(e,t)?p(e,t):[].concat(Object(h.a)(t),[{productInfo:e,quantity:1}])}(e,i))},C=function(e){j(function(e,t){return t.filter((function(t){return t.productInfo.id!==e.id}))}(e,i))},w=function(e){j(p(e,i))},I=function(e){j(function(e,t){return t.map((function(t){return t.productInfo.id===e.id?Object(b.a)(Object(b.a)({},t),{},{quantity:--t.quantity}):t}))}(e,i))};return Object(l.jsx)(x.a,{ebconfig:G,children:Object(l.jsx)(o.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o.b,{to:"/",children:Object(l.jsx)(R,{})}),Object(l.jsx)(M,{cartSize:(e=i,e.reduce((function(e,t){return e+t.quantity}),0))}),Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{path:"/gallery/:productId",children:Object(l.jsx)(F,{data:v,onAddToCart:N})}),Object(l.jsx)(u.a,{path:"/gallery",children:Object(l.jsx)(E,{data:v,onLoadData:y})}),Object(l.jsx)(u.a,{path:"/about",children:Object(l.jsx)(d,{})}),Object(l.jsx)(u.a,{path:"/contact",children:Object(l.jsx)(O,{currentCart:i})}),Object(l.jsx)(u.a,{path:"/wishlist",children:Object(l.jsx)(A,{currentCart:i,onEditCart:N})}),Object(l.jsx)(u.a,{exact:!0,path:"/",children:Object(l.jsx)(E,{data:v,onLoadData:y})}),Object(l.jsx)(u.a,{children:Object(l.jsx)(E,{data:v,onLoadData:y})})]})]})})})},Q=function(e){e&&e instanceof Function&&c.e(4).then(c.bind(null,164)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(K,{})}),document.getElementById("root")),Q()},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},65:function(e,t,c){}},[[155,1,2]]]);
//# sourceMappingURL=main.c1cb5d7c.chunk.js.map