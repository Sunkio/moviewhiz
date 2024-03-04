import Link from 'next/link';

function Heading({children}) {
    return (
        <div className="header">
            <div className="header-title">
                <h1 className="neon-text"><Link className="header-link" href="https://moviewhiz.xyz">MovieWhiz</Link></h1>
            </div>
            <div className="header-subtitle">
                <h2>{children}</h2>
            </div>
        </div>
    );
}

export default Heading;