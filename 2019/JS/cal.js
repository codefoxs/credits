var tongshibixiu = 0;
var tongshixuanxiu = 0;

var daleibixiu = 0;

var zhuanyebixiu = 0;
var zhuanyexuanxiu = 0;

var kuazhuanyexuanxiu = 0;

var zhuanyeshixi = 0;
var biyelunwen = 0;


function tongshibixiu_adds(o){
    tongshibixiu += parseFloat(o.checked?o.value:-o.value);
}

function tongshixuanxiu_adds(o){
    tongshixuanxiu += parseFloat(o.checked?o.value:-o.value);
}

function daleibixiu_adds(o){
    daleibixiu += parseFloat(o.checked?o.value:-o.value);
}

function zhuanyebixiu_adds(o){
    zhuanyebixiu += parseFloat(o.checked?o.value:-o.value);
}

function zhuanyexuanxiu_adds(o){
    zhuanyexuanxiu += parseFloat(o.checked?o.value:-o.value);
}

function kuazhuanyexuanxiu_adds(o){
    kuazhuanyexuanxiu += parseFloat(o.checked?o.value:-o.value);
}

function zhuanyeshixi_adds(o){
    zhuanyeshixi += parseFloat(o.checked?o.value:-o.value);
}

function biyelunwen_adds(o){
    biyelunwen += parseFloat(o.checked?o.value:-o.value);
}

function calculate_all(){
    var tb = document.getElementById('change1');
    var ct = document.getElementById('change2');
    ct.remove();
    tb.innerHTML =  "<thead><tr><th colspan=\"2\">课程类别</th><th>已修学分</th><th>需修学分</th></tr></thead>"
                    + '<tbody id="change2"><tr><td rowspan=\"2\">通识课程</td><td>必修课</td><td>' + tongshibixiu
                    + "</td><td>62</td></tr><tr><td>选修课</td><td>" + tongshixuanxiu
                    + "</td><td>10</td></tr><tr><td>大类课程</td><td>必修课</td><td>" + daleibixiu
                    + "</td><td>21</td></tr><tr><td rowspan=\"5\">专业课程</td><td>专业必修课</td><td>" + zhuanyebixiu
                    + "</td><td>15</td></tr><tr><td>专业选修课</td><td>" + zhuanyexuanxiu
                    + "</td><td>33</td></tr><tr><td>跨专业选修课</td><td>" + kuazhuanyexuanxiu
                    + "</td><td>3</td></tr><tr><td>专业实习</td><td>" + zhuanyeshixi
                    + "</td><td>2</td></tr><tr><td>毕业论文</td><td>" + biyelunwen
                    + "</td><td>6</td></tr>";
}