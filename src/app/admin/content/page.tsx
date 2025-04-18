"use client";

import { useState, useEffect } from "react";

interface Content {
  id: number;
  title: string;
  type: "blog" | "page" | "product";
  status: "published" | "draft" | "archived";
  author: string;
  createdAt: string;
  updatedAt: string;
}

export default function ContentPage() {
  const [contents, setContents] = useState<Content[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  
  useEffect(() => {
    // 模拟从API获取内容数据
    const fetchContents = () => {
      setTimeout(() => {
        setContents(mockContents);
        setIsLoading(false);
      }, 1000);
    };
    
    fetchContents();
  }, []);
  
  // 过滤内容
  const filteredContents = contents.filter(content => {
    const matchesSearch = content.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || content.type === selectedType;
    const matchesStatus = selectedStatus === "all" || content.status === selectedStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">内容管理</h1>
        <p className="text-gray-600">查看和管理网站内容</p>
      </div>
      
      {/* 控制面板 */}
      <div className="mb-6 bg-white p-4 rounded-lg shadow">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">搜索</label>
            <div className="relative">
              <input 
                id="search"
                type="text" 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="搜索内容..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">内容类型</label>
            <select
              id="type"
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-600 focus:border-blue-600 rounded-md"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="all">所有类型</option>
              <option value="blog">博客文章</option>
              <option value="page">页面</option>
              <option value="product">产品</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">状态</label>
            <select
              id="status"
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-600 focus:border-blue-600 rounded-md"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="all">所有状态</option>
              <option value="published">已发布</option>
              <option value="draft">草稿</option>
              <option value="archived">已归档</option>
            </select>
          </div>
          
          <div className="flex items-end">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              新建内容
            </button>
          </div>
        </div>
      </div>
      
      {/* 内容表格 */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {isLoading ? (
          <div className="p-8 flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">标题</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">状态</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">作者</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">日期</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">操作</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredContents.map((content) => (
                  <tr key={content.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{content.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        content.type === "blog" ? "bg-purple-100 text-purple-800" : 
                        content.type === "page" ? "bg-blue-100 text-blue-800" :
                        "bg-yellow-100 text-yellow-800"
                      }`}>
                        {content.type === "blog" ? "博客文章" : 
                         content.type === "page" ? "页面" : "产品"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        content.status === "published" ? "bg-green-100 text-green-800" : 
                        content.status === "draft" ? "bg-gray-100 text-gray-800" :
                        "bg-red-100 text-red-800"
                      }`}>
                        {content.status === "published" ? "已发布" : 
                         content.status === "draft" ? "草稿" : "已归档"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {content.author}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">创建: {content.createdAt}</div>
                      <div className="text-sm text-gray-500">更新: {content.updatedAt}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-2">
                        编辑
                      </button>
                      <button className="text-gray-600 hover:text-gray-900 mr-2">
                        预览
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        删除
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      
      {/* 分页 */}
      <div className="flex items-center justify-between mt-6">
        <div className="text-sm text-gray-700">
          显示 <span className="font-medium">1</span> 到 <span className="font-medium">10</span> 共 <span className="font-medium">{filteredContents.length}</span> 个内容
        </div>
        <div className="flex-1 flex justify-end">
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">上一页</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-50 text-sm font-medium text-blue-600"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              2
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              3
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">下一页</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

// 模拟内容数据
const mockContents: Content[] = [
  { id: 1, title: "JimBroAI入门指南", type: "blog", status: "published", author: "张三", createdAt: "2023-01-15", updatedAt: "2023-01-15" },
  { id: 2, title: "如何利用AI提高工作效率", type: "blog", status: "published", author: "李四", createdAt: "2023-02-20", updatedAt: "2023-02-25" },
  { id: 3, title: "关于我们", type: "page", status: "published", author: "张三", createdAt: "2023-03-05", updatedAt: "2023-03-10" },
  { id: 4, title: "JimBroAI高级技巧", type: "blog", status: "draft", author: "王五", createdAt: "2023-03-12", updatedAt: "2023-03-15" },
  { id: 5, title: "联系我们", type: "page", status: "published", author: "张三", createdAt: "2023-03-20", updatedAt: "2023-03-20" },
  { id: 6, title: "JimBroAI Pro会员", type: "product", status: "published", author: "赵六", createdAt: "2023-04-01", updatedAt: "2023-04-05" },
  { id: 7, title: "AI与未来工作", type: "blog", status: "draft", author: "王五", createdAt: "2023-04-10", updatedAt: "2023-04-12" },
  { id: 8, title: "服务条款", type: "page", status: "published", author: "张三", createdAt: "2023-04-20", updatedAt: "2023-04-22" },
  { id: 9, title: "JimBroAI Enterprise企业版", type: "product", status: "draft", author: "赵六", createdAt: "2023-05-05", updatedAt: "2023-05-10" },
  { id: 10, title: "2023年AI技术趋势", type: "blog", status: "archived", author: "李四", createdAt: "2023-01-10", updatedAt: "2023-05-15" }
]; 