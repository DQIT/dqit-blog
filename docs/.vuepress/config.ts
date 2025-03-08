import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    bundler: viteBundler(),
    theme: defaultTheme({
        logo: '/image/logo.png',
        repo: 'DQIT/dqit-blog',
        navbar: [
            {
                text: 'MyGit',
                link: 'https://git.dqit.top',
            }
        ]
    }),

    head: [
        ['link',{ rel: 'icon', href: '/favicon.ico' }]
    ],

    lang: 'zh-CN',
    title: '一笔清泉字',
    description: ' up! up!',
})
