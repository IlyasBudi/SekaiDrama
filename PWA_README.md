# PWA Setup - SekaiDrama

Aplikasi SekaiDrama sekarang mendukung Progressive Web App (PWA). User dapat menginstall aplikasi ini di perangkat mereka dan menggunakannya seperti aplikasi native.

## Fitur PWA

- ✅ **Installable**: Dapat diinstall di home screen perangkat
- ✅ **Offline Support**: Service Worker menyediakan basic offline support
- ✅ **App-like Experience**: Fullscreen mode dengan splash screen
- ✅ **Responsive Icons**: Icon tersedia dalam berbagai ukuran
- ✅ **Theme Color**: Mendukung theme color untuk status bar

## File PWA

### 1. Manifest (`public/manifest.json`)
File manifest mendefinisikan bagaimana aplikasi akan muncul dan berperilaku saat diinstall.

### 2. Service Worker (`public/sw.js`)
Service worker manual yang menyediakan:
- Caching untuk offline support
- Faster loading dengan cache-first strategy
- Auto-update saat ada versi baru

### 3. Icons
Icons tersedia dalam ukuran:
- 72x72, 96x96, 128x128, 144x144
- 152x152, 192x192, 384x384, 512x512

Icon source: `public/icon.svg`

### 4. PWA Meta Tags
Meta tags untuk PWA sudah ditambahkan di `src/app/layout.tsx`:
- Apple Web App meta tags
- Mobile Web App capabilities
- Theme color dan viewport settings

## Generate Icons

Jika perlu regenerate icons dari SVG:

```bash
node scripts/generate-icons.js
```

## Testing PWA

1. Build aplikasi:
```bash
npm run build
npm start
```

2. Buka aplikasi di browser (Chrome/Edge recommended)
3. Klik Install button di address bar atau menu
4. Aplikasi akan muncul sebagai standalone app

## Browser Support

- ✅ Chrome/Edge (Desktop & Mobile)
- ✅ Safari iOS
- ✅ Samsung Internet
- ⚠️ Firefox (Limited support)

## Lighthouse PWA Score

Aplikasi ini memenuhi kriteria:
- Fast and reliable
- Installable
- PWA optimized

## Customization

Untuk mengubah PWA settings:
- **Manifest**: Edit `public/manifest.json`
- **Service Worker**: Edit `public/sw.js`
- **Icons**: Edit `public/icon.svg` lalu run generate script
- **Theme Color**: Edit di `src/app/layout.tsx` (viewport export)
