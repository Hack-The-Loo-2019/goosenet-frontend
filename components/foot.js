import React from 'react'
import Router from 'next/router'

class Foot extends React.Component{
  constructor(props){
    super(props)
    this.state={
      tab: this.props.tab
    }
  }
  render(){
    if(this.props.page === 'dm'){
      return (
        {undefined}
      )
    } else {
        var op0 = this.state.tab == 0? 0.8 : 0.4
        var op1 = this.state.tab == 1? 0.8 : 0.4
        var op2 = this.state.tab == 2? 0.8 : 0.4
        return (
        <footer className='foot'>
          <a className="navbar-item" style={{position: "absolute", left:"0"}} onClick={()=>{this.setState({tab:0});Router.push('/posts')}}>
            <img className="smallIcon" style={{margin: "14.6px 14.6px 14.6px 12vw", opacity: op0}} src="/static/assets/settings-1.png" />
          </a>
          <a className="navbar-item" style={{display: 'inline-block'}} onClick={()=>{this.setState({tab:1});Router.push('/chat')}}>
            <img className="smallIcon" style={{margin: "14.6px 14.6px 14.6px 14.6px",  opacity: op1}} src="/static/assets/chat-1.png" />
          </a>
          <a className="navbar-item" style={{position: "absolute", right:"0"}} onClick={()=>{this.setState({tab:2});Router.push('/forms')}}>
            <img className="smallIcon" style={{margin: "14.6px 12vw 14.6px 14.6px",  opacity: op2}} src="/static/assets/house.png" />
          </a>
        </footer>
      )
    }
  }
}

export default Foot
