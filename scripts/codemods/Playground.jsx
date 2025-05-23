import React from "react";
import Select from '@/components/Select/Select';

let optionsArr = [
  { valueSelect: "jack", labelSelect: "Jack" },
  { valueSelect: "lucy", labelSelect: "Lucy" },
  { valueSelect: "Yiminghe", labelSelect: "yiminghe" },
];

const Playground = () => {
  const [value, setValue] = React.useState('react');
  return (
    <div>
      <Select
        value={value}
        defaultValue='lucy'
        options={optionsArr}
        onValueChange={setValue}
        placeholder='Choose a framework' />
    </div>
  );
};

export default Playground;
