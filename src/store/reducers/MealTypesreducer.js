const initstate = {
    quickSearchItems: []
}
const MealTypesreducer = (state = initstate, action) => {
    switch (action.type) {
        case "GET_MEAL_TYPES":
            return {
                ...state,
                quickSearchItems: action.quickSearchItems
            }
        default:
            return state
    }
}

export default MealTypesreducer;