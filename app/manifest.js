export default function manifest() {
    return {
      name: 'Daily Earn Online',
      short_name: 'Daily Earn',
      description: 'A custom dashboard built to track employee performance and earnings.',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#000000',
      icons: [
        {
          src: '/favicon.ico',
          sizes: 'any',
          type: 'image/x-icon',
        },
      ],
    }
  }