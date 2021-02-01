import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({
  title
}) => {
  const onClick = () => {
    console.log('Click')
  }
  return (
    <header>
      <h1>{ title }</h1>
      <Button color='red' text='Add' onClick={onClick}></Button>
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header
