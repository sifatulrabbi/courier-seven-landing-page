import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Navbar as BNavbar, Container, Button } from 'react-bootstrap';
import { useNavLinks } from '../../contexts';
import NavMenu from './nav-menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [animation, setAnimation] = React.useState('');
  const { links } = useNavLinks();

  function toggleMenu(e, value) {
    if (value !== undefined) {
      setShowMenu(value);
    } else {
      setShowMenu((prev) => !prev);
    }
  }

  React.useEffect(() => {
    setAnimation('on-mount 0.6s ease-out forwards');
  }, []);

  return (
    <BNavbar
      bg='white'
      fixed='top'
      expand='lg'
      style={{ minHeight: 60, maxWidth: '100vw', animation: animation }}
      className='shadow-sm'
    >
      <Container>
        <BNavbar.Brand className='p-0'>
          <Link to='/#' className='h5 m-0 text-bolder p-0 text-primary'>
            <span className='text-secondary'>Courier</span>
            <span className='text-primary'> Seven</span>
          </Link>
        </BNavbar.Brand>
        <Button
          variant='white'
          className={`shadow-0 p-0 icon-btn justify-self-end d-block d-lg-none`}
          onClick={toggleMenu}
        >
          {showMenu ? <FaTimes /> : <FaBars />}
        </Button>
        <NavMenu links={links} showMenu={showMenu} setShowMenu={setShowMenu} />
      </Container>
    </BNavbar>
  );
};

export default Navbar;
