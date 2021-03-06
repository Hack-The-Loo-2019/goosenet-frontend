import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Foot from '../components/foot'

import Layout from '../components/layout'
import Chat from '../pages/chat'
import Router from 'next/router'

class Home extends React.Component{
  componentDidMount(){
    Router.push('/chatdemo')
  }

  render(){  
    return (
      <Layout path={['Forum','Thread']} page="Forum">
        <h1 className="title">Welcome to Next!</h1>
        <p className="description">
          To get started, edit <code>pages/index.js</code> and save to reload.
        </p>
      </Layout>
    )
  }
}


export default Home