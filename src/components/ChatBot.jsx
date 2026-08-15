import { useMemo, useState } from "react";
import { Bot, MessageCircle, Send, Sparkles, User, X } from "lucide-react";

const quickPrompts = [
  "What services do you offer?",
  "Can you help with IoT?",
  "Tell me about hardware design",
  "How can I contact you?"
];

const initialMessages = [
  {
    role: "bot",
    text: "Hi, I am the SmartEdgeIO assistant. Ask me about embedded systems, IoT, edge AI, hardware design or product engineering."
  }
];

function getBotReply(message) {
  const text = message.toLowerCase();

  if (text.includes("contact") || text.includes("email") || text.includes("call") || text.includes("quote")) {
    return "You can reach SmartEdgeIO at contact@smartedgeio.com. You can also jump to the contact section and share your project details.";
  }

  if (text.includes("iot") || text.includes("cloud") || text.includes("ota") || text.includes("device")) {
    return "For IoT, SmartEdgeIO supports secure connectivity, cloud integration, dashboards, OTA updates and device management for connected products.";
  }

  if (text.includes("ai") || text.includes("edge") || text.includes("machine") || text.includes("vision")) {
    return "For AI at the edge, SmartEdgeIO can help with machine learning, computer vision and predictive analytics on intelligent devices.";
  }

  if (text.includes("hardware") || text.includes("pcb") || text.includes("schematic") || text.includes("prototype")) {
    return "For hardware design, SmartEdgeIO works on schematics, PCB layout, prototyping, validation and production support.";
  }

  if (text.includes("embedded") || text.includes("firmware") || text.includes("rtos") || text.includes("linux") || text.includes("driver")) {
    return "For embedded systems, SmartEdgeIO handles firmware, BSP, RTOS, Linux and driver development for connected devices.";
  }

  if (text.includes("display") || text.includes("hmi") || text.includes("touch") || text.includes("ui")) {
    return "For Display and HMI work, SmartEdgeIO builds custom UI, display controller integrations, touch interfaces and smart HMI solutions.";
  }

  if (text.includes("service") || text.includes("offer") || text.includes("do")) {
    return "SmartEdgeIO offers embedded systems, IoT solutions, AI at the edge, Display and HMI, hardware design and end-to-end product engineering.";
  }

  return "I can help with questions about SmartEdgeIO services, industries, embedded systems, IoT, AI at the edge, hardware design and product engineering. For a project discussion, contact contact@smartedgeio.com.";
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(initialMessages);

  const hasUnread = useMemo(() => !open && messages.length === 1, [messages.length, open]);

  const sendMessage = (value = input) => {
    const trimmed = value.trim();

    if (!trimmed) {
      return;
    }

    const reply = getBotReply(trimmed);

    setMessages((current) => [
      ...current,
      { role: "user", text: trimmed },
      { role: "bot", text: reply }
    ]);
    setInput("");
    setOpen(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-4 sm:bottom-6 sm:right-6">
      {open && (
        <section className="w-[calc(100vw-2.5rem)] max-w-[390px] overflow-hidden rounded-2xl border border-white/10 bg-white text-slate-900 shadow-2xl">
          <header className="flex items-center justify-between bg-[#020817] px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-[#087ff5]">
                <Bot size={21} />
              </div>
              <div>
                <h2 className="text-sm font-bold">SmartEdgeIO Assistant</h2>
                <p className="text-xs text-slate-300">Online now</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </header>

          <div className="max-h-[390px] space-y-4 overflow-y-auto bg-slate-50 px-4 py-5">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`flex gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                {message.role === "bot" && (
                  <div className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#e5f3ff] text-[#087ff5]">
                    <Bot size={15} />
                  </div>
                )}
                <p className={`max-w-[78%] rounded-2xl px-4 py-3 text-sm leading-6 ${message.role === "user" ? "bg-[#087ff5] text-white" : "bg-white text-slate-700 shadow-sm"}`}>
                  {message.text}
                </p>
                {message.role === "user" && (
                  <div className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-slate-200 text-slate-600">
                    <User size={15} />
                  </div>
                )}
              </div>
            ))}

            <div className="flex flex-wrap gap-2 pt-1">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-[#087ff5] hover:text-[#087ff5]"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-slate-200 bg-white p-4">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              type="text"
              placeholder="Ask about services..."
              className="min-w-0 flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#087ff5]"
              aria-label="Chat message"
            />
            <button
              type="submit"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#087ff5] text-white transition hover:bg-[#1597ff]"
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </form>

          <a href="#contact" className="flex items-center justify-center gap-2 border-t border-slate-200 bg-white px-4 py-3 text-xs font-bold text-[#087ff5] transition hover:bg-slate-50">
            <Sparkles size={14} /> Start a project discussion
          </a>
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#087ff5] text-white shadow-2xl shadow-[#087ff5]/30 transition hover:scale-105 hover:bg-[#1597ff]"
        aria-label="Open chat assistant"
      >
        {open ? <X size={26} /> : <MessageCircle size={28} />}
        {hasUnread && <span className="absolute right-1 top-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-400" />}
      </button>
    </div>
  );
}