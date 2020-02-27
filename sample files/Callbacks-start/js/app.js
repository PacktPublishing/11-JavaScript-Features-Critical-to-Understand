"use strict";

const pullScores = function(obj, section = 1, callback) {
    let scores = {};

    for (let key in obj.scores) {
        if (key.includes('s' + section)) {
            scores[key] = obj.scores[key];
        }
    }

    return scores;
};



let newObj = pullScores(learner1, 1);