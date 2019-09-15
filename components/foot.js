import React from 'react'

class Foot extends React.Component{
  render(){
    if(this.props.page === 'dm'){
      return (
        <footer>
        </footer>
      )
    } else return (
      <footer className='foot'>
        <a className="navbar-item" style={{position: "absolute", left:"0"}}>
          <img className="smallIcon" style={{margin: "14.6px 14.6px 14.6px 12vw"}} src="/static/assets/settings-1.png" />
        </a>
        <a className="navbar-item" style={{display: 'inline-block'}}>
          <img className="smallIcon" style={{margin: "14.6px 14.6px 14.6px 14.6px"}} src="/static/assets/chat-1.png" />
        </a>
        <a className="navbar-item" style={{position: "absolute", right:"0"}}>
          <img className="smallIcon" style={{margin: "14.6px 12vw 14.6px 14.6px"}} src="/static/assets/house.png" />
        </a>
      </footer>
    )
  }
}

export default Foot
