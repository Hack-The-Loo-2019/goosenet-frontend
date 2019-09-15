import React from 'react'

export const getHashedColor = function(str){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = '#';
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xFF;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}

class TextPic extends React.Component{

    constructor(props){
        super(props)
        this.color = getHashedColor(this.props.string)
    }

  render(){
      var letters = this.props.string.toUpperCase().replace(/[^a-zA-Z0-9]+/g, "-");
      letters = letters.split('-')
      letters = letters.filter(word=>word.length>0)
      if(letters.length < 2) letters.push(' ')
      if(letters.length < 2) letters.push(' ')
    return (
      <div className='textPicture' style={
          {
              width: (2*this.props.radius)+this.props.units,
              height: (2*this.props.radius)+this.props.units,
              borderRadius: this.props.radius+this.props.units,
              backgroundColor: this.color,
              textAlign: "center",
              fontSize: (0.8*this.props.radius)+this.props.units,
              color: 'white',
              lineHeight: (1.9*this.props.radius)+this.props.units
            }
        }>
            {letters[0][0]+letters[1][0]}
      </div>
    )
  }
}

export default TextPic
