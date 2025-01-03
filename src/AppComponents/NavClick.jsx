/* eslint-disable react/prop-types */
import arrow from './images/Arrow White.svg'

function NavClick(props) {
    const gold = '#FFAC12';
    const black = '#271A00';
    const white = 'white';

    return (
        <a
            href={props.nav}
            aria-label={props.text}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontWeight: 'bolder',
                    width: '210px',
                    height: '50px',
                    borderTopRightRadius: '20px',
                    backgroundColor: props.color ? gold : black,
                    color: props.color ? black : white,
                    textDecoration: 'none'
                }}
            >
                <div style={{ paddingRight: '10px' }}>{props.text}</div>
                <div>
                    <img src={arrow} alt='arrow' />
                </div>
            </div>
        </a>
    );
}

export default NavClick;
