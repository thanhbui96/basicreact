
import React from 'react';
class MyComponent extends React.Component {
    state = {
        name: '',
        channel: 'hoi dan it'
    }
    
    handleOnChangeName = (event) => {
        this.setState(
            {
                name:event.target.value,
            }
        )
    }
    handleClickButton = () => {
        alert("click me")
    }
    render() {
        let name = "Eric"
        return (
            <>


                <div className="abc"> hello bat dau {this.state["name"]} component
                    {name}
                    {console.log("thanhhhhhh", name)}
                </div>
                
                <div className="first">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    My name is {this.state['name']}
                </div>
                <div className="addd">
                    gggggggggggggggggg {this.state.channel}
                </div>
                <div className="third">
                    <button onClick={() => this.handleClickButton()}>click me</button>

                </div>

            </>
        )
    }
}
export default MyComponent