const e="94list-frontend",t="1.1.2",i="module",n={dev:"vite",build:'run-p type-check "build-only {@}" --',preview:"vite preview","build-only":"vite build","type-check":"vue-tsc --build --force",lint:"eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore",format:"prettier --write src/"},s={axios:"^1.7.2",clipboard:"^2.0.11","element-plus":"^2.7.5",pinia:"^2.1.7",vue:"^3.4.29","vue-router":"^4.3.3"},p={"@rushstack/eslint-patch":"^1.10.3","@tsconfig/node20":"^20.1.4","@types/node":"^20.14.5","@vitejs/plugin-vue":"^5.0.5","@vue/eslint-config-prettier":"^9.0.0","@vue/eslint-config-typescript":"^13.0.0","@vue/tsconfig":"^0.5.1","async-validator":"^4.2.5",eslint:"^8.57.0","eslint-plugin-vue":"^9.26.0","npm-run-all2":"^6.2.0",prettier:"^3.3.2",sass:"^1.77.6",typescript:"~5.4.5","unplugin-auto-import":"^0.17.6","unplugin-vue-components":"^0.27.0",vite:"^5.3.1","vite-plugin-compression":"^0.5.1","vue-tsc":"^2.0.21"},c={name:e,version:t,type:i,scripts:n,dependencies:s,devDependencies:p};export{c as default,s as dependencies,p as devDependencies,e as name,n as scripts,i as type,t as version};