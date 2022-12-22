
import { Squash as Hamburger, Squash } from 'hamburger-react'
import { Container, ContainerButton, ButtonBurger, ContainerIcons, ContainerCV, Logo, SpanMenu} from './navbar.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faCloudArrowDown, faToolbox, faBriefcase, faPhone} from '@fortawesome/free-solid-svg-icons'
import pdf from '../../assets/CV.pdf'
import Burger from "@animated-burgers/burger-slip"
import '@animated-burgers/burger-slip/dist/styles.css'
import { useState } from 'react'

const NavBar = () =>{

  const [openMenu, setOpenMenu] = useState(false)

  const handleBurger = () => {
    setOpenMenu(!openMenu)
  }


  return(
    <Container
      isOpen = {openMenu}
    >
      <ContainerButton>
        <ButtonBurger onClick={handleBurger}> 
          <Burger  
            isOpen={ openMenu }
            
          />
        </ButtonBurger>
      </ContainerButton>
      <ContainerIcons>
        <Logo>
          <a href='#about'>
            <FontAwesomeIcon className='fa-1x' icon={faUser} />
            <SpanMenu isOpen={openMenu} >About me</SpanMenu>
          </a>
        </Logo>
        <Logo>
          <a href="#service">
            <FontAwesomeIcon className='fa-1x' icon={faPhone} />
            <SpanMenu isOpen={openMenu} >Services</SpanMenu>
          </a>
        </Logo>
        <Logo>
          <a href="#portfolio">
            <FontAwesomeIcon className='fa-1x' icon={faBriefcase} />
            <SpanMenu isOpen={openMenu} >Portfolio</SpanMenu>
          </a>
        </Logo>
        <Logo>
          <a href="#contact">
            <FontAwesomeIcon className='fa-1x' icon={faUser} />
            <SpanMenu isOpen={openMenu} >Contact</SpanMenu>
          </a>
        </Logo>
      </ContainerIcons>
      <ContainerCV>
        <Logo>
          <a href={pdf} target="_blank" rel="noopener noreferrer" download="CV.pdf">
            <FontAwesomeIcon className='fa-1x' icon={faCloudArrowDown}/>
            <SpanMenu isOpen={openMenu} >Download CV</SpanMenu>
          </a>
          
        </Logo>
        
      </ContainerCV>

    </Container>
  )
}

export default NavBar