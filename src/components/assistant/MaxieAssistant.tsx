import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi'

const quickReplies = [
  {
    q: 'What do you build?',
    a: 'I build AI-powered full stack products — from MAXie desktop assistant to Multimax AI Hub.',
  },
  {
    q: 'Are you available for work?',
    a: 'Yes! I am open to freelance, internships, and collaboration on AI products.',
  },
  {
    q: 'View your best project',
    a: 'Check out MAXie and Multimax AI Hub in the Projects section below.',
  },
]

export function MaxieAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: 'bot' | 'user'; text: string }[]>([
    {
      role: 'bot',
      text: "Hi! I'm MAXie — Rajasaranya's AI assistant. Ask me anything about skills, projects, or availability.",
    },
  ])
  const [input, setInput] = useState('')

  const sendMessage = (text: string) => {
    if (!text.trim()) return

    setMessages((prev) => [...prev, { role: 'user', text }])

    const reply =
      quickReplies.find((item) => text.toLowerCase().includes(item.q.toLowerCase().slice(0, 12)))
        ?.a ??
      "Great question! Explore the portfolio sections or reach out via the Contact form — Rajasaranya would love to connect."

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'bot', text: reply }])
    }, 600)

    setInput('')
  }

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-[min(360px,calc(100vw-3rem))] glass border border-white/10 rounded-2xl shadow-glass overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.03]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-sm font-bold">
                  M
                </div>
                <div>
                  <p className="text-sm font-semibold">MAXie</p>
                  <p className="text-[10px] text-muted">AI Portfolio Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close MAXie"
              >
                <FiX className="w-4 h-4" />
              </button>
            </div>

            <div className="h-64 overflow-y-auto p-4 space-y-3" data-lenis-prevent>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-accent/80 text-white rounded-br-md'
                        : 'bg-white/[0.06] text-white/85 rounded-bl-md border border-white/5'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="px-3 pb-3 flex flex-wrap gap-2">
              {quickReplies.map((item) => (
                <button
                  key={item.q}
                  onClick={() => sendMessage(item.q)}
                  className="text-[10px] px-2.5 py-1 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-accent/40 transition-colors"
                >
                  {item.q}
                </button>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                sendMessage(input)
              }}
              className="flex items-center gap-2 px-3 pb-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask MAXie..."
                className="flex-1 bg-white/[0.05] border border-white/10 rounded-full px-4 py-2 text-sm outline-none focus:border-accent/40 transition-colors"
              />
              <button
                type="submit"
                className="p-2.5 rounded-full bg-accent hover:bg-accent-light transition-colors"
                aria-label="Send message"
              >
                <FiSend className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 rounded-full bg-gradient-to-br from-accent to-secondary shadow-glow-purple flex items-center justify-center border border-white/20"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open MAXie assistant"
      >
        <FiMessageCircle className="w-6 h-6 text-white" />
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-bg" />
      </motion.button>
    </div>
  )
}
