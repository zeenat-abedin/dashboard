import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Box, Button, Typography } from '@mui/material';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const [backgroundStyle, setBackgroundStyle] = useSpring(() => ({ height: '0%' }));

  const handleIncrement = () => {
    setCount(count + 1);
    setBackgroundStyle.start({ height: `${(count + 1) * 10}%` });
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setBackgroundStyle.start({ height: `${(count - 1) * 10}%` });
    }
  };

  const handleReset = () => {
    setCount(0);
    setBackgroundStyle.start({ height: '0%' });
  };

  return (
    <Box sx={{ position: 'relative', height: '300px' }}>
      <animated.div
        style={{
          ...backgroundStyle,
          background: 'linear-gradient(to bottom, #3f51b5, #2196f3)',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}
      />
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <Typography variant="h4" gutterBottom>
          Count: {count}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" color="primary" onClick={handleIncrement}>
            Increment
          </Button>
          <Button variant="contained" color="secondary" onClick={handleDecrement} sx={{ mx: 2 }}>
            Decrement
          </Button>
          <Button variant="contained" color="inherit" onClick={handleReset}>
            Reset
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Counter;