import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: center;
`;

export const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

export const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;
