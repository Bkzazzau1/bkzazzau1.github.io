import { motion } from "framer-motion";
import {
    Bot,
    Crown,
    Gem,
    LayoutDashboard,
    Menu,
    MessageCircle,
    RotateCcw,
    Search,
    Send,
    ShieldCheck,
    ShoppingBag,
    Sparkles,
    Star,
    Truck,
    UserRound,
    X,
} from "lucide-react";
import { useMemo, useState } from "react";

function Button({ children, className = "", size, variant, ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-xl font-medium transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return <div className={`bg-white ${className}`}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

const products = [
  {
    id: 1,
    name: "Luxury Black Evening Dress",
    category: "Fashion Dress",
    price: "₦58,000",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Gold Pattern Silk Scarf",
    category: "Scarf",
    price: "₦18,500",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Elegant Ladies Handbag",
    category: "Bags",
    price: "₦45,000",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Premium Ankara Gown",
    category: "Gowns",
    price: "₦38,000",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Classy Women Abaya Set",
    category: "Abaya",
    price: "₦52,000",
    rating: 4.9,
  },
  {
    id: 6,
    name: "Royal Ladies Kaftan",
    category: "Kaftan",
    price: "₦48,500",
    rating: 4.8,
  },
  {
    id: 7,
    name: "Corporate Women Blazer",
    category: "Corporate Wear",
    price: "₦42,000",
    rating: 4.6,
  },
  {
    id: 8,
    name: "Luxury Women Heels",
    category: "Shoes",
    price: "₦39,000",
    rating: 4.7,
  },
  {
    id: 9,
    name: "Gold Fashion Jewelry Set",
    category: "Accessories",
    price: "₦25,000",
    rating: 4.8,
  },
];

const knowledgeBase = [
  {
    intent: "delivery",
    keywords: [
      "delivery",
      "deliver",
      "location",
      "kaduna",
      "abuja",
      "lagos",
      "shipping",
      "nationwide",
      "send",
      "waybill",
    ],
    answer:
      "Shemar Collection offers delivery to major locations in Nigeria including Kaduna, Abuja, Lagos, Kano and other cities. Delivery time depends on the customer’s location and selected delivery option.",
  },
  {
    intent: "payment",
    keywords: ["payment", "pay", "card", "transfer", "bank", "cash", "pos"],
    answer:
      "We accept bank transfer, card payment and payment on delivery where available. Customers receive payment confirmation before their order is processed.",
  },
  {
    intent: "return_policy",
    keywords: ["return", "refund", "exchange", "wrong", "damaged", "replace"],
    answer:
      "Products can be returned or exchanged if they are damaged, wrong, or different from what was ordered. The customer should contact support within 24 hours of delivery.",
  },
  {
    intent: "order",
    keywords: ["order", "buy", "place", "purchase", "cart", "checkout"],
    answer:
      "To place an order, select your preferred fashion item, add it to cart, proceed to checkout, enter your delivery details and choose your payment method.",
  },
  {
    intent: "tracking",
    keywords: ["track", "tracking", "where", "status", "my order", "dispatch"],
    answer:
      "Customers can track their orders by contacting support with their order number. The system can also provide order status updates when tracking is enabled.",
  },
  {
    intent: "products",
    keywords: [
      "product",
      "sell",
      "scarf",
      "bag",
      "bags",
      "dress",
      "gown",
      "abaya",
      "kaftan",
      "heels",
      "shoe",
      "jewelry",
      "accessories",
      "women",
      "ladies",
      "fashion",
      "clothes",
      "available",
    ],
    answer:
      "Shemar Collection specializes in women’s fashion items such as luxury dresses, gowns, scarves, handbags, abayas, kaftans, corporate wear, heels and fashion accessories.",
  },
  {
    intent: "support",
    keywords: [
      "support",
      "contact",
      "help",
      "agent",
      "customer care",
      "phone",
      "whatsapp",
    ],
    answer:
      "You can contact Shemar Collection support through WhatsApp, phone call, or the customer support form on the website. A human support officer can assist when the chatbot cannot resolve the issue.",
  },
];

function detectIntent(message) {
  const text = message.toLowerCase();
  let bestMatch = null;
  let bestScore = 0;

  knowledgeBase.forEach((item) => {
    const score = item.keywords.reduce((total, keyword) => {
      return text.includes(keyword) ? total + 1 : total;
    }, 0);

    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  });

  if (!bestMatch || bestScore === 0) {
    return {
      intent: "unknown",
      answer:
        "Sorry, I could not understand your request clearly. Please contact a customer service officer for further assistance.",
    };
  }

  return bestMatch;
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#D4AF37]/20 bg-black/90 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37] shadow-lg shadow-[#D4AF37]/10">
            <Crown size={23} />
          </div>

          <div>
            <h1 className="text-xl font-black tracking-tight text-white">
              Shemar Collection
            </h1>
            <p className="text-xs text-[#D4AF37]">
              Women Fashion • Luxury Style • Support
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-7 text-sm font-medium text-neutral-300 md:flex">
          <a href="#home" className="hover:text-[#D4AF37]">
            Home
          </a>
          <a href="#products" className="hover:text-[#D4AF37]">
            Products
          </a>
          <a href="#support" className="hover:text-[#D4AF37]">
            Support
          </a>
          <a href="#admin" className="hover:text-[#D4AF37]">
            Admin Demo
          </a>
        </nav>

        <Button className="hidden rounded-2xl bg-[#D4AF37] px-5 text-black hover:bg-[#f0cc5a] md:inline-flex">
          Shop Premium
        </Button>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#D4AF37]/20 bg-black px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium text-neutral-300">
            <a href="#home">Home</a>
            <a href="#products">Products</a>
            <a href="#support">Support</a>
            <a href="#admin">Admin Demo</a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#D4AF3725,transparent_35%),radial-gradient(circle_at_bottom_left,#ffffff12,transparent_35%)]" />
      <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(135deg,rgba(212,175,55,0.08),transparent,rgba(212,175,55,0.05))]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-2 text-sm text-[#D4AF37]">
            <Sparkles size={16} />
            AI Customer Service Chatbot Demo
          </p>

          <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
            Premium women’s fashion with instant AI support.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-neutral-300">
            Shemar Collection is a luxury women’s fashion e-commerce demo used
            to showcase an AI-based customer service chatbot. Customers can ask
            about dresses, scarves, bags, abayas, delivery, payment, returns and
            order support while shopping online.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button className="rounded-2xl bg-[#D4AF37] px-6 text-black shadow-lg shadow-[#D4AF37]/20 hover:bg-[#f0cc5a]">
              Explore Collection
            </Button>

            <Button className="rounded-2xl border border-[#D4AF37]/40 bg-transparent px-6 text-[#D4AF37] hover:bg-[#D4AF37]/10">
              Try Chatbot
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="rounded-[2rem] border border-[#D4AF37]/25 bg-white/5 p-4 shadow-2xl shadow-[#D4AF37]/10 backdrop-blur-xl">
            <CardContent className="p-0">
              <div className="rounded-[1.5rem] border border-[#D4AF37]/20 bg-gradient-to-br from-[#15110A] to-black p-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#D4AF37]">Featured Product</p>
                    <h3 className="mt-1 text-2xl font-bold">
                      Luxury Black Evening Dress
                    </h3>
                  </div>

                  <div className="rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 p-3 text-[#D4AF37]">
                    <Gem />
                  </div>
                </div>

                <div className="mt-6 flex h-56 items-center justify-center rounded-[1.5rem] border border-[#D4AF37]/20 bg-gradient-to-br from-[#D4AF37]/20 via-black to-[#2b2107]">
                  <ShoppingBag size={90} className="text-[#D4AF37]" />
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-black text-[#D4AF37]">
                      ₦58,000
                    </p>
                    <p className="flex items-center gap-1 text-sm text-neutral-300">
                      <Star
                        size={15}
                        className="fill-[#D4AF37] text-[#D4AF37]"
                      />{" "}
                      4.9 rating
                    </p>
                  </div>

                  <Button className="rounded-2xl bg-[#D4AF37] text-black hover:bg-[#f0cc5a]">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceHighlights() {
  const items = [
    {
      icon: Truck,
      title: "Nationwide Delivery",
      text: "Fast delivery support across major Nigerian cities.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Payment",
      text: "Supports transfer, card payment and confirmed checkout.",
    },
    {
      icon: RotateCcw,
      title: "Easy Return Support",
      text: "Customers can ask about return and exchange policy.",
    },
  ];

  return (
    <section className="bg-[#070707] py-10">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 md:grid-cols-3">
        {items.map((item) => (
          <Card
            key={item.title}
            className="rounded-3xl border border-[#D4AF37]/20 bg-[#111111] shadow-lg shadow-black/40"
          >
            <CardContent className="flex gap-4 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#D4AF37] text-black">
                <item.icon size={22} />
              </div>
              <div>
                <h3 className="font-bold text-white">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-neutral-400">
                  {item.text}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Products() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return products.filter((product) =>
      `${product.name} ${product.category}`
        .toLowerCase()
        .includes(query.toLowerCase()),
    );
  }, [query]);

  return (
    <section id="products" className="bg-black px-4 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">
              Women’s Collection
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-white md:text-4xl">
              Luxury fashion items for women
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-400">
              Explore premium dresses, scarves, bags, abayas, kaftans, corporate
              wear, heels and fashion accessories designed for elegant women.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-2xl border border-[#D4AF37]/30 bg-[#111111] px-4 py-3 shadow-sm md:w-80">
            <Search size={18} className="text-[#D4AF37]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search women fashion..."
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-neutral-500"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden rounded-[1.7rem] border border-[#D4AF37]/20 bg-[#111111] shadow-lg shadow-black/40 transition hover:-translate-y-1 hover:border-[#D4AF37]/60 hover:shadow-[#D4AF37]/10"
            >
              <CardContent className="p-4">
                <div className="flex h-48 items-center justify-center rounded-[1.3rem] border border-[#D4AF37]/20 bg-gradient-to-br from-[#D4AF37]/20 via-[#111111] to-black">
                  <ShoppingBag
                    size={64}
                    className="text-[#D4AF37] transition group-hover:scale-110"
                  />
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="rounded-full bg-[#D4AF37]/10 px-3 py-1 text-xs font-semibold text-[#D4AF37]">
                      {product.category}
                    </p>

                    <p className="flex items-center gap-1 text-sm text-neutral-400">
                      <Star
                        size={14}
                        className="fill-[#D4AF37] text-[#D4AF37]"
                      />{" "}
                      {product.rating}
                    </p>
                  </div>

                  <h3 className="mt-3 text-lg font-bold text-white">
                    {product.name}
                  </h3>

                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-xl font-black text-[#D4AF37]">
                      {product.price}
                    </p>

                    <Button className="rounded-2xl bg-[#D4AF37] text-black hover:bg-[#f0cc5a]">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChatbotWidget() {
  const [open, setOpen] = useState(true);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello, welcome to Shemar Collection. Ask me about women clothes, scarves, bags, dresses, delivery, payment, returns, order tracking or customer support.",
      intent: "greeting",
    },
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    const userMessage = { sender: "user", text: message };
    const result = detectIntent(message);
    const botMessage = {
      sender: "bot",
      text: result.answer,
      intent: result.intent,
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setMessage("");
  };

  return (
    <div id="support" className="fixed bottom-5 right-5 z-50">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="mb-4 w-[92vw] max-w-sm overflow-hidden rounded-[1.7rem] border border-[#D4AF37]/30 bg-black shadow-2xl shadow-[#D4AF37]/20"
        >
          <div className="flex items-center justify-between bg-[#090909] px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#D4AF37] text-black">
                <Bot size={21} />
              </div>

              <div>
                <h3 className="font-bold">AI Support Assistant</h3>
                <p className="text-xs text-[#D4AF37]">
                  Pre-trained NLP demo logic
                </p>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="rounded-full p-1 hover:bg-white/10"
            >
              <X size={18} />
            </button>
          </div>

          <div className="h-80 space-y-3 overflow-y-auto bg-[#111111] p-4">
            {messages.map((item, index) => (
              <div
                key={index}
                className={`flex ${
                  item.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    item.sender === "user"
                      ? "bg-[#D4AF37] text-black"
                      : "border border-[#D4AF37]/20 bg-black text-neutral-200"
                  }`}
                >
                  <p>{item.text}</p>

                  {item.intent && item.sender === "bot" && (
                    <p className="mt-2 text-[10px] uppercase tracking-wider text-[#D4AF37]">
                      Intent: {item.intent}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-[#D4AF37]/20 bg-black p-3">
            <div className="flex items-center gap-2 rounded-2xl border border-[#D4AF37]/30 bg-[#111111] px-3 py-2">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type your question..."
                className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-neutral-500"
              />

              <Button
                onClick={sendMessage}
                size="icon"
                className="rounded-xl bg-[#D4AF37] text-black"
              >
                <Send size={17} />
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      {!open && (
        <Button
          onClick={() => setOpen(true)}
          className="h-14 rounded-full bg-[#D4AF37] px-5 text-black shadow-2xl shadow-[#D4AF37]/20 hover:bg-[#f0cc5a]"
        >
          <MessageCircle className="mr-2" size={20} /> Chat Support
        </Button>
      )}
    </div>
  );
}

function AdminPreview() {
  return (
    <section id="admin" className="bg-[#070707] py-16 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">
            Admin Demo
          </p>

          <h2 className="mt-2 text-3xl font-black tracking-tight text-white md:text-4xl">
            Chatbot management dashboard
          </h2>

          <p className="mt-4 leading-7 text-neutral-400">
            This dashboard preview shows how the administrator can manage FAQs,
            view conversation history, identify unanswered questions and monitor
            chatbot activities for Shemar Collection.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {[
            { title: "Total Chats", value: "124", icon: MessageCircle },
            { title: "FAQ Records", value: "32", icon: LayoutDashboard },
            { title: "Unanswered", value: "7", icon: Bot },
            { title: "Human Escalation", value: "12", icon: UserRound },
          ].map((item) => (
            <Card
              key={item.title}
              className="rounded-3xl border border-[#D4AF37]/20 bg-[#111111] shadow-lg shadow-black/40"
            >
              <CardContent className="p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37] text-black">
                  <item.icon size={22} />
                </div>

                <p className="text-sm text-neutral-400">{item.title}</p>

                <h3 className="mt-1 text-3xl font-black text-[#D4AF37]">
                  {item.value}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ShemarCollectionChatbotDemo() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <ServiceHighlights />
      <Products />
      <AdminPreview />

      <footer className="border-t border-[#D4AF37]/20 bg-black px-4 py-10 text-center text-sm text-neutral-500">
        <p>
          © 2026 Shemar Collection. Premium women’s fashion e-commerce demo for
          AI-Based Customer Service Chatbot Using Pre-trained NLP Models.
        </p>
      </footer>

      <ChatbotWidget />
    </div>
  );
}
