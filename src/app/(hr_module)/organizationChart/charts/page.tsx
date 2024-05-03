'use client';
import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import { users } from './data.js';
import Avatar from './avatar';

const data = {
  name: 'CEO',
  children: [
    {
      name: 'Manager 1',
      children: [{ name: 'Employee 1' }, { name: 'Employee 2' }],
    },
    {
      name: 'Manager 2',
      children: [{ name: 'Employee 3' }, { name: 'Employee 4' }],
    },
  ],
};

const ExampleTree = () => (
  <>
    {/* <Tree label={<Avatar src={users[0].avatar} />}>
      <TreeNode label={<Avatar src={users[0].avatar} />}>
        <TreeNode label={<Avatar src={users[0].avatar} />} />
        <TreeNode label={<Avatar src={users[0].avatar} />} />
      </TreeNode>
      <TreeNode label={<Avatar src={users[0].avatar} />}></TreeNode>
    </Tree> */}
    <div>Organization Chart</div>
  </>
);
export default ExampleTree;
