import React, { memo, forwardRef } from 'react';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import Box from '../../primitives/Box';
import type { ICenterProps } from './types';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const Center = (props: ICenterProps, ref: any) => {
  const reslovedProps = usePropsResolution('Center', props);
  //TODO: refactor for responsive prop
  if (useHasResponsiveProps(props)) {
    return null;
  }
  return (
    <Box
      ref={ref}
      {...reslovedProps}
      display="flex"
      alignItems="center"
      justifyContent="center"
    />
  );
};

export default memo(forwardRef(Center));
