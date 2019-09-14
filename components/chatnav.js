import React from 'react'

class ChatNav extends React.Component{
  render(){
    return (
      <nav className="navbar">
        <div style={{display: "inline-block", padding: '2.1vh 0 2.1vh 0', top: '0'}}>
          <p className="logoText" style={{margin: "0"}}>zuccomod8u</p>
        </div>
        <a className="navbar-item" style={{position: "absolute", right:"0"}}>
          <img className="smallIcon" style={{margin: "1.4vh 2vh 1.5vh 1.5vh"}} src="/static/assets/envelope.png" />
        </a>
      </nav>
    )
  }
}

export default ChatNav
