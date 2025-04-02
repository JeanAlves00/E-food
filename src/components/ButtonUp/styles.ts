import styled from "styled-components";

export const Button = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #d9392b;
  color: white;
  border: none;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 999;

  &.visible {
    opacity: 1;
    visibility: visible;
  }

  &:hover {
    background-color: #b32b21;
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(0);
  }
`;
