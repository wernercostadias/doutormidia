# Doutor Mídia

Site estático e responsivo do Doutor Mídia, com página de links e página promocional do sorteio.

- `index.html`: página principal de links.
- `regras.html`: apresentação do prêmio e regras provisórias do sorteio.

## Executar localmente

Abra `index.html` diretamente no navegador ou inicie um servidor local:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Cloudflare Workers

Instale as dependências e gere os arquivos estáticos:

```bash
npm install
npm run build
```

Para testar ou publicar com o Wrangler:

```bash
npm run dev
npm run deploy
```

Na integração do GitHub com Cloudflare Workers, use:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

## Cloudflare Pages

Use `npm run build` como comando de build e `dist` como diretório de saída.
