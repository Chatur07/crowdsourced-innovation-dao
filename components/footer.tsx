import Link from "next/link"
import { Twitter, Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">InnovationDAO</h3>
            <p className="text-sm">
              A decentralized autonomous organization empowering creators and backers to shape the future.
            </p>
            <div className="flex space-x-4">
              <Link href="https://twitter.com" className="hover:text-white">
                <Twitter size={20} />
              </Link>
              <Link href="https://github.com" className="hover:text-white">
                <Github size={20} />
              </Link>
              <Link href="https://linkedin.com" className="hover:text-white">
                <Linkedin size={20} />
              </Link>
              <Link href="mailto:info@innovationdao.com" className="hover:text-white">
                <Mail size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="text-sm hover:text-white">
                  Browse Projects
                </Link>
              </li>
              <li>
                <Link href="/submit" className="text-sm hover:text-white">
                  Submit Idea
                </Link>
              </li>
              <li>
                <Link href="/governance" className="text-sm hover:text-white">
                  Governance
                </Link>
              </li>
              <li>
                <Link href="/tokens" className="text-sm hover:text-white">
                  Tokens
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-sm hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-sm hover:text-white">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-sm hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm hover:text-white">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-sm hover:text-white">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} InnovationDAO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

