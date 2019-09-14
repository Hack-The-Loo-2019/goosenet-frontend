import React from 'react'


import {ApartmentName} from '../utils/constants.js'

class Breadcrumb extends React.Component{
  render(){
    var path = []
    path = this.props.path.reduce((acc,now)=>[...acc,' > ',<a>{now}</a>],[ApartmentName])
    if(this.props.page != 'dm'){
      return (
        <div class="breadcrumb" style={{position: 'fixed'}}>
          <p className="breadcrumbText">
            {path}
          </p>
        </div>
      )
    }
  }
}

export default Breadcrumb
