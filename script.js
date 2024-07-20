(function() {
    "use strict";

    var page = 1;
    var pageCount = 3;

    display("Starting page: " + page);
    document.getElementById("btnPrev").onclick = function() {
      page = ((page + pageCount + 1) % pageCount) + 1;
      display("previous, page now " + page);
    };
    document.getElementById("btnNext").onclick = function() {
      page = (page % pageCount) + 1;
      display("next, page now " + page);
    };

    function display(msg) {
      var p = document.createElement('p');
      p.innerHTML = String(msg);
      document.body.appendChild(p);
    }
  })();
  var pageArray = ["Next1.html", "","page3.html"];
function next(){
    var hr = window.location.href.splitOnLast("/");
    var page=hr[1].replace("/","");
    var nxtIndex =  pageArray.indexOf(page) + 1 ;
    if(nxtIndex > pageArray.length) nxtIndex=0;
    var redirect = hr[0]+"/"+pageArray[nxtIndex];
    window.location.href=redirect;
}
function prev(){
    var hr = window.location.href.splitOnLast("/");
    var page=hr[1].replace("/","");
    var nxtIndex =  pageArray.indexOf(page) - 1 ;
    if(nxtIndex < 0) nxtIndex=pageArray.length-1;
    var redirect = hr[0]+"/"+pageArray[nxtIndex];
    window.location.href=redirect;
}