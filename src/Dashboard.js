import React from 'react';
import { EMOTIONS_REVERSE,EMOTIONS_SCORES} from './EMOTIONS';
import db from './db';
import './dashobard.css';

var dateFormat = require('dateformat');

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { today: null, week: null, month: null };
        this.db = new db();
        this.updateState = this.updateState.bind(this);
    }

    componentDidMount() {
        var self = this;
        var emotions = this.db.getAllEmotion();
        var keys = [];
        for (var key in emotions) {
            keys.push(key);
        }
        var today = [];
        var now = new Date();
        // today
        var key = dateFormat(now, "yyyy-m-d");
        this.db.getEmotion(key).forEach(element => {
            if(EMOTIONS_REVERSE[element])
                today.push(EMOTIONS_REVERSE[element]);
        });
        this.updateState(today, null, null);

        // week

        // month
        
    }

    updateState(argToday, argWeek, argMonth) {
        var today = argToday? argToday : this.state.today;
        var week = argWeek ? argWeek : this.state.week;
        var month = argMonth ? argMonth : this.state.month;
        this.setState({
            today: today,
            week: week,
            month: month
        });
    }

    getAverageTag(averageScore){
        var nearestEmotionScore = averageScore;
        if(!EMOTIONS_SCORES.includes(nearestEmotionScore)){
            nearestEmotionScore = EMOTIONS_SCORES.reduce(function(prev, curr) {
                return (Math.abs(curr - averageScore) < Math.abs(prev - averageScore) ? curr : prev);
            });              
        }
        var emotion = EMOTIONS_REVERSE[nearestEmotionScore];
        return <div className="average">
            <img src={'/images/'+emotion.icon+'.svg'} alt={emotion.name}/><br/>
            {emotion.name}
        </div>;
    }

    getBlock(list,title){
        var temp = [];
        var average = 0;
        list.forEach(function (element,index) {
            temp.push(<img src={'/images/'+element.icon+'.svg'} alt={element.name} key={element.name+index}/>);
            average += parseInt(element.value);
        });
        var average = average/this.state.today.length;

        var el = <div className="block" key="block-today">
            <header className="header"><h3>{title}</h3></header>
            <div className="content">
                {temp}
            </div>
            <footer>
                {this.getAverageTag(average)}
            </footer>
        </div>;
        return el;
    }

    render() {
        var reportElement = [];

        if (this.state.today) {
            var el = this.getBlock(this.state.today,'Today');
            reportElement.push(el);
        }

        if (this.state.today) {
            var el = this.getBlock(this.state.today,'Week');
            reportElement.push(el);
        }

        if (this.state.today) {
            var el = this.getBlock(this.state.today,'Month');
            reportElement.push(el);
        }

        // today elemnt
        return <div className="dashboard">
            {reportElement}
        </div>
    }
}

export default Dashboard;