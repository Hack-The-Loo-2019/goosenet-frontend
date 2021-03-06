import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import Foot from '../components/foot'
import Layout from '../components/layout'
import TextPic from '../components/skypify'
import ChatMessage from '../components/chatmessage'
import Chatroom from '../components/chatroom'
import LoadingModal from '../components/loadingmodal'
import Profile from '../components/profile'

import {Chatrooms, baseUrl, chatGetUrl, chatPostUrl} from '../static/hardcode'

import { Component } from 'react'
import Axios from 'axios'

class Chat extends Component {
    constructor(props) {
        super(props)

        this.backToChatrooms = this.backToChatrooms.bind(this)

        this.state = {
            message:'',
            page: 'chatrooms',
            room: {
                name: null,
                members: null,
                id: null
            },
            messages: null,
            backbutton: this.backToChatrooms,
            loading: null,
            profile: false,
            profileName: null
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
        this.setState({loading: true})
        Axios.get(chatGetUrl+chatroomData.id).then((res)=>{
            this.setState({
                messages: res.data.data.reverse(),
                page: 'in-chat',
                room: chatroomData,
                loading: false
            })
        })
    }

    handleSubmit = (event)=> {
        (async ()=>{
        // this.setState({ error: '' })
        const message = this.state.message
        if(this.state.message.length > 0){
            const url = chatPostUrl+this.state.room.id
            console.log('msg',message)
            // this.setState({ loading: "is-loading" })

            try {
                const response = await Axios.post(url, {
                "message":message
                })
                if (response.status == 204) {
                    Axios.get(chatGetUrl+this.state.room.id).then((res)=>{
                        var scrollingElement = (document.scrollingElement || document.body);
                        scrollingElement.scrollTop = scrollingElement.scrollHeight;
                        this.setState({messages: res.data.data.reverse()})
                    }
                    )

                } else {
                    throw Error("oops")
                }
            } catch (error) {
                console.error(
                'You have an error in your code or there are Network issues.',
                error
                )
                this.setState({ error: error.message })
            }
            }
        })()
        return false
    }

    closeProf(){
        this.setState({profile: false})
    }

    openProf = () => {
        console.log('hoi') 
        this.setState({profile: true})
    }

    render() {
        var chatNav = this.state.page=='in-chat'? <ChatNav room={this.state.room} back={this.state.backbutton} /> : null
        var chatText = this.state.page=='in-chat'? <ChatTextBar message={this.state.message} handleMessageInput={this.handleMessageInput} handleSubmit={this.handleSubmit}/> : null

        var displayPage
        if(this.state.page == 'in-chat'){
            displayPage = (
                <div className='contentWrapper'>
                    <div className="container">
                        {this.state.messages.map((msg)=>(
                            <ChatMessage message={msg.message} username={msg.user.name} onClick={this.openProf}/>
                        ))}
                    </div>
                </div>
            )
        } else if(this.state.page == 'chatrooms'){
            displayPage = <ChatroomsPage enterChat={this.enterChat}/>
        }
        return(
            <Layout page={this.state.page} tab={1}>
                {!this.state.profile||<Profile name='Small rat' close={this.closeProf.bind(this)} refresh={this.enterChat}/>}
                {!this.state.loading || <LoadingModal />}
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
        var buttonStyle = this.props.message.length > 0? {
            width: '20vw',
            fontSize: '1rem',
            padding: '1vw 2vw',
            height: '32.85px',
            backgroundColor: '#007bff',
        } : {}
        var inputStyle = this.props.message.length > 0? {width: '65vw'} : {}
        return (
            <footer className="foot" style={{height:'58.4px', textAlign: 'left'}}>
                <div style={{marginTop: '11px'}}>
                    <input className="inputBar" style={inputStyle} id="name" name="name" placeholder="" type="text" required="" onChange={this.props.handleMessageInput}/>
                    <button onClick={this.props.handleSubmit} className="sendButton" style={buttonStyle} >Send</button>
                </div> 
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