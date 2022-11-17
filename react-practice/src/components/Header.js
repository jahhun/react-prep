// import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ heading1 }) => {
  return (
    <div className="header">
      <h1>{heading1}</h1>
      <Button color="green" text="hello" />
    </div>
  )
}

Header.defaultProps = {
  heading1: 'Task Trekk',
}

// Header.propTypes = {
//   heading1: PropTypes.number.isRequired,
// }

export default Header
