var applyLanguage = function (lang) {
    localStorage.setItem('language', lang);
    alert('now language is: ' + lang);
}

var getCurrentLanguage = function () {
    var currentLanguage = localStorage.getItem('language');
    var defaultLanguage = 'ua';

    if (currentLanguage == null  && currentLanguage == "undefined")
        currentLanguage = defaultLanguage;

    return currentLanguage;
}

var currentLang = getCurrentLanguage();
var langEls = document.getElementsByClassName('lang-' + currentLang);

for (var i = 0; i < langEls.length; i++) {
    var langEl = langEls[i];
    langEl.classList.add('visible');
}


function setLanguage() {
    var currentLanguage = getCurrentLanguage();
    var checkbox = document.getElementById('lang-' + currentLanguage);
    checkbox.checked = true;
}



var $save = document.querySelector('html body button#save')
setLanguage();

$save.addEventListener('click', function () {
    var settedLanguage = getSettedLanguage();
    applyLanguage(settedLanguage);
});

function getSettedLanguage() {
    var isEng = document.getElementById('lang-eng').checked;
    if (isEng)
        return 'eng';

    var isUa = document.getElementById('lang-ua').checked;
    if (isUa)
        return 'ua';
}

var rest = document.getElementById('reset');

function DoReset() {
    localStorage.clear();
}

rest.addEventListener('click', DoReset)