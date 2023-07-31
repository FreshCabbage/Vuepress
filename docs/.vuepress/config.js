
import { defaultTheme } from '@vuepress/theme-default'

export default {
    lang: 'zh-CN',
    title: 'Vuepress2.0搭建指南',
    description: '这是我的第一个 VuePress 站点',
    theme: defaultTheme({
        navbar: [
            {
                text: '笔记',
                children: [
                    {text:'Vuepress建站指南',link:'https://github.com/mqyqingfeng'},
                    {text:'ts使用指南',link:'https://juejin.cn/user/712139234359182/posts'},
                ]
            },
            
        ],
        subSidebar: 'auto'
    })
}