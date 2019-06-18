import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  border: 1px solid #e8e8e8;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 9px 0 rgba(62, 57, 107, 0.06);
  width: min-content;
`;

export const Controls = styled.div`
  display: flex;
  padding: 20px;
`;

export const Input = styled.input`
  border: none;
  font-size: 16px;
`;

export const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const Divider = styled.hr`
  margin: 0;
  border: none;
  height: 1px;
  background: #e8e8e8;
`;

export const Dropdown = styled.div`
  overflow: hidden;
`;

export const Title = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  color: #b2b2b3;
  font-size: 12px;
  padding: 0 20px;
`;

export const SearchingPanel = styled.div``;

export const ResultPanel = styled.div`
  overflow: hidden;
`;
