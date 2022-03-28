import React from 'react';
class testClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
            number_1 : 0,
            number_2 : 0,
            result : 0
        };
    }
    changeState = () => {
        this.setState({ color: 'white' })
    }
    calculate = () => {
        this.setState({ result : 10 + 10})
    }

    componentDidMount(){
        console.log("start")
    }
    componentDidUpdate(){        
        setInterval(()=>{    
            console.log("Update")        
        },1000)
    }
    componentWillUnmount(){
        console.log('End')
    }  
    render() {
        return (
            <>
                <h3>hello Class Component</h3>
                <summary> Use State :  <button onClick={this.changeState}> color </button> {this.state.color}</summary>
                <span> Use Prop : color =  {this.props.color}</span>
                <div>
                    <button onClick={this.calculate}>Show</button>
                    <h2>{this.state.result}</h2>
                </div>
            </>
        )
    }
}
export default testClass;