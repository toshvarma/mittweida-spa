
import Header from "../../header/Header.tsx";
import Footer from "../../footer/Footer.tsx";
import "./legalview.css";

// PLACEHOLDER TEXT CONTENT
export default function PPView() {
    return (
        <div className="legal-page">
            <Header isLoggedIn2 ={false} />
            <main className="legal-content">
                <h1 className="legal-title">PRIVACY POLICY</h1>
                <p className="legal-updated">Last updated XX / XX / XXXX</p>

                <h2 className="legal-section-title">SUMMARY OF KEY POINTS</h2>
                <p className="legal-text italic">
                    This summary provides key points from our Privacy Policy, but you can find more details about
                    any of these topics by clicking the link following each key point or by using our table of
                    contents below to find the section you are looking for.
                </p>

                <p className="legal-text">
                    <strong>What personal information do we process?</strong><br />
                    When you visit, use, or navigate our Services, we may process personal information depending
                    on how you interact with us and the Services, the choices you make, and the products and
                    features you use.
                </p>

                <p className="legal-text">
                    <strong>Do we process any sensitive personal information?</strong><br />
                    Some of the information may be considered ‘special’ or ‘sensitive’ in certain jurisdictions,
                    for example your racial or ethnic origins, sexual orientation, and religious beliefs.
                    We do not process sensitive personal information.
                </p>

                <p className="legal-text">
                    <strong>Do we collect any information from third parties?</strong><br />
                    We do not collect any information from third parties.
                </p>

                <p className="legal-text">
                    <strong>How do we process your information?</strong><br />
                    We process your information to provide, improve, and administer our Services, communicate
                    with you, for security and fraud prevention, and to comply with law. We may also process your
                    information for other purposes with your consent.
                </p>
            </main>
            <Footer currentPage="pp" />
        </div>
    );
}
