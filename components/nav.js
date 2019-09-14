import React from 'react'

class Nav extends React.Component{
  render(){
    if(this.props.page === 'dm'){
      return (
        <nav className="navbar">
          <a className="navbar-item" style={{position: "absolute"}}>
            <img className="smallIcon" style={{margin: "1.4vh 2vh 1.5vh 1.5vh"}} src="/static/assets/settings.png" />
          </a>
          <div style={{display: "inline-block", padding: '2.1vh 0 2.1vh 0', top: '0'}}>
            <p className="logoText" style={{margin: "0"}}>zuccomod8u</p>
          </div>
          <a className="navbar-item" style={{position: "absolute", right:"0"}}>
            <img className="smallIcon" style={{margin: "1.4vh 2vh 1.5vh 1.5vh"}} src="/static/assets/envelope.png" />
          </a>
        </nav>
      )
    } else return (
      <nav className="navbar">
        <a className="navbar-item" style={{position: "absolute", left: '0'}}>
          <img className="smallIcon" style={{margin: "1.4vh 2vh 1.5vh 1.5vh"}} src="/static/assets/settings.png" />
        </a>
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

export default Nav
