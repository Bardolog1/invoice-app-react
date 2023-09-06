export const invoice = {

    id: 1,
    name: 'Components PC',
    client: {
        name: 'Juan',
        lastname: 'Perez',
        address: {
            country: 'Argentina',
            city: 'Buenos Aires',
            street: 'Av. Corrientes',
            number: 1234,
        },
        phone: '123456789',
    },
    company: {
        name: 'LikeWare',
        fiscalId: '123456789',
    },
    items: [
        {
            id: 1,
            name: 'Motherboard',
            price: 100,
            quantity: 1,
        },
        {
            id: 2,
            name: 'CPU',
            price: 200,
            quantity: 1,
        },
        {
            id: 3,
            name: 'RAM',
            price: 50,
            quantity: 2,
        },
        {
            id: 4,
            name: 'Keyboard',
            price: 10,
            quantity: 1,
        },
        {
            id: 5,
            name: 'Mouse',
            price: 10,
            quantity: 1,
        },
        {
            id: 6,
            name: 'Monitor',
            price: 100,
            quantity: 1,
        },
    ],
    




}