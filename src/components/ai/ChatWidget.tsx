"use client";

import { useChat } from "@ai-sdk/react";
import { useState, useRef, useEffect } from "react";
import { Bot, MessageSquare, Send, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, status, error, sendMessage } = useChat() as any;
  const isLoading = status === 'submitted' || status === 'streaming';
  const [localInput, setLocalInput] = useState("");

  const handleCustomSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!localInput.trim() || isLoading) return;
    sendMessage({ role: 'user', content: localInput });
    setLocalInput('');
  };
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const springConfig = { type: "spring" as const, stiffness: 300, damping: 24 };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        transition={springConfig}
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full flex items-center justify-center transition-opacity duration-300 shadow-xl",
          "bg-accent-teal text-[#0d1117] border border-white/20 hover:shadow-[0_0_20px_5px_rgba(100,244,172,0.3)]",
          isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        )}
      >
        <Sparkles size={20} strokeWidth={1.5} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={springConfig}
            className="fixed bottom-6 right-6 z-50 w-[300px] h-[400px] bg-background border border-border rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-3 bg-card border-b border-border flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent-teal/20 text-accent-teal flex items-center justify-center">
                  <Bot size={16} />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-foreground flex items-center gap-1">
                    Ask Paco <Sparkles size={12} className="text-accent-teal" />
                  </h3>
                  <p className="text-[10px] text-muted-foreground font-mono">Status: Online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="w-7 h-7 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
              {messages.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.2, ...springConfig }}
                  className="text-center text-muted-foreground text-sm mt-8"
                >
                  <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center mx-auto mb-3 border border-border">
                    <Bot size={20} className="text-accent-teal" />
                  </div>
                  <p className="leading-relaxed text-xs">Hi! I'm Paco, Antonio's AI assistant.<br/>Ask me about his experience, teaching background, or tech stack!</p>
                </motion.div>
              )}
              {error && (
                <div className="p-3 rounded-lg bg-red-900/20 border border-red-900/50 text-red-400 text-xs">
                  {error.message || "Something went wrong connecting to the AI."}
                </div>
              )}
              {messages.map((m: any, index: number) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={springConfig}
                  key={m.id || index} 
                  className={cn("flex", m.role === 'user' ? 'justify-end' : 'justify-start')}
                >
                  <div className={cn(
                    "max-w-[85%] p-3 text-xs leading-relaxed rounded-xl",
                    m.role === 'user' 
                      ? 'bg-accent-teal text-[#0d1117] rounded-tr-sm font-medium' 
                      : 'bg-card border border-border text-foreground rounded-tl-sm'
                  )}>
                    {m.parts ? m.parts.map((part: any, i: number) => part.type === 'text' ? <span key={i}>{part.text}</span> : null) : (m as any).content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="p-3 bg-card border border-border rounded-xl rounded-tl-sm text-foreground flex gap-1.5">
                    <motion.span animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-muted-foreground rounded-full" />
                    <motion.span animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-muted-foreground rounded-full" />
                    <motion.span animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-muted-foreground rounded-full" />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleCustomSubmit} className="p-3 bg-card border-t border-border">
              <div className="relative flex items-center">
                <input
                  value={localInput}
                  onChange={(e) => setLocalInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="w-full pl-3 pr-10 py-2 rounded-md border border-border bg-background focus:bg-background focus:outline-none focus:ring-1 focus:ring-accent-teal focus:border-accent-teal transition-all text-xs text-foreground placeholder:text-muted-foreground"
                />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit" 
                  disabled={isLoading || !localInput.trim()}
                  className="absolute right-1.5 w-7 h-7 bg-accent-teal text-[#0d1117] rounded-[4px] flex items-center justify-center disabled:opacity-50 transition-opacity"
                >
                  <Send size={12} />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
