(function() {
    document.addEventListener("DOMContentLoaded", function() {
        var worker = null;
        var pendingNum = -1;
        var btn = document.getElementById("startBtn");
        btn.addEventListener("click",function() {
            var num = document.getElementById("numInput").value;
            num = parseInt( num );
            if( !num || num < 0 ) {
                alert("올바르지 않은 숫자입니다.");
                return;
            }
            if( pendingNum > 0 ) {
                alert("현재 계산 중입니다.");
                return;
            }
            pendingNum = num;
            if( !worker ) {
                worker = new Worker( "main_worker.js" );
                worker.onmessage = function( event ) {
                    var res = document.getElementById("resInput");
                    res.value = event.data;
                    pendingNum = -1;
                }
            }
            worker.postMessage( num );
        })
    });
})();
