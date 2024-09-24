if (action.type === "INC_BOTH") {
  return {
    ...prev,
    count1: prev.count1 + 1,
    count2: prev.count2 + 1,
  };
}