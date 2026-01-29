// DỮ LIỆU BÀI HỌC (CHUẨN SGK – ĐÃ ĐƯỢC KIỂM TRA)
const LESSONS = {
  "ds-ch1-bai1": {
    title: "Bài 1: Căn bậc hai",
    content: `
      <h3>1. Định nghĩa</h3>
      <p>Với \( a \ge 0 \), <strong>căn bậc hai số học</strong> của \( a \) là số \( x \ge 0 \) sao cho \( x^2 = a \). Kí hiệu: \( \sqrt{a} \).</p>
      
      <h3>2. Ví dụ</h3>
      <p>\( \sqrt{16} = 4 \) vì \( 4^2 = 16 \) và \( 4 \ge 0 \).</p>
      <p>\( \sqrt{0} = 0 \); \( \sqrt{1} = 1 \).</p>
      
      <h3>3. Chú ý</h3>
      <p>• Số âm không có căn bậc hai số học.<br>
         • \( \sqrt{a^2} = |a| \) với mọi số thực \( a \).</p>
      
      <h3>4. Bài tập tự luyện</h3>
      <p><strong>Câu 1:</strong> Tính: \( \sqrt{25} + \sqrt{9} \).</p>
      <p><strong>Câu 2:</strong> So sánh: \( \sqrt{8} \) và \( 3 \).</p>
      
      <h3>5. Đáp án</h3>
      <p>Câu 1: \( 5 + 3 = 8 \)<br>
         Câu 2: Vì \( \sqrt{8} \approx 2.83 < 3 \), nên \( \sqrt{8} < 3 \).</p>
    `
  },
  "ds-ch1-bai2": {
    title: "Bài 2: Căn thức bậc hai và hằng đẳng thức \( \sqrt{A^2} = |A| \)",
    content: `
      <h3>1. Điều kiện xác định</h3>
      <p>Căn thức \( \sqrt{A} \) xác định khi và chỉ khi \( A \ge 0 \).</p>
      
      <h3>2. Hằng đẳng thức</h3>
      <p>\( \sqrt{A^2} = |A| = \begin{cases}
        A & \text{nếu } A \ge 0 \\
        -A & \text{nếu } A < 0
      \end{cases} \)</p>
      
      <h3>3. Ví dụ</h3>
      <p>Tính: \( \sqrt{(x-2)^2} \) với \( x = 1 \).</p>
      <p>Giải: Vì \( x = 1 < 2 \), nên \( x - 2 = -1 < 0 \) → \( \sqrt{(x-2)^2} = |x-2| = -(x-2) = 1 \).</p>
    `
  },
  "hh-ch1-bai1": {
    title: "Bài 1: Một số hệ thức về cạnh và đường cao trong tam giác vuông",
    content: `
      <p>Cho tam giác \( ABC \) vuông tại \( A \), đường cao \( AH \). Đặt:</p>
      <ul>
        <li>\( BC = a \) (cạnh huyền)</li>
        <li>\( AB = c \), \( AC = b \)</li>
        <li>\( BH = c' \), \( CH = b' \), \( AH = h \)</li>
      </ul>
      
      <h3>Các hệ thức:</h3>
      <ol>
        <li>\( b^2 = a \cdot b' \)</li>
        <li>\( c^2 = a \cdot c' \)</li>
        <li>\( h^2 = b' \cdot c' \)</li>
        <li>\( a \cdot h = b \cdot c \)</li>
        <li>\( \dfrac{1}{h^2} = \dfrac{1}{b^2} + \dfrac{1}{c^2} \)</li>
      </ol>
      
      <h3>Ví dụ</h3>
      <p>Cho tam giác vuông có cạnh huyền \( a = 10 \), đường cao \( h = 6 \). Tính diện tích tam giác.</p>
      <p>Giải: Diện tích \( S = \dfrac{1}{2} a \cdot h = \dfrac{1}{2} \cdot 10 \cdot 6 = 30 \).</p>
    `
  },
  "de-mau-1": {
    title: "Đề thi thử vào lớp 10 – Hà Nội (2025)",
    content: `
      <h3>Phần I: Trắc nghiệm (2 điểm)</h3>
      <p><strong>Câu 1:</strong> Rút gọn: \( A = \\sqrt{48} - \\sqrt{27} + \\sqrt{12} \)</p>
      <p>A. \( 3\\sqrt{3} \) &emsp; B. \( 2\\sqrt{3} \) &emsp; C. \( \\sqrt{3} \) &emsp; D. \( 4\\sqrt{3} \)</p>
      
      <h3>Phần II: Tự luận (8 điểm)</h3>
      <p><strong>Câu 5:</strong> Cho phương trình: \( x^2 - 2(m+1)x + m^2 - 1 = 0 \)</p>
      <p>a) Giải phương trình khi \( m = 2 \).</p>
      <p>b) Tìm \( m \) để phương trình có hai nghiệm phân biệt.</p>
      
      <h3>Đáp án chi tiết</h3>
      <p><strong>Câu 1:</strong> \( A = 4\\sqrt{3} - 3\\sqrt{3} + 2\\sqrt{3} = 3\\sqrt{3} \) → Đáp án: A</p>
      <p><strong>Câu 5a:</strong> Với \( m=2 \): \( x^2 - 6x + 3 = 0 \) → \( x = 3 \pm \\sqrt{6} \)</p>
      <p><strong>Câu 5b:</strong> \( \Delta' = (m+1)^2 - (m^2 - 1) = 2m + 2 > 0 \Rightarrow m > -1 \)</p>
    `
  }
};

// Tab chuyển đổi
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('#content > section').forEach(s => s.classList.remove('active'));

    // Add active
    btn.classList.add('active');
    const tabId = btn.getAttribute('data-tab') + '-content';
    document.getElementById(tabId).classList.add('active');
  });
});

// Hiển thị bài học
function showLesson(id) {
  const lesson = LESSONS[id];
  if (!lesson) return;

  document.getElementById('lesson-title').textContent = lesson.title;
  document.getElementById('lesson-body').innerHTML = lesson.content;
  document.getElementById('lesson-detail').classList.remove('hidden');
  
  // Render công thức sau khi chèn nội dung
  setTimeout(() => {
    renderMathInElement(document.getElementById('lesson-body'));
  }, 100);
}

// Đóng bài học
function closeLesson() {
  document.getElementById('lesson-detail').classList.add('hidden');
}

// Render KaTeX an toàn
function renderMathInElement(el) {
  if (!el) return;
  const text = el.innerHTML;
  try {
    // Thay thế \$...\$ thành inline, \[...\] thành display (nếu có)
    let processed = text
      .replace(/\\\((.*?)\\\)/g, '<span class="math-inline">$1</span>')
      .replace(/\\\[(.*?)\\\]/g, '<div class="math-display">$1</div>');

    el.innerHTML = processed;

    // Render từng phần
    el.querySelectorAll('.math-inline').forEach(span => {
      try {
        span.innerHTML = katex.renderToString(span.textContent, { displayMode: false });
      } catch (e) { console.warn("KaTeX inline error:", e); }
    });
    el.querySelectorAll('.math-display').forEach(div => {
      try {
        div.innerHTML = katex.renderToString(div.textContent, { displayMode: true });
      } catch (e) { console.warn("KaTeX display error:", e); }
    });
  } catch (e) {
    console.error("Render math failed", e);
  }
}