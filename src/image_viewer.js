// import big from '../assets/athelets.jpg'
import small from '../assets/giraffe.jpg'

import '../styles/image_viewer.css'

export default () => {
  const image = document.createElement('img')

  image.src = small

  document.body.appendChild(image)
}

// const bigImage = document.createElement('img')

// bigImage.src = big

// document.body.appendChild(bigImage)
