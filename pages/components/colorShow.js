// import '../styles/Home.module.scss';

function ColorShow({ Color }) {
    return (
        <div>
            <img src={Color.urls.small} alt={Color.alt_description} />
            
            {Color.alt_description}
        </div>
    );
}

export default ColorShow;