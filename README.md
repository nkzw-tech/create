# @nkzw/create

Nakazawa Tech templates for Vite+.

```bash
vp create @nkzw
```

Use a direct shortcut to scaffold a specific template:

```bash
vp create @nkzw:web
vp create @nkzw:expo
vp create @nkzw:server
vp create @nkzw:library
vp create @nkzw:fate
```

For non-interactive scripts, use a direct shortcut or the real template source:

```bash
vp create @nkzw:web --no-interactive
vp create github:nkzw-tech/web-app-template --no-interactive
```

## Templates

| Name | Shortcut | Template | Description |
| --- | --- | --- | --- |
| `web` | `@nkzw:web` | `github:nkzw-tech/web-app-template` | Web app template with Vite, React, Tailwind, fbtee, Better Auth, and React Router. |
| `expo` | `@nkzw:expo` | `github:nkzw-tech/expo-app-template` | React Native and Expo app template with Expo Router, Uniwind, fbtee, and Vite+. |
| `server` | `@nkzw:server` | `github:nkzw-tech/server-template` | GraphQL server template with Prisma, Pothos, Hono, Better Auth, and GraphQL Yoga. |
| `library` | `@nkzw:library` | `github:nkzw-tech/library-template` | TypeScript library template with Vite+ packaging and Nakazawa Tech defaults. |
| `fate` | `@nkzw:fate` | `github:nkzw-tech/fate-template` | fate quick-start monorepo with React client, tRPC server, Prisma, and shared tooling. |

This package is intentionally manifest-only. The actual template sources stay in their existing GitHub repositories, and Vite+ reads the `createConfig.templates` manifest from this package.

## Publishing

```bash
npm publish --access public
```

After publishing, verify the manifest:

```bash
vp create @nkzw --no-interactive
```
