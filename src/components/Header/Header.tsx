import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header: React.FC = () => {
	const [menuActive, setMenuActive] = useState<boolean>(false);

	const toggleMenu = () => {
		setMenuActive(!menuActive);
	};

	const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();

		const targetId = e.currentTarget.getAttribute('href');
		if (targetId) {
			const targetElement = document.querySelector(targetId);

			if (targetElement) {
				window.scrollTo({
					top: targetElement.getBoundingClientRect().top + window.pageYOffset - 70,
					behavior: 'smooth'
				});

				// Close mobile menu if open
				setMenuActive(false);
			}
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			const header = document.querySelector('.header');
			if (header) {
				if (window.scrollY > 50) {
					header.classList.add('scrolled');
				} else {
					header.classList.remove('scrolled');
				}
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header className="header">
			<nav className="nav-container">
				<div className="logo">
					JOSH <span>SIDERIS</span> | <span style={{ fontSize: '0.8em' }}>PPC</span>
				</div>
				<ul className={`nav-menu ${menuActive ? 'active' : ''}`} id="nav-menu" role="menu">
					<li><a href="#home" onClick={handleLinkClick}>Home</a></li>
					<li><a href="#about" onClick={handleLinkClick}>About</a></li>
					<li><a href="#platform" onClick={handleLinkClick}>Platform</a></li>
					<li><a href="#get-involved" onClick={handleLinkClick}>Get Involved</a></li>
					<li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
				</ul>
				<button
					className="hamburger"
					aria-label="Toggle menu"
					aria-expanded={menuActive}
					aria-controls="nav-menu"
					onClick={toggleMenu}
				>
					<FontAwesomeIcon icon={faBars} aria-hidden="true" />
				</button>
			</nav>
		</header>
	);
};

export default Header;