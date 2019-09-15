import React from 'react'
import { Component } from 'react'
import Layout from '../components/layout'
import Axios from 'axios';

class AdminPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {data:[], maintanance:[]}
        this.getMaintananceList = this.getMaintananceList.bind(this)
        this.getMaintenanceDetails = this.getMaintenanceDetails.bind(this)
    }

    async getMaintananceList() {
        this.setState({ error: '' })
        const url = 'https://api.surveymonkey.com/v3/surveys/188727696/responses'
        const auth = 'bearer -MMu4iKFM1vKiFeMgM7kpAkhPwUt3Sm3lANFtKo7cJXeVlZ2vwTngI7tZ1TRtecjnTuXAJXMZLumLcrAqUvhHEF0yhKm5sJ3j1qtKxwflV4WkhzBi9TOoL5-Z5b4HfCH'
        this.setState({ loading: "is-loading" })
        try {
          const response = await Axios.get(url, {
            headers: {
                "Authorization": auth
            }
          })
          this.setState({data: response.data.data})
        } catch (error) {
          // Maybe the other user did not leave review, eitherways we will display no review left
          this.setState({ available: 'false' })
    
          console.error(
            'You have an error in your code or there are Network issues.',
            error
          )
          this.setState({ error: error.message })
        }
        this.setState({ loading: "" })
      }

      componentWillMount() {
        this.getMaintananceList()
      }

        getMaintenanceDetails(caseID) {
        const url = 'https://api.surveymonkey.com/v3/surveys/188727696/responses/' + caseID + '/details'
        const auth = 'bearer -MMu4iKFM1vKiFeMgM7kpAkhPwUt3Sm3lANFtKo7cJXeVlZ2vwTngI7tZ1TRtecjnTuXAJXMZLumLcrAqUvhHEF0yhKm5sJ3j1qtKxwflV4WkhzBi9TOoL5-Z5b4HfCH'
        try {
            var xhr = new XMLHttpRequest()
          const response = Axios.get(url, {
            headers: {
                "Authorization": auth,
            }
          })

          response.then(value => {
			this.setState({maintanance: value.data.pages})
		  });
        } catch (error) {
          // Maybe the other user did not leave review, eitherways we will display no review left
    
          console.error(
            'You have an error in your code or there are Network issues.',
            error
          )
        }
      }


    render() {
        return (
            <Layout page='Posts' path={['Posts']}>
                <div className='contentWrapper'>
                    <p>&nbsp; &nbsp; Survey Monkey Maintanance Requests</p>
                    <table>
                    {this.state.data.map((talkList) => {
                        const {id, title} = talkList
                        var responseURL = this.getMaintenanceDetails(id)
                        var surveyURL = "google.ca"
                        return (
                      
                          <tr>
                            <td>
                                <h4 style={{margin: '0'}}>Han Unit: 1203</h4>
                                <p syle={{margin:'0.5em'}}>Email: han@sa.com, Phone: 226123321</p>
                                <p>The washroom is clogged</p>
                            </td>
                            </tr>

                        )
                    })}
                    </table>
                </div>
            </Layout>
        );
    }
}

export default AdminPanel