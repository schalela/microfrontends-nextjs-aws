import Link from 'next/link';

export default () => (
  <div>
    <p>This is the App 2</p>
    <p><Link href='/app1'><a>App 1</a></Link></p>
    <p><Link href='/app3'><a>App 3</a></Link></p>
  </div>
);
