import styled, { css } from "styled-components"
import {
  ITitleWrapProps,
  IInputWrap,
  IShowButtonProps,
  IHelperWrapProps,
} from "./interface"

export const Wrapper = styled.div`
  width: 100%;
`

export const TitleWrap = styled.div<ITitleWrapProps>`
  font-size: 14px;
  color: #1f1a24;
  margin-left: 3px;
  margin-bottom: 6px;
  display: ${(props) => (props.isShown ? "block" : "none")};
  ${(props) =>
    props.type === "disabled" &&
    css`
      opacity: 0.5;
    `}
`

export const InputWrap = styled.div<IInputWrap>`
  width: 342px;
  height: 48px;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  background-color: #f8f8f8;
  padding: 10px 16px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  border: 1px solid
    ${(props) => {
      if (props.type === "typing") return "#008B28"
      else if (props.type === "completed") return "#635F66"
      else if (props.type === "warning") return "#DA1E28"
      else if (props.type === "help") return "#635F66"
      else return "transparent"
    }};
  ${(props) =>
    props.type === "disabled" &&
    css`
      opacity: 0.5;
    `}
`

export const StyledInput = styled.input`
  width: 100%;
  font-size: 16px;
  border: 0;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
`

export const ShowButton = styled.div<IShowButtonProps>`
  display: ${(props) => (props.isShown ? "block" : "none")};
  margin: 0 2px;
  cursor: ${(props) => (props.type === "disabled" ? "default" : "pointer")};
`
export const ShowHelperTextButton = styled(ShowButton)``

export const ShowVisibleTextButton = styled(ShowButton)``

export const HelperWrap = styled.div<IHelperWrapProps>`
  font-size: 12px;
  color: #36323b;
  margin-left: 3px;
  margin-top: 6px;
  display: ${(props) => (props.isShown ? "block" : "none")};
  color: ${(props) => {
    if (props.type === "help") return "#008B28"
    else if (props.type === "warning") return "#DA1E28"
    else return "#36323B"
  }};
  ${(props) =>
    props.type === "disabled" &&
    css`
      opacity: 0.5;
    `}
`
