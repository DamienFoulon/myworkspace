import '../styles/Header.css';
import headerWorkPicture from '../assets/images/work.png';
import headerConnectPicture from '../assets/images/connect.png';
import headerNotifyPicture from '../assets/images/notify.png';
import headerPictureBackground from '../assets/images/blob.svg';

function Header(){
    return(
        <header>
            <section class="work right">
                <div class='illustration'>
                    <img class='picture' src={headerWorkPicture} alt='work' />
                    <img class='blob' src={headerPictureBackground} alt='blob' />                        
                </div>
                <h1 class='text'>Share your <br/> Work</h1>
            </section>
            <section class="connect left">
                <div class='illustration'>
                    <img class='picture' src={headerConnectPicture} alt='work' />
                    <img class='blob' src={headerPictureBackground} alt='blob' />
                </div>
                <h1 class='text'>Get worldwide <br/> connections</h1>
            </section>
            <div class="clear"></div>
            <section class="notify right">
                <div class='illustration'>
                    <img class='picture' src={headerNotifyPicture} alt='work' />
                    <img class='blob' src={headerPictureBackground} alt='blob' />
                </div>
                <h1 class='text'>Keep contact <br/> with clients</h1>
            </section>
        </header>
    );
}

export default Header;