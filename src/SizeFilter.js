import React, { Component } from 'react';
import { Dropdown } from "semantic-ui-react";

    // const { thecart } = this.props;
    const options = [
      { key: 'xs', text: 'X-Small', value: 'xs' },
      { key: 's', text: 'Small', value: 's' },
      { key: 'l', text: 'Large', value: 'l' },
    ]
      const SizeFilter = () => (
        <Dropdown placeholder='Filter by size' fluid multiple selection options={options}/>)

export default SizeFilter;
