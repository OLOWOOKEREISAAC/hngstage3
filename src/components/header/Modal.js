import styles from './Header.module.css';
import imgage from '../../assets/error.png';
import im from '../../assets/co.png';


const Modal = ({check})=>{

    const checking = () => check(false);

    return(
        <>
            <div className={styles.backdrop}></div>
            <div className={styles.modal}>
                <img src={im} alt='img' onClick={checking}/> <hr/>
                <img src={imgage} alt='img'/>
            </div>
        </>
        
    )
};

export default Modal;