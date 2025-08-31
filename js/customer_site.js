const CUSTOMER_SITES = {
    apibdzy: {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: '百度云资源',
    },
    ukuapi: {
        api: 'https://api.ukuapi.com/api.php/provide/vod',
        name: 'U酷资源',
    },
    wujinapi: {
        api: 'https://api.wujinapi.com/api.php/provide/vod',
        name: '无尽资源',
    },
    dbzy: {
        api: 'https://dbzy.tv/api.php/provide/vod',
        name: '豆瓣资源',
    },
    apibdzy: {
        api: 'https://api.apibdzy.com/api.php/provide/vod﻿',
        name: '百度资源',
    },
    ukuapi88: {
        api: 'https://api.ukuapi88.com/api.php/provide/vod',
        name: '优酷资源',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
