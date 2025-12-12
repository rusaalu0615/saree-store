import React from 'react';
import {SearchIcon, ShoppingCartIcon, User, ChevronUp, ArrowUpRight, ChevronDown} from 'lucide-react';

export default function Navbar() {
    return (


        <nav className="absolute top-2 fixed left-0 right-0 flex bg-black-300 justify-between items-center" style={{paddingLeft: '48px', paddingRight: '48px'}}>
            
            <div className="flex items-center cursor-pointer">
                <img src="/logo.png" alt="Logo" className="h-15 w-24" style={{width: '100px', height: '60px'}}/>
            </div>

            <ul className="flex gap-8 text-white cursor-pointer" style={{paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px', paddingBottom: '20px', fontSize: '16px'}}>
                 <li className="nav-item">Linen Sarees <ChevronUp className="nav-arrow inline-block" style={{width: '18px', height: '18px'}}/></li>
                 <li className="nav-item">Bhagalpuri Sarees <ChevronUp className="nav-arrow inline-block" style={{width: '18px', height: '18px'}}/></li>
                 <li className="nav-item">Silk Sarees <ChevronUp className="nav-arrow inline-block" style={{width: '18px', height: '18px'}}/></li>
                 <li className="nav-item">Unstitched Suit Set <ArrowUpRight className="nav-arrow inline-block" style={{width: '18px', height: '18px'}}/></li>
            </ul>

            <ul className="flex gap-8 items-center text-white cursor-pointer" style={{paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px', paddingBottom: '20px', fontSize: '16px'}}>
                <li><SearchIcon className="h-6 w-6"/></li>
                <li><ShoppingCartIcon className="h-6 w-6"/></li>
                <li><User className="h-6 w-6"/></li>
            </ul>

        </nav>
    );
}
