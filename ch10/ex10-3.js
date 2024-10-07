const useFirstName = () => {
  const [{ firstName }] = useContext(NameContext);
  return firstName;
};