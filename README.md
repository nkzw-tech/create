# @nkzw/create

Nakazawa Tech templates for Vite+.

```bash
vp create @nkzw
```

For non-interactive scripts, use the real template source directly:

```bash
vp create github:nkzw-tech/web-app-template
vp create github:nkzw-tech/expo-app-template
vp create github:nkzw-tech/server-template
vp create github:nkzw-tech/library-template
vp create github:nkzw-tech/fate-template
```

## Templates

| Name | Template | Description |
| --- | --- | --- |
| `web` | `github:nkzw-tech/web-app-template` | Web app template with Vite, React, Tailwind, fbtee, Better Auth, and React Router. |
| `expo` | `github:nkzw-tech/expo-app-template` | React Native and Expo app template with Expo Router, Uniwind, fbtee, and Vite+. |
| `server` | `github:nkzw-tech/server-template` | GraphQL server template with Prisma, Pothos, Hono, Better Auth, and GraphQL Yoga. |
| `library` | `github:nkzw-tech/library-template` | TypeScript library template with Vite+ packaging and Nakazawa Tech defaults. |
| `fate` | `github:nkzw-tech/fate-template` | fate quick-start monorepo with React client, tRPC server, Prisma, and shared tooling. |

This package is intentionally manifest-only. The actual template sources stay in their existing GitHub repositories, and Vite+ reads the `vp.templates` manifest from this package.

## Publishing

```bash
npm publish --access public
```

After publishing, verify the manifest:

```bash
vp create @nkzw --no-interactive
```
