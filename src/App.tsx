import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Analytics } from "@vercel/analytics/react"


function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 p-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-white">Hey, I'm Dom Parsons 👋</h1>
            <p className="mt-2 text-lg text-gray-300">
              Welcome to my personal site. Check out my portfolio app below!
            </p>

            <Card className="mt-6 p-4 bg-gray-700 shadow-xl">
              <CardContent>
                <Button asChild size="lg" className="w-full">
                  <a href="https://portfolio.domparsons.com" target="_blank" rel="noopener noreferrer">
                    View My Portfolio App
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </ThemeProvider>
      <Analytics />
    </Router>
  );
}

export default App;
