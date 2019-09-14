import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'
import Foot from '../components/foot'
// import Breadcrumb from '../components/breadcrumb'
import ChatNav from './chatnav'

class Layout extends React.Component {
    render(){
        return (
            <div className='mainWrapper'>
                <Head title="zucc" />
                {this.props.page == 'in-chat'?
                    <ChatNav roomname={this.props.roomname} back={this.props.back}/> :
                    <Nav/>
                }
                {this.props.children}
                <Foot  />
            </div>
        )
    }
}

export default Layout