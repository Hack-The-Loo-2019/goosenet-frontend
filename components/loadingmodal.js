import React from 'react'

class LoadingModal extends React.Component {
    render(){
        return (
            <div style={{position: 'fixed', width: '100vw', height: '100vh', zIndex: '103', backgroundColor: '#666666', opacity: '0.5'}} />
        )
    }
}

export default LoadingModal