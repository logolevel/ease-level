var textArea        = document.querySelector('#js-message'),
    textAreaTotal   = document.querySelector('#js-message-left-total'),
    textAreaLeft    = document.querySelector('#js-message-left-symbols'),
    maxChar         = 5,
    total           = null,
    keyValue        = null,
    valueLeft       = null;

textArea.addEventListener('keyup', getKey);
textArea.addEventListener('keydown', checkKey);


//functions
function getKey() {
    keyValue = this.value;
    countTotal();
    countLeft()
    showValue(textAreaTotal, total);
    showValue(textAreaLeft, valueLeft);
}

function countTotal() {
    total = keyValue.length;
}

function countLeft() {
    valueLeft = maxChar - total;
}

function showValue(whereInsert, whatInsert) {
    whereInsert.innerHTML = whatInsert;
}

function checkKey(e) {
    var keyCode = e.keyCode;

    if ( total >= maxChar ) {

        switch(keyCode) {
            case 8:
            case 35:
            case 36:
            case 37:
            case 38:
            case 39:
            case 40:
            case 45:
            case 46:
                break;
            default:
                e.preventDefault();
        }

    }

    console.log( keyCode );
}