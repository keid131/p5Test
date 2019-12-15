let p5;
let delegate;

export function main(_p5) {
  p5 = _p5

  p5.setup = _ => {
    var canvas = p5.createCanvas(1000, 1000)
    canvas.parent("p5Canvas");

  	p5.background(100);
}

    p5.draw = _ => {
        p5.ellipse(50, 50, 80, 80)
    }
}

export function setDelegate(_delegate) {
  delegate = _delegate;
}