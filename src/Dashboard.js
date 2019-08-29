import React from 'react';
import { EMOTIONS_REVERSE,EMOTIONS_SCORES} from './EMOTIONS';
import db from './db';
import './dashobard.css';

var dateFormat = require('dateformat');

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { emotionsLog: null };
        this.db = new db();
        this.updateState = this.updateState.bind(this);
        this.restart = this.restart.bind(this);
    }

    componentDidMount() {
        var emotions = this.db.getAllEmotion();
        var emotionsLog = [];
        for(var key in emotions){
            var em = [];
            this.db.getEmotion(key).forEach(element => {
                if(EMOTIONS_REVERSE[element])
                    em.push(EMOTIONS_REVERSE[element]);
            });
            console.log(key);
            emotionsLog.push(em);
        }

        this.updateState(emotionsLog);
    }

    updateState(emotionsLog) {
        var emotionsLog = emotionsLog? emotionsLog : this.state.emotionsLog;
        this.setState({
            emotionsLog: emotionsLog
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

    getBlock(list,index){
        var temp = [];
        var average = 0;
        list.forEach(function (element,index) {
            temp.push(<img src={process.env.PUBLIC_URL+'/images/'+element.icon+'.svg'} alt={element.name} key={element.name+index}/>);
            average += parseInt(element.value);
        });
        var average = average/list.length;

        var el = <div className="block" key={'block'+index}>
            <div className="content">
                {temp}
            </div>
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

        if (this.state.emotionsLog && this.state.emotionsLog.length > 0) {
            var self = this;
            this.state.emotionsLog.forEach(function(elements,index){
                var el = self.getBlock(elements,index);
                reportElement.push(el);
            });
        }

        if(reportElement.length == 0){
            reportElement = <div className="center"><img src={process.env.PUBLIC_URL+'/images/1f34a.svg'} alt="empty log book"/><br/>Empty Logs</div>;
        }

        // today elemnt
        return <div className="dashboard">
            {reportElement}
            <button className="restart" onClick={this.restart}>Start Fresh</button>
        </div>
    }
}

export default Dashboard;