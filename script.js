const names = [
    "Ahmet",
    "Ayşe",
    "Mehmet",
    "Fatma",
    "Ali",
    "Zeynep",
    "Hasan",
    "Elif",
    "Mustafa",
    "Hacer",
    "İbrahim",
    "Melis",
    "Yusuf",
    "Ceren",
    "Emre",
    "Ece",
    "Halil",
    "Duygu",
    "Burak",
    "Aslı"
];

const surnames = [
    "Yılmaz",
    "Kaya",
    "Demir",
    "Çelik",
    "Şahin",
    "Aydın",
    "Arslan",
    "Erdem",
    "Öztürk",
    "Polat",
    "Koç",
    "Korkmaz",
    "Kılıç",
    "Doğan",
    "Çetinkaya",
    "Yıldız",
    "Özdemir",
    "Keskin",
    "Aksoy",
    "Güneş"
];

const randomName = () => {
return names[Math.floor(Math.random() * names.length)];
};

const randomSurname = () => {
return surnames[Math.floor(Math.random() * surnames.length)];
};

const randomFullName = () => {
const name= randomName();
const surname= randomSurname();

return `${name} ${surname}`;
};

const jobs= [
"Doktor",
"Mühendis",
"Öğretmen",
"Avukat",
"Hemşire",
"Yazılım Geliştirici",
"Pilot",
"Mimar",
"Aşçı",
"Grafik Tasarımcı",
];

const randomJob = () => {
return jobs[Math.floor(Math.random() * jobs.length)];
};

let data= [];
for(let i= 0; i<78; i++){
data.push({
    title: randomFullName(),
    job: randomJob(),
    id: i,
});
}

const containerDiv= document.getElementById("root");
data.forEach((item, index) => {
containerDiv.innerHTML += `<div id="${item.id}" class= "person person-${index}">
    <span class= "title"> ${item.title}</span>
    <span class= "job"> ${item.job}</span>
`
});
