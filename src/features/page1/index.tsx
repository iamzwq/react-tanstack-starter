export function Page1() {
  return (
    <div className="max-w-2xl">
      <h1 className="mb-4 text-2xl font-bold text-gray-800">Page 1</h1>
      <p className="mb-6 text-gray-600">这是一个简单的页面示例，用于展示路由切换效果。</p>
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <h2 className="mb-3 text-lg font-semibold text-gray-700">功能列表</h2>
        <ul className="space-y-2 text-gray-600">
          <li>• 路由导航</li>
          <li>• 页面过渡动画</li>
        </ul>
      </div>
    </div>
  );
}
