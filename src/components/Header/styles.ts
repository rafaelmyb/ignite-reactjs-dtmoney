import styled from 'styled-components'

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px; // Tamanho máximo
  margin: 0 auto; // Sempre centralizado

  padding: 2rem 1rem 12rem; // o padding na lateral é para quando a tela for menor, manter uma distância da lateral
  display: flex;
  align-items: center; // Para alinhar a logo e o button na mesma altura
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #FFF;
    background: var(--blue-light);
    border: 0; // Para tirar a borda nativa do html no button
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s; // aplica uma transição no filter de 0.2s

    &:hover {
      filter: brightness(0.9); // hackzinho css para diminuir a claridade e não precisar de outra cor
    }
  }
`;