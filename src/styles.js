import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const Container2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
export const Input = styled.input`
  margin-top: 2rem;
  width: 20rem;
  @media (max-width: 380px) {
    width: 12rem;
  }
  height: 2rem;
  padding: 0 1rem;
  border-radius: 0.7rem;
  border: none;
  transition: all 500ms ease-out;
  &:hover {
    cursor: pointer;
    box-shadow: 10px 10px 10px rgb(0, 0, 0, 0.1);
  }
`;
export const Input2 = styled.input`
  margin-top: 2rem;
  width: 25rem;
  box-shadow: 10px 10px 10px rgb(0, 0, 0, 0.1);
  @media (max-width: 380px) {
    width: 11rem;
  }
  text-align: center;
  height: 4rem;
  padding: 0 1rem;
  border-radius: 0.7rem;
  border: none;
  transition: all 500ms ease-out;
`;
export const ThemeTogglerButton = styled.button`
  border-radius: 5rem;
  border: none;
  width: 3rem;
  height: 3rem;
  position: fixed;
  top: 1rem;
  right: 1rem;
  transition: all 500ms ease-out;
`;
