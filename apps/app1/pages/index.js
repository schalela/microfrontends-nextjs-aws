import Link from 'next/link';

export default () => (
  <div>
    <p>This is the App 1</p>
    <p><Link href='/app2'><a>App 2</a></Link></p>
    <p><Link href='/app3'><a>App 3</a></Link></p>
  </div>
);
