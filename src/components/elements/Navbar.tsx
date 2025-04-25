import { Container } from "../shared/Container";
import logo from "../../assets/bornicon.svg";
import { NavItem } from "../shared/NavItem";
import { BtnLink } from "../shared/BtnLink";
import { useThemeStore } from "../../store/ThemeStore";

// eslint-disable-next-line react-refresh/only-export-components
export const navItems = [
    { href: "#", text: "Home" },
    { href: "#services", text: "Services" },
    { href: "#about-us", text: "About Us" },
    { href: "#pricing", text: "Pricing" },
];

export const Navbar = () => {
    const { toggleTheme, theme } = useThemeStore();
    return (
        <header className="absolute inset-x-0 top-0 z-50 py-6">
            <Container>
                <nav className="w-full flex justify-between gap-6 relative">
                    {/* Logo */}
                    <div className="min-w-max inline-flex relative">
                        <a href="/" className="relative flex items-center gap-3">
                            <img src={logo} alt="BornAI" className="w-10 h-10" />
                            <div className="inline-flex text-lg font-semibold text-heading-1">BornAI
                            </div>
                        </a>
                    </div>

                    <div className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center absolute top-full left-0 lg: static lg:top-0 bg-body lg:bg-transparent border-x border-x-box-border lg:border-x-0 lg:h-auto h-0 overflow-hidden">

                        <ul className ="border-t border-box-border lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-8 text-lg text-heading-2 w-full lg:justify-center lg:items-center">
                            {navItems.map((item, key) => (
                                <NavItem href={item.href} text={item.text} key={key} />
                            ))}
                        </ul>
                        <div className="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b border-box-border lg:border-0 px-6 lg:px-0">
                            <BtnLink text="Get Started" href="#cta" className="" />
                        </div>
                    </div>

                    <div className="min-w-max flex items-center gap-x-3"> 
                        <button onClick={toggleTheme} className="outline-hidden flex relative text-heading-2 rounded-full p-2 lg:p-3 border-box-border cursor-pointer">
                                {theme === "dark" ? (
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none" 
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5" 
                                    stroke="currentColor"
                                    className="w-6 h-6">
                                    <path 
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 4.5v1.5m0 12v1.5m7.5-7.5h1.5M3 12H4.5M16.95 7.05l1.06-1.06M6.04 17.96l1.06-1.06M16.95 16.95l1.06 1.06M6.04 6.04l1.06 1.06M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"></path>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none" 
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5" 
                                        stroke="currentColor"
                                        className="w-6 h-6">
                                    <path 
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 4.5v1.5m0 12v1.5m7.5-7.5h1.5M3 12H4.5M16.95 7.05l1.06-1.06M6.04 17.96l1.06-1.06M16.95 16.95l1.06 1.06M6.04 6.04l1.06 1.06M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"></path>
                                    </svg>
                                )}
                        </button>
                    </div>
                </nav>
            </Container>
        </header>
    );
};