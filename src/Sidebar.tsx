import MenuIcon from './assets/menubar.svg'
import lessIcon from './assets/lessthan.png'
import dashIcon from './assets/dashboard.png'
import orderIcon from './assets/orders.png'
import walletIcon from './assets/wallet.png'
import settingsIcon from './assets/settings.png'
import invoiceIcon from './assets/invoice.png'
import clientIcon from './assets/user.png' 
import subIcon from './assets/subscription.png'
import logoutIcon from './assets/logout.png'
import spongebob from './assets/sbob.jpeg'
import { AvatarBadge, AvatarFallback, AvatarImage, Avatar } from './components/ui/avatar'

interface SidebarProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export function AvatarWithBadge() {
  return (
    <Avatar className="h-8.5 w-8.5">
      <AvatarImage src={spongebob} alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
      <AvatarBadge className="bg-green-600 dark:bg-green-800" />
    </Avatar>
  )
}

function Sidebar({isOpen, setIsOpen}: SidebarProps){

    setIsOpen(false);

    return(
        <>

            {isOpen && (
                <div
                    className="fixed inset-0 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <aside className={
                                `bg-[#13171c] pt-4 pb-4 px-3 h-screen text-white z-50
                                border-e border-gray-800
                                fixed top-0 bottom-0 left-0 flex flex-col
                                ${isOpen? 'translate-x-0 w-48': '-translate-x-full w-64 md:w-16'}
                                transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] overflow-hidden
                                md:relative md:translate-x-0`
                            }>
                <div className="flex items-center justify-between w-full">
                    
                    <div className="flex items-center justify-between w-full h-8">
                        <div className={`transition-all duration-300 ease-in-out select-none overflow-hidden flex items-center ${
                            isOpen ? 'w-32 opacity-100 delay-150' : 'w-0 opacity-0 pointer-events-none'
                        }`}>
                            <p className="text-white font-bold ml-2 tracking-tight whitespace-nowrap text-2xl">rev</p>
                            <p className="text-white font-thin opacity-75 tracking-tight whitespace-nowrap text-2xl">net</p>
                        </div>
                        
                        <div className={`flex items-center justify-center flex-shrink-0 px-1`}>
                            <img 
                                onClick={() => setIsOpen(!isOpen)} 
                                src={lessIcon} 
                                alt="Toggle Menu" 
                                className={`w-8 h-8 rounded-full hover:bg-[#435166]/50 transition-transform transition-opacity duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                                    isOpen ? 'rotate-0' : 'rotate-180'
                                }`}
                            />
                        </div>
                    </div>
                </div>

                <div className="pt-12 flex flex-col gap-1 w-full">
                    <div className={`transition-all duration-300 ease-in-out select-none ${isOpen ? 'opacity-50' : 'opacity-0'}`}>
                        <p className={`opacity-75 pb-1 px-[9px] `}>General</p>
                    </div>

                    {[
                        { icon: dashIcon, label: 'Dashboard', alt: 'Dashboard Icon' },
                        { icon: orderIcon, label: 'Orders', alt: 'Orders Icon' },
                        { icon: invoiceIcon, label: 'Invoice', alt: 'Invoice Icon' },
                        { icon: walletIcon, label: 'Wallet', alt: 'Wallet Icon' },
                    ].map(({ icon, label, alt }) => (
                        <div
                            key={label}
                            className={`flex items-center py-2.5 px-[10px] cursor-pointer rounded-md hover:bg-[#435166]/30 transition-colors duration-300 w-full`}
                        >
                            <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                                <img src={icon} alt={alt} className={`w-full h-full object-contain transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-50'}`} />
                            </div>
                            <p className={`text-white text-sm ml-3 font-normal tracking-wide whitespace-nowrap transition-all duration-300 ease-in-out ${
                                isOpen 
                                    ? 'max-w-xs opacity-100'
                                    : 'max-w-0 opacity-0 pointer-events-none overflow-hidden ml-0'
                            }`}>
                                {label}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="pt-8 flex flex-col gap-1 w-full">
                    <div className={`transition-all duration-300 ease-in-out select-none ${isOpen ? 'opacity-50' : 'opacity-0'}`}>
                        <p className="opacity-75 pb-1 px-[10px]">Management</p>
                    </div>

                    
                    {[
                        { icon: clientIcon, label: 'Clients', alt: 'Client Icon' },
                        { icon: subIcon, label: 'Subscription', alt: 'Subscription Icon' },
                        { icon: settingsIcon, label: 'Settings', alt: 'Settings Icon' },
                    ].map(({ icon, label, alt }) => (
                        <div
                            key={label}
                            className={`flex items-center py-2.5 px-[10px] cursor-pointer rounded-md hover:bg-[#435166]/30 transition-colors duration-300 w-full`}
                        >
                            <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                                <img src={icon} alt={alt} className={`w-full h-full object-contain hover:opacity-100 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-50'}`} />
                            </div>
                            <p className={`text-white text-sm ml-3 font-normal tracking-wide whitespace-nowrap transition-all duration-300 ease-in-out ${
                                isOpen 
                                    ? 'max-w-xs opacity-100' 
                                    : 'max-w-0 opacity-0 overflow-hidden ml-0'
                            }`}>
                                {label}
                            </p>
                        </div>
                    ))}
                </div>
 
                <div className={`mt-auto mb-2 flex items-center rounded-md cursor-pointer py-2 w-full overflow-hidden transition-all duration-300 ${isOpen ? 'hover:bg-[#435166]/30' : ''}`}>
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 min-w-[40px]">
                        <AvatarWithBadge />
                    </div>
                    
                    <div className={`flex flex-col transition-all duration-300 ease-in-out whitespace-nowrap overflow-hidden ${
                        isOpen 
                            ? 'ml-2 opacity-100 max-w-xs' 
                            : 'ml-0 opacity-0 max-w-0 pointer-events-none'
                    }`}>
                        <p className="text-sm font-normal text-white">saint_999</p>
                        <p className="text-xs font-thin text-white opacity-60 -mt-1/2">Pro</p>
                    </div>
                </div>

                <button className="w-full flex items-center -mt-1 py-2 px-[10px] rounded-full opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out bg-red-500/25">
                    
                    <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 ml-0.5">
                        <img src={logoutIcon} alt="Logout" className="w-full h-full object-contain" />
                    </div>
                    
                    <span 
                        className={`text-red-400 whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out ${
                            isOpen ? "max-w-[100px] opacity-100 ml-6.5" : "max-w-0 opacity-0 ml-0 pointer-events-none"
                        }`}
                    >
                        Log Out
                    </span>
                    
                </button>
                
            </aside>

            <div onClick={() => setIsOpen(true)} className="flex md:hidden items-center justify-center w-10 h-10 m-4 rounded-full hover:bg-[#435166]/50 transition-colors duration-200 cursor-pointer">
                <img src={MenuIcon} alt="Open Menu" className="w-6 h-6" />
            </div>
        </>
    )
}

export default Sidebar