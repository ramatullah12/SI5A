const index = (req, res) => {
    const prodi= [
        {
            nama: "sistem informasi",
            fakultas : "FIKR",
            singkatan : "SI"
        },
        {
            nama: "informatika",
            fakultas : "FIKR",
            singkatan : "IF"
        },
        {
            nama: "teknik elektro",
            fakultas : "FIKR",
            singkatan : "TE"
        },
        {
            nama: "manajemen informatika",
            fakultas : "FIKR",
            singkatan : "MI"
        },
        {
            nama: "manajemen",
            fakultas : "FEB",
            singkatan : "MJ"
        },
        {
            nama: "akutansi",
            fakultas : "FEB",
            singkatan : "AK"
        },
    ];
    res.render('prodi', {title: 'halaman prodi', prodi, layout: 'main'});
}
module.exports = {index}
