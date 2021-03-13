var s1 = function (sketch) {
    sketch.setup = function () {
        let cnv = sketch.createCanvas(sketch.displayWidth, sketch.displayHeight);
        cnv.parent("canvas");
        sketch.background(0);

    }
    sketch.draw = function () {
        sketch.fill(255);
        r = 10;
        for (var i = 0; i < 100; i++) {
            sketch.ellipse(sketch.random(sketch.width), sketch.random(sketch.height), r, r);
        }
    }
}


