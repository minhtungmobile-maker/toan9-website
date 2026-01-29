/**
 * katex-render.js
 * Phiên bản thực tế – triển khai cho ứng dụng Toán 9 (SGK Việt Nam)
 * Yêu cầu: KaTeX CDN đã được load trước
 */

// Kiểm tra KaTeX đã sẵn sàng
if (typeof katex === 'undefined') {
  console.error('❌ KaTeX chưa được tải. Vui lòng thêm CDN vào <head>.');
}

/**
 * Render công thức Toán trong một phần tử HTML
 * @param {HTMLElement} container - Phần tử chứa nội dung cần render
 */
function renderMathInElement(container) {
  if (!container || typeof katex === 'undefined') return;

  // Bước 1: Tìm tất cả đoạn văn bản có thể chứa công thức
  const walker = document.createTreeWalker(
    container,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );

  const textNodes = [];
  let node;
  while (node = walker.nextNode()) {
    // Chỉ xử lý nếu có dấu hiệu của công thức LaTeX
    if (node.textContent.includes('\\(') || node.textContent.includes('\\[')) {
      textNodes.push(node);
    }
  }

  // Bước 2: Xử lý từng node
  textNodes.forEach(textNode => {
    const text = textNode.textContent;
    let processed = text;

    // Xử lý display math: \[ ... \]
    processed = processed.replace(/\\\[(.*?)\\\]/gs, (match, content) => {
      try {
        return katex.renderToString(content.trim(), {
          displayMode: true,
          throwOnError: false,
          errorColor: '#ff6b6b',
          maxSize: 20,
          output: 'html'
        });
      } catch (e) {
        console.warn('KaTeX display error:', e.message);
        return `<span style="color:red; font-family:monospace">[Lỗi CT: ${content}]</span>`;
      }
    });

    // Xử lý inline math: \( ... \)
    processed = processed.replace(/\\\((.*?)\\\)/gs, (match, content) => {
      try {
        return katex.renderToString(content.trim(), {
          displayMode: false,
          throwOnError: false,
          errorColor: '#ff6b6b',
          maxSize: 15,
          output: 'html'
        });
      } catch (e) {
        console.warn('KaTeX inline error:', e.message);
        return `<span style="color:red; font-family:monospace">[CT]</span>`;
      }
    });

    // Chỉ thay thế nếu có thay đổi
    if (processed !== text) {
      const span = document.createElement('span');
      span.innerHTML = processed;
      textNode.parentNode.replaceChild(span, textNode);
    }
  });
}

/**
 * Render toàn bộ trang (gọi sau khi DOM sẵn sàng)
 */
function renderAllMath() {
  renderMathInElement(document.body);
}

// Tự động render khi DOM đã load xong
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderAllMath);
} else {
  renderAllMath();
}

// Xuất hàm để dùng lại (nếu cần gọi thủ công sau khi load nội dung mới)
window.renderMathInElement = renderMathInElement;