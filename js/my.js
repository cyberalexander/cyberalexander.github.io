/**
 * Random intro title
 */
const hero = [];
hero[0] = "Hola";
hero[1] = "Hello";
hero[2] = "Bonjour";
const myRandom = Math.floor(Math.random() * hero.length);
document.getElementById("hero").innerHTML = hero[myRandom];

/**
 * circular js
 */
let TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = !1;
};
TxtRotate.prototype.tick = function () {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];
    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1)
    }
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
    const that = this;
    let delta = 300 - Math.random() * 100;
    if (this.isDeleting) {
        delta /= 2
    }
    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = !0
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = !1;
        this.loopNum++;
        delta = 500;
    }
    setTimeout(function () {
        that.tick()
    }, delta)
};
window.onload = function () {
    const elements = document.getElementsByClassName('txt-rotate');
    for (const element of elements) {
        const toRotate = element.getAttribute('data-rotate');
        const period = element.getAttribute('data-period');
        if (toRotate) {
            const txtRotate = new TxtRotate(element, JSON.parse(toRotate), period);
            console.log(txtRotate);
        }
    }
    const css = document.createElement("style");
    css["type"] = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0px solid #000; }";
    document.body.appendChild(css);
};