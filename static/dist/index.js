(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

/**
 * get the window's scrolltop.
 * 
 * @return {Number}
 */

module.exports = function(){
  if (window.pageYOffset) return window.pageYOffset;
  return document.documentElement.clientHeight
    ? document.documentElement.scrollTop
    : document.body.scrollTop;
};

},{}],2:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var _scrolltop=require("scrolltop"),_scrolltop2=_interopRequireDefault(_scrolltop),app=document.getElementById("app"),heroHeading=document.querySelector(".hero h1");window.addEventListener("load",function(){app.classList.add("visible")}),window.addEventListener("scroll",function(e){var t=(0,_scrolltop2["default"])();if(t<window.innerHeight){var o=parseFloat((t/window.innerHeight).toFixed(3));heroHeading.style.opacity=1-o,heroHeading.style.transform="translateY("+(1-t)/6+"px)"}});

},{"scrolltop":1}]},{},[2]);
