import React from 'react'

class Breadcrumb extends React.Component{
  render(){
    var path = this.props.path.slice(0);
    if(path.length > 1){
      path.shift()
      path = path.reduce((acc,now)=>[...acc,' > ',<a>{now}</a>],[this.props.path[0]])
    }
    if(this.props.page != 'dm'){
      return (
        <div className="breadcrumb" style={{position: 'fixed'}}>
          <p className="breadcrumbText">
            {path}
          </p>
        </div>
      )
    }
  }
}

export default Breadcrumb
