import React from 'react';
import { SectionCard } from './Card';
import * as S from './styles';
import { SectionTitle } from './Title';

interface ISectionProps {
  title: string;
  cards: any[];
}

export const Section = ({ title, cards }: ISectionProps) => {
  return (
    <S.Container>
      <SectionTitle title={title} />

      <S.Cards>
        <SectionCard />
        <SectionCard />
        <SectionCard />
        <SectionCard />
        <SectionCard />
        <SectionCard />
      </S.Cards>
    </S.Container>
  );
};
