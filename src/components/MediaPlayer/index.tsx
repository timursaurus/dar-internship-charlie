import Player from 'react-player'
import styled from 'styled-components'

const StyledPlayerWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  margin-top: 1rem;
`

type Props = {
  url: string
}

const MediaPlayer = ({ url }: Props) => {
  return (
    <StyledPlayerWrapper>
      <Player url={url} />
    </StyledPlayerWrapper>
  )
}

export default MediaPlayer