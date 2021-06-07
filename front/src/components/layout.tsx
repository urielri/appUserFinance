function Layout(props: { children: JSX.Element | JSX.Element[] }): JSX.Element {
  const { children } = props;
  return (
    <div className="container">
      <div className="content">{children}</div>
    </div>
  );
}
export default Layout;
