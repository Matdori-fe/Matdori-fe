(self.webpackChunkmatdori_fe=self.webpackChunkmatdori_fe||[]).push([[228],{"./assets/image/logo.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={src:"static/media/logo.28d6dd54.svg",height:40,width:40,blurDataURL:"static/media/logo.28d6dd54.svg"}},"./node_modules/@storybook/nextjs/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/nextjs/dist sync recursive",module.exports=webpackEmptyContext},"./components/Background/Background.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Background});var __jsx=__webpack_require__("./node_modules/react/index.js").createElement;function Background(_ref){var className=_ref.className,children=_ref.children,onClick=_ref.onClick;return __jsx("div",{onClick,className:"fixed md:w-[768px] w-full h-full bg-transparent z-1 top-0 ".concat(className," flex items-end")},children)}Background.displayName="Background",Background.__docgenInfo={description:"",methods:[],displayName:"Background",props:{className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};try{Background.displayName="Background",Background.__docgenInfo={description:"",displayName:"Background",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Background/Background.tsx#Background"]={docgenInfo:Background.__docgenInfo,name:"Background",path:"components/Background/Background.tsx#Background"})}catch(__react_docgen_typescript_loader_error){}},"./components/BorderNotification/BorderNotification.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>BorderNotification});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Text_Text__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/Text/Text.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function BorderNotification(_ref){var label=_ref.label,_ref$modal=_ref.modal,modal=void 0!==_ref$modal&&_ref$modal;return __jsx("div",{className:"".concat("rounded-basic border border-lightGray py-[8px] px-[10px] [&>p]:inline-flex flex justify-center"," ").concat(function isModal(modal){return modal?"sm:w-[calc(412px-40px)] absolute bottom-[96px] w-[calc(100%-40px)]":"w-full"}(modal))},__jsx(_Text_Text__WEBPACK_IMPORTED_MODULE_1__.Z,{size:"xs",color:"darkGray"},label))}BorderNotification.displayName="BorderNotification",BorderNotification.__docgenInfo={description:"",methods:[],displayName:"BorderNotification",props:{modal:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""}}};try{BorderNotification.displayName="BorderNotification",BorderNotification.__docgenInfo={description:"",displayName:"BorderNotification",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},modal:{defaultValue:{value:"false"},description:"",name:"modal",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/BorderNotification/BorderNotification.tsx#BorderNotification"]={docgenInfo:BorderNotification.__docgenInfo,name:"BorderNotification",path:"components/BorderNotification/BorderNotification.tsx#BorderNotification"})}catch(__react_docgen_typescript_loader_error){}},"./components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Button_Button});var react=__webpack_require__("./node_modules/react/index.js"),Text=__webpack_require__("./components/Text/Text.tsx"),index_esm=__webpack_require__("./node_modules/react-icons/ri/index.esm.js"),index_es=__webpack_require__("./node_modules/react-simple-toasts/dist/index.es.js"),__jsx=react.createElement;function Toast(message){(0,index_es.ZP)(message,{clickClosable:!0,render:function render(message){return __jsx("div",{className:"bg-neutral-400 h-[47px] md:w-[calc(768px-40px)] my-[58px] px-[20px] flex items-center justify-center rounded-basic"},__jsx(Text.Z,{color:"white",size:"base",fontWeight:"semibold"},message))}})}const Toast_Toast=Toast;try{Toast.displayName="Toast",Toast.__docgenInfo={description:"",displayName:"Toast",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Toast/Toast.tsx#Toast"]={docgenInfo:Toast.__docgenInfo,name:"Toast",path:"components/Toast/Toast.tsx#Toast"})}catch(__react_docgen_typescript_loader_error){}var Button_jsx=react.createElement,variantClass={active:"bg-100",inactive:"bg-gray"},Button=function Button(_ref){var label=_ref.label,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"active":_ref$variant,writeIcon=_ref.writeIcon,_ref$errorMessage=_ref.errorMessage,errorMessage=void 0===_ref$errorMessage?"":_ref$errorMessage,_ref$modal=_ref.modal,modal=void 0!==_ref$modal&&_ref$modal,onClick=_ref.onClick;return Button_jsx("div",{className:"flex justify-center w-full"},Button_jsx("button",{onClick:"inactive"===variant?function(){return Toast_Toast(errorMessage)}:function(){return onClick()},className:"".concat("sm:w-[calc(412px-40px)] h-[60px] w-[calc(100%-40px)] py-3.5 justify-center items-center rounded-basic inline-flex my-[15px] mx-[20px]"," ").concat(variantClass[variant]," ").concat(modal?"mx-0 w-[100%-40px] absolute bottom-0":"fixed bottom-0")},Button_jsx("div",{className:"flex items-center gap-[8px]"},writeIcon&&Button_jsx(index_esm.cpK,{fill:"white",size:"20"}),Button_jsx(Text.Z,{color:"white",fontWeight:"bold",size:"lg"},label))))};Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:"'active'",computed:!1},required:!1,tsType:{name:"union",raw:"'active' | 'inactive'",elements:[{name:"literal",value:"'active'"},{name:"literal",value:"'inactive'"}]},description:""},errorMessage:{defaultValue:{value:"''",computed:!1},required:!1,tsType:{name:"string"},description:""},modal:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},writeIcon:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Button_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},variant:{defaultValue:{value:"active"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"active"'},{value:'"inactive"'}]}},writeIcon:{defaultValue:null,description:"",name:"writeIcon",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:{value:""},description:"",name:"errorMessage",required:!1,type:{name:"string"}},modal:{defaultValue:{value:"false"},description:"",name:"modal",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./components/JokboInfo/JokboInfo.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_icons_ri__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-icons/ri/index.esm.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,JokboInfo=function JokboInfo(_ref){var kind=_ref.kind,count=_ref.count,className=_ref.className;return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"flex items-center ".concat(className)},function iconCollector(kind){return"bookMark"===kind?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.rfn,{className:"w-[10px] h-[10px]",color:"54A3FF"}),__jsx("p",{className:"font-Regular text-[10px] mt-[2px] ml-[1px]"},count)):"starScore"===kind?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.Kz,{className:"w-[12px] h-[12px]",color:"FFD600"}),__jsx("p",{className:"font-Regular text-[12px] text-darkGray mt-[2px] ml-[2px]"},count)):"heartScore"===kind?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.iB2,{className:"w-[12px] h-[12px] text-100"}),__jsx("p",{className:"font-Regular text-[12px] text-darkGray mt-[2px] ml-[2px]"},count)):"chatScore"===kind?__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__.bY2,{className:"w-[12px] h-[12px]",color:"54A3FF"}),__jsx("p",{className:"font-Regular text-[12px] text-darkGray mt-[2px] ml-[2px]"},count)):void 0}(kind)))};JokboInfo.__docgenInfo={description:"",methods:[],displayName:"JokboInfo"};const __WEBPACK_DEFAULT_EXPORT__=JokboInfo;try{JokboInfo.displayName="JokboInfo",JokboInfo.__docgenInfo={description:"",displayName:"JokboInfo",props:{kind:{defaultValue:null,description:"",name:"kind",required:!0,type:{name:"enum",value:[{value:'"bookMark"'},{value:'"starScore"'},{value:'"heartScore"'},{value:'"chatScore"'}]}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/JokboInfo/JokboInfo.tsx#JokboInfo"]={docgenInfo:JokboInfo.__docgenInfo,name:"JokboInfo",path:"components/JokboInfo/JokboInfo.tsx#JokboInfo"})}catch(__react_docgen_typescript_loader_error){}},"./components/Modal/Loading.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Loading});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_assets_image_logo_svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./assets/image/logo.svg"),next_image__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function Loading(){return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",null,"loading..."),__jsx(next_image__WEBPACK_IMPORTED_MODULE_2__.Z,{src:_assets_image_logo_svg__WEBPACK_IMPORTED_MODULE_1__.Z}))}Loading.__docgenInfo={description:"",methods:[],displayName:"Loading"}},"./components/Modal/ModalLayout.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>ModalLayout});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Background_Background__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/Background/Background.tsx"),_Text_Text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/Text/Text.tsx"),framer_motion__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/framer-motion/dist/es/value/use-motion-value.mjs"),framer_motion__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/framer-motion/dist/es/gestures/drag/use-drag-controls.mjs"),framer_motion__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs"),react_icons_ri__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react-icons/ri/index.esm.js"),next_navigation__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/navigation.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ModalLayout(_ref){var children=_ref.children,_ref$href=_ref.href,href=void 0===_ref$href?"":_ref$href,title=_ref.title,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"normal":_ref$variant,router=(0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)(),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),start=_useState[0],setStart=_useState[1],y=(0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.c)(0),dragControls=(0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.o)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){return document.body.classList.add("overflow-y-hidden"),function(){return document.body.classList.remove("overflow-y-hidden")}}));return __jsx(_Background_Background__WEBPACK_IMPORTED_MODULE_1__.Z,{onClick:function onClick(){return router.push(href,{scroll:!1})}},__jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.E.div,{dragControls,dragSnapToOrigin:!0,drag:"y",style:{y},dragElastic:{top:0,bottom:1},dragConstraints:{bottom:400,top:0},onDragStart:function handleDragStart(){return setStart(y.get())},onDragEnd:function handleDragEnd(){y.get()-start>=100&&router.push("/",{scroll:!1})},dragMomentum:!1,onClick:function onClick(e){return e.stopPropagation()},className:"relative  md:w-[768px] w-full ".concat("large"===variant?"h-[514px]":"h-[400px]"," bg-white rounded-t-basic p-[20px] pt-[11px] flex flex-col items-center justify-start"),transition:{duration:.5,ease:"easeInOut"},initial:{y:400},animate:{y:0},exit:{y:400},layout:!0},__jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_7__.tgW,{className:"absolute right-6 top-6",size:"24",onClick:function onClick(){return router.push(href,{scroll:!1})}}),__jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.E.div,{className:"bg-lightGray w-[30px] h-[4px] rounded-basic"}),__jsx("div",{className:"mb-[42px]"}),__jsx(_Text_Text__WEBPACK_IMPORTED_MODULE_2__.Z,{size:"lg",fontWeight:"bold"},title),__jsx("div",{className:"large"===variant?"mb-[20px]":"mb-[30px]"}),children))}ModalLayout.displayName="ModalLayout",ModalLayout.__docgenInfo={description:"",methods:[],displayName:"ModalLayout",props:{href:{defaultValue:{value:"''",computed:!1},required:!1,tsType:{name:"string"},description:""},variant:{defaultValue:{value:"'normal'",computed:!1},required:!1,tsType:{name:"union",raw:"'normal' | 'large'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'large'"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!0,tsType:{name:"string"},description:""}}};try{ModalLayout.displayName="ModalLayout",ModalLayout.__docgenInfo={description:"",displayName:"ModalLayout",props:{href:{defaultValue:{value:""},description:"",name:"href",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},variant:{defaultValue:{value:"normal"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"normal"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Modal/ModalLayout.tsx#ModalLayout"]={docgenInfo:ModalLayout.__docgenInfo,name:"ModalLayout",path:"components/Modal/ModalLayout.tsx#ModalLayout"})}catch(__react_docgen_typescript_loader_error){}},"./components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Text});var __jsx=__webpack_require__("./node_modules/react/index.js").createElement,Size={xxs:"text-xxs",xs:"text-xs",sm:"text-sm",base:"text-base",lg:"text-lg"},Color={100:"text-100",80:"text-80",30:"text-30",10:"text-10",black:"text-black",white:"text-white",gray:"text-gray",lightGray:"text-lightGray",darkGray:"text-darkGray",blue:"text-blue"},FontWeight={normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold"};function Text(_ref){var _ref$size=_ref.size,size=void 0===_ref$size?"base":_ref$size,_ref$color=_ref.color,color=void 0===_ref$color?"black":_ref$color,_ref$fontWeight=_ref.fontWeight,fontWeight=void 0===_ref$fontWeight?"normal":_ref$fontWeight,children=_ref.children,className=_ref.className;return __jsx("p",{className:"mt-[1px] ".concat(Size[size]," ").concat(Color[color]," ").concat(FontWeight[fontWeight]," ").concat(className)},children)}Text.displayName="Text",Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{size:{defaultValue:{value:"'base'",computed:!1},required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'base' | 'lg'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'lg'"}]},description:""},color:{defaultValue:{value:"'black'",computed:!1},required:!1,tsType:{name:"string"},description:""},fontWeight:{defaultValue:{value:"'normal'",computed:!1},required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'semibold' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'semibold'"},{name:"literal",value:"'bold'"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{size:{defaultValue:{value:"base"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xxs"'},{value:'"xs"'},{value:'"sm"'},{value:'"base"'},{value:'"lg"'}]}},color:{defaultValue:{value:"black"},description:"",name:"color",required:!1,type:{name:"string"}},fontWeight:{defaultValue:{value:"normal"},description:"",name:"fontWeight",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"normal"'},{value:'"semibold"'},{value:'"bold"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"components/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./stories/components/ShopModal.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Main:()=>Main,default:()=>ShopModal_stories});var _Main$parameters,_Main$parameters2,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),AnimatePresence=__webpack_require__("./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs"),ModalLayout=__webpack_require__("./components/Modal/ModalLayout.tsx"),navigation=__webpack_require__("./node_modules/next/navigation.js"),logo=__webpack_require__("./assets/image/logo.svg"),next_image=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),Text=__webpack_require__("./components/Text/Text.tsx"),Button=__webpack_require__("./components/Button/Button.tsx"),JokboInfo=__webpack_require__("./components/JokboInfo/JokboInfo.tsx"),BorderNotification=__webpack_require__("./components/BorderNotification/BorderNotification.tsx"),Loading=__webpack_require__("./components/Modal/Loading.tsx"),__jsx=react.createElement;function ShopModal(_ref){var showModal=_ref.showModal,href=_ref.href,imageArr=((0,navigation.useRouter)(),new Array(3).fill(!0)),_useState=(0,react.useState)(!0),loading=_useState[0],setLoading=_useState[1];(0,react.useEffect)((function(){return showModal&&setTimeout((function(){setLoading(!1)}),1e3),function(){setLoading(!0)}}),[showModal]);return __jsx(AnimatePresence.M,null,showModal&&__jsx(ModalLayout.Z,{title:loading?"맛도리가 가게를 찾고 있어요":"맛도리가 추천하는 가게",href},loading?__jsx(Loading.Z,null):__jsx(react.Fragment,null,__jsx("div",{className:"sm:w-[calc(412px-40px)] w-full"},__jsx("div",{className:"flex justify-between w-full gap-[6px]"},imageArr.map((function(_){return __jsx("div",{key:"1"},__jsx(next_image.Z,{src:logo.Z,height:"100",alt:"logo",className:"rounded-basic"}),__jsx("div",{className:"flex f-full justify-between p-[6px]"},__jsx(Text.Z,{fontWeight:"semibold"},"가메이"),__jsx(JokboInfo.Z,{kind:"starScore",count:4.5})))}))),__jsx("div",{className:"mb-[20px]"}),__jsx(BorderNotification.Z,{modal:!0,label:"* 맛도리 추천 가게는 별점과 무관하게 랜덤으로 추천됩니다."})),__jsx(Button.Z,{modal:!0,label:"다시 추천받기",variant:"active",onClick:function onClick(){return function func(){setLoading(!0),setTimeout((function(){setLoading(!1)}),1e3)}()}}))))}ShopModal.displayName="ShopModal",ShopModal.__docgenInfo={description:"",methods:[],displayName:"ShopModal",props:{showModal:{required:!0,tsType:{name:"boolean"},description:""},href:{required:!0,tsType:{name:"string"},description:""}}};try{ShopModal.displayName="ShopModal",ShopModal.__docgenInfo={description:"",displayName:"ShopModal",props:{showModal:{defaultValue:null,description:"",name:"showModal",required:!0,type:{name:"boolean"}},href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Modal/ShopModal.tsx#ShopModal"]={docgenInfo:ShopModal.__docgenInfo,name:"ShopModal",path:"components/Modal/ShopModal.tsx#ShopModal"})}catch(__react_docgen_typescript_loader_error){}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const ShopModal_stories={title:"Test/ShopModal",component:ShopModal,tags:["autodocs"]};var Main={args:{showModal:!0,href:"/"}};Main.parameters=_objectSpread(_objectSpread({},Main.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Main$parameters=Main.parameters)||void 0===_Main$parameters?void 0:_Main$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    showModal: true,\n    href: '/'\n  }\n}"},null===(_Main$parameters2=Main.parameters)||void 0===_Main$parameters2||null===(_Main$parameters2=_Main$parameters2.docs)||void 0===_Main$parameters2?void 0:_Main$parameters2.source)})})}}]);