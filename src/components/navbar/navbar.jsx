import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { brand } from '../../assets';
import { Navbar as BNavbar, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavLinks } from '../../contexts';
import NavMenu from './nav-menu';

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const { links } = useNavLinks();

  function toggleMenu(e, value) {
    if (value !== undefined) {
      setShowMenu(value);
    } else {
      setShowMenu((prev) => !prev);
    }
  }

  return (
    <BNavbar
      bg='white'
      fixed='top'
      expand='lg'
      style={{ minHeight: 60, maxWidth: '100vw' }}
      className='shadow-sm'
    >
      <Container>
        <BNavbar.Brand className='p-0'>
          <Link to='/#' className='h5 m-0 text-bolder p-0 text-primary'>
            <img src={brand} alt='Courier Seven BD' height='50px' />
            Courier 007
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