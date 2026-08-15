const Navbar = () => {
  return (
    <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-xl font-bold text-slate-900">CV Builder</h1>
        </div>

        <div className="flex items-center gap-4 text-sm text-slate-600">
          <a href="#" className="transition hover:text-slate-900">Dashboard</a>
          <a href="#" className="transition hover:text-slate-900">Templates</a>
          <a href="#" className="transition hover:text-slate-900">Preview</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
