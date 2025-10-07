import React from 'react'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
        @keyframes navigationScanline {0%,100% {transform: translateX(-100%);
opacity: 0;}
50% {opacity: 0.5;}
100% {transform: translateX(100%);}}@keyframes navigationLogoPulse {0%,100% {transform: translate(-50%, -50%) scale(1);
opacity: 0.3;}
50% {transform: translate(-50%, -50%) scale(1.4);
opacity: 0.6;}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<style>
@media (min-width: 992px) {
.navigation__menu {
  display: flex;
}
.navigation__actions {
  display: flex;
}
.navigation__toggle {
  display: none;
}
.navigation__mobile-menu {
  display: none;
}
}
@media (prefers-reduced-motion: reduce) {
.navigation, .navigation__link, .navigation__mobile-link, .navigation__toggle, .navigation__mobile-content, .navigation__cta-icon, .navigation__logo-icon svg {
  transition: none;
  animation: none;
}
.navigation::before, .navigation__logo-glow {
  animation: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="navigation-container6">
        <div className="navigation-container7">
          <Script
            html={`<script defer data-name="navigation">
(function(){
  // Navigation functionality
  const navToggle = document.getElementById("navToggle")
  const navMobileMenu = document.getElementById("navMobileMenu")
  const navBackdrop = document.getElementById("navBackdrop")
  const mainNavigation = document.getElementById("mainNavigation")
  const navMobileLinks = document.querySelectorAll(".navigation__mobile-link")

  // Toggle mobile menu
  function toggleMobileMenu() {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true"
    navToggle.setAttribute("aria-expanded", !isOpen)
    navMobileMenu.classList.toggle("is-open")
    document.body.style.overflow = isOpen ? "" : "hidden"
  }

  // Close mobile menu
  function closeMobileMenu() {
    navToggle.setAttribute("aria-expanded", "false")
    navMobileMenu.classList.remove("is-open")
    document.body.style.overflow = ""
  }

  // Event listeners
  navToggle.addEventListener("click", toggleMobileMenu)
  navBackdrop.addEventListener("click", closeMobileMenu)

  // Close menu when clicking on a link
  navMobileLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu)
  })

  // Close menu on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMobileMenu.classList.contains("is-open")) {
      closeMobileMenu()
    }
  })

  // Scroll effect
  let lastScroll = 0

  function handleScroll() {
    const currentScroll = window.pageYOffset

    if (currentScroll > 50) {
      mainNavigation.classList.add("is-scrolled")
    } else {
      mainNavigation.classList.remove("is-scrolled")
    }

    lastScroll = currentScroll
  }

  window.addEventListener("scroll", handleScroll, { passive: true })

  // Smooth scroll for anchor links
  document
    .querySelectorAll(".navigation__link, .navigation__mobile-link")
    .forEach((link) => {
      if (link.getAttribute("href").startsWith("#")) {
        link.addEventListener("click", (e) => {
          const targetId = link.getAttribute("href")
          const targetElement = document.querySelector(targetId)

          if (targetElement) {
            e.preventDefault()
            const navHeight = mainNavigation.offsetHeight
            const targetPosition = targetElement.offsetTop - navHeight - 20

            window.scrollTo({
              top: targetPosition,
              behavior: "smooth",
            })
          }
        })
      }
    })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <nav id="mainNavigation" className="navigation">
        <div className="navigation__container">
          <a href="/" id="navLogo">
            <div className="navigation__logo">
              <div className="navigation__logo-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 18V5m3 8a4.17 4.17 0 0 1-3-4a4.17 4.17 0 0 1-3 4m8.598-6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
                    <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
                    <path d="M18 18a4 4 0 0 0 2-7.464"></path>
                    <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
                    <path d="M6 18a4 4 0 0 1-2-7.464"></path>
                    <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
                  </g>
                </svg>
                <div className="navigation__logo-glow"></div>
              </div>
              <span className="navigation__logo-text">
                <span>
                  {' '}
                  AIPerformance
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="navigation-navigationlogo-accent">Hub</span>
              </span>
            </div>
          </a>
          <ul id="navMenu" className="navigation__menu">
            <li className="navigation__item">
              <a href="#features">
                <div className="navigation__link">
                  <span>Features</span>
                </div>
              </a>
            </li>
            <li className="navigation__item">
              <a href="#product">
                <div className="navigation__link">
                  <span>Product</span>
                </div>
              </a>
            </li>
            <li className="navigation__item">
              <a href="#pricing">
                <div className="navigation__link">
                  <span>Pricing</span>
                </div>
              </a>
            </li>
            <li className="navigation__item">
              <a href="#resources">
                <div className="navigation__link">
                  <span>Resources</span>
                </div>
              </a>
            </li>
            <li className="navigation__item">
              <a href="#community">
                <div className="navigation__link">
                  <span>Community</span>
                </div>
              </a>
            </li>
            <li className="navigation__item">
              <a href="#about">
                <div className="navigation__link">
                  <span>About</span>
                </div>
              </a>
            </li>
          </ul>
          <div id="navActions" className="navigation__actions">
            <button className="btn-link btn navigation__cta-login">
              Sign In
            </button>
            <button className="btn-primary navigation__cta-primary btn">
              <span>Try Free AI Assistant</span>
              <svg
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                viewBox="0 0 24 24"
                className="navigation-navigationcta-icon"
              >
                <path
                  d="m18 15l-6-6l-6 6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <button
            id="navToggle"
            aria-label="Toggle navigation menu"
            aria-expanded="false"
            className="navigation__toggle"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              className="navigation-navigationtoggle-icon1"
            >
              <path
                d="M4 5h16M4 12h16M4 19h16"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              className="navigation-navigationtoggle-icon2"
            >
              <path
                d="M18 6L6 18M6 6l12 12"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div id="navMobileMenu" className="navigation__mobile-menu">
          <div className="navigation__mobile-content">
            <ul className="navigation__mobile-list">
              <li className="navigation__mobile-item">
                <a href="#features">
                  <div className="navigation__mobile-link">
                    <span>Features</span>
                  </div>
                </a>
              </li>
              <li className="navigation__mobile-item">
                <a href="#product">
                  <div className="navigation__mobile-link">
                    <span>Product</span>
                  </div>
                </a>
              </li>
              <li className="navigation__mobile-item">
                <a href="#pricing">
                  <div className="navigation__mobile-link">
                    <span>Pricing</span>
                  </div>
                </a>
              </li>
              <li className="navigation__mobile-item">
                <a href="#resources">
                  <div className="navigation__mobile-link">
                    <span>Resources</span>
                  </div>
                </a>
              </li>
              <li className="navigation__mobile-item">
                <a href="#community">
                  <div className="navigation__mobile-link">
                    <span>Community</span>
                  </div>
                </a>
              </li>
              <li className="navigation__mobile-item">
                <a href="#about">
                  <div className="navigation__mobile-link">
                    <span>About</span>
                  </div>
                </a>
              </li>
            </ul>
            <div className="navigation__mobile-actions">
              <button className="navigation__mobile-btn btn-outline btn">
                Sign In
              </button>
              <button className="btn-primary navigation__mobile-btn btn">
                {' '}
                Try Free AI Assistant
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </button>
            </div>
          </div>
          <div id="navBackdrop" className="navigation__mobile-backdrop"></div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
