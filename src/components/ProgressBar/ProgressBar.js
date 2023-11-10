/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import VisuallyHidden from '../VisuallyHidden'

const SIZES = {
	small: {
		'--height': '8px',
		'--borderRadius': '4px',
		'--padding': '0',
	},

	medium: {
		'--height': '12px',
		'--borderRadius': '4px',
		'--padding': '0',
	},

	large: {
		'--height': '24px',
		'--borderRadius': '8px',
		'--padding': '4px',
	},
}

const ProgressBar = ({ value, size }) => {
	return (
		<div>
			<span id="loadinglabel">Loading:</span>
			<span
				role="progressbar"
				aria-labelledby="loadinglabel"
				aria-valuenow={size}
			>
				<Bar style={SIZES[size]}>
					<Tract />
					<Fill value={value} />
				</Bar>
			</span>
		</div>
	)
}

const Bar = styled.svg`
	height: var(--height);
	width: 100%;
	box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
	border-radius: var(--borderRadius);
	overflow: hidden;
	padding: var(--padding);
`

const Tract = styled.rect`
	height: 100%;
	width: 100%;
	stroke: ${COLORS.transparentGray15};
	fill: ${COLORS.transparentGray15};
`

const Fill = styled.rect`
	height: 100%;
	width: ${(p) => (p.value ? p.value : 0)}%;
	fill: ${COLORS.primary};
`
export default ProgressBar
