import React from 'react';
// import ProductList from './ProductList';
// import Panel from './Panel';
import Dropdown from './Dropdown/Dropdown';
// import Button from './Button/Button';
// import products from '../products.json';

const App = () => (
  <div>
    {/* <Button
      label="Click me!"
      icon="https://avatars2.githubusercontent.com/u/39895671?s=400&v=4"
      // disabled
    /> */}

    <Dropdown isOpen />

    {/* <Panel title="Top Products">
      <ProductList items={products} />
    </Panel> */}
  </div>
);

export default App;
