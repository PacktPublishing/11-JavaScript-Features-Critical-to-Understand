"use strict";

const pullScores = function(obj, section = 1, callback) {
    let scores = {};

    for (let key in obj.scores) {
        if (key.includes('s' + section)) {
            let val = obj.scores[key];
            if (typeof callback === "function") {
                val = callback(val);
            }
            scores[key] = val;
        }
    }

    return scores;
};



let newObj = pullScores(learner1, 1, function(val) {
    if (val === null) {
        return 0;
    } else {
        let arr = val.split(":");
        return arr[0] / arr[1] * 100;
    }
});


