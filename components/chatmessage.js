import React from 'react'
import TextPic from '../components/skypify'

class ChatMessage extends React.Component {
    render(){
        return (
            <div className='message' style={{display: 'flex', margin: "14.6px 18.25px 14.6px 14.6px"}}>
                <div className="picColumn" style={{width: '12vw', overflow: 'wrap', paddingTop: '4.3px'}} onClick={this.props.onClick}>
                    <TextPic radius={6} units='vw' string={this.props.username} />
                </div>
                <div className="contentColumn" style={{marginLeft: '3vw'}}>
                    <p style={{margin: '0 0 7.3px 0'}}><b>
                        {this.props.username}
                    </b></p>
                    <p style={{margin: '0'}}>
                        {this.props.message}
                    </p>
                </div>
            </div>
        )
    }
}

export default ChatMessage