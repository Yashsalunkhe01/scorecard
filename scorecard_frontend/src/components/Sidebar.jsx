import React from 'react';
import { FaHome, FaCalendarAlt, FaUsers, FaUser, FaTicketAlt, FaAd, FaVideo, FaUserCircle, FaEdit, FaMoneyBill, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">SPORTVOT</div>
      <nav>
        <ul>
          <li><FaHome /><span>Home</span></li>
          <li><FaCalendarAlt /><span>Tournaments</span></li>
          <li><FaUsers /><span>Teams</span></li>
          <li><FaUser /><span>Players</span></li>
          <li><FaTicketAlt /><span>Matches</span></li>
          <li><FaAd /><span>Ads/Banners</span></li>
          <li><FaVideo /><span>Moment Clipping</span></li>
          <li><FaUserCircle /><span>My Channel</span></li>
          <li><FaEdit /><span>Edit Profile</span></li>
          <li><FaMoneyBill /><span>Billing</span></li>
          <li><FaSignOutAlt /><span>Logout</span></li>
        </ul>
      </nav>
      <footer>
        <p>📧 yashsalunkhe12@gmail.com</p>
        <p>📞 +1 234 567 8901</p>
        <div className="policies">
          <a href="/">Privacy Policy</a> | <a href="/">Refund Policy</a> | <a href="/">Terms Of Use</a>
        </div>
        <p className="copyright">
          © Dravstream Technologies Pvt Ltd.
        </p>
      </footer>
    </div>
  );
};

export default Sidebar;
