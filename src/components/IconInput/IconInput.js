import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'

import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
	const styles = SIZE[size]
	if (!styles) throw new Error('Select valid size')
	return (
		<Wrapper style={{ '--width': width + 'px' }}>
			<TextInput
				placeholder={placeholder}
				style={{
					'--padding': styles.padding,
					'--font-size': styles.fontSize + 'rem',
				}}
			/>
			<VisuallyHidden>{`${label} input`}</VisuallyHidden>
			<IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
				<Icon id={icon} stroke-width={1} size={styles.iconSize} />
			</IconWrapper>
		</Wrapper>
	)
}

const SIZE = {
	small: {
		fontSize: 14 / 16,
		padding: '4px 0 4px 24px',
		iconSize: 16,
	},

	large: {
		fontSize: 18 / 16,
		padding: '7px 0 7px 36px',
		iconSize: 24,
	},
}

const Wrapper = styled.div`
	position: relative;
	width: var(--width);
	/* border: 1px solid red; */
`
const TextInput = styled.input`
	width: 100%;
	padding: var(--padding);
	border: none;
	border-bottom: 1px solid ${COLORS.black};
	color: ${COLORS.black};
	font-size: var(--fontSize);
	font-weight: 700;

	&::placeholder {
		color: ${COLORS.gray500};
		font-weight: 400;
	}

	&:hover {
		font-weight: 700;
	}
`

const IconWrapper = styled.div`
	position: absolute;
	top: 0px;
	left: 2px;
	bottom: 4px;
	margin: auto;
	height: var(--size);
	width: var(--size);
`
export default IconInput
