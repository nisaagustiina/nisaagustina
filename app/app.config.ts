export default defineAppConfig({
  appName: "Nisa Agustina - portfolio",
  appDescription: 'Portfolio',
  profilePicture: '/assets/nisa2.jpg',
  footerName: 'Nisa',
  email: 'nisaagustiina@gmail.com',
  twitterUsername: '',
  phone: '+628986028257',
  openGraphImage: '/assets/nisa2.jpg',
  socials: {
    github: 'https://github.com/nisaagustiina',
    linkedin: 'https://www.linkedin.com/in/nisaagustina/',
    instagram: 'https://www.instagram.com/_nagst',
    whatsapp: 'https://api.whatsapp.com/send/?phone=628986028257'
  },
  ui: {
    primary: 'emerald',
    gray: 'zinc',
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    input: {
      variant: {
        none: 'bg-gray-100 dark:bg-gray-900/40 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out',
      },
    },
    textarea: {
      variant: {
        none: 'bg-gray-100 dark:bg-gray-900/40 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out',
      },
    },
  },
})
