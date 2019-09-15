import React from 'react'

class Nav extends React.Component{
  render(){
    return (
      <nav className="navbar">
        <a className="navbar-item" style={{position: "absolute", left: '0'}}>
          <img className="smallIcon" style={{margin: "10.22px 14.6px 11px 11px"}} src="/static/assets/settings.png" />
        </a>
        <div style={{display: "inline-block", padding: '2.7.3px 0 2.7.3px 0', top: '0'}}>
          <p className="logoText" style={{margin: "17px"}}>zuccomod8u</p>
        </div>
        <a className="navbar-item" style={{position: "absolute", right:"0"}}>
          <img className="smallIcon" style={{margin: "10.22px 14.6px 11px 11px"}} src="/static/assets/envelope.png" />
        </a>
      </nav>
    )
  }
}

export default Nav
