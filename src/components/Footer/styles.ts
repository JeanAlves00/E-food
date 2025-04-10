import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  min-height: 298px;
  background: #ffebd9;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 16px;
  box-sizing: border-box;
`;

export const Logo = styled.div`
  width: 125px;
  height: 57.5px;
  margin-bottom: 32px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 46px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 36.8px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 32px;
`;

export const Icon = styled.a`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e66767;
  font-size: 20px;
`;

export const FooterText = styled.p`
  max-width: 480px;
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  color: #e66767;

  @media (max-width: 480px) {
    font-size: 9px;
    line-height: 11px;
  }
`;
