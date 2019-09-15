import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'
import Foot from '../components/foot'
// import Breadcrumb from '../components/breadcrumb'
import {xAuthCommon} from '../static/hardcode'
import Axios from 'axios';

Axios.defaults.headers.common['x-auth'] = xAuthCommon

class Layout extends React.Component {
    render(){
        return (
            <div className='mainWrapper'>
                <Head title="zucc" />
                {!(this.props.page != 'in-chat')||<Nav/>}
                {this.props.children}
                {!(this.props.page != 'in-chat')||<Foot tab={this.props.tab} />}
            </div>
        )
    }
}

export default Layout