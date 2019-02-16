// Render the rectangle using React!
const App = (props) => {
  let { rectangle } = props
  return (
    <Rectangle width={rectangle.width} height={rectangle.height} color={rectangle.color} />
  )
}

const Rectangle = ({ width, height, color }) => {
  return (
    <div style={{ height: height, width: width, backgroundColor: color }} />
  )
}
