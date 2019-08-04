var EMOTIONS = {
    "Cheerful": {
        "value": 3,
        "icon" : "1f601",
        "action": "rubberBand"
    },
    "Happy" : {
        "value": 2,
        "icon" : "1f606",
        "action": "tada"
    },
    "Good" : {
        "value": 1,
        "icon" : "1f600",
        "action": "slideInRight"
    },
    "Calm" : {
        "value": 0,
        "icon" : "1f607",
        "action": "rotateInUpLeft"
    },
    "Annoyed" : {
        "value": -1,
        "icon" : "1f612",
        "action": "wobble"
    },
    "Frustrated" : {
        "value": -2,
        "icon" : "1f624",
        "action": "pulse"
    },
    "Sad" : {
        "value": -3,
        "icon" : "1f622",
        "action": "fadeInLeft"
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