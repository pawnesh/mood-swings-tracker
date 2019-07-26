import React from 'react';
import EMOTIONS from './EMOTIONS';

class LogEmotion extends React.Component{
    constructor(props) {
        super(props);
        this.state = {selected_element: null, animate_class:""};
        this.saveEmotion = this.saveEmotion.bind(this);
    }

    saveEmotion(event){
        event.preventDefault();
        var el = event.target;
        if(el.tagName == 'SPAN'){
            el = el.parentElement;
        }
        this.setState({
            selected_element: el.getAttribute('data-key'),
            animate_class: 'animated  bounce'
        });
    }

    render(){
        var elements = [];

        for (var emotion_name in EMOTIONS) {
            if(EMOTIONS[emotion_name].value >= 0){
                elements.push(<li data-key={emotion_name} key={emotion_name} value={EMOTIONS[emotion_name].value} onClick={this.saveEmotion}><span>{EMOTIONS[emotion_name].icon}</span>{emotion_name}</li>)
            }else{
                elements.push(<li data-key={emotion_name} key={emotion_name} value={EMOTIONS[emotion_name].value} onClick={this.saveEmotion}><span>{EMOTIONS[emotion_name].icon}</span>{emotion_name}</li>)
            }
        }

        var selectedElememnt = null;
        if(this.state.selected_element != null){
            selectedElememnt =  <div className="selected-element">
            <h3>Entery saved!</h3>
            <span className={this.state.animate_class}>{EMOTIONS[this.state.selected_element].icon}</span>{this.state.selected_element}
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