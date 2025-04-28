import * as S from "./styles";

const Loading = () => {
  return (
    <S.LoadingOverlay>
      <S.LoadingContainer>
        <S.LoadingSpinner />
        <S.LoadingText>Carregando...</S.LoadingText>
      </S.LoadingContainer>
    </S.LoadingOverlay>
  );
};

export default Loading;
