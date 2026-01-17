module.exports = [
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/styled-system/helpers.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__objRest",
    ()=>__objRest,
    "__spreadValues",
    ()=>__spreadValues,
    "compact",
    ()=>compact,
    "createCss",
    ()=>createCss,
    "createMergeCss",
    ()=>createMergeCss,
    "filterBaseConditions",
    ()=>filterBaseConditions,
    "getPatternStyles",
    ()=>getPatternStyles,
    "getSlotCompoundVariant",
    ()=>getSlotCompoundVariant,
    "getSlotRecipes",
    ()=>getSlotRecipes,
    "hypenateProperty",
    ()=>hypenateProperty,
    "isBaseCondition",
    ()=>isBaseCondition,
    "isObject",
    ()=>isObject,
    "mapObject",
    ()=>mapObject,
    "memo",
    ()=>memo,
    "mergeProps",
    ()=>mergeProps,
    "patternFns",
    ()=>patternFns,
    "splitProps",
    ()=>splitProps,
    "toHash",
    ()=>toHash,
    "uniq",
    ()=>uniq,
    "walkObject",
    ()=>walkObject,
    "withoutSpace",
    ()=>withoutSpace
]);
// src/assert.ts
function isObject(value) {
    return typeof value === "object" && value != null && !Array.isArray(value);
}
var isObjectOrArray = (obj)=>typeof obj === "object" && obj !== null;
// src/compact.ts
function compact(value) {
    return Object.fromEntries(Object.entries(value ?? {}).filter(([_, value2])=>value2 !== void 0));
}
// src/condition.ts
var isBaseCondition = (v)=>v === "base";
function filterBaseConditions(c) {
    return c.slice().filter((v)=>!isBaseCondition(v));
}
// src/hash.ts
function toChar(code) {
    return String.fromCharCode(code + (code > 25 ? 39 : 97));
}
function toName(code) {
    let name = "";
    let x;
    for(x = Math.abs(code); x > 52; x = x / 52 | 0)name = toChar(x % 52) + name;
    return toChar(x % 52) + name;
}
function toPhash(h, x) {
    let i = x.length;
    while(i)h = h * 33 ^ x.charCodeAt(--i);
    return h;
}
function toHash(value) {
    return toName(toPhash(5381, value) >>> 0);
}
// src/important.ts
var importantRegex = /\s*!(important)?/i;
function isImportant(value) {
    return typeof value === "string" ? importantRegex.test(value) : false;
}
function withoutImportant(value) {
    return typeof value === "string" ? value.replace(importantRegex, "").trim() : value;
}
function withoutSpace(str) {
    return typeof str === "string" ? str.replaceAll(" ", "_") : str;
}
// src/memo.ts
var memo = (fn)=>{
    const cache = /* @__PURE__ */ new Map();
    const get = (...args)=>{
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
    return get;
};
// src/merge-props.ts
var MERGE_OMIT = /* @__PURE__ */ new Set([
    "__proto__",
    "constructor",
    "prototype"
]);
function mergeProps(...sources) {
    return sources.reduce((prev, obj)=>{
        if (!obj) return prev;
        Object.keys(obj).forEach((key)=>{
            if (MERGE_OMIT.has(key)) return;
            const prevValue = prev[key];
            const value = obj[key];
            if (isObject(prevValue) && isObject(value)) {
                prev[key] = mergeProps(prevValue, value);
            } else {
                prev[key] = value;
            }
        });
        return prev;
    }, {});
}
// src/walk-object.ts
var isNotNullish = (element)=>element != null;
function walkObject(target, predicate, options = {}) {
    const { stop, getKey } = options;
    function inner(value, path = []) {
        if (isObjectOrArray(value)) {
            const result = {};
            for (const [prop, child] of Object.entries(value)){
                const key = getKey?.(prop, child) ?? prop;
                const childPath = [
                    ...path,
                    key
                ];
                if (stop?.(value, childPath)) {
                    return predicate(value, path);
                }
                const next = inner(child, childPath);
                if (isNotNullish(next)) {
                    result[key] = next;
                }
            }
            return result;
        }
        return predicate(value, path);
    }
    return inner(target);
}
function mapObject(obj, fn) {
    if (Array.isArray(obj)) return obj.map((value)=>fn(value));
    if (!isObject(obj)) return fn(obj);
    return walkObject(obj, (value)=>fn(value));
}
// src/normalize-style-object.ts
function toResponsiveObject(values, breakpoints) {
    return values.reduce((acc, current, index)=>{
        const key = breakpoints[index];
        if (current != null) {
            acc[key] = current;
        }
        return acc;
    }, {});
}
function normalizeStyleObject(styles, context, shorthand = true) {
    const { utility, conditions } = context;
    const { hasShorthand, resolveShorthand } = utility;
    return walkObject(styles, (value)=>{
        return Array.isArray(value) ? toResponsiveObject(value, conditions.breakpoints.keys) : value;
    }, {
        stop: (value)=>Array.isArray(value),
        getKey: shorthand ? (prop)=>hasShorthand ? resolveShorthand(prop) : prop : void 0
    });
}
// src/classname.ts
var fallbackCondition = {
    shift: (v)=>v,
    finalize: (v)=>v,
    breakpoints: {
        keys: []
    }
};
var sanitize = (value)=>typeof value === "string" ? value.replaceAll(/[\n\s]+/g, " ") : value;
function createCss(context) {
    const { utility, hash, conditions: conds = fallbackCondition } = context;
    const formatClassName = (str)=>[
            utility.prefix,
            str
        ].filter(Boolean).join("-");
    const hashFn = (conditions, className)=>{
        let result;
        if (hash) {
            const baseArray = [
                ...conds.finalize(conditions),
                className
            ];
            result = formatClassName(utility.toHash(baseArray, toHash));
        } else {
            const baseArray = [
                ...conds.finalize(conditions),
                formatClassName(className)
            ];
            result = baseArray.join(":");
        }
        return result;
    };
    return memo(({ base, ...styles } = {})=>{
        const styleObject = Object.assign(styles, base);
        const normalizedObject = normalizeStyleObject(styleObject, context);
        const classNames = /* @__PURE__ */ new Set();
        walkObject(normalizedObject, (value, paths)=>{
            if (value == null) return;
            const important = isImportant(value);
            const [prop, ...allConditions] = conds.shift(paths);
            const conditions = filterBaseConditions(allConditions);
            const transformed = utility.transform(prop, withoutImportant(sanitize(value)));
            let className = hashFn(conditions, transformed.className);
            if (important) className = `${className}!`;
            classNames.add(className);
        });
        return Array.from(classNames).join(" ");
    });
}
function compactStyles(...styles) {
    return styles.flat().filter((style)=>isObject(style) && Object.keys(compact(style)).length > 0);
}
function createMergeCss(context) {
    function resolve(styles) {
        const allStyles = compactStyles(...styles);
        if (allStyles.length === 1) return allStyles;
        return allStyles.map((style)=>normalizeStyleObject(style, context));
    }
    function mergeCss(...styles) {
        return mergeProps(...resolve(styles));
    }
    function assignCss(...styles) {
        return Object.assign({}, ...resolve(styles));
    }
    return {
        mergeCss: memo(mergeCss),
        assignCss
    };
}
// src/hypenate-property.ts
var wordRegex = /([A-Z])/g;
var msRegex = /^ms-/;
var hypenateProperty = memo((property)=>{
    if (property.startsWith("--")) return property;
    return property.replace(wordRegex, "-$1").replace(msRegex, "-ms-").toLowerCase();
});
// src/is-css-function.ts
var fns = [
    "min",
    "max",
    "clamp",
    "calc"
];
var fnRegExp = new RegExp(`^(${fns.join("|")})\\(.*\\)`);
var isCssFunction = (v)=>typeof v === "string" && fnRegExp.test(v);
// src/is-css-unit.ts
var lengthUnits = "cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%";
var lengthUnitsPattern = `(?:${lengthUnits.split(",").join("|")})`;
var lengthRegExp = new RegExp(`^[+-]?[0-9]*.?[0-9]+(?:[eE][+-]?[0-9]+)?${lengthUnitsPattern}$`);
var isCssUnit = (v)=>typeof v === "string" && lengthRegExp.test(v);
// src/is-css-var.ts
var isCssVar = (v)=>typeof v === "string" && /^var\(--.+\)$/.test(v);
// src/pattern-fns.ts
var patternFns = {
    map: mapObject,
    isCssFunction,
    isCssVar,
    isCssUnit
};
var getPatternStyles = (pattern, styles)=>{
    if (!pattern?.defaultValues) return styles;
    const defaults = typeof pattern.defaultValues === "function" ? pattern.defaultValues(styles) : pattern.defaultValues;
    return Object.assign({}, defaults, compact(styles));
};
// src/slot.ts
var getSlotRecipes = (recipe = {})=>{
    const init = (slot)=>({
            className: [
                recipe.className,
                slot
            ].filter(Boolean).join("__"),
            base: recipe.base?.[slot] ?? {},
            variants: {},
            defaultVariants: recipe.defaultVariants ?? {},
            compoundVariants: recipe.compoundVariants ? getSlotCompoundVariant(recipe.compoundVariants, slot) : []
        });
    const slots = recipe.slots ?? [];
    const recipeParts = slots.map((slot)=>[
            slot,
            init(slot)
        ]);
    for (const [variantsKey, variantsSpec] of Object.entries(recipe.variants ?? {})){
        for (const [variantKey, variantSpec] of Object.entries(variantsSpec)){
            recipeParts.forEach(([slot, slotRecipe])=>{
                slotRecipe.variants[variantsKey] ??= {};
                slotRecipe.variants[variantsKey][variantKey] = variantSpec[slot] ?? {};
            });
        }
    }
    return Object.fromEntries(recipeParts);
};
var getSlotCompoundVariant = (compoundVariants, slotName)=>compoundVariants.filter((compoundVariant)=>compoundVariant.css[slotName]).map((compoundVariant)=>({
            ...compoundVariant,
            css: compoundVariant.css[slotName]
        }));
// src/split-props.ts
function splitProps(props, ...keys) {
    const descriptors = Object.getOwnPropertyDescriptors(props);
    const dKeys = Object.keys(descriptors);
    const split = (k)=>{
        const clone = {};
        for(let i = 0; i < k.length; i++){
            const key = k[i];
            if (descriptors[key]) {
                Object.defineProperty(clone, key, descriptors[key]);
                delete descriptors[key];
            }
        }
        return clone;
    };
    const fn = (key)=>split(Array.isArray(key) ? key : dKeys.filter(key));
    return keys.map(fn).concat(split(dKeys));
}
// src/uniq.ts
var uniq = (...items)=>{
    const set = items.reduce((acc, currItems)=>{
        if (currItems) {
            currItems.forEach((item)=>acc.add(item));
        }
        return acc;
    }, /* @__PURE__ */ new Set([]));
    return Array.from(set);
};
;
function __spreadValues(a, b) {
    return {
        ...a,
        ...b
    };
}
function __objRest(source, exclude) {
    return Object.fromEntries(Object.entries(source).filter(([key])=>!exclude.includes(key)));
}
}),
"[project]/styled-system/css/conditions.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "finalizeConditions",
    ()=>finalizeConditions,
    "isCondition",
    ()=>isCondition,
    "sortConditions",
    ()=>sortConditions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$helpers$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/styled-system/helpers.mjs [app-rsc] (ecmascript)");
;
const conditionsStr = "_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_complete,_incomplete,_dragging,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_grabbed,_underValue,_overValue,_atValue,_default,_optional,_open,_closed,_fullscreen,_loading,_hidden,_current,_currentPage,_currentStep,_today,_unavailable,_rangeStart,_rangeEnd,_now,_topmost,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,_icon,_starting,_noscript,_invertedColors,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,2xlDown,smToMd,smToLg,smToXl,smTo2xl,mdToLg,mdToXl,mdTo2xl,lgToXl,lgTo2xl,xlTo2xl,@/xs,@/sm,@/md,@/lg,@/xl,@/2xl,@/3xl,@/4xl,@/5xl,@/6xl,@/7xl,@/8xl,base";
const conditions = new Set(conditionsStr.split(','));
const conditionRegex = /^@|&|&$/;
function isCondition(value) {
    return conditions.has(value) || conditionRegex.test(value);
}
const underscoreRegex = /^_/;
const conditionsSelectorRegex = /&|@/;
function finalizeConditions(paths) {
    return paths.map((path)=>{
        if (conditions.has(path)) {
            return path.replace(underscoreRegex, '');
        }
        if (conditionsSelectorRegex.test(path)) {
            return `[${(0, __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$helpers$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withoutSpace"])(path.trim())}]`;
        }
        return path;
    });
}
function sortConditions(paths) {
    return paths.sort((a, b)=>{
        const aa = isCondition(a);
        const bb = isCondition(b);
        if (aa && !bb) return 1;
        if (!aa && bb) return -1;
        return 0;
    });
}
}),
"[project]/styled-system/css/css.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assignCss",
    ()=>assignCss,
    "css",
    ()=>css,
    "mergeCss",
    ()=>mergeCss
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$helpers$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/styled-system/helpers.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$css$2f$conditions$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/styled-system/css/conditions.mjs [app-rsc] (ecmascript)");
;
;
const utilities = "aspectRatio:asp,boxDecorationBreak:bx-db,zIndex:z,boxSizing:bx-s,objectPosition:obj-p,objectFit:obj-f,overscrollBehavior:ovs-b,overscrollBehaviorX:ovs-bx,overscrollBehaviorY:ovs-by,position:pos/1,top:top,left:left,inset:inset,insetInline:inset-x/insetX,insetBlock:inset-y/insetY,insetBlockEnd:inset-be,insetBlockStart:inset-bs,insetInlineEnd:inset-e/insetEnd/end,insetInlineStart:inset-s/insetStart/start,right:right,bottom:bottom,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:flex-b,flex:flex,flexDirection:flex-d/flexDir,flexGrow:flex-g,flexShrink:flex-sh,gridTemplateColumns:grid-tc,gridTemplateRows:grid-tr,gridColumn:grid-c,gridRow:grid-r,gridColumnStart:grid-cs,gridColumnEnd:grid-ce,gridAutoFlow:grid-af,gridAutoColumns:grid-ac,gridAutoRows:grid-ar,gap:gap,gridGap:grid-g,gridRowGap:grid-rg,gridColumnGap:grid-cg,rowGap:rg,columnGap:cg,justifyContent:jc,alignContent:ac,alignItems:ai,alignSelf:as,padding:p/1,paddingLeft:pl/1,paddingRight:pr/1,paddingTop:pt/1,paddingBottom:pb/1,paddingBlock:py/1/paddingY,paddingBlockEnd:pbe,paddingBlockStart:pbs,paddingInline:px/paddingX/1,paddingInlineEnd:pe/1/paddingEnd,paddingInlineStart:ps/1/paddingStart,marginLeft:ml/1,marginRight:mr/1,marginTop:mt/1,marginBottom:mb/1,margin:m/1,marginBlock:my/1/marginY,marginBlockEnd:mbe,marginBlockStart:mbs,marginInline:mx/1/marginX,marginInlineEnd:me/1/marginEnd,marginInlineStart:ms/1/marginStart,spaceX:sx,spaceY:sy,outlineWidth:ring-w/ringWidth,outlineColor:ring-c/ringColor,outline:ring/1,outlineOffset:ring-o/ringOffset,focusRing:focus-ring,focusVisibleRing:focus-v-ring,focusRingColor:focus-ring-c,focusRingOffset:focus-ring-o,focusRingWidth:focus-ring-w,focusRingStyle:focus-ring-s,divideX:dvd-x,divideY:dvd-y,divideColor:dvd-c,divideStyle:dvd-s,width:w/1,inlineSize:w-is,minWidth:min-w/minW,minInlineSize:min-w-is,maxWidth:max-w/maxW,maxInlineSize:max-w-is,height:h/1,blockSize:h-bs,minHeight:min-h/minH,minBlockSize:min-h-bs,maxHeight:max-h/maxH,maxBlockSize:max-b,boxSize:size,color:c,fontFamily:ff,fontSize:fs,fontSizeAdjust:fs-a,fontPalette:fp,fontKerning:fk,fontFeatureSettings:ff-s,fontWeight:fw,fontSmoothing:fsmt,fontVariant:fv,fontVariantAlternates:fv-alt,fontVariantCaps:fv-caps,fontVariationSettings:fv-s,fontVariantNumeric:fv-num,letterSpacing:ls,lineHeight:lh,textAlign:ta,textDecoration:td,textDecorationColor:td-c,textEmphasisColor:te-c,textDecorationStyle:td-s,textDecorationThickness:td-t,textUnderlineOffset:tu-o,textTransform:tt,textIndent:ti,textShadow:tsh,textShadowColor:tsh-c/textShadowColor,WebkitTextFillColor:wktf-c,textOverflow:tov,verticalAlign:va,wordBreak:wb,textWrap:tw,truncate:trunc,lineClamp:lc,listStyleType:li-t,listStylePosition:li-pos,listStyleImage:li-img,listStyle:li-s,backgroundPosition:bg-p/bgPosition,backgroundPositionX:bg-p-x/bgPositionX,backgroundPositionY:bg-p-y/bgPositionY,backgroundAttachment:bg-a/bgAttachment,backgroundClip:bg-cp/bgClip,background:bg/1,backgroundColor:bg-c/bgColor,backgroundOrigin:bg-o/bgOrigin,backgroundImage:bg-i/bgImage,backgroundRepeat:bg-r/bgRepeat,backgroundBlendMode:bg-bm/bgBlendMode,backgroundSize:bg-s/bgSize,backgroundGradient:bg-grad/bgGradient,backgroundLinear:bg-linear/bgLinear,backgroundRadial:bg-radial/bgRadial,backgroundConic:bg-conic/bgConic,textGradient:txt-grad,gradientFromPosition:grad-from-pos,gradientToPosition:grad-to-pos,gradientFrom:grad-from,gradientTo:grad-to,gradientVia:grad-via,gradientViaPosition:grad-via-pos,borderRadius:bdr/rounded,borderTopLeftRadius:bdr-tl/roundedTopLeft,borderTopRightRadius:bdr-tr/roundedTopRight,borderBottomRightRadius:bdr-br/roundedBottomRight,borderBottomLeftRadius:bdr-bl/roundedBottomLeft,borderTopRadius:bdr-t/roundedTop,borderRightRadius:bdr-r/roundedRight,borderBottomRadius:bdr-b/roundedBottom,borderLeftRadius:bdr-l/roundedLeft,borderStartStartRadius:bdr-ss/roundedStartStart,borderStartEndRadius:bdr-se/roundedStartEnd,borderStartRadius:bdr-s/roundedStart,borderEndStartRadius:bdr-es/roundedEndStart,borderEndEndRadius:bdr-ee/roundedEndEnd,borderEndRadius:bdr-e/roundedEnd,border:bd,borderWidth:bd-w,borderTopWidth:bd-t-w,borderLeftWidth:bd-l-w,borderRightWidth:bd-r-w,borderBottomWidth:bd-b-w,borderBlockStartWidth:bd-bs-w,borderBlockEndWidth:bd-be-w,borderColor:bd-c,borderInline:bd-x/borderX,borderInlineWidth:bd-x-w/borderXWidth,borderInlineColor:bd-x-c/borderXColor,borderBlock:bd-y/borderY,borderBlockWidth:bd-y-w/borderYWidth,borderBlockColor:bd-y-c/borderYColor,borderLeft:bd-l,borderLeftColor:bd-l-c,borderInlineStart:bd-s/borderStart,borderInlineStartWidth:bd-s-w/borderStartWidth,borderInlineStartColor:bd-s-c/borderStartColor,borderRight:bd-r,borderRightColor:bd-r-c,borderInlineEnd:bd-e/borderEnd,borderInlineEndWidth:bd-e-w/borderEndWidth,borderInlineEndColor:bd-e-c/borderEndColor,borderTop:bd-t,borderTopColor:bd-t-c,borderBottom:bd-b,borderBottomColor:bd-b-c,borderBlockEnd:bd-be,borderBlockEndColor:bd-be-c,borderBlockStart:bd-bs,borderBlockStartColor:bd-bs-c,opacity:op,boxShadow:bx-sh/shadow,boxShadowColor:bx-sh-c/shadowColor,mixBlendMode:mix-bm,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:bkdp,backdropBlur:bkdp-blur,backdropBrightness:bkdp-brightness,backdropContrast:bkdp-contrast,backdropGrayscale:bkdp-grayscale,backdropHueRotate:bkdp-hue-rotate,backdropInvert:bkdp-invert,backdropOpacity:bkdp-opacity,backdropSaturate:bkdp-saturate,backdropSepia:bkdp-sepia,borderCollapse:bd-cl,borderSpacing:bd-sp,borderSpacingX:bd-sx,borderSpacingY:bd-sy,tableLayout:tbl,transitionTimingFunction:trs-tmf,transitionDelay:trs-dly,transitionDuration:trs-dur,transitionProperty:trs-prop,transition:trs,animation:anim,animationName:anim-n,animationTimingFunction:anim-tmf,animationDuration:anim-dur,animationDelay:anim-dly,animationPlayState:anim-ps,animationComposition:anim-comp,animationFillMode:anim-fm,animationDirection:anim-dir,animationIterationCount:anim-ic,animationRange:anim-r,animationState:anim-s,animationRangeStart:anim-rs,animationRangeEnd:anim-re,animationTimeline:anim-tl,transformOrigin:trf-o,transformBox:trf-b,transformStyle:trf-s,transform:trf,rotate:rotate,rotateX:rotate-x,rotateY:rotate-y,rotateZ:rotate-z,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x/x,translateY:translate-y/y,translateZ:translate-z/z,accentColor:ac-c,caretColor:ca-c,scrollBehavior:scr-bhv,scrollbar:scr-bar,scrollbarColor:scr-bar-c,scrollbarGutter:scr-bar-g,scrollbarWidth:scr-bar-w,scrollMargin:scr-m,scrollMarginLeft:scr-ml,scrollMarginRight:scr-mr,scrollMarginTop:scr-mt,scrollMarginBottom:scr-mb,scrollMarginBlock:scr-my/scrollMarginY,scrollMarginBlockEnd:scr-mbe,scrollMarginBlockStart:scr-mbt,scrollMarginInline:scr-mx/scrollMarginX,scrollMarginInlineEnd:scr-me,scrollMarginInlineStart:scr-ms,scrollPadding:scr-p,scrollPaddingBlock:scr-py/scrollPaddingY,scrollPaddingBlockStart:scr-pbs,scrollPaddingBlockEnd:scr-pbe,scrollPaddingInline:scr-px/scrollPaddingX,scrollPaddingInlineEnd:scr-pe,scrollPaddingInlineStart:scr-ps,scrollPaddingLeft:scr-pl,scrollPaddingRight:scr-pr,scrollPaddingTop:scr-pt,scrollPaddingBottom:scr-pb,scrollSnapAlign:scr-sa,scrollSnapStop:scrs-s,scrollSnapType:scrs-t,scrollSnapStrictness:scrs-strt,scrollSnapMargin:scrs-m,scrollSnapMarginTop:scrs-mt,scrollSnapMarginBottom:scrs-mb,scrollSnapMarginLeft:scrs-ml,scrollSnapMarginRight:scrs-mr,scrollSnapCoordinate:scrs-c,scrollSnapDestination:scrs-d,scrollSnapPointsX:scrs-px,scrollSnapPointsY:scrs-py,scrollSnapTypeX:scrs-tx,scrollSnapTypeY:scrs-ty,scrollTimeline:scrtl,scrollTimelineAxis:scrtl-a,scrollTimelineName:scrtl-n,touchAction:tch-a,userSelect:us,overflow:ov,overflowWrap:ov-wrap,overflowX:ov-x,overflowY:ov-y,overflowAnchor:ov-a,overflowBlock:ov-b,overflowInline:ov-i,overflowClipBox:ovcp-bx,overflowClipMargin:ovcp-m,overscrollBehaviorBlock:ovs-bb,overscrollBehaviorInline:ovs-bi,fill:fill,stroke:stk,strokeWidth:stk-w,strokeDasharray:stk-dsh,strokeDashoffset:stk-do,strokeLinecap:stk-lc,strokeLinejoin:stk-lj,strokeMiterlimit:stk-ml,strokeOpacity:stk-op,srOnly:sr,debug:debug,appearance:ap,backfaceVisibility:bfv,clipPath:cp-path,hyphens:hy,mask:msk,maskImage:msk-i,maskSize:msk-s,textSizeAdjust:txt-adj,container:cq,containerName:cq-n,containerType:cq-t,cursor:cursor,textStyle:textStyle";
const classNameByProp = new Map();
const shorthands = new Map();
utilities.split(',').forEach((utility)=>{
    const [prop, meta] = utility.split(':');
    const [className, ...shorthandList] = meta.split('/');
    classNameByProp.set(prop, className);
    if (shorthandList.length) {
        shorthandList.forEach((shorthand)=>{
            shorthands.set(shorthand === '1' ? className : shorthand, prop);
        });
    }
});
const resolveShorthand = (prop)=>shorthands.get(prop) || prop;
const context = {
    conditions: {
        shift: __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$css$2f$conditions$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sortConditions"],
        finalize: __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$css$2f$conditions$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["finalizeConditions"],
        breakpoints: {
            keys: [
                "base",
                "sm",
                "md",
                "lg",
                "xl",
                "2xl"
            ]
        }
    },
    utility: {
        transform: (prop, value)=>{
            const key = resolveShorthand(prop);
            const propKey = classNameByProp.get(key) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$helpers$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hypenateProperty"])(key);
            return {
                className: `${propKey}_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$helpers$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withoutSpace"])(value)}`
            };
        },
        hasShorthand: true,
        toHash: (path, hashFn)=>hashFn(path.join(":")),
        resolveShorthand: resolveShorthand
    }
};
const cssFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$helpers$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCss"])(context);
const css = (...styles)=>cssFn(mergeCss(...styles));
css.raw = (...styles)=>mergeCss(...styles);
const { mergeCss, assignCss } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$helpers$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createMergeCss"])(context);
}),
"[project]/styled-system/css/cx.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cx",
    ()=>cx
]);
function cx() {
    let str = '', i = 0, arg;
    for(; i < arguments.length;){
        if ((arg = arguments[i++]) && typeof arg === 'string') {
            str && (str += ' ');
            str += arg;
        }
    }
    return str;
}
;
}),
"[project]/styled-system/css/cva.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertCompoundVariant",
    ()=>assertCompoundVariant,
    "cva",
    ()=>cva,
    "getCompoundVariantCss",
    ()=>getCompoundVariantCss
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$helpers$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/styled-system/helpers.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$css$2f$css$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/styled-system/css/css.mjs [app-rsc] (ecmascript)");
;
;
const defaults = (conf)=>({
        base: {},
        variants: {},
        defaultVariants: {},
        compoundVariants: [],
        ...conf
    });
function cva(config) {
    const { base, variants, defaultVariants, compoundVariants } = defaults(config);
    const getVariantProps = (variants)=>({
            ...defaultVariants,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$helpers$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compact"])(variants)
        });
    function resolve(props = {}) {
        const computedVariants = getVariantProps(props);
        let variantCss = {
            ...base
        };
        for (const [key, value] of Object.entries(computedVariants)){
            if (variants[key]?.[value]) {
                variantCss = (0, __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$css$2f$css$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeCss"])(variantCss, variants[key][value]);
            }
        }
        const compoundVariantCss = getCompoundVariantCss(compoundVariants, computedVariants);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$css$2f$css$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeCss"])(variantCss, compoundVariantCss);
    }
    function merge(__cva) {
        const override = defaults(__cva.config);
        const variantKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$helpers$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uniq"])(__cva.variantKeys, Object.keys(variants));
        return cva({
            base: (0, __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$css$2f$css$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeCss"])(base, override.base),
            variants: Object.fromEntries(variantKeys.map((key)=>[
                    key,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$css$2f$css$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeCss"])(variants[key], override.variants[key])
                ])),
            defaultVariants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$helpers$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeProps"])(defaultVariants, override.defaultVariants),
            compoundVariants: [
                ...compoundVariants,
                ...override.compoundVariants
            ]
        });
    }
    function cvaFn(props) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$css$2f$css$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["css"])(resolve(props));
    }
    const variantKeys = Object.keys(variants);
    function splitVariantProps(props) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$helpers$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["splitProps"])(props, variantKeys);
    }
    const variantMap = Object.fromEntries(Object.entries(variants).map(([key, value])=>[
            key,
            Object.keys(value)
        ]));
    return Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$helpers$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["memo"])(cvaFn), {
        __cva__: true,
        variantMap,
        variantKeys,
        raw: resolve,
        config,
        merge,
        splitVariantProps,
        getVariantProps
    });
}
function getCompoundVariantCss(compoundVariants, variantMap) {
    let result = {};
    compoundVariants.forEach((compoundVariant)=>{
        const isMatching = Object.entries(compoundVariant).every(([key, value])=>{
            if (key === 'css') return true;
            const values = Array.isArray(value) ? value : [
                value
            ];
            return values.some((value)=>variantMap[key] === value);
        });
        if (isMatching) {
            result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$css$2f$css$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeCss"])(result, compoundVariant.css);
        }
    });
    return result;
}
function assertCompoundVariant(name, compoundVariants, variants, prop) {
    if (compoundVariants.length > 0 && typeof variants?.[prop] === 'object') {
        throw new Error(`[recipe:${name}:${prop}] Conditions are not supported when using compound variants.`);
    }
}
}),
"[project]/styled-system/css/sva.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sva",
    ()=>sva
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$helpers$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/styled-system/helpers.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$css$2f$cva$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/styled-system/css/cva.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$css$2f$cx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/styled-system/css/cx.mjs [app-rsc] (ecmascript)");
;
;
;
function sva(config) {
    const slots = Object.entries((0, __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$helpers$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSlotRecipes"])(config)).map(([slot, slotCva])=>[
            slot,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$css$2f$cva$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])(slotCva)
        ]);
    const defaultVariants = config.defaultVariants ?? {};
    const classNameMap = slots.reduce((acc, [slot, cvaFn])=>{
        if (config.className) acc[slot] = cvaFn.config.className;
        return acc;
    }, {});
    function svaFn(props) {
        const result = slots.map(([slot, cvaFn])=>[
                slot,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$css$2f$cx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cx"])(cvaFn(props), classNameMap[slot])
            ]);
        return Object.fromEntries(result);
    }
    function raw(props) {
        const result = slots.map(([slot, cvaFn])=>[
                slot,
                cvaFn.raw(props)
            ]);
        return Object.fromEntries(result);
    }
    const variants = config.variants ?? {};
    const variantKeys = Object.keys(variants);
    function splitVariantProps(props) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$helpers$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["splitProps"])(props, variantKeys);
    }
    const getVariantProps = (variants)=>({
            ...defaultVariants,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$helpers$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compact"])(variants)
        });
    const variantMap = Object.fromEntries(Object.entries(variants).map(([key, value])=>[
            key,
            Object.keys(value)
        ]));
    return Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$helpers$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["memo"])(svaFn), {
        __cva__: false,
        raw,
        config,
        variantMap,
        variantKeys,
        classNameMap,
        splitVariantProps,
        getVariantProps
    });
}
}),
"[project]/styled-system/css/index.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$css$2f$css$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/styled-system/css/css.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$css$2f$cx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/styled-system/css/cx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$css$2f$cva$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/styled-system/css/cva.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$css$2f$sva$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/styled-system/css/sva.mjs [app-rsc] (ecmascript)");
;
;
;
;
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$3_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.3_@babel+core@7.28.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$css$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/styled-system/css/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$css$2f$css$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/styled-system/css/css.mjs [app-rsc] (ecmascript)");
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$3_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$styled$2d$system$2f$css$2f$css$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["css"])({
            fontSize: '2xl',
            fontWeight: 'bold'
        }),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$3_$40$babel$2b$core$40$7$2e$28$2e$6_react$2d$dom$40$19$2e$2$2e$3_react$40$19$2e$2$2e$3_$5f$react$40$19$2e$2$2e$3$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Hello 🐼!"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b80b8a3a._.js.map