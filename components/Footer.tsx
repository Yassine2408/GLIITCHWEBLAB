export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} GLIITCH Web Lab. Handcrafted with imagination & AI.
          </p>
        </div>
      </div>
    </footer>
  )
}

