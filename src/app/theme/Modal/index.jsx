
import './style.css'

// Actions
import { Location, stopPropagation } from '../../../utils'

// Trigger css slidein transition
const slideIn = el => {
  el.classList.add('closed')
  void el.clientHeight
  el.classList.remove('closed')
}

// Trigger css slideout transition
const slideOut = (el, done) => {
  el.classList.add('closed')
  setTimeout(done, 300)
}

// View
export const Modal = ({ closePath, onClose, className, ...rest }, children) => {
  const CloseModal = state => [
    onClose ? onClose(state) : state,
    Location.go({ to: closePath })
  ]

  return (
    <div class={`modal${className ? ' ' + className : ''}`} key='modal' onclick={[CloseModal, ev => ev.preventDefault()]} onCreate={slideIn} onRemove={slideOut}>
      <div class='box' onclick={stopPropagation} {...rest}>

        <a href={closePath} onclick={[CloseModal, ev => ev.preventDefault()]} class='close'>
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><line x1='18' y1='6' x2='6' y2='18' /><line x1='6' y1='6' x2='18' y2='18' /></svg>
        </a>

        <div class='inner'>
          {children}
        </div>
      </div>
    </div>
  )
}
