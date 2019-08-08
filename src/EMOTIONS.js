var EMOTIONS = {
    "Cheerful": {
        "value": 4,
        "icon" : "1f601",
        "action": "rubberBand"
    },
    "Happy" : {
        "value": 3,
        "icon" : "1f606",
        "action": "tada"
    },
    "Calm" : {
        "value": 2,
        "icon" : "1f607",
        "action": "rotateInUpLeft"
    },
    "Good" : {
        "value": 1,
        "icon" : "1f600",
        "action": "slideInRight"
    },
    "Neutral" : {
        "value": 0,
        "icon" : "1f610",
        "action": "slideInRight"
    },
    "Sad" : {
        "value": -1,
        "icon" : "1f622",
        "action": "fadeInLeft"
    },
    "Annoyed" : {
        "value": -2,
        "icon" : "1f612",
        "action": "wobble"
    },
    "Frustrated" : {
        "value": -3,
        "icon" : "1f624",
        "action": "pulse"
    },
    "Angry" : {
        "value": -4,
        "icon" : "1f621",
        "action": "shake"
    }
};

var EMOTIONS_REVERSE = [];
var EMOTIONS_SCORES = [];

for(var key in EMOTIONS){
    EMOTIONS_REVERSE[EMOTIONS[key].value] = EMOTIONS[key];
    EMOTIONS_REVERSE[EMOTIONS[key].value].name = key;
    EMOTIONS_SCORES.push(EMOTIONS[key].value);
}

export default EMOTIONS;
export {
    EMOTIONS_REVERSE,
    EMOTIONS_SCORES,
    EMOTIONS
}