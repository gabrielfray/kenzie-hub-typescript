import styled from "styled-components";

export const ContentMain = styled.div`
  width: 100%;
`;

export const Header = styled.header`
  width: 100%;
  height: 4.5625rem;

  border-bottom: 0.0625rem solid var(--color-gray-3);
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 auto;
    padding: 0 1.25rem;

    max-width: 60rem;
    height: 100%;
  }
  h1 {
    font-size: 1.5rem;
    color: var(--color-primary);

    animation: fadeInDownBig 1s;
  }
`;
export const ButtonLogout = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3.4681rem;
  height: 2rem;

  border: none;
  border-radius: 0.1999rem;
  background-color: var(--color-gray-3);
  color: var(--color-gray-0);

  font-weight: 600;
  font-size: 0.5996rem;

  animation: fadeInDownBig 1s;
  :focus {
    background-color: var(--color-gray-1);
  }
`;
export const ContentUser = styled.div`
  height: 8.125rem;
  width: 100%;

  border-bottom: 0.0625rem solid var(--color-gray-3);
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;
    padding: 0 1.25rem;

    max-width: 60rem;
    height: 100%;
  }
  h3 {
    font-weight: 700;
    font-size: 1.5rem;

    color: var(--color-gray-0);

    animation: fadeIn 1s;
  }
  span {
    font-weight: 400;
    font-size: 0.85rem;

    color: var(--color-gray-1);

    animation: fadeIn 1s;
  }
`;
export const Content = styled.div`
  width: 100%;
  color: white;
`;
export const ContentNavTech = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.9375rem;

  margin: 0 auto;

  max-width: 60rem;
  height: 100%;
  padding: 1.875rem 1.25rem;

  animation: fadeIn 1s;
`;
export const ButtonOpen = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.0306rem;
  height: 2rem;

  font-size: 1.2rem;
  color: #fff;
  background-color: var(--color-gray-3);
  border: none;
  border-radius: 0.25rem;

  :focus {
    background-color: var(--color-gray-1);
  }

  :hover {
    animation: pulse 1.5s infinite;
  }
`;

export const ContentTechs = styled.div`
  display: flex;
  justify-content: center;

  padding: 0rem 1.25rem;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;

    width: 100%;
    max-width: 58rem;
    max-height: 37.8rem;
    padding: 1.25rem 0;

    overflow-y: auto;

    border-radius: 0.25rem;
    background-color: var(--color-gray-3);

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 95%;
      height: 3.0625rem;
      padding: 0rem 1.25rem;

      border-radius: 0.25rem;
      background-color: var(--color-gray-4);

      animation: fadeInLeft 1s;

      :hover {
        background-color: var(--color-gray-2);
      }
      span {
        font-weight: 700;
        font-size: 0.8881rem;
      }
      p {
        display: flex;
        gap: 1.875rem;

        font-weight: 400;
        font-size: 0.7614rem;

        color: var(--color-gray-1);
      }
    }
  }
`;
export const ContentImage = styled.div`
  position: absolute;
  width: 90%;
  @media (min-width: 768px) {
    width: 50%;
  }
`;
