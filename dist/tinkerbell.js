module.exports=function(n,t,r,e){var o=t-n;return function(u,a){var i,c,f,m=Date.now();return c=function c(d){return requestAnimationFrame(function(d){f=Math.round(e(Date.now()-m,n,o,r)),(t<n?f>t:f<t)&&!i?(c(),u(f)):a&&a()})}(),function(){cancelAnimationFrame(c),i=!0}}};
//# sourceMappingURL=tinkerbell.js.map
