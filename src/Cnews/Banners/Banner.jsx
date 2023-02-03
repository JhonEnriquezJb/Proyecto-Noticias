
import './Banner.scss'

export const Banner = ({src}) => {
  return (
    <div className="Banner">
    <a href="#" title="banner" >
      <img src={src} alt="banner01" className="Banner-img" />
    </a>
    </div>

  )
}
