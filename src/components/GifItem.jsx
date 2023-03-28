import PropTypes from 'react'

export const GifItem = ({title, url}) => {

    return (
    <div className="card">
        <img src={url} alt="" />
        <p>{title}</p>
    </div>
  )
}

GifItem.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string
}
GifItem.defaultProps = {
    title: 'No hay título',
}