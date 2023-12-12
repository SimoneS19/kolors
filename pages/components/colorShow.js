import style from '../../styles/Home.module.scss';

function ColorShow({ Color }) {
    return (
        <div>
            <img src={Color.urls.small} alt={Color.alt_description} />
            
           {Color.alt_description}

           <div className={style.color}>Numero risultato: {Color.length}</div>
        </div>
    );
}

export default ColorShow;