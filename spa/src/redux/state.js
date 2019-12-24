const state = {
    profile: {
        posts: [
            {id: 1, message: 'Hello? how are you', count: 10},
            {id: 2, message: 'I am fine and you', count: 20},
        ]
    },
    message: {
        dialogs: [
            {id: 1, name: 'Dimich'},
            {id: 2, name: 'Elena'},
            {id: 3, name: 'Anna'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Where are you?'},
        ]
    }
};

export default state