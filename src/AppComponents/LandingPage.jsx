import NavClick from "./NavClick"
import alexListing from './images/alex-estate.jpg'
//import listing from './images/ibidsy-jpg'
import './css/LandingPage.css'

function LandingPage() {

    return (
        <section
            className="landing-page"
            style={{ backgroundImage: `url(${alexListing})` }}
            >
            <article className="article">
                <div
                    style={{ display: 'none' }}
                    >
                    <h1 className="article-header">Beautiful homes you need</h1>
                    <p
                        className="article-text"
                        >
                        In oculis quidem se esse admonere interesse enim maxime
                        placeat, facere possimus, omnis. Et quidem faciunt, ut
                        labore et accurate disserendum et harum quidem exercitus
                        quid.
                    </p>
                </div>
            </article>
            <aside
                style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    marginBottom: '20px'
                }}
                >
                <NavClick
                    text='Preview Properties'
                    color={false}
                    nav='#properties'
                    />
            </aside>
        </section>
    )
}

export default LandingPage