import styled, { css } from 'styled-components';

const colors = {
  SUB_GRAY: '#808080',
  BLACK: '#000000',
  WHITE: '#FFFFFF',
};

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 0.8rem;
  color: ${colors.BLACK};
`;
type FormInputLabelProps = {
  shrink?: boolean
}
export const InputLabel = styled.label<FormInputLabelProps>`
    color: ${colors.SUB_GRAY};
    font-size: 1rem;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
    ${({shrink}) => shrink && shrinkLabelStyles}
`;

export const Input = styled.input`
    background: none;
    background-color: ${colors.WHITE};
    color: ${colors.SUB_GRAY};
    font-size: 1.2rem;
    padding: 0.6rem  0.6rem  0.6rem 0.25rem;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${colors.SUB_GRAY};
    margin: 1.5rem 0;

    &:focus {
      outline: none;
    }

    &:focus ~ ${InputLabel} {
        ${shrinkLabelStyles}
    }

    &[type='password'] {
        letter-spacing: 0.3em;
    }
`;

export const InputGroup = styled.div`
    position: relative;
    margin: 2.8rem 0;
`;