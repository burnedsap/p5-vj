var s1 = function (sketch) {
    let mic;
    sketch.setup = function () {
        let cnv = sketch.createCanvas(sketch.displayWidth, sketch.displayHeight);
        cnv.parent("canvas");
        sketch.background(0);
        mic = new p5.AudioIn();
        mic.start();
    }
    sketch.draw = function () {
        let vol = mic.getLevel();
        sketch.fill(255);
//        sketch.fill(sketch.map(midi_d1, 0, 127, 0, 255));
//        var r = (sketch.map(midi_d2, 0, 127, 1, 40));
        var r = 20+(vol*100);
        console.log(vol);
        if(midi_b1) {
            sketch.background(0);
        }
        for (var i = 0; i < 100; i++) {
            sketch.ellipse(sketch.random(sketch.width), sketch.random(sketch.height), r, r);
        }
    }
}


