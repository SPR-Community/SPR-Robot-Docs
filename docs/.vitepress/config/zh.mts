import { defineConfig, type DefaultTheme } from 'vitepress'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)

export const zh = defineConfig({
  lang: 'zh-CN',
  title: "山水画路社区·机器人框架",
  description: "一个基于OneBot V11的机器人框架",

  themeConfig: {
    nav: ([
      {
        text: '快速起步', link: '/guide/'
      },
      {
        text: '进阶功能', link: '/guide/improve/template-plugins'
      }
    ]),

    sidebar: {
      '/guide/': [
        {
          text: '快速起步',
          items: [
            { text: '🔊 免责声明', link: '/guide/disclaimers' },
            { text: '🏠 首页', link: '/guide/' },
            { text: '⏬ 安装', link: '/guide/install' },
            { text: '⚙️ 初始化配置', link: '/guide/default_set' },
          ],
        },
        {
          text: '进阶操作', 
          items: [
            { text: '🔧 编写第一个插件', link: '/guide/improve/template-plugins' },
            { text: '📜 日志处理', link: '/guide/improve/logger' },
            { text: '📄 自定义配置', link: '/guide/improve/config' },
            { text: '⚡ 事件装饰器能提供的参数', link: '/guide/improve/event_process' },
            { text: '📓 Event工具', link: '/guide/improve/event' },
          ]
        }],
    },

    editLink: {
      pattern: 'https://github.com/SPR-Community/SPR-Robot-Docs/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      message: '基于 MIT 许可协议',
      copyright: `版权所有 © 2023-${new Date().getFullYear()} Minecraft_山水 x 山水画路社区`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})


export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
  zh: {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消'
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除'
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接'
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索提供者'
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈'
        }
      }
    }
  }
}
