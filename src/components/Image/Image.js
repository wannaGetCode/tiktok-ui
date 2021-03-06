import { forwardRef, useState } from 'react'
import PropTypes from 'prop-types'
import images from '~/assets/images'
import styles from './Image.module.scss'
import classNames from 'classnames'

const Image = forwardRef(({ src, className, fallback: customFallbak = images.noImage, alt }, ref) => {
  const [fallback, setFallback] = useState('')

  const handleError = () => {
    setFallback(customFallbak)
  }

  return (
    <img
      className={classNames(styles.wrapper, className)}
      ref={ref}
      src={src || fallback}
      alt={alt}
      onError={handleError}
    />
  )
})

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallback: PropTypes.string,
}

export default Image
