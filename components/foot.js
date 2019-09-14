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
        <div style={{position: 'absolute', padding: '2vh 2vh 2vh 2vh', top: '0', fontSize: "3vh"}}>
          <p className="titleText" style={{display: "inline", margin: "0"}}>Hansa</p>
        </div>
        <div style={{position: 'absolute', padding: '2.1vh 0 2.1vh 0', top: '0', left: '39vw'}}>
          <p className="logoText" style={{display: "inline", margin: "0"}}>fuccomod8u</p>
        </div>
        <a className="navbar-item" style={{position: "absolute", right:"0"}}>
          <img className="small-icon" style={{margin: "1.4vh 2vh 1.5vh 1.5vh"}} src="/static/assets/envelope.png" />
        </a>
      </footer>
    )
  }
}

export default Foot
