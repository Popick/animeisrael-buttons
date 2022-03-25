// ==UserScript==
// @name     			Next OnePiece Episode
// @description 	The script adds next and previous episodes buttons to the anime israel website.
// @version  			1.0
// @include  			https://animeisrael.website/watch/fulllink/op/*
// @require 			https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @author 				Popick
// ==/UserScript==


var testDiv = document.getElementsByClassName("content container");
var strEpsideNumber = (window.location.href).slice(57,-4);
var intNextEpisodeNumber = parseInt(strEpsideNumber)+1;
var intPreEpisodeNumber = parseInt(strEpsideNumber)-1;

function goNext(){
  window.open("https://animeisrael.website/watch/fulllink/op/fulllinkop-"+intNextEpisodeNumber+".php","_self"); 
}

function goBack(){
  window.open("https://animeisrael.website/watch/fulllink/op/fulllinkop-"+intPreEpisodeNumber+".php","_self"); 
}


$(testDiv).append('<button id="nextBtn" >Next Episode ('+intNextEpisodeNumber+')</button><button id="backBtn" >Previous Episode ('+intPreEpisodeNumber+')</button>');

$("#nextBtn").css("float","right");
$("#backBtn").css("float","left");

document.getElementById("nextBtn").onclick = goNext;
document.getElementById("backBtn").onclick = goBack;

