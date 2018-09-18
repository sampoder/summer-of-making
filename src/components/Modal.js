import React, { Fragment } from 'react'
import { Box } from '@hackclub/design-system'
import styled, { keyframes } from 'styled-components'
import ScrollLock from 'react-scrolllock'
import Icon from '@hackclub/icons'
import Sheet from 'components/Sheet'

const modalKeyframes = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0);
  }

  85% {
    transform: translate(-50%, -50%) scale(1.025);
  }

  100% {
    transform: translate(-50%, -50%) scale(1);
  }
`

const Modal = styled(Sheet)`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.0625), 0 16px 32px rgba(0, 0, 0, 0.125) !important;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1100;

  ${({ theme }) => theme.mediaQueries.md} {
    animation: ${modalKeyframes} ease-in 0.25s;
  }

  // Responsive size control
  width: ${props => props.w || props.width || '36rem'};
  max-width: 95vw;
  max-height: 95vh;
  margin: 0 auto;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  > button:first-child {
    position: fixed;
    top: 0;
    right: 0;
  }
`

const Overlayer = Box.extend`
  z-index: 1024;
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(6px);

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Overlay = props => (
  <Fragment>
    <Overlayer {...props} />
    <ScrollLock />
  </Fragment>
)

const ButtonReset = styled(Box.withComponent('button')).attrs({
  role: 'button',
  p: 3
})`
  appearance: none;
  background: transparent;
  border: 0;
  border-radius: ${({ theme }) => theme.pill};
  cursor: pointer;
`
const CloseButton = props => (
  <ButtonReset aria-label="Close" color="muted" {...props}>
    <Icon glyph="view-close-small" size={24} />
  </ButtonReset>
)

export default { Modal, Overlay, Overlayer, CloseButton }
