import {Globe2} from 'lucide-react';
import {usePathname} from 'next/navigation';
export default function LanguageSwitch(){const pathname=usePathname();const english=pathname==='/en'||pathname.startsWith('/en/');function change(e){const path=english?(pathname.slice(3)||'/'):(pathname==='/'?'/en':'/en'+pathname);window.location.assign(path+window.location.search+window.location.hash)}return <button type="button" className="language-switch" onClick={change} aria-label={english?'Switch to Korean':'Switch to English'}><Globe2 size={17}/><span>{english?'한국어':'English'}</span></button>}
