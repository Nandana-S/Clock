setInterval(()=>{
    d = new Date;
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();

    hrotation = 30*hr + (min/2);
    mrotation = 6*min;
    srotation = 6*sec;

    hours.style.transform = `rotate(${hrotation}deg)`
    minutes.style.transform = `rotate(${mrotation}deg)`
    seconds.style.transform = `rotate(${srotation}deg)`
}, 1000);