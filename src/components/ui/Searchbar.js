import styled from '@emotion/styled';
import {
  BiSearchAlt
} from 'react-icons/bi';

export const Header = styled.header `
  min-height: 64px;
  padding: 15px 24px 15px 24px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #13756790;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(3px);
`;

export const SearchForm = styled.form `
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
`;

export const SearchFormButton = styled.button `
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  padding: 0;

  &:hover {
    opacity: 1;
  }
`;

export const SearchFormInput = styled.input `
  display: inline-block;
  width: 100%;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 14px;
  padding-right: 4px;

  &::placeholder {
    font-size: 17px;
  }
`;

export const IconSearch = styled(BiSearchAlt)
`
  width: 30px;
  height: 30px;
`;
