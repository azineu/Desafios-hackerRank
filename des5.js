//CONVERSOR DE HORAR AM E PM PARA HORA MILITAR

const s = '07:05:45PM'
function time(s){
    s.split('')

    let hr=parseInt(s[0]+s[1]);
    let min = s[3]+s[4];
    let seg = s[6]+s[7];
    let ampm = s[s.length-2];

    if(hr>=12 && ampm==='A'){
        hr= hr-12;
    }else if(hr<12 && ampm==='P'){
        hr=hr+12;
    }
    if (hr<10){
        return(`0${hr}:${min}:${seg}`);
    }else{
        return(`${hr}:${min}:${seg}`);
    }
}
console.log(time(s))