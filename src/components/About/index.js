import style from './style.module.scss';
import photo from '../../assets/MyPhoto1.jpg'

const About = () => {
    return (
        <div className='container'>
            <div className={style.about}>
                <div className={style.avatar}>
                    <img src={photo} alt={photo}/>
                </div>
                <div className={style.details}>
                    <div className={style.name}>
                        Taras Shevchenko
                    </div>
                    <div className={style.job}>
                        Web developer. Work with React, Redux, Js, Handlebars, HTML/CSS, prepros - sass/less.
                    </div>
                </div>
                <div className={style.tail}>
                    <div className={style.text}>I am working in company <a href="https://softpro.ua/">softpro</a> one year on position front-end
                        developer. My responsibility include site layout, creat scripts on Js and display
                        information from database. In company <span>i work</span> with <b>Html/Css</b>, <b>Bootstrap</b>, <b>Sass</b>, <b>Js</b>, <b>HandleBars</b>,
                        <b> sql</b>. Also at home i work and lern <b>React</b> and <b>Redux</b>.
                    </div>
                </div>

                <div className={style.info}>
                    <div className={style.infoItem}>
                        <div>Birthday:</div>
                        <div>12.02.2000</div>
                    </div>

                    <div className={style.infoItem}>
                        <div>Age:</div>
                        <div>21</div>
                    </div>

                    <div className={style.infoItem}>
                        <div>Address:</div>
                        <div>Kiev, Ukraine</div>
                    </div>

                    <div className={style.infoItem}>
                        <div>Experience:</div>
                        <div>1 year</div>
                    </div>

                    <div className={style.infoItem}>
                        <div>Email:</div>
                        <a href="mailto:tarashevchenkowork@gmail.com">tarashevchenkowork@gmail.com</a>
                    </div>

                    <div className={style.infoItem}>
                        <div>Phone:</div>
                        <a href="tel:+380935727997">+38(093)572-7997</a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;