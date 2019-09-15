import React from 'react'
import { Component } from 'react'
import Layout from '../components/layout'
import TextPic, {getHashedColor} from '../components/skypify'

class Posts extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Layout page='Posts' tab={0}>
                <div className='contentWrapper'>
                    <Post chatroom="borrowing" poster="Kiel Lind" title="Anyone have a spare vacuum?" message="Looking to borrow a vacuum cleaner, 14th floor. Payment will be done through campus pizza" timestamp="Sep 13, 14.45"/>
                </div>
            </Layout>
        );
    }
}

class Post extends React.Component {
    /*
        Title poster content timestamp chatroom
    */
    render(){
        return (
            <div className='postWrapper'>
                <div className='flexWrapper'>
                    <div className="titleCell" style={{paddingTop: '4.3px'}}>
                        <p style={{margin: '0 0 7.3px 0', fontSize: '1.1em'}}><b>
                            {this.props.title}
                        </b></p>    
                    </div>
                    <div className="labelCell">
                        <b className='labelTag' style={{backgroundColor: getHashedColor(this.props.chatroom)}}>
                            {this.props.chatroom}
                        </b> 
                    </div>
                </div>
                <div className="flexWrapper">
                    <div className="vertLine" style={{width: '2vw', borderRight: "2px solid lightgrey"}} />
                    <div className="contentColumn" style={{marginLeft: '3vw'}}>
                        <p style={{margin: '0'}}>
                        {this.props.message}
                        </p>
                    </div>
                </div>
                <div className="flexWrapper" style={{margin:'12px 0 0 1vw'}}>
                    <TextPic radius={2} units='vw' string={this.props.poster}/>
                    <div className="posterColumn" style={{display: 'flex', marginLeft: '1vw', width: '100%'}}>
                        <p style={{fontSize: '0.75em', margin: '0', color: '#666666', flexGrow: '10'}}>
                            Posted by {this.props.poster}, {this.props.timestamp}
                        </p>
                        <div style={{alignSelf: 'flex-end'}}>
                        <img className="smallIcon" style={{width: '4vw', height: '4vw'}} src="/static/assets/upload-1.png" />
                        <img className="smallIcon" style={{width: '4vw', height: '4vw', margin: '0 0 0 3vw'}} src="/static/assets/next.png" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Posts