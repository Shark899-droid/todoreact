import React from 'react';
import './Header.css';

const Header = ({ items }) => {
  return (
    <header>
      <div className='headerLeft'>
        <img
          src='https://th.bing.com/th/id/R.e11c4f3366fc3dd5db332a12aa3b6c5a?rik=uTzye2fU0AYGTQ&pid=ImgRaw&r=0'
          alt='avatar'
        />
        <div className='headerLeft__right'>
          <h3>Hi Shobhit</h3>
          <h3 className='tasks'>{items.length} tasks pending</h3>
        </div>
      </div>
      <h1>TaskDo</h1>
      <h3 className='logOut'>Logout</h3>
    </header>
  );
};

export default Header;
