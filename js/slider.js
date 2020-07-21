let slider = document.querySelector('#content-slider')
let slider1 = document.querySelector('#content-slider1')

function Slider(slider, movingSide) {
  slider.classList.add(`${movingSide}-slider`)

  let slidersItem = slider.querySelectorAll('.slider-inner > div')
  let dotsPlace = slider.querySelector('.slider-dots')
  let sliderInner = slider.querySelector('.slider-inner')
  let verticalMove = slidersItem[0].clientHeight
  let horizontalMove = slidersItem[0].clientWidth

  this.createDots = function () {
    slidersItem.forEach((elem, index) => {
      let dots = document.createElement('div')
      dots.classList.add('dot-item', `dot-item-${index}`)
      dotsPlace.appendChild(dots)
    })
  }

  this.moveWithDots = function () {
    let dot = slider.querySelectorAll('.dot-item')
    dot.forEach((elem, index) => {
      elem.onclick = () => {
        if (movingSide == 'horizontal') sliderInner.style.transform = `translateX(-${horizontalMove * index}px)`
        if (movingSide == 'vertical') sliderInner.style.transform = `translateY(-${verticalMove * index}px)`
      }
    })
  }
}


let mainSlider = new Slider(slider, 'horizontal')
mainSlider.createDots()
mainSlider.moveWithDots()