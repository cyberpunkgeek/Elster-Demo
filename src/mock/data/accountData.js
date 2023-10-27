export const settingData = {
    profile: {
        name: 'Ron Vargas',
        email: 'ronnie_vergas@infotech.io',
        title: 'UI/UX Designer',
        avatar: '/img/avatars/thumb-3.jpg',
        timeZone: 'GMT+8',
        lang: 'en',
        syncData: false
    },
    loginHistory: [
        {
            type: 'Desktop',
            deviceName: 'Desktop FKL-278',
            time: 1646818364,
            location: 'Manhattan, United State'
        },
        {
            type: 'Mobile',
            deviceName: 'iPhone 13 Pro Max',
            time: 1646396117,
            location: 'Manhattan, United State'
        },
        {
            type: 'Tablet',
            deviceName: 'iPad Air',
            time: 1646126117,
            location: 'New York, United State'
        }
    ],
    notification: {
        news: ['app'],
        accountActivity: ['app'],
        signIn: ['app'],
        reminders: ['browser'],
        mentioned: ['email'],
        replies: ['email'],
        taskUpdate: ['email'],
        assigned: ['email', 'app'],
        newProduct: ['browser', 'app'],
        newOrder: ['browser']
    },
}

export const settingIntergrationData = {
    installed: [
        {
            name: 'Google Drive',
            desc: 'Upload your files to Google Drive',
            img: '/img/thumbs/google-drive.png',
            type: 'Cloud storage',
            active: true
        },
        {
            name: 'Slack',
            desc: 'Post to a Slack channel',
            img: '/img/thumbs/slack.png',
            type: 'Notifications and events',
            active: true
        },
        {
            name: 'Notion',
            desc: 'Retrieve notion note to your project',
            img: '/img/thumbs/notion.png',
            type: 'Content management',
            active: false
        },
    ],
    available: [
        {
            name: 'Jira',
            desc: 'Create Jira issues',
            img: '/img/thumbs/jira.png',
            type: 'Project management',
            active: false
        },
        {
            name: 'Zendesk',
            desc: 'Exchange data with Zendesk',
            img: '/img/thumbs/zendesk.png',
            type: 'Customer service',
            active: false
        },
        {
            name: 'Dropbox',
            desc: 'Exchange data with Dropbox',
            img: '/img/thumbs/dropbox.png',
            type: 'Cloud storage',
            active: false
        },
        {
            name: 'Github',
            desc: 'Exchange files with a GitHub repository',
            img: '/img/thumbs/github.png',
            type: 'Code repositories',
            active: false
        },
        {
            name: 'Gitlab',
            desc: 'Exchange files with a Gitlab repository',
            type: 'Code repositories',
            img: '/img/thumbs/gitlab.png',
            active: false
        },
        {
            name: 'Figma',
            desc: 'Exchange screenshots with Figma',
            img: '/img/thumbs/figma.png',
            type: 'Design tools',
            active: false
        },
        {
            name: 'Adobe XD',
            desc: 'Exchange screenshots with Adobe XD',
            img: '/img/thumbs/adobe-xd.png',
            type: 'Design tools',
            active: false
        },
        {
            name: 'Sketch',
            desc: 'Exchange screenshots with Sketch',
            img: '/img/thumbs/sketch.png',
            type: 'Design tools',
            active: false
        },
        {
            name: 'Hubspot',
            desc: 'Exchange data with Hubspot',
            img: '/img/thumbs/hubspot.png',
            type: 'Content management',
            active: false
        },
        {
            name: 'Zapier',
            desc: 'Integrate with hundreds of services.',
            img: '/img/thumbs/zapier.png',
            type: 'Notifications and events',
            active: false
        }
    ]
}

export const settingBillingData = {
    paymentMethods: [
        {
            cardId: '1',
            cardHolderName: 'Ron Vargas',
            cardType: 'VISA',
            expMonth: '12',
            expYear: '25',
            last4Number: '0392',
            primary: true,
        },
        {
            cardId: '2',
            cardHolderName: 'Ron Vargas',
            cardType: 'MASTER',
            expMonth: '06',
            expYear: '25',
            last4Number: '8461',
            primary: false,
        }
    ],
    otherMethod: [
        {
            id: '1',
            identifier: 'ronnie_vergas@infotech.io',
            redirect: 'https://www.paypal.com/',
            type: 'PAYPAL'
        },
    ],
    billingHistory: [
        {
            id: '#36223',
            item: 'Mock premium pack',
            status: 'pending',
            amount: 39.9,
            date: 1639132800
        },
        {
            id: '#34283',
            item: 'Business board pro subscription',
            status: 'paid',
            amount: 59.9,
            date: 1636790880
        },
        {
            id: '#32234',
            item: 'Business board pro subscription',
            status: 'paid',
            amount: 59.9,
            date: 1634090880
        },
        {
            id: '#31354',
            item: 'Business board pro subscription',
            status: 'paid',
            amount: 59.9,
            date: 1631532800
        },
    ]
}

export const invoiceData = {
    recipient: 'Ron Vargas',
    email: 'ronnie_vergas@infotech.io',
    address: ['6786 E Nc 150 Hwy', 'Sherrills Ford, North Carolina(NC)'],
    phoneNumber: '(704) 483-2042',
    dateTime: 1646396117,
    product: [
        {
            id: '13',
            name: 'White Backpack',
            productCode: 'BIS-013',
            img: '/img/products/product-2.jpg',
            price: 252,
            quantity: 2,
            total: 504,
            details: {
                color: ['White'],
                size: ['One size']
            }
        },
        {
            id: '18',
            name: 'Strip Analog Watch',
            productCode: 'BIS-018',
            img: '/img/products/product-7.jpg',
            price: 389,
            quantity: 1,
            total: 389,
            details: {
                color: ['Red'],
                gender: ['Unisex']
            }
        },
        {
            id: '19',
            name: 'Beats Solo Headphone',
            productCode: 'BIS-019',
            img: '/img/products/product-8.jpg',
            price: 869,
            quantity: 1,
            total: 869,
            details: {
                color: ['Red'],
            }
        }
    ],
    paymentSummary: {
        subTotal: 1762,
        tax: 105.72,
        deliveryFees: 15,
        total: 1870.72
    },
}

export const logData = [
    {
        id: '1',
        date: 1646554397,
        events: [
            {
                type: 'UPDATE-TICKET',
                dateTime: 1646580000,
                ticket: 'PD-979',
                status: 0,
                userName: 'Carolyn Perkins',
                userImg: ''
            },
            {
                type: 'COMMENT',
                dateTime: 1646578417,
                userName: 'Ron Vargas',
                userImg: '/img/avatars/thumb-3.jpg',
                comment: `Fine, Java MIGHT be a good example of what a programming language should be like. But Java applications are good examples of what applications SHOULDN'T be like.`
            },
            {
                type: 'ADD-TAGS-TO-TICKET',
                dateTime: 1646574027,
                userName: 'Joyce Freeman',
                tags: ['Live Issue', 'Backend']
            },
            {
                type: 'ADD-FILES-TO-TICKET',
                dateTime: 1646569123,
                userName: 'Luke Cook',
                files: ['document.csv'],
                ticket: 'PD-1092' 
            },
            {
                type: 'COMMENT-MENTION',
                dateTime: 1646565473,
                userName: 'Tara Fletcher',
                userImg: '/img/avatars/thumb-7.jpg',
                comment: `<strong>@Carolyn</strong> One of the main causes of the fall of the Roman Empire was that-lacking zero-they had no way to indicate successful termination of their C programs. `
            },
            {
                type: 'ASSIGN-TICKET',
                dateTime: 1646554397,
                userName: 'Lee Wheeler',
                assignee: 'Gail Barnes',
                ticket: 'PD-1092' 
            },
        ]
    },
    {
        id: '2',
        date: 1646450000,
        events: [
            {
                type: 'COMMENT',
                dateTime: 1646459376,
                userName: 'Frederick Adams',
                userImg: '/img/avatars/thumb-8.jpg',
                comment: `The trouble with programmers is that you can never tell what a programmer is doing until it's too late.`
            },
            {
                type: 'UPDATE-TICKET',
                dateTime: 1646458211,
                ticket: 'PD-977',
                status: 1,
                userName: 'Brittany Hale',
                userImg: '/img/avatars/thumb-10.jpg'
            },
            {
                type: 'CREATE-TICKET',
                dateTime: 1646457743,
                ticket: 'PD-977',
                userName: 'Samantha Phillips',
            },
            {
                type: 'ADD-TAGS-TO-TICKET',
                dateTime: 1646456743,
                userName: 'Terrance Moreno',
                tags: ['Bug']
            },
            {
                type: 'UPDATE-TICKET',
                dateTime: 1646455743,
                ticket: 'PD-902',
                status: 2,
                userName: 'Ella Robinson',
            },
        ]
    },
    {
        id: '3',
        date: 1646350000,
        events: [
            {
                type: 'UPDATE-TICKET',
                dateTime: 1646356928,
                ticket: 'PD-915',
                status: 0,
                userName: 'Gail Barnes',
                userImg: '/img/avatars/thumb-14.jpg'
            },
            {
                type: 'COMMENT-MENTION',
                dateTime: 1646356103,
                userName: 'Tara Fletcher',
                userImg: '/img/avatars/thumb-7.jpg',
                comment: `<strong>@Carolyn</strong> First, solve the problem. Then, write the code.`
            },
            {
                type: 'ADD-FILES-TO-TICKET',
                dateTime: 1646354001,
                userName: 'Luke Cook',
                files: ['issue-1.jpg', 'issue-2.jpg'],
                ticket: 'PD-1011' 
            },
            {
                type: 'CREATE-TICKET',
                dateTime: 1646353299,
                ticket: 'PD-983',
                userName: 'Joyce Freeman',
            },
            {
                type: 'COMMENT',
                dateTime: 1646351233,
                userName: 'Luke Cook',
                userImg: '/img/avatars/thumb-4.jpg',
                comment: `I've noticed lately that the paranoid fear of computers becoming intelligent and taking over the world has almost entirely disappeared from the common culture. Near as I can tell, this coincides with the release of MS-DOS.`
            },
        ]
    },
    {
        id: '4',
        date: 1646250000,
        events: [
            {
                type: 'UPDATE-TICKET',
                dateTime: 1646259999,
                ticket: 'PD-911',
                status: 1,
                userName: 'Terrance Moreno',
                userImg: '/img/avatars/thumb-2.jpg'
            },
            {
                type: 'ADD-TAGS-TO-TICKET',
                dateTime: 1646258110,
                userName: 'Terrance Moreno',
                tags: ['Bug']
            },
            {
                type: 'CREATE-TICKET',
                dateTime: 1646258000,
                ticket: 'PD-911',
                userName: 'Terrance Moreno',
            },
            {
                type: 'COMMENT',
                dateTime: 1646253204,
                userName: 'Carolyn Hanson',
                userImg: '/img/avatars/thumb-9.jpg',
                comment: `As soon as we started programming, we found to our surprise that it wasn’t as easy to get programs right as we had thought. Debugging had to be discovered. I can remember the exact instant when I realized that a large part of my life from then on was going to be spent in finding mistakes in my own programs.`
            },
        ]
    },
    {
        id: '5',
        date: 1646150000,
        events: [
            {
                type: 'CREATE-TICKET',
                dateTime: 1646159652,
                ticket: 'PD-908',
                userName: 'Ella Robinson',
            },
            {
                type: 'CREATE-TICKET',
                dateTime: 1646159134,
                ticket: 'PD-907',
                userName: 'Ella Robinson',
            },
            {
                type: 'ADD-TAGS-TO-TICKET',
                dateTime: 1646253113,
                userName: 'Ella Robinson',
                tags: ['Bug'],
                ticket: 'PD-906',
            },
            {
                type: 'COMMENT-MENTION',
                dateTime: 1646252044,
                userName: 'Gabriella May',
                userImg: '/img/avatars/thumb-12.jpg',
                comment: `<strong>@Carolyn</strong> Programmers are in a race with the Universe to create bigger and better idiot-proof programs, while the Universe is trying to create bigger and better idiots. So far the Universe is winning. `
            },
            {
                type: 'CREATE-TICKET',
                dateTime: 164625157,
                ticket: 'PD-906',
                userName: 'Ella Robinson',
            },
        ]
    },
    {
        id: '6',
        date: 1646050000,
        events: [
            {
                type: 'COMMENT-MENTION',
                dateTime: 1646051653,
                userName: 'Carolyn Hanson',
                userImg: '/img/avatars/thumb-9.jpg',
                comment: `<strong>@Carolyn</strong> There are two ways to write error-free programs; only the third one works. `
            },
            {
                type: 'ADD-FILES-TO-TICKET',
                dateTime: 1646050199,
                username: 'Carolyn Perkins',
                files: ['translation.xls'],
                ticket: 'PD-1092' 
            },
            {
                type: 'COMMENT-MENTION',
                dateTime: 1646050001,
                username: 'Carolyn Perkins',
                userImg: '/img/avatars/thumb-1.jpg',
                comment: `<strong>@Carolyn</strong> Don't worry if it doesn't work right. If everything did, you'd be out of a job.`
            },
        ]
    },
    {
        id: '7',
        date: 1646490000,
        events: [
            {
                type: 'CREATE-TICKET',
                dateTime: 1646499327,
                ticket: 'PD-919',
                userName: 'Ella Robinson',
            },
            {
                type: 'COMMENT',
                dateTime: 1646497323,
                userName: 'Frederick Adams',
                userImg: '/img/avatars/thumb-8.jpg',
                comment: `There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies. And the other way is to make it so complicated that there are no obvious deficiencies.`
            },
            {
                type: 'COMMENT-MENTION',
                dateTime: 1646492123,
                userName: 'Tara Fletcher',
                userImg: '/img/avatars/thumb-7.jpg',
                comment: `<strong>@Carolyn</strong> That’s what’s cool about working with computers. They don’t argue, they remember everything, and they don’t drink all your beer. (Paul Leary) Considering the current sad state of our computer programs, software development is clearly still a black art, and cannot yet be called an engineering discipline.`
            },
            {
                type: 'UPDATE-TICKET',
                dateTime: 1646491065,
                ticket: 'PD-915',
                status: 1,
                userName: 'Brittany Hale',
                userImg: '/img/avatars/thumb-10.jpg'
            },
        ]
    }
]

export const accountFormData = {
    formData: {
        personalInformation: {
            firstName: '',
            lastName: '',
            email: '',
            residentCountry: '',
            nationality: '',
            dialCode: '',
            phoneNumber: '',
            dob: '',
            gender: '',
            maritalStatus: '',
        },
        identification: {
            documentType: 'passport',
            passportCover: '',
            passportDataPage: '',
            nationalIdFront: '',
            nationalIdBack: '',
            driversLicenseFront: '',
            driversLicenseBack: ''
        },
        addressInformation: {
            country: '',
            addressLine1: '',
            addressLine2: '',
            city: '',
            state: '',
            zipCode: '',
            sameCorrespondenceAddress: true,
            correspondenceAddress: {
                country: '',
                addressLine1: '',
                addressLine2: '',
                city: '',
                state: '',
                zipCode: '',
            }
        },
        financialInformation: {
            taxResident: '',
            tin: '',
            noTin: false,
            noTinReason: '',
            occupation: '',
            annualIncome: '',
            sourceOfWealth: '',
            companyInformation: {
                companyName: '',
                contactNumber:'',
                country: '',
                addressLine1: '',
                addressLine2: '',
                city: '',
                state: '',
                zipCode: '',
            }
        }
    },
    formStatus: {
        0: { status: 'pending' },
        1: { status: 'pending' },
        2: { status: 'pending' },
        3: { status: 'pending' },
        4: { status: 'pending' }
    }
}