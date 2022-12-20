import PersonalData from '../PersonalData/personalData'
import Photo from '../Photo/Photo'
import { Container} from './photoAndData.styles'



const PhotoAndData = () => {
  return(
    <Container>
      <Photo />
      <PersonalData />

    </Container>
  )
}

export default PhotoAndData