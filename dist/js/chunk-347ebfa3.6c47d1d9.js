(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-347ebfa3"],{"3e52":function(e,i,t){},ef1f:function(e,i,t){"use strict";t("3e52")},f21f:function(e,i,t){"use strict";t.r(i);var a,n,s,u,l,o=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{attrs:{id:"hill"}},[t("transition",{attrs:{name:"fade"}},[t("article",{directives:[{name:"show",rawName:"v-show",value:e.ui.table,expression:"ui.table"}],staticClass:"view-talbe"},[t("h2",[e._v("TABLE")]),t("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel ante placerat, interdum mi non, euismod ante. Nulla ac eros leo. Nulla accumsan nisi ut purus fringilla, porta euismod massa mattis. Mauris ultricies arcu vitae arcu pharetra, vitae laoreet justo facilisis. Sed vitae commodo purus. Vivamus pretium, leo et bibendum molestie, velit turpis fringilla ligula, vel pulvinar ipsum nulla non arcu. Suspendisse id sapien ut arcu sollicitudin lobortis. Fusce sit amet pharetra neque. Proin et pulvinar diam. Etiam luctus, neque vel commodo ornare, erat mi lobortis odio, ac tristique neque lorem vel elit. Duis dignissim arcu id orci laoreet, nec auctor massa pellentesque. Aenean tristique augue eu leo aliquam accumsan.")])])]),t("transition",{attrs:{name:"fade"}},[t("article",{directives:[{name:"show",rawName:"v-show",value:e.ui.whale,expression:"ui.whale"}],staticClass:"view-whale"},[t("h2",[e._v("Whale")]),t("p",[e._v("Nulla non sagittis mauris. Curabitur porta, nisi a iaculis varius, purus dui eleifend ipsum, vel finibus odio risus et nulla. Mauris vulputate nibh erat, sit amet consectetur risus pharetra eu. Aliquam rutrum dapibus malesuada. Curabitur non congue ligula. Aenean nec eros non ipsum vulputate vehicula. Proin dictum vehicula leo quis interdum. Donec ut dictum elit.")])])]),t("transition",{attrs:{name:"fade"}},[t("article",{directives:[{name:"show",rawName:"v-show",value:e.ui.statue,expression:"ui.statue"}],staticClass:"view-statue"},[t("h2",[e._v("statue")]),t("p",[e._v("Nam lectus nulla, maximus at lobortis accumsan, ultricies eget turpis. Aliquam erat volutpat. Integer a commodo risus. Nulla enim arcu, vulputate vel posuere eget, ultricies sit amet eros. Praesent finibus gravida facilisis. Sed molestie ullamcorper posuere. Nullam elementum ante et dolor blandit porta. Nunc vestibulum nibh ut purus tempus blandit. Pellentesque dignissim rhoncus velit, vel pretium arcu fermentum eget. Mauris maximus ligula est, at rutrum tortor elementum quis.")])])]),e._m(0)],1)},r=[function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"url"},[t("a",{attrs:{href:"https://sketchfab.com/3d-models/hintze-hall-nhm-london-surface-model-b2f3e84112d04bf1844e7ac2c4423566",target:"_blank"}},[e._v("USED: https://sketchfab.com/3d-models/hintze-hall-nhm-london-surface-model-b2f3e84112d04bf1844e7ac2c4423566")])])}],c=t("5a89"),d=t("34ad");function m(){var e,i;1,a=null,n=null,s=null,u&&(cancelAnimationFrame(u),u=null),e=document.createElement("div"),document.querySelector("#hill").appendChild(e),a=new c["ab"](70,window.innerWidth/window.innerHeight,1,1e3),a.position.set(194,-62,-5),a.lookAt(0,-10,-10),n=new c["jb"];var t=new c["sb"],o=t.load("/bg_textures/rough_texture.jpg");n.background=o,n.add(new c["a"](16777215,.1)),i=new c["pb"](16777215),i.position.set(0,0,0),i.angle=Math.PI/10,i.distance=0,n.add(i);var r=new d["a"];r.load("/hintze_hall_nhm_london_surface_model/scene.gltf",(function(e){l=e.scene,l.scale.set(10,10,10),l.position.set(41,9,-89),n.add(l)}),void 0,(function(e){console.error(e)})),s=new c["yb"]({antialias:!0}),s.setPixelRatio(window.devicePixelRatio),s.setSize(window.innerWidth,window.innerHeight),s.shadowMap.enabled=!0,s.shadowMap.type=c["Z"],e.appendChild(s.domElement),window.addEventListener("resize",p)}var w=function e(){u=requestAnimationFrame(e),s.render(n,a)},h=function(e){a.position.set(e.x,e.y,e.z)};function p(){a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)}var v={name:"hill",components:{},data:function(){return{ui:{table:!1,whale:!1,statue:!1},position:{x:41,y:9,z:-89},scroller:0}},beforeCreate:function(){},created:function(){},mounted:function(){m(),w(),window.addEventListener("scroll",this.changePosition)},beforeDestroy:function(){window.removeEventListener("scroll",this.changePosition)},methods:{changePosition:function(e){console.log(window.scrollY),window.scrollY>1e3&&window.scrollY<2500?this.ui.table=!0:this.ui.table=!1,window.scrollY>3e3&&window.scrollY<5500?this.ui.whale=!0:this.ui.whale=!1,window.scrollY>7e3?this.ui.statue=!0:this.ui.statue=!1;var i={x:194-.0288*window.scrollY,y:.0028*window.scrollY-62,z:8e-4*window.scrollY-5};h(i)}},computed:{},watch:{}},f=v,b=(t("ef1f"),t("2877")),g=Object(b["a"])(f,o,r,!1,null,null,null);i["default"]=g.exports}}]);
//# sourceMappingURL=chunk-347ebfa3.6c47d1d9.js.map