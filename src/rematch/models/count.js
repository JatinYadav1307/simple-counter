import { fromJS } from 'immutable'

export default {
	state: fromJS({
		value: 0,
		timesHit: 0,
	}),

	reducers: {
		up: (state) =>
			state
				.set('value', state.get('value') + 1)
				.set('timesHit', state.get('timesHit') + 1),
		upBy: (state, payload) =>
			state
				.set('value', state.get('value') + payload)
				.set('timesHit', state.get('timesHit') + 1),
		reset: (state) => state.set('value', 0).set('timesHit', 0),
	},

	selectors: {
		value: (state) => state.get('value'),
		times: (state) => state.get('timesHit'),
	},
}
