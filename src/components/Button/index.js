import './index.css'

const Button = props => {
  const {languageGreetingsList, onClicked} = props
  const {buttonText, id} = languageGreetingsList

  const activeButton = () => {
    onClicked(id)
  }

  return (
    <li>
      <button type="button" className="button" onClick={activeButton}>
        {buttonText}
      </button>
    </li>
  )
}
export default Button
