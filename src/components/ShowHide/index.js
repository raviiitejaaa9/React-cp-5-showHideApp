// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    firstName: 0,
    lastName: 0,
  }

  onClickFirstName = () => {
    this.setState(prevState => ({firstName: prevState.firstName + 1}))
  }

  onClickLastName = () => {
    this.setState(prevState => ({lastName: prevState.lastName + 1}))
  }

  render() {
    const {firstName, lastName} = this.state
    let showFirstName
    let showLastName

    if (firstName % 2 === 0) {
      showFirstName = undefined
    } else {
      showFirstName = (
        <div className="card">
          <p className="name"> Joe </p>
        </div>
      )
    }

    if (lastName % 2 === 0) {
      showLastName = undefined
    } else {
      showLastName = (
        <div className="card">
          <p className="name"> Jonas </p>
        </div>
      )
    }

    return (
      <div className="bg-container">
        <h1 className="head"> Show/Hide </h1>
        <div className="btn-container">
          <div className="btn-hiddenEl-container">
            <button
              type="button"
              className="button"
              onClick={this.onClickFirstName}
            >
              Show/Hide Firstname
            </button>

            {showFirstName}
          </div>
          <div className="btn-hiddenEl-container">
            <button
              type="button"
              className="button"
              onClick={this.onClickLastName}
            >
              Show/Hide Lastname
            </button>
            {showLastName}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
