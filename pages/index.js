import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Foot from '../components/foot'
import Breadcrumb from '../components/breadcrumb'

import {ApartmentName} from '../utils/constants.js'
import Layout from '../components/layout'

const Home = () => (
  <Layout path={['Forum']} page="Forum">
    <h1 className="title">Welcome to Next!</h1>
    <p className="description">
      To get started, edit <code>pages/index.js</code> and save to reload.
    </p>
  </Layout>
)

export default Home
