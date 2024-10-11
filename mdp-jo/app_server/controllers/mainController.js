const index = (req, res) => {
    const berita= [
        {
            judul: "berita 1",
            isi : "isi berita 1"
        },
        {
            judul: "berita 2",
            isi : "isi berita 2"
        },
    ];
    res.render('index', {title: 'halaman home',berita, layout: 'main'});
}

const about =(req, res) => {
    res.render('aboutus', {title: 'About Us', layout: 'main'});

}
const contact =(req, res) => {
    res.render('contact', {title: 'Contact Us', layout: 'main'});

}

module.exports = {index, about, contact}