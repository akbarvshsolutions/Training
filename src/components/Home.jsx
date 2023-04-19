import React from 'react'

function Home() {
  return (
    <div className='box'> 
      <img src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fguitar%2F&psig=AOvVaw23lkqni8SzRbl1E3ubJhzP&ust=1681961972073000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCNjQ6OCCtf4CFQAAAAAdAAAAABAE"}   style={{height : '90vh' , width : '100%' , position : 'absolute' , zIndex : '-1' }}/>
      <span style={ { 
    position: 'absolute',
    bottom: '122px',
    right: '300px' ,
    color: 'beige' ,
    fontFamily : 'cursive',
    fontSize : '60px',
    fontWeight : 'bolder',
    color : 'gold'
    } }>Music album</span>
    </div>
  )
}

export default Home
