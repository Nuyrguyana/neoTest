import s8521I from "../app/image/s852I.png";

const wirelessHeadphones = [
    {
        id: "7",
        img: "./img/airPods.png",
        title: "Apple AirPods",
        price: "9527",
        rate: "4.7"
    },
    {
        id: "1",
        img: s8521I,
        title: "Apple BYZ S852I",
        price: "2927",
        rate: "4.7"
    },
    {
        id: "9",
        img: "./img/borofone.png",
        title: "Borofone BO4",
        price: "7527",
        rate: "4.7"
    }
]

if (!localStorage.getItem('wirelessHeadphones')) {
    localStorage.setItem('wirelessHeadphones', JSON.stringify(wirelessHeadphones));
}

const fetchAll = () =>
    new Promise((resolve) => {
        resolve(wirelessHeadphones)
        // window.setTimeout(function () {
        //     resolve(JSON.parse(localStorage.getItem('wirelessHeadphones')));
        // }, 2000);
    });

export default {
    fetchAll
}