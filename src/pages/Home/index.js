import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.scss';
import { ROUTER_CONFIG } from '../../constaint/router.constaint';

function Home() {
  const navigate = useNavigate();
  return (
    <div className='home-container'>
      <h3>Phần mềm Học liệu Kỹ năng sống dành cho lứa tuổi Mầm non</h3>
      <div className='home-btn-container'>
        <button onClick={() => navigate(ROUTER_CONFIG.Pictures)}>
          Bắt đầu
        </button>
      </div>
    </div>
  );
}

export default Home;
