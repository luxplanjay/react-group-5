import React from 'react';
import ProductList from './ProductList';
import Panel from './Panel';
import ProfileDetails from './ProfileDetails';
import Mailbox from './Mailbox';
import Dropdown from './Dropdown';
import TechList from './TechList';
import products from '../products.json';

const technologies = [
  { id: 'id-1', name: 'JS' },
  { id: 'id-2', name: 'React' },
  { id: 'id-3', name: 'React Router' },
  { id: 'id-4', name: 'Redux' },
];

const App = () => (
  <div>
    <TechList items={technologies} />

    <Dropdown isOpen={true} />

    <Mailbox unreadMessages={[1, 2, 3]} />

    <Panel title="Some title">
      <ProfileDetails name="Mango" email="mango@mail.com" />
    </Panel>

    <Panel title="Top Products">
      <ProductList items={products} />
    </Panel>
  </div>
);

export default App;
