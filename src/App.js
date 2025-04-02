import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
function App() {
    return (_jsx(Router, { children: _jsx(ThemeProvider, { children: _jsx("div", { className: "flex min-h-screen items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 p-6", children: _jsxs(motion.div, { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "text-center", children: [_jsx("h1", { className: "text-4xl font-bold text-white", children: "Hey, I'm Dom Parsons \uD83D\uDC4B" }), _jsx("p", { className: "mt-2 text-lg text-gray-300", children: "Welcome to my personal site. Check out my portfolio below!" }), _jsx(Card, { className: "mt-6 p-4 bg-gray-700 shadow-xl", children: _jsx(CardContent, { children: _jsx(Button, { asChild: true, size: "lg", className: "w-full", children: _jsx("a", { href: "https://portfolio.domparsons.com", target: "_blank", rel: "noopener noreferrer", children: "View My Portfolio" }) }) }) })] }) }) }) }));
}
export default App;
