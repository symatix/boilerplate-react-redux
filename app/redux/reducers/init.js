let initReducer = function(init = [], action){
	switch (action.type) {
		case 'CHANGE_STATE':
			return init.map((cur) => {
					return cur.state !== action.payload ? Object.assign({}, cur, {state: "changed"}) : Object.assign({}, cur, {state: "init"});
				})

		default:
			return init;
	}
}

export default initReducer