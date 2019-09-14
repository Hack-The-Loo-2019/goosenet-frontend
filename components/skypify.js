import React from 'react'

function randomColor(){
    return '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
}

class TextPic extends React.Component{
  render(){
      var letters = this.props.string.toUpperCase().replace(/[^a-zA-Z0-9]+/g, "-");
      console.log(letters)
      letters = letters.split('-')
      letters = letters.filter(word=>word.length>0)
      console.log(letters)
      if(letters.length < 2) letters.push(' ')
      if(letters.length < 2) letters.push(' ')
    return (
      <div className='textPicture' style={
          {
              width: (2*this.props.radius)+'vh',
              height: (2*this.props.radius)+'vh',
              borderRadius: this.props.radius+'vh',
              backgroundColor: randomColor(),
              textAlign: "center",
              fontSize: (0.8*this.props.radius)+'vh',
              color: 'white',
              lineHeight: (1.9*this.props.radius)+'vh'
            }
        }>
            {letters[0][0]+letters[1][0]}
      </div>
    )
  }
}

export default TextPic
