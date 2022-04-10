import byz from '../image/s852I.png'
import ep from '../image/earPods.png'
import ep2 from '../image/earPods2.png'

const headphones = [
    {
        id: "1",
        img: byz,
        title: "Apple BYZ S852I",
        price: "2927",
        rate: "4.7"
    },
    {
        id: "2",
        img: ep,
        title: "Apple EarPods",
        price: "2327",
        rate: "4.5"
    },
    {
        id: "3",
        img: ep2,
        title: "Apple EarPods 2",
        price: "2327",
        rate: "4.5"
    },
    {
        id: "4",
        img: byz,
        title: "Apple BYZ S852I",
        price: "2927",
        rate: "4.7"
    },
    {
        id: "5",
        img: ep,
        title: "Apple EarPods",
        price: "2327",
        rate: "4.5"
    },
    {
        id: "6",
        img: ep2,
        title: "Apple EarPods 2",
        price: "2327",
        rate: "4.5"
    }
]

if (!localStorage.getItem('headphones')) {
    localStorage.setItem('headphones', JSON.stringify(headphones));
}

const fetchAll = () =>
    new Promise((resolve) => {
        resolve(headphones)
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem('headphones')));
        }, 1000);
    });

export default
    fetchAll
