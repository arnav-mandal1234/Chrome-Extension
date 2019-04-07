var element = [...document.body.getElementsByTagName('*')];
window.onload = find_and_replace();

function find_and_replace(){
    for (var e1 of element) {
        for (var e2 of e1.childNodes) {
            if (e2.nodeType == 3){
                let value = e2.nodeValue;
                value = value.replace(/Chowkidar/gi, 'Chor');
                value = value.replace(/chowkidar/gi, 'chor');
                e2.nodeValue = value;
                //console.log('modi');
            }
        }
    }
}
