import styled from "styled-components";
import "animate.css";

export const ContentMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  position: fixed;
  backdrop-filter: blur(0.1875rem);
  h2 {
    color: var(--color-primary);
    margin-bottom: 2.1875rem;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.9375rem;

    width: 90%;
    height: 21rem;
    max-width: 28rem;

    border-radius: 0.25rem;
    background-color: var(--color-gray-3);
    color: var(--color-gray-0);

    span {
      font-weight: 600;
      font-size: 0.75rem;

      color: var(--color-gray-1);
    }
  }
`;
export const ContentButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.25rem;

  width: 100%;

  .buttonSaveEdit {
    width: 56%;
    height: 3rem;

    border: none;
    border-radius: 0.25rem;
    background-color: var(--color-primary-negative);
    color: var(--color-gray-0);

    :hover {
      animation: pulse 1.5s infinite;
    }
  }
  .delete {
    width: 30%;
    height: 3rem;

    border: none;
    border-radius: 0.25rem;
    background-color: var(--color-gray-1);
    color: var(--color-gray-0);

    :hover {
      animation: pulse 1.5s infinite;
    }
  }
`;

export const ButtonClose = styled.button`
  color: var(--color-gray-0);
  background-color: transparent;
  border: none;
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 2.5rem;
  width: 100%;
  padding: 0 1rem;

  background-color: var(--color-gray-2);
  border-radius: 0.25rem 0.25rem 0 0;

  h3 {
    font-weight: 700;
    font-size: 1rem;
  }
`;

export const ContentInputLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 6.25rem;
  label {
    display: flex;
    align-self: start;

    padding: 0 0 0.625rem 5%;

    font-size: 0.75rem;
    font-weight: 400;

    color: var(--color-gray-0);
  }
  .titleTech {
    width: 90%;
    height: 3rem;
    padding: 0rem 1.0152rem;

    font-weight: 400;
    font-size: 1rem;
    padding: .9375rem .625rem;

    border-radius: 0.25rem;
    border: 0.0625rem solid var(--color-gray-1);
    background-color: var(--color-gray-2);
    color: var(--color-gray-1);
  }
`;
export const ErrorMessage = styled.div`
  color: rgba(218, 27, 27, 0.873);
  font-size: 1rem;
  display: flex;
  align-self: flex-start;
  padding: 0.4375rem 0 0 1.5rem;
`;
