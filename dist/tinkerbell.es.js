export default function(n,t,r,e){var a=t-n;return function(o,u){var i,c,f,m=Date.now();return c=function c(d){return requestAnimationFrame(function(d){f=Math.round(e(Date.now()-m,n,a,r)),(t<n?f>t:f<t)&&!i?(c(),o(f)):u&&u()})}(),function(){cancelAnimationFrame(c),i=!0}}};
//# sourceMappingURL=tinkerbell.es.js.map
