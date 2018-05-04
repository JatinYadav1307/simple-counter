import { init } from '@rematch/core'
import selectorsPlugin from '@rematch/select'
import count from './rematch/models/count'

export default init({
	models: { count },
	plugins: [selectorsPlugin()],
})
