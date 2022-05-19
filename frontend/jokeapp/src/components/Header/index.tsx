import Avatar from './Avatar';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="header">
      <div className="container mx-auto">
        <div className="flex justify-between items-center p-2">
          <Logo />
          <Avatar />
        </div>
      </div>
    </header>
  );
}
