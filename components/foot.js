import React from 'react'

class Foot extends React.Component{
  render(){
    if(this.props.page === 'dm'){
      return (
        {undefined}
      )
    } else {
        var op0 = this.props.tab == 0? 0.8 : 0.4
        var op1 = this.props.tab == 1? 0.8 : 0.4
        var op2 = this.props.tab == 2? 0.8 : 0.4
        return (
        <footer className='foot'>
          <a className="navbar-item" style={{position: "absolute", left:"0"}}>
            <img className="smallIcon" style={{margin: "14.6px 14.6px 14.6px 12vw", opacity: op0}} src="/static/assets/settings-1.png" />
          </a>
          <a className="navbar-item" style={{display: 'inline-block'}}>
            <img className="smallIcon" style={{margin: "14.6px 14.6px 14.6px 14.6px",  opacity: op1}} src="/static/assets/chat-1.png" />
          </a>
          <a className="navbar-item" style={{position: "absolute", right:"0"}}>
            <img className="smallIcon" style={{margin: "14.6px 12vw 14.6px 14.6px",  opacity: op2}} src="/static/assets/house.png" />
          </a>
        </footer>
      )
    }
  }
}

export default Foot
