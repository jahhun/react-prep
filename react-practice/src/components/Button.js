const Button = (props) => {
  const { text, backgroundColor } = props
  // const style = {
  //   backgroundColor: props.backgroundColor,
  // }
  // const style = 'green'
  return (
    <button style={{ backgroundColor: backgroundColor }} className="btn">
      {text}
    </button>
  )
}

export default Button
