import *as React from 'react';
import { StyleSheet } from 'react-native';
import { useMediaQuery } from '../grids/useGridQuries';
import { normalize } from '../normalize/normalized';
import { fs } from './fontHelper';


export const StyleHelper = obj =>{
const {mQL} = useMediaQuery();
// console.log(obj.ma);


const mStyle = {
    globalStyle: {
        
    },
    margin: {

    },
    padding: {

    },
    ux: {

    },
    flex: {

    },
    font: {

    },
    position:{

    },
    iconSize:{

    }



} 

if (obj.ma) {
    if(Array.isArray(obj.ma)){
        mStyle.margin['margin'] = normalize(mQL(obj.ma));
    } else {
        mStyle.margin['margin'] = normalize(obj.ma);
    }
}
if (obj.mb) {
    if(Array.isArray(obj.mb)){
        mStyle.margin['marginBottom'] = normalize(mQL(obj.mb));
    } else {
        mStyle.margin['marginBottom'] = normalize(obj.mb);
    } 
}
if (obj.mt) {
    if(Array.isArray(obj.mt)){
        mStyle.margin['marginTop'] = normalize(mQL(obj.mt));
    } else {
        mStyle.margin['marginTop'] = normalize(obj.mt);
    } 
}
if (obj.ml) {
    if(Array.isArray(obj.ml)){
        mStyle.margin['marginLeft'] = normalize(mQL(obj.ml));
    } else {
        mStyle.margin['marginLeft'] = normalize(obj.ml);
    } 
}
if (obj.mr) {
    if(Array.isArray(obj.mr)){
        mStyle.margin['marginRight'] = normalize(mQL(obj.mr));
    } else {
        mStyle.margin['marginRight'] = normalize(obj.mr);
    } 
}
if (obj.mh) {
    if(Array.isArray(obj.mh)){
        mStyle.margin['marginHorizontal'] = normalize(mQL(obj.mh));
    } else {
        mStyle.margin['marginHorizontal'] = normalize(obj.mh);
    } 
}
if (obj.mv) {
    if(Array.isArray(obj.mv)){
        mStyle.margin['marginVertical'] = normalize(mQL(obj.mv));
    } else {
        mStyle.margin['marginVertical'] = normalize(obj.mv);
    } 
}

// margin end padding start.....


if (obj.pa) {
    if(Array.isArray(obj.pa)){
        mStyle.padding['padding'] = normalize(mQL(obj.pa));
    } else {
        mStyle.padding['padding'] = normalize(obj.pa);
    }
}
if (obj.pb) {
    if(Array.isArray(obj.pb)){
        mStyle.padding['paddingBottom'] = normalize(mQL(obj.pb));
    } else {
        mStyle.padding['paddingBottom'] = normalize(obj.pb);
    } 
}
if (obj.pt) {
    if(Array.isArray(obj.pt)){
        mStyle.padding['paddingTop'] = normalize(mQL(obj.pt));
    } else {
        mStyle.padding['paddingTop'] = normalize(obj.pt);
    } 
}
if (obj.pl) {
    if(Array.isArray(obj.pl)){
        mStyle.padding['paddingLeft'] = normalize(mQL(obj.pl));
    } else {
        mStyle.padding['paddingLeft'] = normalize(obj.pl);
    } 
}
if (obj.pr) {
    if(Array.isArray(obj.pr)){
        mStyle.padding['paddingRight'] = normalize(mQL(obj.pr));
    } else {
        mStyle.padding['paddingRight'] = normalize(obj.pr);
    } 
}
if (obj.ph) {
    if(Array.isArray(obj.ph)){
        mStyle.padding['paddingHorizontal'] = normalize(mQL(obj.ph));
    } else {
        mStyle.padding['paddingHorizontal'] = normalize(obj.ph);
    } 
}
if (obj.pv) {
    if(Array.isArray(obj.pv)){
        mStyle.padding['paddingVertical'] = normalize(mQL(obj.pv));
    } else {
        mStyle.padding['paddingVertical'] = normalize(obj.pv);
    } 
}

// UX 
if (obj.w) {
    if(Array.isArray(obj.w)){
        mStyle.ux['width'] = normalize(mQL(obj.w));
    } else {
        mStyle.ux['width'] = normalize(obj.w);
    } 
}

if (obj.h) {
    if(Array.isArray(obj.h)){
        mStyle.ux['heigh'] = normalize(mQL(obj.h));
    } else {
        mStyle.ux['height'] = normalize(obj.h);
    } 
}

// flex 
if (obj.flex) {
    if(Array.isArray(obj.flex)){
        mStyle.flex['flex'] = mQL(obj.flex);
    } else {
        mStyle.flex['flex'] = obj.flex;
    } 
}

if (obj.fDir) {
    if(Array.isArray(obj.fDir)){
        mStyle.flex['flexDirection'] = mQL(obj.fDir);
    } else {
        mStyle.flex['flexDirection'] = obj.fDir;
    } 
}

if (obj.aItems) {
    if(Array.isArray(obj.aItems)){
        mStyle.flex['alignItems'] = mQL(obj.aItems);
    } else {
        mStyle.flex['alignItems'] = obj.aItems;
    } 
}

if (obj.jc) {
    if(Array.isArray(obj.jc)){
        mStyle.flex['justifyContent'] = mQL(obj.jc);
    } else {
        mStyle.flex['justifyContent'] = obj.jc;
    } 
}

//font size
if (obj.fs) {
    if(Array.isArray(obj.fs)){
        mStyle.font['fontSize'] = fs(mQL(obj.fs));
    } else {
        mStyle.font['fontSize'] = fs(obj.fs);
    } 
}

//iconSize
if (obj.iconSize) {
    if(Array.isArray(obj.iconSize)){
        mStyle.iconSize['fontSize'] = fs(mQL(obj.iconSize));
    } else {
        mStyle.iconSize['fontSize'] = fs(obj.iconSize);
    } 
}





const style = StyleSheet.create(mStyle);
return style;
}
