import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Foot from '../components/foot'
import Layout from '../components/layout'
import TextPic from '../components/skypify'

import { Component } from 'react'
// import Axios from 'axios';

class Chat extends Component {
    constructor(props) {
        super(props)

        this.state = {message:''}
        this.handleMessageInput = this.handleMessageInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleMessageInput(event) {
        this.setState({ message: event.target.value })
    }

    async handleSubmit (event) {
        event.preventDefault()
        this.setState({ error: '' })
        const message = this.state.message
        const url = `https://posturl.here/`
        this.setState({ loading: "is-loading" })

        try {
            const response = await Axios.post(url, {
              "user": otherId,
              "message":message
            })
            if (response.data.id != 0) {
              console.log('Success')
                // Do refresh here
            } 
          } catch (error) {
            console.error(
              'You have an error in your code or there are Network issues.',
              error
            )
            this.setState({ error: error.message })
          }

    }

    render() {
        return(
            <Layout page='Chat' path={['Chat']} >
                <div className='contentWrapper'>
                    <p>Hello Ngentot</p>
                    <div className="container">
                        <form onSubmit={this.handleSubmit}>
                            <input class="form-control" id="name" name="name" placeholder="Name" type="text" required="" onChange={this.handleMessageInput}/>
                            <button class="btn btn-primary btn-block">Send</button>
                        </form> 

        <TextPic radius={10} string="Hansa Halim" />

        <TextPic radius={10} string="Ruben Solomon Partono" />

        <TextPic radius={10} string="Thanh" />
                    </div>
                </div>
            </Layout>
        )
    }

}

export default Chat