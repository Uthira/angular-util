var utilApp=angular.module("ut.utils",[]);utilApp.directive("tableCopy",["$compile",function(e){return{scope:{tableId:"@",ignoreColumns:"="},restrict:"A",link:function(e,n,t){var l=function(e){var n=document.createElement("textarea");n.value=e,n=document.body.appendChild(n),n.select();try{if(!document.execCommand("copy"))throw"Not allowed."}finally{n.remove()}},o=function(){var n="";e.ignoreColumns||(e.ignoreColumns=[]);for(var t=document.getElementById(e.tableId),o=angular.element(t).find("tr"),r=0;r<o.length;r++){for(var a=angular.element(o[r]).find("td"),i=[],u=0;u<a.length;u++)e.ignoreColumns.indexOf(u)==-1&&i.push(angular.element(a[u]).text());n+=i.join(","),n+="\n"}l(n)};n.bind("click",o)}}}]);
