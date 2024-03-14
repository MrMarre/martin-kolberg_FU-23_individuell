# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

Att göra senare med CSS

1. fixa overlay och rodda i strecken så att de kanske är en komponent likt "dots" och tröck in mellan varje menyval i <NAV />

   CHECK 1.1 fundera över sizing på overlayen så att en kanske kan slippa att sätta en definitiv storlek på höjden, åtminstone

   CHECK!! 1.2 Se även till att <Hamburger /> blir ett kryss när en roddat upp menyvalen

   CHECK 1.3 Göm "Cart"-knappen när en klickar på hamburgarmenyn(som det)

SSCCCHHEEECCCK 2. se till att overlayen lirar som den skall!

CHECKKK!! 3. fixa cart-items som lirar med cartstoregrejerna

4. SCHEECK Se till att ett knapptryck i "Take my money" "hämtar" och genererar ett post-anrop och ger tillbaka ett ordernummer. SCHEECK

**Is this needed?**

**FÖRST OCH FRÄMST**

Se till att css:en är enligt skiss. SEDAN kan du gå vidare till nästa steg.

3.1 Se till att en nödvändig scroll blir av i Cart-overlayen om "för många" olika artiklar hamnar i kundkorgen

4. **EG VG-sidor** Rodda overlayen! Användaren erbjuds att skapa konto efter lagd beställning.

5. vid inlogg - langa bort inloggsoverlay och kötta in senaste orders

6. Rodda så att order "nollställs" på snyggt vis när den lagts, så att den hypotetiskt kan visa upp tidigare ordrar.

7. Prickarna måste lira

8. hämta ordernummer dynamiskt

9. Hinner du inloggsbiten? :// :DD
