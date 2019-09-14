import React from 'react'

class ChatNav extends React.Component{
  render(){
    return (
      <nav className="navbar" style={{textAlign: 'left'}}>
        <a className="navbar-item" style={{position: "absolute", left:"0"}} onClick={this.props.back}>
          <img className="smallerIcon" style={{padding: "2.4vh 3vh 2.5vh 2.5vh"}} src="/static/assets/back.png" />
        </a>
        <div style={{display: "inline-block", padding: '1.4vh 0 2.1vh 0', top: '0', marginLeft: '8vh'}}>
          <p style={{margin: "0"}}>{this.props.roomname}</p>
          <p style={{margin: "0.3vh 0 0 0", fontSize: '1.8vh', color: '#797979'}}>You, Ruben, Hansa, Thanh</p>
        </div>

        <a className="navbar-item" style={{position: "absolute", right:"0"}}>
          <img className="smallIcon" style={{margin: "1.4vh 2vh 1.5vh 1.5vh"}} src="/static/assets/chat-2.png" />
        </a>
      </nav>
    )
  }
}

export default ChatNav
