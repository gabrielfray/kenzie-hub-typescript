import styled from "styled-components";
import "animate.css";
import { Link } from "react-router-dom";

export const ContentMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
  }
  header {
    display: flex;
    justify-content: space-between;

    margin: 0 auto;
    padding: 30px 20px;
    width: 100%;
    max-width: 480px;

    h2 {
      color: var(--color-primary);
      margin-bottom: 2.1875rem;

      animation: bounceInDown 1s;
    }
    span {
      font-weight: 400;
      font-size: 0.5996rem;

      color: var(--color-gray-1);
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    width: 90%;
    max-width: 28rem;
    height: 60.6875rem;

    border-radius: 0.25rem;
    background-color: var(--color-gray-3);
    color: var(--color-gray-0);

    animation: fadeIn 1s;

    h3 {
      font-size: 1.125rem;
      font-weight: 700;

      margin-top: 1.875rem;
    }
    button {
      width: 90%;
      height: 3rem;

      border: none;
      border-radius: 0.25rem;
      background-color: var(--color-primary);
      color: var(--color-gray-0);

      :focus {
        background-color: var(--color-primary-negative);
      }
      :hover {
        animation: pulse 1.5s infinite;
      }
    }
    span {
      font-weight: 600;
      font-size: 0.75rem;

      color: var(--color-gray-1);
    }
  }
`;
export const LinkStyled = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 4.9713rem;
  height: 1.9969rem;

  border-radius: 0.1999rem;
  background-color: var(--color-gray-3);
  color: var(--color-gray-0);

  font-weight: 600;
  font-size: 0.5996rem;

  animation: bounceInDown 1s;
  :focus {
    background-color: var(--color-gray-1);
  }
`;

export const ContentInputLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100px;
  label {
    display: flex;
    align-self: start;

    padding: 0 0 0.625rem 5%;

    font-size: 0.75rem;
    font-weight: 400;

    color: var(--color-gray-0);
  }
  input {
    width: 90%;
    height: 3rem;
    padding: 0rem 1.0152rem;

    font-weight: 400;
    font-size: 1rem;

    border-radius: 0.25rem;
    border: 0.0625rem solid var(--color-gray-0);
    background-color: var(--color-gray-2);
    color: var(--color-gray-0);

    ::placeholder {
      color: var(--color-gray-1);
    }
  }
`;
export const ContentSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  label {
    display: flex;
    align-self: start;

    padding: 0 0 0.625rem 5%;

    font-size: 0.75rem;
    font-weight: 400;

    color: var(--color-gray-0);
  }
  .Selection {
    width: 90%;
  }
`;

export const ErrorMessage = styled.div`
  color: rgba(218, 27, 27, 0.873);
  font-size: 1rem;
  display: flex;
  align-self: flex-start;
  padding: 7px 0 0 1.5rem;
`;
export const ContentImage = styled.div`
  position: absolute;
  z-index: -50;
  width: 100%;
  height: 100%;
`;
