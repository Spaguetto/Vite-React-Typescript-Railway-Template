import moment from 'moment';
import audio from '@assets/audio.mp3';
import pic from '@assets/pic.jpg';

import doc1jpg from '@assets/avatars/doc1.jpg';
import doc1webp from '@assets/avatars/doc1.jpg?as=webp';
import doc2jpg from '@assets/avatars/doc2.jpg';
import doc2webp from '@assets/avatars/doc2.jpg?as=webp';
import doc3jpg from '@assets/avatars/doc3.jpg';
import doc3webp from '@assets/avatars/doc3.jpg?as=webp';
import doc4jpg from '@assets/avatars/doc4.jpg';
import doc4webp from '@assets/avatars/doc4.jpg?as=webp';
import doc5jpg from '@assets/avatars/doc5.jpg';
import doc5webp from '@assets/avatars/doc5.jpg?as=webp';
import doc6jpg from '@assets/avatars/doc6.jpg';
import doc6webp from '@assets/avatars/doc6.jpg?as=webp';
import doc7jpg from '@assets/avatars/doc7.jpg';
import doc7webp from '@assets/avatars/doc7.jpg?as=webp';
import doc10jpg from '@assets/avatars/doc10.jpg';
import doc10webp from '@assets/avatars/doc10.jpg?as=webp';
import doc11jpg from '@assets/avatars/doc11.jpg';
import doc11webp from '@assets/avatars/doc11.jpg?as=webp';

import pat1jpg from '@assets/avatars/pat1.jpg';
import pat1webp from '@assets/avatars/pat1.jpg?as=webp';
import pat2jpg from '@assets/avatars/pat2.jpg';
import pat2webp from '@assets/avatars/pat2.jpg?as=webp';
import pat3jpg from '@assets/avatars/pat3.jpg';
import pat3webp from '@assets/avatars/pat3.jpg?as=webp';
import pat4jpg from '@assets/avatars/pat4.jpg';
import pat4webp from '@assets/avatars/pat4.jpg?as=webp';
import pat5jpg from '@assets/avatars/pat5.jpg';
import pat5webp from '@assets/avatars/pat5.jpg?as=webp';
import pat6jpg from '@assets/avatars/pat6.jpg';
import pat6webp from '@assets/avatars/pat6.jpg?as=webp';
import pat7jpg from '@assets/avatars/pat7.jpg';
import pat7webp from '@assets/avatars/pat7.jpg?as=webp';
import pat9jpg from '@assets/avatars/pat9.jpg';
import pat9webp from '@assets/avatars/pat9.jpg?as=webp';
import pat10jpg from '@assets/avatars/pat10.jpg';
import pat10webp from '@assets/avatars/pat10.jpg?as=webp';

export const doctor = [
    {
        firstName: 'Greg',
        lastName: 'Miller',
        id: 'gregmiller',
        role: 'patient',
        online: true,
        isTyping: true,
        avatar: {
            jpg: pat2jpg,
            webp: pat2webp,
        },
        chatHistory: [
            {
                id: 'KbRNFHXq4Cx3',
                sender: 'patient',
                message: 'Hi. I just wanted to ask: can I drive after taking these pills?',
                date: moment().set({
                    'year': 2022,
                    'month': 5,
                    'date': 1,
                    'hour': 13,
                    'minute': 11,
                    'second': 0
                }).valueOf(),
                read: true,
            },
            {
                id: 'gyZxbVL',
                sender: 'current',
                message: 'Good day, Mr. Miller. I am afraid that is not recommended.',
                date: moment().set({
                    'year': 2022,
                    'month': 5,
                    'date': 1,
                    'hour': 13,
                    'minute': 14,
                    'second': 0
                }).valueOf(),
                read: true,
            },
            {
                id: 'gsGS4mP3M',
                sender: 'patient',
                message: 'Good evening. When can I pick up my prescription?',
                date: moment().subtract(1, 'hour').valueOf(),
                read: false
            }
        ]
    },
    {
        firstName: 'Harold',
        lastName: 'Bridges',
        id: 'haroldbridges',
        role: 'patient',
        online: false,
        isTyping: false,
        avatar: {
            jpg: pat3jpg,
            webp: pat3webp,
        },
        chatHistory: [
            {
                id: 'N80f73xAWF',
                sender: 'patient',
                message: 'Hello, how are you? 👋',
                date: moment().set({
                    'year': 2022,
                    'month': 3,
                    'date': 1,
                    'hour': 12,
                    'minute': 0,
                    'second': 0
                }).valueOf(),
                read: true,
            },
            {
                id: 'R6UlDrI7gn',
                sender: 'current',
                message: 'I am fine, thank you',
                date: moment().set({
                    'year': 2022,
                    'month': 3,
                    'date': 1,
                    'hour': 12,
                    'minute': 2,
                    'second': 30
                }).valueOf(),
                read: true
            },
            {
                id: 'fPmRcoN',
                sender: 'patient',
                message: 'Lorem impsum dolor sit amet',
                date: moment().set({
                    'year': 2022,
                    'month': 3,
                    'date': 1,
                    'hour': 12,
                    'minute': 10,
                    'second': 15
                }).valueOf(),
                read: true
            },
            {
                id: 'U9paE4',
                sender: 'patient',
                message: 'Lorem impsum dolor sit amet?',
                date: moment().subtract(1, 'hour').valueOf(),
                read: false
            },
            {
                id: '1rMmao',
                sender: 'patient',
                message: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 😢
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum 🙊`,
                date: moment().valueOf(),
                read: false
            }
        ]
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        id: 'johndoe',
        role: 'patient',
        online: false,
        isTyping: false,
        avatar: {
            jpg: pat5jpg,
            webp: pat5webp,
        },
        chatHistory: [
            {
                id: 'qeovI4C',
                sender: 'patient',
                message: 'Hello, when can I come for a consultation?',
                date: moment().set({
                    'year': 2021,
                    'month': 10,
                    'date': 15,
                    'hour': 14,
                    'minute': 46,
                    'second': 30
                }).valueOf(),
                read: true
            },
            {
                id: '8PEm6nxOJob',
                sender: 'current',
                message: 'I am available at 10:00',
                date: moment().set({
                    'year': 2021,
                    'month': 10,
                    'date': 15,
                    'hour': 14,
                    'minute': 47,
                    'second': 30
                }).valueOf(),
                read: true
            },
            {
                id: 'iDKno6F',
                sender: 'current',
                message: 'Ok?',
                date: moment().set({
                    'year': 2021,
                    'month': 10,
                    'date': 15,
                    'hour': 14,
                    'minute': 59,
                    'second': 30
                }).valueOf(),
                read: true
            },
            {
                id: 'I8OgUVMD',
                sender: 'patient',
                message: 'I am a bit nervous, can you please tell me more about this? 😓 😓 😓',
                date: moment().valueOf(),
                read: false
            },
            {
                id: '5QmxjDsZc',
                sender: 'patient',
                message: '',
                date: moment().valueOf(),
                audio: audio,
                read: false
            }
        ]
    },
    {
        firstName: 'Mary',
        lastName: 'Lee',
        id: 'marylee',
        role: 'patient',
        online: true,
        isTyping: true,
        avatar: {
            jpg: pat1jpg,
            webp: pat1webp,
        },
        chatHistory: [
            {
                id: 'S3Wwnwy2YX5',
                sender: 'patient',
                message: 'Hello',
                date: moment().valueOf(),
                read: false
            },
            {
                id: '80f9Ncep',
                sender: 'patient',
                message: 'My friend recommended you',
                date: moment().valueOf(),
                read: false
            },
            {
                id: 'YmAtqWSLc1GK',
                sender: 'patient',
                message: 'She has the same problem',
                date: moment().valueOf(),
                read: false
            },
            {
                id: 'EaGBPirxJw3O',
                sender: 'patient',
                message: 'When can I come for a consultation?',
                date: moment().valueOf(),
                read: false
            },
        ]
    },
    {
        firstName: 'Kate',
        lastName: 'Walker',
        id: 'katewalker',
        role: 'patient',
        online: false,
        isTyping: false,
        avatar: {
            jpg: pat4jpg,
            webp: pat4webp,
        },
        chatHistory: [
            {
                id: 'CtV3312XNPU',
                sender: 'patient',
                message: 'Hello. Can you please tell me more about this?',
                date: moment().valueOf(),
                read: true
            },
            {
                id: 'KVn4Oi',
                sender: 'current',
                message: 'Hello, I am a doctor. I am here to help you',
                date: moment().valueOf(),
                read: true
            },
            {
                id: '0cRrYlaCSsg',
                sender: 'patient',
                message: 'Here`s some strange redness 👇',
                date: moment().valueOf(),
                read: false
            },
            {
                id: 've4nEERravLE',
                sender: 'patient',
                message: 'There is a photo',
                media: pic,
                date: moment().valueOf(),
                read: false
            }
        ]
    },
    {
        firstName: 'Robert',
        lastName: 'Milly',
        id: 'robertmilly',
        role: 'patient',
        online: true,
        isTyping: false,
        avatar: {
            jpg: pat7jpg,
            webp: pat7webp,
        },
        chatHistory: [
            {
                id: 'gHNwPJQsSV',
                sender: 'patient',
                message: 'Hi. I need a consultation',
                date: moment().valueOf(),
                read: true
            },
            {
                id: 'zFRnTlQ',
                sender: 'current',
                message: 'Hello, Mr. Robert! You can see available options on the calendar',
                date: moment().valueOf(),
                read: true
            }
        ]
    },
    {
        firstName: 'Jeannette',
        lastName: 'Smith',
        id: 'jeannettesmith',
        role: 'patient',
        online: false,
        isTyping: false,
        avatar: {
            jpg: pat6jpg,
            webp: pat6webp,
        },
        chatHistory: [
            {
                id: 'MGub8kVkaCFJ',
                sender: 'patient',
                message: `Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi
                 ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                  esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`,
                date: moment().valueOf(),
                read: true
            },
            {
                id: 'geYjbxdc',
                sender: 'current',
                message: 'Hello, I am a doctor. I am here to help you',
                date: moment().valueOf(),
                read: true
            },
            {
                id: 'K02W6VHpwJHX',
                sender: 'patient',
                message: 'Here`s some strange redness',
                date: moment().valueOf(),
                read: true
            },
            {
                id: 'SCYndtTFI',
                sender: 'current',
                message: `Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                 voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                   consectetur`,
                date: moment().valueOf(),
                read: true
            }
        ]
    },
    {
        firstName: 'Lilian',
        lastName: 'Rose',
        id: 'lilianrose',
        role: 'patient',
        online: false,
        isTyping: false,
        avatar: {
            jpg: pat10jpg,
            webp: pat10webp,
        },
        chatHistory: [
            {
                id: 'wOebCW',
                sender: 'current',
                message: 'Hello. Sorry, I am not available at the moment',
                date: moment().valueOf(),
                read: true
            }
        ]
    },
    {
        firstName: 'Marta',
        lastName: 'Johnson',
        id: 'markjohnson',
        role: 'patient',
        online: true,
        isTyping: false,
        avatar: {
            jpg: pat9jpg,
            webp: pat9webp,
        },
        chatHistory: [
            {
                id: 'PgXrt4vuDwk',
                sender: 'current',
                message: 'Hello. Your test is positive for the virus. Please come for a consultation',
                date: moment().valueOf(),
                read: true
            },
            {
                id: 'aIK9Ew',
                sender: 'patient',
                message: 'Yes, I am coming',
                date: moment().valueOf(),
                read: true
            }
        ]
    },
    {
        firstName: 'Berta',
        lastName: 'Lovelace',
        id: 'bertalovelace',
        role: 'doctor',
        online: true,
        isTyping: false,
        speciality: 'Allergist',
        avatar: {
            jpg: doc1jpg,
            webp: doc1webp
        },
        chatHistory: [
            {
                id: 'TQKXGfrKLA',
                sender: 'current',
                message: 'Hello, I am a doctor. I am here to help you',
                date: moment().valueOf(),
                read: true
            },
            {
                id: 'KLJ3BzV',
                sender: 'doctor',
                message: 'Lorem impsum dolor sit amet',
                date: moment().valueOf(),
                read: false
            },
            {
                id: 'plb1kZfyWgET',
                sender: 'doctor',
                message: '',
                audio: audio,
                date: moment().valueOf(),
                read: false
            }
        ]
    },
    {
        firstName: 'Victor',
        lastName: 'Hugo',
        id: 'victorhugo',
        role: 'doctor',
        online: false,
        isTyping: false,
        speciality: 'Cardiologist',
        avatar: {
            jpg: doc2jpg,
            webp: doc2webp
        },
        chatHistory: [
            {
                id: 'Hi2lgUr',
                sender: 'current',
                message: 'Hello. Can you please send me some information about this patient, John Doe?',
                date: moment().set({
                    'year': 2022,
                    'month': 3,
                    'date': 25,
                    'hour': 9,
                    'minute': 15,
                    'second': 25
                }).valueOf(),
                read: true
            },
            {
                id: 'xAClR0pKxoei',
                sender: 'doctor',
                message: 'Good morning! Sure, one moment please',
                date: moment().set({
                    'year': 2022,
                    'month': 3,
                    'date': 25,
                    'hour': 9,
                    'minute': 48,
                    'second': 11
                }).valueOf(),
                read: true
            },
            {
                id: 'Byk1xt9Zr8',
                sender: 'doctor',
                message: 'Are you going to visit the patient?',
                date: moment().set({
                    'year': 2022,
                    'month': 3,
                    'date': 25,
                    'hour': 10,
                    'minute': 0,
                    'second': 0
                }).valueOf(),
                read: true
            },
            {
                id: 'lbMSymQl',
                sender: 'current',
                message: 'Yes, tomorrow maybe',
                date: moment().set({
                    'year': 2022,
                    'month': 3,
                    'date': 25,
                    'hour': 10,
                    'minute': 20,
                    'second': 0
                }).valueOf(),
                read: true
            },
            {
                id: 'HXcdFf5bSVv',
                sender: 'doctor',
                message: 'Hi, I need your help with the presentation',
                date: moment().set({
                    'year': 2022,
                    'month': 5,
                    'date': 19,
                    'hour': 8,
                    'minute': 30,
                    'second': 0
                }).valueOf(),
                read: true
            },
            {
                id: 'uU2oBZiO8',
                sender: 'current',
                message: 'Sure, no problem, Vic',
                date: moment().set({
                    'year': 2022,
                    'month': 5,
                    'date': 19,
                    'hour': 8,
                    'minute': 45,
                    'second': 0
                }).valueOf(),
                read: true
            }
        ]
    },
    {
        firstName: 'Lisa',
        lastName: 'Simpson',
        id: 'lisasimpson',
        role: 'doctor',
        online: true,
        isTyping: false,
        speciality: 'Therapist',
        avatar: {
            jpg: doc10jpg,
            webp: doc10webp
        },
        chatHistory: [
            {
                id: 'vaT5tkgG1',
                sender: 'doctor',
                message: 'Hiii! ✨ ✨ ✨ Just wanted to wish you a happy birthday! 🦄 🎂 🎁',
                date: moment().set({
                    'year': 2022,
                    'month': 11,
                    'date': 27,
                    'hour': 9,
                    'minute': 15,
                    'second': 25
                }).valueOf(),
                read: true
            },
            {
                id: 'yq6CduSG',
                sender: 'doctor',
                message: 'Wish you all the best 😻!',
                date: moment().set({
                    'year': 2022,
                    'month': 11,
                    'date': 27,
                    'hour': 9,
                    'minute': 16,
                    'second': 11
                }).valueOf(),
                read: true
            },
            {
                id: '2Jw7AV',
                sender: 'current',
                message: 'Hi, Lisa!',
                date: moment().set({
                    'year': 2022,
                    'month': 11,
                    'date': 27,
                    'hour': 9,
                    'minute': 18,
                    'second': 11
                }).valueOf(),
                read: true
            },
            {
                id: 'rclH2zfZQg',
                sender: 'current',
                message: 'Thank you 😉',
                date: moment().set({
                    'year': 2022,
                    'month': 11,
                    'date': 27,
                    'hour': 9,
                    'minute': 19,
                    'second': 0
                }).valueOf(),
                read: true
            }
        ]
    },
    {
        firstName: 'William',
        lastName: 'Gray',
        id: 'melissagray',
        role: 'doctor',
        online: false,
        isTyping: false,
        speciality: 'Neurologist',
        avatar: {
            jpg: doc4jpg,
            webp: doc4webp
        },
        chatHistory: [
            {
                id: '10hLVvci',
                sender: 'current',
                message: 'Hello. Could you cover my shift on Friday? I am gonna be in your debt 👀',
                date: moment().set({
                    'year': 2022,
                    'month': 7,
                    'date': 11,
                    'hour': 17,
                    'minute': 15,
                    'second': 25
                }).valueOf(),
                read: true
            },
            {
                id: '048jLv',
                sender: 'doctor',
                message: 'Sure, no problem',
                date: moment().set({
                    'year': 2022,
                    'month': 7,
                    'date': 11,
                    'hour': 17,
                    'minute': 48,
                    'second': 11
                }).valueOf(),
                read: true
            },
            {
                id: 'CYUpva',
                sender: 'current',
                message: 'Thanks, you are the best',
                date: moment().set({
                    'year': 2022,
                    'month': 7,
                    'date': 11,
                    'hour': 17,
                    'minute': 49,
                    'second': 0
                }).valueOf(),
                read: true
            },
            {
                id: 'xzyKli74DJxF',
                sender: 'doctor',
                message: 'Hi, John Doe`s MRI is ready. Please come and take a look',
                date: moment().subtract(20, 'minutes').valueOf(),
                read: true
            },
            {
                id: 'qWn5Khc',
                sender: 'current',
                message: 'Yes, I am coming',
                date: moment().valueOf(),
                read: true
            }
        ]
    },
    {
        firstName: 'Lucas',
        lastName: 'Baldwin',
        id: 'lucasbaldwin',
        role: 'doctor',
        online: false,
        isTyping: false,
        speciality: 'Neurologist',
        avatar: {
            jpg: doc5jpg,
            webp: doc5webp
        },
        chatHistory: [
            {
                id: 'gmN2dn8YqUDu',
                sender: 'doctor',
                message: 'Hey, Sallie! We are going to the cinema after the presentation. Are you willing to go?',
                date: moment().set({
                    'year': 2022,
                    'month': 11,
                    'date': 2,
                    'hour': 14,
                    'minute': 30,
                    'second': 0
                }).valueOf(),
                read: true
            },
            {
                id: 'aFQ8Of',
                sender: 'current',
                message: 'Yep',
                date: moment().set({
                    'year': 2022,
                    'month': 11,
                    'date': 2,
                    'hour': 14,
                    'minute': 45,
                    'second': 0
                }).valueOf(),
                read: true
            },
            {
                id: 'RlEzET5hjZ3t',
                sender: 'doctor',
                message: 'Great! We are meeting at the hall at 18:15',
                date: moment().set({
                    'year': 2022,
                    'month': 11,
                    'date': 2,
                    'hour': 14,
                    'minute': 50,
                    'second': 0
                }).valueOf(),
                read: true
            }
        ]
    },
    {
        firstName: 'Mike',
        lastName: 'Tyler',
        id: 'rosetyler',
        role: 'doctor',
        online: true,
        isTyping: true,
        speciality: 'Physician',
        avatar: {
            jpg: doc6jpg,
            webp: doc6webp
        },
        chatHistory: [
            {
                id: 'ynFVhpIXtGJ',
                sender: 'doctor',
                message: 'Lorem impsum dolor sit amet?',
                date: moment().set({
                    'year': 2022,
                    'month': 11,
                    'date': 2,
                    'hour': 14,
                    'minute': 30,
                    'second': 0
                }).valueOf(),
                read: true
            },
            {
                id: 'kROFKDlc91oP',
                sender: 'current',
                message: 'Lorem impsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem, quisquam.',
                date: moment().set({
                    'year': 2022,
                    'month': 11,
                    'date': 2,
                    'hour': 14,
                    'minute': 45,
                    'second': 0
                }).valueOf(),
                read: true
            }
        ]
    },
    {
        firstName: 'Eva',
        lastName: 'Henderson',
        id: 'evahenderson',
        role: 'doctor',
        online: false,
        isTyping: false,
        speciality: 'Pediatrician',
        avatar: {
            jpg: doc3jpg,
            webp: doc3webp
        },
        chatHistory: [
            {
                id: 'NOMxXf2akKSX',
                sender: 'doctor',
                message: 'Lorem impsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem, quisquam.',
                date: moment().set({
                    'year': 2022,
                    'month': 11,
                    'date': 2,
                    'hour': 14,
                    'minute': 30,
                    'second': 0
                }).valueOf(),
                read: true
            },
            {
                id: '9L55DioJ4',
                sender: 'doctor',
                message: 'Quisquam, quidem, quisquam.',
                date: moment().set({
                    'year': 2022,
                    'month': 11,
                    'date': 2,
                    'hour': 14,
                    'minute': 45,
                    'second': 0
                }).valueOf(),
                read: true
            }
        ]
    },
    {
        firstName: 'Alex',
        lastName: 'Blooming',
        id: 'alexblooming',
        role: 'doctor',
        online: false,
        isTyping: false,
        speciality: 'Pediatrician',
        avatar: {
            jpg: doc11jpg,
            webp: doc11webp
        },
        chatHistory: [
            {
                id: 'zZerG9vr',
                sender: 'doctor',
                message: 'Quisquam, quidem, quisquam.',
                date: moment().set({
                    'year': 2022,
                    'month': 11,
                    'date': 2,
                    'hour': 14,
                    'minute': 30,
                    'second': 0
                }).valueOf(),
                read: true
            }
        ]
    }
];

export const patient = [
    {
        firstName: 'Ben',
        lastName: 'Henderson',
        id: 'benhenderson',
        role: 'doctor',
        online: false,
        isTyping: false,
        speciality: 'Pediatrician',
        avatar: {
            jpg: doc2jpg,
            webp: doc2webp
        },
        chatHistory: [
            {
                id: 'Djd0x1IVmJ',
                sender: 'current',
                message: 'Lorem impsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem, quisquam.',
                date: moment().set({
                    'year': 2022,
                    'month': 11,
                    'date': 2,
                    'hour': 14,
                    'minute': 30,
                    'second': 0
                }).valueOf(),
                read: true
            },
            {
                id: 'jLlQwUEBb19g',
                sender: 'current',
                message: 'Quisquam, quidem, quisquam.',
                date: moment().set({
                    'year': 2022,
                    'month': 11,
                    'date': 2,
                    'hour': 14,
                    'minute': 45,
                    'second': 0
                }).valueOf(),
                read: true
            },
            {
                id: 'G4Mzu2oF2TKd',
                sender: 'doctor',
                message: 'Consectetur adipisicing elit. Quisquam, quidem, quisquam.',
                date: moment().set({
                    'year': 2022,
                    'month': 11,
                    'date': 2,
                    'hour': 14,
                    'minute': 50,
                    'second': 0
                }).valueOf(),
                read: false
            }
        ]
    },
    {
        firstName: 'Nancy',
        lastName: 'Drew',
        id: 'nancydrew',
        role: 'doctor',
        online: true,
        isTyping: true,
        speciality: 'Cardiologist',
        avatar: {
            jpg: doc3jpg,
            webp: doc3webp
        },
        chatHistory: [
            {
                id: 'Ps56p7YlzG',
                sender: 'current',
                message: 'Quisquam, quidem, quisquam?',
                date: moment().subtract(20, 'minutes').valueOf(),
                read: true
            },
            {
                id: 'g4P7Mhy1ziY',
                sender: 'doctor',
                message: 'Lorem impsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem, quisquam.',
                date: moment().subtract(10, 'minutes').valueOf(),
                read: false
            }
        ]
    },
    {
        firstName: 'Victor',
        lastName: 'Baldwin',
        id: 'victorbaldwin',
        role: 'doctor',
        online: false,
        isTyping: false,
        speciality: 'Neurologist',
        avatar: {
            jpg: doc4jpg,
            webp: doc4webp
        },
        chatHistory: [
            {
                id: '5DBVtAW',
                sender: 'doctor',
                message: 'Lorem impsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem, quisquam.',
                date: moment().subtract(20, 'minutes').valueOf(),
                read: false
            },
            {
                id: 'gM7bEQVG',
                sender: 'doctor',
                message: 'Quisquam, quidem, quisquam.',
                date: moment().subtract(10, 'minutes').valueOf(),
                read: false
            }
        ]
    },
    {
        firstName: 'John',
        lastName: 'Vega',
        id: 'johnvega',
        role: 'doctor',
        online: false,
        isTyping: false,
        speciality: 'Family doctor',
        avatar: {
            jpg: doc6jpg,
            webp: doc6webp
        },
        chatHistory: [
            {
                id: 'xBNadqbl1',
                sender: 'doctor',
                message: 'Good morning! There is your test result 👇',
                date: moment().set({
                    'year': 2022,
                    'month': 10,
                    'date': 25,
                    'hour': 8,
                    'minute': 50,
                    'second': 0
                }).valueOf(),
                read: true,
                media: pic
            },
            {
                id: 'ienKbT1',
                sender: 'doctor',
                message: 'If you have any questions, please ask',
                date: moment().set({
                    'year': 2022,
                    'month': 10,
                    'date': 25,
                    'hour': 8,
                    'minute': 55,
                    'second': 0
                }).valueOf(),
                read: true
            }
        ]
    },
    {
        firstName: 'Eva',
        lastName: 'Stone',
        id: 'evastone',
        role: 'doctor',
        online: true,
        isTyping: false,
        speciality: 'Cardiologist',
        avatar: {
            jpg: doc10jpg,
            webp: doc10webp
        },
        chatHistory: [
            {
                id: 'zkPDq3',
                sender: 'current',
                message: 'Hello! Do you decode a cardiograms from the other clinic?',
                date: moment().set({
                    'year': 2022,
                    'month': 10,
                    'date': 25,
                    'hour': 8,
                    'minute': 50,
                    'second': 0
                }).valueOf(),
                read: true
            },
            {
                id: 'WFXaYoSfJyR',
                sender: 'doctor',
                message: 'Hello. I will be glad to help you.',
                date: moment().set({
                    'year': 2022,
                    'month': 10,
                    'date': 25,
                    'hour': 8,
                    'minute': 55,
                    'second': 0
                }).valueOf(),
                read: true
            }
        ]
    },
    {
        firstName: 'Katherine',
        lastName: 'Williams',
        id: 'katherinewilliams',
        role: 'doctor',
        online: false,
        isTyping: false,
        speciality: 'Pediatrician',
        avatar: {
            jpg: doc1jpg,
            webp: doc1webp
        },
        chatHistory: [
            {
                id: 'HJZVjAl',
                sender: 'doctor',
                message: 'Lorem impsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem, quisquam.',
                date: moment().set({
                    'year': 2022,
                    'month': 11,
                    'date': 2,
                    'hour': 14,
                    'minute': 30,
                    'second': 0
                }).valueOf(),
                read: true
            },
            {
                id: 'MMOUp1PIL',
                sender: 'current',
                message: '',
                audio: audio,
                date: moment().set({
                    'year': 2022,
                    'month': 11,
                    'date': 2,
                    'hour': 14,
                    'minute': 45,
                    'second': 0
                }).valueOf(),
                read: true
            },
            {
                id: 'uQRp1WpIhuX',
                sender: 'doctor',
                message: 'Quisquam, quidem, quisquam.',
                date: moment().set({
                    'year': 2022,
                    'month': 11,
                    'date': 2,
                    'hour': 14,
                    'minute': 50,
                    'second': 0
                }).valueOf(),
                read: true
            }
        ]
    },
    {
        firstName: 'Tom',
        lastName: 'Ford',
        id: 'tomford',
        role: 'doctor',
        online: false,
        isTyping: false,
        speciality: 'Neurologist',
        avatar: {
            jpg: doc5jpg,
            webp: doc5webp
        },
        chatHistory: [
            {
                id: 'aaR2P2ISBb4',
                sender: 'current',
                message: 'Hello! Do you decode a cardiograms from the other clinic?',
                date: moment().set({
                    'year': 2022,
                    'month': 10,
                    'date': 25,
                    'hour': 8,
                    'minute': 50,
                    'second': 0
                }).valueOf(),
                read: true
            },
            {
                id: 'oZiNjA',
                sender: 'doctor',
                message: 'Hello. I will be glad to help you.',
                date: moment().set({
                    'year': 2022,
                    'month': 10,
                    'date': 25,
                    'hour': 8,
                    'minute': 55,
                    'second': 0
                }).valueOf(),
                read: true
            }
        ]
    },
    {
        firstName: 'Marc',
        lastName: 'Jacobs',
        id: 'marcjacobs',
        role: 'doctor',
        online: false,
        isTyping: false,
        speciality: 'Pediatrician',
        avatar: {
            jpg: doc11jpg,
            webp: doc11webp
        },
        chatHistory: [
            {
                id: 'DpHEgHxlx',
                sender: 'current',
                message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa?',
                date: moment().set({
                    'year': 2022,
                    'month': 10,
                    'date': 25,
                    'hour': 8,
                    'minute': 50,
                    'second': 0
                }).valueOf(),
                read: true
            },
            {
                id: 'FUAivYreUcH',
                sender: 'current',
                message: 'Aenean commodo ligula eget dolor. Aenean massa?',
                date: moment().set({
                    'year': 2022,
                    'month': 10,
                    'date': 25,
                    'hour': 8,
                    'minute': 55,
                    'second': 0
                }).valueOf(),
                read: false
            }
        ]
    },
    {
        firstName: 'Heleen',
        lastName: 'Martin',
        id: 'johnmartin',
        role: 'doctor',
        online: true,
        isTyping: true,
        speciality: 'Cardiologist',
        avatar: {
            jpg: doc7jpg,
            webp: doc7webp
        },
        chatHistory: [
            {
                id: 'akOtyr0z',
                sender: 'current',
                message: 'Quisque rutrum. Aenean imperdiet. 🤒 Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.',
                date: moment().set({
                    'year': 2022,
                    'month': 10,
                    'date': 25,
                    'hour': 10,
                    'minute': 12,
                    'second': 0
                }).valueOf(),
                read: true
            },
            {
                id: 'wlpTrvDs',
                sender: 'current',
                message: 'Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci.',
                date: moment().set({
                    'year': 2022,
                    'month': 10,
                    'date': 25,
                    'hour': 10,
                    'minute': 14,
                    'second': 0
                }).valueOf(),
                read: true
            }
        ]
    }
]