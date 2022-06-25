import PropTypes from 'prop-types'
import styles from './Menu.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

const Header = ({ title, onBack }) => {
  return (
    <header className={cx('header')}>
      <button className={cx('back-btn')} onClick={onBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h4 className={cx('header-title')}>{title}</h4>
    </header>
  )
}

Header.prototype = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
}

export default Header
