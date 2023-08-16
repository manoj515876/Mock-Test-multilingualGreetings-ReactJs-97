import './App.css'
import {Component} from 'react'
import Button from './components/Button'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here

class App extends Component {
  state = {
    activeList: languageGreetingsList[0],
  }

  onClicked = id => {
    const active = languageGreetingsList.filter(each => each.id === id)
    const [activeOne] = active
    this.setState({activeList: activeOne})
  }

  render() {
    const {activeList} = this.state
    return (
      <div className="container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="language-container">
          {languageGreetingsList.map(eachButon => (
            <Button
              languageGreetingsList={eachButon}
              key={eachButon.id}
              onClicked={this.onClicked}
            />
          ))}
        </ul>
        <img
          src={activeList.imageUrl}
          alt={activeList.imageAltText}
          className="image-banner"
        />
      </div>
    )
  }
}

export default App
