import React from 'react'
import { Component } from 'react'
import Layout from '../components/layout'

class Posts extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Layout page='Posts' path={['Posts']}>
                <div className='contentWrapper'>
                    <div class="container-posts">
                      <table>
                          <tr>
                            <td>
                                <img src="static/favicon.ico" alt="Avatar" style={{width: '100%', marginTop:'0vh'}}/>
                            </td>
                            <td>
                                <h4 style={{margin: '0'}}>Mr. Ngentot</h4>
                                <p syle={{margin:'0.5em'}}>Hello. How would you like to ngentot today. When where and how much per hour?</p>
                            </td>
                          </tr>  
                          <tr>
                              <a href="https://urlhere.com/thread_link">Reply</a>
                          </tr>
                      </table>
                      <span class="time-right">11:00</span>
                    </div>
                    <div class="container-posts">
                      <table>
                          <tr>
                            <td>
                                <img src="static/favicon.ico" alt="Avatar" style={{width: '100%', marginTop:'0vh'}}/>
                            </td>
                            <td>
                                <h4 style={{margin: '0'}}>Ms. Duc Thanh</h4>
                                <p syle={{margin:'0.5em'}}>Hello. How much do you charge per hour for your services?</p>
                            </td>
                        </tr>
                        <tr>
                              <a href="https://urlhere.com/thread_link">Reply</a>
                          </tr>
                      </table>
                      <span class="time-right">12:69</span>
                    </div>
                    <div class="container-posts">
                      <table>
                          <tr>
                            <td>
                                <img src="static/favicon.ico" alt="Avatar" style={{width: '100%', marginTop:'0vh'}}/>
                            </td>
                            <td>
                                <h4 style={{margin: '0'}}>Mr. Goose</h4>
                                <p syle={{margin:'0.5em'}}>Guys please lets go get lunch with right now Im so hungry.</p>
                            </td>
                        </tr>
                        <tr>
                              <a href="https://urlhere.com/thread_link">Reply</a>
                          </tr>
                      </table>
                      <span class="time-right">14:30</span>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Posts