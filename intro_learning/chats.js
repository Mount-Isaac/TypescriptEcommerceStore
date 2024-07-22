chats = [
    {
        "conversation_id": "7699f203-18e5-4048-941e-ffa9affbd0f5",
        "members": [
            "c8f194ea-9800-4dfe-840f-f3945879c9fd",
            "b6cc02af-5a78-4fae-99ea-e91fcc3f8591"
        ],
        "created_at": "2024-01-27T16:31:05.208Z",
        "updated_at": "2024-01-27T16:31:05.208Z",
        "readbyseller": false,
        "readbybuyer": false,
        "last_message": null,
        "detailed_members": [
            {
                "user_id": "c8f194ea-9800-4dfe-840f-f3945879c9fd",
                "username": "ISAAC MUTIE",
                "image_url": "https://lh3.googleusercontent.com/a/ACg8ocIQn2gxbVDfRvvVw1XcrVhHuvjzKgD_gSPfZ594aZmm6oU=s96-c"
            },
            {
                "user_id": "b6cc02af-5a78-4fae-99ea-e91fcc3f8591",
                "username": "izak",
                "image_url": "https://res.cloudinary.com/dzent5jjy/image/upload/v1704967691/IterProfilePictures/cppbepik24qbyxnslk63.jpg"
            }
        ]
    },
    {
        "conversation_id": "fccd5170-0032-484a-a0b5-49797a4215a1",
        "members": [
            "b6cc02af-5a78-4fae-99ea-e91fcc3f8591",
            "b6cc02af-5a78-4fae-99ea-e91fcc3f8591"
        ],
        "created_at": "2024-01-27T21:38:13.043Z",
        "updated_at": "2024-01-27T21:38:13.043Z",
        "readbyseller": false,
        "readbybuyer": false,
        "last_message": null,
        "detailed_members": [
            {
                "user_id": "b6cc02af-5a78-4fae-99ea-e91fcc3f8591",
                "username": "izak",
                "image_url": "https://res.cloudinary.com/dzent5jjy/image/upload/v1704967691/IterProfilePictures/cppbepik24qbyxnslk63.jpg"
            },
            {
                "user_id": "b6cc02af-5a78-4fae-99ea-e91fcc3f8591",
                "username": "izak",
                "image_url": "https://res.cloudinary.com/dzent5jjy/image/upload/v1704967691/IterProfilePictures/cppbepik24qbyxnslk63.jpg"
            }
        ]
    },
    {
        "conversation_id": "fafab69a-fe15-48be-b86f-0bd8aac6a60b",
        "members": [
            "524ec057-2d7e-4c57-8131-90f4a381c92d",
            "b6cc02af-5a78-4fae-99ea-e91fcc3f8591"
        ],
        "created_at": "2024-01-30T10:23:22.905Z",
        "updated_at": "2024-01-30T10:23:22.905Z",
        "readbyseller": false,
        "readbybuyer": false,
        "last_message": null,
        "detailed_members": [
            {
                "user_id": "b6cc02af-5a78-4fae-99ea-e91fcc3f8591",
                "username": "izak",
                "image_url": "https://res.cloudinary.com/dzent5jjy/image/upload/v1704967691/IterProfilePictures/cppbepik24qbyxnslk63.jpg"
            },
            {
                "user_id": "524ec057-2d7e-4c57-8131-90f4a381c92d",
                "username": "bailado",
                "image_url": null
            }
        ]
    },
    {
        "conversation_id": "d14a87d1-0d9b-40a0-b859-824be8672806",
        "members": [
            "33134c99-5287-4dba-b9c3-7849df59b516",
            "b6cc02af-5a78-4fae-99ea-e91fcc3f8591"
        ],
        "created_at": "2024-01-27T16:49:12.652Z",
        "updated_at": "2024-01-27T16:49:12.652Z",
        "readbyseller": true,
        "readbybuyer": false,
        "last_message": null,
        "detailed_members": [
            {
                "user_id": "33134c99-5287-4dba-b9c3-7849df59b516",
                "username": "isaka",
                "image_url": null
            },
            {
                "user_id": "b6cc02af-5a78-4fae-99ea-e91fcc3f8591",
                "username": "izak",
                "image_url": "https://res.cloudinary.com/dzent5jjy/image/upload/v1704967691/IterProfilePictures/cppbepik24qbyxnslk63.jpg"
            }
        ]
    }
]

// let conver_id;
let chatObject = chats;

const getConversationId = (user_id) => {
    // console.log('user_id', user_id, chatObject)
    // console.log(chatObject)
    let filteredConvoid = chatObject
        .map(chat => {
            const member = chat.members.find(member => user_id === member)
            return member && chat.conversation_id
        })
        .filter(id => id !== undefined)


    // filtered conversational Id
    return filteredConvoid
}
let user_id = "b6cc02af-5a78-4fae-99ea-e91fcc3f8591"
console.log(getConversationId(user_id))