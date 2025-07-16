
import Header from "../../header/Header.tsx";
import Footer from "../../footer/Footer.tsx";
import "./legalview.css";

// PLACEHOLDER TEXT CONTENT
export default function TOSView() {
    return (
        <div className="legal-page">
            <Header isLoggedIn2={false} />
            <main className="legal-content">
                <h1 className="legal-title">TERMS OF USE</h1>
                <p className="legal-updated">Last updated XX / XX / XXXX</p>
                <h2 className="legal-section-title">AGREEMENT TO OUR LEGAL TERMS</h2>
                <p className="legal-text">
                    These Legal Terms constitute a legally binding agreement made between you, whether personally
                    or on behalf of an entity (“you”), and Myttweida, concerning your access to and use of the Services.
                    You agree that by accessing the Services, you have read, understood, and agreed to be bound by all
                    of these Legal Terms. <strong>IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE
                    EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</strong>
                </p>
                <p className="legal-text">
                    Supplemental terms and conditions or documents that may be posted on the Services from time
                    to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole
                    discretion, to make changes or modifications to these Legal Terms at any time and for any reason.
                </p>
                <p className="legal-text">
                    We will alert you about any changes by updating the “Last updated” date of these Legal Terms,
                    and you waive any right to receive specific notice of each such change. It is your responsibility
                    to periodically review these Legal Terms to stay informed of updates. You will be subject to, and
                    will be deemed to have been made aware of and to have accepted, the changes in any revised Legal
                    Terms by your continued use of the Services after the date such revised Legal Terms are posted.
                </p>
            </main>
            <Footer currentPage="tos" />
        </div>
    );
}
