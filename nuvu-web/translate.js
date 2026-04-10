const translateDiv = document.createElement('div');
translateDiv.id = "google_translate_element";
translateDiv.style.display = "none";
document.body.appendChild(translateDiv);

const style = document.createElement('style');
style.innerHTML = `
body { top: 0 !important; position: static !important; }
.skiptranslate iframe { display: none !important; }
.goog-te-banner-frame { display: none !important; }
`;
document.head.appendChild(style);

window.googleTranslateElementInit = function() {
  new google.translate.TranslateElement({pageLanguage: 'es', includedLanguages: 'es,en,fr,de,lb', autoDisplay: false}, 'google_translate_element');
};

const gtScript = document.createElement('script');
gtScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
document.body.appendChild(gtScript);

window.translatePage = function(lang) {
    const selectField = document.querySelector(".goog-te-combo");
    if(selectField) {
        selectField.value = lang;
        selectField.dispatchEvent(new Event('change'));
    } else {
        setTimeout(() => window.translatePage(lang), 500);
    }
};
