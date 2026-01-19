import React from 'react';

// Interfacce locali per garantire indipendenza totale e zero errori di build
interface SocialNode {
  name: string;
  url: string;
  icon: string;
  color: string;
  border: string;
  bgGradient: string;
}

interface TechItem {
  name: string;
  icon: string;
  color: string;
}

const App: React.FC = () => {
  const username = "ilenia-unida";

  const socialNodes: SocialNode[] = [
    { name: 'Portfolio', url: 'https://ileniaunida.netlify.app/', icon: 'fas fa-rocket', color: 'text-cyan-400', border: 'border-cyan-500/20 hover:border-cyan-400', bgGradient: 'hover:bg-cyan-500/10' },
    { name: 'GitHub', url: `https://github.com/${username}?tab=repositories`, icon: 'fab fa-github', color: 'text-white', border: 'border-white/10 hover:border-white/40', bgGradient: 'hover:bg-white/5' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ilenia-unida/', icon: 'fab fa-linkedin-in', color: 'text-[#00a0dc]', border: 'border-blue-500/20 hover:border-blue-400', bgGradient: 'hover:bg-blue-500/10' },
    { name: 'Substack', url: 'https://ileniaunida.substack.com/p/ethical-flow-il-canale-che-trasforma', icon: 'fas fa-signature', color: 'text-[#ff6719]', border: 'border-orange-500/20 hover:border-orange-400', bgGradient: 'hover:bg-orange-500/10' },
    { name: 'YouTube', url: 'https://www.youtube.com/watch?v=fYTBnUSdQkA&list=PLFpwIZAuDw8tYzfoZMVyhUJypbTVVva00', icon: 'fab fa-youtube', color: 'text-[#ff0000]', border: 'border-red-500/20 hover:border-red-400', bgGradient: 'hover:bg-red-500/10' },
  ];

  const techStack: TechItem[] = [
    { name: 'TypeScript', icon: 'fab fa-js', color: 'text-blue-400' },
    { name: 'React', icon: 'fab fa-react', color: 'text-cyan-400' },
    { name: 'Java', icon: 'fab fa-java', color: 'text-red-500' },
    { name: 'Tailwind', icon: 'fas fa-wind', color: 'text-teal-400' },
    { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-500' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'text-blue-500' },
    { name: 'JavaScript', icon: 'fab fa-js-square', color: 'text-yellow-400' },
    { name: 'n8n', icon: 'fas fa-project-diagram', color: 'text-red-400' },
  ];

  return (
    <div className="min-h-screen bg-[#030508] text-[#c9d1d9] flex flex-col items-center selection:bg-purple-500/30 overflow-x-hidden relative font-['Inter']">
      
      {/* SFONDO ANIMATO PREMIUM */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_rgba(15,10,30,1)_0%,_rgba(3,5,8,1)_100%)]"></div>
        <div className="absolute top-[10%] right-[5%] w-[50%] h-[50%] rounded-full bg-violet-600/5 blur-[130px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[60%] h-[60%] rounded-full bg-purple-700/5 blur-[150px] animate-pulse" style={{ animationDuration: '10s' }}></div>
      </div>

      <main className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center mt-12 md:mt-24 px-6">
        
        {/* Brand Label */}
        <div className="flex items-center gap-4 mb-8">
           <span className="h-[1px] w-8 bg-violet-500/50"></span>
           <span className="text-[13px] md:text-[16px] font-black uppercase tracking-[0.7em] text-violet-400">Ilenia Unida</span>
           <span className="h-[1px] w-8 bg-violet-500/50"></span>
        </div>

        {/* Header Principal */}
        <header className="mb-10 w-full">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-[1.1]">
            UI Showcase:<br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-violet-400 to-purple-500">
              Professional Social Hub
            </span>
          </h1>
          <h2 className="text-lg md:text-2xl text-gray-400 font-bold tracking-[0.25em] uppercase mb-4 max-w-4xl mx-auto">
            Web Development & AI Automation Specialist
          </h2>
          <p className="text-gray-300 text-sm md:text-lg font-medium tracking-wide mb-12 px-4 italic">
            Sviluppo interfacce evolute guidate dall'etica e dall'innovazione dell'IA
          </p>
        </header>

        {/* Vision Card */}
        <section className="w-full max-w-4xl mb-24 relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-violet-600/30 via-fuchsia-500/10 to-cyan-600/30 rounded-[3rem] blur-2xl opacity-70 group-hover:opacity-100 transition duration-1000"></div>
          
          <div className="relative bg-gradient-to-br from-[#120b1e]/90 to-[#08111a]/90 backdrop-blur-3xl border border-white/20 rounded-[2.5rem] p-10 md:p-14 text-left overflow-hidden shadow-2xl">
            <div className="absolute top-[-20%] right-[-10%] w-80 h-80 bg-violet-600/20 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="relative z-10">
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-black uppercase tracking-[0.5em] text-[11px] mb-8 flex items-center gap-3">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-500"></span>
                </span>
                Vision & Intent
              </h3>
              
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-violet-500 via-fuchsia-500 to-cyan-500"></div>
                <p className="text-xl md:text-2xl text-white font-medium leading-relaxed italic pl-10 drop-shadow-sm">
                  "Questa Social Bar in Glassmorphism è un esempio di come il design moderno possa sintetizzare un intero ecosistema professionale. Ogni nodo rappresenta un pilastro della mia attività: dallo sviluppo web all'automazione, fino alle analisi etiche sull'intelligenza artificiale."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Grid Section */}
        <section className="w-full max-w-5xl mb-16">
          <div className="flex items-center justify-center gap-6 mb-12">
            <span className="h-[1px] flex-1 bg-white/10"></span>
            <h3 className="text-[16px] md:text-[20px] font-black uppercase tracking-[0.5em] text-gray-300 px-4">Core Technologies & Tools</h3>
            <span className="h-[1px] flex-1 bg-white/10"></span>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {techStack.map((tech) => (
              <div key={tech.name} className="p-5 rounded-3xl bg-white/[0.01] border border-white/5 flex flex-col items-center hover:bg-white/[0.03] hover:border-white/10 transition-all group">
                <i className={`${tech.icon} ${tech.color} text-xl mb-3 group-hover:scale-110 transition-transform`}></i>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Call To Action - Testo originale ripristinato */}
        <div className="flex flex-col items-center mb-12">
          <p className="text-[11px] md:text-[13px] text-gray-300 font-bold uppercase tracking-[0.4em] text-center px-4">
            Esplora il mio ecosistema interagendo con la <span className="text-violet-400">Social Bar</span>
          </p>
          <i className="fas fa-chevron-down text-violet-500/30 text-2xl mt-4 animate-bounce"></i>
        </div>

        <footer className="w-full pt-12 pb-32 opacity-40 border-t border-white/5 relative z-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-gray-400 text-center">
            Sviluppato da Ilenia Unida © 2026
          </p>
        </footer>
      </main>

      {/* Floating Bar */}
      <div className="fixed bottom-8 left-0 right-0 z-[100] flex justify-center pointer-events-none px-4">
        <nav className="pointer-events-auto w-full max-w-fit">
          <div className="flex items-center gap-2 md:gap-4 p-3 bg-white/5 backdrop-blur-[40px] border border-white/10 rounded-full shadow-2xl">
            {socialNodes.map((node) => (
              <a
                key={node.name}
                href={node.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full transition-all duration-500 bg-white/[0.03] border-2 ${node.border} ${node.bgGradient} hover:-translate-y-3 active:scale-90`}
              >
                <i className={`${node.icon} text-lg md:text-2xl ${node.color} transition-all duration-300 group-hover:scale-110`}></i>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 opacity-0 group-hover:opacity-100 transition-all pointer-events-none scale-50 group-hover:scale-100 origin-bottom">
                  <div className="relative bg-black border border-white/10 py-2 px-5 rounded-full shadow-2xl">
                    <span className={`block text-[9px] ${node.color} font-black uppercase tracking-[0.2em] whitespace-nowrap`}>{node.name}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </nav>
      </div>

      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-[90]"></div>
    </div>
  );
};

export default App;