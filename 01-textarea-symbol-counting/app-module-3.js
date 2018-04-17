/*
* TextCounter
*/
var TextCounter = {
    maxChar: 5,
    textArea: null,
    textAreaTotal: null,
    textAreaLeft: null,
    init: function() {
        this.textArea       = document.querySelector('#js-message');
        this.textAreaTotal  = document.querySelector('#js-message-left-total');
        this.textAreaLeft   = document.querySelector('#js-message-left-symbols');
        this.events();
    },
    events: function() {
        this.textArea.addEventListener('keyup', this.getKey.bind(this));
        this.textArea.addEventListener('keydown', this.checkKey.bind(this));
    },
    getKey: function() {
        this.showValue(this.textAreaTotal, this.getLength());
        this.showValue(this.textAreaLeft, this.countLeft());
    },
    getLength: function() {
        return this.textArea.value.length;
    },
    countLeft: function() {
        return this.maxChar - this.textArea.value.length;
    },
    showValue: function(whereInsert, whatInsert) {
        whereInsert.innerHTML = whatInsert;
    },
    checkKey: function(e) {
        var keyCode = e.keyCode;

        if ( this.getLength() >= this.maxChar ) {
            switch (keyCode) {
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
    }

};

TextCounter.init();