// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  ImageContainer,
  PeraContainer,
  ButtonContainer,
} from './styledComponents'

const Unlock = () => {
  const [clicked, setterClick] = useState(false)

  const onClickButton = () => {
    // console.log(clicked)
    setterClick(!clicked)
  }
  const url = clicked
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'

  const altName = clicked ? 'unlock' : 'lock'

  const name = clicked ? 'Unlocked' : 'Locked'

  const buttonName = clicked ? 'Lock' : 'Unlock'

  return (
    <>
      <MainContainer>
        <ImageContainer src={url} alt={altName} />
        <PeraContainer>Your Device is {name}</PeraContainer>
        <ButtonContainer onClick={onClickButton}>{buttonName}</ButtonContainer>
      </MainContainer>
    </>
  )
}
export default Unlock
