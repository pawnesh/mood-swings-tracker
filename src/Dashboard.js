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
        this.restart = this.restart.bind(this);
    }

    componentDidMount() {
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

        // week
        var week = [];
        for(var i=0; i<7;i++){
            now = new Date();
            now.setDate(now.getDate() - i);
            var key = dateFormat(now,"yyyy-m-d");
            var arr = this.db.getEmotion(key);
            var sum = 0;
            if(arr == null){
                continue;
            }
            if(arr.length == 0){
                continue;
            }
            if(arr[0] == ''){
                continue;
            }
            arr.forEach((element)=> {
                if(element){
                    sum += parseInt(element);
                }
            });
            sum = sum/arr.length;
            var nearestEmotionScore = EMOTIONS_SCORES.reduce(function(prev, curr) {
                return (Math.abs(curr - sum) < Math.abs(prev - sum) ? curr : prev);
            });
            week.push(EMOTIONS_REVERSE[nearestEmotionScore]);
        }
        console.log(week);

        // month
        var month = [];
        for(var i=0; i<30;i++){
            now = new Date();
            now.setDate(now.getDate() - i);
            var key = dateFormat(now,"yyyy-m-d");
            var arr = this.db.getEmotion(key);
            var sum = 0;
            if(arr == null){
                continue;
            }
            if(arr.length == 0){
                continue;
            }
            if(arr[0] == ''){
                continue;
            }
            
            arr.forEach((element)=> {
                if(element){
                    sum += parseInt(element);
                }
            });
            sum = sum/arr.length;
            var nearestEmotionScore = EMOTIONS_SCORES.reduce(function(prev, curr) {
                return (Math.abs(curr - sum) < Math.abs(prev - sum) ? curr : prev);
            });
            month.push(EMOTIONS_REVERSE[nearestEmotionScore]);
        }

        this.updateState(today,week,month);
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
            <img src={process.env.PUBLIC_URL+'/images/'+emotion.icon+'.svg'} alt={emotion.name}/><br/>
            {emotion.name}
        </div>;
    }

    getBlock(list,title){
        var temp = [];
        var average = 0;
        list.forEach(function (element,index) {
            temp.push(<img src={process.env.PUBLIC_URL+'/images/'+element.icon+'.svg'} alt={element.name} key={element.name+index+title}/>);
            average += parseInt(element.value);
        });
        var average = average/list.length;

        var el = <div className="block" key={'block'+title}>
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

    restart(){
        if(window.confirm('This will delete all the logs?')){
            this.db.clear();
        }
    }

    render() {
        var reportElement = [];

        if (this.state.today && this.state.today.length > 0) {
            var el = this.getBlock(this.state.today,'Today');
            reportElement.push(el);
        }

        if (this.state.week && this.state.week.length > 0) {
            var el = this.getBlock(this.state.week,'Week');
            reportElement.push(el);
        }

        if (this.state.month && this.state.month.length > 0) {
            var el = this.getBlock(this.state.month,'Month');
            reportElement.push(el);
        }

        if(reportElement.length == 0){
            reportElement = <div class="center"><img src={process.env.PUBLIC_URL+'/images/1f34a.svg'} alt="empty log book"/><br/>Empty Logs</div>;
        }

        // today elemnt
        return <div className="dashboard">
            {reportElement}
            <button className="restart" onClick={this.restart}>Start Fresh</button>
        </div>
    }
}

export default Dashboard;