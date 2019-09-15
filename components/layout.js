import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'
import Foot from '../components/foot'
// import Breadcrumb from '../components/breadcrumb'

class Layout extends React.Component {
    render(){
        return (
            <div className='mainWrapper'>
                <Head title="zucc" />
                {!(this.props.page != 'in-chat')||<Nav/>}
                {this.props.children}
                {!(this.props.page != 'in-chat')||<Foot tab={1} />}
            </div>
        )
    }
}

export default Layout