import styled from 'styled-components'
import posed from 'react-pose'
import { Flex, Box } from 'grid-styled'
import { tween } from 'popmotion'

export const CounterAnimator = posed.div({
	idle: {
		scale: 1,
		opacity: 1,
		transition: (props) => tween({ ...props, duration: 250 }),
	},
	incBy1: { scale: 1.1 },
	incBy10: { scale: 1.5 },
	reset: { opacity: 0.1, scale: 0.5 },
})

export const Counter = styled(CounterAnimator)`
	font-size: 100px;
	color: #ffffff;
`

export const ResponsiveFlex = Flex.extend`
	@media (max-width: 425px) {
		flex-direction: column;
		align-items: center;
	}
`

export const UpdateButton = styled.button`
	background-color: #33343a;
	height: 40px;
	outline: none;
	color: #ffffff;
	font-family: 'Ubuntu', sans-serif;
	border: 1px solid #ffffff;
	border-radius: 4px;
	padding: 0 20px;
	transition: all 0.2s ease-out;
	&:hover {
		cursor: pointer;
		color: #33343a;
		background: #ffffff;
	}
	@media (max-width: 425px) {
		margin: 10px 0;
		width: 150px;
	}
`

export const CenterFlex = Flex.extend`
	height: 90vh;
`

export const BottomText = Flex.extend`
  text-align: center;
  flex-direction: column;
  color: #43454c;
  a {
    color: #626570;
    text-decoration: none;
  }
  @media (max-width: 425px) {
    align-items: center;
	}
`
