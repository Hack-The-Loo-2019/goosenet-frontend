import React from 'react'
import TextPic from '../components/skypify'

class Chatroom extends React.Component {
    render(){
        return (
            <div className='chatroomWrapper' style={{display: 'block', textAlign: 'center'}} onClick={()=>this.props.enterChat(this.props.room)}>
                <div className='chatroom'>
                    <div className="picColumn">
                        <TextPic radius={7.5} units='vw' string={this.props.room.name} />
                    </div>
                    <div className="contentColumn">
                        <p style={{margin: '0 0 7.3px 0', fontSize: '1.3em'}}><b>
                            {this.props.room.name}
                        </b></p>
                        <p style={{margin: '0'}}>
                            {this.props.room.members}
                        </p>
                    </div>
                </div>
                <span style={{marginLeft: '15vw', display: 'inline-block', width:'65%', borderTop: '1px solid #ccc'}} />
            </div>
        )
    }
}

export default Chatroom