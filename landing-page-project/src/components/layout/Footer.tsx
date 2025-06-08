import React from 'react';
import Link from 'next/link';

// Placeholder SVGs for social icons - in a real app, these might come from a library or be separate components
const FacebookIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-label="Facebook"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>;
const InstagramIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-label="Instagram"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.359 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073s3.667-.014 4.947-.072c4.359-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.359-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>;
const TwitterIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-label="Twitter"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.454 0 1.717.873 3.229 2.201 4.115-.81-.026-1.566-.247-2.229-.616v.054c0 2.395 1.703 4.393 3.959 4.846-.414.112-.85.171-1.296.171-.317 0-.624-.03-.928-.086.637 1.961 2.482 3.386 4.676 3.426-1.692 1.326-3.824 2.114-6.136 2.114-.4 0-.792-.023-1.179-.069 2.189 1.397 4.796 2.212 7.618 2.212 9.142 0 14.137-7.566 14.137-14.137 0-.215-.005-.429-.014-.642.971-.699 1.813-1.574 2.481-2.57z" /></svg>;

const Footer = () => {
  return (
    <footer className="bg-text-dark text-gray-300 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-6"> {/* Increased mb slightly */}
          <Link href="#" legacyBehavior><a className="text-gray-400 hover:text-brand-white transition-colors duration-200"><FacebookIcon /></a></Link>
          <Link href="#" legacyBehavior><a className="text-gray-400 hover:text-brand-white transition-colors duration-200"><InstagramIcon /></a></Link>
          <Link href="#" legacyBehavior><a className="text-gray-400 hover:text-brand-white transition-colors duration-200"><TwitterIcon /></a></Link>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Your Awesome Brand. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
