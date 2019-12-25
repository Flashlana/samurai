const state = {
    profile: {
        posts: [
            {id: 1, message: 'Hello? how are you', count: 10},
            {id: 2, message: 'I am fine and you', count: 20},
        ]
    },
    message: {
        dialogs: [
            {id: 1, name: 'Аркадий Иванович Курочкин'},
            {id: 2, name: 'Elena', photo: 'https://naydisebya.ru/wp-content/uploads/portret1-7.jpg'},
            {id: 3, name: 'Anna', photo: 'https://naydisebya.ru/wp-content/uploads/portret1-9.jpg'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 1, message: 'I am fine'},
            {id: 3, message: 'Where are you?'},
        ]
    },
    siderBar: [
        {
            id: 2,
            name: 'Elena',
            photo: 'https://naydisebya.ru/wp-content/uploads/portret1-7.jpg'
        },
        {
            id: 3,
            name: 'Anna',
            photo: 'https://naydisebya.ru/wp-content/uploads/portret1-9.jpg'
        }
    ]
};

export default state