import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import Icon from '../Icon'
import { getDisplayedValue } from './Select.helpers'

const Select = ({ label, value, onChange, children }) => {
	const displayedValue = getDisplayedValue(value, children)

	return (
		<Wrapper>
			<SelectButton value={value} onChange={onChange}>
				{children}
			</SelectButton>
			<SelectIcon id="chevron-down" size={18} />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	position: relative;
	width: fit-content;
	color: ${COLORS.gray700};

	&:hover {
		color: ${COLORS.black};
	}
`

const SelectButton = styled.select`
	border-radius: 8px;
	background: ${COLORS.transparentGray15};
	padding: 12px 50px 12px 16px;
	font-size: 16px;
	font-weight: 400;
	border: none;
	color: inherit;
	appearance: none;

	&:focus {
		border: 2px solid #4374cb;
		outline-color: #4374cb;
	}
`

const SelectIcon = styled(Icon)`
	position: absolute;
	right: 18px;
	top: 13px;
	/* margin-left: 24px; */
	color: inherit;
	pointer-events: none;
`

export default Select
