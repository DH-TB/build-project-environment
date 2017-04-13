export default function reducer(state={todos:['123','1232']},action){
    switch (action.type){
        case "ADD":
            state.todos.push(action.text);
            return state;
    }
    return state;
}