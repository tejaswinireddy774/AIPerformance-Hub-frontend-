import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<style>
        @keyframes footer-grid-scroll {0% {transform: translateY(0);}
100% {transform: translateY(60px);}}@keyframes footer-quiz-glow {0%,100% {box-shadow: 0 0 30px
          color-mix(in srgb, var(--color-primary) 20%, transparent),
        var(--shadow-level-2);}
50% {box-shadow: 0 0 50px
          color-mix(in srgb, var(--color-primary) 35%, transparent),
        var(--shadow-level-3);}}@keyframes footer-icon-pulse {0%,100% {transform: scale(1);}
50% {transform: scale(1.1);}}@keyframes footer-logo-glow {0%,100% {filter: drop-shadow(0 0 8px var(--color-primary));}
50% {filter: drop-shadow(0 0 16px var(--color-primary));}}@keyframes footer-arrow-bounce {0%,100% {transform: translateY(0);}
50% {transform: translateY(-4px);}}@keyframes footer-ai-float {0%,100% {transform: translateY(0);}
50% {transform: translateY(-10px);}}@keyframes footer-pulse-ring {0% {transform: translate(-50%, -50%) scale(0.8);
opacity: 0.5;}
100% {transform: translate(-50%, -50%) scale(1.5);
opacity: 0;}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="footer-container4">
        <div className="footer-container5">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.footer-grid-bg, .footer-quiz-section, .footer-icon-pulse, .footer-logo-glow, .footer-arrow-bounce, .footer-ai-float, .footer-pulse-ring {
  animation: none;
}
.footer-link:hover, .footer-social-link:hover, .footer-scroll-top:hover, .footer-quiz-button:hover, .footer-theme-btn:hover {
  transform: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="footer-container6">
        <div className="footer-container7">
          <Script
            html={`<script defer data-name="footer">
(function(){
  const quizBtn = document.getElementById("footer-quiz-btn")
  const newsletterForm = document.getElementById("footer-newsletter-form")
  const scrollTopBtn = document.getElementById("footer-scroll-top")
  const themeNeonBtn = document.getElementById("footer-theme-neon")
  const themePastelBtn = document.getElementById("footer-theme-pastel")
  const aiAssistant = document.getElementById("footer-ai-assistant")

  // Quiz Button Interaction
  if (quizBtn) {
    quizBtn.addEventListener("click", () => {
      alert(
        "AI Productivity Quiz Coming Soon! 🧠\n\nOur AI will analyze your workflow and provide personalized recommendations."
      )
    })
  }

  // Newsletter Form Submission
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const emailInput = document.getElementById("footer-email-input")
      if (emailInput && emailInput.value) {
        alert(
          \`Thank you for subscribing! 🎉\n\nWe'll send AI productivity tips to \${emailInput.value}\`
        )
        emailInput.value = ""
      }
    })
  }

  // Scroll to Top
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })

    // Show/hide scroll button based on scroll position
    const toggleScrollBtn = () => {
      if (window.scrollY > 500) {
        scrollTopBtn.style.opacity = "1"
        scrollTopBtn.style.pointerEvents = "auto"
      } else {
        scrollTopBtn.style.opacity = "0"
        scrollTopBtn.style.pointerEvents = "none"
      }
    }

    window.addEventListener("scroll", toggleScrollBtn)
    toggleScrollBtn()
  }

  // Theme Switcher
  if (themeNeonBtn && themePastelBtn) {
    themeNeonBtn.addEventListener("click", () => {
      themeNeonBtn.classList.add("footer-theme-active")
      themePastelBtn.classList.remove("footer-theme-active")
      document.body.style.transition = "all 0.5s ease"
      alert(
        "Neon Dark Theme Activated! 🌙\n\nExperience the futuristic digital aesthetic."
      )
    })

    themePastelBtn.addEventListener("click", () => {
      themePastelBtn.classList.add("footer-theme-active")
      themeNeonBtn.classList.remove("footer-theme-active")
      document.body.style.transition = "all 0.5s ease"
      alert(
        "Pastel Light Theme Activated! ☀️\n\nEnjoy a softer, warmer visual experience."
      )
    })
  }

  // AI Assistant Interaction
  if (aiAssistant) {
    aiAssistant.addEventListener("click", () => {
      alert(
        "AI Assistant Ready! 🤖\n\nHi! I'm your AI productivity companion. How can I help optimize your workflow today?"
      )
    })

    // Subtle interaction feedback
    aiAssistant.addEventListener("mouseenter", () => {
      aiAssistant.style.transform = "scale(1.05)"
    })

    aiAssistant.addEventListener("mouseleave", () => {
      aiAssistant.style.transform = "scale(1)"
    })
  }

  // Dynamic Grid Animation Speed (based on user interaction)
  const gridBg = document.querySelector(".footer-grid-bg")
  if (gridBg) {
    let interactionCount = 0

    document.addEventListener("click", () => {
      interactionCount++
      if (interactionCount % 5 === 0) {
        gridBg.style.animationDuration = "15s"
        setTimeout(() => {
          gridBg.style.animationDuration = "20s"
        }, 3000)
      }
    })
  }

  // Easter Egg: Konami Code for Special Effect
  let konamiCode = []
  const konamiPattern = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ]

  document.addEventListener("keydown", (e) => {
    konamiCode.push(e.key)
    konamiCode = konamiCode.slice(-10)

    if (konamiCode.join(",") === konamiPattern.join(",")) {
      document.querySelector(".footer-wrapper").style.animation =
        "footer-rainbow 2s ease-in-out"
      alert(
        "🎮 Konami Code Activated!\n\nYou found the secret! Maximum AI power unlocked! 🚀"
      )

      setTimeout(() => {
        document.querySelector(".footer-wrapper").style.animation = ""
      }, 2000)
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <footer id="footer-aiperformance" className="footer-wrapper">
        <div className="footer-container">
          <div aria-hidden="true" className="footer-grid-bg"></div>
          <div className="footer-quiz-section">
            <div className="footer-quiz-content">
              <div className="footer-quiz-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
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
              </div>
              <div className="footer-quiz-text">
                <h3 className="footer-quiz-title">
                  Discover Your Productivity Style
                </h3>
                <p className="footer-quiz-description">
                  {' '}
                  Take our AI-powered quiz and get personalized workflow
                  recommendations
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <button
                id="footer-quiz-btn"
                className="footer-quiz-button btn-accent btn"
              >
                <span>Start Quiz</span>
                <svg
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="footer-main">
            <div className="footer-column footer-brand-column">
              <div className="footer-brand">
                <div className="footer-logo">
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
                  <span className="footer-brand-name">AIPerformance Hub</span>
                </div>
                <p className="footer-tagline">
                  Supercharge Your Workflow with AI
                </p>
              </div>
              <div className="footer-newsletter">
                <h4 className="footer-newsletter-title">Stay Updated</h4>
                <p className="footer-newsletter-description">
                  {' '}
                  Get weekly AI productivity tips
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <form
                  id="footer-newsletter-form"
                  className="footer-newsletter-form"
                >
                  <div className="footer-input-wrapper">
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                      </g>
                    </svg>
                    <input
                      type="email"
                      id="footer-email-input"
                      required="true"
                      placeholder="your@email.com"
                    />
                  </div>
                  <button
                    type="submit"
                    className="footer-subscribe-btn btn-primary btn"
                  >
                    <span>Subscribe</span>
                  </button>
                </form>
              </div>
            </div>
            <div className="footer-column">
              <h4 className="footer-column-title">Product</h4>
              <ul className="footer-links">
                <li>
                  <a href="#features">
                    <div className="footer-link">
                      <span>Features</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#pricing">
                    <div className="footer-link">
                      <span>Pricing</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#integrations">
                    <div className="footer-link">
                      <span>Integrations</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#api">
                    <div className="footer-link">
                      <span>API Access</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#changelog">
                    <div className="footer-link">
                      <span>Changelog</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#roadmap">
                    <div className="footer-link">
                      <span>Roadmap</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-column-title">Company</h4>
              <ul className="footer-links">
                <li>
                  <a href="#about">
                    <div className="footer-link">
                      <span>About Us</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#careers">
                    <div className="footer-link">
                      <span>Careers</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#blog">
                    <div className="footer-link">
                      <span>Blog</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#press">
                    <div className="footer-link">
                      <span>Press Kit</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#partners">
                    <div className="footer-link">
                      <span>Partners</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    <div className="footer-link">
                      <span>Contact</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-column-title">Resources</h4>
              <ul className="footer-links">
                <li>
                  <a href="#docs">
                    <div className="footer-link">
                      <span>Documentation</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#tutorials">
                    <div className="footer-link">
                      <span>Tutorials</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#community">
                    <div className="footer-link">
                      <span>Community</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#support">
                    <div className="footer-link">
                      <span>Support</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#status">
                    <div className="footer-link">
                      <span>System Status</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#security">
                    <div className="footer-link">
                      <span>Security</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-column-title">Legal</h4>
              <ul className="footer-links">
                <li>
                  <a href="#privacy">
                    <div className="footer-link">
                      <span>Privacy Policy</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#terms">
                    <div className="footer-link">
                      <span>Terms of Service</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#cookies">
                    <div className="footer-link">
                      <span>Cookie Policy</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#gdpr">
                    <div className="footer-link">
                      <span>GDPR</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#compliance">
                    <div className="footer-link">
                      <span>Compliance</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#licenses">
                    <div className="footer-link">
                      <span>Licenses</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <p className="footer-copyright">
                {' '}
                © 2025 Tejaswini. All rights reserved.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              
            </div>
            <div className="footer-social">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Twitter"
                  className="footer-social-link"
                >
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="footer-social-link"
                >
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                      <circle r="2" cx="4" cy="4"></circle>
                    </g>
                  </svg>
                </div>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="GitHub"
                  className="footer-social-link"
                >
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </g>
                  </svg>
                </div>
              </a>
            </div>
            <button
              id="footer-scroll-top"
              aria-label="Scroll to top"
              className="footer-scroll-top"
            >
              <svg
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  d="m5 12l7-7l7 7m-7 7V5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          id="footer-ai-assistant"
          aria-hidden="true"
          className="footer-ai-assistant"
        >
          <div className="footer-ai-pulse"></div>
          <div className="footer-ai-avatar">
            <svg
              width="20"
              xmlns="http://www.w3.org/2000/svg"
              height="20"
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
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
