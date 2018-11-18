import React from 'react';
import {colors} from "../Constant/Constant";
import illustration1 from '../../assets/images/whatis.png'
import posed from "react-pose";

const P = posed.p({
    enter: {x: 0, opacity: 1},
    exit: {x: -50, opacity: 0}
});
const Container = posed.div({
    enter: {staggerChildren: 50}
});
const LandingIntro = () => (
    <section className="introContainer container">
        <h2>Introducing <span style={{color: colors.primaryColor}}>Backpackuy</span></h2>
        <div className="row">
            <Container className="col-md-6">
                <P className="textLanding">
                    Backpackuy adalah aplikasi web yang dapat membantu masyarakat untuk mengagendakan liburan mereka
                    dengan waktu pembuatan agenda yang sangat singkat. Backpackuy memberikan agenda jadi, yang dimana
                    agenda tersebut juga sudah mencantumkan estimasi biaya yang diperlukan kepada pengguna yang telah
                    menentukan ke daerah mana mereka akan berwisata, agenda tersebut juga bisa diubah oleh pengguna jika
                    pengguna kurang menaruh minat pada destinasi yang telah ditentukan dalam agenda tersebut.
                </P>
                <P className="textLanding">
                    Untuk saat ini hanya terdapat beberapa daerah saja yang terjangkau oleh Backpackuy, diantaranya
                    Malang, Batu, Bandung, Yogyakarta, dan Jakarta. Daerah itulah yang saat ini dijangkau oleh
                    Backpackuy, dan kami akan selalu siap untuk memperbaharui daerah yang dapat dijangkau oleh
                    Backpackuy agar dapat memberikan keleluasaan kepada pengguna dalam memilih daerah destinasi mereka.
                    Travel akan terasa dimudahkan dalam memilih suatu destinasi, menentukan lamanya berlibur, hingga
                    estimasi biaya yang perlu disiapkan selama berlibur

                </P>
            </Container>
            <div className="col-md-6">
                <img className="imageIntro" src={illustration1} alt=""/>
            </div>
        </div>
    </section>
);

export default LandingIntro