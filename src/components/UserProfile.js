import React from 'react';
import Button from './shared/Button';

const UserProfile = ({ user, onLogOut }) => (
  <div>
    <p>User Profile!!!</p>
    <Button label="Log Out" onClick={onLogOut} />
  </div>
);

export default UserProfile;
