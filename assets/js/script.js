const  day = document.getElementById('day');
const night = document.getElementById('night');
const body = document.getElementById('body');
const i = document.getElementById('i');
const ii = document.getElementById('ii');
const iii = document.getElementById('iii');
const iiii = document.getElementById('iiii');
const n = document.getElementById('n');
const nn = document.getElementById('nn');
const nnn = document.getElementById('nnn');
const txt1 = document.getElementById('txt1');

day.style.display = 'none';
night.style.display = 'block';
night.addEventListener("click", function() {
    day.style.display = 'block';
    day.style.color = '#fff';
    night.style.display = 'none';
    body.style.background = '#000000';
    i.style.color = '#fff';
    ii.style.color = '#fff';
    iii.style.color = '#fff';
    iiii.style.color = '#fff';
    n.style.color = '#fff';
    nn.style.color = '#fff';
    nnn.style.color = '#fff';
    txt1.style.color = '#fff'
});
day.addEventListener("click", function() {
    day.style.display = 'none';
    night.style.display = 'block';
    body.style.background = '#fff'
    i.style.color = '#000000';
    ii.style.color = '#000000';
    iii.style.color = '#000000';
    iiii.style.color = '#000000';
    n.style.color = '#000000';
    nn.style.color = '#000000';
    nnn.style.color = '#000000';
    txt1.style.color = '#000000'
});
