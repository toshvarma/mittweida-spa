import { useLocation } from "wouter";
import "./footer.css";

interface FooterProps {
    currentPage?: "pp" | "tos";
}

export default function Footer({ currentPage }: FooterProps) {
    const [, navigate] = useLocation();

    return (
        <footer className="footer">
            <div className="footer-left">
                <button
                    className={currentPage === "pp" ? "underline" : ""}
                    onClick={() => navigate("/privacy")}
                >
                    Privacy Policy
                </button>
                <button
                    className={currentPage === "tos" ? "underline" : ""}
                    onClick={() => navigate("/terms")}
                >
                    Terms of Service
                </button>
            </div>
            <div className="footer-right">
                <img src="/assets/mittfacebook.png" alt="Facebook" />
                <img src="/assets/mittstagram.png" alt="Instagram" />
            </div>
        </footer>
    );
}
