import { createContainer } from '...';

const { getState, setState } = createContainer({
  count: 0
});