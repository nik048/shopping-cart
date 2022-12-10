import React from 'react';

class CoundDown extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            current: props.startFrom,
        };
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({current: this.state.current - 1});
        }, 1000);
    }
    render(){
        return(
            <div>CountDown: {this.state.current}</div>
        );
    }
}

export default CoundDown;