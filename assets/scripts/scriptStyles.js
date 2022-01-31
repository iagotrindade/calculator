let btChange = document.querySelector(".section-area-calc-header-right-theme-buttons");
let body = document.querySelector("body");
let tittle = document.querySelector(".section-area-calc-header-left h2");
let theme = document.querySelector(".section-area-calc-header-right-theme");
let themeN = document.querySelector(".section-area-calc-header-right-theme-number");
let circleChange = document.querySelector(".section-area-calc-header-right-theme-toggle");
let display = document.querySelector(".section-area-calc-display");
let pad = document.querySelector(".section-area-calc-buttons-all");
let keys = document.querySelectorAll(".section-area-calc-button");
let Tfunctions = document.querySelectorAll(".Tfunction");

btChange.style.justifyContent = "flex-start"

function changeTheme () {
    if (btChange.style.justifyContent == "flex-start") {
        btChange.style.justifyContent = "center";
        btChange.style.padding = 0;
        body.style.backgroundColor = 'hsl(0, 0%, 90%)';
        tittle.style.color = 'hsl(60, 10%, 19%)'
        theme.style.color = 'hsl(60, 10%, 19%)'
        themeN.style.color = 'hsl(60, 10%, 19%)'
        btChange.style.backgroundColor = 'hsl(0, 5%, 81%)';
        circleChange.style.backgroundColor = 'hsl(25, 98%, 40%)';
        display.style.color = 'hsl(60, 10%, 19%)';
        display.style.backgroundColor = 'rgb(255, 255, 255)';
        pad.style.backgroundColor = 'hsl(0, 5%, 81%)';
        for (let i = 0; i <= keys.length -4; i++) {
            keys[i].style.color = 'hsl(60, 10%, 19%)';
        }
        for (let e = 0; e <= Tfunctions.length -2; e++) {
            Tfunctions[e].style.backgroundColor = 'hsl(185, 42%, 37%)';
            Tfunctions[e].style.boxShadow = '0px 4px hsl(185, 58%, 25%)';
        }
        Tfunctions[2].style.backgroundColor = 'hsl(25, 98%, 40%)';
    }

    else if (btChange.style.justifyContent == "center") {
        btChange.style.justifyContent = "flex-end";
        btChange.style.paddingRight = '5px';
        body.style.backgroundColor = 'hsl(268, 75%, 9%)';
        tittle.style.color = 'hsl(52, 100%, 62%)';
        theme.style.color = 'hsl(52, 100%, 62%)';
        themeN.style.color = 'hsl(52, 100%, 62%)';
        btChange.style.backgroundColor = 'hsl(268, 71%, 12%)';
        circleChange.style.backgroundColor = 'hsl(176, 100%, 44%)';
        display.style.color = 'hsl(52, 100%, 62%)';
        display.style.backgroundColor = 'hsl(268, 71%, 12%)';
        pad.style.backgroundColor = 'hsl(268, 71%, 12%)';
        for (let i = 0; i <= keys.length - 4; i++) {
            keys[i].style.color = 'hsl(52, 100%, 62%)';
            keys[i].style.backgroundColor = 'hsl(268, 47%, 21%)';
            keys[i].style.boxShadow = '0px 4px hsl(285, 91%, 52%)';
        }

        for (let e = 0; e <= Tfunctions.length -2; e++) {
            Tfunctions[e].style.backgroundColor = 'hsl(281, 89%, 26%)';
            Tfunctions[e].style.boxShadow = '0px 4px hsl(285, 91%, 52%)';
        }
        Tfunctions[2].style.backgroundColor = 'hsl(176, 100%, 44%)';
        Tfunctions[2].style.boxShadow = '0px 4px hsl(177, 92%, 70%)';
        Tfunctions[2].style.color = 'hsl(198, 20%, 13%)';
    }

    else if (btChange.style.justifyContent == "flex-end") {
        btChange.style.justifyContent = "flex-start";
        btChange.style.paddingLeft = '5px';
        body.style.backgroundColor = 'hsl(222, 26%, 31%)';
        tittle.style.color = 'rgb(255, 255, 255)';
        theme.style.color = 'rgb(255, 255, 255)';
        themeN.style.color = 'rgb(255, 255, 255)';
        btChange.style.backgroundColor = 'hsl(223, 31%, 20%)';
        circleChange.style.backgroundColor = 'hsl(6, 63%, 50%)';
        display.style.color = 'rgb(255, 255, 255)';
        display.style.backgroundColor = 'hsl(224, 36%, 15%)';
        pad.style.backgroundColor = 'hsl(223, 31%, 20%)';
        for (let i = 0; i <= keys.length -4; i++) {
            keys[i].style.color = 'hsl(221, 14%, 31%)';
            keys[i].style.backgroundColor = 'rgb(255, 255, 255)';
            keys[i].style.boxShadow = '0px 4px rgb(178 164 154)';
        }
        for (let e = 0; e <= Tfunctions.length -2; e++) {
            Tfunctions[e].style.backgroundColor = 'hsl(225, 21%, 49%)';
            Tfunctions[e].style.boxShadow = '0px 4px hsl(224deg 28% 35%)';
        }
        Tfunctions[2].style.backgroundColor = 'hsl(6, 63%, 50%)';
        Tfunctions[2].style.boxShadow = '0px 4px hsl(6deg 70% 34%)';
        Tfunctions[2].style.color = 'rgb(255, 255, 255)';
    }
}
