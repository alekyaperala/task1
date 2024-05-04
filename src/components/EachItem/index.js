import './index.css'

const EachItem = props => {
  const {eachItemDetails} = props
  const {name, age, city, purchaseDate, amount} = eachItemDetails
  return (
    <li className="eachListItem">
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <h1>City: {city}</h1>
      <h1>PurchaseDate: {purchaseDate}</h1>
      <h1>Amount: {amount}</h1>
    </li>
  )
}

export default EachItem
