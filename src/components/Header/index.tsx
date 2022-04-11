import * as S from './styles'

export const Header = () => {
  return (
    <S.Container>
      <S.NavLeft>
        <S.Link>Home</S.Link>
        <S.Link>About</S.Link>
      </S.NavLeft>
      <S.NavCenter>
        <S.Link>
          Elton.
        </S.Link>
      </S.NavCenter>
      <S.NavLeft>
        <S.Link>Works</S.Link>
        <S.Link>Get in touch</S.Link>
      </S.NavLeft>
    </S.Container>
  )
}