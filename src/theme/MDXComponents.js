import React from 'react';

// Importing the original mapper + our components according to the Docusaurus doc
import MDXComponents from '@theme-original/MDXComponents';
import Columns from '@site/src/components/Columns';
import Column from '@site/src/components/Column';
import Timeline from '@site/src/components/Timeline';
import TimelineItem from '@site/src/components/Timeline/TimelineItem';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Tooltip from '@site/src/components/Tooltip';

export default {
  ...MDXComponents,
  Columns,
  Column,
  Timeline,
  TimelineItem,
  Tabs,
  TabItem,
  Tooltip,
};
