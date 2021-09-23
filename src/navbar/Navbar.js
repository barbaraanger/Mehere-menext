import Navigation from 'react-toolbox/lib/navigation';

function Navbar() {
  return (
    <div>
      <Navigation type='horizontal' actions={actions} />
      <Navigation type='vertical'>
        <Link href='http://' label='Inbox' icon='inbox' />
        <Link href='http://' active label='Profile' icon='person' />
      </Navigation>
    </div>
  );
}


export default Navbar;
