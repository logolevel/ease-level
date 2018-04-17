var Loader = (function () {
    'use strict';
    return {
        init: function () {
            /* get elements */
            this.loader = document.getElementById('loader');
            this.preogressBar = document.getElementById('loaderProgressBar');
            this.loaderPercent = document.getElementById('loaderPercent');
            this.images = document.getElementsByTagName('img');
            /* add additional properties below if needed */
            this.insideResult = null;
            this.outputResult = null;
            this.successCounter = 0;
            this.errorCounter = 0;

            this.events();
        },

        events: function () {
            var i = 0;

            for (i = 0; i < this.images.length; i++) {
                this.images[i].addEventListener('load', this.loadImage.bind(this) );
                this.images[i].addEventListener('error', this.errorImage.bind(this) );
            }
        },

        loadImage: function () {
            this.successCounter += 1;
            this.increaseProgressBar();
            
            if ( (this.successCounter + this.errorCounter ) ==  this.images.length ) {
                this.loadedCallback();
            }
        },

        errorImage: function () {
            this.errorCounter += 1;
        },

        increaseProgressBar: function () {
            var percentFromQuantity = 100 / this.images.length;

            this.insideResult = Math.round( ( this.insideResult + percentFromQuantity ) * 100000) / 100000;
            this.outputResult = +(this.insideResult).toFixed(0);

            this.loaderPercent.innerHTML = this.outputResult + '%';
            this.preogressBar.style.width = this.outputResult + '%';
        },

        loadedCallback: function () {
            this.loader.classList.add('loaded');
        }
    };
})();