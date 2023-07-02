import React from 'react';
class AddComponent extends React.Component{
    state = {
        titleJob: '',
        salary: ''
    }
      handleChangeTitleJob = (event) => {
        this.setState(
            {
                titleJob: event.target.value,
              
            }
        )
    }
    handleChangeSalary = (event) => {
        this.setState(
            {

                salary: event.target.value,
            }
        )
    }
     handleSubbmit = (event) => {
        event.preventDefault()
        console.log('>>> cehck data input ', this.state)
    }
    render (){
        return(
            <form>
                        <label htmlFor="fname">JobTitle:</label><br />
                        <input
                            type="text"
                            value={this.state.titleJob}
                            onChange={(event) => this.handleChangeTitleJob(event)}
                        />
                        <br />
                        <label htmlFor="fname">Salary:</label><br />
                        <input
                            type="text"
                            value={this.state.salary}
                            onChange={(event) => this.handleChangeSalary(event)}
                        />
                        <br />
                        <br />
                        <input type="button" value="Submit" 
                        onClick={(event)=> this.handleSubbmit(event)}
                        />
                    </form>
        )
        
    }
}
export default AddComponent;