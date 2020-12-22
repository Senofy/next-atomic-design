import styled from 'styled-components'

interface WrapperProps {
	open: boolean
}

export const Wrapper = styled.aside<WrapperProps>`
	display: ${({ open }) => (open ? 'flex' : 'none')};
	justify-content: center;

	background-color: rgba(0, 0, 0, 0.5);

	width: 100%;
	height: 100%;
	position: fixed;

	top: 0;

	padding-top: 20px;
	padding-bottom: 20px;

	z-index: 999999;
	overflow-y: scroll;
	overflow-x: hidden;

	@media (min-width: 768px) {
		overflow-y: auto;
		padding-top: 100px;
		padding-bottom: 0;
	}
`

export const ModalWrapper = styled.div`
	width: 500px;
	position: relative;
	max-width: 95%;
	height: min-content;

	background-color: #232329;
	border: 2px solid #464650;
	border-bottom: 2px solid #f8614a;

	display: flex;

	@media (min-width: 768px) {
		width: 800px;
		height: 580px;
	}

	@media (min-width: 1200px) {
		width: 1351px;
		height: 600px;
	}

	& > button {
		position: absolute;
		top: 8px;
		right: 8px;
	}
`
