import gerlax from "../image/gerlax.png";
import airPods from "../image/airPods.png";
import borofone from "../image/borofone.png";

const wirelessHeadphones = [
    {
        id: "7",
        img: airPods,
        title: "Apple AirPods",
        price: "9527",
        rate: "4.7"
    },
    {
        id: "1",
        img: gerlax,
        title: "Apple BYZ S852I",
        price: "2927",
        rate: "4.7"
    },
    {
        id: "9",
        img: borofone,
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
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem('wirelessHeadphones')));
        }, 500);
    });

export default fetchAll