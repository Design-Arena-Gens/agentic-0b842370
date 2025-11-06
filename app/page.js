'use client'
import { useState } from 'react'
import './styles.css'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', phone: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">GEELY AN GIANG</div>
          <nav className="nav">
            <a href="#about">Giới thiệu</a>
            <a href="#products">Sản phẩm</a>
            <a href="#contact">Liên hệ</a>
          </nav>
          <a href="tel:0939681703" className="btn-contact">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Gọi ngay
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="hero-text">
            <h1>Nguyễn Phước Thành</h1>
            <p className="title">Chuyên viên kinh doanh xe Geely An Giang</p>
            <p className="subtitle">
              Tư vấn nhiệt tình - Dịch vụ tận tâm<br/>
              Hỗ trợ khách hàng lựa chọn xe Geely phù hợp nhất
            </p>
            <div className="hero-buttons">
              <a href="https://zalo.me/0939681703" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 2.237.739 4.304 1.988 5.976L2.02 21.988l4.012-1.968C7.696 21.261 9.763 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
                </svg>
                Chat Zalo
              </a>
              <a href="tel:0939681703" className="btn-secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                0939 681 703
              </a>
            </div>
            <div className="contact-info">
              <div className="info-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                10/18 Trần Hưng Đạo, Mỹ Thới, An Giang
              </div>
              <div className="info-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                phuocthanh120696@gmail.com
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>Giới thiệu</h2>
          <div className="about-content">
            <div className="about-card">
              <div className="icon-box">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3>Chuyên nghiệp</h3>
              <p>Với kinh nghiệm trong lĩnh vực kinh doanh xe hơi, tôi luôn đặt quyền lợi khách hàng lên hàng đầu.</p>
            </div>
            <div className="about-card">
              <div className="icon-box">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3>Tận tâm</h3>
              <p>Tư vấn chi tiết, hỗ trợ tài chính, và đồng hành cùng khách hàng trong suốt quá trình mua xe.</p>
            </div>
            <div className="about-card">
              <div className="icon-box">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 11l3 3L22 4"></path>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
              </div>
              <h3>Uy tín</h3>
              <p>Làm việc tại Geely An Giang - đại lý chính thức với đầy đủ chính sách bảo hành và hậu mãi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="products">
        <div className="container">
          <h2>Sản phẩm nổi bật</h2>
          <p className="section-subtitle">Dòng xe Geely cao cấp, hiện đại, phù hợp với mọi nhu cầu</p>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image coolray"></div>
              <div className="product-info">
                <h3>Geely Coolray</h3>
                <p className="product-price">Từ 599 triệu đồng</p>
                <p className="product-desc">SUV cỡ B thể thao, động cơ 1.5L Turbo, công nghệ thông minh</p>
                <ul className="product-specs">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    Động cơ 1.5L Turbo - 177PS
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    </svg>
                    7 túi khí an toàn
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    Màn hình 10.25 inch
                  </li>
                </ul>
                <a href="https://zalo.me/0939681703" target="_blank" rel="noopener noreferrer" className="btn-product">Tư vấn ngay</a>
              </div>
            </div>

            <div className="product-card featured">
              <div className="badge">Phổ biến</div>
              <div className="product-image monjaro"></div>
              <div className="product-info">
                <h3>Geely Monjaro</h3>
                <p className="product-price">Từ 979 triệu đồng</p>
                <p className="product-desc">SUV hạng D cao cấp, rộng rãi, sang trọng, công nghệ dẫn đầu</p>
                <ul className="product-specs">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    Động cơ 2.0L Turbo - 238PS
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    </svg>
                    6 túi khí + rèm khí
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    Màn hình 12.3 inch kép
                  </li>
                </ul>
                <a href="https://zalo.me/0939681703" target="_blank" rel="noopener noreferrer" className="btn-product">Tư vấn ngay</a>
              </div>
            </div>

            <div className="product-card">
              <div className="badge green">Xe điện</div>
              <div className="product-image ex5"></div>
              <div className="product-info">
                <h3>Geely EX5</h3>
                <p className="product-price">Từ 849 triệu đồng</p>
                <p className="product-desc">SUV điện thông minh, thân thiện môi trường, tiết kiệm chi phí</p>
                <ul className="product-specs">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                    </svg>
                    100% xe điện - 0 khí thải
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    Quãng đường 440km
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    Sạc nhanh 30 phút (80%)
                  </li>
                </ul>
                <a href="https://zalo.me/0939681703" target="_blank" rel="noopener noreferrer" className="btn-product">Tư vấn ngay</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Tư vấn & Liên hệ</h2>
          <p className="section-subtitle">Để lại thông tin, tôi sẽ liên hệ tư vấn chi tiết trong thời gian sớm nhất</p>
          <div className="contact-grid">
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Họ và tên *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Nhập họ tên của bạn"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Số điện thoại *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Nhập số điện thoại"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Nội dung</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Xe bạn quan tâm, câu hỏi cần tư vấn..."
                  ></textarea>
                </div>
                <button type="submit" className="btn-submit">
                  {submitted ? 'Đã gửi!' : 'Gửi thông tin'}
                </button>
                {submitted && <p className="success-message">Cảm ơn bạn! Tôi sẽ liên hệ sớm nhất.</p>}
              </form>
            </div>
            <div className="contact-details">
              <div className="detail-card">
                <div className="detail-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4>Điện thoại</h4>
                  <a href="tel:0939681703">0939 681 703</a>
                </div>
              </div>
              <div className="detail-card">
                <div className="detail-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 2.237.739 4.304 1.988 5.976L2.02 21.988l4.012-1.968C7.696 21.261 9.763 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
                  </svg>
                </div>
                <div>
                  <h4>Zalo</h4>
                  <a href="https://zalo.me/0939681703" target="_blank" rel="noopener noreferrer">Chat với tôi</a>
                </div>
              </div>
              <div className="detail-card">
                <div className="detail-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:phuocthanh120696@gmail.com">phuocthanh120696@gmail.com</a>
                </div>
              </div>
              <div className="detail-card">
                <div className="detail-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4>Showroom</h4>
                  <p>Geely An Giang<br/>10/18 Trần Hưng Đạo, Mỹ Thới, An Giang</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <h3>Nguyễn Phước Thành</h3>
              <p>Chuyên viên kinh doanh xe Geely An Giang</p>
            </div>
            <div className="footer-contact">
              <p>© 2024 Geely An Giang. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="floating-buttons">
        <a href="https://zalo.me/0939681703" target="_blank" rel="noopener noreferrer" className="fab zalo" title="Chat Zalo">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 2.237.739 4.304 1.988 5.976L2.02 21.988l4.012-1.968C7.696 21.261 9.763 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
          </svg>
        </a>
        <a href="tel:0939681703" className="fab phone" title="Gọi điện">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </a>
      </div>
    </div>
  )
}
