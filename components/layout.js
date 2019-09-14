import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'
import Foot from '../components/foot'
import Breadcrumb from '../components/breadcrumb'

class Layout extends React.Component {
    render(){
        return (
            <div className='mainWrapper'>
                <Head title="zucc" />
                <Nav/>
                {/* <Breadcrumb path={this.props.path} page={this.props.page}/> */}
                {this.props.children}
                <Foot  />
            </div>
        )
    }
}

export default Layout