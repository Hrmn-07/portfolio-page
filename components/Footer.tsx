export default function Footer() {
  return (
    <footer className="bg-gray-700 py-6">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Hermanus Rumapea. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
