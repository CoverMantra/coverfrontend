const fs = require('fs');
const p = 'd:/websiteCV/coverfrontend/src/app/Components/LoginModal.tsx';
let c = fs.readFileSync(p, 'utf8');

c = c.replace('import Cookies from "js-cookie";', 'import Cookies from "js-cookie";\nimport { useAuthStore } from "../../store/useAuthStore";');
c = c.replace('const router = useRouter();', 'const router = useRouter();\n  const { setAuth } = useAuthStore();');

const oldCookieLogic = `if (token) Cookies.set("co_token", token, { expires: 7 });
        Cookies.set("co_phone", phone, { expires: 7 });
        Cookies.set("co_login", "true", { expires: 7 });`;
c = c.replace(oldCookieLogic, 'if (token) setAuth(phone, token);');

fs.writeFileSync(p, c);
console.log("Done LoginModal");
