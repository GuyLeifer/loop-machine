(this["webpackJsonploop-machine"]=this["webpackJsonploop-machine"]||[]).push([[0],{46:function(e,c,t){},47:function(e,c,t){},49:function(e,c,t){},51:function(e,c,t){},56:function(e,c,t){},57:function(e,c,t){},67:function(e,c,t){"use strict";t.r(c);var n=t(1),a=t.n(n),i=t(14),s=t.n(i),o=(t(46),t(4)),r=(t(47),t(8)),j=t.n(r),l=t(12),b=t(24),d=t(5),u=Object(d.b)({key:"loopStartState",default:!1}),O=Object(d.b)({key:"playAllState",default:!1}),m=Object(d.b)({key:"playRecordState",default:!1}),x=Object(d.b)({key:"recordState",default:!1}),f=Object(d.b)({key:"recordObjectState",default:[]}),p=Object(d.b)({key:"startTimeState",default:null}),h=Object(d.b)({key:"endTimeState",default:null}),v=Object(d.b)({key:"speedState",default:1}),N=(t(49),t(2));var y=function(e){var c=e.beat,t=e.index,a=e.recordObject,i=c.audio,s=c.icon,r=Object(n.useState)(!1),y=Object(o.a)(r,2),S=y[0],A=y[1],k=Object(n.useState)(!1),g=Object(o.a)(k,2),C=g[0],D=g[1],w=Object(d.c)(p),I=Object(o.a)(w,2),R=I[0],E=I[1],B=Object(d.d)(h),P=Object(d.e)(f),F=Object(d.d)(u),G=Object(d.d)(O),X=Object(d.d)(x),J=Object(d.d)(v),L=Object(d.c)(m),M=Object(o.a)(L,2),T=M[0],U=M[1],_=Object(n.useRef)(null),V=Object(n.useRef)(null);Object(n.useEffect)((function(){Object(b.a)(j.a.mark((function e(){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:F||X||T?S?R&&0!==R?0===J?(_.current.play(),X&&P((function(e){return[].concat(Object(l.a)(e),[{time:new Date-R,index:t,type:"check"}])}))):(c=1/J*8e3-(Number(new Date)-R)%8e3*(1/J),D("on"),setTimeout((function(){D(!0)}),c),X&&P((function(e){return[].concat(Object(l.a)(e),[{time:new Date-R,index:t,type:"check"}])}))):(_.current.play(),E(Number(new Date)),X&&P([{time:0,index:t,type:"start"}])):(X&&R&&P((function(e){return[].concat(Object(l.a)(e),[{time:new Date-R,index:t,type:"pause"}])})),_.current.pause()):(E(null),A(!1),D(!1),_.current.pause(),_.current.currentTime=0);case 1:case"end":return e.stop()}}),e)})))()}),[S,F,X,T]),Object(n.useEffect)((function(){!0===C&&S&&(_.current.play(),X&&P((function(e){return[].concat(Object(l.a)(e),[{time:new Date-R,index:t,type:"play"}])})))}),[C]),Object(n.useEffect)((function(){G?_.current.play():T?(E(0),setTimeout((function(){U(!1)}),B)):T||(A(!1),_.current.pause(),_.current.currentTime=0)}),[G,T]),Object(n.useEffect)((function(){0===R&&a.filter((function(e){return e.index===t})).forEach((function(e){e.index===t&&("start"===e.type?A(!0):"check"===e.type?setTimeout((function(){A(!0)}),e.time):"pause"===e.type&&setTimeout((function(){A(!1)}),e.time))}))}),[R]);var Y=Object(n.useCallback)((function(){G||!F&&!X||A((function(e){return!e}))}),[G,F,X]);return V.current&&(_.current.playbackRate=0!==J?J:1,V.current.style.boxShadow="on"===C?"0 0 10px 10px #eff, 0 0 15px 15px yellow":S&&(F||X||T)||G?"0 0 10px 10px #eff, 0 0 15px 15px green":"0 0 10px 10px #eff, 0 0 12px 12px #0ff",V.current.style.backgroundColor=S&&(F||X||T)||G?"#777":"#444"),Object(n.useEffect)((function(){_.current.load()}),[]),Object(N.jsx)("div",{className:"beat",ref:V,children:Object(N.jsxs)("div",{className:"miniBeatStyle",onClick:Y,children:[Object(N.jsx)("audio",{ref:_,src:i,loop:!0}),s]})})},S=t(7),A=t(17),k=t(27),g=(t(51),t(28)),C=t(81),D=Object(g.a)({root:{color:"white"},thumb:{backgroundColor:"white",color:"white"},valueLabel:{"& *":{background:"white",color:"#000",fontWeight:"bold"}},active:{},track:{height:5},rail:{height:5,borderRadius:4}})(C.a);var w=function(e){var c=e.setRecordObject,t=Object(n.useState)(1),a=Object(o.a)(t,2),i=a[0],s=a[1],r=Object(d.c)(O),j=Object(o.a)(r,2),l=j[0],b=j[1],y=Object(d.c)(u),g=Object(o.a)(y,2),C=g[0],w=g[1],I=Object(d.d)(p),R=Object(d.e)(h),E=Object(d.e)(v),B=Object(d.c)(m),P=Object(o.a)(B,2),F=P[0],G=P[1],X=Object(d.c)(x),J=Object(o.a)(X,2),L=J[0],M=J[1],T=Object(d.d)(f),U=function(){E(i),c(T),!C&&!l&&!L&&G((function(e){return!e}))};return Object(N.jsxs)("div",{className:"controllerStyle",children:[Object(N.jsxs)("div",{className:"icons",children:[Object(N.jsxs)("div",{className:l||L||F?"iconsDivDisabledStyle":"iconsDivStyle",onClick:function(){E(i),!L&&!l&&!F&&w((function(e){return!e}))},children:[!C&&Object(N.jsx)(S.b,{className:"iconStyle"}),C&&!l&&!L&&Object(N.jsx)(S.d,{className:"iconStyle"})]}),Object(N.jsxs)("div",{className:C||L||F?"iconsDivDisabledStyle":"iconsDivStyle",onClick:function(){E(i),!C&&!L&&!F&&b((function(e){return!e}))},children:[!l&&Object(N.jsx)(k.a,{className:"iconStyle"}),l&&!C&&!L&&Object(N.jsx)(S.d,{className:"iconStyle"})]}),Object(N.jsx)("div",{className:L?"iconsDivRecordStyle":C||l||F?"iconsDivDisabledStyle":"iconsDivStyle",onClick:function(){E(i),!C&&!l&&!F&&M((function(e){return!e})),L&&R(new Date-I)},children:Object(N.jsx)(S.c,{className:"iconStyle"})}),Object(N.jsx)("div",{className:!l&&!C&&!L&&T.length>0?"iconsDivStyle":"iconsDivDisabledStyle",children:F?Object(N.jsx)(A.b,{className:"iconStyle",onClick:U}):Object(N.jsx)(A.a,{className:"iconStyle",onClick:U})})]}),Object(N.jsx)(D,{className:"slider",defaultValue:1,onChange:function(e,c){return s(c)},valueLabelDisplay:"auto",step:.25,min:0,max:2,disabled:!!(C||l||L||F)})]})},I=t.p+"static/media/future_funk_beats_25.5eb417fc.mp3",R=t.p+"static/media/120_stutter_breakbeats_16.37c82282.mp3",E=t.p+"static/media/Bass Warwick heavy funk groove on E 120 BPM.52c24c81.mp3",B=t.p+"static/media/electric guitar coutry slide 120bpm - B.230fcab8.mp3",P=t.p+"static/media/FUD_120_StompySlosh.27bdc145.mp3",F=t.p+"static/media/GrooveB_120bpm_Tanggu.3e1411b4.mp3",G=t.p+"static/media/MazePolitics_120_Perc.2d08c654.mp3",X=t.p+"static/media/PAS3GROOVE1.03B.f77c6da4.mp3",J=t.p+"static/media/SilentStar_120_Em_OrganSynth.f2d668af.mp3",L=t(13),M=t(37),T=[{audio:I,icon:Object(N.jsx)(L.a,{className:"icon"})},{audio:R,icon:Object(N.jsx)(S.a,{className:"icon"})},{audio:E,icon:Object(N.jsx)(L.d,{className:"icon"})},{audio:B,icon:Object(N.jsx)(L.c,{className:"icon"})},{audio:P,icon:Object(N.jsx)(L.b,{className:"icon"})},{audio:F,icon:Object(N.jsx)(L.g,{className:"icon"})},{audio:G,icon:Object(N.jsx)(L.e,{className:"icon"})},{audio:X,icon:Object(N.jsx)(M.a,{className:"icon"})},{audio:J,icon:Object(N.jsx)(L.f,{className:"icon"})}];var U=function(){var e=Object(n.useState)([]),c=Object(o.a)(e,2),t=c[0],a=c[1];return Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)("div",{className:"loop-machine",children:T.map((function(e,c){return Object(N.jsx)(y,{beat:e,index:c,recordObject:t},c)}))}),Object(N.jsx)(w,{setRecordObject:a})]})},_=(t(56),t(57),t(38)),V=t.n(_);var Y=function(e){var c=e.isOpen,t=e.setIsOpen;return Object(N.jsxs)(V.a,{className:"content",overlayClassName:"overlay",isOpen:c,onRequestClose:function(){return t(!1)},children:[Object(N.jsx)("h2",{children:"Information"}),Object(N.jsxs)("div",{children:[Object(N.jsxs)("div",{className:"infoIcon",children:[Object(N.jsx)("div",{className:"icon-info",children:Object(N.jsx)(S.b,{})}),Object(N.jsx)("div",{className:"text",children:"Loop Start"})]}),Object(N.jsxs)("div",{className:"infoIcon",children:[Object(N.jsx)("div",{className:"icon-info",children:Object(N.jsx)(k.a,{})}),Object(N.jsx)("div",{className:"text",children:"Play All"})]}),Object(N.jsxs)("div",{className:"infoIcon",children:[Object(N.jsx)("div",{className:"icon-info",children:Object(N.jsx)(S.c,{})}),Object(N.jsx)("div",{className:"text",children:"Record"})]}),Object(N.jsxs)("div",{className:"infoIcon",children:[Object(N.jsx)("div",{className:"icon-info",children:Object(N.jsx)(S.c,{className:"recording"})}),Object(N.jsx)("div",{className:"text",children:"Stop Record"})]}),Object(N.jsxs)("div",{className:"infoIcon",children:[Object(N.jsx)("div",{className:"icon-info",children:Object(N.jsx)(A.b,{})}),Object(N.jsx)("div",{className:"text",children:"Stop"})]}),Object(N.jsxs)("div",{className:"infoIcon",children:[Object(N.jsx)("div",{className:"icon-info",children:Object(N.jsx)(A.a,{})}),Object(N.jsx)("div",{className:"text",children:"Play Record"})]}),Object(N.jsxs)("div",{className:"infoIcon",children:[Object(N.jsx)("div",{className:"icon-info",children:Object(N.jsx)(S.d,{})}),Object(N.jsx)("div",{className:"text",children:"Stop Record"})]}),Object(N.jsxs)("div",{className:"infoIcon",children:[Object(N.jsx)("div",{className:"icon-info",children:Object(N.jsx)("img",{className:"slider-img",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAAAWCAYAAACi7pBsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAH1SURBVGhD7ZlLbsIwEIZtJ6EPyjvQ1w5xKJZcgkNxFzacgHMgFtN/nJjYiVtFKm1iySN9gMCxlC+jGdsIlX2QzD5J4F2k7ySEiPyKZ/BU8ggGJGRWI32DbMMrBvkmirTHyC6QkC5F5iBEsoRsZhWl34VKeCXdRQg1J5EsIDwv5HsnirSnjXQ5JaFmEA/5KeR7J4q0py69CcZN8AIU5KfAO1GkPaaJFvilyzG6qYV3om7Z7/d0PB7pcrlo+DN/5xvbPUMLXsmwZG6eFlKMYb/CP1E3rNdrLfi74N94jO/a7nipkCwe0iUvG216LP0n4SZ4jO/azpCjChWYdC4fbaNXpcaRzhnPtf3Bpa/S22S5iV5lu4LDGyOSKDFSoqFaCIknYnM6ncpbCSeu1yvtdrtO2W63tNlsIJpXggYkspbu0pAeYvRBOsPiXemT0mtNutNtQYhxPp+9ErpA73UMCcTrpbhV5xl3XTksbyOsOBwOXgH/jc70FLv7GxBfy3xNsYCvCK2m9yXLTU2XfJTCRyqaGclk2qAhXXfgnhDk5ijjw0OGz7LmeAgQn7lgXH+lG4I6BmDpFnXhwUgPikEO2UwpHVlfB+Oi9LsyWEI2kxeCb/XdIkq/M/xPnEHlpCBeoa4bYnn5C5JVhVqSSnJK0FAL+dxYF/QFVpEZMBN+/ZEAAAAASUVORK5CYII=",alt:"Slider"})}),Object(N.jsx)("div",{className:"text",children:"Loop Speed Slider"})]})]})]})},K=t(39);var Q=function(){var e=Object(n.useState)(!1),c=Object(o.a)(e,2),t=c[0],a=c[1];return Object(N.jsxs)("div",{className:"header",children:[Object(N.jsx)("span",{children:"Loop Machine"}),Object(N.jsx)("div",{className:"about",children:Object(N.jsx)(K.a,{onClick:function(){return a((function(e){return!e}))}})}),t&&Object(N.jsx)(Y,{isOpen:t,setIsOpen:a})]})};var Z=function(){return Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)(Q,{}),Object(N.jsx)(U,{})]})};s.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(d.a,{children:Object(N.jsx)(Z,{})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.37acc60f.chunk.js.map