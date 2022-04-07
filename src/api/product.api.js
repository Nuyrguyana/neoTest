const headphones = [
    {
        id: "1",
        img: "./showcase/src/image/s852I.png",
        title: "Apple BYZ S852I",
        price: "2927",
        rate: "4.7"
    },
    {
        id: "2",
        img: "./img/earPods.png",
        title: "Apple EarPods",
        price: "2327",
        rate: "4.5"
    },
    {
        id: "3",
        img: "./img/earPods2.png",
        title: "Apple EarPods 2",
        price: "2327",
        rate: "4.5"
    },
    {
        id: "4",
        img: "./img/s852I.png",
        title: "Apple BYZ S852I",
        price: "2927",
        rate: "4.7"
    },
    {
        id: "5",
        img: "./img/earPods.png",
        title: "Apple EarPods",
        price: "2327",
        rate: "4.5"
    },
    {
        id: "6",
        img: "./img/earPods2.png",
        title: "Apple EarPods 2",
        price: "2327",
        rate: "4.5"
    },
    {
        id: "7",
        img: "./img/airPods.png",
        title: "Apple AirPods",
        price: "9527",
        rate: "4.7"
    },
    {
        id: "8",
        img: "./img/gerlax.png",
        title: "Gerlax GH-04",
        price: "6527",
        rate: "4.7"
    },
    {
        id: "9",
        img: "./img/borofone.png",
        title: "Borofone BO4",
        price: "7527",
        rate: "4.7"
    },
]

if (!localStorage.getItem('headphones')) {
    localStorage.setItem('headphones', JSON.stringify(headphones));
}

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem('headphones')));
        }, 2000);
    });

export default fetchAll()