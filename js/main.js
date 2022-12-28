var controller1 = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
  triggerElement: '.section-1-trigger'
})
  .setClassToggle('.phone', 'animation1')
  .addTo(controller1);


var controller2 = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
  triggerElement: '.section-1-trigger'
})
  .setClassToggle('.header-copy', 'animation1-1')
  .addTo(controller2);


var controller3 = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
  triggerElement: '.section-2-trigger'
})
  .setClassToggle('.phone', 'animation2')
  .addTo(controller3);


var controller4 = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
  triggerElement: '.section-2-trigger'
})
  .setClassToggle('.section-2', 'show')
  .addTo(controller4);


var controller5 = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
  triggerElement: '.section-3-trigger'
})
  .setClassToggle('.section-3', 'show')
  .addTo(controller5);


var controller6 = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
  triggerElement: '.section-4-trigger'
})
  .setClassToggle('.section-4', 'show')
  .addTo(controller6);
