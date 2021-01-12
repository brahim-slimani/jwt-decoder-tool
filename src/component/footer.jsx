import React from 'react';

export const Footer = () => {
  return (
    <footer className="page-footer font-small">
      {/* Copyright  */}
      <div className="footer-copyright text-center py-3 footer-content">
        © Copyright {new Date().getFullYear()}
      </div>
    </footer>
  );
}