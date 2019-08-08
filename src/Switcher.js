import React from 'react';
import './switcher.css';

class Switcher extends React.Component{
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
        this.tabClick = this.tabClick.bind(this);
    }

    tabClick(event){
        event.preventDefault();
        var el = event.target;
        var index = el.getAttribute('data-index');
        this.setState({
            activeTab: index
        });
    }

    render(){
        var items = [];
        var tabElement = null;
        var supers = this;
        var animateClass = "animated slideInLeft";

        this.props.tabs.forEach(function(tab,index){
            var classname = "";
            if(supers.state.activeTab == index){
                classname = "active";
                tabElement = tab.element;
                if(animateClass === "animated slideInLeft"){
                    animateClass = "animated slideInRight";
                }
            }

            items.push(<li key={tab.name} data-index={index} className={classname} onClick={supers.tabClick}>{tab.name}</li>);
        });

        return <div className="switcher">
            <header>
                <ul className="items">
                {items}
                </ul>
            </header>
            <div>
            {tabElement}
            </div>
        </div>
    }
}

export default Switcher;