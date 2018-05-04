import React, { Component } from 'react'
import { connect } from 'react-redux'
import { select } from '@rematch/select'
import { Box } from 'grid-styled'
import {
	BottomText,
	CenterFlex,
	Counter,
	ResponsiveFlex,
	UpdateButton,
} from './UI'

class HomePage extends Component {
	state = { hoverStatus: 'idle' }

	render() {
		return (
			<React.Fragment>
				<CenterFlex
					flexDirection={'column'}
					alignItems={'center'}
					justifyContent={'center'}
				>
					<Counter pose={this.state.hoverStatus}>{this.props.count}</Counter>
					<ResponsiveFlex mt={4}>
						<Box px={2}>
							<UpdateButton
								onMouseEnter={() => this.setState({ hoverStatus: 'incBy1' })}
								onMouseLeave={() => this.setState({ hoverStatus: 'idle' })}
								onClick={() => this.props.up()}
							>
								Update By 1
							</UpdateButton>
						</Box>
						<Box px={2}>
							<UpdateButton
								onMouseEnter={() => this.setState({ hoverStatus: 'incBy10' })}
								onMouseLeave={() => this.setState({ hoverStatus: 'idle' })}
								onClick={() => this.props.upBy(10)}
							>
								Update By 10
							</UpdateButton>
						</Box>
						<Box px={2}>
							<UpdateButton
								onMouseEnter={() => this.setState({ hoverStatus: 'reset' })}
								onMouseLeave={() => this.setState({ hoverStatus: 'idle' })}
								onClick={() => this.props.reset()}
							>
								Reset Count
							</UpdateButton>
						</Box>
					</ResponsiveFlex>
				</CenterFlex>
				<BottomText>
					<Box pb={2}>Made with React, Rematch, and Pose.</Box>
					<a href="http://google.com" target={'_blank'}>
						Checkout Code at GitHub
					</a>
				</BottomText>
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state) => ({
	count: select.count.value(state),
	times: select.count.times(state),
})

const mapDispatchToProps = (dispatch) => ({
	up: () => dispatch.count.up(),
	upBy: (value) => dispatch.count.upBy(value),
	reset: () => dispatch.count.reset(),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
