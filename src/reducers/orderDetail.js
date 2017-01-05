import * as types from '../constants/actions/order';
const initialState = {
	curId:null,
	main:{}
};
export default function(state = initialState, action) {
	let id;
	switch (action.type) {
		case types.ORDER_DETAIL_INIT:
			id = action.id;
			state.curId = id ||"undefined";
			return state;
		case types.ORDER_DETAIL_GET + '_SUCCESS':
			id = action.param.id;
			state.main[id] = action.data;
			return state;
		default:
			return state;
	}
};