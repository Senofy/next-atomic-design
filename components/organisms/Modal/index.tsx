import { FC, SyntheticEvent, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Button } from '../../atoms'

import { ModalWrapper, Wrapper } from './styles'

interface ModalProps {
	open: boolean
	setOpen: (boolean) => void
}

const Modal: FC<ModalProps> = ({ open, setOpen }) => {
	const ref = useRef<HTMLElement>(null)
	const [mounted, setMounted] = useState(false)
	const [modalFocus, setModalFocus] = useState(false)

	useEffect(() => {
		ref.current = document.body
		setMounted(true)
	})

	const checkIfClickedOutside = (e: SyntheticEvent) => {
		e.stopPropagation()

		if (!modalFocus) {
			setOpen(false)
		}
	}

	return mounted
		? createPortal(
				<Wrapper onClick={checkIfClickedOutside} open={open}>
					<ModalWrapper
						onClick={(e) => e.stopPropagation()}
						onMouseLeave={() => setModalFocus(false)}
						onMouseEnter={() => setModalFocus(true)}
					>
						<Button
							color={'gray-lighter'}
							fontSize={18}
							fontWeight={700}
							onClick={() => setOpen(false)}
						>
							X
						</Button>
					</ModalWrapper>
				</Wrapper>,
				ref.current
		  )
		: null
}

export default Modal
