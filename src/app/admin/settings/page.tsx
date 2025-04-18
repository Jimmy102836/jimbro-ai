"use client";

import { useState } from "react";

export default function SettingsPage() {
  // 网站设置状态
  const [siteSettings, setSiteSettings] = useState({
    siteName: "JimBroAI",
    siteDescription: "AI驱动的创作平台",
    logo: "/images/logo.png",
    contactEmail: "support@jimbro.ai",
    homePageLayout: "default",
  });
  
  // API设置状态
  const [apiSettings, setApiSettings] = useState({
    apiKey: "sk-**************************",
    requestsPerMinute: 60,
    enableLogging: true,
    enableCaching: true
  });
  
  // SEO设置状态
  const [seoSettings, setSeoSettings] = useState({
    metaTitle: "JimBroAI - AI创作平台",
    metaDescription: "JimBroAI是一个AI驱动的创作平台，帮助用户高效创作内容",
    enableSitemap: true,
    enableRobotsTxt: true,
    googleAnalyticsId: "UA-XXXXXXXXX"
  });
  
  // 社交媒体设置状态
  const [socialSettings, setSocialSettings] = useState({
    twitter: "https://twitter.com/jimbro_ai",
    facebook: "https://facebook.com/jimbroai",
    instagram: "https://instagram.com/jimbro_ai",
    youtube: "",
    discord: "https://discord.gg/jimbro"
  });
  
  // 处理网站设置表单提交
  const handleSiteSettingsSubmit = (e) => {
    e.preventDefault();
    alert("网站设置已保存");
  };
  
  // 处理API设置表单提交
  const handleApiSettingsSubmit = (e) => {
    e.preventDefault();
    alert("API设置已保存");
  };
  
  // 处理SEO设置表单提交
  const handleSeoSettingsSubmit = (e) => {
    e.preventDefault();
    alert("SEO设置已保存");
  };
  
  // 处理社交媒体设置表单提交
  const handleSocialSettingsSubmit = (e) => {
    e.preventDefault();
    alert("社交媒体设置已保存");
  };
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">系统设置</h1>
        <p className="text-gray-600">配置网站和应用程序的各种设置</p>
      </div>
      
      <div className="space-y-6">
        {/* 网站设置 */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-800">网站设置</h2>
            <p className="text-sm text-gray-600">配置网站基本信息和显示选项</p>
          </div>
          <div className="p-6">
            <form onSubmit={handleSiteSettingsSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="siteName" className="block text-sm font-medium text-gray-700 mb-1">
                    网站名称
                  </label>
                  <input
                    type="text"
                    id="siteName"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    value={siteSettings.siteName}
                    onChange={(e) => setSiteSettings({...siteSettings, siteName: e.target.value})}
                  />
                </div>
                
                <div>
                  <label htmlFor="siteDescription" className="block text-sm font-medium text-gray-700 mb-1">
                    网站描述
                  </label>
                  <textarea
                    id="siteDescription"
                    rows={3}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    value={siteSettings.siteDescription}
                    onChange={(e) => setSiteSettings({...siteSettings, siteDescription: e.target.value})}
                  />
                </div>
                
                <div>
                  <label htmlFor="logo" className="block text-sm font-medium text-gray-700 mb-1">
                    Logo图片路径
                  </label>
                  <input
                    type="text"
                    id="logo"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    value={siteSettings.logo}
                    onChange={(e) => setSiteSettings({...siteSettings, logo: e.target.value})}
                  />
                </div>
                
                <div>
                  <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">
                    联系邮箱
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    value={siteSettings.contactEmail}
                    onChange={(e) => setSiteSettings({...siteSettings, contactEmail: e.target.value})}
                  />
                </div>
                
                <div>
                  <label htmlFor="homePageLayout" className="block text-sm font-medium text-gray-700 mb-1">
                    首页布局
                  </label>
                  <select
                    id="homePageLayout"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    value={siteSettings.homePageLayout}
                    onChange={(e) => setSiteSettings({...siteSettings, homePageLayout: e.target.value})}
                  >
                    <option value="default">默认布局</option>
                    <option value="modern">现代布局</option>
                    <option value="minimal">简约布局</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-6">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  保存网站设置
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* API设置 */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-800">API设置</h2>
            <p className="text-sm text-gray-600">管理API集成和权限设置</p>
          </div>
          <div className="p-6">
            <form onSubmit={handleApiSettingsSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-1">
                    API密钥
                  </label>
                  <input
                    type="text"
                    id="apiKey"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    value={apiSettings.apiKey}
                    onChange={(e) => setApiSettings({...apiSettings, apiKey: e.target.value})}
                  />
                </div>
                
                <div>
                  <label htmlFor="requestsPerMinute" className="block text-sm font-medium text-gray-700 mb-1">
                    每分钟请求限制
                  </label>
                  <input
                    type="number"
                    id="requestsPerMinute"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    value={apiSettings.requestsPerMinute}
                    onChange={(e) => setApiSettings({...apiSettings, requestsPerMinute: parseInt(e.target.value)})}
                  />
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="enableLogging"
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
                    checked={apiSettings.enableLogging}
                    onChange={(e) => setApiSettings({...apiSettings, enableLogging: e.target.checked})}
                  />
                  <label htmlFor="enableLogging" className="ml-2 block text-sm text-gray-700">
                    启用API日志记录
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="enableCaching"
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
                    checked={apiSettings.enableCaching}
                    onChange={(e) => setApiSettings({...apiSettings, enableCaching: e.target.checked})}
                  />
                  <label htmlFor="enableCaching" className="ml-2 block text-sm text-gray-700">
                    启用API响应缓存
                  </label>
                </div>
              </div>
              
              <div className="mt-6">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  保存API设置
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* SEO设置 */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-800">SEO设置</h2>
            <p className="text-sm text-gray-600">优化网站搜索引擎表现</p>
          </div>
          <div className="p-6">
            <form onSubmit={handleSeoSettingsSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="metaTitle" className="block text-sm font-medium text-gray-700 mb-1">
                    默认Meta标题
                  </label>
                  <input
                    type="text"
                    id="metaTitle"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    value={seoSettings.metaTitle}
                    onChange={(e) => setSeoSettings({...seoSettings, metaTitle: e.target.value})}
                  />
                </div>
                
                <div>
                  <label htmlFor="metaDescription" className="block text-sm font-medium text-gray-700 mb-1">
                    默认Meta描述
                  </label>
                  <textarea
                    id="metaDescription"
                    rows={3}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    value={seoSettings.metaDescription}
                    onChange={(e) => setSeoSettings({...seoSettings, metaDescription: e.target.value})}
                  />
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="enableSitemap"
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
                    checked={seoSettings.enableSitemap}
                    onChange={(e) => setSeoSettings({...seoSettings, enableSitemap: e.target.checked})}
                  />
                  <label htmlFor="enableSitemap" className="ml-2 block text-sm text-gray-700">
                    启用Sitemap
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="enableRobotsTxt"
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
                    checked={seoSettings.enableRobotsTxt}
                    onChange={(e) => setSeoSettings({...seoSettings, enableRobotsTxt: e.target.checked})}
                  />
                  <label htmlFor="enableRobotsTxt" className="ml-2 block text-sm text-gray-700">
                    启用robots.txt
                  </label>
                </div>
                
                <div>
                  <label htmlFor="googleAnalyticsId" className="block text-sm font-medium text-gray-700 mb-1">
                    Google Analytics ID
                  </label>
                  <input
                    type="text"
                    id="googleAnalyticsId"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    value={seoSettings.googleAnalyticsId}
                    onChange={(e) => setSeoSettings({...seoSettings, googleAnalyticsId: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  保存SEO设置
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* 社交媒体设置 */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-800">社交媒体设置</h2>
            <p className="text-sm text-gray-600">管理社交媒体链接和集成</p>
          </div>
          <div className="p-6">
            <form onSubmit={handleSocialSettingsSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="twitter" className="block text-sm font-medium text-gray-700 mb-1">
                    Twitter链接
                  </label>
                  <input
                    type="url"
                    id="twitter"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    value={socialSettings.twitter}
                    onChange={(e) => setSocialSettings({...socialSettings, twitter: e.target.value})}
                  />
                </div>
                
                <div>
                  <label htmlFor="facebook" className="block text-sm font-medium text-gray-700 mb-1">
                    Facebook链接
                  </label>
                  <input
                    type="url"
                    id="facebook"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    value={socialSettings.facebook}
                    onChange={(e) => setSocialSettings({...socialSettings, facebook: e.target.value})}
                  />
                </div>
                
                <div>
                  <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 mb-1">
                    Instagram链接
                  </label>
                  <input
                    type="url"
                    id="instagram"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    value={socialSettings.instagram}
                    onChange={(e) => setSocialSettings({...socialSettings, instagram: e.target.value})}
                  />
                </div>
                
                <div>
                  <label htmlFor="youtube" className="block text-sm font-medium text-gray-700 mb-1">
                    YouTube链接
                  </label>
                  <input
                    type="url"
                    id="youtube"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    value={socialSettings.youtube}
                    onChange={(e) => setSocialSettings({...socialSettings, youtube: e.target.value})}
                  />
                </div>
                
                <div>
                  <label htmlFor="discord" className="block text-sm font-medium text-gray-700 mb-1">
                    Discord链接
                  </label>
                  <input
                    type="url"
                    id="discord"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    value={socialSettings.discord}
                    onChange={(e) => setSocialSettings({...socialSettings, discord: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  保存社交媒体设置
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 