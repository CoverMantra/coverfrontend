const fs = require('fs');
const p = 'd:/websiteCV/coverfrontend/src/app/Components/HeroSection.tsx';
let c = fs.readFileSync(p, 'utf8');

// Replace Cookies import with useAuthStore
c = c.replace('import Cookies from "js-cookie";', 'import Cookies from "js-cookie";\nimport { useAuthStore } from "../../store/useAuthStore";');

// In handleApplyNow, use auth store instead of Cookies
c = c.replace('const co_phone = Cookies.get("co_phone");\n    const co_token = Cookies.get("co_token");', 'const { isAuthenticated } = useAuthStore.getState();');
c = c.replace('if (co_phone && co_token)', 'if (isAuthenticated)');

// Add sizes to Image
c = c.replace('fill\n                    className="object-contain', 'fill\n                    sizes="(max-width: 768px) 100vw, 50vw"\n                    className="object-contain');

fs.writeFileSync(p, c);
console.log("Done HeroSection");
