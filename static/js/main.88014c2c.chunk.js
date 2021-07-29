(this.webpackJsonpmovieapp=this.webpackJsonpmovieapp||[]).push([[0],{28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a(1),s=a(21),n=a.n(s),c=(a(28),a(13)),o=a(9),l=a(19),d=a(10),m=(a(29),function(e){var t=e.cartItems,a=e.onRemove;return Object(i.jsxs)("div",{className:"movieCard",children:[Object(i.jsx)("h1",{className:"titleMovieList",children:" Movie Cart "}),Object(i.jsxs)("div",{className:"cardContanier",children:[Object(i.jsxs)("div",{className:"cartEmpty",children:[" ",0===t.length&&Object(i.jsx)("div",{className:"emptyCart",children:" The Cart is empty. "})," "]}),t.map((function(e,t){return Object(i.jsxs)("div",{className:"item",children:[Object(i.jsxs)("p",{className:"itemTitle",children:[" ",e.title," "]},e.title),Object(i.jsx)("img",{src:e.posterUrl,alt:e.title,className:"imgItem"}),Object(i.jsx)("button",{className:"itemBtn",onClick:function(){return a(e)},children:"Remove"})]},t)}))]})]})}),p=a(7),h=function(e){var t=e.filterProductsRate,a=e.onAdd,r=e.handlechange,s=e.submit,n=e.form;return Object(i.jsxs)("div",{className:"movieListDiv",children:[Object(i.jsx)("h1",{className:"titleMovieList",children:" Movie List "}),Object(i.jsxs)("div",{className:"movieAddDiv",children:[Object(i.jsx)("h2",{className:"movieAddTitle",children:" ADDING A MOVIE : "}),Object(i.jsxs)("form",{className:"formMovie",children:[Object(i.jsx)("label",{className:"movieAddElemType infor",children:"Title : "}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{placeholder:"Type the Movie Title",className:"movieAddElem",type:"text",name:"title",onChange:r,value:n.title}),Object(i.jsx)("br",{}),Object(i.jsx)("label",{className:"movieAddElemType",children:"Poster URL : "}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{placeholder:"Paste the Movie Poster URL",className:"movieAddElem",type:"text",name:"posterUrl",onChange:r,value:n.posterUrl}),Object(i.jsx)("br",{}),Object(i.jsx)("label",{className:"movieAddElemType",children:"Integrated Trailer URL : "}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{placeholder:"Paste the Integrated Trailer URL",className:"movieAddElem",type:"text",name:"trailerURL",onChange:r,value:n.trailerURL}),Object(i.jsx)("br",{}),Object(i.jsx)("label",{className:"movieAddElemType",children:"Description : "}),Object(i.jsx)("br",{}),Object(i.jsx)("textarea",{placeholder:"Type the Movie descreption",className:"desc",type:"text",name:"description",onChange:r,value:n.description}),Object(i.jsx)("br",{}),Object(i.jsx)("label",{className:"movieAddElemType",children:"Rate (Should be a Number form 0 to 10): "}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{className:"movieAddElem rateAdd",type:"number",name:"rate",onChange:r,value:n.rate}),Object(i.jsx)("br",{}),Object(i.jsx)("button",{onClick:s,children:" Add the Movie "})]})]}),Object(i.jsx)("div",{className:"container",children:t.map((function(e,t){return Object(i.jsx)("div",{className:"product",children:Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{title:e.title,children:e.title}),Object(i.jsx)("img",{src:e.posterUrl,alt:e.title,style:{display:"Block",marginLeft:"auto",marginRight:"auto"}}),Object(i.jsx)(p.b,{to:"/Movie-app/Description/".concat(e.title),className:"trailerBtn",children:Object(i.jsx)("p",{className:"pBtnTrailer",children:" \u27a9 View trailer"})}),Object(i.jsxs)("p",{className:"descreption",children:[" ",e.description]}),Object(i.jsxs)("p",{className:"rate",children:[" Rate : ",e.rate]}),Object(i.jsx)("button",{className:"addButton",onClick:function(){return a(e)},children:"Add to Cart"})]})},t)}))})]})},u=function(e){var t=e.filterProductsRate;return console.log(e.match.params),Object(i.jsx)("div",{className:"DescriptionDiv",children:t.filter((function(t){return t.title===e.match.params.title})).map((function(e,t){return Object(i.jsxs)("div",{className:"MovieDetail",children:[Object(i.jsxs)("h1",{className:"titleMovieList",children:[" ",e.title]}),Object(i.jsxs)("p",{className:"pdescription",children:[e.description," "]}),Object(i.jsx)("div",{className:"video-responsive",children:Object(i.jsx)("iframe",{title:t,className:"videoTrailer",src:e.trailerURL,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})})]},t)}))})},j=a(2),b=function(e){var t=e.handleInput,a=e.handleInputRate,r=e.filterPro,s=e.filterRate;return Object(i.jsxs)("div",{className:"filterDiv",children:[Object(i.jsx)("p",{className:"filterName",children:"Searching By Title : "}),Object(i.jsx)("input",{type:"text",onChange:t,placeholder:"Type a movie title",className:"inputTitle",value:r}),Object(i.jsx)("p",{className:"ratep",children:"Searching By Rate : "}),Object(i.jsx)("input",{type:"number",onChange:a,placeholder:"Type a Rate",className:"inputTitle filterRate",value:s})]})},v=Object(j.e)((function(e){var t=e.filterProducts,a=e.handleInput,r=e.handleInputRate,s=e.cartItems,n=e.filterPro,c=e.filterRate;return"/Movie-app/"===e.location.pathname?Object(i.jsx)("div",{children:Object(i.jsxs)("header",{children:[Object(i.jsx)(b,{filterProducts:t,handleInput:a,handleInputRate:r,filterPro:n,filterRate:c}),Object(i.jsx)("div",{className:"Btns",children:Object(i.jsxs)(p.b,{to:"/Movie-app/Cart",className:"movieBtn",children:[" ",Object(i.jsxs)("p",{className:"pBtns",children:[" \u27a9 Movie Cart (",s.length,") "]})," "]})})]})}):Object(i.jsx)("div",{children:Object(i.jsx)("header",{children:Object(i.jsx)("div",{className:"Btns",children:Object(i.jsxs)(p.b,{to:"/Movie-app/",className:"movieBtn",children:[" ",Object(i.jsx)("p",{className:"pBtns",children:" \u27a9 Movie List "})," "]})})})})}));var f=function(){var e=Object(r.useState)([{title:"Outside the Wire",description:"In the near future, a drone pilot sent into a war zone finds himself paired with a top-secret android officer on a mission to stop a nuclear attack.",posterUrl:"https://i2.wp.com/vsmoviepodcast.com/wp-content/uploads/2021/01/Outside-the-Wire-poster-Courtesy-of-Netflix.jpg?fit=1000%2C1482&ssl=1",rate:7,trailerURL:"https://www.youtube.com/embed/u8ZsUivELbs"},{title:"The Old Guard",description:"Four undying warriors who've secretly protected humanity for centuries become targeted for their mysterious powers just as they discover a new immortal",posterUrl:"https://i0.wp.com/cinedweller.com/wp-content/uploads/2020/07/the-old-guard-affiche.jpg?fit=608%2C900&ssl=1",rate:6.5,trailerURL:"https://www.youtube.com/embed/aK-X2d0lJ_s"},{title:"Spider-Man: Homecoming",description:"Peter Parker returns to routine life as a high schooler until the Vulture's arrival gives him the chance to prove himself as a web-slinging superhero.",posterUrl:"https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/uc7ae2rek8ne8ov0ue8e/spider-man-homecoming-poster",rate:8,trailerURL:"https://www.youtube.com/embed/n9DwoQ7HWvI"},{title:"Extraction",description:"A hardened mercenary's mission becomes a soul-searching race to survive when he's sent into Bangladesh to rescue a drug lord's kidnapped son.",posterUrl:"https://www.cavsconnect.com/wp-content/uploads/2020/05/Extraction-poster-600x889-1.jpg",rate:7.5,trailerURL:"https://www.youtube.com/embed/L6P3nI6VnlY"},{title:"We Can Be Heroes",description:"When alien invaders capture Earth\u2019s superheroes, their kids must learn to work together to save their parents \u2014 and the planet.",posterUrl:"https://m.media-amazon.com/images/M/MV5BYmU3OGFhZDItMjhlZi00YjQwLWJlOTItYzlhOGEwNGU3NjIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",rate:5,trailerURL:"https://www.youtube.com/embed/VaTuk02FgQc"},{title:"Suicide Squad",description:"A secret government official releases the world's worst super villains from prison to have them stop an impending apocalypse in exchange for freedom.",posterUrl:"https://m.media-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_.jpg",rate:5.5,trailerURL:"https://www.youtube.com/embed/CmRih_VtVAs"},{title:"Little Man",description:"A man is so eager to become a dad that he'll believe anything, including the notion that a baby-faced thief on the lam is really an abandoned toddler.",posterUrl:"https://m.media-amazon.com/images/M/MV5BMTI0NTA3MjI3NV5BMl5BanBnXkFtZTcwNTI1ODYzMQ@@._V1_.jpg",rate:8.5,trailerURL:"https://www.youtube.com/embed/n6ir-qPI2PU"},{title:"Skyscraper",description:"When terrorists attack the tallest building in the world, a security consultant will do anything to save his family from the carnage.",posterUrl:"https://i.pinimg.com/564x/c2/ef/51/c2ef51123c764541e2087b0324ee72e7.jpg",rate:6,trailerURL:"https://www.youtube.com/embed/t9QePUT-Yt8"},{title:"Changeling",description:"When her kidnapped son is brought home, a mother suspects that the boy isn't her child, so the police captain has her committed to an asylum.",posterUrl:"https://i.pinimg.com/originals/04/26/28/042628413d0697e2942f97475aae0f5a.jpg",rate:6.5,trailerURL:"https://www.youtube.com/embed/PmfjureC-5I"},{title:"Jumanji: Welcome to the Jungle",description:"Four high school students get sucked into the jungle setting of a video game, where they embark on a quest as their comically mismatched adult avatars.",posterUrl:"https://m.media-amazon.com/images/I/71zfxjVkzGL._AC_SL1000_.jpg",rate:8.5,trailerURL:"https://www.youtube.com/embed/2QKg5SZ_35I"},{title:"6 Underground",description:"After faking his death, a tech billionaire recruits a team of international operatives for a bold and bloody mission to take down a brutal dictator.",posterUrl:"https://fr.web.img3.acsta.net/pictures/19/11/14/15/36/5224064.png",rate:6,trailerURL:"https://www.youtube.com/embed/YLE85olJjp8"},{title:"The Dark Knight",description:"As Batman, Lt. Gordon and the district attorney continue to dismantle Gotham's criminal underground, a new villain threatens to undo their good work..",posterUrl:"https://images-na.ssl-images-amazon.com/images/I/71tUSFn3W0L._AC_SL1000_.jpg",rate:7.5,trailerURL:"https://www.youtube.com/embed/EXeTwQWrcwY"}]),t=Object(d.a)(e,2),a=t[0],s=t[1],n=Object(r.useState)(""),p=Object(d.a)(n,2),b=p[0],f=p[1],O=Object(r.useState)([]),g=Object(d.a)(O,2),x=g[0],w=g[1],y=Object(r.useState)(""),N=Object(d.a)(y,2),U=N[0],M=N[1],L=function(e){x.find((function(t){return t.title===e.title}))?alert("This Movie is already exists in the cart !"):w([].concat(Object(l.a)(x),[Object(o.a)({},e)]))},R=function(e){w(x.filter((function(t){return t.title!==e.title})))},T=function(e){f(e.target.value)},I=function(e){M(e.target.value)},C=Object(r.useState)({title:"",description:"",posterUrl:"",rate:"",trailerURL:""}),k=Object(d.a)(C,2),A=k[0],B=k[1],P=function(e){B(Object(o.a)(Object(o.a)({},A),{},Object(c.a)({},e.target.name,e.target.value)))},_=function(e){e.preventDefault(),""===A.title||""===A.description||""===A.posterUrl||""===A.trailerURL||A.rate<0||A.rate>10?alert("Please give the requested informations of the Movie ! All the fields below are mandatory."):(s([].concat(Object(l.a)(a),[Object(o.a)({},A)])),B({title:"",description:"",posterUrl:"",rate:"",trailerURL:""}),alert("The Movie has been succefully added to the Movie List, check the bottom of the list, Thanks."))},E=a.filter((function(e){return e.title.toLowerCase().includes(b.toLowerCase())})),S=E.filter((function(e){return e.rate.toString().startsWith(U)}));return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(j.a,{path:"/Movie-app/",render:function(){return Object(i.jsx)(v,{filterProducts:E,handleInput:T,handleInputRate:I,cartItems:x,filterPro:b,filterRate:U})}}),Object(i.jsx)(j.a,{exact:!0,path:"/Movie-app/",render:function(){return Object(i.jsx)(h,{filterProductsRate:S,onAdd:L,handlechange:P,submit:_,form:A})}}),Object(i.jsx)(j.a,{path:"/Movie-app/Cart",render:function(){return Object(i.jsx)(m,{cartItems:x,onRemove:R})}}),Object(i.jsx)(j.a,{path:"/Movie-app/Description/:title",render:function(e){return Object(i.jsx)(u,Object(o.a)({filterProductsRate:S},e))}})]})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,36)).then((function(t){var a=t.getCLS,i=t.getFID,r=t.getFCP,s=t.getLCP,n=t.getTTFB;a(e),i(e),r(e),s(e),n(e)}))};n.a.render(Object(i.jsx)(p.a,{children:Object(i.jsx)(f,{})}),document.getElementById("root")),O()}},[[35,1,2]]]);
//# sourceMappingURL=main.88014c2c.chunk.js.map