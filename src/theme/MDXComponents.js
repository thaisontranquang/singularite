import React from 'react';
// Importing the original mapper + our components according to the Docusaurus doc
import MDXComponents from '@theme-original/MDXComponents';
import Columns from '@site/src/components/Columns';
import Column from '@site/src/components/Column';
import Timeline from '@site/src/components/Timeline';
import TimelineItem from '@site/src/components/Timeline/TimelineItem';
export default {
  // Reusing the default mapping
  ...MDXComponents,
  Columns,
  Column,
  Timeline,
  TimelineItem,
};
