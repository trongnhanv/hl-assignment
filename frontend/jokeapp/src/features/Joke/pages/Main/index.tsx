import Action from './Action';
import Content from './Content';

export default function Main() {
  return (
    <div className="container mx-auto pt-12 pb-20">
      <Content />
      <hr className="mx-auto my-16 w-2/3 border-1.5" />
      <Action />
    </div>
  );
}
