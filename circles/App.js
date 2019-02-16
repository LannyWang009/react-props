// Render the circles using React!
const App = (props) => {
  let { circles } = props
  console.log('App', props)
  <Circle radius={props.radius} color={props.color}><span>circle</span></Circle>
}

const Circle = (props) => {
    let { circles } = props
  console.log('Circle', props)
  props.map(element => {
      let styles ={
          margin:'10px',
          width:element.radius,
          height:element.radius,
          backgroundColor:props.color
      }
      console.log('styles', styles)
      return (
          <div className='circle' style={styles}>             
          </div>
      )
  }
}