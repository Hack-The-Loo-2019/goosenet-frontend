import React from 'react'
import { Component } from 'react'
import Layout from '../components/layout'

class NewPosts extends Component {
    constructor(props) {
        super(props)
        this.state = {content:''}
        this.handleTextChange = this.handleTextChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleTextChange(event) {
        this.setState({content: event.target.value})
    }

    async handleSubmit (event) {
        event.preventDefault()
        this.setState({ error: '' })
        const content = this.state.content
        const url = `https://posturl.here/`
        this.setState({ loading: "is-loading" })

        try {
            const response = await Axios.post(url, {
              "user": otherId,
              "content":content
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
            <Layout page='NewPosts' path={['NewPosts']}>
                <div className='contentWrapper'>
                    <p> &nbsp; &nbsp; Add your new post here</p>
                    <form onSubmit={this.handleSubmit}>
                        <textarea class="form-control" id="comments" name="message" placeholder="Message" rows="5"></textarea>
                        <button class="btn btn-primary btn-block">Submit</button>
                    </form>
                </div>
            </Layout>
        );
    }
}

export default NewPosts