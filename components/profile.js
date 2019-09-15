import React from 'react'

import TextPic from '../components/skypify'
import Axios from 'axios'
import { baseUrl } from '../static/hardcode'
import Router from 'next/router'
import {Chatrooms} from '../static/hardcode'

class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state={
            loading: false
        }
    }
    render(){
        return (
            <div style={{position: 'fixed', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: '100vw', height: '100vh'}}>
                {!this.state.loading||<div style={{ width: '100vw', height: '100vh', zIndex: '91', position: 'fixed', backgroundColor: '#000000', opacity: '0.3'}} />}
                <div style={{width: '60vw',height: '50vh', backgroundColor: '#FAFAFF', zIndex: '90', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', border: '3px solid grey'}} >
                    <a style={{position: 'absolute', fontSize: '3em', right: '22vw', top: '24vh'}} onClick={this.props.close}>×</a>
                    <div style={{position: 'absolute', top: '35vw'}} >
                        <TextPic radius={15} units="vw" string={this.props.name} style={{border: '2px solid grey'}}/>
                    </div>
                    <h2><u>@{this.props.name}</u></h2>
                    <br></br>
                    <div style={{width: '40vw', display: 'flex', alignItems: 'center', height: '10vw', backgroundColor: '#007bff', textAlign: 'left'}} >
                        <img className="smallerIcon" style={{margin:'2.5vw'}} src="/static/assets/envelope.png" />
                        <b>Message</b>
                    </div>
                    <br></br>
                    <div style={{width: '40vw', display: 'flex', alignItems: 'center', height: '10vw', backgroundColor: '#007bff', textAlign: 'left'}} onClick={
                        
                        async function a(){
                            if(!this.state.loading) this.setState({loading: true});
                            await Axios.get(baseUrl+'/pegasus/addFriend');
                            this.props.close()
                            this.props.refresh(Chatrooms[0])
                        }.bind(this)
                    }>
                        <img className="smallerIcon" style={{margin:'2.5vw'}}  src="/static/assets/star.png" />
                        <b>Add Friend</b>
                    </div>
                </div>
                <div style={{ width: '100vw', height: '100vh', zIndex: '80', position: 'fixed', backgroundColor: '#000000', opacity: '0.3'}} />
            </div>
        )
    }
}

export default Profile