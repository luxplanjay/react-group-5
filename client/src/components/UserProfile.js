import React from 'react';
import Button from './shared/Button';

const UserProfile = ({ user, onLogOut }) => (
  <div>
    <h1>{user.name}</h1>
    <Button label="Log Out" onClick={onLogOut} />
  </div>
);

export default UserProfile;
