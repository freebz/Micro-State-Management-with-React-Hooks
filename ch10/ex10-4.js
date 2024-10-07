const useFirstName = () => {
  const [{ firstName }] = useTracked();
  return firstName;
};