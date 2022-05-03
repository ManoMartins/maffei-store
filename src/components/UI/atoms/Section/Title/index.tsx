import * as S from './styles';

interface SectionTitleProps {
  title: string;
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <S.Container>
      <S.Title>
        {title}
      </S.Title>
    </S.Container>
  )
}