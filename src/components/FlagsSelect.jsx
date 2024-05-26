import React, { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';

export default function FlagsSelect() {
  const [selected, setSelected] = useState('');

  return (
    <>
      <ReactFlagsSelect
        // className="absolute z-10 -top-10  divide-y bg-white divide-gray-100 rounded-lg shadow w-32 h-44 overflow-y-scroll mt-2 "
        selected={selected}
        onSelect={(code) => setSelected(code)}
        placeholder="Select country"
        searchable
        searchPlaceholder="search Countries"
      ></ReactFlagsSelect>
    </>
  );
}
