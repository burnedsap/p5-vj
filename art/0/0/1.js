var s1 = function (sketch) {
    sketch.setup = function () {
        let cnv = sketch.createCanvas(sketch.displayWidth, sketch.displayHeight);
        cnv.parent("canvas");
        sketch.background(0);
    }
    sketch.draw = function () {
        sketch.fill(sketch.map(midi_d1, 0, 127, 0, 255));
        var r = (sketch.map(midi_d2, 0, 127, 1, 40));
        if(midi_b1) {
            sketch.background(0);
        }
        for (var i = 0; i < 100; i++) {
            sketch.rect(sketch.random(sketch.displayWidth), sketch.random(sketch.displayHeight), r, r);
        }
//        console.log('1');
    }
}