const initState = {
    projects: [
        {id: '1', title: 'React', content: 'Js library component based architecture, Not a framework Used for UI'}, 
        {id: '2', title: 'Redux', content: 'State Management Tool'}, 
        {id: '3', title: 'React-Redux', content: 'Binding layer between react and redux'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('CREATED PROJECT', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR': 
            console.log('Create Project Error', action.err);
            return state;
        default: 
            return state;
    }
}

export default projectReducer