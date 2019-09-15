import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Foot from '../components/foot'
import Layout from '../components/layout'
import TextPic from '../components/skypify'
import ChatMessage from '../components/chatmessage'
import Chatroom from '../components/chatroom'
import {Chatrooms} from '../static/hardcode'

import { Component } from 'react'
// import Axios from 'axios';

class Chat extends Component {
    constructor(props) {
        super(props)

        this.backToChatrooms = this.backToChatrooms.bind(this)

        this.state = {
            message:'',
            page: 'in-chat',
            room: {
                name: 'HackTheLoo',
                members: 'You, Hansa, Ruben, Thanh'
            },
            backbutton: this.backToChatrooms
        }
        this.handleMessageInput = this.handleMessageInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.backToChatrooms = this.backToChatrooms.bind(this)
        this.enterChat = this.enterChat.bind(this)
    }

    handleMessageInput(event) {
        this.setState({ message: event.target.value })
    }

    backToChatrooms(){
        this.setState({
            page: 'chatrooms',
        })
    }

    enterChat(chatroomData){
        this.setState({
            page: 'in-chat',
            room: chatroomData,

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
        var chatNav = this.state.page=='in-chat'? <ChatNav room={this.state.room} back={this.state.backbutton} /> : null
        var chatText = this.state.page=='in-chat'? <ChatTextBar /> : null

        var displayPage
        if(this.state.page == 'in-chat'){
            displayPage = (
                <div className='contentWrapper'>
                    <div className="container">
                        <ChatMessage />
                        <ChatMessage />
                        <ChatMessage />
                    </div>
                </div>
            )
        } else if(this.state.page == 'chatrooms'){
            displayPage = <ChatroomsPage enterChat={this.enterChat}/>
        }

        return(
            <Layout page={this.state.page}>
                {chatNav}
                {displayPage}
                {chatText}
            </Layout>
        )
    }

}

class ChatNav extends React.Component{
    render(){
        return (
            <nav className="navbar" style={{height: '65.7px', textAlign: 'left'}}>
                <a className="navbar-item" style={{position: "absolute", left:"0"}} onClick={this.props.back}>
                    <img className="smallerIcon" style={{padding: "21.17px 11px 18.25px 11px"}} src="/static/assets/back.png" />
                </a>
                <div style={{display: "inline-block", padding: '11px 0 2.73px 0', top: '0', marginLeft: '43.8px'}}>
                    <p style={{margin: "0", fontSize: '1.1rem'}}>{this.props.room.name}</p>
                    <p style={{margin: "3.65px 0 0 0", fontSize: '13.14px', color: '#797979'}}>{this.props.room.members}</p>
                </div>
        
                <a className="navbar-item" style={{position: "absolute", right:"0"}}>
                    <img className="smallIcon" style={{margin: "13.87px 18.25px 11px 11px"}} src="/static/assets/chat-2.png" />
                </a>
            </nav>
        )
    }
}

class ChatTextBar extends React.Component{
    render(){
        return (
            <footer className="foot" style={{height:'58.4px', textAlign: 'left'}}>
                <form onSubmit={this.handleSubmit} style={{marginTop: '11px'}}>
                    <input class="inputBar" id="name" name="name" placeholder="" type="text" required="" onChange={this.handleMessageInput}/>
                    <button class="sendButton">Send</button>
                </form> 
            </footer>
        )
    }
}

class ChatroomsPage extends React.Component{
    
    render(){
        return (
            <div className='contentWrapper'>
                {Chatrooms.map(chatroomData=>(
                    <Chatroom room={chatroomData} enterChat={this.props.enterChat}/>
                ))}
            </div>
        )
    }
}

export default Chat