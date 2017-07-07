var defaultState = {
	articles: []
}

export default function(state = defaultState, action) {

	if(action.type == "FETCH_ARTICLES_SUCC"){
		return Object.assign({}, state, {
			articles: action.articles
		})
	}

	return Object.assign({}, state)
}