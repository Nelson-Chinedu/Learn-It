import { FunctionComponent, ReactNode } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material';

type Props = {
  children: ReactNode;
};

const Wrapper = styled(Box)({
  border: '1px solid #e3e0e0',
  padding: '10px',
  margin: '20px 10px',
  borderRadius: '4px',
});

const LineItem: FunctionComponent<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export { LineItem };
