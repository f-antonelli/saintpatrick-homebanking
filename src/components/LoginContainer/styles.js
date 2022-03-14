
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import styled from "styled-components";
import userpng from "assets/background-login/user.png";
import lockpng from "assets/background-login/lock.png";
import { fadeIn } from "GlobalStyle";

export const Wrapper = styled.div`
  grid-column: 3;
  grid-row: 2 / span 2;
  justify-self: center !important;
  margin: 0 1rem;
  max-width: 27rem;
  max-height: 25rem;
  background: #e6efef;
  border-radius: 3.1rem;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  padding: 63px 45px;
  animation: ${fadeIn} 2s;
  @media (max-width: 1200px) {
    grid-column: 2;
    grid-row: 2;
  }
  @media (max-width: 920px) {
    background: none;
    box-shadow: none;
    align-self: center;
    grid-column: 1/-1;
    grid-row: 1/-1;
    padding: 0;
  }
`;

export const LoginTitle = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 22px;
  margin-bottom: 2rem;
  @media (max-width: 500px) {
    text-align: center;
  }
`;

export const Form = styled(FormControl)`
  width: 100%;
  margin-bottom: 1rem !important;
`;

export const LockImg = styled.div`
  z-index: 10;
  position: absolute;
  top: 1rem;
  left: 0.9rem;
  width: 20px;
  height: 20px;
  background: url(${lockpng}) no-repeat;
  background-size: contain;
`;

export const UserImg = styled.div`
  z-index: 10;
  position: absolute;
  top: 1rem;
  left: 0.8rem;
  width: 20px;
  height: 20px;
  background: url(${userpng});
`;

export const Label = styled(InputLabel)`
  white-space: pre-wrap !important;
`;

export const Adornament = styled(InputAdornment)``;

export const Eye = styled(IconButton)`
  color: #767676 !important;
  font-weight: 100 !important;
`;

export const Input = styled(OutlinedInput)`
  position: relative;
  border-radius: 8px !important;
  padding-left: 2rem !important;
  background-color: #ffffff;
`;
