import React from 'react'
import { Component } from 'react'
import Layout from '../components/layout'
import Axios from 'axios';

class Forms extends Component {
    constructor(props) {
        super(props)
        this.state = {data:[]}
        this.getSurveyList = this.getSurveyList.bind(this)
        //this.getSurveyURL = this.getSurveyURL.bind(this)
    }

    async getSurveyList() {
        this.setState({ error: '' })
        const url = 'https://api.surveymonkey.com/v3/surveys'
        const auth = 'bearer -MMu4iKFM1vKiFeMgM7kpAkhPwUt3Sm3lANFtKo7cJXeVlZ2vwTngI7tZ1TRtecjnTuXAJXMZLumLcrAqUvhHEF0yhKm5sJ3j1qtKxwflV4WkhzBi9TOoL5-Z5b4HfCH'
        this.setState({ loading: "is-loading" })
        try {
          const response = await Axios.get(url, {
            headers: {
                "Authorization": auth
            }
          })
          console.log(response.data.data)
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
        this.getSurveyList()
      }

    //   getSurveyURL(string) {
    //     const url = 'https://api.surveymonkey.com/v3/surveys/' + string + '/collectors'
    //     const auth = 'bearer -MMu4iKFM1vKiFeMgM7kpAkhPwUt3Sm3lANFtKo7cJXeVlZ2vwTngI7tZ1TRtecjnTuXAJXMZLumLcrAqUvhHEF0yhKm5sJ3j1qtKxwflV4WkhzBi9TOoL5-Z5b4HfCH'
    //     try {
    //       const response = Axios.post(url, {"type":"weblink"}, {
    //         headers: {
    //             "Authorization": auth,
    //             "Content-type":"application/json"
    //         }
    //       })
    //       console.log(response.data.data)
    //     } catch (error) {
    //       // Maybe the other user did not leave review, eitherways we will display no review left
    
    //       console.error(
    //         'You have an error in your code or there are Network issues.',
    //         error
    //       )
    //     }
    //   }

    render() {
        return(
            <Layout page='Posts' path={['Posts']}>
                <div className='contentWrapper'>
                    <p>Survey Monkeys</p>
                    {this.state.data.map((talkList) => {
                        const { id, title} = talkList
                        var surveyURL
                        if (id == "188727696") {
                            surveyURL = 'https://www.surveymonkey.com/r/DNLLVRY'
                        }
                        return (
                            <div>
                                <p className="control">
                                    <button className="btn btn-primary btn-block">
                                 <a href={surveyURL} style={{width: '100%'}}>
                                    {title}
                                </a>
                                </button>
                                </p>
                            </div>

                        )
                    })}
                </div>
            </Layout>
        );
    }
}

export default Forms