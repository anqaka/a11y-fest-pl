// setup/windicss.ts

import { defineWindiSetup } from '@slidev/types'

// extending the builtin windicss configurations
export default defineWindiSetup(() => ({
  shortcuts: {
    // custom the default background
    'bg-main': 'bg-white text-[#181818] dark:bg-red-500 dark:text-[#ddd]',
  },
  theme: {
    extend: {
      colors: {
        primary: '#2f2a95',
        coral: '#ff674d',
        rose: '#efada3',
        dupa: '#020c14'
      },
      // fonts can be replaced here, remember to update the web font links in `index.html`,
    },
  },
}))