// Write your code here

import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails
  return (
    <li className="list-item-styling">
      <img src={imgUrl} className="item-image" alt={name} />
      <p className="item-description">{name}</p>
    </li>
  )
}

export default DestinationItem
