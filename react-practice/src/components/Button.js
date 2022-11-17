const Button = (props) => {
  // const { text, color } = props

  // const style = {
  //   backgroundColor: props.backgroundColor,
  // }
  // const style = 'green'
  return (
    <button style={{ backgroundColor: props.color }} className="btn">
      {props.text}
    </button>
  )
}

export default Button
