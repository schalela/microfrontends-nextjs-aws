import Link from 'next/link';

export default () => (
  <div>
    <p>This is the App 3</p>
    <p><Link href='/app1'><a>App 1</a></Link></p>
    <p><Link href='/app2'><a>App 2</a></Link></p>
  </div>
);
