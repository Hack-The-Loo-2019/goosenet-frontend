import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Foot from '../components/foot'
import Layout from '../components/layout'
import TextPic from '../components/skypify'
import ChatMessage from '../components/chatmessage'

import { Component } from 'react'
// import Axios from 'axios';

class Chat extends Component {
    constructor(props) {
        super(props)

        this.backToChatrooms = this.backToChatrooms.bind(this)

        this.state = {
            message:'',
            page: 'in-chat',
            roomname: 'HackTheLoo',
            backbutton: this.backToChatrooms
        }
        this.handleMessageInput = this.handleMessageInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleMessageInput(event) {
        this.setState({ message: event.target.value })
    }

    backToChatrooms(){
        this.setState({
            page: 'chatrooms',
        })
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
            <Layout page={this.state.page}>
                {!(this.state.page=='in-chat')||<ChatNav roomname={this.state.roomname} back={this.state.backbutton} />}
                <div className='contentWrapper'>
                    <div className="container">
                        <TextPic radius={10} string={this.state.message} />
                        <ChatMessage />
                        <ChatMessage />
                        <ChatMessage />
                    </div>
                </div>
                {!(this.state.page=='in-chat')||<ChatTextBar />}
            </Layout>
        )
    }

}

class ChatNav extends React.Component{
    render(){
        return (
            <nav className="navbar" style={{height: '9vh', textAlign: 'left'}}>
                <a className="navbar-item" style={{position: "absolute", left:"0"}} onClick={this.props.back}>
                    <img className="smallerIcon" style={{padding: "2.9vh 1.5vh 2.5vh 1.5vh"}} src="/static/assets/back.png" />
                </a>
                <div style={{display: "inline-block", padding: '1.5vh 0 2.1vh 0', top: '0', marginLeft: '6vh'}}>
                    <p style={{margin: "0", fontSize: '1.1rem'}}>{this.props.roomname}</p>
                    <p style={{margin: "0.5vh 0 0 0", fontSize: '1.8vh', color: '#797979'}}>You, Ruben, Hansa, Thanh</p>
                </div>
        
                <a className="navbar-item" style={{position: "absolute", right:"0"}}>
                    <img className="smallIcon" style={{margin: "1.9vh 2.5vh 1.5vh 1.5vh"}} src="/static/assets/chat-2.png" />
                </a>
            </nav>
        )
    }
}

class ChatTextBar extends React.Component{
    render(){
        return (
            <footer className="foot" style={{height:'8vh', textAlign: 'left'}}>

                <form onSubmit={this.handleSubmit} style={{marginTop: '1.5vh'}}>
                    <input class="inputBar" id="name" name="name" placeholder="" type="text" required="" onChange={this.handleMessageInput}/>
                    <button class="sendButton">Send</button>
                </form> 
            </footer>
        )
    }
}


export default Chat