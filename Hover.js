class Hover {
      constructor ({ el }){
          this.el = document.querySelector(el);
          this.nav = document.querySelector(nav)
          this.el.addEventListener('mouseover', () => {
            let maxH = window.innerHeight - this.el.clientHeight -this.nav?.clientHeight
            let minH = this.el.clientHeight
            let maxW = window.innerWidth - this.el.clientWidth
            let minW = this.el.clientWidth
            this.el.style = `margin-top:${this.random(minH, maxH)}px; 
                             margin-left:${this.random(minW, maxW)}px;
                             transition:0.5s;`
          })
      }
      random(min, max){
        return Math.round(Math.random()*(max-min)+min)
      }
}

new Hover ({
    el:".header__content",
    nav:".header__nav"
})