import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content">

                {/* Column 1: Brand */}
                <div className="footer-section brand-section">
                    <h3>Guarani Store 🦁</h3>
                    <p>Tu tienda digital de confianza. Calidad, estilo y los mejores precios para todo el Paraguay.</p>
                </div>


                {/* Column 3: Social */}
                <div className="footer-section social-section">
                    <h4>Seguinos</h4>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/populusports/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" title="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href="https://www.facebook.com/share/1DTuZE1619/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" title="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                        <a href="#" onClick={e => e.preventDefault()} title="TikTok">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                        </a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Guarani Store. Hecho con 💙 en Paraguay.</p>
            </div>
        </footer>
    );
}
