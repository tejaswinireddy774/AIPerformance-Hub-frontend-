import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>Deficient Showy Lyrebird</title>
        <meta property="og:title" content="Deficient Showy Lyrebird" />
      </Helmet>
      <Navigation></Navigation>
      <div className="home-container11">
        <div className="home-container12">
          <Script
            html={`<style>
        @keyframes pulseRing {0%,100% {transform: translate(-50%, -50%) scale(1);
opacity: 1;}
50% {transform: translate(-50%, -50%) scale(1.1);
opacity: 0.7;}}@keyframes floatCore {0%,100% {transform: translate(-50%, -50%) translateY(0);}
50% {transform: translate(-50%, -50%) translateY(-10px);}}@keyframes bounce {0%,100% {transform: translateX(-50%) translateY(0);}
50% {transform: translateX(-50%) translateY(-10px);}}@keyframes arrowPulse {0%,100% {opacity: 1;}
50% {opacity: 0.4;}}@keyframes blink {0%,100% {opacity: 1;}
50% {opacity: 0;}}@keyframes slideIn {from {opacity: 0;
transform: translateY(-10px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes growBar {from {height: 0%;}}@keyframes pulse {0%,100% {box-shadow: 0 0 20px
        color-mix(in srgb, var(--color-primary) 30%, transparent);}
50% {box-shadow: 0 0 30px
        color-mix(in srgb, var(--color-primary) 50%, transparent);}}@keyframes floatChat {0%,100% {transform: translateY(0);}
50% {transform: translateY(-15px);}}@keyframes messageSlide {from {opacity: 0;
transform: translateY(10px);}
to {opacity: 1;
transform: translateY(0);}}@keyframes characterFloat {0%,100% {transform: translateY(0) rotate(0deg);}
50% {transform: translateY(-10px) rotate(5deg);}}@keyframes livePulse {0%,100% {opacity: 1;
transform: scale(1);}
50% {opacity: 0.5;
transform: scale(1.3);}}@keyframes tipSlideIn {from {opacity: 0;
transform: translateX(-20px);}
to {opacity: 1;
transform: translateX(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="home-container13">
        <div className="home-container14">
          <Script
            html={`<style>
#hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--color-surface);
}
#smart-task-showcase {
  padding: var(--section-gap) var(--spacing-lg);
  background: var(--color-surface);
  position: relative;
}
#performance-stats {
  padding: var(--section-gap) var(--spacing-lg);
  background: linear-gradient(
      135deg,
      var(--color-surface),
      color-mix(in srgb, var(--color-primary) 5%, var(--color-surface))
    );
  position: relative;
  overflow: hidden;
}
#performance-stats::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
        circle at 20% 50%,
        color-mix(in srgb, var(--color-primary) 10%, transparent) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 50%,
        color-mix(in srgb, var(--color-accent) 10%, transparent) 0%,
        transparent 50%
      );
  pointer-events: none;
}
#ai-chat-companion {
  padding: var(--section-gap) var(--spacing-lg);
  background: var(--color-surface);
}
#interactive-faq {
  padding: var(--section-gap) var(--spacing-lg);
  background: linear-gradient(
      135deg,
      color-mix(in srgb, var(--color-surface) 100%, transparent),
      color-mix(in srgb, var(--color-primary) 3%, var(--color-surface))
    );
  position: relative;
}
#community-section {
  padding: var(--section-gap) var(--spacing-lg);
  background: var(--color-surface);
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="home-container15">
        <div className="home-container16">
          <Script
            html={`<script defer data-name="homepage-interactions">
(function(){
  // Hero AI Core Interactions
  const aiCore = document.getElementById("ai-core")
  const taskTags = document.querySelectorAll(".task-tag")
  const coreParticles = document.getElementById("core-particles")

  // Create particles
  function createParticles() {
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement("div")
      particle.style.position = "absolute"
      particle.style.width = "3px"
      particle.style.height = "3px"
      particle.style.background = "var(--color-primary)"
      particle.style.borderRadius = "50%"
      particle.style.boxShadow = "0 0 8px var(--color-primary)"
      particle.style.opacity = "0"
      particle.style.pointerEvents = "none"
      coreParticles.appendChild(particle)
      animateParticle(particle, i)
    }
  }

  function animateParticle(particle, index) {
    const angle = (index * 360) / 30
    const distance = 140
    const duration = 2000 + Math.random() * 1000

    setInterval(() => {
      const startX = 140
      const startY = 140
      const endX = startX + Math.cos((angle * Math.PI) / 180) * distance
      const endY = startY + Math.sin((angle * Math.PI) / 180) * distance

      particle.style.opacity = "1"
      particle.style.left = startX + "px"
      particle.style.top = startY + "px"

      particle.animate(
        [
          { left: startX + "px", top: startY + "px", opacity: 1 },
          { left: endX + "px", top: endY + "px", opacity: 0 },
        ],
        {
          duration: duration,
          easing: "ease-out",
        }
      )
    }, duration + index * 100)
  }

  createParticles()

  // Task tag hover effects
  taskTags.forEach((tag) => {
    tag.addEventListener("mouseenter", () => {
      taskTags.forEach((t) => {
        if (t !== tag) {
          t.style.opacity = "0.3"
        }
      })
    })

    tag.addEventListener("mouseleave", () => {
      taskTags.forEach((t) => {
        t.style.opacity = "0.6"
      })
    })
  })

  // Animated counter for stats
  function animateCounter(element, target) {
    const duration = 2000
    const start = 0
    const increment = target / (duration / 16)
    let current = start

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      element.textContent = Math.floor(current).toLocaleString()
    }, 16)
  }

  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px",
  }

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        const target = parseInt(entry.target.dataset.target)
        animateCounter(entry.target, target)
        entry.target.dataset.animated = "true"
      }
    })
  }, observerOptions)

  document.querySelectorAll(".stat-number").forEach((stat) => {
    statsObserver.observe(stat)
  })

  // Demo panel drag and drop
  const demoTasks = document.querySelectorAll(".demo-task")
  const aiSuggestion = document.getElementById("ai-suggestion")

  let draggedTask = null

  demoTasks.forEach((task) => {
    task.addEventListener("dragstart", (e) => {
      draggedTask = task
      task.style.opacity = "0.5"
    })

    task.addEventListener("dragend", () => {
      task.style.opacity = "1"
      draggedTask = null

      // Show AI suggestion
      aiSuggestion.style.animation = "pulse 2s infinite"
      setTimeout(() => {
        aiSuggestion.style.animation = ""
      }, 2000)
    })

    task.addEventListener("dragover", (e) => {
      e.preventDefault()
    })

    task.addEventListener("drop", (e) => {
      e.preventDefault()
      if (draggedTask && draggedTask !== task) {
        const container = task.parentNode
        const allTasks = [...container.children]
        const draggedIndex = allTasks.indexOf(draggedTask)
        const targetIndex = allTasks.indexOf(task)

        if (draggedIndex < targetIndex) {
          task.after(draggedTask)
        } else {
          task.before(draggedTask)
        }
      }
    })
  })

  // Chat demo interaction
  const chatInput = document.getElementById("demo-chat-input")
  const chatSendBtn = document.getElementById("chat-send-btn")
  const chatMessages = document.getElementById("chat-messages")

  chatSendBtn.addEventListener("click", () => {
    const message = chatInput.value.trim()
    if (message) {
      addChatMessage(message, "user")
      chatInput.value = ""

      setTimeout(() => {
        addChatMessage(
          "Task scheduled for tomorrow at 2:00 PM. Would you like me to add a reminder?",
          "ai"
        )
      }, 1000)
    }
  })

  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      chatSendBtn.click()
    }
  })

  function addChatMessage(text, type) {
    const messageDiv = document.createElement("div")
    messageDiv.className = \`chat-message \${type}-message\`

    if (type === "ai") {
      messageDiv.innerHTML = \`
      <div class="message-avatar">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 18V5m3 8a4.17 4.17 0 0 1-3-4a4.17 4.17 0 0 1-3 4m8.598-6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"/><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"/><path d="M18 18a4 4 0 0 0 2-7.464"/><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"/><path d="M6 18a4 4 0 0 1-2-7.464"/><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"/></g></svg>
      </div>
      <div class="message-content"><p>\${text}</p></div>
    \`
    } else {
      messageDiv.innerHTML = \`<div class="message-content"><p>\${text}</p></div>\`
    }

    chatMessages.appendChild(messageDiv)
    chatMessages.scrollTop = chatMessages.scrollHeight
  }

  // FAQ accordion
  const faqItems = document.querySelectorAll(".faq-item")
  const thoughtBubble = document.getElementById("thought-bubble")

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active")

      faqItems.forEach((i) => i.classList.remove("active"))

      if (!isActive) {
        item.classList.add("active")
      }
    })

    item.addEventListener("mouseenter", () => {
      const hint = item.dataset.hint
      if (hint) {
        thoughtBubble.innerHTML = \`<span>\${hint}</span>\`
      }
    })

    item.addEventListener("mouseleave", () => {
      thoughtBubble.innerHTML =
        "<span>Hover over questions to get hints!</span>"
    })
  })

  // Community wall live feed
  const wallFeed = document.getElementById("wall-feed")
  const tips = [
    "Use keyboard shortcuts to navigate tasks 10x faster",
    "Morning planning sessions boost daily productivity by 40%",
    "AI can auto-categorize your emails and save hours weekly",
    "Take 5-minute breaks between deep work sessions",
    "Review completed tasks weekly to track progress patterns",
    "Set boundaries for notification times to reduce distractions",
    "Use templates for repetitive tasks to maintain consistency",
  ]

  function addNewTip() {
    const randomTip = tips[Math.floor(Math.random() * tips.length)]

    const tipDiv = document.createElement("div")
    tipDiv.className = "wall-tip"
    tipDiv.innerHTML = \`
    <div class="tip-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"/><circle cx="4" cy="20" r="2"/></g></svg>
    </div>
    <div class="tip-content">
      <p class="tip-text">\${randomTip}</p>
      <span class="tip-time">Just now</span>
    </div>
  \`

    wallFeed.insertBefore(tipDiv, wallFeed.firstChild)

    if (wallFeed.children.length > 4) {
      wallFeed.removeChild(wallFeed.lastChild)
    }
  }

  setInterval(addNewTip, 8000)

  // Typing effect for NL demo
  const typingDemo = document.getElementById("typing-demo")
  const text = '"Schedule client call tomorrow at 3pm"'
  let charIndex = 0

  function typeText() {
    if (charIndex < text.length) {
      typingDemo.textContent = text.substring(0, charIndex + 1)
      charIndex++
      setTimeout(typeText, 100)
    } else {
      setTimeout(() => {
        charIndex = 0
        typingDemo.textContent = ""
        setTimeout(typeText, 1000)
      }, 3000)
    }
  }

  setTimeout(typeText, 1000)
})()
</script>`}
          ></Script>
        </div>
      </div>
      <section id="hero-section">
        <div className="hero-video-container">
          <video
            src="https://videos.pexels.com/video-files/7101912/7101912-hd_1920_1080_25fps.mp4"
            loop="true"
            muted="true"
            autoPlay="true"
            playsInline="true"
            className="hero-background-video"
          ></video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content-wrapper">
          <div id="ai-core" className="hero-ai-core">
            <div className="core-ring core-ring-1"></div>
            <div className="core-ring core-ring-2"></div>
            <div className="core-ring core-ring-3"></div>
            <div className="core-center">
              <svg
                width="64"
                xmlns="http://www.w3.org/2000/svg"
                height="64"
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
            <div id="core-particles" className="core-particles"></div>
          </div>
          <div id="task-tags" className="hero-task-tags">
            <div data-task="email" className="task-tag">
              <span className="task-tag-icon">
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
              </span>
              <span>Email Automation</span>
            </div>
            <div data-task="priority" className="task-tag">
              <span className="task-tag-icon">
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
                    <circle r="10" cx="12" cy="12"></circle>
                    <circle r="6" cx="12" cy="12"></circle>
                    <circle r="2" cx="12" cy="12"></circle>
                  </g>
                </svg>
              </span>
              <span>Task Prioritization</span>
            </div>
            <div data-task="analytics" className="task-tag">
              <span className="task-tag-icon">
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
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                    <path d="m19 9l-5 5l-4-4l-3 3"></path>
                  </g>
                </svg>
              </span>
              <span>Analytics</span>
            </div>
          </div>
          <div className="hero-text-content">
            <h1 className="hero-title">Supercharge Your Workflow with AI</h1>
            <p className="hero-subtitle">
              {' '}
              Organize tasks, automate routine work, and collaborate smarter—all
              in one place.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="hero-cta-group">
              <button className="btn-primary btn-lg btn">
                <span>Try Free AI Assistant</span>
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
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                    <circle r="2" cx="4" cy="20"></circle>
                  </g>
                </svg>
              </button>
              <button className="btn-outline btn-lg btn">
                <span className="home-demo-icon">
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
          <div className="hero-scroll-indicator">
            <span>Discover More</span>
            <div className="scroll-arrow">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
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
            </div>
          </div>
        </div>
      </section>
      <section id="smart-task-showcase">
        <div className="showcase-container">
          <div className="showcase-header">
            <h2 className="section-title">Your AI-Powered Workspace</h2>
            <p className="section-subtitle">
              {' '}
              Experience intelligent task management that adapts to your
              workflow
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="showcase-grid">
            <div id="card-1" className="showcase-card">
              <div className="card-glow-effect"></div>
              <div className="card-icon">
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
                    <circle r="10" cx="12" cy="12"></circle>
                    <circle r="6" cx="12" cy="12"></circle>
                    <circle r="2" cx="12" cy="12"></circle>
                  </g>
                </svg>
              </div>
              <h3 className="card-title">Smart Auto-Prioritization</h3>
              <p className="card-description">
                {' '}
                AI predicts what tasks need urgent attention based on deadlines,
                importance, and your workflow patterns.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="card-demo-visual">
                <div className="priority-item priority-high">
                  <span className="priority-badge">High</span>
                  <span className="priority-text">Q4 Presentation</span>
                </div>
                <div className="priority-item priority-medium">
                  <span className="priority-badge">Medium</span>
                  <span className="priority-text">Team Sync</span>
                </div>
                <div className="priority-low priority-item">
                  <span className="priority-badge">Low</span>
                  <span className="priority-text">Email Review</span>
                </div>
              </div>
            </div>
            <div id="card-2" className="showcase-card">
              <div className="card-glow-effect"></div>
              <div className="card-icon">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <h3 className="card-title">Natural Language Input</h3>
              <p className="card-description">
                {' '}
                Type tasks naturally and AI interprets context, deadlines, and
                priorities automatically.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="card-demo-visual">
                <div className="nl-input-demo">
                  <div id="typing-demo" className="typing-text">
                    <span>
                      {' '}
                      &quot;Schedule client call tomorrow at 3pm&quot;
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                  <div className="nl-result">
                    <svg
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span>Task created for Jan 15, 3:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
            <div id="card-3" className="showcase-card">
              <div className="card-glow-effect"></div>
              <div className="card-icon">
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
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                    <path d="m19 9l-5 5l-4-4l-3 3"></path>
                  </g>
                </svg>
              </div>
              <h3 className="card-title">Progress Tracker</h3>
              <p className="card-description">
                {' '}
                Visualize productivity with live graphs and insights that show
                your performance trends.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="card-demo-visual">
                <div className="progress-chart">
                  <div
                    data-value="65"
                    className="home-chart-bar1 chart-bar"
                  ></div>
                  <div
                    data-value="78"
                    className="home-chart-bar2 chart-bar"
                  ></div>
                  <div
                    data-value="92"
                    className="home-chart-bar3 chart-bar"
                  ></div>
                  <div
                    data-value="88"
                    className="home-chart-bar4 chart-bar"
                  ></div>
                  <div
                    data-value="95"
                    className="home-chart-bar5 chart-bar"
                  ></div>
                </div>
                <div className="progress-label">
                  <span>Weekly productivity up 35%</span>
                </div>
              </div>
            </div>
          </div>
          <div id="demo-panel" className="interactive-demo-panel">
            <div className="demo-panel-header">
              <h3>Try It Yourself: Drag &amp; Drop Tasks</h3>
              <p>Watch AI re-prioritize in real-time</p>
            </div>
            <div className="demo-tasks-container">
              <div draggable="true" data-priority="3" className="demo-task">
                <span className="task-handle">⋮⋮</span>
                <span className="task-name">Write blog post</span>
                <span className="task-time">2h</span>
              </div>
              <div draggable="true" data-priority="1" className="demo-task">
                <span className="task-handle">⋮⋮</span>
                <span className="task-name">Fix critical bug</span>
                <span className="task-time">30m</span>
              </div>
              <div draggable="true" data-priority="2" className="demo-task">
                <span className="task-handle">⋮⋮</span>
                <span className="task-name">Review PR</span>
                <span className="task-time">45m</span>
              </div>
            </div>
            <div id="ai-suggestion" className="ai-suggestion">
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
              <span>AI suggests: Prioritize critical bug first</span>
            </div>
          </div>
        </div>
      </section>
      <section id="performance-stats">
        <div className="stats-container">
          <div className="stats-grid">
            <div data-stat="tasks" className="stat-card">
              <div className="stat-icon">
                <svg
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div data-target="2000000" className="stat-number">
                <span>0</span>
              </div>
              <div className="stat-suffix">
                <span>+</span>
              </div>
              <div className="stat-label">
                <span>Tasks Completed</span>
              </div>
              <div className="stat-tooltip">
                <div className="tooltip-header">
                  <span>Real Impact</span>
                </div>
                <div className="tooltip-content">
                  <span>
                    {' '}
                    Teams worldwide have completed over 2M tasks using AI
                    automation
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div data-stat="time" className="stat-card">
              <div className="stat-icon">
                <svg
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 6v6l4 2"></path>
                    <circle r="10" cx="12" cy="12"></circle>
                  </g>
                </svg>
              </div>
              <div data-target="53" className="stat-number">
                <span>0</span>
              </div>
              <div className="stat-suffix">
                <span>%</span>
              </div>
              <div className="stat-label">
                <span>Time Saved</span>
              </div>
              <div className="stat-tooltip">
                <div className="tooltip-header">
                  <span>Example</span>
                </div>
                <div className="tooltip-content">
                  <span>
                    {' '}
                    Marketing team finished campaign in 2 days instead of 5
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div data-stat="boost" className="stat-card">
              <div className="stat-icon">
                <svg
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                  </g>
                </svg>
              </div>
              <div data-target="45" className="stat-number">
                <span>0</span>
              </div>
              <div className="stat-suffix">
                <span>x</span>
              </div>
              <div className="stat-label">
                <span>Productivity Boost</span>
              </div>
              <div className="stat-tooltip">
                <div className="tooltip-header">
                  <span>Success Story</span>
                </div>
                <div className="tooltip-content">
                  <span>
                    {' '}
                    Engineering teams shipped features 45x faster with AI
                    assistance
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div data-stat="users" className="stat-card">
              <div className="stat-icon">
                <svg
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle r="4" cx="9" cy="7"></circle>
                  </g>
                </svg>
              </div>
              <div data-target="150000" className="stat-number">
                <span>0</span>
              </div>
              <div className="stat-suffix">
                <span>+</span>
              </div>
              <div className="stat-label">
                <span>Active Users</span>
              </div>
              <div className="stat-tooltip">
                <div className="tooltip-header">
                  <span>Global Reach</span>
                </div>
                <div className="tooltip-content">
                  <span>
                    {' '}
                    Join 150K+ professionals optimizing their workflow
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="ai-chat-companion">
        <div className="chat-section-container">
          <div className="chat-content-wrapper">
            <div className="chat-text-content">
              <h2 className="section-title">AI Chat Companion</h2>
              <p className="section-subtitle">
                {' '}
                Your intelligent assistant is always ready to help you stay
                productive
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <ul className="chat-features-list">
                <li>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>Context-aware task suggestions</span>
                </li>
                <li>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>Draft emails and documents instantly</span>
                </li>
                <li>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>Real-time productivity insights</span>
                </li>
                <li>
                  <svg
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>Smart meeting summaries</span>
                </li>
              </ul>
              <button className="btn-primary btn">Start Chatting Now</button>
            </div>
            <div className="chat-interface-mockup">
              <div className="chat-window">
                <div className="chat-header">
                  <div className="chat-avatar">
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
                  <div className="chat-status">
                    <span className="status-name">AI Assistant</span>
                    <span className="status-indicator">Online</span>
                  </div>
                </div>
                <div id="chat-messages" className="chat-messages">
                  <div className="chat-message ai-message">
                    <div className="message-avatar">
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
                    <div className="message-content">
                      <p>
                        {' '}
                        Hi! I&apos;m your AI assistant. How can I help boost
                        your productivity today?
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                  </div>
                  <div className="chat-message user-message">
                    <div className="message-content">
                      <p>Draft email for client meeting</p>
                    </div>
                  </div>
                  <div className="chat-message ai-message">
                    <div className="message-avatar">
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
                    <div className="message-content">
                      <p>I&apos;ve drafted an email for your client meeting:</p>
                      <div className="draft-snippet">
                        <div className="draft-header">
                          <span>
                            {' '}
                            Subject: Follow-up on Q1 Strategy Meeting
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </div>
                        <div className="draft-body">
                          <span>
                            {' '}
                            Dear [Client Name],
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <br></br>
                          <br></br>
                          <span>
                            {' '}
                            Thank you for taking the time to meet with us today.
                            I wanted to follow up on the key points we
                            discussed...
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </div>
                        <div className="draft-actions">
                          <button className="draft-btn">Edit</button>
                          <button className="draft-btn-primary draft-btn">
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chat-input-area">
                  <input
                    type="text"
                    id="demo-chat-input"
                    placeholder="Try typing: 'Schedule meeting tomorrow at 2pm'"
                    className="chat-input"
                  />
                  <button id="chat-send-btn" className="chat-send-btn">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939"
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
            </div>
          </div>
        </div>
      </section>
      <section id="interactive-faq">
        <div className="faq-container">
          <div className="faq-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              {' '}
              Get answers to common questions about AIPerformance Hub
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="faq-content-wrapper">
            <div className="faq-assistant">
              <div id="assistant-character" className="assistant-character">
                <svg
                  width="80"
                  xmlns="http://www.w3.org/2000/svg"
                  height="80"
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
              <div id="thought-bubble" className="assistant-thought-bubble">
                <span>Hover over questions to get hints!</span>
              </div>
            </div>
            <div className="faq-accordion">
              <div
                data-hint="Our AI learns from your work patterns to provide personalized suggestions"
                className="faq-item"
              >
                <div className="faq-question">
                  <h3>How does the AI understand my tasks?</h3>
                  <div className="faq-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
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
                  </div>
                </div>
                <div className="faq-answer">
                  <p>
                    {' '}
                    Our AI uses natural language processing to understand task
                    context, deadlines, and priorities. It learns from your work
                    patterns and adapts to your unique workflow over time,
                    becoming more accurate with each interaction.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div
                data-hint="Enterprise-grade security with end-to-end encryption protects your data"
                className="faq-item"
              >
                <div className="faq-question">
                  <h3>Is my data secure and private?</h3>
                  <div className="faq-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
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
                  </div>
                </div>
                <div className="faq-answer">
                  <p>
                    {' '}
                    Absolutely. We use enterprise-grade encryption, secure cloud
                    infrastructure, and comply with GDPR and SOC 2 standards.
                    Your data is never shared with third parties and is
                    encrypted both in transit and at rest.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div
                data-hint="Seamlessly connects with 100+ popular productivity tools"
                className="faq-item"
              >
                <div className="faq-question">
                  <h3>What integrations are available?</h3>
                  <div className="faq-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
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
                  </div>
                </div>
                <div className="faq-answer">
                  <p>
                    {' '}
                    AIPerformance Hub integrates with over 100 tools including
                    Slack, Google Workspace, Microsoft 365, Asana, Trello,
                    GitHub, and more. Our API also allows custom integrations
                    for your specific needs.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div
                data-hint="Start free, then choose from flexible plans for teams of any size"
                className="faq-item"
              >
                <div className="faq-question">
                  <h3>What pricing plans do you offer?</h3>
                  <div className="faq-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
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
                  </div>
                </div>
                <div className="faq-answer">
                  <p>
                    {' '}
                    We offer a free tier with basic features, Pro plan at
                    $12/month for individuals, and Team plans starting at
                    $10/user/month with volume discounts. Enterprise plans with
                    custom features are also available.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div
                data-hint="24/7 support via chat, email, and comprehensive documentation"
                className="faq-item"
              >
                <div className="faq-question">
                  <h3>How does customer support work?</h3>
                  <div className="faq-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
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
                  </div>
                </div>
                <div className="faq-answer">
                  <p>
                    {' '}
                    We provide 24/7 support through our AI chat assistant, email
                    support within 4 hours, and priority phone support for
                    Enterprise customers. Our knowledge base and video tutorials
                    are always available.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div
                data-hint="Get started in minutes with our intuitive onboarding flow"
                className="faq-item"
              >
                <div className="faq-question">
                  <h3>How long does setup take?</h3>
                  <div className="faq-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
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
                  </div>
                </div>
                <div className="faq-answer">
                  <p>
                    {' '}
                    Setup takes less than 5 minutes. Simply create an account,
                    connect your preferred tools, and our AI will guide you
                    through a personalized onboarding process. You can start
                    managing tasks immediately.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="community-section">
        <div className="community-container">
          <div className="community-header">
            <h2 className="section-title">Connect, Learn, Grow Together</h2>
            <p className="section-subtitle">
              {' '}
              Join a thriving community of productivity enthusiasts
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="community-content">
            <div className="community-users">
              <h3 className="community-subsection-title">Active Members</h3>
              <div className="users-grid">
                <div className="home-user-avatar1 user-avatar">
                  <span>SJ</span>
                </div>
                <div className="home-user-avatar2 user-avatar">
                  <span>MK</span>
                </div>
                <div className="home-user-avatar3 user-avatar">
                  <span>TC</span>
                </div>
                <div className="home-user-avatar4 user-avatar">
                  <span>AL</span>
                </div>
                <div className="home-user-avatar5 user-avatar">
                  <span>RW</span>
                </div>
                <div className="home-user-avatar6 user-avatar">
                  <span>DN</span>
                </div>
                <div className="home-user-avatar7 user-avatar">
                  <span>LP</span>
                </div>
                <div className="home-user-avatar8 user-avatar">
                  <span>JB</span>
                </div>
                <div className="home-user-avatar9 user-avatar">
                  <span>KM</span>
                </div>
              </div>
              <div className="users-count">
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle r="4" cx="9" cy="7"></circle>
                  </g>
                </svg>
                <span>45,892 members online now</span>
              </div>
            </div>
            <div id="community-wall" className="community-wall">
              <div className="wall-header">
                <h3 className="community-subsection-title">
                  Live Productivity Tips
                </h3>
                <div className="wall-live-indicator">
                  <span className="live-dot"></span>
                  <span>Live</span>
                </div>
              </div>
              <div id="wall-feed" className="wall-feed">
                <div className="wall-tip">
                  <div className="tip-icon">
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
                        <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                        <circle r="2" cx="4" cy="20"></circle>
                      </g>
                    </svg>
                  </div>
                  <div className="tip-content">
                    <p className="tip-text">
                      {' '}
                      Break large tasks into 25-minute focused sprints for
                      maximum productivity
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <span className="tip-time">Just now</span>
                  </div>
                </div>
                <div className="wall-tip">
                  <div className="tip-icon">
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
                        <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                        <circle r="2" cx="4" cy="20"></circle>
                      </g>
                    </svg>
                  </div>
                  <div className="tip-content">
                    <p className="tip-text">
                      {' '}
                      Use AI to batch similar tasks together for efficient
                      context switching
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <span className="tip-time">2 min ago</span>
                  </div>
                </div>
                <div className="wall-tip">
                  <div className="tip-icon">
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
                        <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                        <circle r="2" cx="4" cy="20"></circle>
                      </g>
                    </svg>
                  </div>
                  <div className="tip-content">
                    <p className="tip-text">
                      {' '}
                      Schedule your most important tasks during peak energy
                      hours
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <span className="tip-time">5 min ago</span>
                  </div>
                </div>
                <div className="wall-tip">
                  <div className="tip-icon">
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
                        <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                        <circle r="2" cx="4" cy="20"></circle>
                      </g>
                    </svg>
                  </div>
                  <div className="tip-content">
                    <p className="tip-text">
                      {' '}
                      Review and adjust your weekly goals every Monday morning
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </p>
                    <span className="tip-time">8 min ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="community-stats">
              <div className="community-stat-item">
                <div className="stat-item-icon">
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
                      <circle r="10" cx="12" cy="12"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path>
                    </g>
                  </svg>
                </div>
                <div className="stat-item-value">
                  <span>150K+</span>
                </div>
                <div className="stat-item-label">
                  <span>Global Members</span>
                </div>
              </div>
              <div className="community-stat-item">
                <div className="stat-item-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <div className="stat-item-value">
                  <span>25K</span>
                </div>
                <div className="stat-item-label">
                  <span>Daily Discussions</span>
                </div>
              </div>
              <div className="community-stat-item">
                <div className="stat-item-icon">
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
                      <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978m7-7.318v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978M18 9h1.5a1 1 0 0 0 0-5H18M4 22h16"></path>
                      <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm0 0H4.5a1 1 0 0 1 0-5H6"></path>
                    </g>
                  </svg>
                </div>
                <div className="stat-item-value">
                  <span>500+</span>
                </div>
                <div className="stat-item-label">
                  <span>Success Stories</span>
                </div>
              </div>
            </div>
          </div>
          <div className="community-cta">
            <button className="btn-primary btn-lg btn">
              Join Our Community
            </button>
            <p>Start connecting with productivity experts today</p>
          </div>
        </div>
      </section>
      <Footer></Footer>
      
    </div>
  )
}

export default Home
