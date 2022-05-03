import React from 'react';
import { Button } from '../../Button';

import { FaPlaystation, FaSteam, FaXbox } from 'react-icons/fa'

import * as S from './styles';

export const SectionCard = () => {
  return (
    <S.Container href="/games/little-nightmares-2">
      <S.Content>
        <S.Image 
          src="https://store-images.s-microsoft.com/image/apps.5578.71995601368241962.063be1f5-e727-44b9-9243-8f287ee0ae94.858043fe-8b52-4942-bf1a-7d9c6c6ae777?q=90&w=480&h=270" 
          width="216px" 
          height="116px" 
        />

        <S.Details>
          <S.Title>
            Section Title
          </S.Title>

          <S.Platforms>
            <FaSteam />
            <FaXbox />
            <FaPlaystation />
          </S.Platforms>

          <S.Footer>
            <S.Price>
              R$ 100,00
            </S.Price>

            <Button label='Comprar' />
          </S.Footer>
        </S.Details>
      </S.Content>
    </S.Container>
  );
};
