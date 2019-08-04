var dateFormat = require('dateformat');

var db = function(){
    this.saveEmotion = function(value){
        var now = new Date();
        var key = dateFormat(now, "yyyy-m-d");
        var item = localStorage.getItem(key);
        if(item == null){
            item = '';
        }
        item += value + ',';
        try{
            localStorage.setItem(key, item);
        }catch(e){
            if (e.code === 22) {
                this.freeUpSpace();
                this.saveEmotion(value);
            }
        }
    }

    this.getAllEmotion = function(){
        var emotions = [];
        for (var key in localStorage){
            if(localStorage.getItem(key)){
                emotions[key] = localStorage.getItem(key).split(',');
            }
        }
        return emotions;
    }

    this.getEmotion = function(key){
        var value = localStorage.getItem(key);
        if(value == null){
            value = "";
        }
        value = value.split(',');
        return value;
    }

    // remove the oldest entery
    this.freeUpSpace = function(){
        var emotions = this.getAllEmotion();
        var keys = [];
        for(var key in emotions){
            keys.push(key);
        }
        keys = keys.sort();
        if(keys[0]){
            localStorage.removeItem(keys[0]);
        }
    }
}

export default db;