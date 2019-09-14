import React from 'react'
import {ApartmentName} from '../utils/constants.js'

class Nav extends React.Component{
  render(){
    if(this.props.page === 'dm'){
      return (
        <nav className="navbar">
          <div style={{position: 'absolute', padding: '2vh 2vh 2vh 2vh', top: '0', fontSize: "3vh"}}>
            <p className="titleText" style={{display: "inline", margin: "0"}}>{ApartmentName}</p>
          </div>
          <div style={{display: "inline-block", padding: '2.1vh 0 2.1vh 0', top: '0'}}>
            <p className="logoText" style={{margin: "0"}}>zuccomod8u</p>
          </div>
          <a className="navbar-item" style={{position: "absolute", right:"0"}}>
            <img className="icon-5" style={{margin: "1.4vh 2vh 1.5vh 1.5vh"}} src="/static/assets/envelope.png" />
          </a>
        </nav>
      )
    } else return (
      <nav className="navbar">
        <div style={{position: 'absolute', padding: '2vh 2vh 2vh 2vh', top: '0', fontSize: "3vh"}}>
          <p className="titleText" style={{display: "inline", margin: "0"}}>{ApartmentName}</p>
        </div>
        <div style={{display: "inline-block", padding: '2.1vh 0 2.1vh 0', top: '0'}}>
          <p className="logoText" style={{margin: "0"}}>zuccomod8u</p>
        </div>
        <a className="navbar-item" style={{position: "absolute", right:"0"}}>
          <img className="icon-5" style={{margin: "1.4vh 2vh 1.5vh 1.5vh"}} src="/static/assets/envelope.png" />
        </a>
      </nav>
    )
  }
}

export default Nav
