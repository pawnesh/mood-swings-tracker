import React from 'react';
import EMOTIONS from './EMOTIONS';
import db  from './db';

class LogEmotion extends React.Component{
    constructor(props) {
        super(props);
        this.db = new db();
        this.state = {selected_element: null, animate_class:""};
        this.saveEmotion = this.saveEmotion.bind(this);
    }

    saveEmotion(event){
        event.preventDefault();
        var el = event.target;
        if(el.tagName === 'IMG'){
            el = el.parentElement.parentElement;
        }
        if(el.tagName === 'SPAN'){
            el = el.parentElement;
        }
        this.db.saveEmotion(el.value);
        this.setState({
            selected_element: el.getAttribute('data-key'),
            animate_class: 'animated  '+el.getAttribute('data-action')
        });
        el.className = 'animated heartBeat';
    }

    render(){
        var elements = [];

        for (var emotion_name in EMOTIONS) {
            elements.push(<li data-key={emotion_name} key={emotion_name} value={EMOTIONS[emotion_name].value} data-action={EMOTIONS[emotion_name].action} onClick={this.saveEmotion}><span><img src={process.env.PUBLIC_URL+'/images/'+EMOTIONS[emotion_name].icon+'.svg'} alt={emotion_name}/></span>{emotion_name}</li>);
        }

        var selectedElememnt = null;
        if(this.state.selected_element != null){
            selectedElememnt =  <div className="selected-element">
            <h3>Entery saved!</h3>
            <span className={this.state.animate_class}><img src={process.env.PUBLIC_URL+'/images/'+EMOTIONS[this.state.selected_element].icon+'.svg'} alt={emotion_name}/></span>{this.state.selected_element}
            </div>;
            elements = null;
        }
        return (<div className="emotions-list">
            {selectedElememnt}
            <ul>
            {elements}
            </ul>
            <div className="clear"></div>
        </div>);
    }
}

export default LogEmotion;