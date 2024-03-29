class Typing {
   constructor({el, interval, delay}) {
         this.el = document.querySelector(el);
         this.ivterval = interval || 500
         this.delay = delay ?? 1000
         this.text = this.el.innerHtml
         this.el.innerHtml = " "
         setTimeout(() =>{this.write() }, this.delay);
    }
    write(i=0) {
        this.el.innerHtml += this.text[i]  //HEAD
        i++
        if (this.text.length > i){
            setTimeout(() => {this.write(i)}, this.ivterval);
        }  
    }
}

new Typing({
    el: ".header__content h1",
    interval: 300,
    delay: 1000
})

new Typing({
    el: ".header__content p",
    interval: 500,
    delay: 0
})
