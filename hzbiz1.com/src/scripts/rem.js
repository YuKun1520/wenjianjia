var rem = function(n){
    var e=n.document,
    t=e.documentElement,
    i=1440,
    d=i/16,
    o="orientationchange"in n?"orientationchange":"resize",
    a=function(){
        var n=t.clientWidth||760;n>1440&&(n=1440);
        t.style.fontSize=n/d+"px"
        return n/d
    };
    e.addEventListener&&(n.addEventListener(o,a,!1),e.addEventListener("DOMContentLoaded",a,!1))
    return a()
}(window);

export default rem