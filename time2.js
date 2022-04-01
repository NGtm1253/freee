    var time_el = document.getElementById('time_el');
    setInterval(function(){
        var data = new Date();
        var hour = data.getHours();
        var min = data.getMinutes();
        var sec = data.getSeconds();
        var year = data.getFullYear();
        var month = data.getMonth()+1;
        var week = data.getDay();
        var day = data.getDate();
        var week_ja= new Array("日","月","火","水","木","金","土");
        time_el.innerHTML = year+"年"+month+"月"+day+"日"+week_ja[week]+"曜日"+hour+"時"+min+"分"+sec+"秒";
    },1000);