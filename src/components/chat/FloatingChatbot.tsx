"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { X, Send, Minus, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

// ─────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────
const KATIA_AVATAR = "/assets/katia-avatar.png";
const WA_LINK = "https://wa.me/5542999217736";

const WELCOME_MESSAGE: ChatMessage = {
  id: "katia-welcome",
  role: "assistant",
  content:
    "Olá! Sou a **Katia**, secretária virtual da **Fedumenti Group**. 😊\n\nVocê já é nosso cliente?\n\n**1)** Sim, sou cliente\n**2)** Não, sou novo(a)",
};

const QUICK_REPLIES = [
  { label: "💰 Orçamento",         value: "1) Solicitar Orçamento" },
  { label: "📅 Diagnóstico",       value: "2) Agendar Diagnóstico" },
  { label: "🛠️ Suporte",           value: "3) Suporte Técnico" },
  { label: "👤 Falar com Humano",  value: "5) Falar com Humano" },
];

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────
function hasWhatsAppLink(text: string) {
  return /wa\.me\/\d+/.test(text) || /whatsapp/i.test(text);
}

function renderMarkdown(text: string) {
  return text.split("\n").map((line, lineIdx, arr) => {
    const parts = line.split(/\*\*(.+?)\*\*/g);
    return (
      <span key={lineIdx}>
        {parts.map((p, i) =>
          i % 2 === 1 ? <strong key={i}>{p}</strong> : p
        )}
        {lineIdx < arr.length - 1 && <br />}
      </span>
    );
  });
}

// ─────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────
function KatiaAvatar({ size = 32 }: { size?: number }) {
  return (
    <div
      className="shrink-0 rounded-full overflow-hidden ring-2 ring-primary/20 bg-primary/10"
      style={{ width: size, height: size }}
    >
      <Image
        src={KATIA_AVATAR}
        alt="KATIA"
        width={size}
        height={size}
        className="object-cover w-full h-full"
      />
    </div>
  );
}

function UserAvatar() {
  return (
    <div className="shrink-0 h-7 w-7 rounded-full bg-accent/60 flex items-center justify-center">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 text-foreground">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    </div>
  );
}

// WhatsApp SVG icon
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function WhatsAppCTA() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 mt-3 px-5 py-2.5 rounded-full bg-green-500 hover:bg-green-400 text-white text-sm font-bold shadow-lg shadow-green-500/30 transition-all duration-200 hover:scale-105 active:scale-95"
    >
      <WhatsAppIcon />
      Falar com nossa equipe agora
    </a>
  );
}

function MessageBubble({ m }: { m: ChatMessage }) {
  const isUser = m.role === "user";
  const showWaButton = !isUser && hasWhatsAppLink(m.content);

  const displayText = m.content
    .replace(/https?:\/\/wa\.me\/\d+/g, "")
    .replace(/Acesse:\s*/gi, "")
    .replace(/WhatsApp:\s*/gi, "")
    .trim();

  return (
    <div className={cn("flex items-end gap-2 max-w-full", isUser ? "flex-row-reverse" : "flex-row")}>
      {isUser ? <UserAvatar /> : <KatiaAvatar size={28} />}
      <div className={cn(
        "max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
        isUser
          ? "bg-primary text-primary-foreground rounded-br-sm"
          : "bg-accent/30 border border-border/40 text-foreground rounded-bl-sm"
      )}>
        {renderMarkdown(displayText)}
        {showWaButton && <WhatsAppCTA />}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────
export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [threadId, setThreadId] = useState<string | null>(null);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    const userMsg: ChatMessage = { id: Date.now().toString(), role: "user", content: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);
    setShowQuickReplies(false);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, threadId }),
      });
      const data = await res.json();
      if (data.threadId) setThreadId(data.threadId);

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: data.reply ?? data.error ?? "Desculpe, não consegui processar sua mensagem.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Erro de conexão. Fale conosco via WhatsApp: wa.me/5542999217736",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  return (
    <>
      {/* ── Floating Bubble (KATIA's face) ── */}
      {!isOpen && (
        <button
          id="chatbot-open-btn"
          onClick={() => { setIsOpen(true); setIsMinimized(false); }}
          aria-label="Falar com a KATIA"
          className="fixed bottom-6 right-6 z-[9998] h-16 w-16 rounded-full overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)] ring-[3px] ring-primary hover:ring-4 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <Image
            src={KATIA_AVATAR}
            alt="KATIA - Secretária Virtual"
            width={64}
            height={64}
            className="object-cover w-full h-full"
            priority
          />
          {/* Online dot */}
          <span className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full bg-green-500 ring-2 ring-white" />
        </button>
      )}

      {/* ── Chat Window ── */}
      {isOpen && (
        <div
          id="chatbot-window"
          role="dialog"
          aria-label="Chat com KATIA — Fedumenti Group"
          className={cn(
            "fixed bottom-6 right-6 z-[9999] w-[92vw] max-w-[400px] flex flex-col",
            "bg-card/80 backdrop-blur-2xl border border-border/60 rounded-3xl shadow-2xl overflow-hidden",
            "transition-all duration-300 origin-bottom-right",
            "animate-in fade-in slide-in-from-bottom-4",
            isMinimized ? "h-[72px]" : "h-[620px]"
          )}
        >
          {/* ── Header ── */}
          <header className="flex shrink-0 items-center justify-between px-4 py-3 border-b border-border/50 bg-gradient-to-r from-primary/10 to-transparent">
            <div className="flex items-center gap-3">
              <KatiaAvatar size={40} />
              <div>
                <p className="text-sm font-bold text-foreground leading-tight">KATIA</p>
                <p className="text-[10px] text-muted-foreground leading-tight">Secretária Virtual · Fedumenti Group</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-green-500">Online</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {/* WhatsApp Shortcut */}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                title="Abrir WhatsApp"
                className="p-2 rounded-lg text-green-500 hover:bg-green-500/10 transition-colors"
              >
                <WhatsAppIcon />
              </a>
              <button
                aria-label="Minimizar"
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/40 transition-colors"
              >
                <Minus size={16} />
              </button>
              <button
                aria-label="Fechar"
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/40 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </header>

          {/* ── Messages ── */}
          {!isMinimized && (
            <>
              <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scroll-smooth">
                {messages.map((m) => (
                  <MessageBubble key={m.id} m={m} />
                ))}

                {/* Quick replies */}
                {showQuickReplies && messages.length === 1 && !isLoading && (
                  <div className="flex flex-wrap gap-2 pt-1 pl-8">
                    {QUICK_REPLIES.map((qr) => (
                      <button
                        key={qr.value}
                        onClick={() => sendMessage(qr.value)}
                        className="text-xs px-3 py-1.5 rounded-full border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all font-medium"
                      >
                        {qr.label}
                      </button>
                    ))}
                  </div>
                )}

                {/* Typing indicator */}
                {isLoading && (
                  <div className="flex items-end gap-2">
                    <KatiaAvatar size={28} />
                    <div className="bg-accent/30 border border-border/40 rounded-2xl rounded-bl-sm px-4 py-3">
                      <div className="flex gap-1 items-center h-3">
                        {[0, 0.2, 0.4].map((d, i) => (
                          <span
                            key={i}
                            className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-bounce"
                            style={{ animationDelay: `${d}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* ── Input Footer ── */}
              <footer className="shrink-0 p-3 border-t border-border/50 bg-background/40 backdrop-blur-md">
                <form onSubmit={handleSubmit} className="flex items-center gap-2">
                  <input
                    id="chatbot-input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Pergunte algo à KATIA..."
                    disabled={isLoading}
                    className="flex-1 min-w-0 bg-accent/20 text-foreground text-sm rounded-2xl px-4 py-2.5 outline-none border border-transparent focus:border-primary/40 transition-colors placeholder:text-muted-foreground disabled:opacity-50"
                  />
                  <button
                    id="chatbot-send-btn"
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    aria-label="Enviar"
                    className="shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md shadow-primary/30 hover:scale-105 active:scale-95 disabled:opacity-40 disabled:scale-100 transition-all"
                  >
                    {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                  </button>
                </form>
                <p className="text-center text-[10px] text-muted-foreground/50 mt-2 select-none">
                  KATIA · Secretária Virtual · Fedumenti Group
                </p>
              </footer>
            </>
          )}
        </div>
      )}
    </>
  );
}
