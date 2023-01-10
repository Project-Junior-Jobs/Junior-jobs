import styled from "styled-components";

export const StyleDarkMode = styled.span`
  position: absolute;
  right: -18px;
  bottom: -7px;
  overflow: hidden;
  border: 1px solid var(--color-primary);
  border-radius: 84px;

  transform: translate3d(-50%, -50%, 0);
  color: white;

  .toggle {
    cursor: pointer;
    display: inline-block;
    position: relative;
    width: 57px;
    height: 31px;
    background-color: #83d8ff;
    border-radius: 84px;
    transition: background-color 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  .toggle__handler {
    display: inline-block;
    position: relative;
    z-index: 1;
    top: 5px;
    left: 5px;
    width: 20px;
    height: 20px;
    background-color: #ffcf96;
    border-radius: 50px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform: rotate(-45deg);
  }

  .toggle__handler .crater {
    position: absolute;
    background-color: #e8cda5;
    opacity: 0;
    transition: opacity 200ms ease-in-out;
    border-radius: 100%;
  }

  .toggle__handler .crater--1 {
    top: 8px;
    left: 2px;
    width: 4px;
    height: 4px;
  }

  .toggle__handler .crater--2 {
    top: 12px;
    left: 8px;
    width: 6px;
    height: 6px;
  }

  .toggle__handler .crater--3 {
    top: 2px;
    left: 9px;
    width: 8px;
    height: 8px;
  }

  .star {
    position: absolute;
    background-color: #fff;
    transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    border-radius: 50%;
  }

  .star--1 {
    top: 9px;
    left: 17px;
    z-index: 0;
    width: 30px;
    height: 2px;
  }

  .star--2 {
    top: 14px;
    left: 13px;
    z-index: 1;
    width: 30px;
    height: 3px;
  }

  .star--3 {
    top: 21px;
    left: 17px;
    z-index: 0;
    width: 27px;
    height: 2px;
  }

  .star--4,
  .star--5,
  .star--6 {
    opacity: 0;
    transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  .star--4 {
    top: 16px;
    left: 20px;
    z-index: 0;
    width: 2px;
    height: 2px;
    transform: translate3d(3px, 0, 0);
  }

  .star--5 {
    top: 23px;
    left: 17px;
    z-index: 0;
    width: 3px;
    height: 3px;
    transform: translate3d(3px, 0, 0);
  }

  .star--6 {
    top: 8px;
    left: 26px;
    z-index: 0;
    width: 2px;
    height: 2px;
    transform: translate3d(3px, 0, 0);
  }

  input:checked + .toggle {
    background-color: #749dd6;
  }

  input:checked + .toggle:before {
    color: #749ed7;
  }

  input:checked + .toggle:after {
    color: #fff;
  }

  input:checked + .toggle .toggle__handler {
    background-color: #ffe5b5;
    transform: translate3d(28px, 0, 0) rotate(0);
  }

  input:checked + .toggle .toggle__handler .crater {
    opacity: 1;
  }

  input:checked + .toggle .star--1 {
    width: 2px;
    height: 2px;
  }

  input:checked + .toggle .star--2 {
    width: 4px;
    height: 4px;
    transform: translate3d(-5px, 0, 0);
  }

  input:checked + .toggle .star--3 {
    width: 2px;
    height: 2px;
    transform: translate3d(-7px, 0, 0);
  }

  input:checked + .toggle .star--4,
  input:checked + .toggle .star--5,
  input:checked + .toggle .star--6 {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  input:checked + .toggle .star--4 {
    transition: all 300ms 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  input:checked + .toggle .star--5 {
    transition: all 300ms 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  input:checked + .toggle .star--6 {
    transition: all 300ms 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }
`;